import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-cream-gradient">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-primary"><Logo /></div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              منصة رقمية للاستشارات التربوية والنفسية لدعم الأسرة والتلميذ والأستاذ — معاً نحو تربية متوازنة وتعليم أفضل.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold text-foreground">روابط</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">الرئيسية</Link></li>
              <li><Link to="/features" className="hover:text-primary">الخدمات</Link></li>
              <li><Link to="/consultants" className="hover:text-primary">المستشارون</Link></li>
              <li><Link to="/contact" className="hover:text-primary">تواصل معنا</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold text-foreground">حمّل التطبيق</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium hover:border-primary">App Store</a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium hover:border-primary">Google Play</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} رشدِينا — جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
