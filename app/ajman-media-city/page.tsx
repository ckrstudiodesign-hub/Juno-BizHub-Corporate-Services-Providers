import ServicePage from '@/components/ServicePage';

export default function AjmanMediaCity() {
  return (
    <ServicePage
      title="Ajman Media City Free Zone"
      subtitle="Global Hub for Media & Creativity"
      heroImage="/images/freezone.png"
      description={[
        "The Ajman Media City Free Zone (AMCFZ), launched in 2018, is a world-class dedicated hub designed to accelerate the growth of the media and creative sectors in the UAE. Strategically headquartered in the Emirate of Ajman, it offers a highly professional and innovative platform that combines cost-efficiency with cutting-edge business services. It is specifically crafted to serve as a creative catalyst for professionals who value speed, flexibility, and minimal bureaucracy.",
        "AMCFZ is renowned for its diverse portfolio of eight specialized business packages, ranging from freelancer licenses to massive corporate setups. This flexibility allows entrepreneurs to bundle multiple business activities—such as digital marketing, content production, and e-commerce—under a single, cost-effective license. The zone provides a modern, high-tech environment that empowers digital nomads and international content creators to reach a global audience from a secure UAE base.",
        "Golden Legacy provides specialized advisory for AMCFZ, helping you select the ideal package that aligns with your creative goals while ensuring a structural framework that facilitates rapid residency visa processing and seamless corporate banking integration."
      ]}
      advantages={[
        "100% Foreign Ownership and complete capital/profit repatriation",
        "0% Corporate and Personal Income Tax environment",
        "Most competitive and flexible media license packages in the UAE",
        "Fast-track company formation: Licenses often issued within 24 hours",
        "Combine multiple media and creative activities on a single trade license",
        "No requirements for physical presence during the incorporation process",
        "Flexible workspace solutions: From virtual offices to dedicated creative suites",
        "Ability to sponsors family and employees with simplified visa procedures",
        "Integrated digital portal for all government and administrative services",
        "Direct access to a vibrant community of creative professionals and media experts"
      ]}
      sections={[
        {
          title: "Specialized Business Packages",
          content: "AMCFZ offers tailored solutions designed to meet the specific needs of creative entrepreneurs:",
          list: [
            "Business Service Package: Standard setup for professional consultancies.",
            "Freelance Package: Specifically for individual creators and designers.",
            "Pioneers Package: Designed for young entrepreneurs and tech startups.",
             "Executive Office Package: For established firms requiring dedicated space."
          ]
        },
        {
          title: "The Creative Ecosystem",
          content: "By establishing your base in Ajman Media City, you become part of a forward-thinking ecosystem that prioritizes digital transformation and ease of trade. The zone's location provides excellent connectivity to both Sharjah and Dubai, allowing your media business to serve the entire UAE from a cost-optimized base."
        },
        {
          title: "Setup with Confidence",
          content: "Navigating the media licensing landscape requires an understanding of diverse activity mix regulations. Golden Legacy manages the entire SHAMS setup journey—from initial name reservation to final visa stamping—ensuring your entity is structurally sound and ready for corporate banking from day one."
        }
      ]}
    />
  );
}
