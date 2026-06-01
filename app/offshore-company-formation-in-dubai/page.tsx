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
