import ServicePage from '@/components/ServicePage';

export default function DocumentAttestation() {
  return (
    <ServicePage
      title="Document Attestation Services"
      subtitle="Universal Document Recognition & Validation"
      heroImage="/images/mainland.png"
      description={[
        "Whether you are processing a visa, opening a bank account, or establishing a corporate branch, your international documents must be legally validated by the UAE authorities. Golden Legacy provides a comprehensive, stress-free Document Attestation service to make your paperwork executable within the UAE.",
        "We handle the complex lifecycle of legalization for educational certificates, marriage licenses, birth certificates, and commercial documents. Our global network allows us to manage attestations from the country of origin up to the Ministry of Foreign Affairs (MOFA) in the UAE.",
        "With our concierge approach, we take the administrative burden off your shoulders, ensuring all documents are correctly notarized and stamped by the respective embassies and ministries."
      ]}
      advantages={[
        "End-to-end management of educational and personal degree attestation",
        "Assistance with commercial document attestation (MOA, Board Resolutions)",
        "Direct liaison with the UAE Ministry of Foreign Affairs (MOFA)",
        "Embassy and Consulate legalization for all major countries",
        "Apostille services for Hague Convention member countries",
        "Safe and secure document handling and courier services",
        "Fast-track processing for urgent business and visa requirements",
        "Notarization services from local and international Notary Publics",
        "Legalization of marriage and birth certificates for family visas",
        "Transparent tracking and regular status updates"
      ]}
      sections={[
        {
          title: "Why Is Attestation Required?",
          content: [
            "UAE law requires that any foreign-issued document be authenticated to verify its genuineness before it is accepted by government departments.",
            "Choosing Golden Legacy ensures your documents are handled by professionals who understand the specific requirements of the Ministry of Education, Ministry of Justice, and Dubai Health Authority."
          ]
        },
        {
          title: "Strategic Advantage",
          content: "Correct attestation prevents the rejection of your business license or residency visa applications, saving you significant time and additional government fees.",
          list: [
            "Validation of Power of Attorney (POA) for property and business",
            "Attestation of educational degrees for professional visa categories",
            "Validation of corporate certificates for branch offices",
            "Verification of personal certificates for family sponsorship"
          ]
        },
        {
          title: "Our Global Network",
          content: "Through our network of global partners, we can manage the attestation cycle in over 100 countries—from the USA and UK to India, Pakistan, and Europe—ensuring your documents are ready for use in the UAE within the shortest possible timeframe."
        }
      ]}
    />
  );
}
