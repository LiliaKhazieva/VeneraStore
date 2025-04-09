"use client";
import { useState } from "react";
import styles from "./Filters.module.scss";
import { ArrowUpDown } from "lucide-react";
const data: string[] = [
  "По популярности",
  "По возрастанию",
  "По убыванию",
  "По новинкам",
  "По скидкам",
  "По рейтингу",
];

export function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [item, setItem] = useState(data[0]);

  return (
    <div className={styles.filters}>
      <div className={styles.sort}>
        <span>Сортировка</span>
        <span className={styles.select} onClick={() => setIsOpen(!isOpen)}>
          <ArrowUpDown size={16} />
          {item}
        </span>
        {isOpen && (
          <ul className={styles.popup}>
            {data.map((item, i) => (
              <li
                className={
                  activeIndex === i
                    ? `${styles.order} ${styles.active}`
                    : `${styles.order}`
                }
                onClick={() => {
                  setActiveIndex(i);
                  setIsOpen(!isOpen);
                  setItem(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
