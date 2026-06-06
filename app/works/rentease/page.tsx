"use client";
import { useState } from "react";
import { useCursor, CursorElements, CaseNav, CaseContact, CaseFooter, Lightbox } from "@/components/CaseShell";

const f = { fontFamily: "'Space Grotesk', sans-serif" } as const;
const m = { fontFamily: "'DM Mono', monospace" } as const;
const s = { fontFamily: "'Unbounded', sans-serif" } as const;

const SCREENS = {
  main:          "/rentease_main.png",
  location:      "/rentease_location.png",
  auth:          "/rentease_auth.png",
  calEmpty:      "/rentease_calendar_empty.png",
  calStart:      "/rentease_calendar_start.png",
  calRange:      "/rentease_calendar_range.png",
};

function Divider() {
  return <div className="reveal" style={{ height: "1px", background: "rgba(240,244,241,0.08)", margin: "80px 0" }} />;
}
function Label({ n, text }: { n: string; text: string }) {
  return (
    <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "48px" }}>
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
function Shot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(240,244,241,0.08)", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
        <img src={src} alt={alt} className="img-loaded lb" style={{ width: "100%", display: "block", cursor: "zoom-in" }} />
      </div>
      {caption && <span style={{ ...m, fontSize: "11px", color: "rgba(240,244,241,0.3)", textAlign: "center", letterSpacing: "0.06em" }}>{caption}</span>}
    </div>
  );
}

