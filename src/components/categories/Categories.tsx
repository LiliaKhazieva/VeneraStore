import styles from "./Categories.module.scss";
import cn from "clsx";
import { categoriesData } from "./categories.data";

export function Categories() {
  return (
    <section className={`${styles.categories} container`}>
      <div className={styles.grid}>
        <h2>Откройте мир ювелирных украшений Venera</h2>
        {categoriesData.map((item, i) => (
          <a key={i} href={item.link}>
            <div className={styles.category}>
              <img src={item.src} alt={item.title} />

              <span
                className={cn(styles.name, item.class && styles.nameUnderline)}
              >
                {item.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
