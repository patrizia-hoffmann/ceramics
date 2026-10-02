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
import teamLarissa from "@/assets/team-larissa-wahl.jpg.asset.json";
import teamSwantje from "@/assets/team-swantje-funk.jpg.asset.json";
import teamPatrizia from "@/assets/team-patrizia-hoffmann.jpg.asset.json";
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
      { property: "og:title", content: "OXID — Serious material, playful object" },
      {
        property: "og:description",
        content:
          "3D-printed technical ceramic jewellery in alumina (Al₂O₃). Product design born from ceramic engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const wrap = "mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12";
const tag =
  "inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70 backdrop-blur-sm";

/* ------------------------------- primitives ------------------------------ */

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

/** Small technical drawing of a hex cell with dimension lines. */
function TechDrawing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" stroke="currentColor" aria-hidden>
      <polygon points="120,30 175,62 175,126 120,158 65,126 65,62" strokeWidth="1.2" />
      <polygon points="120,52 156,73 156,115 120,136 84,115 84,73" strokeWidth="0.8" strokeDasharray="3 3" />
      <line x1="120" y1="10" x2="120" y2="178" strokeWidth="0.5" strokeDasharray="6 3" />
      <line x1="40" y1="94" x2="200" y2="94" strokeWidth="0.5" strokeDasharray="6 3" />
      <line x1="65" y1="176" x2="175" y2="176" strokeWidth="0.7" />
      <line x1="65" y1="170" x2="65" y2="182" strokeWidth="0.7" />
      <line x1="175" y1="170" x2="175" y2="182" strokeWidth="0.7" />
      <text x="120" y="194" fontSize="8" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="IBM Plex Mono">
        Ø — mm (placeholder)
      </text>
      <text x="182" y="60" fontSize="8" fill="currentColor" stroke="none" fontFamily="IBM Plex Mono">
        t = var.
      </text>
    </svg>
  );
}

function SectionHead({ n, label, title, aside }: { n: string; label: string; title: React.ReactNode; aside?: string }) {
  return (
    <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-8">
      <div className="min-w-0">
        <p className="kicker text-foreground/45">
          {n} / {label}
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-[1.02] tracking-normal sm:mt-5 sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      {aside && <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{aside}</p>}
    </div>
  );
}

/* ---------------------------------- nav ---------------------------------- */

function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Collection", href: "#collection" },
    { label: "Material", href: "#material" },
    { label: "Process", href: "#process" },
    { label: "Playground", href: "#playground" },
    { label: "About", href: "#about" },
    { label: "Journal", href: "#journal" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto grid max-w-[88rem] grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 rounded-full border border-border bg-background/90 py-2 pl-4 pr-2 backdrop-blur-md sm:gap-4 sm:pl-5">
        <a href="#top" className="flex min-w-0 items-center gap-2 font-display text-lg font-bold tracking-normal">
          <Hex className="h-4 w-4 text-cobalt" />
          OXID
        </a>
        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-full md:hidden"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M5 5l14 14M19 5 5 19" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </Button>
        <a
          href="#collection"
          className="shrink-0 rounded-full bg-foreground px-3 py-2 text-xs font-medium text-background transition-colors hover:bg-cobalt sm:px-4 sm:text-sm"
        >
          Cart (0)
        </a>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mx-auto mt-2 grid max-w-[88rem] overflow-hidden rounded-2xl border border-border bg-background/95 p-2 shadow-lg backdrop-blur-md md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-display text-base font-medium transition-colors hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ---------------------------------- hero --------------------------------- */

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
              Serious
              <br />
              material.
              <br />
              <span className="text-cobalt">Playful</span> object.
            </h1>
          </div>
          <div className="relative mt-10 grid gap-6 sm:mt-12 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-8">
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg">
              Jewellery printed in technical ceramic — the material of bearings and implants, shaped
              into objects for the body.
            </p>
            <a
              href="#collection"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition-colors hover:bg-cobalt sm:w-auto sm:px-7"
            >
              Shop the first series <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="grid gap-3 lg:col-span-5 lg:grid-rows-[1.4fr_1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/6] lg:aspect-auto lg:min-h-0">
            <img src={heroMacro} alt="Macro of a sintered alumina honeycomb structure" width={1200} height={1600} className="absolute inset-0 h-full w-full object-cover" />
            <span className={`${tag} absolute bottom-4 left-4`}>Fig. 01 — HX lattice</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex min-h-40 flex-col justify-between rounded-3xl bg-cobalt p-5 text-accent-foreground sm:p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">Material</span>
              <span className="font-display text-4xl font-bold tracking-tight">Al₂O₃</span>
            </div>
            <div className="relative flex min-h-40 flex-col justify-between overflow-hidden rounded-3xl bg-stone/50 p-4 text-foreground/70 sm:p-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em]">Drawing 01</span>
              <TechDrawing className="mx-auto h-full max-h-36 w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/40 sm:flex sm:flex-wrap sm:justify-between sm:text-[10px]">
        <span>Printed layer by layer</span>
        <span>Sintered, unglazed</span>
        <span>Numbered small series</span>
        <span className="hidden sm:inline">Scroll ↓</span>
      </div>
    </section>
  );
}

