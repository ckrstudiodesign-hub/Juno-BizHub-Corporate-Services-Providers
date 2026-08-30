import ServicePage from '@/components/ServicePage';

export default function CorporateTax() {
  return (
    <ServicePage
      title="Corporate Tax UAE"
      subtitle="Navigating the New Era of UAE Taxation"
      heroImage="/images/mainland.png"
      description={[
        "The UAE has introduced a federal Corporate Tax (CT) regime to further solidify its position as a transparent and competitive global business hub. Starting from June 2023, businesses are required to understand their obligations under the new law, which applies a competitive 9% rate on taxable income above AED 375,000.",
        "Juno BizHub provides specialized Corporate Tax advisory to help you understand how this new regime impacts your specific business structure—whether you are a Mainland entity, a Free Zone company, or a multinational group. We ensure you are registered, compliant, and positioned for maximum tax efficiency.",
        "Our experts guide you through the complexities of 'Qualifying Income' for Free Zone companies and help you architect your inter-company transactions in alignment with Transfer Pricing regulations."
      ]}
      advantages={[
        "Comprehensive registration for Corporate Tax with the FTA",
        "Strategic assessment of 'Qualifying Free Zone Person' status",
        "Transfer Pricing advisory to ensure arm's length transactions",
        "Guidance on taxable income calculations and deductible expenses",
        "Advice on forming Tax Groups for optimized group-level filing",
        "Assistance with annual Corporate Tax return preparation and filing",
        "Clarity on exemptions for government and charitable entities",
        "Strategic advice on Small Business Relief (SBR) eligibility",
        "Compliance monitoring to avoid non-disclosure penalties",
        "Long-term tax planning to protect corporate profitability"
      ]}
      executiveSummary={{
        summary: "The UAE Federal Corporate Tax (CT) regime imposes a 9% standard rate on taxable business income exceeding AED 375,000. It applies to all UAE businesses and commercial activities, except for the extraction of natural resources.",
        keyFacts: [
          "9% standard corporate tax rate on income > AED 375,000",
          "0% rate for taxable income up to AED 375,000 (Small Business Relief available)",
          "Free Zone entities can benefit from a 0% rate on 'Qualifying Income'",
          "Mandatory registration for all businesses, even those eligible for 0% tax"
        ]
      }}
      decisionTable={{
        title: "Mainland vs Free Zone Tax Impact",
        option1Name: "Mainland Entity",
        option2Name: "Qualifying Free Zone",
        features: [
          { name: "Standard Tax Rate", option1: "9% (above AED 375k)", option2: "0% on Qualifying Income" },
          { name: "Registration Required", option1: true, option2: true },
          { name: "Audited Financials", option1: "Required if revenue > AED 50M", option2: "Mandatory for 0% rate" },
          { name: "Transfer Pricing Rules", option1: "Applicable", option2: "Applicable" }
        ]
      }}
      stepByStep={{
        title: "Your Corporate Tax Journey",
        steps: [
          { title: "Impact Assessment", description: "Evaluate how the CT law affects your specific corporate structure and revenue streams." },
          { title: "FTA Registration", description: "Register your business with the Federal Tax Authority (FTA) and obtain a Tax Registration Number (TRN)." },
          { title: "Accounting Alignment", description: "Upgrade your bookkeeping to ensure compliance with International Financial Reporting Standards (IFRS)." },
          { title: "Tax Filing", description: "Submit your annual Corporate Tax return and pay any applicable liabilities within 9 months of the financial year-end." }
        ]
      }}
      faqs={[
        {
          question: "Do Free Zone companies have to pay Corporate Tax?",
          answer: "Free Zone companies must register for Corporate Tax. However, they may benefit from a 0% tax rate strictly on 'Qualifying Income' if they meet substance requirements and maintain audited financial statements."
        },
        {
          question: "What is Small Business Relief?",
          answer: "Businesses with revenue below AED 3 million in a relevant tax period may elect to be treated as having no taxable income, effectively paying zero Corporate Tax until the end of 2026."
        }
      ]}
      sections={[
        {
          title: "Strategic Advantage",
          content: "Businesses that proactively structure their operations for Corporate Tax gain a competitive edge by minimizing tax leakages and maximizing legally available reliefs.",
          list: [
            "Optimization of Free Zone tax exemptions",
            "Expert Transfer Pricing documentation (Master File/Local File)",
            "Advice on foreign tax credit utilization",
            "Restructuring for tax-efficient group operations"
          ]
        }
      ]}
    />
  );
}
