import PropTypes from "prop-types";
import CourseCard from "../CourseCard/CourseCard";
import styles from "./CourseGrid.module.css";

function CourseGrid({ courseCollection }) {
  return (
    <div className={styles.grid}>
      {courseCollection.map((course) => (
        <CourseCard key={course.id} course={course}></CourseCard>
      ))}
    </div>
  );
}

CourseGrid.propTypes = {
  courseCollection: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
};

export default CourseGrid;
