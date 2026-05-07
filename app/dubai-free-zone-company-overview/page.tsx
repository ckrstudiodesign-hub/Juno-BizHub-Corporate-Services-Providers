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
        "Golden Legacy provides end-to-end advisory services to help you select the ideal Free Zone that aligns with your specific business activities, budgetary requirements, and future growth plans across Dubai, Abu Dhabi, and the Northern Emirates."
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
      sections={[
        {
          title: "Legal Entities & Structures",
          content: "The UAE Free Zone regulations provide flexible corporate structures to accommodate different business scales:",
          list: [
            "Free Zone Establishment (FZE) – A single-shareholder limited liability entity.",
            "Free Zone Company (FZCO/FZC) – An entity with multiple shareholders (individuals or corporations).",
            "Branch of a Foreign/Local Company – An extension of a parent company already existing outside the Free Zone.",
            "Representative Office – A setup purely for marketing and coordination (non-trading)."
          ]
        },
        {
          title: "The Setup Journey",
          content: "Our expert team streamlines the complex licensing process into a clear three-stage workflow:",
          list: [
            "Phase 1: Activity selection and initial approval from the Free Zone Authority.",
            "Phase 2: Submission of required legal documents, office lease/desk selection, and MOA signing.",
            "Phase 3: Issuance of Business License, establishment card, and commencement of visa processing."
          ]
        },
        {
          title: "Why Expert Advisory Matters",
          content: "With over 45 diverse Free Zones in the UAE, choosing the wrong location can lead to higher long-term costs or banking difficulties. We provide deep-rooted banking expertise to ensure your chosen structure is 'bank-ready', facilitating smooth corporate account openings from the start."
        }
      ]}
    />
  );
}
