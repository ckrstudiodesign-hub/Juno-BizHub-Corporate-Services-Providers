import ServicePage from '@/components/ServicePage';

export default function MeydanSetup() {
  return (
    <ServicePage
      title="Meydan Free Zone"
      subtitle="Thriving Commercial Free Zone in Dubai"
      heroImage="/images/freezone.png"
      description={[
        "Meydan Free Zone is a premier 360-degree business hub located in the heart of Dubai, specifically designed to foster entrepreneurship and innovation. Situated within the iconic Meydan Stadium complex, it offers a prestigious business address that combines luxury with high-efficiency corporate services.",
        "Unlike many other zones, Meydan Free Zone allows for a unique 'dual-licensing' environment, and its flexible business activities—covering over 1,500 options—make it highly versatile for traders, consultants, and digital nomads.",
        "The zone is known for its highly streamlined and transparent application process, allowing businesses to obtain their licenses and commence operations with minimal lead time."
      ]}
      advantages={[
        "100% foreign ownership and zero tax environment",
        "Prestigious Dubai business address within a world-class complex",
        "Over 1,500 business activities allowed on a single license",
        "No minimum paid-up capital requirement",
        "0% Corporate and Personal Income tax",
        "No mandatory auditing requirements for many structures",
        "Simplified digital application through an intuitive portal",
        "Eligibility for UAE Residence Visas and family sponsorship",
        "Strategic location just minutes away from Downtown Dubai",
        "Multi-currency corporate bank account support"
      ]}
      sections={[
        {
          title: "Why Choose MEYDAN?",
          content: [
            "Meydan Free Zone is a multi-purpose economic hub offering a high-prestige environment that encourages the growth of startups and international firms alike.",
            "Choosing MEYDAN means being part of a vibrant commercial community that integrates business activities with world-class lifestyle and leisure facilities."
          ]
        },
        {
          title: "Strategic Location",
          content: "Located in the heart of Meydan, Dubai, the zone offers a prestigious address with rapid access to the city's key financial and logistics centers.",
          list: [
            "Close proximity to Downtown Dubai",
            "Adjacent to the iconic Meydan Racecourse",
            "Easy access to major UAE transport arteries",
            "Premium lifestyle and retail destination hub"
          ]
        },
        {
          title: "Setup Your Vision",
          content: "Meydan Free Zone provides a highly efficient and digital-first environment for business registration:",
          list: [
            "100% digital license issuance process",
            "Over 1,500 diverse business activities",
            "Scalable office and desk solutions",
            "Seamless corporate banking assistance"
          ]
        }
      ]}
    />
  );
}
