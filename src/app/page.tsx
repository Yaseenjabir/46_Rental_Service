import BestRentalService from "./components/Main/Home/BestRentalService/BestRentalService";
import Blog from "./components/Main/Home/Blog/Blog";
// import Brands from "./components/Main/Home/Brands/Brands";
import CEOMessage from "./components/Main/Home/CEOMessage/CEOMessage";
import FindServicesNearby from "./components/Main/Home/FindServicesNearby/FindServicesNearby";
// import HeroSection from "./components/Main/Home/HeroSection/HeroSection";
import HeroSection2 from "./components/Main/Home/HeroSection/HeroSection2";
import OurCostumer from "./components/Main/Home/OurCostumers/OurCostumers";
import RentalPartner from "./components/Main/Home/RentalPartner/RentalPartner";
import Stats from "./components/Main/Home/Stats/Stats";
import TopTransportCompany from "./components/Main/Home/TopTransportCompany/TopTransportCompany";

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-center">
        {/* <HeroSection /> */}
        <HeroSection2 />
        <div className="w-full max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <FindServicesNearby />
          <RentalPartner />
          <BestRentalService />
          <Stats />
          <TopTransportCompany />
          <OurCostumer />
          <CEOMessage />
          {/* <Brands /> */}
          <Blog />
        </div>
      </main>
    </>
  );
}
