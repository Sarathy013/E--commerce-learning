import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from 'recharts';

const data = [
  { name: 'Week 1', attendance: 90, quiz: 70 },
  { name: 'Week 2', attendance: 92, quiz: 80 },
  { name: 'Week 3', attendance: 91, quiz: 75 },
  { name: 'Week 4', attendance: 93, quiz: 85 },
];

const Card = ({ title, subtitle, description, buttonText, onClick }) => (
  <motion.div 
    className="rounded-xl bg-white shadow-md hover:shadow-xl p-6 transition-all cursor-pointer border border-gray-200 hover:border-blue-400"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-semibold text-blue-600 mb-1">{title}</h3>
    <p className="text-gray-700 text-sm">{subtitle}</p>
    {description && <p className="text-xs text-gray-500 mt-2">{description}</p>}
    {buttonText && (
      <button 
        onClick={onClick}
        className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition"
      >
        {buttonText}
      </button>
    )}
  </motion.div>
);

const StudentDashboard = () => {
  const [learnerMode, setLearnerMode] = useState('slow');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-white p-4 overflow-hidden">
      <motion.nav 
        className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4">
          <img src="../src/assets/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl font-bold text-blue-600">Student Dashboard</h1>
        </div>
      </motion.nav>

      <div className="flex flex-col md:flex-row gap-6">
        <motion.aside 
          className="w-full md:w-1/4 bg-white p-6 rounded-xl shadow-md h-fit"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto bg-blue-500 rounded-full text-white flex items-center justify-center text-2xl font-bold animate-pulse">S</div>
            <h2 className="text-xl font-semibold mt-3">SARATHY</h2>
           
          </div>
          <nav>
            <ul className="space-y-3 text-sm">
              {[ 
                { label: 'Dashboard', emoji: '🚀' },
                { label: 'Course', emoji: '📚', route: '/courses' },
                { label: 'Notes', emoji: '📝', route: '/notes' },
                { label: 'Syllabus', emoji: '📋', route: '/syllabus' },
                { label: 'Exam Schedule', emoji: '📅', route: '/exam-schedule' },
                { label: 'Video Library', emoji: '🎬', route: '/videolibrary' },
                { label: 'Video Recommender', emoji: '🔎', route: '/videorecommender' },
                { label: 'Discussion', emoji: '💬', route: '/discussion' },
                { label: 'Settings', emoji: '⚙️', route: '/settings' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => item.route && navigate(item.route)}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${!item.route ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                  >
                    <span>{item.emoji}</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </motion.aside>

        <main className="flex-1 space-y-6">
          <motion.section 
            className="bg-white rounded-xl shadow-md p-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-700">Welcome Back, SARATHY</h2>
              <span className="text-sm text-green-600 font-medium">Attendance: 92%</span>
            </div>
            <p className="text-gray-600 mb-6">
              Your next class is <strong className="text-blue-600">Computer Networks</strong> at 11:00 AM.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card 
                title="Upcoming Quiz"
                subtitle="Computer Networks - Unit 3"
                description="Date: Apr 10, 2025"
                buttonText="Prepare Now"
              />
              <Card 
                title="Assignment Due"
                subtitle="DBMS Lab - Problem Set 4"
                description="Deadline: Apr 8, 2025"
                buttonText="Complete"
              />
              <Card 
                title="Progress"
                subtitle="ECE431: 78% | ECE422: 65%"
                buttonText="View All"
              />
            </div>
          </motion.section>

          <motion.section 
            className="bg-white rounded-xl shadow-md p-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Performance Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-blue-600 font-semibold mb-2">Attendance Over Time</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="attendance" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-blue-600 font-semibold mb-2">Quiz Scores</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="quiz" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.section>

          <motion.section 
            className="bg-white rounded-xl shadow-md p-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Notes</h3>
            <div className="flex gap-4 mb-4">
              {['slow', 'fast'].map(mode => (
                <button
                  key={mode}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    learnerMode === mode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                  onClick={() => setLearnerMode(mode)}
                >
                  {mode === 'slow' ? 'Slow Learner Mode' : 'Fast Learner Mode'}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={learnerMode}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-blue-50 border-l-4 border-blue-600 px-4 py-3 rounded mb-6"
              >
                <p className="text-gray-700 text-sm">
                  {learnerMode === 'slow'
                    ? 'Slow Learner Mode: Detailed notes with step-by-step explanations, visual aids, and practice examples.'
                    : 'Fast Learner Mode: Concise notes with summaries, revision guides, and MCQ practice sets.'}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card 
                title="Computer Networks"
                subtitle="Detailed explanation of OSI model with examples"
              />
              <Card 
                title="DBMS Fundamentals"
                subtitle="Step-by-step SQL query building with visualization"
              />
              <Card 
                title="Signal Processing"
                subtitle="Simplified approach to Fourier Transforms with examples"
              />
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
