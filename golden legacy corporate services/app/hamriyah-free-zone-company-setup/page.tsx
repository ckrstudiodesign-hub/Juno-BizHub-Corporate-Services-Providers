import ServicePage from '@/components/ServicePage';

export default function HamriyahSetup() {
  return (
    <ServicePage
      title="Hamriyah Free Zone Company Setup"
      subtitle="Primary Hub for Industry, Oil & Gas"
      heroImage="/images/freezone.png"
      description={[
        "The Hamriyah Free Zone (HFZA), established in 1995, is an industrial powerhouse located in Sharjah and a key driver of the UAE's non-oil economy. Spanning a massive area with direct access to a specialized 14-meter deep-water port, HFZA is globally recognized as the primary hub for the oil & gas, petrochemicals, and steel fabrication industries in the Middle East.",
        "HFZA provides an incredible diversity of infrastructure, from high-end executive suites for consultants to massive industrial plots for heavy manufacturing. It is home to thousands of companies from over 160 countries, attracted by its business-oriented regulatory framework and its ability to provide sea-to-land logistics that are unrivaled in the northern emirates.",
        "With Golden Legacy's specialized industrial advisory, setting up in Hamriyah means gaining immediate access to global shipping lanes and a tax-exempt environment designed specifically for large-scale production and international distribution."
      ]}
      advantages={[
        "100% Foreign Ownership and full capital/profit repatriation",
        "0% Corporate and Personal Income Tax environment",
        "Direct access to a world-class 14-meter deep-water port",
        "Strategic location connecting the Arabian Gulf and the Indian Ocean markets",
        "Exemption from all import, export, and re-export duties",
        "On-site Customs and simplified documentation processing",
        "Wide variety of license types: Commercial, Service, and Industrial",
        "Access to specialized industrial plots and modular warehousing",
        "Direct residency visa processing for staff and management",
        "On-site labor accommodation and dedicated healthcare facilities"
      ]}
      sections={[
        {
          title: "The Industrial Powerhouse Hub",
          content: "HFZA offers specialized zones to maximize the efficiency of targeted industrial sectors:",
          list: [
            "Oil & Gas Zone: A dedicated hub for storage, refinement, and trading.",
            "Steel Fabrication Zone: One of the largest clusters for steel and metal works in the region.",
            "Logistics & Maritime District: Optimized for global shipping and warehousing.",
             "Maritime City: Specifically for ship repair and offshore services."
          ]
        },
        {
          title: "Workspace Solutions of the Future",
          content: "Whether you are a startup or an industrial giant, HFZA provides the scale required for growth:",
          list: [
            "Executive Suites: Fully furnished offices for professional consultancy.",
            "Modular Warehouses: Pre-built units starting from 275 sq. meters.",
            "Industrial Land: Expansive plots for bespoke factory construction.",
             "E-office: Dedicated virtual setups for tech and digital startups."
          ]
        },
        {
          title: "Scale Your Business with Golden Legacy",
          content: "The legal drafting and activity selection for industrial zones like Hamriyah require a high level of technical precision. Our consultants manage the entire lifecycle—from environmental approvals to final trade license issuance—ensuring your entity is positioned for long-term industrial success and seamless corporate banking integration."
        }
      ]}
    />
  );
}
