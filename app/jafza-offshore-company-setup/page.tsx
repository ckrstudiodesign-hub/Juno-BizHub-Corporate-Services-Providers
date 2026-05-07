import ServicePage from '@/components/ServicePage';

export default function JAFZAOffshore() {
  return (
    <ServicePage
      title="JAFZA Offshore Company Setup"
      subtitle="Jebel Ali Free Zone Authority Offshore Formation"
      heroImage="/images/offshore.png"
      description={[
        "JAFZA Offshore was started in 2003 under the Offshore Companies Regulations. It is strategically located near Jebel Ali Port and Al Maktoum International Airport, boasting brilliant logistics and world-class infrastructure.",
        "A JAFZA offshore company requires a minimum of one shareholder and two directors, plus a mandatory secretary. There is no fixed minimum share capital requirement."
      ]}
      advantages={[
        "Asset Protection and Investment Security",
        "100% Anonymity, Confidentiality, and Privacy",
        "100% Foreign Ownership",
        "Exemption from corporate and personal tax",
        "No requirement for filing Annual Audit Reports",
        "Can open Corporate Bank accounts in multi-currencies",
        "Does not fall within the ambit of VAT",
        "Profit maximization through tax minimization"
      ]}
      sections={[
        {
          title: "Permitted Activities",
          list: [
            "Contact with Professionals (legal, accountants, auditors)",
            "Hold shareholders and directors meetings in UAE",
            "Hold lease of property for registered office",
            "Own real property in Palm Jumeirah or Nakheel properties",
            "Become shareholders of Freezone and LLCs"
          ]
        }
      ]}
    />
  );
}
