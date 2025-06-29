import styles from "./CourseSection.module.css";

export default function CourseSection({
  courseId,
  courseName,
  courseDetails,
  handleButtonClick,
  courseImage,
  ltr = false,
}) {
  return (
    <section
      key={courseId}
      className={`${styles["course"]} ${ltr ? styles["ltr"] : ""}`}
    >
      <picture className={styles["course-img"]}>
        <img src={courseImage} alt={courseName} />
      </picture>
      <div className={styles["course-details"]}>
        <h1 className={styles["course-name"]}>{courseName}</h1>
        <p className={styles["course-info"]}>{courseDetails}</p>
        <button className={styles["course-button"]} onClick={handleButtonClick}>
          המשך
        </button>
      </div>
    </section>
  );
}
