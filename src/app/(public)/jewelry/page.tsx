import { Products } from "@/components/products/Products";
import { jewelryData } from "./jewelry.data";
import { CategoryBlock } from "@/components/categoryBlock/CategoryBlock";

export default function JewelryPage() {
  return (
    <section className="container" style={{ position: "relative" }}>
      <CategoryBlock />
      <Products products={jewelryData} />
    </section>
  );
}
