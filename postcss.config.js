// Portals.jsx
export function Portals() {
  const portals = [
    { id: 1, name: 'ICDL Testing Center Portal', description: 'Access exam schedules, book slots, and view results', status: 'active', lastAccessed: '2 hours ago', icon: '📝', url: 'icdl.uganda.edu' },
    { id: 2, name: 'CompTIA Certification Portal', description: 'Register for exams and download certificates', status: 'active', lastAccessed: '1 day ago', icon: '🎓', url: 'comptia.org/certifications' },
    { id: 3, name: 'University Banking Portal', description: 'Check bursary status and payment records', status: 'active', lastAccessed: '3 days ago', icon: '🏦', url: 'banking.ugandauniversity.ac.ug' },
    { id: 4, name: 'Job Application Portal', description: 'Track your job applications and interview schedules', status: 'active', lastAccessed: '5 hours ago', icon: '💼', url: 'jobs.skillbridge.ug' },
    { id: 5, name: 'E-Library', description: 'Access digital study materials and resources', status: 'active', lastAccessed: '1 hour ago', icon: '📚', url: 'library.skillbridge.ug' },
    { id: 6, name: 'Student Finance Portal', description: 'Manage fees and financial aid applications', status: 'maintenance', lastAccessed: '1 week ago', icon: '💰', url: 'finance.ugandauniversity.ac.ug' },
  ]

  return (
    <div className="p-4 space-y-4 pb-24">
      <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl p-5 text-white">
        <h2 className="text-xl mb-1">Portals</h2>
        <p className="text-sm text-slate-200">Quick access to external systems</p>
      </div>

      <div className="space-y-3">
        {portals.map((portal) => (
          <div key={portal.id} className="bg-card rounded-xl border border-border p-4">
            <div className="flex gap-3 mb-3">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                {portal.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm">{portal.name}</h4>
                  {portal.status === 'active'
                    ? <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Active</span>
                    : <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Maintenance</span>
                  }
                </div>
                <p className="text-xs text-muted-foreground mb-1">{portal.description}</p>
                <p className="text-xs text-blue-600">{portal.url}</p>
              </div>
            </div>
            <button
              disabled={portal.status === 'maintenance'}
              className={`w-full py-2.5 rounded-lg text-sm transition-colors ${
                portal.status === 'active'
                  ? 'bg-slate-700 text-white hover:bg-slate-800'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {portal.status === 'active' ? 'Open Portal ↗' : 'Under Maintenance'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portals
