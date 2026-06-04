"use client";
import { useState } from "react";
import { useCursor, CursorElements, CaseNav, CaseContact, CaseFooter, Lightbox } from "@/components/CaseShell";

const f = { fontFamily: "'Space Grotesk', sans-serif" } as const;
const m = { fontFamily: "'DM Mono', monospace" } as const;
const s = { fontFamily: "'Unbounded', sans-serif" } as const;

const SCREENS = {
  hero:       "/czysto_hero.png",
  advantages: "/czysto_advantages.png",
  included:   "/czysto_included.png",
  pricing:    "/czysto_pricing.png",
  equipment:  "/czysto_equipment.png",
  contact:    "/czysto_contact.png",
};

function Divider() {
  return <div style={{ height: "1px", background: "rgba(240,244,241,0.08)", margin: "80px 0" }} />;
}

function Label({ n, text }: { n: string; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "48px" }}>
      <span style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em" }}>{n} / {text}</span>
      <div style={{ flex: 1, height: "1px", background: "rgba(240,244,241,0.08)" }} />
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ border: "1px solid rgba(26,255,110,0.3)", borderRadius: "4px", padding: "4px 12px", ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.1em" }}>
      {children}
    </span>
  );
}

/* Full-width screenshot with subtle frame */
function Screenshot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(240,244,241,0.08)", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
        <img src={src} alt={alt} className="img-loaded lb" style={{ width: "100%", display: "block", cursor: "zoom-in" }} />
      </div>
      {caption && <span style={{ ...m, fontSize: "11px", color: "rgba(240,244,241,0.3)", textAlign: "center", letterSpacing: "0.06em" }}>{caption}</span>}
    </div>
  );
}

