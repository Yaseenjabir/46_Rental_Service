import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

export default function CEOMessage() {
  return (
    <section className="w-full px-5 py-10 flex flex-col gap-20">
      {/* CEO Message 1 */}
      <div className="w-full flex flex-col">
        <div className="text-center md:text-start md:w-[60%]">
          <h1 className="font-bold text-xl md:text-2xl">
            Company <span className="text-headings">CEO</span>
          </h1>
          <p className="text-gray-600 text-justify">
            As the CEO, it is with great pride and dedication that I lead our
            company toward providing high-quality travel solutions that exceed
            your expectations.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10 gap-10 md:flex-row md:items-end">
          <div className="w-[300px] h-[300px]">
            <Image
              src="/assets/ceo.jpg"
              width={870}
              height={870} // Make sure to keep it square
              alt="ceo-image"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-full md:w-[50%]">
            <div className="text-center md:text-start">
              <h1 className="text-headings font-bold text-2xl">Said Arif</h1>
              <span className="text-gray-700 text-lg">
                CEO 3B Transport LLC
              </span>
            </div>
            <div className="flex items-center justify-center my-8">
              <blockquote className="flex items-center border-l-4 border-headings pl-4 text-gray-700 italic bg-blue-50 p-6 rounded-lg shadow-md flex-col">
                <FaQuoteLeft className="text-headings mr-4 text-2xl self-start" />
                <p className="text-lg text-justify">
                  At 3B Transport LLC, we are dedicated to providing safe,
                  comfortable, and reliable transportation solutions for all
                  your travel needs. Whether it is a corporate trip, school
                  excursion, or family outing, we ensure every journey is
                  smooth, enjoyable, and as memorable as the destination itself,
                  with a focus on punctuality, customer service, and safety
                </p>
                <FaQuoteRight className="text-headings mr-4 text-2xl self-end" />
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      {/* CEO Message 2 */}
      <div className="w-full flex flex-col">
        <div className="text-center md:text-start md:w-[60%] md:self-end">
          <h1 className="font-bold text-xl md:text-2xl">
            Company <span className="text-headings">Managing Director</span>
          </h1>
          <p className="text-gray-600 text-justify">
            As the Managing Director, I am honored to lead a company that stands
            at the forefront of the bus transportation industry.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10 gap-10 md:flex-row-reverse md:items-end">
          <div className="w-[300px] h-[300px]">
            <Image
              src="/assets/director.jpg"
              width={870}
              height={870} // Make sure to keep it square
              alt="ceo-image"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-full md:w-[50%]">
            <div className="text-center md:text-start">
              <h1 className="text-headings font-bold text-2xl">
                Anees Ul Hasnain
              </h1>
              <span className="text-gray-700 text-lg">
                Managing Director, 3B Transport LLC
              </span>
            </div>
            <div className="flex items-center justify-center my-8">
              <blockquote className="flex items-center border-l-4 border-headings pl-4 text-gray-700 italic bg-blue-50 p-6 rounded-lg shadow-md flex-col">
                <FaQuoteLeft className="text-headings mr-4 text-2xl self-start" />
                <p className="text-lg text-justify">
                  As the Managing Director of 3B Transport LLC, I am proud to
                  lead a company that prioritizes safe, efficient, and reliable
                  travel. With a commitment to excellence, we combine advanced
                  technology, well-maintained buses, and a dedicated team to
                  ensure every journey is smooth and hassle-free. Thank you for
                  choosing us, we look forward to continuing to exceed your
                  expectations
                </p>
                <FaQuoteRight className="text-headings mr-4 text-2xl self-end" />
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
