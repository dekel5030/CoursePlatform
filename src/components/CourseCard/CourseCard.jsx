import PropTypes from "prop-types";
import styles from "./CourseCard.module.css";

function CourseCard({ course }) {
  const { name, imageUrl } = course;

  return (
    <div className={styles.course}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <h2 className={styles.title}>{name}</h2>
    </div>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseCard;
