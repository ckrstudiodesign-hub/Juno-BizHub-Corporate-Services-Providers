import ServicePage from '@/components/ServicePage';

export default function TradeFinanceServices() {
  return (
    <ServicePage
      title="Trade Finance Services"
      subtitle="Fueling Global Commerce"
      heroImage="/images/office.png"
      description={[
        "In the dynamic world of international trade, liquidity and risk mitigation are paramount. Juno BizHub connects your business with robust trade finance solutions, empowering you to expand your global footprint with confidence.",
        "We specialize in structuring trade facilities such as Letters of Credit (LCs) and Bank Guarantees (BGs), bridging the trust gap between buyers and sellers across borders.",
        "Our team works with a network of banks and financial institutions to secure competitive rates and flexible terms, ensuring your supply chain remains uninterrupted and your capital is optimized."
      ]}
      advantages={[
        "Issuance of Letters of Credit (LC - Sight/Usance)",
        "Bank Guarantees (Performance Bond, Tender Bond, etc.)",
        "Trust Receipts and Invoice Discounting",
        "Export and Import Financing solutions",
        "Risk mitigation for international transactions",
        "Optimization of working capital",
        "Support for complex cross-border deals",
        "Advisory on Incoterms and trade compliance"
      ]}
      sections={[
        {
          title: "Comprehensive Trade Instruments",
          content: "We provide access to a full suite of financial instruments tailored to your specific trade cycle:",
          list: [
            "Documentary Collections",
            "Standby Letters of Credit (SBLC)",
            "Shipping Guarantees",
            "Pre-shipment Finance",
            "Post-shipment Finance"
          ]
        },
        {
          title: "Expert Structuring",
          content: "Trade finance is not just about funding; it's about structuring. We analyze your trade cycle to design facilities that match your cash flow needs, negotiating terms that protect your interests while satisfying your counterparties."
        }
      ]}
    />
  );
}
