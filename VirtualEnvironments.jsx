import { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import RoleSwitcher from '../components/RoleSwitcher'
import AIChat from '../components/AIChat'

const tabRoutes = {
  dashboard: '/dashboard/jobs',
  jobs: '/dashboard/jobs',
  assessments: '/dashboard/assessments',
  certifications: '/dashboard/certifications',
  portals: '/dashboard/portals',
  virtual: '/dashboard/virtual',
  messages: '/dashboard/messages',
  settings: '/dashboard/settings',
}

export default function DashboardLayout() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false)
  const [role, setRole] = useState(user?.role || 'student')

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      navigate('/dashboard/jobs')
    }
  }, [location, navigate])

  const activeTab = location.pathname.split('/')[2] || 'jobs'

  const handleTabChange = (tab) => {
    navigate(tabRoutes[tab] || '/dashboard/jobs')
  }

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      <Header
        role={role}
        onMenuClick={() => setSidebarOpen(true)}
        onRoleChange={() => setRoleSwitcherOpen(true)}
      />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <RoleSwitcher
        isOpen={roleSwitcherOpen}
        onClose={() => setRoleSwitcherOpen(false)}
        currentRole={role}
        onRoleChange={setRole}
      />
      <main>
        <Outlet />
      </main>
      <AIChat />
    </div>
  )
}
