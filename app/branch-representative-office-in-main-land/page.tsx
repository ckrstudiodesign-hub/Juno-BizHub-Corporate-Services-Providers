import ServicePage from '@/components/ServicePage';

export default function BranchOffice() {
  return (
    <ServicePage
      title="Branch / Representative Office In Main Land"
      subtitle="Expand Your Operations into Dubai Main Land"
      heroImage="/images/mainland.png"
      description={[
        "Opening a Branch Office in Dubai Main Land entitles your company to multiple rights and advantages. It unlocks an ocean of possibilities and allows you to extend operations into other markets.",
        "A Branch Office has the freedom to perform all activities similar to that of the Parent Company and enjoys 100% foreign ownership. It is ideal for highly regulated industries including Banking, Financial Services, and Insurance.",
        "A Representative Office can only engage in promotional activities supplementing that of the Parent Company. It cannot enter into business transactions or market products directly."
      ]}
      advantages={[
        "100% foreign ownership",
        "Freedom to perform parent company activities",
        "Growth opportunities in new markets",
        "Ideal for regulated industries",
        "Streamlined marketing of parent company"
      ]}
      sections={[
        {
          title: "Requirements for Representative Office",
          content: "To set up a Representative Office, you need:",
          list: [
            "Reliable Local Agent",
            "Trade Name Reservation",
            "Initial Approval",
            "Ministry of Economy (MOE) Approval",
            "DED License"
          ]
        },
        {
          title: "Documents required",
          content: "Necessary documents for setting up include:",
          list: [
            "Proof of trade name reservation",
            "Application forms for registration",
            "MAA of the Parent Company",
            "Certificate of Incorporation of Parent Company",
            "Director's Passport Copy",
            "No-Objection Letter from Parent Company",
            "Local Service Agent details",
            "Power of attorney for Local Director",
            "Management Board Resolution"
          ]
        },
        {
          title: "Our Branch Office Setup Services",
          content: "Golden Legacy provides holistic support including:",
          list: [
            "Preparing Application Documents",
            "Identifying reliable local service agents",
            "Obtaining government approvals",
            "Opening Corporate Bank Accounts",
            "Finding suitable locations"
          ]
        }
      ]}
    />
  );
}
