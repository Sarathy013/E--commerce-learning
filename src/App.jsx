import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login.jsx";
import Dashboard from "./components/dashbord/dashbord.jsx";
import CoursePage from "./components/Course/Courses.jsx";
import Syllabus from "./components/Syllabus.jsx";
import ExamSchedule from "./components/ExamSchedule.jsx";
import Notes from "./components/Notes/Notes.jsx";
import VideoLibrary from "./components/VideoLibrary.jsx";
import Discussion from "./components/Discussion.jsx";
import  Settings from "./components/Settings.jsx";
import VideoRecommender from "./components/VideoRecommender.jsx";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/exam-schedule" element={<ExamSchedule />} />
        <Route path="/videolibrary" element={<VideoLibrary />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/videolibrary" element={<VideoLibrary />} />
        <Route path="/videorecommender" element={<VideoRecommender />} />
        
      </Routes>
    </Router>
  );
};

export default App;