import ServicePage from '@/components/ServicePage';

export default function DMCCSetup() {
  return (
    <ServicePage
      title="DMCC Free Zone Company Setup"
      subtitle="Dubai Multi Commodities Center"
      heroImage="/images/freezone.png"
      description={[
        "Established in 2002, the Dubai Multi Commodities Centre (DMCC) is the UAE's largest and most successful free zone, strategically located on Sheikh Zayed Road in the heart of Jumeirah Lakes Towers (JLT). It has been awarded the prestigious 'Global Free Zone of the Year' for multiple consecutive years by the Financial Times, solidifying its reputation as a premier destination for global trade.",
        "DMCC is much more than just a business zone; it is a world-class ecosystem for trade across a wide range of commodities—from gold, diamonds, and tea to technology, financial services, and renewable energy. It provides companies with unparalleled access to international markets, high-end infrastructure, and a robust regulatory framework overseen by the DMCC Authority.",
        "Golden Legacy offers specialized advisory for DMCC setup, ensuring your business is positioned to leverage the zone's unique value proposition, from its strategic location between two major international airports to its thriving community of over 21,000 member companies."
      ]}
      advantages={[
        "100% Foreign Ownership and complete operational control",
        "0% Corporate and Personal Income Tax for 50 years (renewable)",
        "Strategic location in the heart of 'New Dubai' (JLT)",
        "Excellence in infrastructure specifically designed for commodity trading",
        "Full repatriation of capital and profits without currency restrictions",
        "Access to specialized trading platforms like the Dubai Diamond Exchange (DDE)",
        "Eligibility for a wide variety of business activities spanning multiples sectors",
        "Dual-licensing opportunities to expand operations into mainland Dubai",
        "State-of-the-art office spaces including co-working desks and dedicated floors",
        "Comprehensive digital services portal for all administrative and government needs"
      ]}
      sections={[
        {
          title: "Why Choose DMCC?",
          content: [
            "DMCC has been awarded the prestigious 'Global Free Zone of the Year' for multiple consecutive years, solidifying its reputation as a premier destination for global trade.",
            "Choosing DMCC means positioning your business at the center of the region's largest set-up for commodities trade and general commercial growth."
          ]
        },
        {
          title: "Strategic Location",
          content: "Situated on Sheikh Zayed Road in the heart of Jumeirah Lakes Towers (JLT), DMCC offers unmatched connectivity between Abu Dhabi and Dubai.",
          list: [
            "Proximity to two major international airports",
            "Direct access to Jebel Ali Port linked logistics",
            "Centrally located in 'New Dubai' commercial hub",
            "Walking distance to metro and public transport"
          ]
        },
        {
          title: "A Hub for Commercial Growth",
          content: "DMCC provides a highly secure and transparent environment for businesses to flourish. Whether you are a small startup or a multinational corporation, the zone offers flexible legal structures to accommodate your needs:",
          list: [
            "New Company: Free Zone Company (FZCO) – Limited liability entity.",
            "Branch Office: Extension of an existing foreign or local parent company.",
            "Representative Office: Purely for market presence and coordination."
          ]
        },
        {
          title: "The Setup Process Hub",
          content: "Licensing in DMCC is a structured journey managed through their high-tech 'Member Portal':",
          list: [
            "Application & KYC: Submitting professional profiles and project descriptions.",
            "Pre-Approval & Name Reservation: Securing your business identity in the UAE.",
            "Office Lease & Registration: Finalizing physical or virtual space requirements.",
            "Visa & Banking: Leveraging DMCC's bank-ready framework for smooth account openings."
          ]
        },
        {
          title: "Infrastructure & Logistics Access",
          content: "DMCC members benefit from its unique position between the Al Maktoum International Airport and the Dubai International Airport, as well as its direct connectivity to the Jebel Ali Port. This triple-hub connectivity makes it the most powerful location for companies involved in global shipping, logistics, and international distribution."
        }
      ]}
    />
  );
}
