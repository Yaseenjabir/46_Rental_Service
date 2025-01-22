import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsFillBusFrontFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
export default function Stats() {
  return (
    <section className="py-10 px-5">
      <div className="text-center flex flex-col items-center justify-center gap-2">
        <h3 className="text-tropicalIndigo text-sm font-semibold">OUR STATS</h3>
        <h1 className="text-headings text-3xl font-bold">
          These Numbers Defines Us | Count on us
        </h1>
      </div>
      <div className="grid grid-cols-1 place-content-center gap-10 lg:gap-5 mt-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex py-12 lg:py-7 px-5 lg:px-8 bg-white items-center justify-start gap-3 shadow-xl">
          <MdOutlineEmojiEmotions className="text-5xl text-orange-500" />
          <div className="flex  flex-col items-start justify-center">
            <h1 className="font-bold text-headings text-3xl">4250</h1>
            <p className="text-gray-600 lg:text-sm">Happy Clients in 2024</p>
          </div>
        </div>
        <div className="flex py-12 lg:py-7 px-5 lg:px-8 bg-white items-center justify-start gap-3 shadow-xl">
          <BsFillBusFrontFill className="text-4xl text-blue-500 mr-2" />
          <div className="flex  flex-col items-start justify-center">
            <h1 className="font-bold text-headings text-3xl">67</h1>
            <p className="text-gray-600 lg:text-sm">Latest Vehicles</p>
          </div>
        </div>
        <div className="flex py-12 lg:py-7 px-5 lg:px-8 bg-white items-center justify-start gap-3 shadow-xl">
          <MdOutlineSupportAgent className="text-5xl text-pink-500" />
          <div className="flex  flex-col items-start justify-center">
            <h1 className="font-bold text-headings text-3xl">24</h1>
            <p className="text-gray-600 lg:text-sm">Hours Of Support</p>
          </div>
        </div>
        <div className="flex py-12 lg:py-7 px-5 lg:px-8 bg-white items-center justify-start gap-3 shadow-xl">
          <FaUsers className="text-5xl text-green-500" />
          <div className="flex  flex-col items-start justify-center">
            <h1 className="font-bold text-headings text-3xl">15</h1>
            <p className="text-gray-600 lg:text-sm">Years Rental Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
