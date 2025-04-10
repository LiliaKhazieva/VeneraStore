import { Products } from "@/components/products/Products";
import { jewelryData } from "./jewelry.data";
import { CategoryBlock } from "@/components/categoryBlock/CategoryBlock";
import { NavBar } from "@/components/navBar/NavBar";
import { navbarDataJewelry } from "@/components/navBar/navBar.data";

export default function JewelryPage() {
  return (
    <section className="container" style={{ position: "relative" }}>
      <CategoryBlock length={jewelryData.length} title="Украшения" />
      <NavBar arr={navbarDataJewelry} />
      <Products products={jewelryData} />
    </section>
  );
}
