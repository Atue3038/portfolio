"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const LINKS = {
  telegram: "https://t.me/atuedesign",
  instagram: "https://www.instagram.com/atue_design?igsh=ZmRnbXFuNWh6ZWhj&utm_source=qr",
  gmail: "mailto:atue3038@gmail.com",
};

// ─── Figma style guide assets (still valid) ──────────────────────────────────
const IMG_HERO    = "https://www.figma.com/api/mcp/asset/72b8cbf0-89a3-4bf2-9f83-6b001727c2b4";
const IMG_SKETCH  = "https://www.figma.com/api/mcp/asset/f41ea73b-268c-4e77-821b-6366b5e4d915";
const IMG_UX_FLOW = "https://www.figma.com/api/mcp/asset/97f61097-48b8-42a4-9c58-0a713737b9d5";
const COLORS = [
  "https://www.figma.com/api/mcp/asset/cdd7a95c-84a2-412e-9564-4a5c2bb8759d",
  "https://www.figma.com/api/mcp/asset/374b9ebf-da1b-4f52-a31c-158baa2ddfb5",
  "https://www.figma.com/api/mcp/asset/da84cb79-fe9d-4292-b051-0548469815ec",
  "https://www.figma.com/api/mcp/asset/b8390bbc-d230-4fc7-8a94-0b8d8c8dc562",
  "https://www.figma.com/api/mcp/asset/56ed0caf-71f1-4e1f-a857-ec9046a764c6",
];
const BUTTONS = "https://www.figma.com/api/mcp/asset/37457c5e-3b93-4356-b432-c9314d5f78be";
const ICONS_1 = "https://www.figma.com/api/mcp/asset/a527cf3d-a216-4c19-a6aa-e546f880e003";
const ICONS_2 = "https://www.figma.com/api/mcp/asset/df06d388-fdf3-4ed0-965b-95c3cf5204a8";
const STATES  = "https://www.figma.com/api/mcp/asset/96534af3-cf35-4524-aee3-302e07740ccc";

// ─── Real screenshots — add these to /public/ ────────────────────────────────
const IMG_MENU  = "/vimeworld_menu.png";
const IMG_CASES = "/vimeworld_cases.png";
const IMG_PRIVS = "/vimeworld_privs.png";
const IMG_KITS  = "/vimeworld_kits.png";
const IMG_SHOP  = "/vimeworld_shop.png";
const IMG_CART  = "/vimeworld_cart.png";
const IMG_WARPS = "/vimeworld_warps.png";

