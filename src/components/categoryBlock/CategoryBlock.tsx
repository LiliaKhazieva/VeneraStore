import { ChevronRight } from "lucide-react";
import styles from "./CategoryBlock.module.scss";

interface Props {
  length: number;
  title: string;
}

export function CategoryBlock({ length, title }: Props) {
  return (
    <div className={styles.top}>
      <div className={styles.nav}>
        <div className={styles.breadcrumbs}>
          <span>Главная</span>
          <ChevronRight size={15} />
          <span>{title}</span>
        </div>
        <h2>{title}</h2>
        <span className={styles.count}>{length} украшений</span>
      </div>
      <div className={styles.banner}>
        <img
          src="https://panclubrussia.ru/media/catalog/product/cache/0b0a402db25eee4ec0e659d94a6f0366/c/p/cpd-bracc.lb.h_2.png"
          alt="banner"
        />
      </div>
    </div>
  );
}
