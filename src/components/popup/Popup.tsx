import { X } from "lucide-react";
import styles from "./Popup.module.scss";

export function Popup({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.popupWrapper}>
      <div className={styles.popup}>
        <img
          src="https://images.unsplash.com/photo-1511745564573-fec5d8b7e907?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="foto"
        />
        <div className={styles.desc}>
          <h3>Наушники беспровод</h3>
          <span>1029p</span>
          <button className={styles.btn}>Добавить в корзину</button>
          <button className={styles.close} onClick={onClose}>
            <X />
          </button>
        </div>
      </div>
    </div>
  );
}
