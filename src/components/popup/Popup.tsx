import { X } from "lucide-react";
import styles from "./Popup.module.scss";
import { IProduct } from "../products/products.types";

export function Popup({
  onClose,
  item,
}: {
  onClose: () => void;
  item: IProduct;
}) {
  return (
    <div className={styles.popupWrapper}>
      <div className={styles.popup}>
        <img src={item.url} alt={item.title} />
        <div className={styles.desc}>
          <h3>{item.title}</h3>
          <span>{item.price}p</span>
          <button className={styles.btn}>Добавить в корзину</button>
          <button className={styles.close} onClick={onClose}>
            <X />
          </button>
        </div>
      </div>
    </div>
  );
}
