import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoDark from "@/assets/logo-dark.png";

export function Footer() {
  const { t } = useLanguage();

  const services = [
    { name: t("nav.seo"), href: "/services/seo" },
    { name: t("nav.geo"), href: "/services/geo" },
    { name: t("nav.siteExpress"), href: "/services/site-express" },
    { name: t("nav.appCreation"), href: "/services/app-creation" },
    { name: t("nav.aiAgents"), href: "/services/ai-agents" },
    { name: t("nav.socialMedia"), href: "/services/social-media" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container px-4 md:px-6 py-8 md:py-10">
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
              <li>
                <a 
                  href="https://www.linkedin.com/company/goodyseo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
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
