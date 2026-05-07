import ServicePage from '@/components/ServicePage';

export default function DAFZASetup() {
  return (
    <ServicePage
      title="Business Setup in DAFZA"
      subtitle="Dubai Airport Free Zone (DAFZA)"
      heroImage="/images/freezone.png"
      description={[
        "Dubai Airport Free Zone (DAFZA) is one of the most prestigious and well-established free zones in the UAE, strategically located next to Dubai International Airport. It is a preferred destination for global businesses looking for seamless connectivity, tax efficiency, and a premium corporate environment.",
        "Home to over 1,800 international companies and 15,000 professionals, DAFZA offers a business-oriented regulatory environment with world-class infrastructure. It is designed to facilitate the rapid movement of goods and services, making it the ideal choice for companies in the aviation, electronics, and luxury logistics sectors."
      ]}
      advantages={[
        "100% foreign company ownership and control",
        "Full repatriation of capital and profits",
        "0% Corporate and Personal Income tax",
        "Strategic proximity to Dubai International Airport (DXB)",
        "Exemption from all import and export duties",
        "Multi-currency corporate bank account eligibility",
        "24/7 dedicated customs services and rapid cargo clearance",
        "Dual DED licensing options (allowing business in mainland)",
        "World-class telecommunications and data infrastructure",
        "Smart services platform for all governmental and administrative tasks"
      ]}
      sections={[
        {
          title: "Why Choose DAFZA?",
          content: [
            "DAFZA has consistently been ranked as one of the top free zones globally, offering an ecosystem that prioritizes innovation, efficiency, and growth.",
            "Choosing DAFZA means positioning your business at the gateway of the world's busiest international travel hub, providing unparalleled access to markets across the EMEA and Asia-Pacific regions."
          ]
        },
        {
          title: "Strategic Location",
          content: "Situated adjacent to Dubai International Airport, DAFZA offers unmatched logistics and global connectivity, making it ideal for companies involved in trade, logistics, aviation, and international operations.",
          list: [
            "Immediate access to DXB Cargo Terminal",
            "24/7 customs clearance operations",
            "Proximity to major city business hubs",
            "Seamless multimodal transport links"
          ]
        },
        {
          title: "Premium Infrastructure",
          content: "DAFZA offers specialized high-tech facilities including Light Industrial Units (LIUs) for assembly and packaging, and cold storage for pharmaceutical and perishable goods.",
          list: [
            "Smart Offices: Fully furnished and serviced workspaces.",
            "Warehousing: High-end storage facilities with 24/7 access.",
            "On-site Customs: Expedited clearance for air cargo.",
            "Business Center: Access to boardrooms and conference facilities."
          ]
        }
      ]}
    />
  );
}
