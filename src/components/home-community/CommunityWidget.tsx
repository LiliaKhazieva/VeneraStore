import { ArrowRight, Heart } from "lucide-react";
import styles from "./CommunityWidget.module.scss";
import cn from "clsx";
import { ICommunityItem } from "./community.data";

interface Props {
  arr: ICommunityItem[];
}

export function CommunityWidget({ arr }: Props) {
  return (
    <section className={cn(styles.widget, "container")}>
      <h3>Venera community</h3>
      <div className={styles.top}>
        <p>
          Вдохновляемся вашими образами в украшениях Venera. Загружайте свои
          фото и ваш образ появится на сайте{" "}
        </p>
        <a href="/">
          <span>Смотреть больше</span>
          <ArrowRight />
        </a>
      </div>
      <div className={styles.bottom}>
        <ul>
          {arr.map((item) => (
            <li>
              <div className={styles.overlay}>
                <Heart color="#fff" />
              </div>
              <img src={item.src} alt="" />
            </li>
          ))}
        </ul>
        <button>Загрузить свое фото</button>
      </div>
    </section>
  );
}
