"use client";
import { Crown, Heart, Search, ShoppingCart, User } from "lucide-react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { navData } from "./nav.data";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href={"/"} className={styles.link}>
          <span>Venera</span>
          <Crown color="#f84ab5" />
        </Link>
        <ul>
          {navData.map((item, i) => (
            <li key={i}>
              <Link href={item.url}>{item.title}</Link>
              <div className={styles.dropdown_content}>
                {item.dropdown?.map((item, i) => (
                  <a key={i} href={item.url}>
                    {item.title}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <div className={styles.action}>
            <Search />
            <span>Поиск</span>
          </div>
          <div className={styles.action}>
            <Heart />
            <span>Желания</span>
          </div>
          <div className={styles.action}>
            <ShoppingCart />
            <span>Корзина</span>
          </div>
          <div className={styles.action}>
            <User />
            <span>Аккаунт</span>
          </div>
        </div>
      </div>
    </header>
  );
}
