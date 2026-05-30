"use client";
import Link from "next/link";

// ─── REAL SCREENSHOTS (place in /public/) ───────────────────────────────────
const IMG_MENU      = "/vimeworld_menu.png";
const IMG_CASES     = "/vimeworld_cases.png";
const IMG_PRIVS     = "/vimeworld_privs.png";
const IMG_KITS      = "/vimeworld_kits.png";
const IMG_SHOP      = "/vimeworld_shop.png";
const IMG_CART      = "/vimeworld_cart.png";
const IMG_WARPS     = "/vimeworld_warps.png";

// Figma assets (kept for Style Guide sections)
const IMG_HERO      = "https://www.figma.com/api/mcp/asset/72b8cbf0-89a3-4bf2-9f83-6b001727c2b4";
const IMG_SKETCH    = "https://www.figma.com/api/mcp/asset/f41ea73b-268c-4e77-821b-6366b5e4d915";
const IMG_UX_FLOW   = "https://www.figma.com/api/mcp/asset/97f61097-48b8-42a4-9c58-0a713737b9d5";
const COLORS = [
  "https://www.figma.com/api/mcp/asset/cdd7a95c-84a2-412e-9564-4a5c2bb8759d",
  "https://www.figma.com/api/mcp/asset/374b9ebf-da1b-4f52-a31c-158baa2ddfb5",
  "https://www.figma.com/api/mcp/asset/da84cb79-fe9d-4292-b051-0548469815ec",
  "https://www.figma.com/api/mcp/asset/b8390bbc-d230-4fc7-8a94-0b8d8c8dc562",
  "https://www.figma.com/api/mcp/asset/56ed0caf-71f1-4e1f-a857-ec9046a764c6",
];
const BUTTONS  = "https://www.figma.com/api/mcp/asset/37457c5e-3b93-4356-b432-c9314d5f78be";
const ICONS_1  = "https://www.figma.com/api/mcp/asset/a527cf3d-a216-4c19-a6aa-e546f880e003";
const ICONS_2  = "https://www.figma.com/api/mcp/asset/df06d388-fdf3-4ed0-965b-95c3cf5204a8";
const STATES   = "https://www.figma.com/api/mcp/asset/96534af3-cf35-4524-aee3-302e07740ccc";

// ─── TOKENS ──────────────────────────────────────────────────────────────────
const BG      = "#050a06";
const GREEN   = "#1aff6e";
const WHITE   = "#ffffff";
const MUTED   = "rgba(255,255,255,0.45)";
const BORDER  = "rgba(255,255,255,0.10)";
const SYNE    = "'Syne', sans-serif";
const GROTESK = "'Space Grotesk', sans-serif";
const MONO    = "'DM Mono', monospace";

// ─── MICRO COMPONENTS ────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontFamily: MONO, fontSize: "11px", letterSpacing: "0.12em",
      textTransform: "uppercase", color: GREEN,
      border: `1px solid ${GREEN}`, borderRadius: "4px",
      padding: "3px 10px", display: "inline-block",
    }}>{children}</span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontFamily: MONO, fontSize: "11px", letterSpacing: "0.12em",
      textTransform: "uppercase", color: MUTED, display: "block", marginBottom: "10px",
    }}>{children}</span>
  );
}

function H2({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <h2 style={{
      fontFamily: SYNE, fontWeight: 800, fontSize: "clamp(28px, 4vw, 42px)",
      color: WHITE, margin: "0 0 32px", lineHeight: 1.1,
      letterSpacing: "-0.02em",
    }}>
      {accent
        ? <><span style={{ color: GREEN }}>/ </span>{children}</>
        : children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{
      fontFamily: SYNE, fontWeight: 800, fontSize: "clamp(18px, 2.5vw, 24px)",
      color: WHITE, margin: "0 0 16px", letterSpacing: "-0.01em",
    }}>{children}</h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: GROTESK, fontSize: "16px", lineHeight: "1.75",
      color: "rgba(255,255,255,0.72)", margin: 0,
    }}>{children}</p>
  );
}

function Divider() {
  return (
    <div style={{
      width: "100%", height: "1px",
      background: "linear-gradient(90deg, transparent, rgba(26,255,110,0.25), transparent)",
      margin: "80px 0",
    }} />
  );
}

// ─── SCREENSHOT FRAME ────────────────────────────────────────────────────────
function Frame({ src, rounded = true }: { src: string; rounded?: boolean }) {
  return (
    <div style={{
      borderRadius: rounded ? "16px" : "0",
      overflow: "hidden",
      border: `1px solid ${BORDER}`,
      background: "rgba(255,255,255,0.03)",
      flexShrink: 0,
    }}>
      <img src={src} alt="" style={{ width: "100%", height: "auto", display: "block" }} />
    </div>
  );
}

