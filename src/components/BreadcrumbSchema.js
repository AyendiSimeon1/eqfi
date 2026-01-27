import Script from 'next/script';

export default function BreadcrumbSchema({ pageName, pageUrl }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.eqfiinvest.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageName,
        "item": `https://www.eqfiinvest.com${pageUrl}`
      }
    ]
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
}