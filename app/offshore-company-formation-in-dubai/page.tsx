import ServicePage from '@/components/ServicePage';

export default function OffshoreOverview() {
  return (
    <ServicePage
      title="Offshore Company Formation in Dubai"
      subtitle="Overview of Offshore Company Setup"
      heroImage="/images/offshore.png"
      description={[
        "Setting up an Offshore Company in Dubai entitles you to tax incentives, confidentiality, and minimal bureaucracy. Offshore companies often play the role of holding companies and enjoy zero or low-tax regimes.",
        "The UAE is ranked among the top 10 countries with the highest offshore wealth. This setup maximizes earnings with tax minimization and provides better access to global funding and expansion into international markets.",
        "UAE has three major offshore jurisdictions: RAK (RAKICC), JAFZA, and Ajman."
      ]}
      advantages={[
        "Quick and simple setup",
        "Asset protection across the globe",
        "100% foreign ownership and shares",
        "Zero corporate income tax law",
        "Succession planning and confidentiality",
        "Multi-currency bank accounts for international transactions",
        "No requirement for a physical office",
        "Anonymity for investment privacy"
      ]}
      executiveSummary={{
        summary: "An Offshore Company in the UAE is a legal entity designed to operate outside its registered jurisdiction. It serves primarily as a holding company or a vehicle for international trading, offering maximum asset protection and financial anonymity.",
        keyFacts: [
          "100% Foreign Ownership",
          "0% Corporate Tax",
          "High confidentiality for shareholders and directors",
          "Cannot trade locally in the UAE"
        ]
      }}
      decisionTable={{
        title: "Offshore vs Free Zone",
        option1Name: "Offshore Entity",
        option2Name: "Free Zone Entity",
        features: [
          { name: "Residency Visas", option1: "Not Eligible", option2: "Eligible" },
          { name: "Physical Office", option1: "Not Allowed (Registered Address only)", option2: "Allowed & Required for Visas" },
          { name: "Local Trading", option1: "Strictly Prohibited", option2: "Prohibited without distributor" },
          { name: "Primary Purpose", option1: "Asset Holding / Wealth Management", option2: "Active Business Operations" }
        ]
      }}
      stepByStep={{
        title: "Offshore Setup Process",
        steps: [
          { title: "Select Jurisdiction", description: "Choose between JAFZA, RAKICC, or Ajman Offshore based on your needs (e.g., JAFZA is required to own Dubai property)." },
          { title: "Document Collation", description: "Gather passport copies, utility bills, CVs, and a bank reference letter for the shareholders." },
          { title: "Application & Due Diligence", description: "Submit the application through Golden Legacy as your registered agent." },
          { title: "Incorporation", description: "Receive your Certificate of Incorporation and open your multi-currency bank account." }
        ]
      }}
      faqs={[
        {
          question: "Can an offshore company buy property in Dubai?",
          answer: "Yes, but it must be a JAFZA (Jebel Ali Free Zone Authority) offshore company, as this is the only offshore jurisdiction approved by the Dubai Land Department to hold freehold real estate in Dubai."
        },
        {
          question: "Can I get a UAE residence visa with an offshore company?",
          answer: "No, offshore companies do not entitle the shareholders or directors to UAE residency visas. For visas, you must setup a Free Zone or Mainland company."
        }
      ]}
      sections={[
        {
          title: "Documents Required",
          list: [
            "Business plan (Optional, usually 3 years)",
            "Original Bank reference letter or 6-months statements",
            "Proof of Address (Utility bills, etc.)",
            "CV of shareholders",
            "Passport copies of shareholders",
            "3 options for name reservation",
            "Description of Business Activity"
          ]
        }
      ]}
    />
  );
}