// ─── STAT PILL ───────────────────────────────────────────────────────────────
function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: "4px",
      padding: "20px 28px",
      border: `1px solid ${BORDER}`,
      borderRadius: "12px",
      background: "rgba(255,255,255,0.03)",
    }}>
      <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED }}>{label}</span>
      <span style={{ fontFamily: SYNE, fontWeight: 800, fontSize: "22px", color: WHITE }}>{value}</span>
    </div>
  );
}

// ─── SCREEN CARD (main showcase) ─────────────────────────────────────────────
function ScreenCard({ src, title, desc, index }: { src: string; title: string; desc: string; index: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", top: "16px", left: "16px", zIndex: 2,
          fontFamily: MONO, fontSize: "11px", letterSpacing: "0.1em",
          color: GREEN, background: "rgba(5,10,6,0.85)",
          border: `1px solid rgba(26,255,110,0.3)`,
          borderRadius: "6px", padding: "4px 10px",
        }}>
          {String(index).padStart(2, "0")}
        </div>
        <Frame src={src} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <H3>{title}</H3>
        <Body>{desc}</Body>
      </div>
    </div>
  );
}

// ─── ALTERNATING ROW ─────────────────────────────────────────────────────────
function AltRow({
  src, title, desc, side, bleedEdge = false
}: {
  src: string; title: string; desc: string; side: "left" | "right"; bleedEdge?: boolean;
}) {
  const imgEl = (
    <div style={{
      flex: "0 0 58%",
      marginLeft: side === "left" && bleedEdge ? "-60px" : undefined,
      marginRight: side === "right" && bleedEdge ? "-60px" : undefined,
    }}>
      <Frame src={src} rounded={!bleedEdge} />
    </div>
  );

  const txtEl = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center", padding: "16px 0" }}>
      <Tag>Screen</Tag>
      <H3>{title}</H3>
      <Body>{desc}</Body>
    </div>
  );

  return (
    <div style={{
      display: "flex", gap: "48px", alignItems: "center",
      marginBottom: "56px",
    }}>
      {side === "left" ? <>{imgEl}{txtEl}</> : <>{txtEl}{imgEl}</>}
    </div>
  );
}

