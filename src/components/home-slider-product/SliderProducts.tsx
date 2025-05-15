"use client";
import { Heading } from "../Heading";
import styles from "./SliderProduct.module.scss";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSlider } from "@/hooks/useSlider";
import { ICategoryCollection } from "../slider/sliderCollection.data";
import { addSpacePrice } from "@/hooks/addSpacePrice";
import { NavBar } from "../navBar/NavBar";
import { INavItem, navbarDataJewelry } from "../navBar/navBar.data";
import Link from "next/link";

interface Props {
  arr: INavItem[];
  data: ICategoryCollection[];
}

export function SliderProducts({ arr, data }: Props) {
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
        <NavBar arr={navbarDataJewelry} />
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
          {data?.map((item, i) => (
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
