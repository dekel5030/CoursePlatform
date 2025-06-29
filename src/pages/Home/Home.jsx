import Course from "../../components/Course/Course";
import softwareCourses from "../../data/softwareCourses";

const Home = () => {
  return (
    <>
      {softwareCourses.map((course, index) => (
        <Course
          key={course.courseId}
          {...course}
          ltr={index % 2 === 0}
        ></Course>
      ))}
    </>
  );
};

export default Home;
