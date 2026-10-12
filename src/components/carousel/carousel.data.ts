import { ButtonHTMLAttributes } from "react";

export interface IItem {
  src: string;
  title?: string;
  button?: ButtonHTMLAttributes<HTMLButtonElement>;
  infinite?: boolean;
}

export const sliderData: IItem[] = [
  {
    src: "https://panclubrussia.ru/media/easyslide/desktop/3840_1800.png",
  },
  {
    src: "https://panclubrussia.ru/media/easyslide/desktop/____sunstone_main.png",
  },

  {
    src: "https://panclubrussia.ru/media/wysiwyg/images/2000_2000_px_3.png",
  },
  {
    src: "https://panclubrussia.ru/media/.renditions/catalog/category/Alikor_category_22.06.png",
  },
];
