"use client";
import { useState } from "react";
import { INavItem } from "./navBar.data";
import styles from "./NavBar.module.scss";

interface INavbar {
  arr: INavItem[];
}
export function NavBar({ arr }: INavbar) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.navbar}>
      {arr.map((item, i) => (
        <button
          key={i}
          onClick={() => setActiveIndex(i)}
          className={
            activeIndex === i
              ? `${styles.category} ${styles.active}`
              : `${styles.category}`
          }
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}
