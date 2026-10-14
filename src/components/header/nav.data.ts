import { PAGE } from "@/config/page.config";

export interface IDropDown {
  title: string;
  url: string;
}

export interface INav {
  title: string;
  url: string;
  dropdown?: IDropDown[];
}

export const navData: INav[] = [
  {
    title: "Украшения",
    url: PAGE.JEWELRY,
    dropdown: [
      {
        title: "Кольца",
        url: `${PAGE.JEWELRY}/rings `,
      },
      {
        title: "Серьги",
        url: `${PAGE.JEWELRY}/earrings `,
      },
      {
        title: "Колье",
        url: `${PAGE.JEWELRY}/necklace `,
      },
      {
        title: "Браслеты",
        url: `${PAGE.JEWELRY}/bracelets`,
      },
    ],
  },
  {
    title: "Новинки Venera",
    url: PAGE.HOME,
  },
  {
    title: "Бренды",
    url: PAGE.HOME,
    dropdown: [
      {
        title: "Все бренды",
        url: PAGE.JEWELRY,
      },
    ],
  },
  {
    title: "Подарочные карты",
    url: PAGE.HOME,
  },
  {
    title: "Sale",
    url: PAGE.HOME,
  },
];
