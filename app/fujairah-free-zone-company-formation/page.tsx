import ServicePage from '@/components/ServicePage';

export default function FujairahSetup() {
  return (
    <ServicePage
      title="Fujairah Free Zone Company Formation"
      subtitle="Strategic Access to the Indian Ocean"
      heroImage="/images/freezone.png"
      description={[
        "The Fujairah Free Zone (FFZ) is uniquely positioned on the Eastern seaboard of the UAE, offering a strategic gateway with direct access to the Indian Ocean. While most UAE free zones provide access to the Arabian Gulf, FFZ provides a specialized logistical advantage for companies involved in international shipping, manufacturing, and oil-related industries that require direct sea-to-ocean connectivity.",
        "Established to provide a competitive and business-friendly environment, Fujairah Free Zone is renowned for its speed, efficiency, and cost-effective setup packages. It offers a wide array of licensable activities and provides customized office and warehousing solutions to accommodate everyone from individual consultants to large-scale industrial firms.",
        "Golden Legacy facilitates a seamless entry into the Fujairah market, leveraging the zone's triple-play connectivity (Air, Sea, and Land) to ensure your business is positioned for growth across the Middle East, Asia, and Africa."
      ]}
      advantages={[
        "100% foreign ownership and full capital/profit repatriation",
        "0% Corporate and Personal Income tax environment",
        "Unique strategic location on the UAE's East Coast with Indian Ocean access",
        "Multimodal connectivity via Fujairah Port and Fujairah International Airport",
        "Highly competitive and cost-efficient business setup packages",
        "Exemption from all import and export duties within the free zone",
        "Fast and simplified trade license issuance process",
        "Variety of office and warehousing solutions, including executive suites",
        "Eligibility for UAE residence visas for shareholders and family",
        "Direct access to global shipping lanes without passing through the Strait of Hormuz"
      ]}
      sections={[
        {
          title: "Setup Solutions for Diverse Sectors",
          content: "FFZ accommodates a wide range of legal structures and activities:",
          list: [
            "Free Zone Establishment (FZE): For single shareholders.",
            "Free Zone Company (FZCO): For multiple individual or corporate shareholders.",
            "Branch Office: For existing foreign or local parent companies.",
             "Trading & Service Licenses: Covering over 300 business activities."
          ]
        },
        {
          title: "Strategic Industrial Potential",
          content: "Fujairah is home to one of the world's largest bunkering and oil storage hubs. Businesses in the energy, engineering, and manufacturing sectors can benefit from this proximity, utilizing specialized industrial plots and modular warehouses designed for high-capacity production."
        },
        {
          title: "The Golden Legacy Advantage",
          content: "Establishing your company in Fujairah is made easy through our dedicated consultants. We handle the entire documentation cycle—from name reservation and legal drafting to business license issuance and establishment card activation—ensuring your setup is structurally sound and ready for corporate banking integration."
        }
      ]}
    />
  );
}
