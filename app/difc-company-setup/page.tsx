import ServicePage from '@/components/ServicePage';

export default function DIFCSetup() {
  return (
    <ServicePage
      title="DIFC Company Setup"
      subtitle="Dubai International Financial Centre"
      heroImage="/images/freezone.png"
      description={[
        "The Dubai International Financial Centre (DIFC) is the leading global financial hub in the Middle East, Africa, and South Asia (MEASA) region. It is a world-class financial ecosystem that operates under an independent, internationally recognized regulatory and legal framework based on English Common Law. This unique jurisdiction provides a stable and secure platform for the world's most prestigious financial institutions and global corporations.",
        "DIFC is home to a massive range of businesses, from global Tier-1 banks and asset management firms to innovative FinTech startups and legal consultancies. It serves as a bridge between the economies of the East and the West, providing companies with direct access to the region's vast wealth and capital markets.",
        "Golden Legacy offers elite advisory services for DIFC establishment, ensuring your business structure complies with the high standards of the Dubai Financial Services Authority (DFSA). We guide you through the complexities of 'Common Law' entity formation, helping you secure a foothold in one of the world's most influential financial districts."
      ]}
      advantages={[
        "100% Foreign Ownership and complete capital/profit repatriation",
        "0% Tax on corporate income and profits for a guaranteed 50 years",
        "Operates under English Common Law jurisdiction with its own DIFC Courts",
        "Independent and internationally respected regulator (Dubai Financial Services Authority - DFSA)",
        "Direct access to the region's largest concentration of Tier-1 financial institutions",
        "World-class physical infrastructure: Iconic buildings and highly secure office spaces",
        "Vibrant commercial community with luxury retail, fine dining, and art galleries",
        "Highly skilled global workforce and deep pool of professional talent",
        "Variety of legal structures: LLCs, Branches, Foundations, and Partnerships",
        "Specialized support for FinTech and Innovation through the DIFC Innovation Hub"
      ]}
      sections={[
        {
          title: "Why Choose DIFC?",
          content: [
            "DIFC is the leading financial hub for the Middle East, Africa, and South Asia, offering a world-class jurisdiction that operates under its own English Common Law based judicial system.",
            "Choosing DIFC positions your business at the heart of the region's concentration of Tier-1 financial institutions and global law firms, providing unmatched prestige."
          ]
        },
        {
          title: "Strategic Location",
          content: "Located in the heart of Dubai, DIFC serves as an iconic business district and a lifestyle destination, providing a unique bridge between Eastern and Western markets.",
          list: [
            "Minutes away from the Burj Khalifa and Downtown Dubai",
            "Central location in Dubai's premier financial district",
            "Connected to major international banking networks",
            "World-class physical infrastructure and lifestyle amenities"
          ]
        },
        {
          title: "Regulatory Categories",
          content: "Entities in DIFC are generally categorized based on their primary activity, each overseen by specific DFSA regulations:",
          list: [
            "Financial Services: Banking, Asset Management, Insurance, and Brokerage.",
            "Non-Financial Services: Legal, Engineering, Accounting, and Business Consultancy.",
            "Retail and Lifestyle: Boutique shops, restaurants, and art galleries.",
            "Specialized Entities: Foundations, Family Offices, and Holding Companies."
          ]
        },
        {
          title: "The Common Law Advantage",
          content: "One of DIFC's greatest strengths is its judicial system. The DIFC Courts provide an independent, English-language common law system that offers high levels of certainty, transparency, and familiarity for international investors and global law firms."
        },
        {
          title: "Strategic Advisory",
          content: "Navigating DIFC requires a deep understanding of its rigorous compliance and reporting requirements. Our team manages the entire application process—from the initial 'Letter of Intent' to final licensing—ensuring your entity is positioned as a prestigious member of the Dubai financial community."
        }
      ]}
    />
  );
}
