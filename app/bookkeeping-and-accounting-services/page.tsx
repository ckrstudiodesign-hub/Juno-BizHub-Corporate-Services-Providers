import ServicePage from '@/components/ServicePage';

export default function Bookkeeping() {
  return (
    <ServicePage
      title="Bookkeeping and Accounting Services"
      subtitle="Financial Clarity for Corporate Compliance"
      heroImage="/images/mainland.png"
      description={[
        "Modern business in the UAE requires more than just high-level strategy; it requires rigorous and accurate financial record-keeping to meet VAT and Corporate Tax standards. Golden Legacy provides professional bookkeeping and accounting services designed to give you total visibility over your finances while ensuring 100% regulatory compliance.",
        "We act as your extended finance department, managing day-to-day transactions, bank reconciliations, and payroll processing. Our services are tailored for startups, SMEs, and established firms that require professional-grade financial reporting without the overhead of a full-time in-house accountant.",
        "By integrating smart cloud-based accounting solutions, we provide you with real-time financial dashboards, allowing you to make data-driven decisions that propel your business forward in the UAE market."
      ]}
      advantages={[
        "Accurate recording of all daily financial transactions",
        "Compliance with UAE VAT and Corporate Tax record-keeping laws",
        "Monthly and quarterly Profit & Loss (P&L) and Balance Sheet reporting",
        "Expert bank account reconciliation and cash flow monitoring",
        "Audit-ready financial statements for annual license renewals",
        "Implementation of cloud-based accounting software (Xero, QuickBooks, Zoho)",
        "Management of Accounts Payable (AP) and Accounts Receivable (AR)",
        "Payroll processing and WPS (Wage Protection System) compliance",
        "Strategic advice on cost optimization and expense management",
        "Direct preparation for VAT filings and annual corporate audits"
      ]}
      sections={[
        {
          title: "Why Is Professional Bookkeeping Essential?",
          content: [
            "With the introduction of Corporate Tax, holding a set of audited financial statements is becoming mandatory for many business categories. Professional bookkeeping is the foundation for a successful audit.",
            "Choosing Golden Legacy for your accounting needs ensures that your books are structured to meet the specific requirements of UAE banks and the Federal Tax Authority."
          ]
        },
        {
          title: "Strategic Advantage",
          content: "Clear financial data is the primary driver of growth. We help you identify trends, manage liquidity, and optimize your tax position through methodical record-keeping.",
          list: [
            "Real-time access to your financial health",
            "Elimination of year-end 'audit stress'",
            "Optimized VAT recovery and tax positioning",
            "Integration with UAE-compliant payroll systems"
          ]
        },
        {
          title: "The Legacy Finance Standard",
          content: "We don't just 'do the numbers'; we provide financial insights. Our monthly reviews help you understand your burn rate, profit margins, and ROI, ensuring your UAE entity remains profitable and scalable for years to come."
        }
      ]}
    />
  );
}