export default function VimeworldCase() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
      setTimeout(() => {
        if (ringRef.current) {
          ringRef.current.style.left = e.clientX + "px";
          ringRef.current.style.top  = e.clientY + "px";
        }
      }, 80);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* cursor */}
      <div ref={cursorRef} className="cursor"
        style={{ transform: `translate(-50%,-50%) scale(${hovered ? 3 : 1})`, background: hovered ? "transparent" : "var(--green)", border: hovered ? "1px solid var(--green)" : "none" }} />
      <div ref={ringRef} className="cursor-ring"
        style={{ width: hovered ? 56 : 36, height: hovered ? 56 : 36 }} />

      <style>{`
        /* ── section divider ── */
        .case-divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(26,255,110,0.2), transparent);
          margin: 100px 0;
        }
        /* ── section label ── */
        .case-label {
          display: flex; align-items: center; gap: 16px; margin-bottom: 48px;
        }
        .case-label span { font-family: 'DM Mono', monospace; font-size: 11px; color: var(--green); letter-spacing: 0.15em; }
        .case-label div  { flex: 1; height: 1px; background: var(--border); }
        /* ── image frame ── */
        .case-img { width: 100%; display: block; border-radius: 12px; border: 1px solid var(--border); }
        /* ── card ── */
        .case-card {
          padding: 32px; border-radius: 2px; border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          display: flex; flex-direction: column; gap: 20px;
        }
        /* ── screen number badge ── */
        .screen-badge {
          font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.1em;
          color: var(--green); background: rgba(5,10,6,0.9);
          border: 1px solid rgba(26,255,110,0.3); border-radius: 6px;
          padding: 4px 10px; display: inline-block; margin-bottom: 16px;
        }
        /* ── alt-row responsive ── */
        @media (max-width: 900px) {
          .alt-row { flex-direction: column !important; }
          .alt-row-img { flex: none !important; width: 100% !important; margin: 0 !important; }
        }
        @media (max-width: 768px) {
          .case-section { padding: 80px 20px 0 !important; }
          .case-hero-title { font-size: 40px !important; }
          .case-meta-grid { grid-template-columns: 1fr 1fr !important; }
          .case-two-col { grid-template-columns: 1fr !important; }
          .case-screens-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden" }}>

        {/* ── NAV ── */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          padding: "20px 48px", display: "flex", justifyContent: "space-between",
          alignItems: "center", backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}>
          <Link href="/" onMouseEnter={onEnter} onMouseLeave={onLeave}
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--green)", letterSpacing: "0.1em", textDecoration: "none" }}>
            OK.DESIGN
          </Link>
          <div style={{ display: "flex", gap: "32px" }}>
            {([["Works", "/#works"], ["About", "/#about"], ["Contact", "/#contact"]] as [string,string][]).map(([l, h]) => (
              <a key={l} href={h} onMouseEnter={onEnter} onMouseLeave={onLeave}
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--white)")}
                onMouseOut={e  => (e.currentTarget.style.color = "var(--muted)")}
              >{l}</a>
            ))}
          </div>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>
            <span style={{ animation: "blink 1.2s infinite", color: "var(--green)" }}>●</span>&nbsp;Available for work
          </span>
        </nav>

        {/* ── HERO ── */}
        <section className="case-section" style={{ padding: "160px 48px 0", maxWidth: "1200px", margin: "0 auto" }}>

          {/* back link */}
          <Link href="/#works" onMouseEnter={onEnter} onMouseLeave={onLeave}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.08em", marginBottom: "64px", transition: "color 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "var(--green)")}
            onMouseOut={e  => (e.currentTarget.style.color = "var(--muted)")}
          >← BACK TO WORKS</Link>

          {/* tags */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
            {["Game UI", "2025", "Client Project"].map(t => (
              <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.1em", color: "var(--green)", border: "1px solid rgba(26,255,110,0.3)", borderRadius: "4px", padding: "4px 10px" }}>{t}</span>
            ))}
          </div>

          {/* title */}
          <h1 className="case-hero-title" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 6vw, 80px)", color: "var(--white)", letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 28px", maxWidth: "800px" }}>
            VimeWorld —<br />
            <span style={{ color: "var(--green)" }}>ESC Menu</span> Redesign
          </h1>

          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", color: "var(--muted)", maxWidth: "540px", lineHeight: "1.7", margin: "0 0 64px" }}>
            Full UI/UX redesign of the in-game Escape menu for VimeWorld's Pixelmon Ultimate server — from UX flow and player scenarios to final visual interface.
          </p>

          {/* meta pills */}
          <div className="case-meta-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", background: "var(--border)", marginBottom: "64px" }}>
            {([["Role", "UI/UX Designer"], ["Client", "VimeWorld"], ["Year", "2025"], ["Screens", "7+"]] as [string,string][]).map(([label, val]) => (
              <div key={label} style={{ background: "var(--bg)", padding: "24px 28px" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.1em", marginBottom: "8px" }}>{label}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "20px", color: "var(--white)", letterSpacing: "-0.01em" }}>{val}</div>
              </div>
            ))}
          </div>

          {/* hero image */}
          <img src={IMG_HERO} alt="VimeWorld ESC Menu" style={{ width: "100%", display: "block", borderRadius: "4px", border: "1px solid var(--border)" }} />
        </section>

        {/* ── OVERVIEW ── */}
        <section style={{ padding: "0 48px", maxWidth: "1200px", margin: "0 auto" }}>
          <div className="case-divider" />

          <div className="case-label">
            <span>01 / OVERVIEW</span><div />
          </div>

          <div className="case-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--white)", letterSpacing: "-0.02em", margin: 0 }}>
                Project Overview
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.75", margin: 0 }}>
                The standard Minecraft ESC menu gives players nothing — no profile, no stats, no shop. For a feature-rich server like Pixelmon Ultimate that's a dead end every time someone pauses.
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.75", margin: 0 }}>
                I redesigned the entire system: UX flow, player navigation scenarios, and a modern interface that surfaces quests, rewards, economy, and social features — all from a single screen.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--white)", letterSpacing: "-0.02em", margin: 0 }}>
                Problem & Goals
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  ["×", "No player profile, stats, or balance visible"],
                  ["×", "No access to quests, shop, or daily bonuses"],
                  ["+", "Single screen for all key server features"],
                  ["+", "Modern neon UI, fewer clicks, zero dead ends"],
                ].map(([icon, text], i) => (
                  <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "14px", color: i < 2 ? "rgba(255,80,80,0.6)" : "var(--green)", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.65", margin: 0 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── UX STRUCTURE ── */}
        <section style={{ padding: "0 48px", maxWidth: "1200px", margin: "0 auto" }}>
          <div className="case-divider" />

          <div className="case-label">
            <span>02 / UX STRUCTURE</span><div />
          </div>

          <div className="case-two-col" style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "80px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--white)", letterSpacing: "-0.02em", margin: 0 }}>
                Sketches & Flow
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.75", margin: 0 }}>
                Started with rough sketches to define the left/right split, block hierarchy, and card structure. Goal: minimise cognitive load before touching Figma.
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.75", margin: 0 }}>
                The flow mirrors how players actually move through the server — from main screen to action, with no dead ends or unnecessary depth.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src={IMG_SKETCH}  alt="Sketch"   className="case-img" />
              <img src={IMG_UX_FLOW} alt="UX Flow"  className="case-img" />
            </div>
          </div>
        </section>

        {/* ── STYLE GUIDE ── */}
        <section style={{ padding: "0 48px", maxWidth: "1200px", margin: "0 auto" }}>
          <div className="case-divider" />

          <div className="case-label">
            <span>03 / UI STYLE GUIDE</span><div />
          </div>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--white)", letterSpacing: "-0.02em", margin: "0 0 48px" }}>
            Colors
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", background: "var(--border)", marginBottom: "2px" }}>
            {COLORS.slice(0,3).map((src, i) => (
              <img key={i} src={src} alt="" style={{ width: "100%", display: "block" }} />
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "var(--border)", maxWidth: "66%", marginBottom: "80px" }}>
            {COLORS.slice(3).map((src, i) => (
              <img key={i} src={src} alt="" style={{ width: "100%", display: "block" }} />
            ))}
          </div>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--white)", letterSpacing: "-0.02em", margin: "0 0 32px" }}>
            Typography — Nexa Bold
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", background: "var(--border)", marginBottom: "80px" }}>
            {([["Headings", "36px"], ["Body text", "18px"], ["Buttons", "20px"], ["UI Labels", "24px"]] as [string,string][]).map(([label, size]) => (
              <div key={label} style={{ background: "var(--bg)", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</span>
                <span style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: size, color: "var(--white)", lineHeight: 1.2 }}>Hello</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--white)", letterSpacing: "-0.02em", margin: "0 0 32px" }}>
            Buttons
          </h2>
          <img src={BUTTONS} alt="Buttons" className="case-img" style={{ marginBottom: "80px" }} />

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--white)", letterSpacing: "-0.02em", margin: "0 0 32px" }}>
            Icons & Components
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "var(--border)", marginBottom: "80px" }}>
            <img src={ICONS_1} alt="Icons 1" style={{ width: "100%", display: "block" }} />
            <img src={ICONS_2} alt="Icons 2" style={{ width: "100%", display: "block" }} />
          </div>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--white)", letterSpacing: "-0.02em", margin: "0 0 32px" }}>
            Interaction States
          </h2>
          <div className="case-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginBottom: "32px" }}>
            {[
              ["Hover", "Icons slightly enlarge on hover — visual feedback that draws attention to interactive elements and improves click target perception."],
              ["Active", "A neon outline appears around the active icon or button, signalling the current section and maintaining visual consistency with the neon UI language."],
            ].map(([title, desc]) => (
              <div key={title} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--green)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{title} State</span>
                </div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.75", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <img src={STATES} alt="States" className="case-img" />
        </section>

        {/* ── SCREENS ── */}
        <section style={{ padding: "0 48px", maxWidth: "1200px", margin: "0 auto" }}>
          <div className="case-divider" />

          <div className="case-label">
            <span>04 / SCREENS</span><div />
          </div>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--white)", letterSpacing: "-0.02em", margin: "0 0 12px" }}>
            Designed Screens
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.7", margin: "0 0 64px", maxWidth: "540px" }}>
            Seven screens covering every section of the menu — from the main dashboard to cases, kits, shop, cart, privileges, and warps.
          </p>

          {/* 2-col grid */}
          <div className="case-screens-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "var(--border)", marginBottom: "2px" }}>
            {[
              [IMG_MENU,  "01", "Main Menu",   "Dashboard with quests, daily bonuses, server updates, guidebook, and social links. All key info without leaving pause."],
              [IMG_CASES, "02", "Cases",        "Split-panel layout — list on the left, drop pool and actions on the right. Rarity borders follow Pixelmon conventions."],
              [IMG_PRIVS, "03", "Privileges",  "Rank tiers with player skins as avatars. Duration selector, full benefit breakdown, Buy and Gift buttons."],
              [IMG_KITS,  "04", "Kits",         "Available / All toggle. Full inventory grid with a one-time-use warning before the player claims."],
              [IMG_SHOP,  "05", "Shop",         "Full store with search, category filters, currency toggle, and a scrollable 5-column item grid."],
              [IMG_CART,  "06", "Cart",         "Collected rewards and purchases in categorised rows. Each item shows quantity and a Claim button."],
            ].map(([src, num, title, desc]) => (
              <div key={num} style={{ background: "var(--bg)", padding: "0 0 28px" }}>
                <img src={src as string} alt={title as string} style={{ width: "100%", display: "block", marginBottom: "24px" }} />
                <div style={{ padding: "0 28px" }}>
                  <span className="screen-badge">{num}</span>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "20px", color: "var(--white)", letterSpacing: "-0.01em", margin: "0 0 10px" }}>{title as string}</h3>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "var(--muted)", lineHeight: "1.65", margin: 0 }}>{desc as string}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Warps — full width */}
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", padding: "0 0 28px" }}>
            <img src={IMG_WARPS} alt="Warps" style={{ width: "100%", display: "block", marginBottom: "24px" }} />
            <div style={{ padding: "0 28px" }}>
              <span className="screen-badge">07</span>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "20px", color: "var(--white)", letterSpacing: "-0.01em", margin: "0 0 10px" }}>Warps</h3>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "var(--muted)", lineHeight: "1.65", margin: 0 }}>
                Location cards with colour-coded borders per warp type — Shop, Arena, EVS, InfinityTower. Each card has a More Info button with a detail view and Teleport action.
              </p>
            </div>
          </div>
        </section>

        {/* ── ALTERNATING DEEP-DIVES ── */}
        <section style={{ padding: "0 48px", maxWidth: "1200px", margin: "0 auto" }}>
          <div className="case-divider" />

          <div className="case-label">
            <span>05 / DEEP DIVE</span><div />
          </div>

          {([
            [IMG_MENU,  "left",  "Main Screen — Dashboard Logic",
              "The main screen sets the UX hierarchy: top nav with icon buttons and player profile, then a four-column content area. Quests on the left, daily bonuses and guidebook in the centre, updates as a timeline, social links and settings on the right. Everything a player needs without leaving the pause screen."],
            [IMG_CASES, "right", "Cases — Split-Panel Pattern",
              "List and detail sit side by side so navigation and content are always visible. The drop pool grid uses rarity-coloured borders matching Pixelmon conventions — purple for legendary, cyan for rare, gold for uncommon. Price stays visible at all times so players can decide without extra clicks."],
            [IMG_PRIVS, "left",  "Privileges — Subscription Tiers",
              "Rank cards use player skins as avatars, making each tier immediately recognisable. The detail pane has a duration dropdown and tabbed benefit breakdown. A dedicated Gift button lets players purchase for others without leaving the interface."],
            [IMG_SHOP,  "right", "Shop — Searchable Item Store",
              "Currency toggle buttons sit next to search, letting players filter by what they can afford. Category sidebar keeps the 5-column grid manageable. Sort dropdown defaults to 'Default' with price-ordering options — minimal friction to find any item."],
          ] as [string, "left"|"right", string, string][]).map(([src, side, title, desc], i) => (
            <div key={i} className="alt-row" style={{ display: "flex", gap: "64px", alignItems: "center", marginBottom: "80px", flexDirection: side === "right" ? "row-reverse" : "row" }}>
              <div className="alt-row-img" style={{ flex: "0 0 58%" }}>
                <img src={src} alt={title} className="case-img" />
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.1em" }}>
                  {String(i + 1).padStart(2, "0")} / SCREEN
                </span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--white)", letterSpacing: "-0.02em", margin: 0, lineHeight: 1.2 }}>{title}</h3>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.75", margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ── RESULT ── */}
        <section style={{ padding: "0 48px", maxWidth: "1200px", margin: "0 auto" }}>
          <div className="case-divider" />

          <div className="case-label">
            <span>06 / RESULT</span><div />
          </div>

          <div className="case-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--white)", letterSpacing: "-0.02em", margin: 0 }}>
                Final Result
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.75", margin: 0 }}>
                Delivered a complete, production-ready interface — quests, economy, cases, kits, privileges, shop, and navigation unified into one cohesive system.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.75", margin: 0 }}>
                The project sharpened my skills in game UI pattern design and deepened my understanding of player interaction logic — how to reduce cognitive load in high-information interfaces while keeping the visual language exciting.
              </p>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: "100px 48px 120px", borderTop: "1px solid var(--border)", marginTop: "100px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "72px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>07 / CONTACT</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>
            <div className="case-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
              <div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "20px" }}>
                  Let&apos;s build something<br />
                  <span style={{ color: "var(--green)" }}>worth remembering.</span>
                </h2>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.7", maxWidth: "380px", margin: 0 }}>
                  Open to freelance, collaborations, and full-time roles.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "Telegram",  hint: "Fastest response", href: LINKS.telegram },
                  { label: "Instagram", hint: "Design updates",    href: LINKS.instagram },
                  { label: "Gmail",     hint: "For proposals",     href: LINKS.gmail },
                ].map(({ label, hint, href }) => (
                  <a key={label} href={href} target={label !== "Gmail" ? "_blank" : undefined} rel="noreferrer"
                    onMouseEnter={onEnter} onMouseLeave={onLeave}
                    className="liquid-border"
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 24px", textDecoration: "none", borderRadius: "2px", transition: "background 0.2s" }}
                    onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.05)")}
                    onMouseOut={e  => (e.currentTarget.style.background = "transparent")}
                  >
                    <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", color: "var(--white)" }}>{label}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>{hint}</span>
                      <span style={{ color: "var(--green)", fontSize: "18px" }}>→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Link href="/#works" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", transition: "color 0.2s" }}
              onMouseOver={e => (e.currentTarget.style.color = "var(--green)")}
              onMouseOut={e  => (e.currentTarget.style.color = "var(--muted)")}
            >← ALL WORKS</Link>
            <Link href="/works/lectra" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", transition: "color 0.2s" }}
              onMouseOver={e => (e.currentTarget.style.color = "var(--green)")}
              onMouseOut={e  => (e.currentTarget.style.color = "var(--muted)")}
            >NEXT: LECTRA →</Link>
          </div>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>© 2025 OLEKSII KLYMUSHKIN</span>
          <div style={{ display: "flex", gap: "24px" }}>
            {([["Insta", LINKS.instagram], ["Telegram", LINKS.telegram], ["Gmail", LINKS.gmail]] as [string,string][]).map(([l, href]) => (
              <a key={l} href={href} target={l !== "Gmail" ? "_blank" : undefined} rel="noreferrer"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--green)")}
                onMouseOut={e  => (e.currentTarget.style.color = "var(--muted)")}
              >{l}</a>
            ))}
          </div>
        </footer>

      </main>
    </>
  );
}
