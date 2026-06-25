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
      executiveSummary={{
        summary: "The UAE Golden Visa is a 10-year residency program aimed at investors, entrepreneurs, specialized talents, and researchers. It grants long-term stability without the need for a national sponsor.",
        keyFacts: [
          "10-year renewable residency visa",
          "No local sponsor or employer required",
          "Can stay outside the UAE for >6 months without visa cancellation",
          "Sponsor family members (including parents) and unlimited domestic staff"
        ]
      }}
      decisionTable={{
        title: "Golden Visa Categories & Requirements",
        option1Name: "Real Estate Investor",
        option2Name: "Entrepreneur / Startup",
        features: [
          { name: "Investment Amount", option1: "Minimum AED 2 Million", option2: "Min AED 500,000 capital or approved project" },
          { name: "Property Status", option1: "Off-plan or completed (can be mortgaged)", option2: "Approval from an official incubator or Ministry" },
          { name: "Duration", option1: "10 Years", option2: "10 Years" },
          { name: "Target Audience", option1: "Property Buyers", option2: "Founders & Innovators" }
        ]
      }}
      stepByStep={{
        title: "Golden Visa Application Process",
        steps: [
          { title: "Eligibility Assessment", description: "Our consultants review your profile, investments, or professional credentials to determine your eligibility category." },
          { title: "Document Preparation", description: "We gather and legally attest your certificates, property title deeds, or business audits required by the ICA." },
          { title: "Nomination & Approval", description: "Submit the file for official nomination. Once approved, you receive the preliminary entry permit." },
          { title: "Medical & Issuance", description: "Complete the VIP medical fitness test and receive your 10-year Emirates ID and Visa stamping." }
        ]
      }}
      faqs={[
        {
          question: "Can I get a Golden Visa if I buy a mortgaged property?",
          answer: "Yes. You can apply for a Golden Visa if you have purchased a property with a mortgage from a local bank, provided that the total value of the property is at least AED 2 Million (or your equity in the property reaches a specific threshold, subject to current DLD regulations)."
        },
        {
          question: "Do software engineers or doctors qualify for the Golden Visa?",
          answer: "Yes, specialized talents including doctors, scientists, creative professionals, and certain highly skilled engineers (like software or AI engineers) can apply based on their educational degrees, salary, and employment contracts."
        }
      ]}
      sections={[
        {
          title: "Strategic Advantage",
          content: "Whether through property investment, public investment, or professional expertise, the Golden Visa provides a prestigious foundation for long-term legacy building in the Middle East.",
          list: [
            "Real Estate Investment (AED 2M+)",
            "Entrepreneurial / Business Ownership path",
            "Specialized Talents (Doctors, Researchers, Creatives)",
            "Outstanding Students and University Graduates"
          ]
        }
      ]}
    />
  );
}
