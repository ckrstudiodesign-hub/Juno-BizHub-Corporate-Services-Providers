import ServicePage from '@/components/ServicePage';

export default function RAKOffshore() {
  return (
    <ServicePage
      title="RAK Offshore Company Formation"
      subtitle="RAK International Corporate Centre (RAKICC)"
      heroImage="/images/offshore.png"
      description={[
        "Ras Al Khaimah (RAK) is an independent Emirate offering world-class organization registry. RAKICC operates in full consistency with the international company formation industry, facilitating tax planning and asset protection.",
        "It is a matter of international prestige to own a RAK company. You can leverage trading and professional services under a single license with high security and confidentiality."
      ]}
      advantages={[
        "100% Foreign Ownership",
        "Can hold shares in Local companies (Free Zone and Onshore)",
        "Eligible for Local Multi-currency Bank Accounts",
        "Fast Incorporation (approximately 1 week)",
        "100% profit and capital repatriation",
        "No requirement for annual audit",
        "Tax & VAT Exemption",
        "Freedom to own real estate in approved areas of UAE"
      ]}
    />
  );
}
