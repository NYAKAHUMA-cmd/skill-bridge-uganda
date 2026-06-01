import { X, House, Briefcase, FileCheck, Award, Building2, Cloud, MessageSquare, Settings, Wifi } from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: House },
  { id: 'jobs', label: 'Job Market Feed', icon: Briefcase },
  { id: 'assessments', label: 'Practical Assessments', icon: FileCheck },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'portals', label: 'Portals', icon: Building2 },
  { id: 'virtual', label: 'Virtual Environments', icon: Cloud },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export default function Sidebar({ isOpen, onClose, activeTab, onTabChange }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="text-lg">Skill Bridge Uganda</h2>
            <p className="text-xs text-muted-foreground">v2.0.1</p>
          </div>
          <button onClick={onClose} className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => { onTabChange(item.id); onClose() }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-secondary text-foreground'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-secondary/30">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </>
  )
}
