import { MousePointer2 } from "lucide-react";
import styles from "./HeaderTop.module.scss";

export function HeaderTop() {
  return (
    <div className={`${styles.top} container`}>
      <div className={styles.location}>
        <MousePointer2 strokeWidth={1} size={18} className={styles.icon} />
        <span>Екатеринбург</span>
      </div>
      <nav>
        <a href="/home">Магазины</a>
        <a href="">Доставка и оплата</a>
        <a href="">Помощь</a>
        <a href="">Отследить заказ</a>
      </nav>
    </div>
  );
}
