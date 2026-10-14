import { CategoryBlock } from "@/components/categoryBlock/CategoryBlock";
import { NavBar } from "@/components/navBar/NavBar";
import { Products } from "@/components/products/Products";
import { braceletsData } from "../jewelry/bracelets/bracelets.data";
import { navbarDataBracelets } from "@/components/navBar/navBar.data";

export default function BrandsPage() {
  return (
    <section style={{ position: "relative" }} className="container">
      <CategoryBlock length={braceletsData.length} title="Бренды" />
      <NavBar arr={navbarDataBracelets} />
      <Products products={braceletsData} />
    </section>
  );
}
