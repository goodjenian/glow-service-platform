import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const services = [
  { name: "SEO Services", href: "/services/seo" },
  { name: "GEO Optimization", href: "/services/geo" },
  { name: "Site Express", href: "/services/site-express" },
  { name: "App Creation", href: "/services/app-creation" },
  { name: "AI Agents", href: "/services/ai-agents" },
  { name: "Social Media", href: "/services/social-media" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4" aria-label="Goody SEO Home">
              <img src={logo} alt="" className="h-10 w-10" aria-hidden="true" />
              <span className="text-xl font-bold">Goody SEO</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-md">
              Boutique agency specializing in high-impact, cost-efficient strategies 
              that enhance your online presence and drive business growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2" aria-label="Our services">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    to={service.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/70" aria-label="Contact information">
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

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Goody SEO. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
