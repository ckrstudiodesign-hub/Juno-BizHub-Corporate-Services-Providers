import ServicePage from '@/components/ServicePage';

export default function DubaiMediaCity() {
  return (
    <ServicePage
      title="Dubai Media City Business Set Up"
      subtitle="The Hub of Media and Content Production"
      heroImage="/images/freezone.png"
      description={[
        "Dubai Media City (DMC) was launched in 2001 to establish Dubai as the region's leading media hub. Today, it is a world-class ecosystem for media companies, content producers, and advertising agencies. It is home to over 1,500 companies, ranging from global giants like Reuter's and CNN to creative boutique startups.",
        "DMC offers a unique cluster environment where professionals from broadcasting, publishing, and digital media can collaborate and grow. The zone provides state-of-the-art infrastructure designed specifically for high-bandwidth media operations.",
        "Located in the heart of 'New Dubai', DMC provides much more than office space; it offers a lifestyle and professional network that is unrivaled in the Middle East."
      ]}
      advantages={[
        "100% foreign ownership and full capital repatriation",
        "0% Corporate and Personal Income tax",
        "No local sponsorship or local partner required",
        "Host to a community of 25,000+ media professionals",
        "Specialized infrastructure for broadcasting and digital production",
        "Multi-currency corporate bank account support",
        "Simplified visa processing and residence permits",
        "Access to networking events and industry-specific awards",
        "Prestigious 'New Dubai' business location near Marina and JLT",
        "Customizable office solutions from Flexi-Desks to dedicated buildings"
      ]}
      sections={[
        {
          title: "Specialized License Categories",
          content: "DMC provides targeted licenses for every segment of the media value chain:",
          list: [
            "Broadcasting & Content Production",
            "Advertising, Marketing & PR",
            "Publishing & Information Agencies",
            "Media Support Services & Event Management",
            "Music & Entertainment Production",
            "Animation & Digital Design"
          ]
        }
      ]}
    />
  );
}
