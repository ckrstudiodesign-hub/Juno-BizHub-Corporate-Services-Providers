import ServicePage from '@/components/ServicePage';

export default function LegalTranslation() {
  return (
    <ServicePage
      title="Legal Translation Dubai"
      subtitle="Accurate & Certified Professional Translations"
      heroImage="/images/mainland.png"
      description={[
        "In the UAE, Arabic is the primary language for all official government documentation. Any legal document issued in another language must be translated into Arabic by a licensed legal translator approved by the UAE Ministry of Justice. Golden Legacy provides high-precision legal translation services that are accepted by all courts and government entities.",
        "We specialize in the translation of corporate MOAs, Power of Attorneys, court orders, medical reports, and educational certificates. Our translations carry the weight of authority required for filing at the Department of Economy and Tourism (DET), the Ministry of Labor, and the UAE Judicial system.",
        "Our team of sworn translators ensures that the legal terminology is preserved with 100% accuracy, maintaining the integrity and enforceability of your original documents."
      ]}
      advantages={[
        "Certified translations approved by the UAE Ministry of Justice",
        "Acceptance by all UAE Courts, Embassies, and Ministries",
        "Expertise in multi-language pairs (English, Arabic, French, Russian, etc.)",
        "High-precision translation of technical and medical documents",
        "Dedicated focus on corporate and commercial legal contracts",
        "Rapid turnaround times for urgent government submissions",
        "Confidential handling of sensitive and private documents",
        "Sworn translators with deep knowledge of UAE legal terminology",
        "Consistency in terminology across large-scale corporate portfolios",
        "Competitive pricing with no compromise on linguistic quality"
      ]}
      sections={[
        {
          title: "Why Choose Our Translation Service?",
          content: [
            "A minor error in legal translation can lead to significant delays in license processing or legal disputes. We provide an additional layer of proofreading to ensure total accuracy.",
            "Choosing Golden Legacy means your documents are ready for immediate use in any UAE government department, from a Notary Public to the Ministry of Foreign Affairs."
          ]
        },
        {
          title: "Strategic Advantage",
          content: "We provide specialized translation services for a wide spectrum of documents:",
          list: [
            "Memorandum & Articles of Association (MOA/AOA)",
            "Power of Attorney (POA) and Board Resolutions",
            "Employment Contracts and Labor Agreements",
            "Certificates of Incorporation and Good Standing",
            "Judgments, Decrees, and Legal Notices"
          ]
        },
        {
          title: "The Golden Standard of Communication",
          content: "Effective business communication in the Middle East begins with language. Beyond legal translation, we also provide professional translation for marketing materials, ensuring your brand message is culturally and linguistically optimized for the UAE market."
        }
      ]}
    />
  );
}
