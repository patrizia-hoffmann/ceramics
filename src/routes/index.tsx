import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroMacro from "@/assets/hero-macro.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productRing from "@/assets/product-ring.jpg";
import productPendant from "@/assets/product-pendant.jpg";
import materialTexture from "@/assets/material-texture.jpg";
import journalKiln from "@/assets/journal-kiln.jpg";
import editorialStill from "@/assets/editorial-still.jpg";
import playgroundFragments from "@/assets/playground-fragments.jpg";
import transparentLogo from "@/assets/transparent-logo.svg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OXID — Serious material, playful object" },
      {
        name: "description",
        content:
          "3D-printed technical ceramic jewellery in alumina (Al₂O₃). Product design born from ceramic engineering.",
      },
    ],
  }),
  component: Index,
});

const wrap = "mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12";
const tag =
  "inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70 backdrop-blur-sm";

function Hex({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <polygon points="50,4 92,27 92,73 50,96 8,73 8,27" fill="currentColor" />
    </svg>
  );
}

function Blob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M47.7,-62.4C60.4,-52.6,68.4,-36.5,72.2,-19.6C76,-2.7,75.6,15,68.3,29.3C61,43.6,46.8,54.6,31.3,61.9C15.8,69.2,-1,72.8,-18.4,69.9C-35.8,67,-53.8,57.6,-64.4,42.6C-75,27.6,-78.2,7,-73.6,-11.3C-69,-29.6,-56.6,-45.6,-41.6,-55.1C-26.6,-64.6,-9,-67.6,8.2,-70.1C25.4,-72.6,35,-72.2,47.7,-62.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

function TechDrawing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" stroke="currentColor" aria-hidden>
      <polygon points="120,30 175,62 175,126 120,158 65,126 65,62" strokeWidth="1.2" />
      <polygon points="120,52 156,73 156,115 120,136 84,115 84,73" strokeWidth="0.8" strokeDasharray="3 3" />
      <line x1="120" y1="10" x2="120" y2="178" strokeWidth="0.5" strokeDasharray="6 3" />
      <line x1="40" y1="94" x2="200" y2="94" strokeWidth="0.5" strokeDasharray="6 3" />
      <text x="120" y="194" fontSize="8" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="IBM Plex Mono">
        Ø — Al₂O₃ structural cell
      </text>
    </svg>
  );
}

function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Collection", href: "#collection" },
    { label: "Material", href: "#material" },
    { label: "Process", href: "#process" },
    { label: "Playground", href: "#playground" },
    { label: "Journal", href: "#journal" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto grid max-w-[88rem] grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 rounded-full border border-border bg-background/90 py-2 pl-4 pr-2 backdrop-blur-md sm:gap-4 sm:pl-5">
        <a href="#top" className="flex min-w-0 items-center gap-2 font-display text-lg font-bold">
          <img src={transparentLogo} alt="OXID Logo" className="h-8 w-auto" />
        </a>
        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#collection" className="shrink-0 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-colors hover:bg-cobalt sm:text-sm">
          Cart (0)
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className={`${wrap} pt-24 sm:pt-28`}>
      <div className="grid gap-3 lg:grid-cols-12">
        <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-6 sm:p-10 lg:col-span-7 lg:min-h-[78vh] lg:p-14">
          <Blob className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 text-lilac/60" />
          <div className="relative">
            <span className={`${tag} bg-sand/70`}>
              <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Al₂O₃ — additive ceramic
            </span>
            <h1 className="mt-8 font-display text-5xl font-bold leading-[0.92] tracking-normal sm:mt-10 sm:text-7xl lg:text-8xl xl:text-9xl">
              Serious<br />material.<br />
              <span className="text-cobalt">Playful</span> object.
            </h1>
          </div>
          <div className="relative mt-10 grid gap-6 sm:mt-12 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-8">
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg">
              Jewellery printed in technical ceramic — precision-engineered structures shaped into wearable objects.
            </p>
            <a href="#collection" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition-colors hover:bg-cobalt sm:w-auto">
              Shop series <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="grid gap-3 lg:col-span-5 lg:grid-rows-[1.4fr_1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-auto lg:min-h-0">
            <img src={heroMacro} alt="Ceramic Macro" width={1200} height={1600} className="absolute inset-0 h-full w-full object-cover" />
            <span className={`${tag} absolute bottom-4 left-4`}>Fig. 01 — Lattice Structure</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex min-h-40 flex-col justify-between rounded-3xl bg-cobalt p-5 text-accent-foreground sm:p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">Material</span>
              <span className="font-display text-4xl font-bold tracking-tight">Al₂O₃</span>
            </div>
            <div className="relative flex min-h-40 flex-col justify-between overflow-hidden rounded-3xl bg-stone/50 p-4 text-foreground/70 sm:p-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em]">CAD Spec</span>
              <TechDrawing className="mx-auto h-full max-h-36 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Collection() {
  const products = [
    { code: "HX-01", name: "Ballet Drop", body: "Delicate ceramic figure on secure drop hooks.", price: "€240", img: productEarrings, dot: "bg-cobalt" },
    { code: "MD-02", name: "Modular Ring", body: "Interlocking cellular geometry, single-piece print.", price: "€180", img: productRing, dot: "bg-coral" },
    { code: "PX-03", name: "Honeycomb Pendant", body: "Cellular lattice element suspended on fine chain.", price: "€210", img: productPendant, dot: "bg-mineral" },
  ];
  return (
    <section id="collection" className={`${wrap} scroll-mt-24 pb-20 sm:pb-28 lg:pb-40 pt-20`}>
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div>
          <p className="kicker text-foreground/45">02 / Collection</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">The ceramic system.</h2>
        </div>
      </div>
      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.code} className="group flex flex-col rounded-3xl bg-card p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <span className={`${tag} absolute left-3 top-3`}>
                <span className={`h-1.5 w-1.5 rounded-full ${p.dot}`} /> {p.code}
              </span>
            </div>
            <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <span className="font-mono text-sm">{p.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              <button className="mt-5 w-full rounded-full border border-border px-4 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background">
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Playground() {
  return (
    <section id="playground" className="scroll-mt-24 bg-sand/40 py-20 sm:py-28">
      <div className={wrap}>
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div>
            <p className="kicker text-foreground/45">05 / Playground</p>
            <h2 className="mt-5 font-display text-5xl font-bold sm:text-8xl">PLAYGROUND</h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">Prototypes, color studies, and experimental geometry in progress.</p>
        </div>
        <div className="mt-14 grid gap-3 lg:grid-cols-12">
          <div className="relative aspect-square overflow-hidden rounded-3xl sm:aspect-[4/3] lg:col-span-7 lg:aspect-auto">
            <img src={playgroundFragments} alt="Playground Fragments" className="h-full w-full object-cover" />
            <span className={`${tag} absolute bottom-4 left-4`}>Fragment archive — batch 03</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-3xl bg-foreground px-6 py-16 text-background sm:px-12 lg:px-16 lg:py-24">
        <div className="relative grid gap-12 sm:gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <img src={transparentLogo} alt="OXID Logo White" className="h-8 w-auto invert" />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/55">
              Technical ceramic jewellery, additively manufactured.
            </p>
            <a href="mailto:studio@example.com" className="mt-8 inline-block rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-lilac">
              studio@example.com
            </a>
          </div>
        </div>
        <div className="relative mt-16 flex flex-col gap-3 border-t border-background/15 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-background/40 sm:flex-row sm:justify-between">
          <span>© 2026 OXID — prototype</span>
          <span>Names, prices and contact details are placeholders</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <Collection />
        <Playground />
      </main>
      <Footer />
    </div>
  );
}
