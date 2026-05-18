import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/features", label: "الخدمات" },
  { to: "/consultants", label: "المستشارون" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-primary"><Logo /></Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/contact" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:shadow-elegant">
            حمّل التطبيق
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="rounded-md p-2 text-primary md:hidden" aria-label="القائمة">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground">
              حمّل التطبيق
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
