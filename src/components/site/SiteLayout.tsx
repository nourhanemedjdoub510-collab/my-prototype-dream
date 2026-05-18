import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
