import { email, phone } from "@/app/utils/utils";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
export default function Common() {
  return (
    <>
      <div className="w-full flex bg-[#212529] px-5 py-2 md:py-4 text-white md:px-10 justify-center">
        <div className="w-full max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] flex flex-col lg:flex-row">
          <div className="w-full items-center gap-5 text-sm mb-7 lg:mb-0 hidden md:flex">
            <h1 className="pt-1 flex items-center justify-center gap-2">
              <FaPhone /> {phone}
            </h1>
            <h1 className="flex items-center justify-center gap-2">
              <MdEmail className="text-lg" />
              {email}
            </h1>
          </div>
          <div className="w-full  flex flex-row items-center justify-end gap-16 text-lg">
            <div className="flex items-center gap-7">
              <FaFacebookF className="cursor-pointer" />
              <FaXTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
            </div>
            <div className="flex items-center gap-7">
              <FaPinterest className="cursor-pointer" />
              <FaPhone className="cursor-pointer" />
              <MdEmail className="text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
