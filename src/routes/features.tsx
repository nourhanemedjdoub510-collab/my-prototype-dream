import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Brain, BookOpen, GraduationCap, Users, CalendarCheck, MessageCircle, Library, CreditCard, Video, Phone, Bell, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "الخدمات — رشدِينا | استشارات أونلاين" },
      { name: "description", content: "استشارات نفسية وتربوية عن بُعد: فيديو، صوت، دردشة، حجز ذكي، دفع بـ CIB والذهبية، إشعارات ومكتبة تربوية رقمية." },
      { property: "og:title", content: "خدمات رشدِينا — كلها أونلاين" },
      { property: "og:description", content: "جلسات فيديو ومكالمات ودردشة آمنة مع أخصائيين معتمدين، داخل التطبيق." },
    ],
  }),
  component: FeaturesPage,
});

const features = [
  { icon: Brain, title: "الدعم النفسي أونلاين", desc: "جلسات نفسية عن بُعد للمراهقين والأسرة: قلق دراسي، مشكلات سلوكية وانفعالية." },
  { icon: BookOpen, title: "الاستشارات التربوية للأولياء", desc: "تربية إيجابية، التعامل مع الأطفال، المراهقة المبكرة والمتأخرة — كلها داخل التطبيق." },
  { icon: GraduationCap, title: "دعم التلاميذ", desc: "تحسين التركيز، تنظيم الوقت، طرق المراجعة، التخطيط الدراسي والتحفيز." },
  { icon: Users, title: "دعم الأساتذة", desc: "إدارة القسم، التعامل مع التلميذ المشاغب والانطوائي، استراتيجيات التعليم الحديثة." },
  { icon: Video, title: "مكالمات فيديو مباشرة", desc: "جلسات مرئية واضحة وآمنة مع المستشار من أي مكان." },
  { icon: Phone, title: "مكالمات صوتية", desc: "تواصل صوتي مريح إذا كنت تفضّل الخصوصية." },
  { icon: MessageCircle, title: "دردشة مع المستشار", desc: "محادثة كتابية مشفّرة قبل، أثناء، وبعد الجلسة." },
  { icon: CalendarCheck, title: "حجز جلسات أونلاين", desc: "اختر المستشار، التاريخ، الوقت، ونوع الجلسة في خطوات بسيطة." },
  { icon: Bell, title: "إشعارات بالمواعيد", desc: "تذكير ذكي قبل كل جلسة حتى لا تفوّت موعدك." },
  { icon: CreditCard, title: "دفع إلكتروني آمن", desc: "ادفع ببطاقة CIB أو الذهبية بكل أمان داخل التطبيق." },
  { icon: Library, title: "مكتبة تربوية رقمية", desc: "مقالات، فيديوهات ومحتوى موثوق من نخبة المختصين." },
  { icon: ShieldCheck, title: "خصوصية وسرية تامة", desc: "كل الجلسات مشفّرة وبياناتك محمية بالكامل." },
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
