import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import CourseSection from "./components/CourseSection/CourseSection.jsx";
import softwareCourses from "./data/softwareCourses";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      {softwareCourses.map((course, index) => (
        <CourseSection {...course} ltr={index % 2 === 0}></CourseSection>
      ))}
      <ul>
        <li>
          <Link to="Courses">Courses page</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
