import CourseSection from "../../components/CourseSection/CourseSection.jsx";
import softwareCourses from "../../data/softwareCourses";

const Home = () => {
  return (
    <>
      {softwareCourses.map((course, index) => (
        <CourseSection
          key={course.courseId}
          {...course}
          ltr={index % 2 === 0}
        ></CourseSection>
      ))}
    </>
  );
};

export default Home;
