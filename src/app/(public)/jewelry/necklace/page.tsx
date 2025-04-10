import { Products } from "@/components/products/Products";
import { necklaceData } from "./necklace.data";
import { CategoryBlock } from "@/components/categoryBlock/CategoryBlock";
import { NavBar } from "@/components/navBar/NavBar";
import { navbarDataRings } from "@/components/navBar/navBar.data";

export default function NecklacePage() {
  return (
    <section style={{ position: "relative" }} className="container">
      <CategoryBlock length={necklaceData.length} title="Кольца" />
      <NavBar arr={navbarDataRings} />
      <Products products={necklaceData} />
    </section>
  );
}
