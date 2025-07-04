// src/data/softwareCourses.js
import photoshopImg from "../assets/Photoshop/image1.webp";
import lumionImg from "../assets/Lumion/image1.webp";
import revitImg from "../assets/Revit/image1.jpg";
import sketchupImg from "../assets/Sketchup/image1.jpeg";
import autocadImg from "../assets/Autocad/image1.jpeg";

const softwareCourses = [
  {
    id: 5,
    name: "Lumion",
    details: "יצירת סצנות תלת־ממדיות מתקדמות, כולל טקסטורות, רינדור ואנימציה.",
    imageUrl: lumionImg,
    price: 1290,
  },
  {
    id: 1,
    name: "Photoshop",
    details:
      "לימוד יצירת הדמיות מציאותיות למבנים, כולל תאורה, טקסטורות ואנימציה.",
    imageUrl: photoshopImg,
    price: 990,
  },
  {
    id: 2,
    name: "SketchUp",
    details:
      "תכנון מודלים תלת־ממדיים של מבנים בצורה אינטואיטיבית ומהירה, כולל עבודה עם שכבות וכלי מדידה.",
    imageUrl: sketchupImg,
    price: 1150,
  },
  {
    id: 3,
    name: "Revit",
    details:
      "תכנון אדריכלי ובנייה מבוססת מודלים מידעיים (BIM), כולל עבודה עם תוכניות קונסטרוקציה וחשמל.",
    imageUrl: revitImg,
    price: 1490,
  },
  {
    id: 4,
    name: "AutoCAD",
    details:
      "שרטוט דו־ממדי ותלת־ממדי מדויק, כולל יצירת תוכניות בנייה וייבוא שכבות.",
    imageUrl: autocadImg,
    price: 1090,
  },
];

export default softwareCourses;
