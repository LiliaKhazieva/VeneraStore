"use client";
import { ReactNode, useState } from "react";
import styles from "./SortPopup.module.scss";

interface Props {
  children: ReactNode;
  title: string;
  initialOpen?: boolean;
}

export function SortPopup({ children, title, initialOpen }: Props) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className={styles.popup}>
      <span onClick={() => setIsOpen(!isOpen)}>{title}</span>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
