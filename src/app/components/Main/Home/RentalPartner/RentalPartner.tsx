import Description from "./Description";
import RentalList from "./RentalList";

export default function RentalPartner() {
  return (
    <section className="mt-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-[720px] lg:max-w-[980px] xl:max-w-[1160px]">
        <Description />
        <RentalList />
      </div>
    </section>
  );
}
