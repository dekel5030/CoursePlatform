import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Carousel.css";

import images from "../../assets/Carousel/Carousel";

const slides = [
  {
    image: images.image1,
    title: "קורס אדריכלות מהפכני",
    details: "תוכנת התלת הפופולרית בעולם",
    buttonText: "לפרטים נוספים",
    buttonLink: "#course1",
    color: "white",
  },
  {
    image: images.image2,
    title: "למד סקצ'אפ בקלות",
    details: "קטלוג ערים בישראל ועוד",
    buttonText: "התחל עכשיו",
    buttonLink: "#course2",
    color: "white",
  },
  {
    image: images.image3,
    title: "העתיד שלך מתחיל כאן",
    details: "אפליקציה עצמאית להדמיה ריאליסטית",
    buttonText: "גלה עוד",
    buttonLink: "#course3",
    color: "white",
  },
];

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 5000 }}
      className="carousel"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide">
            <img src={slide.image} alt={slide.title} />
            <div className="overlay" style={{ color: slide.color }}>
              <h1 className="header animate-from-right">{slide.title}</h1>
              <p className="details animate-from-left">{slide.details}</p>
              <a
                className="overlay-button animate-from-right"
                href={slide.buttonLink}
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
