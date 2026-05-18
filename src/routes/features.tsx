import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Brain, BookOpen, GraduationCap, Users, CalendarCheck, MessageCircle, Library, CreditCard } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "الخدمات — رشدِينا" },
      { name: "description", content: "استكشف خدمات رشدِينا: استشارات نفسية وتربوية، دعم التلاميذ والأساتذة، حجز مواعيد، ومكتبة تربوية شاملة." },
      { property: "og:title", content: "خدمات رشدِينا" },
      { property: "og:description", content: "كل ما تحتاجه من استشارات ودعم تربوي ونفسي في مكان واحد." },
    ],
  }),
  component: FeaturesPage,
});

const features = [
  { icon: Brain, title: "الاستشارات النفسية", desc: "أخصائيون نفسيون لمتابعة الأطفال والمراهقين والأسرة، مع خطط دعم مخصصة." },
  { icon: BookOpen, title: "الاستشارات التربوية", desc: "تشخيص صعوبات التعلم، بناء عادات دراسة فعّالة، وتطوير المهارات." },
  { icon: GraduationCap, title: "دعم التلاميذ", desc: "جلسات تنمية شخصية، توجيه دراسي، ومرافقة للنجاح المدرسي." },
  { icon: Users, title: "دعم الأساتذة", desc: "أدوات لإدارة الصف، مهارات تواصل، وحلول للحالات الصعبة." },
  { icon: CalendarCheck, title: "حجز موعد ذكي", desc: "اختر المستشار، التاريخ والوقت ونوع الجلسة (حضوري أو عن بعد) في خطوات." },
  { icon: MessageCircle, title: "محادثة آمنة", desc: "تواصل مباشر ومشفّر مع المستشار قبل وبعد الجلسة." },
  { icon: Library, title: "المكتبة التربوية", desc: "مقالات، فيديوهات ومحتوى موثوق من نخبة المختصين." },
  { icon: CreditCard, title: "دفع آمن", desc: "عملية دفع مشفّرة بأشهر البطاقات البنكية." },
];

function FeaturesPage() {
  return (
    <SiteLayout>
      <section className="bg-hero-gradient py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-sm font-semibold text-gold">الخدمات</span>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">حلول متكاملة لكل احتياج</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            من الاستشارة الأولى إلى المتابعة طويلة المدى — رشدِينا تقدّم تجربة سلسة وموثوقة.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-elegant">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-cream p-10 text-center shadow-card sm:p-14">
          <h2 className="text-3xl font-bold">جاهز لتجربة رشدِينا؟</h2>
          <p className="mt-3 text-muted-foreground">تصفّح قائمة المستشارين واحجز جلستك الأولى.</p>
          <Link to="/consultants" className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-card hover:shadow-elegant">
            تصفّح المستشارين
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
