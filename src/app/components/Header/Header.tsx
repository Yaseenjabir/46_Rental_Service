"use client";

import { usePathname } from "next/navigation";
import Common from "./Common/Common";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";

export interface Nav {
  id: number;
  nav: string;
  url: string;
}

export default function Header() {
  const navClasses: string =
    "cursor-pointer hover:text-tropicalIndigoLight transition-all ease-in-out duration-300 w-min text-nowrap";

  const pathName = usePathname();

  const navs: Nav[] = [
    { id: 1, nav: "Home", url: "/" },
    { id: 2, nav: "Services", url: "/services" },
    { id: 3, nav: "Fleets", url: "/fleets" },
    { id: 4, nav: "Vehicle Types", url: "/vehicle-types" },
    { id: 5, nav: "Destinations", url: "/locations" },
    { id: 6, nav: "Blog", url: "/blog" },
    { id: 7, nav: "About", url: "/about" },
    { id: 8, nav: "Contact", url: "/contact" },
  ];

  return (
    <>
      {pathName !== "/auth" && (
        <>
          <Common />
          <Mobile navClasses={navClasses} navs={navs} />
          <Desktop navClasses={navClasses} navs={navs} />
        </>
      )}
    </>
  );
}
