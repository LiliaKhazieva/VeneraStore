import { Products } from "@/components/products/Products";
import { productsData } from "@/components/screens/home/products.data";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { jewelryData } from "./jewelry.data";

export default function JewelryPage() {
  return (
    <section style={{ position: "relative" }}>
      <Products products={jewelryData} />
      {/* <Sidebar /> */}
    </section>
  );
}
