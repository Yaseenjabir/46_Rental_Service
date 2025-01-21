import Description from "./Description";
import Search from "./Search";
import ServiceList from "./ServiceList";

export default function FindServicesNearby() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-5 px-3 gap-10">
      <Search />
      <Description />
      <ServiceList />
    </section>
  );
}
