import { Crown } from "lucide-react";
import Link from "next/link";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Link className={styles.link} href={"/"}>
          <span>Venera</span>
          <Crown color="#f84ab5" />
        </Link>
        <span>2025 &#169; Интернет-магазин VENERA</span>
      </div>
    </footer>
  );
}
