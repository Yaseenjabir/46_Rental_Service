"use client";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";
import Navs from "./Navs";
import { companyName } from "@/app/utils/utils";
import { usePathname } from "next/navigation";

export default function Footer() {
  const useFulLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Services", link: "/services" },
    { id: 3, name: "Destinations", link: "/locations" },
    { id: 4, name: "About Us", link: "/about" },
    { id: 5, name: "Vehicle Types", link: "/vehicle-types" },
    { id: 6, name: "Contact Us", link: "/contact" },
  ];
  const ourServices = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Privacy Policy", link: "/privacy-policy" },
    { id: 3, name: "Why Choose Us", link: "/why-us" },
    { id: 4, name: "Blog", link: "/blog" },
    { id: 5, name: "Terms of service", link: "/terms-and-conditions" },
  ];

  const pathName = usePathname();

  return (
    <>
      {pathName === "/auth" ||
        (!pathName?.startsWith("/studio") && (
          <>
            <footer
              style={{
                background:
                  "white url('https://alweamtransport.com/assets/frontend/img/footer-bg.png')",
                backgroundPosition: "center",
              }}
              className="w-full"
            >
              <div className="w-full max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto py-10 px-5 flex flex-col xl:flex-row">
                <div className="xl:w-[40%]">
                  <div className="flex items-center justify-start gap-3">
                    <Image
                      src="/assets/logos/png-log.png"
                      width={70}
                      height={70}
                      alt="logo"
                    />
                    <h1 className="text-3xl font-semibold text-headings leading-7">
                      Tourist Bus Rental in Dubai
                    </h1>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    A leading bus rental dubai, with the diverse range of new
                    fleets providing top-notch services to clients throughout
                    the city and surrounding areas.
                  </p>
                  <div className="mt-5">
                    <a className="text-sm text-tropicalIndigoLight">
                      Bus Rental Dubai
                    </a>{" "}
                    <span className="text-tropicalIndigoLight">|</span>
                    <a className="text-sm text-tropicalIndigoLight">
                      Airport Transfer
                    </a>{" "}
                    <span className="text-tropicalIndigoLight">|</span>
                    <a className="text-sm text-tropicalIndigoLight">
                      12 Seater van
                    </a>{" "}
                    <span className="text-tropicalIndigoLight">|</span>
                    <a className="text-sm text-tropicalIndigoLight">
                      Luxury Buses
                    </a>{" "}
                    <span className="text-tropicalIndigoLight">|</span>
                    <a className="text-sm text-tropicalIndigoLight">
                      Dubai Must Visit Places
                    </a>{" "}
                    <span className="text-tropicalIndigoLight">|</span>
                    <a className="text-sm text-tropicalIndigoLight">
                      Abu Dhabhi
                    </a>{" "}
                    <span className="text-tropicalIndigoLight">|</span>
                    <a className="text-sm text-tropicalIndigoLight">
                      Bus Rental Dubai
                    </a>{" "}
                    <span className="text-tropicalIndigoLight">|</span>
                    <a className="text-sm text-tropicalIndigoLight">
                      Mini Bus Rental
                    </a>{" "}
                    <span className="text-tropicalIndigoLight">|</span>
                    <a className="text-sm text-tropicalIndigoLight">
                      Bus Rental Dubai
                    </a>{" "}
                    <span className="text-tropicalIndigoLight">|</span>
                  </div>
                  <div className="flex items-center gap-2 text-2xl mt-5">
                    <FaXTwitter
                      className="cursor-pointer text-gray-400 hover:text-gray-700 transiti 
          ease-in-out duration-300"
                    />
                    <FaInstagram
                      className="cursor-pointer text-gray-400 hover:text-gray-700 transiti 
          ease-in-out duration-300"
                    />
                    <FaFacebook
                      className="cursor-pointer text-gray-400 hover:text-gray-700 transiti 
          ease-in-out duration-300"
                    />
                    <FaPinterest
                      className="cursor-pointer text-gray-400 hover:text-gray-700 transiti 
          ease-in-out duration-300"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap xl:flex-1 items-start justify-start lg:mt-10 xl:mt-0">
                  <Navs title="Useful Links" data={useFulLinks} />
                  <Navs title="Our Services" data={ourServices} />
                  <div className="w-full md:w-[50%] lg:w-[33%] flex flex-col items-center justify-center md:items-start py-5 lg:py-0 gap-5 text-sm">
                    <h4 className="text-headings font-semibold ">CONTACT US</h4>
                    <p className=" w-[200px] text-tropicalIndigo text-center md:text-start">
                      Hamsa A Building, Office 610, M Floor Al Karama - Dubai
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="flex items-center justify-center gap-1 md:justify-start">
                        <span className="text-gray-600 font-semibold">
                          Call & Whatsapp :{" "}
                        </span>
                        <span className="text-tropicalIndigo">XXXXXXXXXXX</span>
                      </p>
                      <p className="flex items-center justify-center gap-1 md:justify-start">
                        <span className="text-gray-600 font-semibold">
                          Office Landline :{" "}
                        </span>
                        <span className="text-tropicalIndigo">XXXXXXXXXXX</span>
                      </p>
                      <p className="flex items-center justify-center gap-1 md:justify-start">
                        <span className="text-gray-600 font-semibold text-nowrap">
                          Costumer Support :{" "}
                        </span>
                        <span className="text-tropicalIndigo">
                          xyz@gmail.com
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <div className="w-full text-blue-900 text-center text-sm p-5">
              <h1>
                © Copyright
                <span className="text-tropicalIndigo font-semibold ml-1">
                  {companyName}
                </span>
                . All Rights Reserved 2024
              </h1>
            </div>
          </>
        ))}
    </>
  );
}
