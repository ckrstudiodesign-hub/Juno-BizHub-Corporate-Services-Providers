import ServicePage from '@/components/ServicePage';

export default function AjmanSetup() {
  return (
    <ServicePage
      title="Ajman Free Zone Business Setup"
      subtitle="Strategic Business Hub in Northern Emirates"
      heroImage="/images/freezone.png"
      description={[
        "Ajman Free Zone (AFZ), established in 1988, is one of the UAE's leading investment hubs, offering a strategic location at the entrance of the Arabian Gulf. It provides specialized support for SMEs and large-scale industrial projects alike, acting as a gateway to both eastern and western trade markets.",
        "Known for its cost-effective setup options and flexible payment plans, AFZ has become a favorite for entrepreneurs seeking a professional business environment without the high overheads of Dubai. It features a fully digitized registration process, allowing for rapid company incorporation.",
        "AFZ is strategically positioned near the Ajman Port and within easy reach of both Sharjah and Dubai International Airports, ensuring seamless logistics for trading and manufacturing businesses."
      ]}
      advantages={[
        "100% foreign ownership and management control",
        "0% Corporate and Personal Income tax",
        "Most competitive land and office rental rates in the region",
        "Full repatriation of capital and profits",
        "Multi-currency corporate bank account eligibility",
        "Installment-based payment plans for startups",
        "24-hour business support and security services",
        "Seamless digital incorporation and document processing",
        "Exemption from all import and export duties",
        "Proximity to major UAE ports and airports"
      ]}
      sections={[
        {
          title: "Why Choose Ajman Free Zone?",
          content: [
            "Ajman Free Zone (AFZ) is renowned for providing some of the most cost-effective and flexible business setup solutions in the northern UAE, making it a favorite for SMEs and startups.",
            "Choosing AFZ means benefiting from a fully digitized registration process and installment-based payment plans, reducing the initial financial hurdles of launching your enterprise."
          ]
        },
        {
          title: "Strategic Location",
          content: "Positioned at the entrance of the Arabian Gulf, AFZ offers a strategic logistics base with immediate access to major ports and international airports across Sharjah and Dubai.",
          list: [
            "Adjacent to the Ajman Port",
            "Easy access to Sharjah and Dubai International Airports",
            "Centrally located in the Northern Emirates",
            "Connectivity to major UAE shipping and land transport routes"
          ]
        },
        {
          title: "Target Sectors",
          content: "Ajman Free Zone caters to a wide spectrum of industries including:",
          list: [
            "E-commerce & Digital Services",
            "General Trading & Distribution",
            "Manufacturing & Industrial Assembly",
            "Professional Consultancy",
            "Freelance Licensing"
          ]
        }
      ]}
    />
  );
}
