import ServicePage from '@/components/ServicePage';

export default function LLCFormation() {
  return (
    <ServicePage
      title="LLC Company Formation in Dubai, UAE"
      subtitle="Limited Liability Company Formation Services"
      heroImage="/images/mainland.png"
      description={[
        "LLC (Limited Liability Company) is the most predominant type of business setup in the UAE Mainland. These companies are authorized to carry out business activities approved by the DED (Department of Economic Development).",
        "A Limited Liability Company is governed by the UAE Commercial Companies Law of 2015 (CCL). The minimum number of shareholders required to form an LLC is 2 while the maximum is 50.",
        "The firm’s equity must be 51% for a UAE Local Partner and 49% for a foreign investor (Note: newer regulations allow 100% ownership in many activities, but traditionally this has been the structure). All liabilities of the company are limited to it, meaning shareholders cannot be held liable for the company's liabilities."
      ]}
      advantages={[
        "No fixed or minimum share capital requirements",
        "No restriction on real estate ownership",
        "Can freely carry out trading across the UAE",
        "Exemption on 5% customs duty on imported goods",
        "Eligible for special licenses issued by the DED",
        "Low VAT Rate",
        "Improved Credibility for multi-currency Corporate bank accounts"
      ]}
      sections={[
        {
          title: "LLC Incorporation Services",
          content: "Golden Legacy’s consultants assist you with the Limited Liability Company Formation process range across:",
          list: [
            "Getting approvals and clearances from departments",
            "Preparing Memorandum of Association (MOA)",
            "Finding reliable local partners",
            "Assistance in Opening Corporate Bank Accounts",
            "Finding a favorable office location",
            "Applying for Residence visa and Emirates ID",
            "Handling other documentation formalities"
          ]
        }
      ]}
      hallmarks={[
        {
          title: "Complete Coverage",
          description: "We will get you covered for the entire LLC Registration Process from choosing your Business Activity to opening your Corporate Bank Account."
        },
        {
          title: "Consistent Support",
          description: "Our consultants are well versed with every fundamental of the LLC Incorporation Process and handle it impeccably with live customer support."
        },
        {
          title: "Robust process",
          description: "We ensure the process is streamlined with appropriate technology and automation. Relax while we take care of your LLC company formation."
        },
        {
          title: "Transparency",
          description: "We believe in fair business practices. Our principle of transparency allows us to provide upfront prices with no hidden fees."
        }
      ]}
    />
  );
}
