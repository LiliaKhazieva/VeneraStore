import { ChevronRight } from "lucide-react";
import styles from "./CategoryBlock.module.scss";

export function CategoryBlock() {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.nav}>
          <div className={styles.breadcrumbs}>
            <span>Главная</span>
            <ChevronRight size={15} />
            <span>Украшения</span>
          </div>
          <h2>Украшения</h2>
          <span className={styles.count}>2741 украшение</span>
        </div>
        <div className={styles.banner}>
          <img
            src="https://images.unsplash.com/photo-1712314567799-6e71727c1350?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner"
          />
        </div>
      </div>
      <ul className={styles.list}>
        <li>
          <a href="/">Кольца</a>
        </li>
        <li>Браслеты</li>
        <li>Серьги</li>
        <li>Колье</li>
        <li>Кольца</li>
        <li>Браслеты</li>
      </ul>
    </>
  );
}
