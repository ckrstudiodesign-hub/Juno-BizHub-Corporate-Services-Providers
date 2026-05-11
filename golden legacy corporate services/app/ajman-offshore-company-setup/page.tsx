import ServicePage from '@/components/ServicePage';

export default function AjmanOffshore() {
  return (
    <ServicePage
      title="Ajman Offshore Company Setup"
      subtitle="Ajman Offshore Company Formation"
      heroImage="/images/offshore.png"
      description={[
        "Ajman Offshore Company Formation started in 2014 under the jurisdiction of Ajman Free Zone. It offers zero tax structure and complete confidentiality of information, with details of shareholders not being disclosed publicly.",
        "An Ajman offshore company is not required to own a physical office in the UAE, making it a highly cost-effective and flexible setup for international investors."
      ]}
      advantages={[
        "100% Foreign Ownership",
        "No taxation Policy (Zero taxes)",
        "Robust and fast registration (2-3 working days)",
        "Low barriers to entry (No auditing/bookkeeping requirement)",
        "Multiple bank accounts in UAE or worldwide",
        "Shares in Local Companies (Freezone and LLCs)",
        "100% repatriation of profits",
        "Right to own property anywhere in the UAE"
      ]}
      sections={[
        {
          title: "Allowed Activities",
          list: [
            "Operating as a holding company",
            "General Trading Activities",
            "Advisory and Consulting Services",
            "Shipping and Ship Management",
            "Commission Agent (Intermediary Broker)",
            "Investments and Joint Investments",
            "International Services"
          ]
        }
      ]}
    />
  );
}
