import { createFileRoute } from "@tanstack/react-router";

import heroMacro from "@/assets/hero-macro.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productRing from "@/assets/product-ring.jpg";
import productPendant from "@/assets/product-pendant.jpg";
import materialTexture from "@/assets/material-texture.jpg";
import journalKiln from "@/assets/journal-kiln.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OXID — Jewellery, Engineered" },
      {
        name: "description",
        content:
          "Additively manufactured technical ceramic jewellery. Alumina (Al₂O₃) objects designed for the body.",
      },
      { property: "og:title", content: "OXID — Jewellery, Engineered" },
      {
        property: "og:description",
        content:
          "Additively manufactured technical ceramic jewellery. Alumina (Al₂O₃) objects designed for the body.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------------------------- nav ---------------------------------- */

function SiteNav() {
  const links = [
    { label: "Collection", href: "#collection" },
    { label: "Material", href: "#material" },
    { label: "Process", href: "#process" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:flex lg:justify-between">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          OXID<span className="text-accent">.</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#collection"
          className="border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
        >
          Cart (0)
        </a>
      </div>
    </header>
  );
}

/* ---------------------------------- hero --------------------------------- */

function Hero() {
  return (
    <section id="top" className="border-b border-border pt-16 lg:pt-14">
      <div className="grid lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
          <p className="kicker text-accent">Al₂O₃ — Additive ceramic jewellery</p>
          <h1 className="mt-8 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            JEWELLERY,
            <br />
            ENGINEERED.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Additively manufactured ceramic objects designed for the body.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#collection"
              className="inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Explore the collection
              <span aria-hidden>↓</span>
            </a>
          </div>
          <div className="mt-16 hidden max-w-md justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 md:flex">
            <span>Sintered alumina</span>
            <span>Printed lattice</span>
            <span>Fig. 01</span>
          </div>
        </div>
        <div className="relative min-h-[70vh] border-t border-border lg:min-h-0 lg:border-l lg:border-t-0">
          <img
            src={heroMacro}
            alt="Macro view of a sintered alumina ceramic honeycomb structure"
            className="absolute inset-0 h-full w-full object-cover"
            width={1200}
            height={1600}
          />
          <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70 backdrop-blur-sm">
            HX lattice — wall thickness variable
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- concept -------------------------------- */

function Concept() {
  return (
    <section id="concept" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:px-16 lg:py-36">
        <div className="lg:col-span-5">
          <p className="kicker text-foreground/40">01 — Concept</p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Technical ceramic,
            <br />
            shaped into jewellery.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-4 lg:col-start-7">
          <p>
            Alumina — Al₂O₃ — belongs to the family of engineering ceramics used in
            machine components, medical technology and industrial tooling. Not a
            craft clay, but a technical material: dense, hard and dimensionally
            precise after firing.
          </p>
          <p>
            Additive manufacturing produces geometries that casting or carving
            cannot: open cellular lattices, honeycomb structures, interlocking
            modules — with walls a fraction of a millimetre thin.
          </p>
          <p className="font-display text-lg font-medium text-foreground">
            The result is not decorated metal. It is structure itself, made
            wearable.
          </p>
        </div>
        <div className="lg:col-span-2 lg:col-start-11 lg:pt-2">
          <ul className="space-y-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            <li className="border-t border-border pt-4">Material</li>
            <li className="border-t border-border pt-4">Geometry</li>
            <li className="border-t border-border pt-4">Process</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- material ------------------------------- */

const materialProps = [
  {
    id: "M-01",
    title: "Hardness",
    body: "Polycrystalline alumina is extremely hard and keeps crisp edges and thin walls through everyday wear.",
  },
  {
    id: "M-02",
    title: "Thermal stability",
    body: "The material is fired at temperatures far beyond anything it will encounter on the body — and it shows.",
  },
  {
    id: "M-03",
    title: "Chemical inertness",
    body: "Unaffected by water, sweat and everyday chemicals; the surface does not oxidize or tarnish.",
  },
  {
    id: "M-04",
    title: "Skin-friendly",
    body: "Alumina is a biocompatible engineering ceramic, long established in medical technology.",
  },
  {
    id: "M-05",
    title: "Matte surface",
    body: "An unglazed, light-scattering white that reads as mineral rather than glazed or metallic.",
  },
];

function Material() {
  return (
    <section id="material" className="scroll-mt-20 border-b border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-5 py-24 sm:px-8 lg:px-16 lg:py-36">
          <p className="kicker text-background/40">02 — Material</p>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Alumina
            <span className="text-accent"> / </span>Al₂O₃
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-background/60">
            The same class of material as machine bearings and implant
            components — printed, fired and finished as jewellery. No plating,
            no coating: the colour and surface are the material itself.
          </p>
          <dl className="mt-14">
            {materialProps.map((p) => (
              <div
                key={p.id}
                className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 border-t border-background/15 py-5 sm:grid-cols-[5rem_10rem_1fr] sm:items-baseline"
              >
                <dt className="font-mono text-[10px] tracking-[0.2em] text-accent">
                  {p.id}
                </dt>
                <dt className="font-display text-base font-medium">{p.title}</dt>
                <dd className="col-span-2 text-sm leading-relaxed text-background/55 sm:col-span-1">
                  {p.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative min-h-[50vh] border-t border-background/15 lg:min-h-0 lg:border-l lg:border-t-0">
          <img
            src={materialTexture}
            alt="Macro texture of a sintered alumina ceramic surface"
            loading="lazy"
            width={1200}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-foreground/85 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-background/70 backdrop-blur-sm">
            Sintered surface — as fired, unglazed
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- process ------------------------------- */

const processSteps = [
  { n: "01", title: "Digital design", body: "Parametric CAD models — cell size, wall thickness and module count as variables." },
  { n: "02", title: "3D printing", body: "Layer-by-layer printing of the green ceramic parts, full geometry at zero strength." },
  { n: "03", title: "Debinding", body: "Controlled thermal removal of the binder from the printed parts." },
  { n: "04", title: "Sintering", body: "High-temperature firing: the part densifies into polycrystalline alumina." },
  { n: "05", title: "Finishing", body: "Precision grinding and surface finishing to final dimension." },
  { n: "06", title: "Assembly", body: "Findings attached, every piece checked and numbered by hand." },
];

function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-16 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker text-foreground/40">03 — Process</p>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              From file to fired object.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Six stages between the digital model and the finished piece. Nothing
            is carved, cast or moulded.
          </p>
        </div>
        <ol className="mt-16 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <li
              key={s.n}
              className="group border-b border-border p-6 sm:border-r lg:p-8 [&:nth-child(2n)]:sm:border-r-0 [&:nth-child(3n)]:lg:border-r-0"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-accent">{s.n}</span>
                <span aria-hidden className="font-mono text-xs text-foreground/25 transition-colors group-hover:text-accent">
                  →
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-medium">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------- structure ------------------------------ */

const palette = [
  { label: "Cobalt", className: "bg-accent" },
  { label: "Oxide red", className: "bg-oxide" },
  { label: "Graphite", className: "bg-foreground" },
  { label: "Bone", className: "bg-muted" },
];

function Structure() {
  return (
    <section id="structure" className="scroll-mt-20 border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:px-16 lg:py-36">
        <div className="lg:col-span-5">
          <p className="kicker text-foreground/40">04 — Structure</p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Modular. Cellular.
            <br />
            Interlocking.
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
            The collection is built from hexagonal cells — a geometry that packs
            perfectly, repeats infinitely and carries load efficiently. Modules
            connect through engineered joints printed in place, without glue or
            solder.
          </p>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            Multimaterial editions pair sintered white alumina with selectively
            coloured ceramic elements. Colour is applied in the material, not on
            top of it.
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="border border-border bg-background p-8 sm:p-12">
            <div className="flex flex-wrap items-end gap-6">
              {palette.map((c) => (
                <div key={c.label} className="flex flex-col items-center gap-3">
                  <div
                    className={`h-16 w-[4.6rem] sm:h-20 sm:w-[5.7rem] ${c.className}`}
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-10 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
              Colour editions — placeholder palette
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- collection ------------------------------ */

const products = [
  {
    code: "HX-01",
    name: "Honeycomb Drops",
    body: "Triple-cell hexagon drop earrings on steel hooks.",
    price: "€240",
    img: productEarrings,
  },
  {
    code: "MD-02",
    name: "Modular Hex Ring",
    body: "Interlocking cellular band, printed in one piece.",
    price: "€180",
    img: productRing,
  },
  {
    code: "PX-03",
    name: "Cell Pendant",
    body: "Single hexagon with cut-out lattice on a fine steel chain.",
    price: "€210",
    img: productPendant,
  },
];

function Collection() {
  return (
    <section id="collection" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-16 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker text-foreground/40">05 — Collection</p>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              First series — hexagonal system.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Three conceptual pieces. Small series, numbered. Prices and
            availability are placeholders for this prototype.
          </p>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((p, i) => (
            <article key={p.code} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 bg-background/90 px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-foreground/70">
                  {p.code}
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-medium">
                  {String(i + 1).padStart(2, "0")} — {p.name}
                </h3>
                <span className="shrink-0 font-mono text-sm">{p.price}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <button className="mt-5 w-full border border-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors hover:border-foreground hover:bg-foreground hover:text-background">
                Add to cart
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- journal ------------------------------- */

const journalEntries = [
  { id: "001", tag: "CAD", title: "Every piece begins as a parametric model", body: "Cell size, wall thickness, module count — variables, not drawings. The geometry is generated and refined in code." },
  { id: "002", tag: "Prototypes", title: "Testing scale and weight", body: "First prints in resin and low-fired clay to judge scale, weight and how each module moves on the body." },
  { id: "003", tag: "Printing", title: "Green parts, fragile as chalk", body: "The parts come off the printer with full geometry and zero strength — handled like wet paper." },
  { id: "004", tag: "Firing", title: "The kiln does the material", body: "Binder leaves, crystals grow, the part shrinks by a predictable margin. What emerges is dense polycrystalline alumina." },
  { id: "005", tag: "Finished pieces", title: "Ground, checked, numbered", body: "Finishing, assembly, inspection. Small series — each piece carries its edition number." },
];

function Journal() {
  return (
    <section id="journal" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative min-h-[50vh] lg:min-h-0 lg:border-r lg:border-border">
          <img
            src={journalKiln}
            alt="Ceramic jewellery components on a kiln shelf during firing"
            loading="lazy"
            width={1200}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70 backdrop-blur-sm">
            Kiln — sintering run, in progress
          </div>
        </div>
        <div className="px-5 py-24 sm:px-8 lg:px-16 lg:py-36">
          <p className="kicker text-foreground/40">06 — Journal</p>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Development as part of the brand.
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            CAD → prototypes → printing → firing → finished pieces. The path from
            model to object is documented openly.
          </p>
          <ol className="mt-14">
            {journalEntries.map((e) => (
              <li key={e.id} className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-border py-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
                  {e.id}
                  <span className="mt-2 block text-foreground/30">{e.tag}</span>
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- footer -------------------------------- */

function Footer() {
  const columns = [
    {
      title: "Explore",
      links: [
        { label: "Collection", href: "#collection" },
        { label: "Material", href: "#material" },
        { label: "Process", href: "#process" },
        { label: "Journal", href: "#journal" },
      ],
    },
    {
      title: "Studio",
      links: [
        { label: "About", href: "#concept" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Elsewhere",
      links: [
        { label: "Instagram", href: "#" },
        { label: "Cart (0)", href: "#collection" },
      ],
    },
  ];
  return (
    <footer id="contact" className="scroll-mt-20 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl font-bold tracking-tight">
              OXID<span className="text-accent">.</span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/55">
              Additively manufactured technical ceramic jewellery. Designed and
              produced as engineered structures for the body.
            </p>
            <a
              href="mailto:studio@example.com"
              className="mt-8 inline-block border border-background/25 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors hover:border-background hover:bg-background hover:text-foreground"
            >
              studio@example.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-background/40">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-background/70 transition-colors hover:text-background">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-3 border-t border-background/15 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-background/35 sm:flex-row sm:justify-between">
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
        <Material />
        <Process />
        <Structure />
        <Collection />
        <Journal />
      </main>
      <Footer />
    </div>
  );
}
