import styles from "./CourseSection.module.css";
import PropTypes from "prop-types";

export default function CourseSection({
  course,
  handleButtonClick,
  ltr = false,
}) {
  return (
    <section
      key={course.id}
      className={`${styles["course"]} ${ltr ? styles["ltr"] : ""}`}
    >
      <picture className={styles["course-img"]}>
        <img src={course.imageUrl} alt={course.name} />
      </picture>
      <div className={styles["course-details"]}>
        <h1 className={styles["course-name"]}>{course.name}</h1>
        <p className={styles["course-info"]}>{course.details}</p>
        <button className={styles["course-button"]} onClick={handleButtonClick}>
          המשך
        </button>
      </div>
    </section>
  );
}

CourseSection.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    details: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  handleButtonClick: PropTypes.func,
  ltr: PropTypes.bool,
};
