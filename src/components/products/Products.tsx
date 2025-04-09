import { Filters } from "../filters/Filters";
import { IProduct } from "../screens/home/products.types";
import { Product } from "./product/Product";
import styles from "./Products.module.scss";

export function Products({ products }: { products: IProduct[] }) {
  return (
    <div className={styles.content}>
      <Filters />
      <ul className={styles.list}>
        {!!products.length && products.map((item) => <Product item={item} />)}
      </ul>
    </div>
  );
}
