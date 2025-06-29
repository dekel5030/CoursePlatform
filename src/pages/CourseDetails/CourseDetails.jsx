import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import softwareCourses from "../../data/softwareCourses";

const CourseDetails = () => {
  const { id } = useParams();
  const course = softwareCourses.find(
    (course) => course.courseId === Number(id)
  );

  return (
    <>
      <h1>{course.courseId}</h1>
      <h1>{course.courseName}</h1>
      <h1>{course.courseDetails}</h1>
      <img src="course.courseImage" />
    </>
  );
};

export default CourseDetails;