/* -------------------------------- concept -------------------------------- */

function Concept() {
  return (
    <section id="concept" className={`${wrap} scroll-mt-24 py-20 sm:py-28 lg:py-40`}>
      <div className="grid gap-12 lg:grid-cols-12">
        <p className="kicker text-foreground/45 lg:col-span-2">01 / Concept</p>
        <div className="lg:col-span-9">
          <p className="font-display text-2xl font-medium leading-[1.2] tracking-normal sm:text-4xl lg:text-5xl">
            A product design brand born from{" "}
             <span className="box-decoration-clone rounded-lg bg-lilac/50 px-2 sm:rounded-full sm:px-3">ceramic engineering</span>. We print
            alumina into geometries casting can't reach — then let{" "}
             <span className="rounded-full bg-coral/30 px-2 sm:px-3">colour</span> and play do the rest.
          </p>
          <div className="mt-14 grid gap-8 text-muted-foreground sm:grid-cols-3">
            {[
              ["Material", "A dense, hard, engineering ceramic — not craft clay."],
              ["Geometry", "Open lattices and interlocking cells, walls under a millimetre."],
              ["Object", "Not decorated metal. Structure itself, made wearable."],
            ].map(([t, b]) => (
              <div key={t} className="border-t border-border pt-5">
                <p className="font-display text-base font-bold text-foreground">{t}</p>
                <p className="mt-2 text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- collection ------------------------------ */

const products = [
  { code: "HX-01", name: "Honeycomb Drops", body: "Triple-cell hexagon drop earrings on steel hooks.", price: "€65", img: productEarrings, dot: "bg-cobalt" },
  { code: "MD-02", name: "Modular Hex Ring", body: "Interlocking cellular band, printed in one piece.", price: "€120", img: productRing, dot: "bg-coral" },
  { code: "PX-03", name: "Cell Pendant", body: "Single hexagon with cut-out lattice on a fine chain.", price: "€70", img: productPendant, dot: "bg-mineral" },
];

function Collection() {
  return (
    <section id="collection" className={`${wrap} scroll-mt-24 pb-20 sm:pb-28 lg:pb-40`}>
      <SectionHead n="02" label="Collection" title="First series: the hexagonal system." aside="Three pieces, small numbered series. Prices and availability are placeholders." />
      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.code} className="group flex flex-col rounded-3xl bg-card p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <img src={p.img} alt={p.name} loading="lazy" width={1200} height={1504} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <span className={`${tag} absolute left-3 top-3`}>
                <span className={`h-1.5 w-1.5 rounded-full ${p.dot}`} /> {p.code}
              </span>
            </div>
            <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
               <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                 <h3 className="min-w-0 font-display text-xl font-bold tracking-normal">{p.name}</h3>
                 <span className="shrink-0 font-mono text-sm">{p.price}</span>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <button className="mt-5 w-full rounded-full border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-foreground hover:bg-foreground hover:text-background">
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- editorial ------------------------------ */

function Editorial() {
  return (
     <section className={`${wrap} pb-20 sm:pb-28 lg:pb-40`}>
      <div className="grid gap-3 lg:grid-cols-12">
         <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[4/3] lg:col-span-8 lg:aspect-auto">
          <img src={editorialStill} alt="Ceramic lattice pendant on a lilac paper cylinder with dried flowers and a coral paper form" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
           <span className={`${tag} absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] sm:bottom-4 sm:left-4`}>Still life — PX-03 with paper forms</span>
        </div>
        <div className="flex flex-col justify-between gap-10 rounded-3xl bg-coral p-8 text-foreground lg:col-span-4 lg:p-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">Editorial / 01</span>
          <p className="font-display text-3xl font-bold leading-[1.05] tracking-tight lg:text-4xl">
            Precise, but never sterile.
          </p>
          <p className="text-sm leading-relaxed opacity-80">
            The pieces are engineered. Everything around them is allowed to be soft, odd and
            colourful.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- material ------------------------------- */

const materialProps = [
  ["Hardness", "Keeps crisp edges and thin walls through everyday wear."],
  ["Thermal stability", "Fired far beyond anything it meets on the body."],
  ["Inert", "Unaffected by water and sweat; does not tarnish."],
  ["Skin-friendly", "A biocompatible ceramic, long used in medical technology."],
  ["Matte", "Unglazed, light-scattering white that reads as mineral."],
];

function Material() {
  return (
     <section id="material" className={`${wrap} scroll-mt-24 pb-20 sm:pb-28 lg:pb-40`}>
      <div className="grid overflow-hidden rounded-3xl bg-foreground text-background lg:grid-cols-2">
         <div className="p-6 sm:p-12 lg:p-16">
          <p className="kicker text-background/45">03 / Material</p>
          <h2 className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Alumina<span className="text-lilac">.</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-background/60">
            The same class of material as machine bearings and implant components. No plating, no
            coating — colour and surface are the material itself.
          </p>
          <dl className="mt-12">
            {materialProps.map(([t, b], i) => (
                 <div key={t} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 gap-y-1 border-t border-background/15 py-4 sm:grid-cols-[3rem_10rem_1fr] sm:gap-x-4">
                <dt className="font-mono text-[10px] tracking-[0.18em] text-lilac">0{i + 1}</dt>
                <dt className="font-display font-medium">{t}</dt>
                <dd className="col-span-2 col-start-2 text-sm text-background/55 sm:col-span-1 sm:col-start-3">{b}</dd>
              </div>
            ))}
          </dl>
        </div>
         <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:min-h-[50vh]">
          <img src={materialTexture} alt="Macro texture of a sintered alumina surface" loading="lazy" width={1200} height={1200} className="absolute inset-0 h-full w-full object-cover" />
          <span className={`${tag} absolute bottom-4 left-4`}>As fired, unglazed</span>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- process ------------------------------- */

const processSteps = [
  { n: "01", title: "Digital design", body: "Parametric CAD — cell size and wall thickness as variables.", c: "bg-lilac/50" },
  { n: "02", title: "3D printing", body: "Layer-by-layer printing of the green ceramic part.", c: "bg-card" },
  { n: "03", title: "Debinding", body: "Controlled thermal removal of the binder.", c: "bg-sand/60" },
  { n: "04", title: "Sintering", body: "High-temperature firing densifies the part.", c: "bg-card" },
  { n: "05", title: "Finishing", body: "Grinding and surface finishing to final dimension.", c: "bg-mineral/20" },
  { n: "06", title: "Assembly", body: "Findings attached, checked and numbered by hand.", c: "bg-card" },
];

function Process() {
  return (
     <section id="process" className={`${wrap} scroll-mt-24 pb-20 sm:pb-28 lg:pb-40`}>
      <SectionHead n="04" label="Process" title="From file to fired object." aside="Six stages between model and piece. Nothing is carved, cast or moulded." />
      <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((s) => (
           <li key={s.n} className={`flex min-h-48 flex-col justify-between rounded-3xl p-6 sm:min-h-56 sm:p-7 ${s.c}`}>
            <span className="font-mono text-xs tracking-[0.18em] text-foreground/50">{s.n}</span>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------- playground ------------------------------ */

const experiments = [
  { id: "EXP-014", title: "Colour study", note: "Cobalt × lilac × coral", c: "bg-lilac", shape: "hex" },
  { id: "EXP-022", title: "Gyroid fragment", note: "Failed print, kept", c: "bg-mineral text-accent-foreground", shape: "blob" },
  { id: "EXP-031", title: "Soft hex", note: "Rounded cell, 1:1", c: "bg-sand", shape: "hex" },
  { id: "EXP-037", title: "Paper × ceramic", note: "Styling test", c: "bg-coral", shape: "blob" },
];

function Playground() {
  return (
     <section id="playground" className="scroll-mt-24 bg-sand/40 py-20 sm:py-28 lg:py-40">
      <div className={wrap}>
         <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-8">
           <div className="min-w-0">
            <p className="kicker text-foreground/45">05 / Playground</p>
             <h2 className="mt-5 max-w-full break-words font-display text-5xl font-bold leading-[0.88] tracking-normal sm:text-7xl lg:text-8xl xl:text-9xl">
              PLAY
              <span className="inline-flex translate-y-[-0.05em] items-center">
                <Hex className="mx-1 inline h-[0.7em] w-[0.7em] text-cobalt" />
              </span>
              GROUND
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Prototypes, misprints, colour studies and odd shapes. Experiments are part of the brand,
            not something to hide.
          </p>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-12">
           <div className="relative aspect-square overflow-hidden rounded-3xl sm:aspect-[4/3] lg:col-span-7 lg:row-span-2 lg:aspect-auto">
            <img src={playgroundFragments} alt="Grid of ceramic fragments, lattices and colour samples" loading="lazy" width={1200} height={1200} className="h-full w-full object-cover" />
            <span className={`${tag} absolute bottom-4 left-4`}>Fragment archive — batch 03</span>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:col-span-5">
            {experiments.map((e, i) => (
              <div
                key={e.id}
                 className={`group relative flex aspect-square min-w-0 flex-col justify-between overflow-hidden p-4 transition-transform duration-500 hover:-rotate-2 sm:p-5 ${e.c} ${
                  i % 2 ? "rounded-[2.5rem_0.75rem_2.5rem_2.5rem]" : "rounded-3xl"
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">{e.id}</span>
                {e.shape === "hex" ? (
                  <Hex className="absolute right-4 top-4 h-14 w-14 text-background/70 transition-transform duration-700 group-hover:rotate-90" />
                ) : (
                  <Blob className="absolute -right-6 -top-6 h-24 w-24 text-background/40 transition-transform duration-700 group-hover:scale-110" />
                )}
                <div>
                   <p className="font-display text-base font-bold leading-tight sm:text-lg">{e.title}</p>
                  <p className="mt-1 text-xs opacity-70">{e.note}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-3xl bg-card p-5 sm:gap-6 sm:p-6 lg:col-span-5">
             <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">Lab notes</p>
               <p className="mt-2 font-display text-lg font-bold sm:text-xl">New experiments, monthly.</p>
            </div>
            <a href="#journal" className="shrink-0 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-cobalt">
              Read →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- journal ------------------------------- */

const journalEntries = [
  { id: "001", tag: "CAD", title: "Every piece begins as a parametric model" },
  { id: "002", tag: "Prototypes", title: "Testing scale and weight on the body" },
  { id: "003", tag: "Printing", title: "Green parts, fragile as chalk" },
  { id: "004", tag: "Firing", title: "The kiln does the material" },
  { id: "005", tag: "Finished", title: "Ground, checked, numbered" },
];

function Journal() {
  return (
     <section id="journal" className={`${wrap} scroll-mt-24 py-20 sm:py-28 lg:py-40`}>
      <SectionHead n="06" label="Journal" title="Development, documented." aside="CAD → prototypes → printing → firing → finished pieces." />
      <div className="mt-14 grid gap-3 lg:grid-cols-12">
         <div className="relative aspect-square overflow-hidden rounded-3xl sm:aspect-[4/3] lg:col-span-5 lg:aspect-auto lg:min-h-[50vh]">
          <img src={journalKiln} alt="Ceramic components on a kiln shelf" loading="lazy" width={1200} height={1200} className="absolute inset-0 h-full w-full object-cover" />
          <span className={`${tag} absolute bottom-4 left-4`}>Kiln — sintering run</span>
        </div>
        <ol className="rounded-3xl bg-card p-4 sm:p-8 lg:col-span-7">
          {journalEntries.map((e) => (
            <li key={e.id}>
               <a href="#journal" className="group grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-border py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-4 sm:py-6">
                <span className="font-mono text-[10px] tracking-[0.18em] text-foreground/40">{e.id}</span>
                 <span className="min-w-0">
                  <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-cobalt">{e.tag}</span>
                   <span className="font-display text-lg font-bold tracking-normal transition-colors group-hover:text-cobalt sm:text-2xl">{e.title}</span>
                </span>
                <span aria-hidden className="text-foreground/30 transition-transform group-hover:translate-x-1 group-hover:text-cobalt">→</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------- who we are ------------------------------ */

const originPillars = [
  {
    tag: "01 / Origin",
    title: "Where we come from",
    body: "University, not the atelier. Materials science and ceramic engineering — alumina, kilns, tolerances — before jewellery.",
    c: "bg-lilac/40",
  },
  {
    tag: "02 / Gap",
    title: "The gap we fill",
    body: "Wearables that sit between worlds: designed like product, engineered like a component. Too technical for the jewellery shelf, too playful for the lab.",
    c: "bg-card",
  },
  {
    tag: "03 / Method",
    title: "How we work",
    body: "Modern fabrication tools for ceramics — parametric CAD, additive manufacturing, sintering — pointed at the body instead of the machine.",
    c: "bg-mineral/20",
  },
];

function WhoWeAre() {
  return (
    <section id="about" className={`${wrap} scroll-mt-24 pb-20 sm:pb-28 lg:pb-40`}>
      <div className="grid gap-12 lg:grid-cols-12">
        <p className="kicker text-foreground/45 lg:col-span-2">07 / Who we are</p>
        <div className="lg:col-span-10">
          <p className="font-display text-3xl font-bold leading-[1.05] tracking-normal sm:text-5xl lg:text-6xl">
            We came from university.
            <br />
            <span className="text-cobalt">Now we use it on the body.</span>
          </p>
          <div className="mt-10 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              OXID started with technical ceramics — the material of bearings, implants and machine
              parts — and a simple observation: modern fabrication tools for ceramics have barely
              reached wearables. We want to close that gap, between design and technical
              engineering, with pieces that are both.
            </p>
          </div>
          <div className="mt-14 grid gap-3 sm:grid-cols-3">
            {originPillars.map((p) => (
              <div key={p.tag} className={`flex min-h-56 flex-col justify-between rounded-3xl p-6 sm:p-7 ${p.c}`}>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">{p.tag}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40">
            Names, institutions and team details — placeholders
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- footer -------------------------------- */

function Footer() {
  const links = [
    ["Collection", "#collection"],
    ["Material", "#material"],
    ["Process", "#process"],
    ["Playground", "#playground"],
    ["Journal", "#journal"],
    ["About", "#about"],
    ["Contact", "#contact"],
    ["Instagram", "#"],
  ];
  return (
    <footer id="contact" className="scroll-mt-24 px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-3xl bg-foreground px-6 py-16 text-background sm:px-12 lg:px-16 lg:py-24">
        <Blob className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 text-cobalt/60" />
         <div className="relative grid gap-12 sm:gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
             <p className="font-display text-5xl font-bold leading-[0.9] tracking-normal sm:text-7xl lg:text-8xl">
              OXID<span className="text-coral">.</span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/55">
              Technical ceramic jewellery, additively manufactured.
            </p>
            <a href="mailto:studio@example.com" className="mt-8 inline-block rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-lilac">
              studio@example.com
            </a>
          </div>
           <ul className="grid grid-cols-2 gap-x-6 gap-y-4 self-end sm:gap-x-10 sm:gap-y-3 lg:col-span-5 lg:col-start-8">
            {links.map(([l, h]) => (
              <li key={l}>
                <a href={h} className="font-display text-lg text-background/70 transition-colors hover:text-background">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mt-16 flex flex-col gap-3 border-t border-background/15 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-background/40 sm:flex-row sm:justify-between">
          <span>© 2026 OXID — prototype</span>
          <span>Names, prices and contact details are placeholders</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- page --------------------------------- */

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <Concept />
        <Collection />
        <Editorial />
        <Material />
        <Process />
        <Playground />
        <Journal />
        <WhoWeAre />
      </main>
      <Footer />
    </div>
  );
}
