import Image from "next/image";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Nav } from "../Header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
export default function Mobile({
  navClasses,
  navs,
  setShowDialog,
}: {
  navClasses: string;
  navs: Nav[];
  showDialog: boolean;
  setShowDialog: (val: boolean) => void;
}) {
  const [slided, setSlided] = useState(true);
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
        className={`w-full flex flex-col items-center justify-center sticky top-0 ${isSticky && "bg-white shadow-xl"} transition-all ease-in-out duration-300 z-20`}
      >
        <div className="w-full py-5 px-5 flex items-center justify-between max-w-[760px] lg:max-w-[1000px] xl:hidden">
          <Link href={"/"}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Image
                alt="logo"
                src="/assets/logos/png-log.png"
                width={40}
                height={50}
              />
            </motion.div>
          </Link>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <RxHamburgerMenu
              className="text-2xl cursor-pointer hover:scale-125 transition-all ease-in-out duration-300"
              onClick={() => setSlided(false)}
            />
          </motion.div>
        </div>
      </header>
      {/* Sliding Menu */}
      <div
        className={`w-full z-50 xl:hidden h-screen fixed top-0 left-0 px-5 flex items-center justify-center bg-tropicalIndigo transition-all ease-in-out duration-1000 ${
          slided ? "opacity-0 invisible delay-500" : "opacity-100 visible"
        }`}
      >
        <div
          className={` bg-white rounded-xl w-full p-5 transition-all ease-in-out duration-500 relative ${
            slided ? "translate-x-[120%]" : "translate-x-0 delay-1000"
          }`}
        >
          <nav>
            <ul className="flex gap-5 text-tropicalIndigo flex-col font-bold">
              {navs.map((item: Nav) => {
                return (
                  <li
                    key={item.id}
                    className={`${
                      item.url === pathName &&
                      "border-b-4 border-b-headings rounded-bl-lg"
                    } px-1`}
                  >
                    <Link
                      onClick={() => setSlided(true)}
                      href={item.url}
                      className={`${navClasses}`}
                    >
                      {item.nav}
                    </Link>
                  </li>
                );
              })}

              <button
                onClick={() => {
                  setSlided(true);
                  setShowDialog(true);
                }}
                className="rounded-full py-2 px-3 border border-tropicalIndigo text-tropicalIndigo font-normal w-min text-nowrap hover:bg-tropicalIndigo hover:text-white transition-all ease-in-out duration-300"
              >
                Book Now
              </button>
            </ul>
          </nav>
          <RxCross2
            onClick={() => setSlided(true)}
            className="absolute top-2 right-2 text-2xl cursor-pointer text-tropicalIndigo hover:animate-spin"
          />
        </div>
      </div>
    </>
  );
}
