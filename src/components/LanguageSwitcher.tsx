import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="uppercase font-medium">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={language === "en" ? "bg-accent/20" : ""}
        >
          <span className="mr-2">🇺🇸</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("pt")}
          className={language === "pt" ? "bg-accent/20" : ""}
        >
          <span className="mr-2">🇧🇷</span>
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
