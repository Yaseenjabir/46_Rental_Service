"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BreadCrumbs from "../components/Main/BreadCrumbs/BreadCrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { RangeSlider } from "rsuite";
import { FaFilter } from "react-icons/fa";
import FleetsList from "../components/Main/Fleets/FleetsList";
import { Vehicle } from "../utils/utils";
import Loader from "../utils/Loader";
import { brands, ProjectVehicleTypes } from "../utils/utilInfo";

function Fleets() {
  const [value, setValue] = useState([0, 700]);
  const [data, setData] = useState<Vehicle[]>([]);
  const [filteredData, setFilteredData] = useState<Vehicle[]>([]);
  const [searchTerm, setSearchTerm] = useState(""); // For vehicle title search
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [loader, setLoader] = useState(true);

  const searchParams = useSearchParams();

  const handleTypeChange = (id: string) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((type) => type !== id) : [...prev, id]
    );
  };

  const handleBrandChange = (id: string) => {
    setSelectedBrands((prev) =>
      prev.includes(id) ? prev.filter((brand) => brand !== id) : [...prev, id]
    );
  };

  const filterByPrice = (vehicle: Vehicle) => {
    const { perHourRental, fullDayRental, airportTransfer, weeklyRental } =
      vehicle;
    const [minPrice, maxPrice] = value;

    const priceFits =
      (perHourRental >= minPrice && perHourRental <= maxPrice) ||
      (fullDayRental >= minPrice && fullDayRental <= maxPrice) ||
      (airportTransfer >= minPrice && airportTransfer <= maxPrice) ||
      (weeklyRental >= minPrice && weeklyRental <= maxPrice);
    return priceFits;
  };

  const filterVehicles = () => {
    return data.filter((vehicle) => {
      const matchesType = selectedTypes.length
        ? selectedTypes.includes(vehicle.vehicleType)
        : true;
      const matchesBrand = selectedBrands.length
        ? selectedBrands.includes(vehicle.brand)
        : true;
      const matchesPrice = filterByPrice(vehicle);
      const matchesLocation = location
        ? vehicle.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesTitle = vehicle.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return (
        matchesType &&
        matchesBrand &&
        matchesPrice &&
        matchesTitle &&
        matchesLocation
      );
    });
  };

  useEffect(() => {
    const locationParam = searchParams && searchParams.get("location");
    const brand = searchParams && searchParams.get("brand");
    const vehicleType = searchParams && searchParams.get("vehicleType");
    const minPrice = searchParams && searchParams.get("minPrice");
    const maxPrice = searchParams && searchParams.get("maxPrice");

    if (locationParam) setLocation(locationParam);
    if (brand) setSelectedBrands(brand.split(","));
    if (vehicleType) setSelectedTypes(vehicleType.split(","));
    if (minPrice && maxPrice) setValue([Number(minPrice), Number(maxPrice)]);

    const filtered = filterVehicles();
    setFilteredData(filtered);
  }, [searchParams, data]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoader(true);
        const res = await fetch("/api/getAllVehicles");

        if (!res.ok) {
          throw new Error("Error occurred while fetching data");
        }
        const data = await res.json();
        setData(data);
        setFilteredData(data);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, []);

  const handleFilterClick = () => {
    const filtered = filterVehicles();
    setFilteredData(filtered);
  };

  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedBrands([]);
    setValue([0, 700]);
    setSearchTerm("");
    setLocation("");
    setFilteredData(data);
  };

  return (
    <>
      <BreadCrumbs data={{ title: "Fleets", crumb: "fleets" }} />
      <main className="w-full py-10 px-5 flex flex-col gap-5 max-w-[740px] lg:max-w-[980px] xl:max-w-[1180px] mx-auto lg:flex-row">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="lg:w-[400px]"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-gray-600 text-xl lg:text-base text-nowrap">
              What are you looking for?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col bg-white py-3 px-2 rounded-lg">
              {/* Search Bar */}
              <div className="flex w-full items-center justify-center border px-2 rounded-lg">
                <Input
                  placeholder="Type to search..."
                  className="outline-none focus:ring-0 border-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IoSearch className="text-2xl text-gray-400 border-l w-10 cursor-pointer" />
              </div>
              <hr className="w-full my-6 bg-gray-500" />
              {/* Vehicle Types Checkbox */}
              <div className="flex flex-col gap-3">
                <h1 className="text-gray-600 font-semibold text-lg">
                  Vehicle Types
                </h1>
                <div className="w-full h-[200px] overflow-y-auto">
                  {ProjectVehicleTypes.map((item) => (
                    <div
                      key={item.value}
                      className="flex items-center gap-3 my-1 text-gray-500 p-2 bg-slate-50"
                    >
                      <Checkbox
                        id={item.value}
                        onCheckedChange={() => handleTypeChange(item.value)}
                      />
                      <Image
                        src={item.img ? item.img : ""}
                        width={35}
                        height={15}
                        alt="vehicle"
                      />
                      <label
                        htmlFor={item.value}
                        className="text-sm font-medium leading-none"
                      >
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="w-full my-6 bg-gray-500" />
              {/* Brands Checkbox */}
              <div className="flex flex-col gap-3">
                <h1 className="text-gray-600 font-semibold text-lg">Brands</h1>
                <div className="w-full h-[200px] overflow-y-scroll">
                  {brands.map((item) => (
                    <div
                      key={item.value}
                      className="flex items-center gap-3 my-1 text-gray-500 p-2 bg-slate-50"
                    >
                      <Checkbox
                        id={item.value}
                        onCheckedChange={() => handleBrandChange(item.value)}
                      />
                      <label
                        htmlFor={item.value}
                        className="text-sm font-medium leading-none"
                      >
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between mb-1">
                  <span>{value[0]} AED</span>
                  <span>{value[1]} AED</span>
                </div>
                <div className="px-2">
                  <RangeSlider
                    min={0}
                    max={2000}
                    onChange={(val) => setValue(val)}
                    defaultValue={[0, 700]}
                  />
                </div>
              </div>
              {/* Filter Button */}
              <button
                aria-label="Filter"
                onClick={handleFilterClick}
                className="w-full bg-tropicalIndigoLight rounded py-3 text-white mt-5 font-semibold text-lg flex items-center justify-center gap-2 border border-tropicalIndigoLight hover:bg-transparent hover:text-tropicalIndigo transition-all ease-in-out duration-300"
              >
                <FaFilter className="text-sm" />
                Filter
              </button>
              {/* Clear Filter Button */}
              <button
                onClick={clearFilters} // Reset all filters
                className="w-full bg-red-500 rounded py-3 text-white mt-5 font-semibold text-lg flex items-center justify-center gap-2 border border-red-500 hover:bg-transparent hover:text-red-500 transition-all ease-in-out duration-300"
              >
                Clear Filters
              </button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {loader ? (
          <Loader width={20} height={20} boxSize={100} />
        ) : filteredData.length === 0 ? (
          <p className="text-headings font-semibold text-2xl md:mt-3">
            Sorry no data available
          </p>
        ) : (
          <FleetsList data={filteredData} />
        )}
      </main>
    </>
  );
}

export default function WrappedInSuspense() {
  return (
    <Suspense>
      <Fleets />
    </Suspense>
  );
}
