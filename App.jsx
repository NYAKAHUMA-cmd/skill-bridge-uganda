import { X, Check } from 'lucide-react'

const roles = [
  { id: 'student', label: 'Student', color: 'bg-blue-500', description: 'Access courses, certifications, and jobs' },
  { id: 'teacher', label: 'Teacher / Lecturer', color: 'bg-green-500', description: 'Manage students and assessments' },
  { id: 'employer', label: 'Employer', color: 'bg-orange-500', description: 'Post jobs and find talent' },
  { id: 'university', label: 'University Admin', color: 'bg-slate-700', description: 'Platform overview and system management' },
]

export default function RoleSwitcher({ isOpen, onClose, currentRole, onRoleChange }) {
  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl z-50 max-w-md mx-auto">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h3 className="text-lg">Switch Role</h3>
          <button onClick={onClose} className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 space-y-3">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => { onRoleChange(r.id); onClose() }}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                currentRole === r.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 ${r.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                  <span className="text-lg">{r.label[0]}</span>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm">{r.label}</h4>
                    {currentRole === r.id && <Check className="w-5 h-5 text-primary" />}
                  </div>
                  <p className="text-xs text-muted-foreground">{r.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
