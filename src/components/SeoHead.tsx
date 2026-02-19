/**
 * SeoHead – centralised per-page SEO using react-helmet-async.
 * Renders <title>, <meta description>, canonical, hreflang tags,
 * and optional JSON-LD schema blocks in a single component.
 */
import { Helmet } from "react-helmet-async";

const BASE_URL = "https://goodyseo.com";

interface SeoHeadProps {
  /** Page title – will appear in browser tab and search results */
  title: string;
  /** Meta description (≤160 chars recommended) */
  description: string;
  /** Canonical path, e.g. "/services/seo" (default: "/") */
  path?: string;
  /** Whether this page has a pt-BR alternate (default: true) */
  hasPtAlternate?: boolean;
  /** Additional JSON-LD schema objects to inject as <script> blocks */
  schemas?: object[];
}

export function SeoHead({
  title,
  description,
  path = "/",
  hasPtAlternate = true,
  schemas = [],
}: SeoHeadProps) {
  const canonicalUrl = `${BASE_URL}${path}`;
  const ptUrl = `${BASE_URL}${path}?lang=pt`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      {hasPtAlternate && <link rel="alternate" hrefLang="pt-BR" href={ptUrl} />}
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="GoodySEO" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD schema blocks */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
      ))}
    </Helmet>
  );
}
