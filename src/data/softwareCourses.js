// src/data/softwareCourses.js
import photoshopImg from "../assets/Photoshop/image1.webp";
import lumionImg from "../assets/Lumion/image1.webp";
import revitImg from "../assets/Revit/image1.jpg";
import sketchupImg from "../assets/Sketchup/image1.jpeg";
import autocadImg from "../assets/Autocad/image1.jpeg";

const softwareCourses = [
  {
    courseId: 5,
    courseName: "Lumion",
    courseDetails:
      "יצירת סצנות תלת־ממדיות מתקדמות, כולל טקסטורות, רינדור ואנימציה.",
    courseImage: lumionImg,
  },
  {
    courseId: 1,
    courseName: "Photoshop",
    courseDetails:
      "לימוד יצירת הדמיות מציאותיות למבנים, כולל תאורה, טקסטורות ואנימציה.",
    courseImage: photoshopImg,
  },
  {
    courseId: 2,
    courseName: "SketchUp",
    courseDetails:
      "תכנון מודלים תלת־ממדיים של מבנים בצורה אינטואיטיבית ומהירה, כולל עבודה עם שכבות וכלי מדידה.",
    courseImage: sketchupImg,
  },
  {
    courseId: 3,
    courseName: "Revit",
    courseDetails:
      "תכנון אדריכלי ובנייה מבוססת מודלים מידעיים (BIM), כולל עבודה עם תוכניות קונסטרוקציה וחשמל.",
    courseImage: revitImg,
  },
  {
    courseId: 4,
    courseName: "AutoCAD",
    courseDetails:
      "שרטוט דו־ממדי ותלת־ממדי מדויק, כולל יצירת תוכניות בנייה וייבוא שכבות.",
    courseImage: autocadImg,
  },
];

export default softwareCourses;