export default function CzystoCase() {
  const { cursorRef, ringRef, hovered, setHovered } = useCursor();

  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  return (
    <>
      <CursorElements cursorRef={cursorRef} ringRef={ringRef} hovered={hovered} />
      <Lightbox />

      <main style={{ background: "#050a06", minHeight: "100vh", overflowX: "hidden" }}>

        <CaseNav onEnter={onEnter} onLeave={onLeave} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 48px 120px" }}>

          {/* HERO */}
          <div style={{ marginBottom: "72px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "28px", height: "1px", background: "#1aff6e" }} />
              <span style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em" }}>COMMERCIAL PROJECT · 2026</span>
            </div>
            <h1 style={{ ...s, fontWeight: 800, fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#f0f4f1", marginBottom: "24px" }}>
              Czysto Cleaner —<br />
              <span style={{ background: "linear-gradient(90deg,#fff 0%,#1aff6e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Website</span><br />
              End-to-End
            </h1>
            <p style={{ ...f, fontSize: "18px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", maxWidth: "560px", marginBottom: "32px" }}>
              A complete commercial website for a professional upholstery cleaning service in Warsaw — designed, built, and delivered as a ready-to-launch product.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
              {["Web Design", "Development", "Next.js", "Commercial", "PL / RU / EN"].map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            <a href="https://czysto-cleaner.pl" target="_blank" rel="noreferrer" onMouseEnter={onEnter} onMouseLeave={onLeave}
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid rgba(26,255,110,0.4)", borderRadius: "4px", padding: "12px 20px", ...m, fontSize: "12px", color: "#1aff6e", textDecoration: "none", letterSpacing: "0.1em", transition: "background 0.2s" }}
              onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.08)")}
              onMouseOut={e => (e.currentTarget.style.background = "transparent")}
            >↗ VISIT LIVE SITE — czysto-cleaner.pl</a>
          </div>

          {/* HERO SCREENSHOT */}
          <Screenshot src={SCREENS.hero} alt="Czysto Cleaner — Hero" caption="Hero section" />

          <Divider />

          {/* OVERVIEW */}
          <Label n="01" text="OVERVIEW" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", marginBottom: "60px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                Czysto Cleaner is a professional deep cleaning service based in Warsaw, specialising in sofas, mattresses, and upholstered furniture. The client needed a complete web presence — from zero to live.
              </p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                I handled the entire project end-to-end: UI/UX design, frontend development with Next.js, multilingual content (Polish, Russian, English), SEO setup, and deployment. The client received a fully working product ready to take orders.
              </p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                The design language is clean and trustworthy — white backgrounds, fresh green accents, and clear information hierarchy that guides visitors toward booking.
              </p>
            </div>
            <div>
              {[
                ["Client", "Czysto Cleaner"],
                ["Platform", "Web (Desktop + Mobile)"],
                ["Role", "Designer + Developer"],
                ["Stack", "Next.js, TypeScript, CSS"],
                ["Languages", "Polish, Russian, English"],
                ["Year", "2026"],
                ["Status", "Live ↗"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid rgba(240,244,241,0.07)" }}>
                  <span style={{ ...m, fontSize: "11px", color: "rgba(240,244,241,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
                  <span style={{ ...f, fontSize: "15px", color: "#f0f4f1", fontWeight: 600 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* DESIGN DECISIONS */}
          <Label n="02" text="DESIGN DECISIONS" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)", marginBottom: "64px" }}>
            {[
              { icon: "🤍", title: "Clean & trustworthy", desc: "White background with green accents. Service businesses need trust at first glance — no clutter, no distractions." },
              { icon: "🌍", title: "Trilingual from day one", desc: "Warsaw has a large Russian-speaking community. The site supports PL / RU / EN with a simple language switcher in the nav." },
              { icon: "📱", title: "Mobile-first layout", desc: "Most local service bookings happen on phone. Every section was designed for mobile first, then adapted for desktop." },
              { icon: "⚡", title: "CTA in every section", desc: "Each section ends with a booking action — scroll depth shouldn't matter. The client should always be one tap away." },
              { icon: "🎥", title: "Video for equipment", desc: "Instead of just listing machine specs, we embedded short videos showing Kirby, Sabrina and Karcher in action. Trust through proof." },
              { icon: "🎁", title: "Promo banner logic", desc: "The free window cleaning gift at 1000 zł is surfaced as an orange banner right after the services list — right when the decision happens." },
            ].map(item => (
              <div key={item.title} style={{ background: "#050a06", padding: "32px 28px", transition: "background 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
                onMouseOut={e => (e.currentTarget.style.background = "#050a06")}
              >
                <div style={{ fontSize: "24px", marginBottom: "14px" }}>{item.icon}</div>
                <h3 style={{ ...s, fontWeight: 800, fontSize: "17px", color: "#f0f4f1", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ ...f, fontSize: "13px", lineHeight: "1.65", color: "rgba(240,244,241,0.45)" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ADVANTAGES SCREENSHOT */}
          <Screenshot src={SCREENS.advantages} alt="Nasze zalety" caption="Advantages section — 6 benefit cards" />

          <Divider />

          {/* SECTIONS BREAKDOWN */}
          <Label n="03" text="SECTIONS" />

          {/* Services */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "72px" }}>
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>SECTION 01</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>What&apos;s included</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
                The service breakdown is shown with a real process photo on the left and a clean checklist on the right — 3-stage deep cleaning, steam disinfection, stain removal, professional drying.
              </p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
                The orange gift banner below creates a natural upsell moment — free window cleaning for orders over 1000 zł.
              </p>
            </div>
            <Screenshot src={SCREENS.included} alt="Co wchodzi w skład usługi" />
          </div>

          {/* Pricing */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "72px" }}>
            <Screenshot src={SCREENS.pricing} alt="Cennik" />
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>SECTION 02</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>Transparent pricing</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
                Pricing is split into two clear cards — Sofas and Mattresses. Green price values stand out against the light card background, making scanning instant.
              </p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
                A small note about custom pricing for additional items keeps expectations honest without creating friction.
              </p>
            </div>
          </div>

          {/* Equipment */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "72px" }}>
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>SECTION 03</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>Equipment & guarantees</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
                4 equipment cards (Kirby, Santoemma Sabrina, Karcher, Raypath) each with key specs — each paired with a video demo. Showing the actual machines in action builds credibility far better than copy alone.
              </p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
                Below: 3 guarantee icons with OC insurance, property safety, and certified equipment — standard trust signals for a service business.
              </p>
            </div>
            <Screenshot src={SCREENS.equipment} alt="Sprzęt i gwarancje" />
          </div>

          {/* Contact */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <Screenshot src={SCREENS.contact} alt="Kontakt" />
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>SECTION 04</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>Contact — green gradient CTA</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
                The footer CTA section uses a bold green-to-teal gradient to stand out from the rest of the page. Three contact options: phone, WhatsApp, and email — covering all preferred contact methods of the target audience.
              </p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
                &quot;Working daily 8:00&ndash;20:00, specialist dispatched same day&quot; — these two lines remove the last objection before booking.
              </p>
            </div>
          </div>

          <Divider />

          {/* RESULT */}
          <Label n="04" text="RESULT" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                This was my first fully commercial end-to-end project — from brief to live production website. I handled design and development simultaneously, which forced me to think in systems from day one.
              </p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                Building a multilingual site taught me how to structure content and routing cleanly, and how to keep the codebase maintainable when the same UI needs to render in 3 languages.
              </p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                The client received a complete, deployed product — no handoff friction, no separate developer needed. That&apos;s the value of owning the full stack.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)" }}>
              {[
                ["01", "Commercial client"],
                ["3", "Languages"],
                ["6", "Page sections"],
                ["∞", "Cups of tea"],
              ].map(([n, l]) => (
                <div key={l} style={{ background: "#050a06", padding: "32px 24px", textAlign: "center" }}>
                  <div style={{ ...s, fontWeight: 800, fontSize: "44px", color: "#1aff6e", lineHeight: 1, marginBottom: "8px" }}>{n}</div>
                  <div style={{ ...m, fontSize: "10px", color: "rgba(240,244,241,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <Divider />

        </div>
        <CaseContact onEnter={onEnter} onLeave={onLeave} />
        <CaseFooter prevHref="/works/lectra" prevLabel="LECTRA" nextHref="/works/rentease" nextLabel="RENTEASE" onEnter={onEnter} onLeave={onLeave} />
      </main>
    </>
  );
}
