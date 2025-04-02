"use client";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.scss";
import { SIDEBAR_DATA } from "./sidebar.data";
import { RefObject } from "react";

interface Props {
  ref: RefObject<any | null>;
}

export function Sidebar({ ref }: Props) {
  const pathname = usePathname();
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar} ref={ref}>
        <ul>
          {SIDEBAR_DATA.map((item) => (
            <a className={styles.item} href={item.link}>
              {item.label}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
