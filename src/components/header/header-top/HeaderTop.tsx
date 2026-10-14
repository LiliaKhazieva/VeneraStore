import { MousePointer2 } from "lucide-react";
import styles from "./HeaderTop.module.scss";
import { PAGE } from "@/config/page.config";

export function HeaderTop() {
  return (
    <div className={`${styles.top} container`}>
      <div className={styles.location}>
        <MousePointer2 strokeWidth={1} size={18} className={styles.icon} />
        <span>Екатеринбург</span>
      </div>
      <nav>
        <a href="/VeneraStore">Магазины</a>
        <a href="/VeneraStore">Доставка и оплата</a>
        <a href="/VeneraStore">Помощь</a>
        <a href="/VeneraStore">Отследить заказ</a>
      </nav>
    </div>
  );
}
