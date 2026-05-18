import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Brain, GraduationCap, Users, BookOpen, CalendarCheck, MessageCircle, ShieldCheck, Sparkles, BadgeCheck, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "رشدِينا — معاً نحو تربية متوازنة وتعليم أفضل" },
      { name: "description", content: "منصة رقمية للاستشارات التربوية والنفسية لدعم الأسرة والتلميذ والأستاذ. أخصائيون معتمدون، حجز سهل، خصوصية تامة." },
      { property: "og:title", content: "رشدِينا — معاً نحو تربية متوازنة وتعليم أفضل" },
      { property: "og:description", content: "أخصائيون معتمدون · استشارات سرية · حجز سهل وسريع." },
    ],
  }),
  component: HomePage,
});

const categories = [
  { icon: Brain, title: "الاستشارات النفسية", desc: "دعم نفسي متخصص للأطفال والمراهقين والأسرة" },
  { icon: BookOpen, title: "الاستشارات التربوية", desc: "حلول عملية لتطوير السلوك ومهارات التعلم" },
  { icon: GraduationCap, title: "دعم التلاميذ", desc: "تنمية شخصية ومستوى دراسي أفضل" },
  { icon: Users, title: "دعم الأساتذة", desc: "أدوات لإدارة الصف وتحسين العملية التعليمية" },
  { icon: CalendarCheck, title: "حجز موعد", desc: "احجز جلستك في أي وقت ومن أي مكان" },
  { icon: BookOpen, title: "المكتبة التربوية", desc: "مقالات، فيديوهات ونصائح موثوقة" },
];

const benefits = [
  { icon: BadgeCheck, title: "أخصائيون معتمدون", desc: "ذوو خبرة وكفاءات عالية" },
  { icon: ShieldCheck, title: "خصوصية وأمان", desc: "استشارات سرية تماماً" },
  { icon: CalendarCheck, title: "حجز سهل وسريع", desc: "في أي وقت ومن أي مكان" },
  { icon: Users, title: "دعم شامل لكل الفئات", desc: "أولياء، تلاميذ، أساتذة" },
  { icon: Sparkles, title: "محتوى تربوي موثوق", desc: "مقالات، فيديوهات، نصائح" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="ornament-bg absolute inset-0 opacity-60" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
          <div className="text-center lg:text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium text-gold">
              <Sparkles className="h-3.5 w-3.5" /> منصة عربية رائدة
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              مرحباً بكم في <span className="text-gold">رشدِينا</span>
              <br />
              <span className="text-2xl font-normal text-primary-foreground/80 sm:text-3xl">
                رفيقك نحو تربية متوازنة وتعليم أفضل
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 lg:mx-0">
              منصة رقمية تجمعك بأفضل المستشارين التربويين والنفسيين لدعم الأسرة، التلميذ والأستاذ — في أي وقت ومن أي مكان.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link to="/consultants" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-sm font-bold text-primary-deep shadow-gold transition-transform hover:scale-105">
                ابدأ استشارتك الآن
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link to="/features" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
                تعرف على الخدمات
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70 lg:justify-start">
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-gold" /> +50 أخصائي معتمد</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> سرية تامة</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-gold" /> دعم 24/7</div>
            </div>
          </div>

          {/* Decorative mock phone */}
          <div className="relative mx-auto hidden max-w-sm lg:block">
            <div className="animate-float relative rounded-[2.5rem] border-8 border-white/10 bg-primary-deep p-4 shadow-elegant">
              <div className="rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent p-6">
                <div className="mx-auto mb-6 h-1.5 w-20 rounded-full bg-white/20" />
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                    <span className="font-display text-3xl text-gold">ر</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl text-gold">رشدِينا</h3>
                  <p className="mt-1 text-xs text-white/60">اختر الفئة المناسبة لك</p>
                </div>
                <div className="mt-6 space-y-2.5">
                  {["ولي أمر", "تلميذ", "أستاذ"].map((r) => (
                    <div key={r} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/90">
                      <span>{r}</span>
                      <span className="h-8 w-8 rounded-lg bg-gold/20" />
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-full bg-gold-gradient py-3 text-sm font-bold text-primary-deep">تسجيل الدخول</button>
              </div>
            </div>
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gold/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-cream-gradient py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold text-gold">خدماتنا</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">كل ما تحتاجه في مكان واحد</h2>
            <p className="mt-3 text-muted-foreground">من الاستشارة النفسية إلى المكتبة التربوية — اختر ما يناسب احتياجك.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.title} className="group rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-gold-gradient group-hover:text-primary-deep">
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rushdina */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold text-gold">لماذا رشدِينا؟</span>
              <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">منصة تثق بها العائلات والمدارس</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                نوفّر بيئة آمنة وموثوقة تجمع أفضل المستشارين مع الأسر والمدرسة في تجربة بسيطة وفعّالة.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-3 rounded-2xl bg-cream p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{b.title}</h4>
                      <p className="text-xs text-muted-foreground">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 text-primary-foreground shadow-elegant">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />
                <MessageCircle className="h-10 w-10 text-gold" />
                <blockquote className="mt-5 font-display text-2xl leading-relaxed">
                  «رشدِينا غيّرت طريقة تواصلنا مع مستشار ابنتي. الحجز سهل، والمستشارة رائعة جداً.»
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gold/30" />
                  <div>
                    <div className="text-sm font-bold">سارة م.</div>
                    <div className="text-xs text-primary-foreground/70">ولية أمر</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-hero-gradient p-10 text-center text-primary-foreground shadow-elegant sm:p-16">
          <h2 className="text-3xl font-bold sm:text-4xl">ابدأ رحلتك مع <span className="text-gold">رشدِينا</span> اليوم</h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/80">حمّل التطبيق واحجز أول استشارة لك في دقائق.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#" className="rounded-full bg-gold-gradient px-7 py-3 text-sm font-bold text-primary-deep shadow-gold">App Store</a>
            <a href="#" className="rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm font-bold text-white backdrop-blur">Google Play</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
