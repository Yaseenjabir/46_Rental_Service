"use client";
import Image from "next/image";
import BreadCrumbs from "../components/Main/BreadCrumbs/BreadCrumbs";
import { useRouter } from "next/navigation";

export default function Locations() {
  const router = useRouter();

  return (
    <>
      <BreadCrumbs data={{ title: "Locations", crumb: "locations" }} />
      <main className="w-full max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
        <div className="w-full grid grid-cols-1 gap-5 px-5 md:px-0 py-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full ">
            <Image
              width={460}
              height={616}
              alt="location-image"
              className="h-[300px] w-full rounded-t-2xl"
              src="https://alweamtransport.com/assets/images/2024/07/11/dubai-burj-al-arab-tour-travel-bus-rental.webp"
            />
            <div className="p-7 bg-white rounded-b-2xl flex flex-col gap-3 shadow-lg">
              <h1 className="font-semibold text-gray-600 text-lg">Dubai</h1>
              <p className="text-gray-400">
                Dubai is the richest city/emirate in the United Arab Emirates.
                Millions of tourists aroun...
              </p>
              <button
                onClick={() => router.push("/locations/slug")}
                className="py-2 px-3 bg-blue-500 rounded-md text-white w-min text-nowrap hover:bg-blue-600 transition-all ease-in-out duration-300"
              >
                View More
              </button>
            </div>
          </div>
          <div className="w-full ">
            <Image
              width={460}
              height={616}
              alt="location-image"
              className="h-[300px] w-full rounded-t-2xl"
              src="https://alweamtransport.com/assets/images/2024/07/11/abu-dhabi-city-tour-attractions-bus-rental.webp"
            />
            <div className="p-7 bg-white rounded-b-2xl flex flex-col gap-3 shadow-lg">
              <h1 className="font-semibold text-gray-600 text-lg">Abu Dubai</h1>
              <p className="text-gray-400">
                Abu Dhabi: Some Famous Tourist Considerable Destinations Abu
                Dhabi is one of the two rich...
              </p>
              <button
                onClick={() => router.push("/locations/slug")}
                className="py-2 px-3 bg-blue-500 rounded-md text-white w-min text-nowrap hover:bg-blue-600 transition-all ease-in-out duration-300"
              >
                View More
              </button>
            </div>
          </div>
          <div className="w-full ">
            <Image
              width={460}
              height={616}
              alt="location-image"
              className="h-[300px] w-full rounded-t-2xl"
              src="https://alweamtransport.com/assets/images/2024/07/11/sharjah-city-best-attractions-bus-rental-dubai-carrental.webp"
            />
            <div className="p-7 bg-white rounded-b-2xl flex flex-col gap-3 shadow-lg">
              <h1 className="font-semibold text-gray-600 text-lg">Sharjah</h1>
              <p className="text-gray-400">
                Sharjah: Explore the most Favorite Tourist Spots Sharjah is one
                of the emirates in the Un...
              </p>
              <button
                onClick={() => router.push("/locations/slug")}
                className="py-2 px-3 bg-blue-500 rounded-md text-white w-min text-nowrap hover:bg-blue-600 transition-all ease-in-out duration-300"
              >
                View More
              </button>
            </div>
          </div>
          <div className="w-full ">
            <Image
              width={460}
              height={616}
              alt="location-image"
              className="h-[300px] w-full rounded-t-2xl"
              src="https://alweamtransport.com/assets/images/2024/07/11/dubai-expo-city-the-human-centric-center-dubairentalbus.webp"
            />
            <div className="p-7 bg-white rounded-b-2xl flex flex-col gap-3 shadow-lg">
              <h1 className="font-semibold text-gray-600 text-lg">Expo City</h1>
              <p className="text-gray-400">
                Expo City Dubai: Know Before you Go there Dubai, a rich city
                identical with luxury and de...
              </p>
              <button
                onClick={() => router.push("/locations/slug")}
                className="py-2 px-3 bg-blue-500 rounded-md text-white w-min text-nowrap hover:bg-blue-600 transition-all ease-in-out duration-300"
              >
                View More
              </button>
            </div>
          </div>
          <div className="w-full ">
            <Image
              width={460}
              height={616}
              alt="location-image"
              className="h-[300px] w-full rounded-t-2xl"
              src="https://alweamtransport.com/assets/images/2024/07/11/palm-jumeirah-dubai-rental-bus-best-price.webp"
            />
            <div className="p-7 bg-white rounded-b-2xl flex flex-col gap-3 shadow-lg">
              <h1 className="font-semibold text-gray-600 text-lg">
                Palm Jumeirah Dubai
              </h1>
              <p className="text-gray-400">
                Palm Jumeirah Dubai: Palm Jumeirah is one of the wonders of
                Dubai. It is a manmade island...
              </p>
              <button
                onClick={() => router.push("/locations/slug")}
                className="py-2 px-3 bg-blue-500 rounded-md text-white w-min text-nowrap hover:bg-blue-600 transition-all ease-in-out duration-300"
              >
                View More
              </button>
            </div>
          </div>
          <div className="w-full ">
            <Image
              width={460}
              height={616}
              alt="location-image"
              className="h-[300px] w-full rounded-t-2xl"
              src="https://alweamtransport.com/assets/images/2024/07/11/dubai-burj-al-arab-tour-travel-bus-rental.webp"
            />
            <div
              onClick={() => router.push("/locations/slug")}
              className="p-7 bg-white rounded-b-2xl flex flex-col gap-3 shadow-lg"
            >
              <h1 className="font-semibold text-gray-600 text-lg">Dubai</h1>
              <p className="text-gray-400">
                Dubai is the richest city/emirate in the United Arab Emirates.
                Millions of tourists aroun...
              </p>
              <button className="py-2 px-3 bg-blue-500 rounded-md text-white w-min text-nowrap hover:bg-blue-600 transition-all ease-in-out duration-300">
                View More
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
