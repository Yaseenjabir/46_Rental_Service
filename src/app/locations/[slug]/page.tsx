import BreadCrumbs from "@/app/components/Main/BreadCrumbs/BreadCrumbs";
import Image from "next/image";

export default async function CityName() {
  // const { slug } = await params;
  return (
    <>
      <BreadCrumbs data={{ title: "Location", crumb: "location" }} />
      <section className="w-full py-10 px-5 max-w-[720px] lg:max-w-[960px] mx-auto">
        <div className="bg-white font-sans text-gray-900">
          <Image
            height={614}
            width={1130}
            alt="location-pic"
            src="https://images.unsplash.com/photo-1672215373027-1692c14df121?q=80&w=1369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <header className="mb-6">
              <h1 className="text-4xl font-bold text-center text-indigo-600">
                Discover Abu Dhabi: The Jewel of the UAE
              </h1>
              <p className="text-sm text-center text-gray-500">
                Exploring the beauty, culture, and attractions of Abu Dhabi
              </p>
            </header>

            <article>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Introduction
                </h2>
                <p className="text-lg text-gray-700">
                  Abu Dhabi, the capital of the United Arab Emirates, is a city
                  that beautifully combines modernity with rich cultural
                  heritage. Known for its luxurious lifestyle, world-className
                  architecture, and awe-inspiring landscapes, Abu Dhabi is a
                  city that offers something for everyone.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Top Attractions in Abu Dhabi
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Whether youre a history buff, an art enthusiast, or simply
                  someone who enjoys breathtaking views, Abu Dhabi has it all.
                  Here are some of the top attractions you should not miss when
                  visiting:
                </p>

                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
                  <li>
                    <strong className="text-indigo-600">
                      Sheikh Zayed Grand Mosque:
                    </strong>
                    One of the largest mosques in the world, this architectural
                    masterpiece is a must-see for any visitor.
                  </li>
                  <li>
                    <strong className="text-indigo-600">
                      Louvre Abu Dhabi:
                    </strong>
                    A stunning museum that showcases art from various cultures
                    and civilizations.
                  </li>
                  <li>
                    <strong className="text-indigo-600">Yas Island:</strong>{" "}
                    Home to world-famous attractions like Ferrari World, Yas
                    Waterworld, and Yas Marina Circuit.
                  </li>
                  <li>
                    <strong className="text-indigo-600">Qasr Al Hosn:</strong> A
                    historical fort that offers insights into the citys heritage
                    and the birth of the UAE.
                  </li>
                  <li>
                    <strong className="text-indigo-600">
                      Saadiyat Island:
                    </strong>{" "}
                    Known for its pristine beaches, luxury resorts, and cultural
                    institutions, such as the Guggenheim Abu Dhabi (coming
                    soon).
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Cultural Heritage of Abu Dhabi
                </h2>
                <p className="text-lg text-gray-700">
                  Abu Dhabi offers visitors a glimpse into the cultural richness
                  and traditions of the UAE. The city is home to many cultural
                  landmarks, museums, and galleries, such as:
                </p>
                <ul className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
                  <li>
                    <strong className="text-indigo-600">
                      Heritage Village:
                    </strong>{" "}
                    A reconstructed traditional village that offers a glimpse of
                    life in the UAE before its modernization.
                  </li>
                  <li>
                    <strong className="text-indigo-600">Al Ain Oasis:</strong> A
                    UNESCO World Heritage site, this ancient oasis is home to
                    more than 147,000 date palms and provides insight into the
                    countrys agriculture and heritage.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Modern Architecture
                </h2>
                <p className="text-lg text-gray-700">
                  Abu Dhabi is also famous for its striking modern architecture,
                  with futuristic skyscrapers and grand structures. Some of the
                  iconic architectural marvels in the city include:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
                  <li>
                    <strong className="text-indigo-600">Etihad Towers:</strong>{" "}
                    A collection of five stunning towers that define the skyline
                    of Abu Dhabi.
                  </li>
                  <li>
                    <strong className="text-indigo-600">
                      The Capital Gate:
                    </strong>{" "}
                    Also known as the Leaning Tower of Abu Dhabi, this unique
                    building leans at a 18-degree angle.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Conclusion
                </h2>
                <p className="text-lg text-gray-700">
                  Abu Dhabi is a city of contrasts, where ancient traditions
                  coexist with the cutting-edge advancements of the modern
                  world. Its rich culture, breathtaking architecture, and
                  world-className attractions make it one of the most
                  fascinating cities in the world. Whether youre looking for a
                  cultural experience or a luxurious getaway, Abu Dhabi has
                  something to offer everyone.
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
