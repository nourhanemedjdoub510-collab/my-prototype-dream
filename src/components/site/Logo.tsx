export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="currentColor" opacity="0.12" />
        <path d="M24 6 L26 14 L34 14 L27.5 19 L30 27 L24 22 L18 27 L20.5 19 L14 14 L22 14 Z" fill="var(--gold)" />
        <path d="M14 32 Q24 38 34 32" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          رشدِينا
        </span>
        <span className="text-[10px] text-muted-foreground">Rushdina</span>
      </div>
    </div>
  );
}
