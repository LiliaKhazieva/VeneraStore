import { ICollectionItem } from "./collection.data";
import styles from "./Collection.module.scss";

interface Props {
  data: ICollectionItem[];
}

export function Collection({ data }: Props) {
  return (
    <section className={`${styles.collection} container`}>
      {data.map((item) => (
        <div key={item.title} className={styles.item}>
          <a className={styles.title} href="/">
            <span>{item.title}</span>
          </a>
          <a className={styles.link} href={item.link}>
            Подробнее &gt;&gt;&gt;
          </a>
          <img src={item.src} alt="" />
        </div>
      ))}
    </section>
  );
}
