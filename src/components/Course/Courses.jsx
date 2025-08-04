import React from "react";
import "./Courses.css";
import { useNavigate } from "react-router-dom";

const courses = [ 
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn the basics of React.js and build interactive UIs.",
    image: "https://www.svgrepo.com/show/452092/react.svg"
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into JS concepts, ES6+, and async patterns.",
    image: "https://www.svgrepo.com/show/349419/javascript.svg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Design user-centric interfaces using modern tools.",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
  },
  {
    id: 4,
    title: "Full Stack Development",
    description: "Become full stack web developer using MERN stack.",
    image: "https://cdn-icons-png.flaticon.com/512/5047/5047036.png",
  },
];

const CoursePage = () => {
  return (
    <div className="course-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Courses</h1>
        <ul>
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h2>Explore Our Courses</h2>
        <p>
          Learn new skills, upgrade your career, and explore our hand-picked selection of top courses.
        </p>
      </header>

      {/* Course Cards */}
      <section className="grid">
        {courses.map((course) => (
          <div key={course.id} className="card">
            <img src={course.image} alt={course.title} />
            <div className="card-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button>Enroll Now</button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 MyCourses. All rights reserved.
      </footer>
    </div>
  );
};

export default CoursePage;