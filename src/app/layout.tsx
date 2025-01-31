import type { Metadata } from "next";
import {
  // Fira_Sans,
  // Fira_Sans_Condensed,
  Geist,
  Geist_Mono,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "rsuite/dist/rsuite-no-reset.min.css";
import { CustomProvider } from "rsuite";
import { Toaster } from "@/components/ui/toaster";
import { companyName } from "./utils/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const firaSans = Fira_Sans_Condensed({
//   display: "swap",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   adjustFontFallback: false,
// });

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${companyName} | Rental And Transportation Service`,
  description:
    "3B Transport LLC was founded with the goal of providing safe and affordable group transportation across the UAE. Over the years, we have built a strong reputation as a leading provider of bus rental services by focusing on customer satisfaction, quality service, and reliability. With a passion for excellence, we have grown to serve both local and international clients, handling everything from small shuttle services to large-scale transportation needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} ${geistMono.variable} ${geistSans.variable} antialiased bg-ghostWhite text-black dark:bg-slate-800 dark:text-white`}
      >
        <CustomProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
