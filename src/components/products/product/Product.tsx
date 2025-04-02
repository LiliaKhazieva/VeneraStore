"use client";

import Image from "next/image";
import { IProduct } from "../../screens/home/products.types";
import styles from "./Product.module.scss";
import cn from "clsx";
import { useState } from "react";
import { Popup } from "@/components/popup/Popup";

export function Product({ item }: { item: IProduct }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <li className={styles.item}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.btnViewing}
        >
          Быстрый просмотр
        </button>
        <Image
          className={styles.img}
          src={item.url}
          width={176}
          height={234}
          alt={item.title}
        />

        <span className={styles.price}>{item.price} &#8381;</span>
        <p className={styles.title}>{item.title}</p>

        <button className={styles.btn}>Купить</button>
      </li>
      {isOpen && <Popup onClose={onClose} />}
    </>
  );
}
