import ServicePage from '@/components/ServicePage';

export default function FreeZoneOverview() {
  return (
    <ServicePage
      title="UAE Free Zone Company Formation"
      subtitle="Overview of Free Trade Zones in the UAE"
      heroImage="/images/freezone.png"
      description={[
        "Free Trade Zones (FTZs) are specially designated economic areas in the UAE that provide a highly supportive and tax-efficient environment for international businesses. Each Free Zone is designed to cater to specific industrial sectors—ranging from technology and media to commodities and logistics—allowing businesses to operate within a specialized ecosystem.",
        "Unlike Mainland companies, Free Zone entities offer 100% foreign ownership without the need for a local partner, coupled with full repatriation of capital and profits. This makes them the primary choice for visionary entrepreneurs and global corporations looking to establish a strategic base in the Middle East.",
        "Juno BizHub provides end-to-end advisory services to help you select the ideal Free Zone that aligns with your specific business activities, budgetary requirements, and future growth plans across Dubai, Abu Dhabi, and the Northern Emirates."
      ]}
      advantages={[
        "100% Foreign Ownership from day one",
        "100% Repatriation of Capital and Profits with no restrictions",
        "0% Corporate and Personal Income Tax (subject to UAE regulations)",
        "Exemption from all import and export duties",
        "No currency restrictions or exchange controls",
        "Fast-track licensing and registration procedures",
        "Access to world-class logistics and industrial infrastructure",
        "Eligibility for UAE Residence Visas for owners, employees, and families",
        "Modern communication networks and smart city services",
        "Simplified labor recruitment and immigration processes"
      ]}
      executiveSummary={{
        summary: "Free Trade Zones (FTZs) in the UAE are special economic areas that offer 100% foreign ownership and zero corporate/personal taxes for specific business activities. Each zone is governed by an independent Free Zone Authority (FZA).",
        keyFacts: [
          "100% Foreign Ownership allowed natively",
          "100% Repatriation of Capital and Profits",
          "0% Corporate Tax on Qualifying Income",
          "Exempt from import and export duties within the zone"
        ]
      }}
      decisionTable={{
        title: "Free Zone vs Mainland Setup",
        option1Name: "Free Zone",
        option2Name: "Mainland",
        features: [
          { name: "Ownership", option1: "100% Foreign", option2: "100% Foreign (Most Sectors)" },
          { name: "Trading Scope", option1: "International & within Free Zone", option2: "Direct B2B/B2C everywhere in UAE" },
          { name: "Visas", option1: "Limited by desk/office size", option2: "Flexible based on office size" },
          { name: "Audit Requirements", option1: "Required by most authorities", option2: "Only if revenue > 50M AED" }
        ]
      }}
      stepByStep={{
        title: "Free Zone Setup Process",
        steps: [
          { title: "Select Jurisdiction", description: "Choose the right Free Zone based on your specific industry, budget, and facility requirements (e.g., DMCC, IFZA, JAFZA)." },
          { title: "Initial Approval", description: "Submit your business plan, passport copies, and select up to 3 proposed trade names." },
          { title: "Sign Legal Documents", description: "Sign the Memorandum & Articles of Association and the lease agreement for your flexi-desk or physical office." },
          { title: "Obtain License & Visas", description: "Receive your Trade License, Establishment Card, and begin the process for your UAE Residency Visa." }
        ]
      }}
      faqs={[
        {
          question: "Can a Free Zone company trade directly in the local UAE market?",
          answer: "No, Free Zone companies cannot trade directly with mainland consumers (B2C) or mainland businesses without a local distributor. To trade directly in the local market, you need a Mainland license."
        },
        {
          question: "Do I need physical office space in a Free Zone?",
          answer: "Not necessarily. Most Free Zones offer 'Flexi-desk' or 'Co-working' packages which provide you with a license and visa eligibility without the high overhead of renting a physical office."
        }
      ]}
      sections={[
        {
          title: "Legal Entities & Structures",
          content: "The UAE Free Zone regulations provide flexible corporate structures to accommodate different business scales:",
          list: [
            "Free Zone Establishment (FZE) – A single-shareholder limited liability entity.",
            "Free Zone Company (FZCO/FZC) – An entity with multiple shareholders (individuals or corporations).",
            "Branch of a Foreign/Local Company – An extension of a parent company already existing outside the Free Zone."
          ]
        }
      ]}
    />
  );
}
