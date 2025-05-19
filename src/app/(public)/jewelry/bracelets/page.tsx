import { Products } from "@/components/products/Products";
import { braceletsData } from "./bracelets.data";
import { CategoryBlock } from "@/components/categoryBlock/CategoryBlock";
import { NavBar } from "@/components/navBar/NavBar";
import { navbarDataBracelets } from "@/components/navBar/navBar.data";

export default function EarringsPage() {
  return (
    <section style={{ position: "relative" }} className="container">
      <CategoryBlock length={braceletsData.length} title="Браслеты" />
      <NavBar arr={navbarDataBracelets} />
      <Products products={braceletsData} />
    </section>
  );
}
