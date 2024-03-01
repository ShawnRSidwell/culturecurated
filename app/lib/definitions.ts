import { StaticImageData } from "next/image";

export type Curation = {
  title: string;
  author: string;
  image: StaticImageData;
  description: string;
  rating: string;
  category: string;
  views: number;
  date: string;
  list: string[];
};
