import ServicePage from '@/components/ServicePage';

export default function ISOCertification() {
  return (
    <ServicePage
      title="ISO Certification Dubai"
      subtitle="Excellence Through Global Standardization"
      heroImage="/images/mainland.png"
      description={[
        "ISO Certification is a powerful tool to demonstrate your company's commitment to quality, security, and operational efficiency. In the UAE's competitive market, holding a globally recognized ISO standard can be the deciding factor in winning government tenders and major corporate contracts.",
        "Golden Legacy provides end-to-end ISO consultancy services, guiding you through the selection, implementation, and audit of the standards most relevant to your industrial sector. We work with certified bodies to ensure your Quality Management Systems (QMS) meet international benchmarks.",
        "From ISO 9001 (Quality) to ISO 27001 (Information Security) and beyond, we handle the technical documentation and process mapping required for you to achieve certification with zero stress."
      ]}
      advantages={[
        "Enhanced corporate reputation and global brand recognition",
        "Higher eligibility for UAE government and semi-government tenders",
        "Increased operational efficiency and waste reduction",
        "Improved customer trust and satisfaction levels",
        "Standardized processes for consistent quality output",
        "Better risk management and information security protocols",
        "Compliance with international health, safety, and environment laws",
        "Boosted employee morale and clarity of roles",
        "Competitive advantage over uncertified competitors",
        "Continuous improvement framework for long-term growth"
      ]}
      sections={[
        {
          title: "Why Choose ISO Certification?",
          content: [
            "Achieving ISO status is more than just a certificate; it is a transformation of your business DNA into a more efficient, quality-driven machine.",
            "Choosing Golden Legacy as your consultant ensures that the implementation is not just 'for the certificate' but provides real, tangible value to your daily operations."
          ]
        },
        {
          title: "Strategic Advantage",
          content: "We provide specialized consultancy across various ISO standards to match your specific industry needs:",
          list: [
            "ISO 9001:2015 - Quality Management Systems (General)",
            "ISO 14001:2015 - Environmental Management Systems",
            "ISO 45001:2018 - Occupational Health & Safety",
            "ISO 27001 - Information Security Management",
            "ISO 22000 - Food Safety Management"
          ]
        },
        {
          title: "The Certification Pathway",
          content: "Our team manages the entire process: Gap Analysis, Documentation Drafting, Internal Training, and Pre-audit reviews. We stay with you through the External Audit to ensure a successful certification result."
        }
      ]}
    />
  );
}
