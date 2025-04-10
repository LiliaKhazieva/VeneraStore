import { useState } from "react";
import styles from "./Switcher.module.scss";
import cn from "clsx";

export function Switcher() {
  const [isOff, setIsOff] = useState(false);
  return (
    <button
      className={cn(styles.btn, isOff === true && styles.btnActive)}
      onClick={() => setIsOff(!isOff)}
    >
      <div
        className={cn(
          styles.circle,
          isOff ? styles.translate : styles.noTranslate
        )}
      ></div>
    </button>
  );
}
