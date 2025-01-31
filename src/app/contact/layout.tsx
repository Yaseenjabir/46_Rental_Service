import { Metadata } from "next";

export default function Layout({ children }) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with 3B Transport LLC",
  description:
    "Reach out to 3B Transport LLC for inquiries, bookings, or assistance with your transportation needs. Our customer service team is here to help you with your bus rental requirements in the UAE.",
};