export default function RentEaseCase() {
  const { cursorRef, ringRef, hovered, setHovered } = useCursor();

  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  return (
    <>
      <CursorElements cursorRef={cursorRef} ringRef={ringRef} hovered={hovered} />
      <Lightbox />

      <main style={{ background: "#050a06", minHeight: "100vh", overflowX: "hidden" }}>

        <CaseNav onEnter={onEnter} onLeave={onLeave} />

        <style>{`
          @media (max-width: 768px) {
            .re-inner { padding: 120px 20px 80px !important; }
            .re-grid  { grid-template-columns: 1fr !important; gap: 40px !important; }
            .re-3col  { grid-template-columns: 1fr !important; }
            .re-3shot { grid-template-columns: 1fr !important; gap: 24px !important; }
          }
        `}</style>

        <div className="re-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 48px 120px" }}>

          {/* HERO */}
          <div style={{ marginBottom: "72px" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "28px", height: "1px", background: "#1aff6e" }} />
              <span style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em" }}>ACADEMIC PROJECT · 2025 — IN PROGRESS</span>
            </div>
            <h1 className="reveal" style={{ ...s, fontWeight: 800, fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#f0f4f1", marginBottom: "24px" }}>
              RentEase —<br />
              <span style={{ background: "linear-gradient(90deg,#fff 0%,#1aff6e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Booking</span><br />
              Platform
            </h1>
            <p className="reveal" style={{ ...f, fontSize: "18px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", maxWidth: "560px", marginBottom: "32px" }}>
              A booking platform in the style of Airbnb — designed as a university project. Clean light UI, smart search with location suggestions, date range picker, and auth flow.
            </p>
            <div className="reveal" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
              {["Web Design", "UI/UX", "Booking Platform", "Academic", "In Progress"].map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            {/* In progress badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ffcc00", animation: "blink 2s infinite" }} />
              <span style={{ ...m, fontSize: "11px", color: "rgba(240,244,241,0.4)", letterSpacing: "0.1em" }}>Work in progress — more screens coming</span>
            </div>
          </div>

          {/* HERO SCREENSHOT */}
          <Shot src={SCREENS.main} alt="RentEase — main screen" caption="Main screen — hero search + Popular Places" />

          <Divider />

          {/* OVERVIEW */}
          <Label n="01" text="OVERVIEW" />
          <div className="re-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", marginBottom: "0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                RentEase is a university design project — a booking platform inspired by Airbnb. The goal was to design a full end-to-end booking experience: search, date selection, auth, and property cards.
              </p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                The design language is deliberately clean and light — white surfaces, blue accents, subtle shadows. It needed to feel trustworthy and familiar to users who already book accommodation online.
              </p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                The project is still in progress — the screens here cover the core booking funnel. More flows (property detail, booking confirmation, host dashboard) are planned.
              </p>
            </div>
            <div>
              {[
                ["Type", "Academic Project"],
                ["Role", "UI/UX Designer (solo)"],
                ["Platform", "Web — Desktop"],
                ["Stack", "Figma"],
                ["Year", "2025"],
                ["Status", "🟡 In progress"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid rgba(240,244,241,0.07)" }}>
                  <span style={{ ...m, fontSize: "11px", color: "rgba(240,244,241,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
                  <span style={{ ...f, fontSize: "15px", color: "#f0f4f1", fontWeight: 600 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* SCREENS */}
          <Label n="02" text="SCREENS" />

          {/* Search + Location */}
          <div className="re-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "72px" }}>
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>SCREEN 01</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>Smart search bar</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
                The search bar combines three inputs — Location, Check-in &amp; Check-out, and Guests — into a single unified pill. This mirrors the Airbnb pattern users already know, reducing friction.
              </p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
                Clicking Location reveals a dropdown with suggested destinations — Nearby, Bali, Paris, Zakopane — each with location tags like Beach, Tropical, Romantic. Context before the user even types.
              </p>
            </div>
            <Shot src={SCREENS.location} alt="Location dropdown" caption="Location dropdown with suggested destinations" />
          </div>

          {/* Calendar */}
          <div className="re-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "72px" }}>
            <Shot src={SCREENS.calRange} alt="Date range selected" caption="Date range picker — April 29 → May 5 selected" />
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>SCREEN 02</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>Date range picker — 3 states</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
                The date picker shows two months side-by-side for a clear view of the booking window. It has three distinct states: empty, start date selected, and full range selected.
              </p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
                The selected range highlights in blue between the two dates — a pattern familiar from every major booking platform, but implemented cleanly with no visual clutter.
              </p>
            </div>
          </div>

          {/* Calendar states row */}
          <div className="re-3shot" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginBottom: "72px" }}>
            <Shot src={SCREENS.calEmpty} alt="Calendar empty" caption="State 1 — empty" />
            <Shot src={SCREENS.calStart} alt="Calendar start selected" caption="State 2 — start date" />
            <Shot src={SCREENS.calRange} alt="Calendar range selected" caption="State 3 — range selected" />
          </div>

          {/* Auth */}
          <div className="re-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>SCREEN 03</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>Auth modal — log in or sign up</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
                Authentication is handled via a centered modal overlay — keeping the user in context rather than navigating to a separate page. One input for phone or email, then Google and Apple SSO.
              </p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
                The modal is intentionally minimal — no distractions, no unnecessary fields. The background is dimmed but still visible, reinforcing that auth is a quick step, not a detour.
              </p>
            </div>
            <Shot src={SCREENS.auth} alt="Auth modal" caption="Auth modal — log in or sign up" />
          </div>

          <Divider />

          {/* DESIGN DECISIONS */}
          <Label n="03" text="DESIGN DECISIONS" />
          <div className="re-3col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)", marginBottom: "0" }}>
            {[
              { icon: "🤍", title: "Light UI by choice", desc: "Airbnb, Booking.com, and every major travel platform uses light UI. It feels airy, open, and trustworthy — right for accommodation browsing." },
              { icon: "🔵", title: "Blue as the only accent", desc: "Blue signals interactivity and trust. Used only for primary CTAs and active states — Log in button, search icon, selected dates. Nothing else." },
              { icon: "🗂️", title: "Unified search pill", desc: "Three separate inputs merged into one horizontal bar. Reduces visual complexity and matches the mental model users already have from Airbnb." },
              { icon: "📍", title: "Suggested destinations UX", desc: "Instead of an empty dropdown, users see curated destinations with tags. Reduces decision paralysis and makes the search feel helpful, not blank." },
              { icon: "📅", title: "Two-month calendar", desc: "Showing April and May simultaneously lets users see their full booking window at once. No need to navigate between months for short trips." },
              { icon: "🔐", title: "Modal auth, not page", desc: "Keeping the background visible during auth reduces the sense of leaving the main flow. The user stays oriented and can dismiss easily." },
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

          <Divider />

          {/* RESULT */}
          <Label n="04" text="RESULT SO FAR" />
          <div className="re-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                RentEase is my first experience designing a complex product flow from scratch — search, discovery, date selection, and auth as a connected system, not isolated screens.
              </p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                The challenge was making familiar patterns feel fresh and purposeful — not just copying Airbnb, but understanding why every interaction works the way it does.
              </p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                More screens are in progress: property detail page, booking confirmation, host profile, and the host dashboard.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)" }}>
              {[["6", "Screens done"], ["3", "Interactive states"], ["1", "Full funnel"], ["∞", "To come"]].map(([n, l]) => (
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
        <CaseFooter prevHref="/works/czysto" prevLabel="CZYSTO CLEANER" nextHref="/works/vimeworld" nextLabel="VIMEWORLD" onEnter={onEnter} onLeave={onLeave} />
      </main>
    </>
  );
}
