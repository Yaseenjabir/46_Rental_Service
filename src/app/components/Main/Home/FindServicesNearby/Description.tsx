import { companyLocation, companyName } from "@/app/utils/utils";

export default function Description() {
  return (
    <div className="flex flex-col gap-2 text-center max-w-[720px] lg:max-w-[980px] xl:max-w-[1160px]">
      <h4 className="font-semibold text-tropicalIndigo px-5 text-sm">
        Top Bus Rental Services in {companyLocation}: Comfort, Safety &
        Affordable Luxury Coaches, Minibuses & More
      </h4>
      <h1 className="font-bold text-headings text-3xl px-3">
        Find Nearby Bus Rental & Chauffeur Services in {companyLocation} for
        Convenient Travel
      </h1>
      <p className="text-gray-600 tracking-wide text-start">
        {companyName} is your top choice for dependable and affordable
        transportation services throughout {companyLocation} and the UAE. With a
        wide range of vehicles and experienced drivers available, we offer
        convenient solutions for all your travel needs. Whether you need a
        minibus, luxury coach, van, or large bus, we provide the best deals for
        daily, weekly, or monthly rentals. Explore our tailored tour plans and
        get a quick quote for your ideal vehicle. Discover unbeatable offers on
        bus rentals and transportation services in {companyLocation} today.
      </p>
    </div>
  );
}
