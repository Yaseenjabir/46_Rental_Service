import { companyName } from "@/app/utils/utils";

export default function Description() {
  return (
    <div className="flex flex-col gap-2 text-center max-w-[720px] lg:max-w-[980px] xl:max-w-[1160px]">
      <h4 className="font-semibold text-tropicalIndigo px-5 text-sm">
        Top-Quality Bus Rental Services in {companyName}: Comfort, Safety, and
        Affordability for Every Trip
      </h4>
      <h1 className="font-bold text-headings text-3xl px-3">
        Find Buses Rental & Chauffer Service nearby
      </h1>
      <p className="text-gray-600 tracking-wide text-start">
        Al Weam Bus Rental Dubai is your number one service provider, with
        drivers all over Dubai and the UAE. We can transport you across all
        areas of Dubai and the UAE as well. We are offering multiple tour plans
        for travelers. Dependable bus rental near you! Find an ideal vehicle
        with a quick quote. Al Weam is your one-unlimited for all your
        transportation needs. Discover more about your daily rentals and monthly
        deals. Whether looking for to hire a minibus in dubai, the cheapest car,
        van rental, or the best deal on a big bus.
      </p>
    </div>
  );
}