// ─── CONTACT BUTTON ──────────────────────────────────────────────────────────
function ContactBtn({ label, href, filled }: { label: string; href: string; filled?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener" style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      padding: "14px 32px",
      fontFamily: GROTESK, fontWeight: 600, fontSize: "15px",
      color: filled ? BG : WHITE,
      background: filled ? GREEN : "transparent",
      border: `1px solid ${filled ? GREEN : BORDER}`,
      borderRadius: "200px",
      textDecoration: "none",
      transition: "all 0.2s",
      whiteSpace: "nowrap",
    }}>{label}</a>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function VimeworldCase() {
  return (
    <main style={{ background: BG, minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <header style={{ padding: "45px 60px 0" }}>
        <Link href="/" style={{
          fontFamily: SYNE, fontWeight: 800, fontSize: "clamp(52px, 8vw, 110px)",
          color: WHITE, letterSpacing: "-0.05em", textTransform: "uppercase",
          textDecoration: "none", display: "block", lineHeight: 1,
        }}>
          Oleksii Klymushkin
        </Link>
        <nav style={{ display: "flex", justifyContent: "space-between", marginTop: "22px" }}>
          {([["Works", "/#works"], ["About me", "/#about"], ["Contact", "/#contact"]] as [string, string][]).map(([l, h]) => (
            <a key={l} href={h} style={{
              border: `1px solid ${BORDER}`, borderRadius: "200px",
              padding: "10px 22px",
              fontFamily: GROTESK, fontWeight: 500, fontSize: "15px",
              color: WHITE, textDecoration: "none",
            }}>{l}</a>
          ))}
        </nav>
      </header>

      <div style={{ padding: "80px 60px 0" }}>

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <Tag>Game UI · 2025</Tag>
            <Tag>Client Project</Tag>
          </div>
          <h1 style={{
            fontFamily: SYNE, fontWeight: 800,
            fontSize: "clamp(36px, 6vw, 72px)",
            color: WHITE, letterSpacing: "-0.03em",
            lineHeight: 1.05, margin: "0 0 20px",
            maxWidth: "900px",
          }}>
            VimeWorld — <span style={{ color: GREEN }}>ESC Menu</span> Redesign
          </h1>
          <p style={{
            fontFamily: GROTESK, fontSize: "18px", color: MUTED,
            maxWidth: "640px", lineHeight: "1.65", margin: 0,
          }}>
            Full UI/UX redesign of the in-game Escape menu for VimeWorld's Pixelmon Ultimate server. From UX flow and player scenarios to final visual interface.
          </p>
        </div>

        {/* stats row */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "56px" }}>
          {[
            ["Role", "UI/UX Designer"],
            ["Client", "VimeWorld · Pixelmon Ultimate"],
            ["Year", "2025"],
            ["Screens", "7+"],
          ].map(([label, value]) => <StatPill key={label} label={label} value={value} />)}
        </div>

        {/* hero image */}
        <div style={{ borderRadius: "20px", overflow: "hidden", border: `1px solid ${BORDER}`, marginBottom: "0" }}>
          <img src={IMG_HERO} alt="VimeWorld ESC Menu Hero" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* ── OVERVIEW + DISCLAIMER ────────────────────────────────────────── */}
        <div style={{ marginTop: "80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
          <div>
            <Label>Overview</Label>
            <H2>Project Overview</H2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Body>The project is a completely redesigned ESC menu for a Minecraft server. The standard menu provides no server-specific context — no player profile, no quests, no shop, no daily rewards.</Body>
              <Body>I designed the full UX flow, player navigation scenarios, and a modern UI that integrates all core server features into one coherent screen.</Body>
            </div>
          </div>
          <div>
            <Label>Disclaimer</Label>
            <H2>About the Work</H2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Body>Server logo and branding belong to their respective owners. This case documents both the UX design process and the final UI output.</Body>
              <Body>The project was developed for a client — VimeWorld's Pixelmon Ultimate server team (EfirTeam × VimeWorld).</Body>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── PROBLEM & GOALS ──────────────────────────────────────────────── */}
        <Label>Challenge</Label>
        <H2 accent>Problem &amp; Goals</H2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
          <div style={{
            padding: "32px", borderRadius: "16px",
            border: `1px solid ${BORDER}`,
            background: "rgba(255,255,255,0.02)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,80,80,0.8)" }} />
              <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED }}>Problem</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Standard ESC menu shows no player profile or stats",
                "No access to bonuses, quests, or the in-game shop",
                "Not designed for feature-rich servers with complex economies",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "rgba(255,80,80,0.6)", fontFamily: MONO, fontSize: "13px", flexShrink: 0, marginTop: "2px" }}>×</span>
                  <Body>{item}</Body>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            padding: "32px", borderRadius: "16px",
            border: `1px solid rgba(26,255,110,0.15)`,
            background: "rgba(26,255,110,0.03)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: GREEN }} />
              <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN }}>Goals</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Extended ESC menu with clear, intuitive navigation",
                "All key server features accessible from a single screen",
                "Reduce click count — fewer steps to reach any feature",
                "Modern neon UI consistent with the server aesthetic",
                "Improve player engagement and accessibility",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: GREEN, fontFamily: MONO, fontSize: "13px", flexShrink: 0, marginTop: "2px" }}>+</span>
                  <Body>{item}</Body>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* ── UX STRUCTURE ─────────────────────────────────────────────────── */}
        <Label>Process</Label>
        <H2 accent>UX Structure</H2>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "56px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Body>At the concept stage, I created sketches to distribute blocks, define left/right areas, and establish the card-based structure for quests and the guidebook. This minimised cognitive load early.</Body>
            <Body>The menu structure mirrors how players actually use features — the flow moves naturally from the main screen toward the actions they need, with no dead ends.</Body>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <Frame src={IMG_SKETCH} />
            <Frame src={IMG_UX_FLOW} />
          </div>
        </div>

        <Divider />

        {/* ── STYLE GUIDE ──────────────────────────────────────────────────── */}
        <Label>Design System</Label>
        <H2 accent>UI Style Guide</H2>

        <H3>Colors</H3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "12px" }}>
          {COLORS.slice(0, 3).map((src, i) => (
            <div key={i} style={{ borderRadius: "12px", overflow: "hidden", border: `1px solid ${BORDER}` }}>
              <img src={src} alt="" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", maxWidth: "66%", marginBottom: "56px" }}>
          {COLORS.slice(3).map((src, i) => (
            <div key={i} style={{ borderRadius: "12px", overflow: "hidden", border: `1px solid ${BORDER}` }}>
              <img src={src} alt="" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          ))}
        </div>

        <H3>Typography — Nexa [Bold]</H3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "56px" }}>
          {([
            ["Headings", "36px"], ["Body text", "18px"],
            ["Buttons", "20px"], ["UI Labels", "24px"],
          ] as [string, string][]).map(([label, size]) => (
            <div key={label} style={{
              padding: "24px", borderRadius: "14px",
              border: `1px solid ${BORDER}`,
              background: "rgba(255,255,255,0.02)",
              display: "flex", flexDirection: "column", gap: "20px",
            }}>
              <span style={{ fontFamily: MONO, fontSize: "11px", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</span>
              <span style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: size, color: WHITE, lineHeight: 1.2 }}>Hello</span>
            </div>
          ))}
        </div>

        <H3>Buttons</H3>
        <div style={{ borderRadius: "12px", overflow: "hidden", border: `1px solid ${BORDER}`, marginBottom: "56px" }}>
          <img src={BUTTONS} alt="Buttons" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        <H3>Icons &amp; Components</H3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "56px" }}>
          {[ICONS_1, ICONS_2].map((src, i) => (
            <div key={i} style={{ borderRadius: "12px", overflow: "hidden", border: `1px solid ${BORDER}` }}>
              <img src={src} alt="" style={{ width: "100%", display: "block" }} />
            </div>
          ))}
        </div>

        <H3>Interaction States</H3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "28px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: GREEN }} />
              <span style={{ fontFamily: MONO, fontSize: "11px", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Hover State</span>
            </div>
            <Body>Icons slightly enlarge on hover, providing visual feedback and drawing attention to interactive elements.</Body>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: GREEN }} />
              <span style={{ fontFamily: MONO, fontSize: "11px", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Active State</span>
            </div>
            <Body>A neon outline appears around the active icon or button, signalling the current section and maintaining visual consistency.</Body>
          </div>
        </div>
        <div style={{ borderRadius: "12px", overflow: "hidden", border: `1px solid ${BORDER}` }}>
          <img src={STATES} alt="States" style={{ width: "100%", display: "block" }} />
        </div>

        <Divider />

        {/* ── SCREENS SHOWCASE ─────────────────────────────────────────────── */}
        <Label>Result</Label>
        <H2 accent>Designed Screens</H2>
        <Body>Seven fully designed screens covering every section of the menu — from the main dashboard to shop, kits, cases, cart, privileges, and warps.</Body>

        <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          <ScreenCard
            src={IMG_MENU} index={1}
            title="Main Menu"
            desc="Dashboard with quests, daily bonuses, latest server updates, server guidebook, and social links. A neon mascot sits in the right column alongside the settings and exit buttons."
          />
          <ScreenCard
            src={IMG_CASES} index={2}
            title="Cases"
            desc="Left panel lists all available cases with prices. Selecting a case shows its drop pool and available actions — Buy or Open — with the player's current currency balance."
          />
          <ScreenCard
            src={IMG_PRIVS} index={3}
            title="Privileges"
            desc="Rank store with subscription tiers. Detail panel shows full privilege benefits, a duration selector (monthly toggle), and dedicated Buy and Gift buttons."
          />
          <ScreenCard
            src={IMG_KITS} index={4}
            title="Kits"
            desc="Available / All toggle filter. Selecting a kit shows its full inventory grid with a contextual warning about one-time-use mechanics before the player claims."
          />
          <ScreenCard
            src={IMG_SHOP} index={5}
            title="Shop"
            desc="Full item store with search, category filters, and currency toggles. Items laid out in a scrollable 5-column grid with sort controls."
          />
          <ScreenCard
            src={IMG_CART} index={6}
            title="Cart"
            desc="Collected rewards and purchases categorised into Privileges, Cases, and Other. Each item shows quantity and a Claim button."
          />
        </div>

        {/* Warps — full width */}
        <div style={{ marginTop: "32px" }}>
          <ScreenCard
            src={IMG_WARPS} index={7}
            title="Warps"
            desc="Server location cards with colour-coded borders per warp type. Each card has a More Info button leading to detailed teleport info — Shop, Arena, EVS, InfinityTower."
          />
        </div>

        <Divider />

        {/* ── ALTERNATING DEEP-DIVES ────────────────────────────────────────── */}
        <Label>Deep Dive</Label>
        <H2 accent>Screen Breakdowns</H2>

        <AltRow
          src={IMG_MENU} side="left"
          title="Main Screen — Dashboard Logic"
          desc="The main screen establishes the UX hierarchy: top navigation with icon buttons and player profile, then a four-column content area. Quests on the left, daily bonuses and guidebook in the centre, updates in a timeline, and social/settings on the right. Everything a player needs without leaving the pause screen."
        />
        <AltRow
          src={IMG_CASES} side="right"
          title="Cases — Split-Panel Pattern"
          desc="A list-and-detail split panel keeps navigation and content visible simultaneously. The drop pool grid uses rarity-coloured borders (purple for legendary, cyan for rare, gold for uncommon) matching Pixelmon conventions. Price is always visible so players can make quick decisions."
        />
        <AltRow
          src={IMG_PRIVS} side="left"
          title="Privileges — Subscription Tiers"
          desc="Rank cards use player skins as avatars, making each tier immediately recognisable. The detail pane includes a duration dropdown and tabbed benefit breakdown (Main vs Kits). The Gift button expands accessibility — players can purchase for others without leaving the interface."
        />
        <AltRow
          src={IMG_SHOP} side="right"
          title="Shop — Searchable Item Store"
          desc="Currency toggle buttons (Pixelmon coins vs server tokens) sit next to search, letting players filter by what they can afford. Category sidebar keeps the grid manageable. Sort dropdown defaults to 'Default' with options for price ordering."
        />

        <Divider />

        {/* ── FINAL RESULT ──────────────────────────────────────────────────── */}
        <div style={{
          padding: "56px", borderRadius: "20px",
          border: `1px solid rgba(26,255,110,0.15)`,
          background: "linear-gradient(135deg, rgba(26,255,110,0.04) 0%, rgba(5,10,6,0) 60%)",
          marginBottom: "0",
        }}>
          <Label>Takeaway</Label>
          <H2>Final Result</H2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            <Body>Delivered a complete, production-ready interface that integrates all server functionality — quests, economy, cases, kits, privileges, shop, and navigation — into one cohesive system.</Body>
            <Body>The project sharpened my skills in game UI pattern design and deepened my understanding of player interaction logic: how to reduce cognitive load in high-information interfaces while keeping the visual language exciting.</Body>
          </div>
        </div>

        {/* ── CONTACT ──────────────────────────────────────────────────────── */}
        <div style={{ marginTop: "120px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "32px" }}>
            <div style={{ maxWidth: "480px" }}>
              <Label>Let&apos;s work together</Label>
              <p style={{
                fontFamily: SYNE, fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 48px)",
                color: WHITE, letterSpacing: "-0.03em",
                lineHeight: 1.1, margin: "0 0 28px",
              }}>
                Ready to build something <span style={{ color: GREEN }}>great?</span>
              </p>
              <Body>Open for freelance projects, collaborations, and full-time roles.</Body>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <ContactBtn label="Telegram" href="https://t.me/atuedesign" filled />
              <ContactBtn label="Instagram" href="https://www.instagram.com/atue_design?igsh=ZmRnbXFuNWh6ZWhj&utm_source=qr" />
              <ContactBtn label="Gmail" href="mailto:atue3038@gmail.com" />
            </div>
          </div>
        </div>

        {/* ── NEXT PROJECT ─────────────────────────────────────────────────── */}
        <div style={{
          marginTop: "80px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "32px 0",
          borderTop: `1px solid ${BORDER}`,
        }}>
          <Link href="/works/vimeworld" style={{ fontFamily: MONO, fontSize: "12px", letterSpacing: "0.1em", color: MUTED, textDecoration: "none", textTransform: "uppercase" }}>
            ← VimeWorld
          </Link>
          <Link href="/works/lectra" style={{ fontFamily: MONO, fontSize: "12px", letterSpacing: "0.1em", color: GREEN, textDecoration: "none", textTransform: "uppercase" }}>
            Lectra →
          </Link>
        </div>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer style={{ marginTop: "60px", paddingBottom: "60px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
            {(["Insta", "Behance", "Telegram"] as string[]).map(l => (
              <a key={l} href="#" style={{
                border: `1px solid ${BORDER}`, borderRadius: "200px",
                padding: "10px 22px",
                fontFamily: GROTESK, fontWeight: 500, fontSize: "15px",
                color: WHITE, textDecoration: "none",
              }}>{l}</a>
            ))}
          </div>
          <p style={{
            fontFamily: SYNE, fontWeight: 800,
            fontSize: "clamp(48px, 8vw, 110px)",
            color: WHITE, letterSpacing: "-0.05em",
            textTransform: "uppercase", lineHeight: 1, margin: 0,
          }}>Oleksii Klymushkin</p>
        </footer>

      </div>
    </main>
  );
}
