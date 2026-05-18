import logoImg from "@/assets/rushdina-logo.jpg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <img
        src={logoImg}
        alt="رشدِينا"
        className="h-10 w-10 rounded-lg object-cover shadow-sm"
      />
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          رشدِينا
        </span>
        <span className="text-[10px] text-muted-foreground">Rushdina</span>
      </div>
    </div>
  );
}
