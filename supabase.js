import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardLayout from './pages/DashboardLayout'
import JobsFeed from './pages/dashboard/JobsFeed'
import Assessments from './pages/dashboard/Assessments'
import Certifications from './pages/dashboard/Certifications'
import Portals from './pages/dashboard/Portals'
import VirtualEnvironments from './pages/dashboard/VirtualEnvironments'
import Messages from './pages/dashboard/Messages'
import Settings from './pages/dashboard/Settings'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="jobs" element={<JobsFeed />} />
            <Route path="assessments" element={<Assessments />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="portals" element={<Portals />} />
            <Route path="virtual" element={<VirtualEnvironments />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
