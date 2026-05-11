import ServicePage from '@/components/ServicePage';

export default function ProfessionalLicense() {
  return (
    <ServicePage
      title="Professional License Main Land – Civil Company"
      subtitle="Obtain a Professional License in Dubai"
      heroImage="/images/mainland.png"
      description={[
        "Professional License is suited for professionals engaged in providing services. A salient feature of this business type is 100% ownership, making the professional the sole owner with a UAE national as a local service agent.",
        "It is important to consult with an expert like Golden Legacy to obtain a detailed breakdown of the professional license cost in Dubai."
      ]}
      advantages={[
        "100% Foreign Ownership",
        "Quick and affordable renewal",
        "Competitively priced",
        "Exemption from Corporate or Income Taxes",
        "Diversity of business options",
        "Unlimited markets and clients",
        "No restriction on business engagement with DED",
        "Freedom to apply for visas, labor quotas, etc."
      ]}
      sections={[
        {
          title: "Service Categories covered",
          content: "Below mentioned services come under the ambit of a Professional License:",
          list: [
            "Accountants, Auditors, and Financial Advisors",
            "Advertising Professionals and Artists",
            "Architectural Consultants",
            "Beauty Salons",
            "Business and Management Consultancy",
            "Carpentry and Artisan Activities",
            "Healthcare and Medical services",
            "Information technology services",
            "Internet and Web Design Services",
            "Lawyers and Legal Advisors",
            "Printing and Publishing",
            "Teachers and Educational Professionals",
            "Technical Services"
          ]
        },
        {
          title: "Documents required",
          content: "Golden Legacy assists you in preparing and filing:",
          list: [
            "Application Form",
            "Passport copies of owners and partners",
            "UID Number/NOC of shareholder",
            "Ejari Registration / Rental Contract",
            "Name Reservation Certificate",
            "Initial approval from authorities (DED, DM, RTA)",
            "Visa Copy (visit, transit or tourist)"
          ]
        },
        {
          title: "How Golden Legacy assists you",
          content: "We streamline the process by:",
          list: [
            "Getting approvals from govt departments",
            "Preparing agreements and MOA",
            "Identifying trusted Local Service Agents",
            "Assisting in opening Bank Accounts",
            "Discovering favorable office premises"
          ]
        }
      ]}
    />
  );
}
