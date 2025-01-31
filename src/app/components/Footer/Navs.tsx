import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Data {
  name: string;
  id: number;
  link: string;
}

interface Nav {
  title: string;
  data: Data[];
}

export default function Navs({ title, data }: Nav) {
  return (
    <div className={`mt-10 lg:mt-0 w-[50%] lg:w-[33%]`}>
      <h1 className="text-headings font-semibold text-sm">{title}</h1>
      <ul className="py-2 flex flex-col gap-3">
        {data.map((item: Data) => {
          return (
            <li key={item.id} className="flex items-center gap-1 text-gray-400">
              <MdKeyboardArrowRight />
              <Link
                className="text-headings text-sm hover:text-headings w-min text-nowrap"
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        {/* <li className="flex items-center gap-1 text-gray-400">
            <MdKeyboardArrowRight />
            <a
              className="text-[#5d49e2] text-sm hover:text-headings w-min text-nowrap"
              href=""
            >
              About Us
            </a>
          </li>
          <li className="flex items-center gap-1 text-gray-400">
            <MdKeyboardArrowRight />
            <a
              className="text-[#5d49e2] text-sm hover:text-headings w-min text-nowrap"
              href=""
            >
              Blog
            </a>
          </li>
          <li className="flex items-center gap-1 text-gray-400">
            <MdKeyboardArrowRight />
            <a
              className="text-[#5d49e2] text-sm hover:text-headings w-min text-nowrap"
              href=""
            >
              Contact Us
            </a>
          </li>
          <li className="flex items-center gap-1 text-gray-400">
            <MdKeyboardArrowRight />
            <a
              className="text-[#5d49e2] text-sm hover:text-headings w-min text-nowrap"
              href=""
            >
              Terms of Service
            </a>
          </li> */}
      </ul>
    </div>
  );
}
