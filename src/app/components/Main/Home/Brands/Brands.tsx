import SliderComp from "./BrandsSlider";

export default function Brands() {
  return (
    <section className="py-10 px-5 w-full">
      <div className="text-center flex flex-col items-center justify-center gap-2">
        <h3 className="text-tropicalIndigo text-sm font-semibold">BRANDS</h3>
        <h1 className="text-headings text-3xl font-bold">
          The fleet types we have! Pick your passion
        </h1>
      </div>
      <SliderComp />
    </section>
  );
}
