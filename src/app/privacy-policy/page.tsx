import { Metadata } from "next";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-headings">
              Privacy Policy
            </h2>
            <p className="mt-4 text-lg">
              At 3B Transport LLC, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy outlines
              how we collect, use, and safeguard your data when you use our
              services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-headings">
              Information We Collect
            </h2>
            <p className="mt-4 text-lg">
              We may collect personal information such as your name, contact
              details, payment information, and booking preferences when you
              make a reservation or inquire about our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-headings">
              How We Use Your Information
            </h2>
            <p className="mt-4 text-lg">
              We use your information to process bookings, provide customer
              support, improve our services, and send updates about our
              services. We may also use your data to enhance your experience on
              our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-headings">
              Data Protection
            </h2>
            <p className="mt-4 text-lg">
              We implement appropriate security measures to protect your
              personal information from unauthorized access or disclosure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-headings">
              Third-Party Sharing
            </h2>
            <p className="mt-4 text-lg">
              We do not share your personal information with third parties
              except as necessary to fulfill your booking or as required by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-headings">Cookies</h2>
            <p className="mt-4 text-lg">
              We may use cookies to enhance your experience on our website and
              gather analytics on website usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-headings">
              Your Rights
            </h2>
            <p className="mt-4 text-lg">
              You have the right to access, correct, or delete your personal
              information at any time. If you have any concerns about how we
              handle your data, please contact us.
            </p>
            <p className="mt-4 text-lg">
              By using our website and services, you agree to the collection and
              use of your personal data as outlined in this policy.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "Privacy Policy | 3B Transport LLC",
  description:
    "Learn about how 3B Transport LLC collects, uses, and protects your personal data. Our privacy policy explains the measures we take to ensure your privacy and security.",
};
