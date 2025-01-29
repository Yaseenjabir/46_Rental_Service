import Image from "next/image";
import { Nav } from "../Header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BookingDialog from "../Common/BookingDialog";
import { client } from "@/sanity/lib/client";
import { motion } from "motion/react";
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <Image
                alt="logo"
                src="/assets/logos/png-log.png"
                width={50}
                height={50}
              />
            </motion.div>
          </Link>
          <nav>
            <ul className="text-tropicalIndigo flex items-center justify-between gap-5 font-bold">
              {navs.map((item, index) => {
                return (
                  <motion.li
                    initial={{ y: -10 }} // Start from y: 10
                    animate={{ y: 0 }} // End at y: 0
                    transition={{
                      type: "spring",
                      delay: index * 0.1, // Staggered delay
                    }}
                    key={item.id}
                    className={`${navClasses} ${
                      pathName === item.url && "text-headings underline pb"
                    }`}
                  >
                    <Link href={item.url}>{item.nav}</Link>
                  </motion.li>
                );
              })}
              <motion.button
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                whileInView={{
                  y: 0,
                  transition: {
                    type: "spring",
                    delay: 1,
                  },
                }}
                onClick={() => setShowDialog(true)}
                className="rounded-full py-2 px-3 border border-tropicalIndigo text-tropicalIndigo font-normal w-min text-nowrap hover:bg-tropicalIndigo hover:text-white transition-all ease-in-out duration-300"
              >
                Book Now
              </motion.button>
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
