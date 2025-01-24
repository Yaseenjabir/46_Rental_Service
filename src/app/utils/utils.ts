import { Image } from "sanity";
import { PortableTextBlock } from "@portabletext/types"; // Import PortableTextBlock type

export const email = "operations@alweamtransport.com";

export const phone = "+971 50 467 2553";

export const companyLocation = "Dubai";

export const companyName = "Al Weam Passenger Transport Bus Rental";

export interface Post {
  summary: string;
  by: {
    name: string;
    about: string;
    image: Image;
  };
  content: PortableTextBlock;
  image: Image;
  _createdAt: Date;
  title: string;
  slug: string;
  category: string;
}
