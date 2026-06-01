import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        fetchProfile(session.user.id, session.user.email)
      }
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        fetchProfile(session.user.id, session.user.email)
      } else {
        setUser(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchProfile = async (id, email) => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single()

    if (data) {
      setUser({ id, email, name: data.full_name, role: data.role })
    }
  }

  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.log('Login error:', error.message)
      return false
    }
    return true
  }

  const register = async (name, email, password, role) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) {
      console.log('Signup error:', error.message, error.status)
      alert('Error: ' + error.message)
      return false
    }
    if (!data.user) {
      console.log('No user returned')
      return false
    }

    const { error: profileError } = await supabase
      .from('profiles')
      .insert({ id: data.user.id, full_name: name, role })

    if (profileError) {
      console.log('Profile error:', profileError.message)
      return false
    }
    return true
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
