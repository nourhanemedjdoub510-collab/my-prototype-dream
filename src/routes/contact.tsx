import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — رشدِينا" },
      { name: "description", content: "تواصل مع فريق رشدِينا للحصول على دعم أو الإجابة عن استفساراتك." },
      { property: "og:title", content: "تواصل معنا — رشدِينا" },
      { property: "og:description", content: "نسعد بتواصلك معنا — فريقنا جاهز للإجابة على استفساراتك." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="bg-hero-gradient py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-sm font-semibold text-gold">تواصل معنا</span>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">نحن هنا للمساعدة</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            راسلنا بأي استفسار أو اقتراح، فريقنا سيرد عليك في أقرب وقت.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-4 lg:col-span-1">
            {[
              { icon: Mail, label: "البريد الإلكتروني", value: "contact@rushdina.com" },
              { icon: Phone, label: "الهاتف", value: "+213 770 000 000" },
              { icon: MapPin, label: "العنوان", value: "الجزائر العاصمة، الجزائر" },
            ].map((it) => (
              <div key={it.label} className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{it.label}</div>
                  <div className="text-sm font-bold text-foreground">{it.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-8 shadow-card lg:col-span-2"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="الاسم الكامل" name="name" />
              <Field label="البريد الإلكتروني" name="email" type="email" />
            </div>
            <div className="mt-4">
              <Field label="الموضوع" name="subject" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-semibold text-foreground">رسالتك</label>
              <textarea required rows={5} className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-card transition-all hover:shadow-elegant">
              <Send className="h-4 w-4" />
              إرسال الرسالة
            </button>
            {sent && (
              <p className="mt-4 rounded-xl bg-accent/40 p-3 text-sm text-accent-foreground">
                شكراً لتواصلك! سنرد عليك قريباً.
              </p>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-foreground">{label}</label>
      <input required name={name} type={type} className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
    </div>
  );
}
