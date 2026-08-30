/**
 * Dictionary mapping entities/keywords to internal URLs
 */
const EntityDictionary: Record<string, string> = {
  "Mainland Company": "/mainland-company-formation-in-dubai",
  "Free Zone": "/dubai-free-zone-company-overview",
  "Corporate Tax": "/corporate-tax-uae",
  "VAT": "/vat-consultancy-uae",
  "Bank Account": "/bank-account-opening-dubai",
  "Golden Visa": "/golden-visa-uae",
  "PRO Services": "/pro-services-dubai",
  "Offshore Company": "/offshore-company-formation-in-dubai",
};

/**
 * Automates internal linking by scanning text and replacing known entities
 * with Next.js <Link> tags or standard HTML anchor tags.
 * This is primarily useful for processing raw HTML/Markdown content before rendering.
 */
export function injectInternalLinks(htmlContent: string): string {
  let processedHtml = htmlContent;

  for (const [entity, url] of Object.entries(EntityDictionary)) {
    // Only link the first occurrence to avoid over-optimizing (Google prefers this)
    const regex = new RegExp(`\\b(${entity})\\b(?![^<]*>|[^<>]*<\/a>)`, 'i');
    
    // Inject anchor tag with specific CSS classes for styling
    processedHtml = processedHtml.replace(regex, `<a href="${url}" class="text-electric-sapphire font-bold hover:underline" title="Learn more about $1">$1</a>`);
  }

  return processedHtml;
}
