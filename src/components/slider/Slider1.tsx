"use client";
import { useSlider } from "@/hooks/useSlider";
import styles from "./Slider.module.scss";
import { ICategoryCollection } from "./sliderCollection.data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { addSpacePrice } from "@/hooks/addSpacePrice";
import Link from "next/link";

interface Props {
  arr: ICategoryCollection[];
}

export function Slider1({ arr }: Props) {
  const { translate, transition, handleClickNext, handleClickPrev } = useSlider(
    {
      length: arr.length,
      initialTranslate: 150,
      step: 2,
      widthStep: 300,
      lastStep: 5,
      transition: 800,
      autoPlay: false,
      autoPlayTime: 5000,
    }
  );

  return (
    <section className={styles.sliderCollection}>
      <div className={`${styles.top} container`}>
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "600",
            textTransform: "uppercase",
            margin: "30px 0",
          }}
        >
          Шкатулка стилиста
        </h2>
        <div className={styles.content}>
          <Link className={styles.link} href="#">
            Подробнее &gt;
          </Link>
          <div className={styles.btns}>
            <button className={styles.prev} onClick={() => handleClickPrev()}>
              <ArrowLeft />
            </button>
            <button className={styles.next} onClick={() => handleClickNext()}>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div
          className={styles.track}
          style={{
            transitionDuration: `${transition}ms`,
            transform: `translateX(${translate}px)`,
          }}
        >
          {arr.map((item, i) => (
            <a key={i} className={styles.link} href={item.link}>
              <img src={item.src} alt={item.title} />
              <span className={styles.price}>
                {addSpacePrice(item.price)} &#8381;
              </span>
              <span className={styles.brand}>{item.brand}</span>
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
