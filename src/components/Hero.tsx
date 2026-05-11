import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroShowcase from "@/assets/hero-showcase.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16">
      {/* Ambient organic blobs */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-creative" />
      <div aria-hidden className="absolute -top-32 -left-32 w-[34rem] h-[34rem] bg-secondary/60 blob-1 blur-3xl opacity-70 animate-blob -z-10" />
      <div aria-hidden className="absolute -bottom-40 right-[-10rem] w-[40rem] h-[40rem] bg-primary/25 blob-2 blur-3xl opacity-70 animate-blob -z-10" />
      <div aria-hidden className="absolute top-1/3 left-1/2 w-[22rem] h-[22rem] bg-accent/20 blob-3 blur-3xl animate-pulse-slow -z-10" />
      <div aria-hidden className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay -z-10" />

      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-center">
          {/* Left — Editorial copy */}
          <div className="md:col-span-6 relative">
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <span className="h-px w-10 bg-foreground/40" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Studio · Est. 2017
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.95] text-foreground text-balance animate-fade-in">
              Design that <span className="font-serif-italic text-primary">whispers,</span>{" "}
              brands that <span className="font-serif-italic">roar.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "120ms" }}>
              Shobs Creations is an independent graphic design studio crafting
              meticulous brand systems, print and packaging — built in
              <span className="text-foreground"> CorelDRAW</span> &amp;
              <span className="text-foreground"> Adobe Creative Suite</span>.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: "240ms" }}>
              <Button asChild size="lg" className="group rounded-full px-7 h-14 bg-foreground text-background hover:bg-foreground/90">
                <Link to="/services">
                  See the work
                  <ArrowUpRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-7 h-14 hover:bg-foreground/5">
                <Link to="/contact">
                  <span className="relative">
                    Start a project
                    <span className="absolute left-0 -bottom-0.5 h-px w-full bg-foreground/60" />
                  </span>
                </Link>
              </Button>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md animate-fade-in" style={{ animationDelay: "360ms" }}>
              {[
                { k: "120+", v: "Brands shaped" },
                { k: "8 yrs", v: "Of practice" },
                { k: "12", v: "Industries served" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl md:text-4xl text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — Showcase collage with 3D depth */}
          <div className="md:col-span-6 relative animate-fade-in perspective-1000 mx-auto w-full max-w-[18rem] sm:max-w-sm md:max-w-none" style={{ animationDelay: "180ms" }}>
            <div className="relative aspect-[4/5] md:aspect-[5/6] w-full">
              {/* Tilted backing cards (peek out behind) */}
              <div aria-hidden className="absolute inset-0 rounded-[2rem] bg-accent/30 -z-10" style={{ transform: "rotate(-4deg) translate(-14px, 18px)" }} />
              <div aria-hidden className="absolute inset-0 rounded-[2rem] bg-secondary/50 -z-10" style={{ transform: "rotate(3deg) translate(18px, 10px)" }} />

              {/* Main showcase image */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-editorial ring-1 ring-foreground/10" style={{ transform: "rotate(-1.5deg)" }}>
                <img
                  src={heroShowcase}
                  alt="Shobs Creations design showcase: editorial spread, packaging and digital mockups arranged with sculptural organic shapes"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={1536}
                  height={1280}
                />
                <svg aria-hidden className="absolute top-3 right-3 w-16 h-16 text-background animate-spin-slow opacity-90" viewBox="0 0 100 100">
                  <defs>
                    <path id="hero-circ" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                  </defs>
                  <text fontSize="9.5" letterSpacing="2.5" fill="currentColor" fontFamily="Inter Tight, sans-serif">
                    <textPath href="#hero-circ">SHOBS · CREATIONS · GRAPHIC · STUDIO ·</textPath>
                  </text>
                  <circle cx="50" cy="50" r="3" fill="currentColor" />
                </svg>
              </div>

              {/* Floating: Open for commissions */}
              <div className="absolute -left-3 top-8 flex items-center gap-2 px-4 py-2 rounded-full bg-card/95 backdrop-blur shadow-lg border border-border animate-float">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] md:text-xs uppercase tracking-wider">Open for commissions</span>
              </div>

              {/* Floating: Type specimen */}
              <div className="absolute -left-6 bottom-20 hidden sm:block px-4 py-3 rounded-2xl bg-card border border-border shadow-xl animate-float-delayed" style={{ transform: "rotate(-6deg)" }}>
                <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Typeface</p>
                <p className="font-display text-3xl leading-none mt-1">Aa<span className="font-serif-italic text-primary">Bb</span></p>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground mt-1">Instrument · Inter</p>
              </div>

              {/* Floating: Color palette */}
              <div className="absolute -right-4 top-24 px-4 py-3 rounded-2xl bg-card border border-border shadow-xl animate-float" style={{ transform: "rotate(5deg)", animationDelay: "1s" }}>
                <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Palette · 04</p>
                <div className="flex gap-1.5">
                  {["hsl(14 60% 48%)", "hsl(35 60% 52%)", "hsl(95 18% 38%)", "hsl(20 14% 12%)"].map((c) => (
                    <span key={c} className="w-5 h-5 rounded-full ring-1 ring-foreground/15" style={{ background: c }} />
                  ))}
                </div>
              </div>

              {/* Floating: Craft rating */}
              <div className="absolute -right-2 bottom-10 px-5 py-4 rounded-2xl bg-foreground text-background shadow-xl animate-float-delayed" style={{ transform: "rotate(4deg)" }}>
                <p className="font-display text-3xl leading-none">A+</p>
                <p className="text-[9px] uppercase tracking-widest opacity-70 mt-1">Craft rating</p>
              </div>

              {/* Designer-y annotation */}
              <div className="absolute -bottom-3 left-6 hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-6 bg-foreground/30" />
                Fig. 01 — Studio Reel
              </div>
            </div>
          </div>
        </div>

        {/* Marquee — disciplines */}
        <div className="mt-20 lg:mt-28 border-y border-border/70 py-6 overflow-hidden">
          <div className="flex gap-14 whitespace-nowrap animate-marquee will-change-transform">
            {Array.from({ length: 2 }).map((_, r) => (
              <div key={r} className="flex gap-14 items-center shrink-0">
                {[
                  "Brand Identity",
                  "Print & Editorial",
                  "Packaging",
                  "Logo Systems",
                  "Illustration",
                  "Art Direction",
                  "Mockups",
                ].map((d) => (
                  <span key={d} className="font-display italic text-2xl md:text-3xl text-foreground/70">
                    {d} <span className="not-italic text-primary mx-3">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
