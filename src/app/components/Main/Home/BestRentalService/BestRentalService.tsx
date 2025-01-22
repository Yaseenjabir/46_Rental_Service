import { companyLocation } from "@/app/utils/utils";
import { IoShieldSharp } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineNotes } from "react-icons/md";
import { FaCar } from "react-icons/fa";
export default function BestRentalService() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="py-14 px-5 max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 place-items-start">
        <div className="w-full flex items-center justify-center text-gray-600 flex-col text-sm">
          <div className="bg-white p-8 text-tropicalIndigo mb-7 rounded-full shadow-md">
            <IoShieldSharp className="text-5xl" />
          </div>
          <div className="flex flex-col justify-start">
            <h4 className="mb-1 font-medium text-center">Safety First</h4>
            <p>
              Safety and comfortability in a secure environment for all our
              passengers is our top priority which makes us the best bus rental
              service in dubai. We ensure a safe and comfortable vehicles are
              prepared with the most latest security features, and our staff is
              trained to guarantee smooth and secure travel. A GPS system
              installed in all our fleets for real time tracking.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center text-gray-600 flex-col text-sm">
          <div className="bg-white p-8 text-tropicalIndigo mb-7 rounded-full shadow-md">
            <IoDiamond className="text-5xl" />
          </div>
          <h4 className="mb-1 font-medium">Luxury Vehicles</h4>
          <p>
            Our high-end fleet of buses offers unparalleled comfort and fashion
            providing all our passengers with luxurious travel experience. We
            offer a wide range of luxury vehicles both for business and leisure
            travel. Our quality service keeps Al-Weam unique and the best bus
            rental service in dubai far from others.
          </p>
        </div>
        <div className="w-full flex items-center justify-center text-gray-600 flex-col text-sm">
          <div className="bg-white p-8 text-tropicalIndigo mb-7 rounded-full shadow-md">
            <MdOutlineNotes className="text-5xl" />
          </div>
          <h4 className="mb-1 font-medium">Transparent Rules</h4>
          <p>
            Accomplishing greatness includes open information entrances,
            easy-to-understand communication, consultation processes, complaints
            and feedback mechanisms, transparent pricing structures, real-time
            tracking, monitoring, independent oversight and auditing, data
            protection and privacy which is important in bus rental services in
            dubai.
          </p>
        </div>
        <div className="w-full flex items-center justify-center text-gray-600 flex-col text-sm">
          <div className="bg-white p-8 text-tropicalIndigo mb-7 rounded-full shadow-md">
            <FaCar className="text-5xl" />
          </div>
          <h4 className="mb-1 font-medium">
            Chauffeur Service in {companyLocation}
          </h4>
          <p>
            Our chauffeur services prioritize your safety and convenience,
            providing you with skilled, licensed drivers who are knowledgeable
            about the best routes and driving practices. Say goodbye to the
            worry of navigating traffic and finding parking, and enjoy the
            luxury of saving time while in transportation.
          </p>
        </div>
      </div>
    </section>
  );
}
