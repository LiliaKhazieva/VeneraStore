import { Products } from "@/components/products/Products";
import { ringsData } from "./rings.data";

export default function JewelryPage() {
  return (
    <section style={{ position: "relative" }}>
      <Products products={ringsData} />
      {/* <Sidebar /> */}
    </section>
  );
}
