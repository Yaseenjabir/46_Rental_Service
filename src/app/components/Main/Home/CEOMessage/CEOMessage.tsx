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
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            quas debitis sunt ea quo perspiciatis eligendi aspernatur alias,
            atque sed.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10 gap-10 md:flex-row md:items-end">
          <div className="w-[300px] h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1577880216142-8549e9488dad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={870}
              height={870} // Make sure to keep it square
              alt="ceo-image"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-full md:w-[50%]">
            <div className="text-center md:text-start">
              <h1 className="text-headings font-bold text-2xl">Yaseen Jabir</h1>
              <span className="text-gray-700 text-lg">
                Full Stack Developer
              </span>
            </div>
            <div className="flex items-center justify-center my-8">
              <blockquote className="flex items-center border-l-4 border-headings pl-4 text-gray-700 italic bg-blue-50 p-6 rounded-lg shadow-md flex-col">
                <FaQuoteLeft className="text-headings mr-4 text-2xl self-start" />
                <p className="text-lg text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio qui, nesciunt quis illo debitis atque, cumque animi
                  molestias facilis esse asperiores mollitia aspernatur non
                  libero adipisci ratione blanditiis
                </p>
                <FaQuoteRight className="text-headings mr-4 text-2xl self-end" />
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      {/* CEO Message 2 */}
      <div className="w-full flex flex-col">
        <div className="text-center md:text-end md:w-[60%] md:self-end">
          <h1 className="font-bold text-xl md:text-2xl">
            Company <span className="text-headings">CEO</span>
          </h1>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            quas debitis sunt ea quo perspiciatis eligendi aspernatur alias,
            atque sed.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10 gap-10 md:flex-row-reverse md:items-end">
          <div className="w-[300px] h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1577880216142-8549e9488dad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={870}
              height={870} // Make sure to keep it square
              alt="ceo-image"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-full md:w-[50%]">
            <div className="text-center md:text-start">
              <h1 className="text-headings font-bold text-2xl">Yaseen Jabir</h1>
              <span className="text-gray-700 text-lg">
                Full Stack Developer
              </span>
            </div>
            <div className="flex items-center justify-center my-8">
              <blockquote className="flex items-center border-l-4 border-headings pl-4 text-gray-700 italic bg-blue-50 p-6 rounded-lg shadow-md flex-col">
                <FaQuoteLeft className="text-headings mr-4 text-2xl self-start" />
                <p className="text-lg text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio qui, nesciunt quis illo debitis atque, cumque animi
                  molestias facilis esse asperiores mollitia aspernatur non
                  libero adipisci ratione blanditiis
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
