import ServicePage from '@/components/ServicePage';

export default function RAKEZSetup() {
  return (
    <ServicePage
      title="RAKEZ Company Formation"
      subtitle="Business Setup in Ras Al Khaimah Economic Zone"
      heroImage="/images/freezone.png"
      description={[
        "The Ras Al Khaimah Economic Zone (RAKEZ) is a powerhouse of economic activity in the northern UAE, established to provide cost-effective business solutions for entrepreneurs, startups, and industrial giants alike. Strategically located at the crossroads of east and west, RAKEZ is home to over 15,000 companies from more than 100 countries, representing over 50 diverse industries.",
        "RAKEZ is unique in its ability to offer tailored solutions for both free zone and non-free zone (mainland) entities. Its expansive industrial parks, specialized zones for media and education, and modern business centers provide an all-encompassing environment for business growth. The zone is committed to providing a simplified registration process and a customer-centric approach that removes administrative hurdles for international investors.",
        "Golden Legacy partners with RAKEZ to deliver highly competitive setup packages that maximize your return on investment. Whether you need a virtual office or a massive industrial warehouse, we ensure your setup is handled with precision and speed."
      ]}
      advantages={[
        "100% Foreign Ownership and full capital/profit repatriation",
        "0% Corporate and Personal Income Tax environment",
        "Most cost-effective business setup and operational costs in the UAE",
        "Wide range of license types: Commercial, Service, Industrial, Media, and Education",
        "Strategic access to major seaports and international airports in Ras Al Khaimah and Dubai",
        "Flexibility to establish both Free Zone and Non-Free Zone companies",
        "Fast-track company formation with minimal documentation",
        "World-class industrial infrastructure and specialized warehousing solutions",
        "Access to a vast network of international and local logistics providers",
        "Comprehensive life-and-business support: from visas to family sponsorship"
      ]}
      sections={[
        {
          title: "Why Choose RAKEZ?",
          content: [
            "RAKEZ is a powerhouse of economic activity offering some of the most cost-effective business solutions for startups and industrial giants in the UAE.",
            "Choosing RAKEZ means gaining access to a customer-centric hub that removes administrative hurdles for international investors across over 50 industries."
          ]
        },
        {
          title: "Strategic Location",
          content: "Situated at the crossroads of east and west in Ras Al Khaimah, the zone provides a strategic base for expansion into GCC and global markets.",
          list: [
            "Access to major seaports in the northern UAE",
            "Connectivity to RAK and Dubai international airports",
            "Lower operational and living costs than major cities",
            "Prime industrial and commercial real estate availability"
          ]
        },
        {
          title: "Specialized Economic Hubs",
          content: "RAKEZ is structured into dedicated zones to maximize industrial synergy:",
          list: [
            "Al Hamra Industrial Zone: For heavy and light manufacturing.",
            "Al Ghail Industrial Zone: Specialized for large-scale industrial projects.",
            "RAKEZ Academic Zone: Dedicated to providing world-class education and training.",
            "Media Zone: A creative hub for media, marketing, and content production."
          ]
        },
        {
          title: "Setup Solutions for Every Budget",
          content: "We provide consultancy on the best RAKEZ facility for your business scale:",
          list: [
            "Flexi Facilities: Shared desk and workstation options for startups.",
            "Executive Offices: Private, fully-furnished spaces for SMEs.",
            "Warehouses: Customizable plots and pre-built units for trading and assembly.",
            "Land for Development: Large plots for bespoke industrial factories."
          ]
        },
        {
          title: "Ease of Doing Business",
          content: "The RAKEZ 'Portal 360' allows for the digital management of all corporate tasks. This transparency, combined with a dedicated account manager provided through Golden Legacy, ensures that your business operations in the Northern Emirates are smooth, compliant, and poised for expansion into the GCC markets."
        }
      ]}
    />
  );
}
