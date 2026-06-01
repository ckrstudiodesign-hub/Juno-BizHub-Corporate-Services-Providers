import ServicePage from '@/components/ServicePage';

export default function JAFZASetup() {
  return (
    <ServicePage
      title="JAFZA Company Formation"
      subtitle="Business Setup in Jebel Ali Free Zone"
      heroImage="/images/freezone.png"
      description={[
        "Operating since 1985, Jebel Ali Free Zone (JAFZA) is the UAE's flagship trade hub and one of the largest industrial zones globally. It is integrated with Jebel Ali Port, the region's largest deep-water port, creating a unique multimodal logistics ecosystem that serves over 3.5 billion people.",
        "JAFZA is home to over 8,000 companies, including approximately 100 Global Fortune 500 enterprises. It accounts for nearly 24% of Dubai's total GDP and is a critical driver of the nation's non-oil trade. This zone is specifically engineered for large-scale manufacturing, trading, and distribution companies.",
        "Whether you are a startup needing a small office or a multinational requiring thousands of square meters of warehouse space, JAFZA provides the scale and connectivity to take your business global."
      ]}
      advantages={[
        "100% foreign ownership and full control of operations",
        "Exemption from corporate tax for 50 years (renewable)",
        "No restriction on capital and profit repatriation",
        "0% Personal Income tax",
        "Direct integration with DP World's Jebel Ali Port",
        "On-site customs and simplified documentation processes",
        "No currency restrictions or exchange controls",
        "Ability to mortgage assets and premises to UAE banks",
        "Access to a vast network of global logistics partners",
        "World-class infrastructure for heavy industry and manufacturing"
      ]}
      sections={[
        {
          title: "Why Choose JAFZA?",
          content: [
            "JAFZA is the UAE's flagship trade hub and one of the largest industrial zones globally, accounting for nearly 24% of Dubai's total GDP.",
            "Choosing JAFZA means positioning your business within a unique multimodal logistics ecosystem that serves over 3.5 billion people across the world."
          ]
        },
        {
          title: "Strategic Location",
          content: "Directly integrated with Jebel Ali Port, the region's largest deep-water port, JAFZA offers unrivaled sea, air, and land connectivity.",
          list: [
            "Seamless connection to Jebel Ali Port",
            "Proximity to Al Maktoum International Airport",
            "Direct access to major trans-emirate highways",
            "Unrivaled sea-to-air logistics corridor"
          ]
        },
        {
          title: "Setup Options in JAFZA",
          content: "JAFZA accommodates various legal structures to suit your business needs:",
          list: [
            "Free Zone Establishment (FZE) – Single shareholder.",
            "Free Zone Company (FZCO) – Multiple shareholders.",
            "Public Listed Company (PLC).",
            "Branch of a Foreign or Local Company."
          ]
        }
      ]}
    />
  );
}
