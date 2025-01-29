"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Use useSearchParams for query params
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
import { brands, Vehicle, vehicleTypes } from "../utils/utils";

function Fleets() {
  const [value, setValue] = useState([0, 700]);
  const [data, setData] = useState<Vehicle[]>([]);
  const [filteredData, setFilteredData] = useState<Vehicle[]>([]);
  const [searchTerm, setSearchTerm] = useState(""); // For vehicle title search
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [location, setLocation] = useState(""); // Separate state for location

  const searchParams = useSearchParams(); // Access query parameters

  // Filter by vehicle type
  const handleTypeChange = (id: string) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((type) => type !== id) : [...prev, id]
    );
  };

  // Filter by brand
  const handleBrandChange = (id: string) => {
    setSelectedBrands((prev) =>
      prev.includes(id) ? prev.filter((brand) => brand !== id) : [...prev, id]
    );
  };

  // Price filter logic
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

  // Filter vehicles by selected criteria
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
        : true; // Filter by location
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

  // Handle query params change and filter based on them
  useEffect(() => {
    const locationParam = searchParams && searchParams.get("location");
    const brand = searchParams && searchParams.get("brand");
    const vehicleType = searchParams && searchParams.get("vehicleType");
    const minPrice = searchParams && searchParams.get("minPrice");
    const maxPrice = searchParams && searchParams.get("maxPrice");

    // Set the filters based on query params
    if (locationParam) setLocation(locationParam); // Use location for location filter
    if (brand) setSelectedBrands(brand.split(","));
    if (vehicleType) setSelectedTypes(vehicleType.split(","));
    if (minPrice && maxPrice) setValue([Number(minPrice), Number(maxPrice)]);

    // Apply the filters immediately if query params are present
    const filtered = filterVehicles();
    setFilteredData(filtered);
  }, [searchParams, data]);

  // Fetch the vehicles data from API
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/getAllVehicles");

        if (!res.ok) {
          throw new Error("Error occurred while fetching data");
        }
        const data = await res.json();
        setData(data);
        setFilteredData(data); // Initially show all vehicles
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // Handle Filter click (manual filtering)
  const handleFilterClick = () => {
    const filtered = filterVehicles();
    setFilteredData(filtered);
  };

  // Handle Clear Filters click (reset filters)
  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedBrands([]);
    setValue([0, 700]);
    setSearchTerm("");
    setLocation(""); // Clear location as well
    setFilteredData(data); // reset filtered data to all vehicles
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
                  value={searchTerm} // Bind input value to searchTerm
                  onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm as the user types
                />
                <IoSearch className="text-2xl text-gray-400 border-l w-10 cursor-pointer" />
              </div>
              <hr className="w-full my-6 bg-gray-500" />
              {/* Vehicle Types Checkbox */}
              <div className="flex flex-col gap-3">
                <h1 className="text-gray-600 font-semibold text-lg">
                  Vehicle Types
                </h1>
                <div className="w-full h-[200px] overflow-y-scroll">
                  {vehicleTypes.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 my-1 text-gray-500 p-2 bg-slate-50"
                    >
                      <Checkbox
                        id={item.id}
                        onCheckedChange={() => handleTypeChange(item.id)}
                      />
                      <label
                        htmlFor={item.id}
                        className="text-sm font-medium leading-none"
                      >
                        <Image
                          src={item.img}
                          width={35}
                          height={15}
                          alt="vehicle"
                        />
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
                      key={item.id}
                      className="flex items-center gap-3 my-1 text-gray-500 p-2 bg-slate-50"
                    >
                      <Checkbox
                        id={item.id}
                        onCheckedChange={() => handleBrandChange(item.id)}
                      />
                      <label
                        htmlFor={item.id}
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
                onClick={handleFilterClick} // Filter logic is applied here
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
        <FleetsList data={filteredData} />
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
