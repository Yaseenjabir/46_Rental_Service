import Image from "next/image";

export default function Desktop({ navClasses }: { navClasses: string }) {
  return (
    <>
      <header className="w-full items-center justify-center hidden xl:flex">
        <div className="xl:max-w-[1140px] w-full py-5 flex items-center justify-between">
          <Image alt="logo" src="/assets/logo.png" width={200} height={50} />
          <nav>
            <ul className="text-tropicalIndigo flex items-center justify-between gap-5 font-bold">
              <li className={`${navClasses}`}>Home</li>
              <a className={navClasses}>Services</a>
              <a className={navClasses}>Fleets</a>
              <a className={navClasses}>Vehicle Types</a>
              <a className={navClasses}>Destinations</a>
              <a className={navClasses}>Blogs</a>
              <a className={navClasses}>Payment</a>
              <a className={navClasses}>About</a>
              <a className={navClasses}>Contact</a>
              <button className="rounded-full py-2 px-3 border border-tropicalIndigo text-tropicalIndigo font-normal w-min text-nowrap hover:bg-tropicalIndigo hover:text-white transition-all ease-in-out duration-300">
                Book Now
              </button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
