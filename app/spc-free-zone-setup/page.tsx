import ServicePage from '@/components/ServicePage';

export default function SPCSetup() {
  return (
    <ServicePage
      title="SPC Free Zone Business Setup"
      subtitle="Sharjah Publishing City Free Zone"
      heroImage="/images/freezone.png"
      description={[
        "Sharjah Publishing City (SPC) Free Zone is the world's first and largest publishing and printing free zone, offering a specialized and highly collaborative ecosystem for publishers, creative professionals, and general entrepreneurs. Launched by the Sharjah Book Authority, SPC is designed to be a global gateway for the media and book industries, providing world-class infrastructure and a business-friendly legal framework.",
        "SPC Free Zone is unique for its incredible speed of incorporation, often capable of issuing trade licenses within just two hours. This efficiency, combined with its strategic location in Sharjah and proximity to Dubai, makes it one of the most attractive options for digital nomads, consultants, and startups who value time and convenience above all else.",
        "Golden Legacy provides specialized support for SPC setups, helping you leverage their 'dual-licensing' model which allows companies to operate within the free zone while also having the flexibility to trade in the UAE mainland through a simplified regulatory process."
      ]}
      advantages={[
        "100% Foreign Ownership and full profit repatriation",
        "0% Corporate and Personal Income Tax environment",
        "Dual-licensing options: Operate in both Free Zone and UAE Mainland",
        "Fastest company formation in the UAE (licenses issued in under 2 hours)",
        "Over 1,500 diverse business activities: Trading, Service, E-commerce, and more",
        "Up to 20 residence visas allowed on a single trade license",
        "No mandatory requirement for physical office space (Virtual/Coworking options)",
        "Strategically located just 15 minutes from Dubai International Airport",
        "No requirement for paid-up share capital or annual audit filing",
        "Simplified corporate bank account assistance through partner financial institutions"
      ]}
      sections={[
        {
          title: "Why Choose SPC?",
          content: [
            "SPC Free Zone is unique for its incredible speed of incorporation, often capable of issuing trade licenses within just two hours, the fastest in the UAE.",
            "Choosing SPC means joining a world-class creative hub that allows for dual-licensing, enabling you to trade across both the free zone and UAE mainland."
          ]
        },
        {
          title: "Strategic Location",
          content: "Strategically located in Sharjah, SPC provides a gateway to international markets with the added benefit of being just 15 minutes away from Dubai.",
          list: [
            "Immediate proximity to Sharjah International Airport",
            "15 minutes from Dubai International Airport",
            "Located on major highways linking all Emirates",
            "Central access to Sharjah's university and research hubs"
          ]
        },
        {
          title: "The Creative Multi-Hub",
          content: "While SPC is the global leader for publishing, it has evolved into a comprehensive hub for all commercial sectors. Its modern office facilities include:",
          list: [
            "Coworking Spaces: Ideal for freelancers and small teams.",
            "Private Offices: Fully equipped suites for established businesses.",
            "Warehouses: Specialized storage for books, media, and general cargo.",
             "Dual-License Capability: The ability to work across borders without a local sponsor."
          ]
        },
        {
          title: "The Publishing Powerhouse",
          content: "For those in the media sector, SPC provides on-site printing and distribution facilities, eliminating logistics hurdles and allowing for 'print-on-demand' business models that serve the entire Middle East and Africa region."
        },
        {
          title: "Setup Efficiency",
          content: "Our team at Golden Legacy manages the entire SPC integration process—from initial name approval to visa stamping—ensuring you benefit from the zone's record-breaking speed. We ensure all your documents are 'bank-ready' from day one, facilitating smooth financial operations for your new Sharjah-based enterprise."
        }
      ]}
    />
  );
}
