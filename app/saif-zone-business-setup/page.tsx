import ServicePage from '@/components/ServicePage';

export default function SAIFSetup() {
  return (
    <ServicePage
      title="SAIF Zone Business Setup"
      subtitle="Sharjah Airport International Free Zone"
      heroImage="/images/freezone.png"
      description={[
        "The Sharjah Airport International Free Zone (SAIF Zone), established in 1995, is one of the UAE's oldest and most respected business hubs. Renowned for its unparalleled strategic location adjacent to Sharjah International Airport, it has successfully licensed over 8,000 companies from more than 160 countries. It serves as a critical junction for businesses looking to export to the CIS countries, Africa, and the Indian Subcontinent.",
        "SAIF Zone is distinguished by its 'one-day trade license' issuance, making it the premier choice for fast-track entrepreneurs who need to commence operations immediately. Its robust infrastructure includes premium office spaces, high-tech warehouses, and specialized industrial plots designed for large-scale manufacturing and assembly.",
        "Golden Legacy provides comprehensive support for SAIF Zone integration, ensuring that your business leverages its unique logistics advantages and tax-exempt status to maximize global reach and operational efficiency."
      ]}
      advantages={[
        "100% Foreign Ownership and complete capital/profit repatriation",
        "0% Corporate and Personal Income Tax environment",
        "Trade license issued within 24 hours of application",
        "Strategic location adjacent to Sharjah International Airport",
        "Single-window system for all licensing and administrative tasks",
        "Wide variety of licenses: Trading, Service, Industrial, and Freelance",
        "World-class industrial infrastructure and pre-built warehousing solutions",
        "No customs duties on import/export of goods within the free zone",
        "Excellent air, land, and sea connectivity via Sharjah's multi-port system",
        "Ability to recruit international talent with simplified visa procedures"
      ]}
      sections={[
        {
          title: "Infrastructure for Industry",
          content: "SAIF Zone offers specialized high-tech facilities to support diverse business models:",
          list: [
            "SAIF Offices: Fully-furnished executive suites and shared desk facilities.",
            "SAIF Warehouses: Modular units for trading, storage, and assembly.",
            "Industrial Land: Large-scale plots for bespoke factory development.",
             "Labor Accommodation: On-site housing for industrial staff."
          ]
        },
        {
          title: "The Logistics Powerhouse",
          content: "Benefiting from Sharjah's unique position as the only UAE Emirate with ports on both the Arabian Gulf and the Indian Ocean, SAIF Zone companies enjoy a logistics advantage that is unrivaled for global trading and distribution companies."
        },
        {
          title: "Seamless Integration",
          content: "Our team at Golden Legacy manages the entire setup journey—from initial security clearance to final visa stamping. We ensure your corporate documents are structured for immediate banking eligibility, allowing you to start trading from your new SAIF Zone base with zero administrative delays."
        }
      ]}
    />
  );
}
