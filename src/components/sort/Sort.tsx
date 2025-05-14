"use client";
import { useState } from "react";
import styles from "./Sort.module.scss";
import { ArrowUpDown } from "lucide-react";
import { SortPopup } from "./SortPopup";
import { Range } from "./range/Range";
import { Switcher } from "./switcher/Switcher";
const data: string[] = [
  "По популярности",
  "По возрастанию",
  "По убыванию",
  "По новинкам",
  "По скидкам",
  "По рейтингу",
];

interface ISort {
  title: string;
  isOpenInitial: boolean;
}

export const sortData: ISort[] = [
  { title: "Цена", isOpenInitial: true },
  { title: "Цена", isOpenInitial: true },
  { title: "Цена", isOpenInitial: false },
  { title: "Цена", isOpenInitial: false },
  { title: "Цена", isOpenInitial: false },
];

export function Sort() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [item, setItem] = useState(data[0]);

  return (
    <div className={styles.sorting}>
      <div className={styles.sort}>
        <span className={styles.label}>Сортировка</span>
        <span className={styles.select} onClick={() => setIsOpen(!isOpen)}>
          <ArrowUpDown size={16} />
          {item}
        </span>
        {isOpen && (
          <ul className={styles.popup}>
            {data.map((item, i) => (
              <li
                key={i}
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
      <SortPopup title="Цена" initialOpen>
        <Range max={5000} min={0} fromInitialValue={0} toInitialValue={5000} />
      </SortPopup>
      <SortPopup title="Новинки" initialOpen>
        <Switcher />
      </SortPopup>
      <SortPopup title="Бренд">
        <div>
          <input type="checkbox" id="check" />
          <label htmlFor="check">Venera</label>
        </div>
      </SortPopup>
    </div>
  );
}
