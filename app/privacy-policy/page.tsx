import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — Juno BizHub Corporate Services Providers',
  description:
    'Privacy Policy for Juno BizHub Corporate Services Providers LLC. How we collect, use, store and protect personal data when you use junobizhub.com.',
  alternates: { canonical: '/privacy-policy' },
};

const LAST_UPDATED = 'May 7, 2026';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            Last updated: <span className="text-gray-200 font-medium">{LAST_UPDATED}</span>
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <nav className="hidden lg:block lg:col-span-3 sticky top-28 self-start">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
              <h4 className="text-sm font-black uppercase text-white/80 mb-4">On This Page</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#introduction" className="hover:text-electric-sapphire">Introduction</a></li>
                <li><a href="#who-we-are" className="hover:text-electric-sapphire">Who We Are</a></li>
                <li><a href="#information-we-collect" className="hover:text-electric-sapphire">Information We Collect</a></li>
                <li><a href="#how-we-use" className="hover:text-electric-sapphire">How We Use Your Information</a></li>
                <li><a href="#legal-basis" className="hover:text-electric-sapphire">Legal Basis (PDPL)</a></li>
                <li><a href="#sharing" className="hover:text-electric-sapphire">Sharing & Disclosure</a></li>
                <li><a href="#international" className="hover:text-electric-sapphire">International Transfers</a></li>
                <li><a href="#retention" className="hover:text-electric-sapphire">Data Retention</a></li>
                <li><a href="#security" className="hover:text-electric-sapphire">Data Security</a></li>
                <li><a href="#your-rights" className="hover:text-electric-sapphire">Your Rights</a></li>
                <li><a href="#cookies" className="hover:text-electric-sapphire">Cookies</a></li>
                <li><a href="#contact" className="hover:text-electric-sapphire">Contact Us</a></li>
              </ul>
            </div>
          </nav>

          <article className="lg:col-span-9">
            <div className="bg-white text-black rounded-3xl p-8 md:p-12 shadow-xl">
              <section id="introduction" className="prose prose-xl max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  Juno BizHub Corporate Services Providers LLC (“Juno BizHub”, “we”, “us” or
                  “our”) is committed to protecting your privacy and handling your personal data in a
                  lawful, fair and transparent manner.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, disclose and protect personal data
                  when you visit our website junobizhub.com or interact with us in relation to our
                  corporate services, business setup, visa, and banking assistance in the United Arab
                  Emirates (UAE). By using our website or providing your personal data to us, you
                  acknowledge that you have read and understood this Privacy Policy.
                </p>
              </section>

              <section id="who-we-are" className="mt-8">
                <h3>2. Who We Are</h3>
                <p>
                  <strong>Company name:</strong> Juno BizHub Corporate Services Providers LLC<br />
                  <strong>Office address:</strong> 106 Sheikh Zayed Rd - Trade Center First - Dubai, Aspin Commercial Tower,
                  Business Bay Metro Station, Dubai, United Arab Emirates<br />
                  <strong>Website:</strong> <a href="https://junobizhub.com" className="text-electric-sapphire">https://junobizhub.com</a><br />
                  <strong>Contact email:</strong> <a href="mailto:info.junobh@gmail.com" className="text-electric-sapphire">info.junobh@gmail.com</a><br />
                  <strong>Contact number:</strong> <a href="tel:+971 54 129 0038" className="text-electric-sapphire">+971 54 129 0038</a>
                </p>
                <p>
                  Juno BizHub acts as a “data controller” when we decide how and why your personal
                  data is processed.
                </p>
              </section>

              <section id="information-we-collect" className="mt-8">
                <h3>3. Information We Collect</h3>
                <p>We may collect and process the following categories of personal data, depending on how you interact with us.</p>

                <h4 className="mt-4">3.1 Information you provide directly</h4>
                <ul className="list-disc pl-6">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Mobile/telephone number</li>
                  <li>Company name and basic company details</li>
                  <li>Country of residence and nationality</li>
                  <li>Details about your inquiry (type of business, services requested, preferred jurisdiction, etc.)</li>
                  <li>Documents required for our services (for example: passport copy, visa copy, Emirates ID, trade licence, corporate documents, proof of address, bank statements), which are usually shared via email or secure channels as part of our service delivery</li>
                </ul>

                <h4 className="mt-4">3.2 Information collected automatically</h4>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited, time and date of visit, time spent on each page</li>
                  <li>Referring website or source</li>
                </ul>
                <p>This technical and usage data is typically collected through cookies, pixels and similar tracking technologies.</p>

                <h4 className="mt-4">3.3 Information from third parties</h4>
                <p>We may receive information about you from:</p>
                <ul className="list-disc pl-6">
                  <li>Referral partners and affiliates</li>
                  <li>Publicly available sources and corporate registries</li>
                  <li>Government authorities and free zones (as part of KYC or licensing checks)</li>
                </ul>
              </section>

              <section id="how-we-use" className="mt-8">
                <h3>4. How We Use Your Information</h3>
                <p>We use your personal data for the following purposes.</p>
                <ul className="list-disc pl-6">
                  <li>To respond to your inquiries and provide information about our services</li>
                  <li>To evaluate your eligibility for company setup, UAE residence visas, Golden Visa or banking solutions</li>
                  <li>To prepare and submit documentation to relevant authorities, free zones, and banks on your behalf</li>
                  <li>To manage and maintain our client relationships and contracts</li>
                  <li>To comply with legal and regulatory obligations, including KYC/AML checks and record‑keeping requirements in the UAE</li>
                  <li>To improve our website, marketing and services through analytics and performance monitoring</li>
                  <li>To send you updates, newsletters or marketing communications where permitted by law and with your consent (where required)</li>
                </ul>
                <p>We will not use your personal data for purposes that are incompatible with those described in this Privacy Policy.</p>
              </section>

              <section id="legal-basis" className="mt-8">
                <h3>5. Legal Basis for Processing (UAE PDPL)</h3>
                <p>Under the UAE Personal Data Protection Law (PDPL) and other applicable regulations, we rely on one or more of the following legal bases to process your personal data.</p>
                <ul className="list-disc pl-6">
                  <li><strong>Consent:</strong> When you submit forms on our website or agree to receive marketing communications.</li>
                  <li><strong>Performance of a contract:</strong> When processing is necessary to take steps at your request before entering into a contract or to perform a contract with you (for example, providing business setup and visa services).</li>
                  <li><strong>Legal obligations:</strong> When processing is required to comply with UAE laws and regulations, including KYC, AML and immigration requirements.</li>
                  <li><strong>Legitimate interests:</strong> When processing is necessary for our legitimate business interests (such as managing our relationship with you, improving our services, or protecting our legal rights), and your interests and fundamental rights do not override those interests.</li>
                </ul>
              </section>

              <section id="sharing" className="mt-8">
                <h3>6. Sharing and Disclosure of Information</h3>
                <p>We may share your personal data with the following categories of recipients, strictly on a need‑to‑know basis.</p>
                <ul className="list-disc pl-6">
                  <li><strong>Government authorities and regulators</strong> – including UAE ministries, immigration, free zones, mainland licensing authorities (such as the Department of Economy and Tourism), and other competent regulators when required to deliver our services or comply with the law.</li>
                  <li><strong>Banks and financial institutions</strong> – for bank account opening and related services requested by you.</li>
                  <li><strong>Professional partners and service providers</strong> – including PROs, accountants, auditors, legal advisors, IT and hosting providers, marketing and analytics providers who support us in operating our business, under confidentiality obligations.</li>
                  <li><strong>Third parties involved in a business transaction</strong> – in case of a merger, acquisition, restructuring or sale of some or all of our assets, your data may be transferred as part of that transaction in compliance with applicable laws.</li>
                </ul>
                <p>We do not sell your personal data to third parties for their own marketing purposes.</p>
              </section>

              <section id="international" className="mt-8">
                <h3>7. International Data Transfers</h3>
                <p>Your personal data may be transferred to and processed in countries outside the UAE if, for example, our hosting providers, email services or some of our partners are based overseas. Where such transfers occur, we take appropriate safeguards to ensure that your personal data remains protected in accordance with applicable data protection laws, including contractual protections and security measures.</p>
              </section>

              <section id="retention" className="mt-8">
                <h3>8. Data Retention</h3>
                <p>We keep your personal data only for as long as necessary to fulfil the purposes for which it was collected, including to meet any legal, regulatory, accounting or reporting requirements.</p>
                <p>In general:</p>
                <ul className="list-disc pl-6">
                  <li>Inquiry data from website forms is kept for a reasonable period to follow up on your request and for internal analysis.</li>
                  <li>Client and case‑related records (including identity documents and corporate files) are retained for the duration of the engagement and for a specified period thereafter in line with UAE record‑keeping and compliance obligations.</li>
                </ul>
                <p>When we no longer need your data, we will securely delete or anonymise it.</p>
              </section>

              <section id="security" className="mt-8">
                <h3>9. Data Security</h3>
                <p>We implement appropriate technical and organisational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access. These measures may include, among others:</p>
                <ul className="list-disc pl-6">
                  <li>Secure servers and restricted access to systems</li>
                  <li>Encryption in transit where appropriate</li>
                  <li>Access controls and confidentiality obligations for staff and service providers</li>
                  <li>Regular review of our security practices</li>
                </ul>
                <p>However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>
              </section>

              <section id="your-rights" className="mt-8">
                <h3>10. Your Rights</h3>
                <p>Subject to applicable UAE laws (including PDPL), you may have the following rights in relation to your personal data.</p>
                <ul className="list-disc pl-6">
                  <li>Right to obtain information about how we process your data</li>
                  <li>Right to request access to the personal data we hold about you</li>
                  <li>Right to request correction or update of inaccurate or incomplete data</li>
                  <li>Right to request deletion of your personal data, subject to legal and regulatory requirements</li>
                  <li>Right to request restriction or stoppage of certain processing activities</li>
                  <li>Right to withdraw consent at any time where processing is based on your consent</li>
                </ul>
                <p>To exercise your rights, please contact us using the details provided in the “Contact Us” section below. We may need to verify your identity before responding to your request.</p>
              </section>

              <section id="cookies" className="mt-8">
                <h3>11. Cookies and Tracking Technologies</h3>
                <p>Our website may use cookies, pixels and similar technologies to:</p>
                <ul className="list-disc pl-6">
                  <li>Enable core site functionality</li>
                  <li>Understand how visitors use our website and improve performance</li>
                  <li>Support marketing and remarketing activities (for example, Google Analytics, Meta Pixel), if implemented</li>
                </ul>
                <p>You can manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality or performance of our website.</p>
                <p>We may provide more detailed information about specific cookies in a separate cookie notice or within this section as our implementation evolves.</p>
              </section>

              <section id="third-party" className="mt-8">
                <h3>12. Third‑Party Links</h3>
                <p>Our website may contain links to third‑party websites, plug‑ins or applications, such as social media platforms.</p>
                <p>We are not responsible for the privacy practices or content of those third‑party sites. We encourage you to read the privacy policies of any website you visit after leaving our site.</p>
              </section>

              <section id="children" className="mt-8">
                <h3>13. Children’s Privacy</h3>
                <p>Our services and website are not directed to children under the age of 18, and we do not knowingly collect personal data from children.</p>
                <p>If you believe that a child has provided us with personal data, please contact us so that we can delete such information where required.</p>
              </section>

              <section id="changes" className="mt-8">
                <h3>14. Changes to This Privacy Policy</h3>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements or other operational reasons.</p>
                <p>When we make material changes, we will update the “Last updated” date at the top of this page and, where appropriate, notify you by prominent notice on the website. We encourage you to review this Privacy Policy regularly to stay informed about how we are protecting your data.</p>
              </section>

              <section id="contact" className="mt-8">
                <h3>15. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, our data practices, or if you wish to exercise your rights, you can contact us at:</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-sapphire/10 flex items-center justify-center text-electric-sapphire">
                      <MapPin />
                    </div>
                    <div>
                      <p className="font-bold">Office</p>
                      <p className="text-sm text-gray-700">106 Sheikh Zayed Rd - Trade Center First - Dubai, Aspin Commercial Tower</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-sapphire/10 flex items-center justify-center text-electric-sapphire">
                      <Mail />
                    </div>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-sm text-gray-700"><a href="mailto:info.junobh@gmail.com" className="text-electric-sapphire">info.junobh@gmail.com</a></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-sapphire/10 flex items-center justify-center text-electric-sapphire">
                      <Phone />
                    </div>
                    <div>
                      <p className="font-bold">Phone / WhatsApp</p>
                      <p className="text-sm text-gray-700"><a href="tel:+971 54 129 0038" className="text-electric-sapphire">+971 54 129 0038</a></p>
                    </div>
                  </div>
                </div>
              </section>

              <footer className="mt-12 border-t pt-8">
                <p className="text-sm text-gray-600">© {new Date().getFullYear()} Juno BizHub Corporate Services Providers LLC. All rights reserved.</p>
                <p className="text-sm text-gray-600 mt-2">This policy is subject to UAE law and the UAE Personal Data Protection Law (PDPL).</p>
              </footer>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>For convenience, you can return to the <Link href="/" className="text-electric-sapphire">homepage</Link> or <Link href="/contact" className="text-electric-sapphire">contact our team</Link>.</p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
