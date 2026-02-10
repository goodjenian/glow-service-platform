import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoDark from "@/assets/logo-dark.png";

export function Footer() {
  const { t } = useLanguage();

  const services = [
    { name: t("nav.seo"), href: "/services/seo" },
    { name: t("nav.geo"), href: "/services/geo" },
    { name: t("nav.siteExpress"), href: "/services/site-express" },
    { name: t("nav.paidTraffic"), href: "/services/paid-traffic" },
    { name: t("nav.aiAgents"), href: "/services/ai-agents" },
    { name: t("nav.socialMedia"), href: "/services/social-media" },
  ];

  return (
    <footer className="bg-[hsl(220,8%,15%)] text-primary-foreground" role="contentinfo">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-3 mb-3" aria-label="Goody SEO Home">
              <img src={logoDark} alt="" className="h-8 w-8 brightness-0 invert" aria-hidden="true" />
              <span className="text-lg font-bold">Goody SEO</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm">
              {t("footer.desc")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">{t("footer.services")}</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm" aria-label="Our services">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    to={service.href} 
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">{t("footer.contact")}</h4>
            <ul className="space-y-1 text-sm text-primary-foreground/60" aria-label="Contact information">
              <li>
                <a 
                  href="mailto:business@goodyseo.com" 
                  className="hover:text-primary-foreground transition-colors"
                >
                  business@goodyseo.com
                </a>
              </li>
              <li className="flex gap-3 mt-2">
                <a 
                  href="https://www.linkedin.com/company/goodyseo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a 
                  href="https://www.instagram.com/goodyseo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-primary-foreground/50">
            © {new Date().getFullYear()} Goody SEO. {t("footer.rights")}
          </p>
          <div className="flex gap-6 text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
