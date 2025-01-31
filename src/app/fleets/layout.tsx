import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Fleet | Reliable and Comfortable Bus Rental Vehicles | 3B Transport LLC",
  description:
    "Explore 3B Transport LLC’s diverse fleet of minibuses, coaches, buses, and luxury vehicles, all maintained to the highest safety standards for group transportation needs across the UAE.",
};

export default function Layout({ children }) {
  return <>{children}</>;
}
