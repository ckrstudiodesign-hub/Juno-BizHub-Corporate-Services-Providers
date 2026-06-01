import React from 'react';

const faqs = [
  {
    question: 'What is the best business setup option in Dubai?',
    answer:
      'The best option depends on your activity, ownership requirements, market access goals, and budget. Mainland suits direct UAE trade, free zones suit 100% foreign ownership and export-oriented companies, and offshore suits holding and international structures.',
  },
  {
    question: 'How long does company formation in Dubai take?',
    answer:
      'Simple structures can be completed in a few business days once your documents and activity are approved. Complex structures, banking, and regulated activities can take longer.',
  },
  {
    question: 'Do I need a local sponsor to open a company in Dubai?',
    answer:
      'Many activities no longer require a local sponsor. Free zone and offshore entities generally allow full foreign ownership, while mainland ownership rules depend on the selected activity and license type.',
  },
  {
    question: 'Can Golden Legacy help with business banking in the UAE?',
    answer:
      'Yes. We assist with corporate bank account preparation, documentation, and introductions to suitable banking partners based on your profile and activity.',
  },
  {
    question: 'Do you handle VAT, PRO, and visa services too?',
    answer:
      'Yes. Our services include VAT consultancy, PRO services, visa support, document attestation, and related corporate services across the UAE.',
  },
  {
    question: 'How do I contact Golden Legacy for a consultation?',
    answer:
      'You can use the contact form, WhatsApp, or the email inquiry section on the site. We respond with consultation guidance tailored to your business goals.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const FAQ = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="faq">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold/5 blur-[150px] rounded-full opacity-50 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <span className="text-gold font-black tracking-[0.4em] uppercase text-xs block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase">
            Questions <span className="text-gold">People Ask</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Clear answers for founders searching for business setup Dubai and corporate services UAE.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-black text-black text-left">
                <span>{faq.question}</span>
                <span className="text-gold text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
};

export default FAQ;