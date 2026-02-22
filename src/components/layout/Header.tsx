import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";
import { LocalizedLink } from "@/components/LocalizedLink";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();
  const whatsappUrl = language === "pt" ? getWhatsAppUrlPt() : getWhatsAppUrl();

  const services = [
    { name: t("nav.seo"), href: "/services/seo", description: t("nav.seo.desc") },
    { name: t("nav.geo"), href: "/services/geo", description: t("nav.geo.desc") },
    { name: t("nav.siteExpress"), href: "/services/site-express", description: t("nav.siteExpress.desc") },
    { name: t("nav.paidTraffic"), href: "/services/paid-traffic", description: t("nav.paidTraffic.desc") },
    { name: t("nav.aiAgents"), href: "/services/ai-agents", description: t("nav.aiAgents.desc") },
    { name: t("nav.socialMedia"), href: "/services/social-media", description: t("nav.socialMedia.desc") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4 md:px-6" aria-label="Main navigation">
        <LocalizedLink to="/" className="flex items-center gap-3" aria-label="GoodySEO Home">
          <img src={logoDark} alt="" className="h-10 w-10" aria-hidden="true" />
          <span className="text-xl font-bold text-foreground">GoodySEO</span>
        </LocalizedLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <LocalizedLink 
            to="/" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </LocalizedLink>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">{t("nav.services")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink asChild>
                          <LocalizedLink
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </LocalizedLink>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <LocalizedLink 
            to="/about" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.about")}
          </LocalizedLink>

          <LanguageSwitcher />
          
          <Button variant="contact" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t("nav.getInTouch")}
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <LocalizedLink to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <img src={logoDark} alt="" className="h-8 w-8" aria-hidden="true" />
                  <span className="text-lg font-bold">GoodySEO</span>
                </LocalizedLink>
                
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t("nav.services")}</p>
                  {services.map((service) => (
                    <LocalizedLink
                      key={service.href}
                      to={service.href}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col py-2 px-3 rounded-md hover:bg-muted transition-colors"
                    >
                      <span className="font-medium">{service.name}</span>
                      <span className="text-sm text-muted-foreground">{service.description}</span>
                    </LocalizedLink>
                  ))}
                </div>

                <LocalizedLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="font-medium py-2 px-3 rounded-md hover:bg-muted transition-colors"
                >
                  {t("nav.about")}
                </LocalizedLink>
                
                <Button variant="contact" className="mt-4" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {t("nav.getInTouch")}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
