import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";

export default function AboutPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.about}>
      <h1>אודות CoursePlatform</h1>

      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            ב-CoursePlatform אנו מתמחים בלספק קורסים מקצועיים ואונליין ללימוד
            תוכנות תלת-ממד, עיצוב והדמיות. כאן תוכל למצוא מגוון קורסים מתקדמים
            ב- Lumion, Revit, AutoCAD, SketchUp ועוד.
          </p>

          <h2>למה ללמוד אצלנו?</h2>
          <ul>
            <li>מדריכים מקצועיים עם ניסיון רב בתעשייה.</li>
            <li>תכנים מעודכנים ומתאימים לשוק העבודה.</li>
            <li>לימוד בקצב שלך, אונליין ובזמן שנוח לך.</li>
            <li>תמיכה וליווי לאורך כל הדרך.</li>
          </ul>
        </div>

        <div className={styles.imageWrapper}>
          <img src={"./"} alt="אודות CoursePlatform" />
        </div>
      </div>
    </section>
  );
}
