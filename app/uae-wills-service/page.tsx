import ServicePage from '@/components/ServicePage';

export default function UAEWills() {
  return (
    <ServicePage
      title="UAE Will Service"
      subtitle="Legacy Protection & Asset Distribution"
      heroImage="/images/mainland.png"
      description={[
        "In the UAE, the distribution of assets for deceased expatriates is subject to local laws unless a legally registered Will is in place. Golden Legacy provides specialized advisory for the drafting and registration of Wills to ensure your legacy is protected and your assets are distributed exactly as you intend.",
        "We cater to both Muslim and Non-Muslim residents, navigating the specific legal frameworks of the DIFC Courts and the Dubai Courts (Notary Public). Our service ensures that your family, properties, and corporate shares are shielded from the default application of Sharia principles if you are a Non-Muslim, or correctly aligned with them if you are a Muslim.",
        "Securing a Will in the UAE is not just a legal requirement but a fundamental part of responsible financial planning for anyone holding assets, including real estate, bank accounts, and company shares."
      ]}
      advantages={[
        "Complete control over the distribution of UAE-based assets",
        "Avoidance of default local law application for asset division",
        "Direct appointment of guardians for minor children",
        "Protection of corporate shares and business continuity",
        "Minimized legal delays and court freezes on bank accounts",
        "DIFC Court registration for global recognition (Non-Muslims)",
        "Dubai Court registration for Sharia-compliant legacy (Muslims)",
        "Expert legal drafting in both English and Arabic",
        "Strategic advice on inheritance tax planning and asset protection",
        "Seamless transition of power of attorney where applicable"
      ]}
      sections={[
        {
          title: "Why a Will is Essential",
          content: [
            "A registered Will is the only legal instrument that guarantees your Dubai assets are distributed according to your wishes, not local Sharia Law defaults.",
            "Without a Will, bank accounts are often frozen immediately, and guardianship of minors can become a legal uncertainty. A Will provides the ultimate 'peace of mind' and financial security for your family."
          ]
        },
        {
          title: "Strategic Advantage",
          content: "A registered Will significantly reduces the time and cost involved in probate proceedings, allowing your beneficiaries to access assets without lengthy legal battles or uncertainty.",
          list: [
            "Recognition across all Emirates",
            "Clear guardianship clauses for peace of mind",
            "Bespoke drafting for complex corporate portfolios",
            "Integration with existing international inheritance plans"
          ]
        },
        {
          title: "The Registration Process",
          content: "We manage the entire lifecycle—from the initial consultancy and drafting to the final appointment at the DIFC or Dubai Courts—ensuring every legal prerequisite is met for a valid and binding Will."
        }
      ]}
    />
  );
}
