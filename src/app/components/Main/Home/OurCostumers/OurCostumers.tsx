import SliderComp from "./Slider";

export default function OurCostumer() {
  return (
    <section className="w-full py-10 px-5">
      <div className="text-center flex flex-col items-center justify-center gap-2">
        <h3 className="text-tropicalIndigo text-sm font-semibold">
          OUR COSTUMERS
        </h3>
        <h1 className="text-headings text-3xl font-bold">
          Dont take our words for it. Take theirs
        </h1>
      </div>
      <SliderComp />
    </section>
  );
}
