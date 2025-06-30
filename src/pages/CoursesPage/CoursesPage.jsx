import CourseGrid from "../../components/CourseGrid/CourseGrid.jsx";
import softwareCourses from "../../data/softwareCourses";
import { useRef, useEffect } from "react";

function CoursesPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div ref={sectionRef}>
      <CourseGrid courseCollection={softwareCourses} />
    </div>
  );
}

export default CoursesPage;
