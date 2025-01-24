import Image from "next/image";
import { Nav } from "../Header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Desktop({
  navClasses,
  navs,
}: {
  navClasses: string;
  navs: Nav[];
}) {
  const pathName = usePathname();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`w-full items-center transition-all ease-in-out duration-300 justify-center hidden xl:flex sticky z-50 ${
          isSticky ? "bg-white shadow-lg top-0" : "bg-ghostWhite"
        }`}
      >
        <div className="xl:max-w-[1140px] w-full py-3 flex items-center justify-between">
          <Link href={"/"}>
            <Image
              alt="logo"
              src="/assets/logos/png-log.png"
              width={50}
              height={50}
            />
          </Link>
          <nav>
            <ul className="text-tropicalIndigo flex items-center justify-between gap-5 font-bold">
              {navs.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`${navClasses} ${
                      pathName === item.url && "text-headings underline pb"
                    }`}
                  >
                    <Link href={item.url}>{item.nav}</Link>
                  </li>
                );
              })}
              <button className="rounded-full py-2 px-3 border border-tropicalIndigo text-tropicalIndigo font-normal w-min text-nowrap hover:bg-tropicalIndigo hover:text-white transition-all ease-in-out duration-300">
                Book Now
              </button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
