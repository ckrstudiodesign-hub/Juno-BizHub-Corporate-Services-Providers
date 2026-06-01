import ServicePage from '@/components/ServicePage';

export default function CorporateTax() {
  return (
    <ServicePage
      title="Corporate Tax UAE"
      subtitle="Navigating the New Era of UAE Taxation"
      heroImage="/images/mainland.png"
      description={[
        "The UAE has introduced a federal Corporate Tax (CT) regime to further solidify its position as a transparent and competitive global business hub. Starting from June 2023, businesses are required to understand their obligations under the new law, which applies a competitive 9% rate on taxable income above AED 375,000.",
        "Golden Legacy provides specialized Corporate Tax advisory to help you understand how this new regime impacts your specific business structure—whether you are a Mainland entity, a Free Zone company, or a multinational group. We ensure you are registered, compliant, and positioned for maximum tax efficiency.",
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
      sections={[
        {
          title: "Why Choose Our CT Advisory?",
          content: [
            "The Corporate Tax law introduces a new layer of complexity to UAE business operations. We provide the technical depth required to ensure your bookkeeping meets the 'Audited Financial Statement' standards required for CT compliance.",
            "Choosing Golden Legacy ensures that your business transitions seamlessly into this new regulatory era without operational disruption."
          ]
        },
        {
          title: "Strategic Advantage",
          content: "Businesses that proactively structure their operations for Corporate Tax gain a competitive edge by minimizing tax leakages and maximizing legally available reliefs.",
          list: [
            "Optimization of Free Zone tax exemptions",
            "Expert Transfer Pricing documentation (Master File/Local File)",
            "Advice on foreign tax credit utilization",
            "Restructuring for tax-efficient group operations"
          ]
        },
        {
          title: "The Road to Compliance",
          content: "We manage the entire CT journey—from initial impact assessment and gap analysis to the final filing of the tax return—ensuring your legacy remains compliant and sound."
        }
      ]}
    />
  );
}
