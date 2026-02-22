/**
 * SeoHead – centralised per-page SEO using react-helmet-async.
 * Renders <title>, <meta description>, canonical, hreflang tags,
 * and optional JSON-LD schema blocks in a single component.
 *
 * `path` should always be the BASE path without /pt/ prefix
 * (e.g. "/services/seo"). The component derives the correct
 * canonical and hreflang URLs based on the current language.
 */
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const BASE_URL = "https://goodyseo.com";

interface SeoHeadProps {
  /** Page title – will appear in browser tab and search results */
  title: string;
  /** Meta description (≤160 chars recommended) */
  description: string;
  /** Base path without language prefix, e.g. "/services/seo" (default: "/") */
  path?: string;
  /** Additional JSON-LD schema objects to inject as <script> blocks */
  schemas?: object[];
}

export function SeoHead({
  title,
  description,
  path = "/",
  schemas = [],
}: SeoHeadProps) {
  const { language } = useLanguage();

  const enUrl = `${BASE_URL}${path}`;
  const ptUrl = `${BASE_URL}/pt${path === "/" ? "" : path}`;
  const canonicalUrl = language === "pt" ? ptUrl : enUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="pt" href={ptUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

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
