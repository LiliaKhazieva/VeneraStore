"use client";
import { cloneElement, useEffect, useRef, useState } from "react";
import styles from "./Sliders.module.scss";
import { sliderData } from "./slider.data";
import { useSlider } from "./useSlider";
import { ArrowLeft, ArrowRight } from "lucide-react";

const getWidth = () => window.innerWidth; // текущий размер браузера

export function Slider() {
  const [index, setIndex] = useState(0);

  const handleClickNext = () => {
    setTimeout(() => {
      if (index < sliderData.length - 1) {
        setIndex(index + 1);
      } else if (index === sliderData.length - 1) {
        setIndex(0);
      }
    }, 300);

    return () => {
      setTimeout();
    };
  };
  const handleClickPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(sliderData.length - 1);
    }
  };

  return (
    <div className={styles.slider}>
      <button
        className={`${styles.btn} ${styles.left}`}
        onClick={() => handleClickPrev()}
      >
        <ArrowLeft />
      </button>

      <div className={styles.slideList}>
        {" "}
        <img src={sliderData[index].src} />
      </div>
      <button
        className={`${styles.btn} ${styles.right}`}
        onClick={() => handleClickNext()}
      >
        <ArrowRight />
      </button>
    </div>
  );
}
