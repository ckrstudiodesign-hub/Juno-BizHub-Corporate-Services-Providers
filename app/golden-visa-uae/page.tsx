import ServicePage from '@/components/ServicePage';

export default function GoldenVisas() {
  return (
    <ServicePage
      title="Golden Visa UAE"
      subtitle="The Gateway to Long-Term UAE Residency"
      heroImage="/images/mainland.png"
      description={[
        "The UAE Golden Visa is a revolutionary long-term residence permit designed to attract international investors, entrepreneurs, and highly talented professionals. This 10-year residency program offers unprecedented stability, allowing holders to live, work, and study in the UAE without the need for a national sponsor.",
        "Golden Legacy provides specialized consultancy to determine your eligibility and streamline the application process. We handle the documentation for real estate investors, business owners, and specialized talents, ensuring a rapid transition to 'Golden' status.",
        "With a Golden Visa, you gain the freedom to stay outside the UAE for as long as needed without losing residency status, alongside the ability to sponsor your family and domestic staff under a long-term, secure framework."
      ]}
      advantages={[
        "10-year long-term residency with automatic renewal options",
        "Self-sponsored residency—no local employer or sponsor required",
        "Ability to stay outside the UAE for more than 6 months without losing residency",
        "Sponsorship of family members, including spouse and children of any age",
        "Sponsorship of an unlimited number of domestic helpers",
        "Specialized 'Easa' privilege card for exclusive discounts and services",
        "Exemption from annual medical and visa renewal procedures for 10 years",
        "Higher eligibility for mortgage and personal financing in the UAE",
        "Strategic stability for business owners and long-term investors",
        "Direct access to a world-class lifestyle and business ecosystem"
      ]}
      sections={[
        {
          title: "Why Choose the Golden Visa?",
          content: [
            "The Golden Visa offers a level of security that was previously unavailable to expatriates. It represents the UAE's commitment to retaining world-class talent and capital within its borders.",
            "Choosing Golden Legacy for your application ensures that your profile is presented with technical precision, maximizing approval rates from the Federal Authority for Identity and Citizenship (ICP)."
          ]
        },
        {
          title: "Strategic Advantage",
          content: "Whether through property investment, public investment, or professional expertise, the Golden Visa provides a prestigious foundation for long-term legacy building in the Middle East.",
          list: [
            "Real Estate Investment (AED 2M+)",
            "Entrepreneurial / Business Ownership path",
            "Specialized Talents (Doctors, Researchers, Creatives)",
            "Outstanding Students and University Graduates"
          ]
        },
        {
          title: "Our Streamlined Execution",
          content: "We manage every phase—from the initial eligibility audit and document attestation to the final medical tests and ID card issuance—providing a concierge-level service that respects your time and professional standing."
        }
      ]}
    />
  );
}
