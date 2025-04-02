import { PAGE } from "@/config/page.config";
export interface ISidebarItem {
  label: string;
  link: string;
}
export const SIDEBAR_DATA: ISidebarItem[] = [
  {
    label: "Кольца",
    link: PAGE.RINGS,
  },
  {
    label: "Браслеты",
    link: PAGE.BRACELETS,
  },
  {
    label: "Серьги",
    link: PAGE.EARRINGS,
  },
  {
    label: "Все украшения",
    link: PAGE.JEWELRY,
  },
];
