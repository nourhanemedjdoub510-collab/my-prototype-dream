import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Brain, GraduationCap, Users, BookOpen, CalendarCheck, MessageCircle, ShieldCheck, Sparkles, BadgeCheck, ArrowLeft, Video, Phone, CreditCard, Bell, Wifi } from "lucide-react";
import rushdinaLogo from "@/assets/rushdina-logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "رشدِينا — استشارات نفسية وتربوية أونلاين" },
      { name: "description", content: "منصة رقمية للاستشارات النفسية والتربوية عن بُعد عبر مكالمات فيديو، صوتية ودردشة مع أخصائيين معتمدين. ادفع بـ CIB أو الذهبية." },
      { property: "og:title", content: "رشدِينا — استشارات أونلاين مع أخصائيين معتمدين" },
      { property: "og:description", content: "جلسات فيديو · مكالمات · دردشة آمنة · دفع إلكتروني بـ CIB والذهبية." },
    ],
  }),
  component: HomePage,
});

const categories = [
  { icon: Brain, title: "الاستشارات النفسية", desc: "جلسات نفسية أونلاين للمراهقين والأسرة: قلق دراسي، سلوك، وانفعالات" },
  { icon: BookOpen, title: "الاستشارات التربوية للأولياء", desc: "تربية إيجابية، التعامل مع الأطفال والمراهقة، عن بُعد عبر التطبيق" },
  { icon: GraduationCap, title: "دعم التلاميذ", desc: "تحسين التركيز، تنظيم الوقت، طرق المراجعة والتخطيط الدراسي" },
  { icon: Users, title: "دعم الأساتذة", desc: "إدارة القسم، التعامل مع التلميذ المشاغب والانطوائي، استراتيجيات حديثة" },
  { icon: CalendarCheck, title: "حجز جلسات أونلاين", desc: "اختر المستشار والوقت ونوع الجلسة بثوانٍ" },
  { icon: BookOpen, title: "المكتبة التربوية الرقمية", desc: "مقالات وفيديوهات موثوقة من نخبة المختصين" },
];

const sessionTypes = [
  { icon: Video, title: "مكالمات فيديو", desc: "جلسة مرئية مباشرة وآمنة مع المستشار" },
  { icon: Phone, title: "مكالمات صوتية", desc: "تواصل صوتي واضح من أي مكان" },
  { icon: MessageCircle, title: "دردشة كتابية", desc: "محادثة مشفّرة قبل وأثناء وبعد الجلسة" },
  { icon: Sparkles, title: "استشارات تفاعلية", desc: "تجربة رقمية تفاعلية وعصرية" },
];

const benefits = [
  { icon: Wifi, title: "100% عن بُعد", desc: "كل الخدمات داخل التطبيق" },
  { icon: BadgeCheck, title: "أخصائيون معتمدون", desc: "خبرة وكفاءات عالية" },
  { icon: ShieldCheck, title: "خصوصية وأمان", desc: "جلسات مشفّرة وسرية تامة" },
  { icon: CreditCard, title: "دفع إلكتروني", desc: "بطاقة CIB والذهبية" },
  { icon: Bell, title: "إشعارات بالمواعيد", desc: "تذكير ذكي قبل كل جلسة" },
  { icon: Users, title: "دعم لكل الفئات", desc: "أولياء، تلاميذ، أساتذة" },
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
          {/* Logo showcase - on the right in RTL */}
          <div className="relative order-first mx-auto w-full max-w-xs sm:max-w-sm">
            <div className="animate-float relative">
              <img
                src={rushdinaLogo}
                alt="شعار رشدِينا - منصة الاستشارات التربوية والنفسية"
                className="relative z-10 mx-auto w-full rounded-[2.5rem] shadow-elegant"
              />
              <div className="absolute -inset-10 -z-0 rounded-[3rem] bg-gold/20 blur-3xl" />
            </div>
          </div>

          <div className="text-center lg:text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium text-gold">
              <Wifi className="h-3.5 w-3.5" /> 100% أونلاين · من أي مكان
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              مرحباً بكم في <span className="text-gold">رشدِينا</span>
              <br />
              <span className="text-2xl font-normal text-primary-foreground/80 sm:text-3xl">
                استشارات نفسية وتربوية عن بُعد عبر التطبيق
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 lg:mx-0">
              منصة رقمية ذكية تربطك بأخصائيين نفسانيين ومستشارين تربويين معتمدين عبر جلسات فيديو، مكالمات صوتية ودردشة آمنة — دون مغادرة منزلك.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link to="/consultants" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-sm font-bold text-primary-deep shadow-gold transition-transform hover:scale-105">
                احجز جلستك أونلاين
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link to="/features" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
                تعرف على الخدمات
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70 lg:justify-start">
              <div className="flex items-center gap-2"><Video className="h-4 w-4 text-gold" /> فيديو · صوت · دردشة</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> جلسات مشفّرة</div>
              <div className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-gold" /> CIB والذهبية</div>
            </div>
          </div>
        </div>
      </section>

      {/* Session types */}
      <section className="border-b border-border/60 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold text-gold">طرق التواصل</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">اختر طريقة الجلسة التي تناسبك</h2>
            <p className="mt-3 text-muted-foreground">كل أنواع الاستشارات تتم رقمياً داخل التطبيق — بأمان وراحة.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sessionTypes.map((s) => (
              <div key={s.title} className="rounded-3xl border border-border bg-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-elegant">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-primary-deep">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
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
                  «حجزتُ جلسة فيديو مع المستشارة من المنزل — تجربة سهلة، آمنة وفعّالة. الدفع تمّ بـ CIB في ثوانٍ.»
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
