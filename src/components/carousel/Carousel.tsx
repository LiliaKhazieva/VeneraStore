"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.scss";
import { IItem, sliderData } from "./carousel.data";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  arr: IItem[];

  transitionDuration: number;
  autoPlay: boolean;
  autoPlayTime: number;
  infinite: boolean;
}

const getWidth = () => window.innerWidth;

export function Carousel({
  arr,
  transitionDuration,
  autoPlay,
  autoPlayTime,
  infinite,
}: Props) {
  const [transition, setTransition] = useState(transitionDuration);
  const [width, setWidth] = useState(getWidth());
  const [pages, setPages] = useState([arr[arr.length - 1], ...arr, arr[0]]);
  const [clone, setClone] = useState({ head: 1, tail: 1 });
  const [offset, setOffset] = useState(-clone.head * width);
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const resizeHandler = () => {
      const _width = sliderRef.current?.offsetWidth;
      setWidth(_width);
      setOffset(-clone.head * width);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [clone, width]);

  useEffect(() => {
    if (transition === 0) {
      setTimeout(() => {
        setTransition(transitionDuration);
      }, transitionDuration);
    }
  }, [transition]);

  useEffect(() => {
    if (!infinite) return;
    if (offset == 0) {
      setTimeout(() => {
        setTransition(0);
        setOffset(-(width * (pages.length - 1 - clone.tail)));
      }, transitionDuration);
      return;
    }
    if (offset == -(width * (pages.length - 1))) {
      setTimeout(() => {
        setTransition(0);
        setOffset(-(clone.head * width));
      }, transitionDuration);
      return;
    }
  }, [infinite, offset, width, pages, clone]);

  const handleClickNext = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;
      const maxOffset = -(width * (pages.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  };

  const handleClickPrev = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      handleClickNext();
    }, autoPlayTime);
    return () => {
      clearInterval(interval);
    };
  }, [offset]);

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
          transform: `translateX(${offset}px)`,
        }}
      >
        {pages.map((item, i) => (
          <img key={i} src={item.src} alt="" />
        ))}
      </div>
      <div className={styles.dots}>
        {[...new Array(pages.length)].map((_, i) => (
          <div
            onClick={() => {
              setActiveIndex(i);
            }}
            key={i}
            className={activeIndex === i ? styles.active : styles.dot}
          ></div>
        ))}
      </div>
    </div>
  );
}
