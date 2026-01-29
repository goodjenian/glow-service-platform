import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  { name: "SEO Services", href: "/services/seo", description: "Technical, On-Page & Content SEO" },
  { name: "GEO Optimization", href: "/services/geo", description: "AI Search Visibility for LLMs" },
  { name: "Site Express", href: "/services/site-express", description: "Fast Frontend Development with Lovable" },
  { name: "App Creation", href: "/services/app-creation", description: "Full-Stack Apps with Base44" },
  { name: "AI Agents", href: "/services/ai-agents", description: "Automation & Sales AI with n8n" },
  { name: "Social Media", href: "/services/social-media", description: "Visual Content Creation" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4 md:px-6" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3" aria-label="Goody SEO Home">
          <img src={logoDark} alt="" className="h-10 w-10" aria-hidden="true" />
          <span className="text-xl font-bold text-foreground">Goody SEO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link 
            to="/#about" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          
          <Button variant="accent" asChild>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 mt-8">
              <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <img src={logoDark} alt="" className="h-8 w-8" aria-hidden="true" />
                <span className="text-lg font-bold">Goody SEO</span>
              </Link>
              
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col py-2 px-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <span className="font-medium">{service.name}</span>
                    <span className="text-sm text-muted-foreground">{service.description}</span>
                  </Link>
                ))}
              </div>
              
              <Button variant="accent" className="mt-4" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
