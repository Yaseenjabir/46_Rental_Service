import { Metadata } from "next";
import BreadCrumbs from "../components/Main/BreadCrumbs/BreadCrumbs";

export default function About() {
  return (
    <>
      <BreadCrumbs data={{ title: "About Us", crumb: "about" }} />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-headings">Our Story</h2>
            <p className="mt-4 text-lg">
              3B Transport LLC was founded with the goal of providing safe and
              affordable group transportation across the UAE. Over the years, we
              have built a strong reputation as a leading provider of bus rental
              services by focusing on customer satisfaction, quality service,
              and reliability. With a passion for excellence, we have grown to
              serve both local and international clients, handling everything
              from small shuttle services to large-scale transportation needs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-headings">Our Fleet</h2>
            <p className="mt-4 text-lg">
              Our fleet is the cornerstone of our services. We maintain a
              diverse range of vehicles that cater to every transportation need:
            </p>
            <ul className="list-disc pl-6 mt-4 text-lg">
              <li>
                <strong className="text-tropicalIndigo">Minibuses:</strong>{" "}
                Ideal for small groups, airport transfers, or corporate events,
                offering comfort and efficiency.
              </li>
              <li>
                <strong className="text-tropicalIndigo">
                  Coaches and Buses:
                </strong>{" "}
                Perfect for large groups, tours, conferences, or events,
                equipped with top-notch amenities like air conditioning, Wi-Fi,
                and comfortable seating.
              </li>
              <li>
                <strong className="text-tropicalIndigo">
                  Luxury Vehicles:
                </strong>{" "}
                For those seeking a touch of elegance and sophistication, we
                also offer premium vehicles for special occasions, including
                weddings and executive travel.
              </li>
            </ul>
            <p className="mt-4 text-lg">
              Every vehicle in our fleet is carefully maintained and equipped
              with the latest safety features to ensure a smooth and secure
              journey.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-headings">Our Values</h2>
            <p className="mt-4 text-lg">
              At 3B Transport LLC, we believe in providing transportation that
              goes beyond the basics. We are guided by these core values:
            </p>
            <ul className="list-disc pl-6 mt-4 text-lg">
              <li>
                <strong className="text-tropicalIndigo">
                  Customer-Centric Approach:
                </strong>{" "}
                We believe in offering more than just a ride. We strive to
                create a seamless and enjoyable experience for our customers
                from the moment they make a reservation to the completion of
                their journey.
              </li>
              <li>
                <strong className="text-tropicalIndigo">Reliability:</strong>{" "}
                Punctuality is key. We understand that timely arrivals are
                crucial, and we pride ourselves on being reliable, with a track
                record of on-time services.
              </li>
              <li>
                <strong className="text-tropicalIndigo">Safety First:</strong>{" "}
                The safety of our passengers is always our top priority. Our
                buses are regularly serviced, and we ensure our drivers are
                trained to the highest safety standards.
              </li>
              <li>
                <strong className="text-tropicalIndigo">Affordability:</strong>{" "}
                We are dedicated to providing cost-effective solutions without
                compromising on the quality of our services. Our transparent
                pricing policy ensures that there are no hidden fees, and
                customers can rely on us for honest, upfront costs.
              </li>
              <li>
                <strong className="text-tropicalIndigo">Sustainability:</strong>{" "}
                We are also mindful of the environment and are constantly
                exploring ways to reduce our carbon footprint through
                sustainable practices and the use of eco-friendly vehicles
                wherever possible.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-headings">Our Team</h2>
            <p className="mt-4 text-lg">
              Our team is what sets us apart. From our experienced drivers to
              our dedicated customer service staff, we work hard to ensure that
              every aspect of your journey meets your expectations. Our drivers
              are not just skilled and licensed—they are friendly, professional,
              and trained to make every trip as comfortable as possible. Our
              customer service team is available to assist you with bookings,
              changes, and any inquiries you might have, ensuring a smooth and
              hassle-free experience.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "About Us | Trusted Bus Rental Services in UAE | 3B Transport LLC",
  description:
    "Learn about 3B Transport LLC’s mission, values, and story. Discover how we provide reliable, safe, and affordable bus rental services for diverse transportation needs across the UAE.",
};
