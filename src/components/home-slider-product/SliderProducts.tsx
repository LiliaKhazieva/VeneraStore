"use client";
import { use, useEffect, useRef, useState } from "react";
import { Heading } from "../Heading";
import styles from "./SliderProduct.module.scss";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSlider } from "@/hooks/useSlider";
import { ICategoryCollection } from "../slider/sliderCollection.data";
import { addSpacePrice } from "@/hooks/addSpaceNumber";
import { NavBar } from "../navBar/NavBar";
import { INavItem, navbarData } from "../navBar/navBar.data";

// const data: string[] = [
//   "Все",
//   "Кольца",
//   "Шармы",
//   "Серьги",
//   "Колье и цепи",
//   "Браслеты",
// ];

interface Props {
  arr: INavItem[];
  data: ICategoryCollection[];
}

export function SliderProducts({ arr, data }: Props) {
  // const [active, setActive] = useState(0);
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
      <Heading>Каталог украшений</Heading>
      <div className={`${styles.top} container`}>
        <NavBar arr={navbarData} />
        <div className={styles.content}>
          <a className={styles.link} href="/">
            Подробнее &gt;
          </a>
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
          {data?.map((item) => (
            <a className={styles.link} href={item.link}>
              <img src={item.src} alt="" />

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
