"use client";
import { useState } from "react";
import styles from "./SortPopup.module.scss";

export function SortPopup({ children, title, initialOpen }: any) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className={styles.popup}>
      <span onClick={() => setIsOpen(!isOpen)}>{title}</span>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
