import { Link, type LinkProps } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Returns a path with the correct language prefix.
 * EN paths stay as-is, PT paths get /pt prefix.
 */
export function localizedPath(path: string, language: string): string {
  if (language === "pt") {
    return path === "/" ? "/pt" : `/pt${path}`;
  }
  return path;
}

/**
 * Drop-in replacement for react-router-dom's <Link> that automatically
 * prefixes the current language when the target is a string path.
 */
export function LocalizedLink({ to, ...props }: LinkProps) {
  const { language } = useLanguage();
  const localizedTo = typeof to === "string" ? localizedPath(to, language) : to;
  return <Link to={localizedTo} {...props} />;
}
