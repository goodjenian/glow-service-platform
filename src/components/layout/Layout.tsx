import { Header } from "./Header";
import { Footer } from "./Footer";
import { LogoWatermark } from "@/components/effects/LogoWatermark";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <LogoWatermark />
      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
