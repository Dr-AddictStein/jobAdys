"use client";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "@/styles/Hellopage/Testimonials.module.css";

const testimonials = [
  {
      text: "JobAdys is the best job resource out there!",
      subtext: "It is so user-friendly and has high-quality job listings.",
      avatar: "/avatars/avatarOne.svg"
  },
  {
      text: "I found my dream job in just a few days!",
      subtext: "This platform made job hunting a breeze.",
      avatar: "/avatars/avatarTwo.svg"
  },
  {
      text: "Highly recommend for freelancers.",
      subtext: "Great opportunities and easy communication.",
      avatar: "/avatars/avatarThree.svg"
  },
  {
      text: "The UI is clean and simple to navigate.",
      subtext: "I love the overall experience here!",
      avatar: "/avatars/avatarFour.svg"
  },
  {
      text: "Fast hiring process!",
      subtext: "I landed a gig within a week of signing up.",
      avatar: "/avatars/avatarFive.svg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
  }, []);

  return (
      <div className={styles.Testimonials}>
          <h2 className={styles.title}>What Our Members Are Saying</h2>

          <div className={styles.reviewBox}>
                <div className={styles.score}>
                    4.7
                    <p>out of 5</p>
                </div>
                <div>
                    <a href="#" className={styles.reviewText}>1,000+ Reviews</a>
                    <div className={styles.stars}>⭐️⭐️⭐️⭐️⭐️</div>
                </div>
          </div>


          <div className={styles.reviewContainer}>
              <p className={styles.comment}>{testimonials[currentIndex].text}</p>
              <p className={styles.subtext}>{testimonials[currentIndex].subtext}</p>
          </div>

          <div className={styles.avatarContainer}>
              {testimonials.map((item, index) => (
                  <img
                      key={index}
                      src={item.avatar}
                      alt="User avatar"
                      className={`${styles.avatar} ${index === currentIndex ? styles.activeAvatar : ""}`}
                      onClick={() => setCurrentIndex(index)}
                  />
              ))}
          </div>

          <div className={styles.navigation}>
              {testimonials.map((_, index) => (
                  <div
                      key={index}
                      className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
                      onClick={() => setCurrentIndex(index)}
                  ></div>
              ))}
          </div>
      </div>
  );
}