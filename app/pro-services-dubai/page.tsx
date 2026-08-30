import ServicePage from '@/components/ServicePage';

export default function PROServices() {
  return (
    <ServicePage
      title="PRO Services Dubai"
      subtitle="Expert Government Liaison & Administrative Support"
      heroImage="/images/freezone.png"
      description={[
        "Navigating the administrative landscape of the UAE requires constant interaction with various government departments. Juno BizHub's PRO (Public Relations Officer) services provide a bridge between your business and the local authorities, ensuring all your licensing and visa requirements are met with precision and speed.",
        "We handle the complexities of the Department of Economy and Tourism (DET), the Ministry of Labor (MOHRE), and the General Directorate of Residency and Foreigners Affairs (GDRFA). Our team ensures that your documentation is always compliant, preventing costly administrative fines and operational delays.",
        "Our professional PRO experts act as your dedicated liaison, managing everything from license renewals and amendments to employee visa processing and establishment card applications, allowing you to focus on your core business growth."
      ]}
      advantages={[
        "Expert liaison with all UAE government departments (DET, MOHRE, GDRFA)",
        "Timely renewal of trade licenses and establishment cards",
        "Streamlined corporate and employee visa processing",
        "Assistance with labor contract drafting and submission",
        "Management of quota increases and occupational health cards",
        "Support for company name changes and activity amendments",
        "Professional handling of liquidation and de-registration procedures",
        "On-site representation at various government service centers",
        "Minimized risk of administrative penalties and legal delays",
        "Dedicated account manager for all government-related tasks"
      ]}
      sections={[
        {
          title: "Comprehensive Government Liaison",
          content: "Our PRO team is specialized in managing the entire lifecycle of corporate and individual administrative requirements:",
          list: [
            "Corporate Licensing: Initial setup, renewals, and amendments.",
            "Visa Services: Entry permits, residency stamping, and cancellations.",
            "Labor Department Services: Work permits, mission visas, and labor files.",
            "Legal Drafting: MOA amendments and Board Resolutions.",
             "RERA Certificate",
               "Miscellaneous Services: Tenancy (Ejari) support and Civil Defense approvals.",
          ]
        },
        {
          title: "The Strategic Advantage",
          content: "Businesses that utilize professional PRO services avoid the common pitfalls of missed renewal deadlines and incorrect document submissions. We provide a proactive reminder system to ensure your corporate standings are always in 'Good Standing' status."
        }
      ]}
    />
  );
}
