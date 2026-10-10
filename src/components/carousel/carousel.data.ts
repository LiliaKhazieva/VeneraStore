import { ButtonHTMLAttributes } from "react";

export interface IItem {
  src: string;
  title?: string;
  button?: ButtonHTMLAttributes<HTMLButtonElement>;
  infinite?: boolean;
}

export const sliderData: IItem[] = [
  {
    src: "https://pixnio.com/free-images/2020/07/07/2020-07-07-09-37-16-1536x1024.jpg",
  },
  {
    src: "https://pixnio.com/free-images/2021/03/24/2021-03-24-12-06-50-1800x1200.jpg",
  },

  {
    src: "https://pixnio.com/free-images/2023/06/13/2023-06-13-13-36-48-1920x1076.jpg",
  },
  {
    src: "https://pixnio.com/free-images/2026/04/28/2026-04-28-08-05-59-1920x1280.jpg",
  },
  {
    src: "https://pixnio.com/free-images/2022/09/22/2022-09-22-08-52-35-1536x1065.jpg",
  },
  {
    src: "https://pixnio.com/free-images/2020/07/07/2020-07-07-09-37-16-1536x1024.jpg",
  },
  {
    src: "https://pixnio.com/free-images/2023/06/13/2023-06-13-13-36-48-1920x1076.jpg",
  },
  {
    src: "https://pixnio.com/free-images/2026/04/28/2026-04-28-08-05-59-1920x1280.jpg",
  },
  {
    src: "https://pixnio.com/free-images/2020/07/07/2020-07-07-09-37-16-1536x1024.jpg",
  },
  {
    src: "https://pixnio.com/free-images/2020/07/07/2020-07-07-09-37-16-1536x1024.jpg",
  },
  {
    src: "https://pixnio.com/free-images/2026/04/28/2026-04-28-08-05-59-1920x1280.jpg",
  },
  {
    src: "https://pixnio.com/free-images/2026/04/28/2026-04-28-08-05-59-1920x1280.jpg",
  },
  {
    src: "https://pixnio.com/free-images/2023/06/13/2023-06-13-13-36-48-1920x1076.jpg",
  },
  {
    src: "https://pixnio.com/free-images/2023/06/13/2023-06-13-13-36-48-1920x1076.jpg",
  },
];
