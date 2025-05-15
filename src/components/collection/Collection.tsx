import Link from "next/link";
import { ICollectionItem } from "./collection.data";
import styles from "./Collection.module.scss";

interface Props {
  data: ICollectionItem[];
}

export function Collection({ data }: Props) {
  return (
    <section className={`${styles.collection} container`}>
      {data.map((item, i) => (
        <div key={i} className={styles.item}>
          <Link className={styles.title} href="/">
            <span>{item.title}</span>
          </Link>
          <a className={styles.link} href={item.link}>
            Подробнее &gt;&gt;&gt;
          </a>
          // eslint-disable-next-line
          <img src={item.src} alt={item.title} />
        </div>
      ))}
    </section>
  );
}
