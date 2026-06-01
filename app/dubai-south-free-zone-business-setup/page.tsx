import ServicePage from '@/components/ServicePage';

export default function DubaiSouthSetup() {
  return (
    <ServicePage
      title="Dubai South Free Zone Business Setup"
      subtitle="Strategic Hub around Al Maktoum International Airport"
      heroImage="/images/freezone.png"
      description={[
        "Dubai South is the city's largest single urban master development, spanning 145 square kilometers and designed as an integrated industrial and residential ecosystem. Centered around the Al Maktoum International Airport—set to become the world's largest once complete—Dubai South is a strategic flagship project of the Government of Dubai, engineered to support every imaginable type of business activity.",
        "The zone is home to a world-class logistics hub and is the dedicated site for the Expo 2020 (now Expo City Dubai), providing businesses with a high-prestige platform to connect with global markets. It is specifically designed to facilitate the rapid movement of goods, people, and services, making it the primary choice for companies in the aviation, logistics, and e-commerce sectors.",
        "Registered as Dubai World Central (DWC) entities, businesses in Dubai South benefit from a seamless regulatory environment and direct access to multimodal transport links, including sea-to-air connectivity via the nearby Jebel Ali Port."
      ]}
      advantages={[
        "100% foreign ownership and full capital/profit repatriation",
        "Strategic location centered around Al Maktoum International Airport",
        "Direct proximity to Jebel Ali Port, the region's largest sea hub",
        "Designated 'Dual Licensing' zone, allowing business in mainland Dubai",
        "World-class industrial and logistics infrastructure",
        "Wide variety of office solutions: from Smart Desks to dedicated commercial units",
        "Simplified and transparent business licensing and registration process",
        "Access to a massive, self-sustained urban community for employees",
        "0% Corporate and Personal Income tax environment",
        "Multimodal transport ecosystem: Sea, Air, and Land connectivity"
      ]}
      sections={[
        {
          title: "Specialized Business Districts",
          content: "Dubai South is divided into dedicated districts, each providing specialized infrastructure for targeted industries:",
          list: [
            "Logistics District: Engineered for fast-cycle logistics and distribution.",
            "Aviation District: A global hub for MRO, FBOs, and aviation high-tech.",
            "Business Park: Premium office spaces for general corporate activities.",
             "Humanitarian District: Supporting global NGO and aid operations."
          ]
        },
        {
          title: "The Aero-City Vision",
          content: "As a 'city of the future,' Dubai South integrates business with high-quality residential, education, and hospitality sectors. This ensures that your company isn't just a place of work, but part of a thriving, self-sufficient economy that is predicted to create over 500,000 jobs by 2030."
        },
        {
          title: "Setup Support & Logistics",
          content: "Golden Legacy provides expert advisory for Dubai South integration, ensuring your DWC-LLC is structured for maximum efficiency. We handle everything from activity clearance to visa processing, allowing you to focus on scaling your business within Dubai's newest and most ambitious economic frontier."
        }
      ]}
    />
  );
}
