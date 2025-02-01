import BreadCrumbs from "../components/Main/BreadCrumbs/BreadCrumbs";
import CEOMessage from "../components/Main/Home/CEOMessage/CEOMessage";

export default function Page() {
  return (
    <>
      <BreadCrumbs data={{ title: "Our Message", crumb: "our-message" }} />
      <section className="w-full max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
        <CEOMessage />
      </section>
    </>
  );
}
