import ParticleField from './ParticleField';

export default function HeroStage() {
  return (
    <div className="relative h-[480px] w-full sm:h-[560px] lg:h-[680px]">
      <ParticleField />
      <div className="pointer-events-none absolute left-[6%] top-[18%] hidden rounded-2xl border border-border bg-card/70 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
        <p className="font-mono text-[11px] text-muted-foreground">components/patterns/</p>
        <p className="font-mono text-[13px] text-foreground">sign-in.tsx</p>
      </div>
      <div className="pointer-events-none absolute bottom-[16%] right-[4%] hidden items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-[13px] text-foreground shadow-xl backdrop-blur-md sm:flex">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.6)]" />
        Prompt copied. Agent is building…
      </div>
    </div>
  );
}
