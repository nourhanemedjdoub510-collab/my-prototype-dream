import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Star, Search, CalendarCheck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/consultants")({
  head: () => ({
    meta: [
      { title: "المستشارون — رشدِينا" },
      { name: "description", content: "تعرّف على نخبة المستشارين التربويين والنفسيين المعتمدين على منصة رشدِينا. ابحث، قارن، واحجز جلستك بسهولة." },
      { property: "og:title", content: "المستشارون المعتمدون — رشدِينا" },
      { property: "og:description", content: "أخصائيون معتمدون بخبرة طويلة في خدمة الأسرة والتلميذ والأستاذ." },
    ],
  }),
  component: ConsultantsPage,
});

type Consultant = { name: string; role: string; specialty: "all" | "psy" | "edu" | "personal"; years: number; rating: number; initials: string; color: string };

const consultants: Consultant[] = [
  { name: "د. أمينة بوعلام", role: "أخصائية نفسية إكلينيكية", specialty: "psy", years: 8, rating: 4.9, initials: "أ ب", color: "from-rose-200 to-rose-100" },
  { name: "أ. محمد بن عيسى", role: "مستشار تربوي وأسري", specialty: "edu", years: 10, rating: 4.8, initials: "م ع", color: "from-amber-200 to-amber-100" },
  { name: "أ. سارة مقران", role: "أخصائية نفسية للأطفال والمراهقين", specialty: "psy", years: 7, rating: 4.9, initials: "س م", color: "from-teal-200 to-teal-100" },
  { name: "أ. عبد الرؤوف خالدي", role: "مستشار تربوي وتعليمي", specialty: "edu", years: 9, rating: 4.7, initials: "ع خ", color: "from-blue-200 to-blue-100" },
  { name: "د. ليلى زيتوني", role: "أخصائية تنمية شخصية", specialty: "personal", years: 6, rating: 4.8, initials: "ل ز", color: "from-emerald-200 to-emerald-100" },
  { name: "أ. كريم بوزيد", role: "مستشار توجيه دراسي", specialty: "edu", years: 12, rating: 4.9, initials: "ك ب", color: "from-indigo-200 to-indigo-100" },
];

const filters = [
  { id: "all", label: "الكل" },
  { id: "psy", label: "نفسي" },
  { id: "edu", label: "تربوي" },
  { id: "personal", label: "تنمية" },
] as const;

function ConsultantsPage() {
  const [active, setActive] = useState<typeof filters[number]["id"]>("all");
  const [q, setQ] = useState("");

  const filtered = consultants.filter(c =>
    (active === "all" || c.specialty === active) &&
    (q.trim() === "" || (c.name + c.role).includes(q.trim()))
  );

  return (
    <SiteLayout>
      <section className="bg-hero-gradient py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-sm font-semibold text-gold">المستشارون · جلسات أونلاين</span>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">المستشارون المعتمدون</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            اختر مستشارك من نخبة الأخصائيين واحجز جلستك أونلاين عبر فيديو، صوت أو دردشة في خطوات بسيطة.
          </p>

          <div className="mx-auto mt-8 flex max-w-2xl items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur">
            <Search className="h-5 w-5 text-white/70" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ابحث عن مستشار أو تخصص"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
            />
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  active === f.id ? "bg-gold-gradient text-primary-deep shadow-gold" : "border border-white/25 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">لا توجد نتائج مطابقة.</p>
          )}
          <div className="grid gap-4">
            {filtered.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-card transition-all hover:border-gold/50 hover:shadow-elegant sm:flex-row">
                <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} font-display text-2xl font-bold text-primary-deep`}>
                  {c.initials}
                </div>
                <div className="flex-1 text-center sm:text-right">
                  <h3 className="text-lg font-bold text-foreground">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.role}</p>
                  <div className="mt-2 flex items-center justify-center gap-3 text-xs text-muted-foreground sm:justify-start">
                    <span className="inline-flex items-center gap-1 font-semibold text-gold">
                      <Star className="h-3.5 w-3.5 fill-current" /> {c.rating}
                    </span>
                    <span>خبرة {c.years} سنوات</span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-card transition-all hover:shadow-elegant">
                  <CalendarCheck className="h-4 w-4" />
                  احجز الآن
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
