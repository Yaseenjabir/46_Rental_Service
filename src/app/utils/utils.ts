import { Image } from "sanity";
import { PortableTextBlock } from "@portabletext/types"; // Import PortableTextBlock type

export const email = "Info@threebtransport.com";

export const phone = "+971521143801";

export const companyLocation = "Dubai";

export const companyName = "Three B Transport";

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

export interface Vehicle {
  name: string;
  images: Image[];
  company: string;
  capacity: string;
  manufactured: string;
  interior: string;
  wifi: string;
  freezer: string;
  transmission: string;
  services: string[];
  description: PortableTextBlock;
  category: string;
  perHourRental: number;
  fullDayRental: number;
  airportTransfer: number;
  weeklyRental: number;
  slug: string;
  vehicleType: string;
  brand: string;
  location: string;
}

export interface Location {
  locationName: string;
  image: Image;
  slug: string;
  description: PortableTextBlock;
  locationType: string;
  latitude: string;
  longitude: string;
  vehicles: Vehicle[];
}

export const truncateText = (text: string, length: number) => {
  return text.length > length ? `${text.slice(0, length)}...` : text;
};

interface CheckBoxes {
  id: string;
  title: string;
  img: string;
}

interface Brands {
  id: string;
  title: string;
}

export const vehicleTypes: CheckBoxes[] = [
  {
    id: "minVan",
    title: "MiniVan",
    img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-minivan.svg",
  },
  {
    id: "sedan",
    title: "Sedan",
    img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-sedan.svg",
  },
  {
    id: "suv",
    title: "Suv",
    img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-suv.svg",
  },
  {
    id: "van",
    title: "Van",
    img: "https://alweamtransport.com/assets/images/v-types/1699533779_alweam-icon-minivan.svg",
  },
  {
    id: "bus",
    title: "Bus",
    img: "https://alweamtransport.com/assets/images/v-types/1699534232_big-bus.svg",
  },
  {
    id: "car",
    title: "Car",
    img: "https://alweamtransport.com/assets/images/v-types/1698144294_alweam-icon-car.svg",
  },
  {
    id: "miniBus",
    title: "Mini Bus",
    img: "https://alweamtransport.com/assets/images/v-types/1699534250_alweam-icon-bus.svg",
  },
  {
    id: "luxuryCoach",
    title: "Luxury Coach",
    img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-luxury-bus.svg",
  },
];
export const brands: Brands[] = [
  { id: "bmw", title: "BMW" },
  { id: "ford", title: "Ford" },
  { id: "chevrolet", title: "Chevrolet" },
  { id: "honda", title: "Honda" },
  { id: "nissan", title: "Nissan" },
  { id: "audi", title: "Audi" },
  { id: "mazda", title: "Mazda" },
  { id: "cadillac", title: "Cadillac" },
];
