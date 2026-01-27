import Script from 'next/script';

export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EQFI Invest",
    "url": "https://www.eqfiinvest.com",
    "logo": "https://www.eqfiinvest.com/eqfi-logo.jpg",
    "description": "Professional wealth management, investment strategies, and financial planning for individuals and institutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/eqfi-invest", // Add actual social links
      "https://twitter.com/eqfiinvest"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EQFI Invest",
    "url": "https://www.eqfiinvest.com",
    "description": "EQFI Invest - Professional wealth management and investment strategies.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.eqfiinvest.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}