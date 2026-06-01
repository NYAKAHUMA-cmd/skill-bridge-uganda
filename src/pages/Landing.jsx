import React from 'react'
import { ArrowRight, Briefcase, BookOpen, Award, Users, Zap, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-indigo-600">🎓 SkillBridge Uganda</div>
        <div className="flex gap-4">
          <Link to="/login" className="px-6 py-2 text-gray-700 hover:text-indigo-600 font-medium">
            Login
          </Link>
          <Link to="/register" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Empowering Skills, <span className="text-indigo-600">Unlocking Futures</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A comprehensive learning platform connecting students, teachers, employers, and institutions to bridge the skills gap and create employment opportunities.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/register" className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold flex items-center gap-2">
            Start Learning <ArrowRight size={20} />
          </Link>
          <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 font-semibold">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Job Feed */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Job Feed</h3>
            <p className="text-gray-600">Find jobs matched to your skills and track. Get personalized recommendations based on your learning progress.</p>
          </div>

          {/* Assessments */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Assessments</h3>
            <p className="text-gray-600">Complete assignments, track progress, and get feedback from instructors. Master practical skills through hands-on projects.</p>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Certifications</h3>
            <p className="text-gray-600">Earn verified credentials and showcase your achievements. Build a portfolio that employers recognize and value.</p>
          </div>

          {/* Courses & Portals */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-orange-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Learning Portals</h3>
            <p className="text-gray-600">Access curated learning paths and courses. Join cohorts with mentorship from industry professionals.</p>
          </div>

          {/* Virtual Environments */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-red-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Virtual Labs</h3>
            <p className="text-gray-600">Code and experiment in secure, isolated environments. Get instant feedback on your programming assignments.</p>
          </div>

          {/* Messaging */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="text-pink-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Messages & Chat</h3>
            <p className="text-gray-600">Connect with mentors, teachers, and peers. Get real-time support and collaboration opportunities.</p>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-12">For Everyone</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">👨‍🎓</div>
            <h3 className="text-xl font-bold mb-2">Students</h3>
            <p className="text-gray-600">Learn, practice, earn certifications, and land your dream job</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-bold mb-2">Teachers</h3>
            <p className="text-gray-600">Create courses, manage assignments, and mentor students</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2">Employers</h3>
            <p className="text-gray-600">Find skilled talent and post job opportunities</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-xl font-bold mb-2">Universities</h3>
            <p className="text-gray-600">Manage programs, track outcomes, and connect with industry</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
        <p className="text-lg text-gray-600 mb-8">Join thousands of learners already growing their skills on SkillBridge</p>
        <Link to="/register" className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold inline-flex items-center gap-2">
          Get Started for Free <ArrowRight size={20} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 SkillBridge Uganda. Empowering Skills, Unlocking Futures.</p>
        </div>
      </footer>
    </div>
  )
}
