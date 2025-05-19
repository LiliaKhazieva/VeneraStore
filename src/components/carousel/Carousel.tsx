"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.scss";
import { IItem } from "./carousel.data";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  arr: IItem[];
  transitionDuration: number;
  autoPlay: boolean;
  autoPlayTime: number;
  infinite: boolean;
}

export function Carousel({
  arr,
  transitionDuration,
  autoPlay,
  autoPlayTime,
  infinite,
}: Props) {
  const [transition, setTransition] = useState(transitionDuration);
  const [items, setItems] = useState([...arr]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slideNumber, setSlideNumber] = useState(0);

  useEffect(() => {
    if (transition === 0) {
      setTimeout(() => {
        setTransition(transitionDuration);
      }, transitionDuration);
    }
  }, [transition]);

  const handleClickNext = () => {
    if (slideNumber < items.length - 1) {
      setSlideNumber(slideNumber + 1);
    } else {
      setSlideNumber(0);
    }
  };

  const handleClickPrev = () => {
    if (slideNumber == 0) {
      setSlideNumber(items.length - 1);
    } else {
      setSlideNumber(slideNumber - 1);
    }
  };

  const handleDotClick = (i: number) => {
    setSlideNumber(i);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      handleClickNext();
    }, autoPlayTime);
    return () => {
      clearInterval(interval);
    };
  }, [slideNumber]);

  return (
    <div className={styles.slider} ref={sliderRef}>
      <button
        className={`${styles.btn} ${styles.left}`}
        onClick={() => handleClickPrev()}
      >
        <ArrowLeft />
      </button>
      <button
        className={`${styles.btn} ${styles.right}`}
        onClick={() => handleClickNext()}
      >
        <ArrowRight />
      </button>
      <div
        className={styles.track}
        style={{
          transition: `${transition}ms`,
          transform: `translateX(-${slideNumber * 100}%)`,
        }}
      >
        {items.map((item, i) => (
          <img key={i} src={item.src} alt="" />
        ))}
      </div>
      <div className={styles.dots}>
        {[...new Array(items.length)].map((_, i) => (
          <div
            onClick={() => handleDotClick(i)}
            key={i}
            className={slideNumber === i ? styles.active : styles.dot}
          ></div>
        ))}
      </div>
    </div>
  );
}
