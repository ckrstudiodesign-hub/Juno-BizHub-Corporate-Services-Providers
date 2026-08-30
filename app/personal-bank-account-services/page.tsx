import ServicePage from '@/components/ServicePage';

export default function PersonalBankAccountServices() {
  return (
    <ServicePage
      title="Personal Bank Account Services"
      subtitle="Exclusive Banking for High Net Worth Individuals"
      heroImage="/images/consultant.png"
      description={[
        "Dubai has emerged as a global wealth hub, offering premier banking services for residents and international investors. At Juno BizHub, we provide bespoke assistance for opening personal bank accounts, catering to high-net-worth individuals who require discretion, efficiency, and access to premium financial products.",
        "Whether you are a resident looking for seamless everyday banking or a non-resident investor seeking wealth preservation strategies, our team facilitates direct introductions to priority banking divisions.",
        "We handle the intricate documentation process, ensuring compliance with UAE banking regulations while securing you access to multi-currency accounts, wealth management services, and exclusive credit facilities."
      ]}
      advantages={[
        "Priority banking services for HNWIs",
        "Assistance for both Residents and Non-Residents",
        "Multi-currency accounts (USD, EUR, GBP, AED)",
        "Wealth management and investment advisory access",
        "Fast-track account opening process",
        "Seamless digital banking integration",
        "Exclusive credit card and loan facilities",
        "Dedicated relationship manager introductions"
      ]}
      sections={[
        {
          title: "Tailored for Your Lifestyle",
          content: "We understand that your banking needs are unique. We connect you with institutions that offer tailored solutions:",
          list: [
            "Private Banking Suites",
            "International Remittance Services",
            "Mortgage and Real Estate Financing",
            "Premium Rewards & Concierge Services",
            "Asset Protection Strategies"
          ]
        },
        {
          title: "Documentation Support",
          content: "Our team prepares a comprehensive profile including proof of income, source of wealth, and residential status to ensure a smooth approval process with top-tier UAE banks."
        }
      ]}
    />
  );
}
