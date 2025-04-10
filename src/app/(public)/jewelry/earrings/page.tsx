import { Products } from "@/components/products/Products";
import { earringsData } from "./earrings.data";
import { CategoryBlock } from "@/components/categoryBlock/CategoryBlock";
import { NavBar } from "@/components/navBar/NavBar";
import { navbarDataEarrings } from "@/components/navBar/navBar.data";

export default function EarringsPage() {
  return (
    <section style={{ position: "relative" }} className="container">
      <CategoryBlock length={earringsData.length} title="Серьги" />
      <NavBar arr={navbarDataEarrings} />
      <Products products={earringsData} />
    </section>
  );
}
