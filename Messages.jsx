import { useNavigate, Link } from 'react-router-dom'
import { Award, Briefcase, Users, TrendingUp, CircleCheckBig } from 'lucide-react'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Hero */}
        <div
          className="text-white p-6 pb-12"
          style={{
            backgroundImage: "linear-gradient(rgba(15,30,100,0.55), rgba(15,30,100,0.55)), url('/src/assets/hero.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '320px',
          }}
        >
          <div className="text-center pt-8">
            <h1 className="text-2xl mb-2"></h1>
            <p className="text-sm text-blue-100 mb-6">
              Bridge the gap between education and employment with our comprehensive training and certification platform
            </p>
            <div className="flex gap-3 justify-between px-4 mt-8">
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-2.5 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/register')}
                className="px-6 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-lg border border-white/30 hover:bg-white/30 transition-colors"
              >
                Register
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 -mt-6">
          {/* Platform Features */}
          <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
            <h3 className="text-sm mb-3">Platform Features</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-xs">ICDL & CompTIA Certifications</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Briefcase className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-xs">Job Market Access</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-xs">Expert Mentorship</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-xs">Career Growth</p>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="bg-card rounded-xl border border-border p-4 mb-6">
            <h3 className="text-sm mb-3">Our Impact</h3>
            <div className="space-y-3">
              {[
                { label: 'Students Enrolled', value: '3,847' },
                { label: 'Certifications Awarded', value: '1,599' },
                { label: 'Job Placements', value: '342' },
                { label: 'Partner Employers', value: '28' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-lg">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card rounded-xl border border-border p-4 mb-6">
            <h3 className="text-sm mb-3">Certifications We Offer</h3>
            <div className="space-y-2">
              {['ICDL Base Certificate', 'ICDL Advanced', 'CompTIA A+', 'CompTIA Network+', 'CompTIA Security+'].map((cert, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-secondary rounded-lg">
                  <CircleCheckBig className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center mb-6">
            <h3 className="text-lg mb-2">Ready to Start Your Journey?</h3>
            <p className="text-sm text-green-100 mb-4">
              Join thousands of Ugandans building successful tech careers
            </p>
            <button
              onClick={() => navigate('/register')}
              className="w-full bg-white text-green-700 py-3 rounded-lg hover:bg-green-50 transition-colors"
            >
              Get Started Today
            </button>
          </div>
        </div>

        <div className="p-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground mb-2">
            Supported by Uganda Ministry of Education &amp; Skills Development
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 Skill Bridge Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
