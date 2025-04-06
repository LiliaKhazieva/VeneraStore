import { IProduct } from "../screens/home/products.types";
import { Product } from "./product/Product";
import styles from "./Products.module.scss";

export function Products({ products }: { products: IProduct[] }) {
  return (
    <ul className={`${styles.list} container`}>
      {!!products.length && products.map((item) => <Product item={item} />)}
    </ul>
  );
}
