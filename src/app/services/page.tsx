import React from "react";
import BreadCrumbs from "../components/Main/BreadCrumbs/BreadCrumbs";
import RentalList from "../components/Main/Home/RentalPartner/RentalList";

export default function Services() {
  return (
    <section className="bg-ghostWhite">
      <BreadCrumbs
        data={{ title: "Our Bus Rental Services", crumb: "services" }}
      />
      <div className="py-10 max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] mx-auto">
        <div className="text-center flex flex-col items-center justify-center gap-2 px-5">
          <h3 className="text-tropicalIndigo text-sm font-semibold">
            Bus Rental Dubai Services
          </h3>
          <h1 className="text-headings text-3xl font-bold">
            We offer Top Services in Dubai
          </h1>
        </div>
        <RentalList />
      </div>
    </section>
  );
}
