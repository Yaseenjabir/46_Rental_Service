"use client";

import { usePathname } from "next/navigation";
import Common from "./Common/Common";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";
import { useState } from "react";

export interface Nav {
  id: number;
  nav: string;
  url: string;
}

export default function Header() {
  const navClasses: string =
    "cursor-pointer hover:text-tropicalIndigoLight transition-all ease-in-out duration-300 w-min text-nowrap";

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
  const [showDialog, setShowDialog] = useState(false);

  const pathName = usePathname();

  return (
    <>
      {pathName === "/auth" ||
        (!pathName?.startsWith("/studio") && (
          <>
            <Common />
            <Mobile
              navClasses={navClasses}
              navs={navs}
              showDialog={showDialog}
              setShowDialog={setShowDialog}
            />
            <Desktop
              navClasses={navClasses}
              navs={navs}
              showDialog={showDialog}
              setShowDialog={setShowDialog}
            />
          </>
        ))}
    </>
  );
}
