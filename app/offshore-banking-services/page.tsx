import ServicePage from '@/components/ServicePage';

export default function OffshoreBankingServices() {
  return (
    <ServicePage
      title="Offshore Banking Services"
      subtitle="Secure International Financial Solutions"
      heroImage="/images/offshore.png"
      description={[
        "Offshore banking in the UAE offers a strategic advantage for международный businesses and investors seeking asset protection, tax efficiency, and financial privacy. Juno BizHub specializes in navigating the specific requirements of offshore jurisdictions.",
        "We assist in setting up corporate bank accounts for offshore entities, providing a gateway to global markets while operating within a stable and regulated financial environment.",
        "Our expertise ensures that your offshore structure is fully compliant with economic substance regulations, facilitating smoother banking relationships and reducing the risk of account closures."
      ]}
      advantages={[
        "High level of financial privacy and confidentiality",
        "Asset protection from political or economic instability",
        "Tax-efficient structures for international trade",
        "Access to major global currencies",
        "Remote account opening capabilities (subject to bank policy)",
        "Ideally suited for holding companies and IP rights",
        "No requirement for physical office presence",
        "Seamless international wire transfers"
      ]}
      sections={[
        {
          title: "Strategic Jurisdictions",
          content: "We facilitate account openings for companies registered in top offshore jurisdictions, leveraging our strong relationships with banks that understand these structures:",
          list: [
            "JAFZA Offshore",
            "RAK ICC",
            "Ajman Offshore",
            "International Jurisdictions (BVI, Seychelles, etc.)"
          ]
        },
        {
          title: "Compliance & Due Diligence",
          content: "Offshore banking requires rigorous due diligence. We meticulously prepare your corporate profile, ultimate beneficial owner (UBO) details, and business plan to meet the stringent compliance standards of international banks."
        }
      ]}
    />
  );
}
