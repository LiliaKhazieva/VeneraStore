"use client";

import { IProduct } from "../products.types";
import styles from "./Product.module.scss";
import { useState } from "react";
import { Popup } from "@/components/popup/Popup";

export function Product({ item }: { item: IProduct }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <li className={styles.item}>
        <div className={styles.wrapper}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.btnViewing}
          >
            Быстрый просмотр
          </button>
          <img className={styles.img} src={item.url} alt={item.title} />
        </div>
        <span className={styles.price}>{item.price} &#8381;</span>
        <p className={styles.title}>{item.title}</p>

        <button className={styles.btn}>Купить</button>
      </li>
      {isOpen && <Popup onClose={onClose} item={item} />}
    </>
  );
}
