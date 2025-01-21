import FindServicesNearby from "./components/Main/Home/FindServicesNearby/FindServicesNearby";
import HeroSection from "./components/Main/Home/HeroSection/HeroSection";
import RentalPartner from "./components/Main/Home/RentalPartner/RentalPartner";

export default function Home() {
  return (
    <>
      <main className="bg-ghostWhite">
        <HeroSection />
        <FindServicesNearby />
        <RentalPartner />
      </main>
    </>
  );
}
