import ServicePage from '@/components/ServicePage';

export default function ShamsSetup() {
  return (
    <ServicePage
      title="Sharjah Media City Free Zone Business Setup"
      subtitle="Shams Media & Innovation Hub"
      heroImage="/images/freezone.png"
      description={[
        "Sharjah Media City (Shams), established in 2017, is a world-class creative hub designed to ignite and sustain the growth of media and creative industries in the UAE. Strategically located in Sharjah, Shams provides a highly collaborative and innovative environment for entrepreneurs, freelancers, and large-scale media corporations to flourish.",
        "Shams is more than just a free zone; it is a catalyst for creative talent, offering a simplified and cost-effective approach to business setup. With a focus on the digital and media landscape, it provides a wide array of licensable activities that range from creative design and content production to social media marketing and e-commerce. Its flexibility allows businesses to incorporate multiple activities under a single license, providing unmatched value for money.",
        "At Golden Legacy, we help you tap into the 'Shams Advantage,' ensuring your creative vision is backed by a secure legal structure and an optimized licensing framework that facilitates easy corporate bank account opening and rapid visa processing."
      ]}
      advantages={[
        "100% Foreign Ownership and full management control of your entity",
        "0% Corporate and Personal Income Tax environment (subject to UAE laws)",
        "Diverse range of media and creative activities allowed on a single license",
        "No mandatory requirement for physical office space (Shared Desk/Flexi Desk options)",
        "Up to 6 residence visas allowed on a shared desk facility",
        "Fast and efficient online incorporation process (often within 24-48 hours)",
        "100% Repatriation of capital and company profits",
        "Strategic location just minutes away from Sharjah and Dubai International Airports",
        "Limited liability structure designed for international media standards",
        "Integrated digital platform for all administrative and visa-related services"
      ]}
      sections={[
        {
          title: "Why Choose SHAMS?",
          content: [
            "Shams is more than just a free zone; it is a catalyst for creative talent, offering a simplified and cost-effective approach to business setup for digital and media landscapes.",
            "Choosing SHAMS means joining a collaborative community where flexibility is key, allowing multiple business activities under a single license for unmatched value."
          ]
        },
        {
          title: "Strategic Location",
          content: "Strategically located in Sharjah, Shams provides a highly innovative environment with rapid access to both Sharjah and Dubai international airports.",
          list: [
            "5 minutes from Sharjah International Airport",
            "15 minutes from Dubai International Airport",
            "Located in the burgeoning Sharjah creative district",
            "Direct road links to major UAE commercial centers"
          ]
        },
        {
          title: "A Catalyst for Innovation",
          content: "Shams is specifically engineered for the modern digital economy, providing unique structures for various creative professionals:",
          list: [
            "Media & Creative Licenses: For content producers, designers, and marketers.",
            "Trading Licenses: For e-commerce and physical goods distribution.",
            "Service Licenses: For professional consultancies and IT services.",
             "Freelancer Packages: Specifically designed for individual creators and digital nomads."
          ]
        },
        {
          title: "The Shams Community",
          content: "By joining Sharjah Media City, you gain access to a vibrant community of like-minded professionals, providing networking opportunities that are critical for growth in the media and technology sectors. The zone's emphasis on automation and digital transformation means your administrative burdens are kept to a absolute minimum."
        },
        {
          title: "Administrative Excellence",
          content: "Golden Legacy manages the entire SHAMS setup journey—from initial trade name reservation to the final issuance of the Establishment Card. We ensure your business is 'bank-ready' by advising on the correct activity mix, facilitating smooth communication with UAE-based financial institutions."
        }
      ]}
    />
  );
}
