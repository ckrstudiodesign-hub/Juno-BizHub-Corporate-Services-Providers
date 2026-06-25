import ServicePage from '@/components/ServicePage';

export default function MainlandOverview() {
  return (
    <ServicePage
      title="Mainland Company Formation in Dubai"
      subtitle="Overview of Dubai Mainland Company Formation Services"
      heroImage="/images/mainland.png"
      description={[
        "Mainland is the most common form of Company set up in the United Arab Emirates. This business setup in UAE implies an onshore company that undertakes business in Dubai or other regions of the Emirates and outside the UAE.",
        "Mainland business setup in Dubai gained tremendous preference owing to its high level of flexibility. The formation of a mainland company entitles you the right to trade with end-customers anywhere in UAE and across the world. (unlike Free Zone companies, An LLC enjoys the freedom to trade anywhere in the UAE or GCC. Further, minimum restriction on business activities, visas, and other benefits make this Company set up a highly lucrative business option.",
        "Nevertheless, new investors have taken advantage of this option to establish an international brand reputation and plan their future growth strategy. If you are looking for a Business Setup in Dubai Mainland, you can bank on us."
      ]}
      advantages={[
        "No fixed or minimum share capital requirements",
        "No restriction on office space and visas (visas depends upon the office space)",
        "Can freely carry out business across the UAE with local authorities and the government",
        "Exemption from 5% customs duty on imported goods",
        "Low VAT Rate",
        "Improved Credibility for opening multi-currency Corporate bank accounts",
        "Ability to diversify your business",
        "Exemption on yearly audit"
      ]}
      executiveSummary={{
        summary: "A mainland company in Dubai (often an LLC) is an onshore entity registered with the Department of Economic Development (DED). It allows you to trade freely anywhere in the UAE and internationally without restrictions.",
        keyFacts: [
          "Zero Corporate Tax on profits up to AED 375,000",
          "100% Foreign Ownership allowed in most sectors",
          "No currency restrictions",
          "Can bid for government contracts"
        ]
      }}
      decisionTable={{
        title: "Mainland vs Free Zone",
        option1Name: "Mainland (DED)",
        option2Name: "Free Zone",
        features: [
          { name: "Trading Scope", option1: "Anywhere in UAE & Global", option2: "Only inside Free Zone & Global" },
          { name: "Government Contracts", option1: true, option2: false },
          { name: "Office Requirement", option1: "Physical office mandatory", option2: "Flexi-desk allowed" },
          { name: "Foreign Ownership", option1: "100% (for most activities)", option2: "100%" }
        ]
      }}
      stepByStep={{
        title: "Mainland Setup Process",
        steps: [
          { title: "Initial Approval", description: "Select your business activity and reserve a trade name with the DED." },
          { title: "Legal Drafting", description: "Draft the Memorandum of Association (MOA) and Local Service Agent agreement if required." },
          { title: "Office Lease", description: "Sign a tenancy contract (Ejari) for your physical office space in Dubai." },
          { title: "Final License", description: "Submit all documents to the DED and obtain your official Trade License." }
        ]
      }}
      faqs={[
        {
          question: "Do I need a local sponsor for a Dubai Mainland company?",
          answer: "Recent legislative changes allow 100% foreign ownership for most commercial and industrial activities. A Local Service Agent (LSA) may only be required for specific professional licenses."
        },
        {
          question: "What is the minimum capital requirement for an LLC?",
          answer: "There is no statutory minimum share capital requirement for a standard LLC in Dubai Mainland, though it should be sufficient to achieve the purpose of incorporation."
        }
      ]}
      sections={[
        {
          title: "Types of Licenses Issued by DED",
          content: "You are free to choose the license that fits your business model:",
          list: [
            "Professional License – For service-oriented businesses",
            "Commercial License – For physical services or trading activities",
            "Branch or Representative Office – Legal extension of a parent company"
          ]
        }
      ]}
      hallmarks={[
        {
          title: "Best Value",
          description: "We have got you covered for the entire Dubai Mainland company formation process. Our end-to-end service will prepare and file all the mandatory documents with the authorities."
        },
        {
          title: "Expert Guidance",
          description: "Our consultants are well versed in every fundamental of the process and can handle it perfectly. Further, we offer live customer support throughout the process."
        },
        {
          title: "Robust process",
          description: "We ensure the process is streamlined and with the help of appropriate technology and automation. Your company formation process is just a step away."
        },
        {
          title: "Transparency",
          description: "Our fair business practices and principles of transparency allow us to disclose complete information. We provide upfront prices to you in the absence of any hidden fees."
        }
      ]}
    />
  );
}
