import Image from "next/image";
import { Nav } from "../Header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BookingDialog from "../Common/BookingDialog";
import { client } from "@/sanity/lib/client";
export default function Desktop({
  navClasses,
  navs,
  showDialog,
  setShowDialog,
}: {
  navClasses: string;
  navs: Nav[];
  showDialog: boolean;
  setShowDialog: (val: boolean) => void;
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await client.fetch(
        `*[_type == "vehicle"]{name, "slug" : slug.current}`
      );
      setData(res);
    }
    fetchData();
  }, []);

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
        className={`w-full items-center transition-all ease-in-out duration-300 justify-center hidden xl:flex z-30 sticky ${
          isSticky ? "bg-white shadow-lg top-0" : "bg-ghostWhite"
        }`}
      >
        <div className="xl:max-w-[1140px] w-full py-3 flex items-center justify-between">
          <Link href={"/"}>
            <div>
              <Image
                alt="logo"
                src="/assets/logos/png-log.png"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <nav>
            <ul className="text-tropicalIndigo flex items-center justify-between gap-5 font-bold">
              {navs.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`${navClasses} ${
                      pathName === item.url &&
                      "text-headings border-b-[2px] rounded-bl-md border-headings"
                    }`}
                  >
                    <Link href={item.url}>{item.nav}</Link>
                  </li>
                );
              })}
              <li>
                <button
                  aria-label="Book Now"
                  onClick={() => setShowDialog(true)}
                  className="rounded-full py-2 px-3 border border-tropicalIndigo text-tropicalIndigo font-normal w-min text-nowrap hover:bg-tropicalIndigo hover:text-white transition-all ease-in-out duration-300"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <BookingDialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        data={data}
      />
    </>
  );
}
