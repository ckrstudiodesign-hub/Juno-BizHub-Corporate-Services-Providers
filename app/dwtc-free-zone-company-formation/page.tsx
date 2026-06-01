import ServicePage from '@/components/ServicePage';

export default function DWTCSetup() {
  return (
    <ServicePage
      title="DWTC Free Zone Company Formation"
      subtitle="Dubai World Trade Center Free Zone"
      heroImage="/images/freezone.png"
      description={[
        "The Dubai World Trade Centre (DWTC) Authority Free Zone is a premier business destination located in the heart of Dubai's central business district. Established in 1979, the iconic DWTC tower has been a symbol of Dubai's economic rise and today serves as a cosmopolitan hub that connects international trade, exhibitions, and corporate excellence. Spanning over 1.3 million square feet of event and commercial space, it is one of the most prestigious addresses a business can have in the region.",
        "The DWTC Authority Free Zone bietet an attractive and flexible ecosystem for businesses, allowing them to operate under a unique regulatory framework within the city's commercial core. Situated near the Dubai International Financial Centre (DIFC) and just minutes away from the Burj Khalifa, the zone provides unparalleled global networking opportunities and access to world-class events, conferences, and exhibitions throughout the year.",
        "Golden Legacy provides specialized consultancy for DWTC Authority setup, ensuring your business leverages its world-class infrastructure and prime location to maximize brand prestige and operational growth across global markets."
      ]}
      advantages={[
        "100% foreign ownership and full capital/profit repatriation",
        "0% Corporate and Personal Income tax environment",
        "Strategic location in the heart of Dubai's central business and exhibition district",
        "Unique 'One-Stop-Shop' for all government and administrative services",
        "Flexible office solutions: from startup desks to premium, full-floor corporate suites",
        "Dual-licensing options: Operate in both the Free Zone and UAE Mainland",
        "Direct access to international exhibitions and global networking events",
        "World-class telecommunications and digital infrastructure",
        "Simplified and fast-track residency visa and work permit processing",
        "No requirement for paid-up share capital or mandatory annual audit filing"
      ]}
      sections={[
        {
          title: "The Cosmopolitan Business Hub",
          content: "DWTC Authority allows for a wide spectrum of legal structures to suit your investment strategy:",
          list: [
            "Free Zone Establishment (FZE): For a single individual or corporate shareholder.",
            "Free Zone Company (FZCO): For entities with multiple shareholders.",
            "Branch of a Foreign Company: An extension of an existing international firm.",
            "Branch of a UAE Company: For local firms expanding their presence in the CBD."
          ]
        },
        {
          title: "Events & Network Integration",
          content: "By setting up in DWTC, your business is at the epicenter of global trade. The zone hosts hundreds of international exhibitions annually (such as GITEX and Gulfood), providing your company with immediate exposure to millions of international buyers and potential partners right at your doorstep."
        },
        {
          title: "Premier Advisory Services",
          content: "At Golden Legacy, we manage the entire DWTC licensing lifecycle—from the initial 'Application of Interest' to the final issuance of the trade license. We ensure that your business activities are correctly categorized to meet the DWTC Authority's standards, facilitating smooth corporate banking and providing a prestigious foundation for your global enterprise."
        }
      ]}
    />
  );
}
