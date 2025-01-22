import BestRentalService from "./components/Main/Home/BestRentalService/BestRentalService";
import Brands from "./components/Main/Home/Brands/Brands";
import FindServicesNearby from "./components/Main/Home/FindServicesNearby/FindServicesNearby";
import HeroSection from "./components/Main/Home/HeroSection/HeroSection";
import OurCostumer from "./components/Main/Home/OurCostumers/OurCostumers";
import RentalPartner from "./components/Main/Home/RentalPartner/RentalPartner";
import Stats from "./components/Main/Home/Stats/Stats";
import TopTransportCompany from "./components/Main/Home/TopTransportCompany/TopTransportCompany";

export default function Home() {
  return (
    <>
      <main className="bg-ghostWhite w-full flex items-center justify-center">
        <div className="w-full max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <HeroSection />
          <FindServicesNearby />
          <RentalPartner />
          <BestRentalService />
          <Stats />
          <TopTransportCompany />
          <OurCostumer />
          <Brands />
        </div>
      </main>
    </>
  );
}
