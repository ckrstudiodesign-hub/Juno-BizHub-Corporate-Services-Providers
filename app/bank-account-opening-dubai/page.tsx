import ServicePage from '@/components/ServicePage';

export default function BankAccountServices() {
  return (
    <ServicePage
      title="Bank Account Services"
      subtitle="Elite Corporate Banking Introductions"
      heroImage="/images/mainland.png"
      description={[
        "In the UAE's complex regulatory landscape, opening a corporate bank account is often the most challenging step of business setup. Juno BizHub leverages two decades of leadership in the UAE banking sector to provide our clients with a significant advantage.",
        "We don't just provide a list of banks; we provide direct introductions to senior relationship managers and assist in structuring your corporate documents to meet the rigorous 'Know Your Customer' (KYC) and compliance standards of Tier-1 UAE banks.",
        "Our team specializes in navigating the requirements for multi-currency accounts, international trade facilities, and digital banking platforms, ensuring your business has the financial foundation it needs to thrive."
      ]}
      advantages={[
        "Direct introductions to relationship managers in major UAE banks",
        "Assistance with multi-currency account opening (AED, USD, EUR, etc.)",
        "Expert advisory on compliance and KYC documentation",
        "Support for both local and international business structures",
        "Zero-balance and low-minimum balance account advisory",
        "Assistance with online banking and digital transition",
        "Guidance on credit facilities and trade finance",
        "High success rate for complex corporate structures"
      ]}
      sections={[
        {
          title: "Our Banking Partners",
          content: "We work closely with the most reputable financial institutions in the UAE to provide seamless integration for our clients:",
          list: [
            { name: "Emirates NBD", logo: "/banks/emirates-nbd.svg" },
            { name: "Mashreq Bank", logo: "/banks/mashreq-bank.svg" },
            { name: "Dubai Islamic Bank (DIB)", logo: "/banks/dubai-islamic-bank.png" },
            { name: "Commercial Bank of Dubai (CBD)", logo: "/banks/commercial-bank-of-dubai.svg" },
            { name: "First Abu Dhabi Bank (FAB)", logo: "/banks/first-abu-dhabi-bank.svg" },
            { name: "ADCB", logo: "/banks/adcb.png" },
            { name: "Wio Bank (Digital-first)", logo: "/banks/wio-bank.jpeg" }
          ]
        },
        {
          title: "The Compliance Journey",
          content: "Our banking experts review your business activities, source of wealth, and corporate history to ensure your application is structurally sound before it reaches the bank's compliance desk, significantly reducing the risk of rejection."
        }
      ]}
    />
  );
}
