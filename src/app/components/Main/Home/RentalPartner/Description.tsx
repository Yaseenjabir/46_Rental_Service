import { companyName } from "@/app/utils/utils";

export default function Description() {
  return (
    <div className="text-center">
      <p className="font-semibold text-tropicalIndigo px-5 mb-4 text-justify">
        At {companyName}, you are not just a customer—you are our valued guest.
        We offer punctual airport transfers and seamless pickup services,
        ensuring you get to your sightseeing tours in comfort and style with the
        right bus, van, or minibus. Let us handle your transportation needs for
        an unforgettable experience.
      </p>
      <h1 className="font-bold text-headings text-3xl px-3">
        Trusted Rental Partner Near You!
      </h1>
    </div>
  );
}
