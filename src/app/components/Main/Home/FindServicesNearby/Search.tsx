import { FaWhatsapp } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Search() {
  return (
    <div className="w-full bg-white border border-black rounded-xl py-3 px-2 text-center text-gray-700 flex flex-col gap-3 lg:flex-row lg:items-center max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:rounded-full xl:px-5">
      <div className="w-full">
        <h1>Choose Location</h1>
        <Select>
          <SelectTrigger className="w-full rounded-full py-5 bg-slate-50 outline-none">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full">
        <h1>Choose Vehicle Type</h1>
        <Select>
          <SelectTrigger className="w-full rounded-full py-5 bg-slate-50 outline-none">
            <SelectValue placeholder="Vehicle" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full">
        <h1>Choose Transport Type</h1>
        <Select>
          <SelectTrigger className="w-full rounded-full py-5 bg-slate-50 outline-none">
            <SelectValue placeholder="Transport" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full flex gap-5 lg:h-min lg:mt-5 lg:gap-2">
        <button className="rounded-full py-2 w-full bg-ghostWhite flex items-center justify-center gap-2 font-semibold text-tropicalIndigo border border-transparent hover:border-gray-700 hover:bg-transparent hover:text-gray-700 transition-all ease-in-out duration-300">
          <FaWhatsapp className="text-xl" />
          Booking
        </button>
        <button className="rounded-full py-2 w-full bg-ghostWhite flex items-center justify-center gap-2 font-semibold text-tropicalIndigo border border-transparent hover:border-gray-700 hover:bg-transparent hover:text-gray-700 transition-all ease-in-out duration-300">
          <IoIosSearch className="text-2xl" />
          Find
        </button>
      </div>
    </div>
  );
}
