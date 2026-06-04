"use client";
import { useCursor, CursorElements, CaseNav, CaseContact, CaseFooter } from "@/components/CaseShell";

const SCREENS = [
  { src: "/vimeworld_menu.png",  num: "01", title: "Main Menu",   desc: "Dashboard with quests, daily bonuses, server updates, guidebook, and social links. All key features accessible without leaving the pause screen." },
  { src: "/vimeworld_cases.png", num: "02", title: "Cases",       desc: "Split-panel layout — case list on the left, drop pool and Buy / Open actions on the right. Rarity borders follow Pixelmon colour conventions." },
  { src: "/vimeworld_privs.png", num: "03", title: "Privileges",  desc: "Rank tiers displayed as cards with player skins. Detail panel shows full benefits, a duration dropdown, and dedicated Buy and Gift buttons." },
  { src: "/vimeworld_kits.png",  num: "04", title: "Kits",        desc: "Available / All toggle filter. Selecting a kit shows the full inventory grid with a one-time-use warning before the player claims." },
  { src: "/vimeworld_shop.png",  num: "05", title: "Shop",        desc: "Full item store with search, category filters, and currency toggle. Items in a scrollable 5-column grid with sort controls." },
  { src: "/vimeworld_cart.png",  num: "06", title: "Cart",        desc: "Pending rewards and purchases grouped by category — Privileges, Cases, Other. Each item shows quantity and a Claim button." },
  { src: "/vimeworld_warps.png", num: "07", title: "Warps",       desc: "Location cards with colour-coded borders per warp type. More Info reveals a detail view with a Teleport action." },
];

const DEEP = [
  { src: "/vimeworld_menu.png",  rev: false, title: "Main Screen — Dashboard Logic",       desc: "Top nav with icon buttons and player profile, then a four-column content area. Quests on the left, daily bonuses and guidebook in the centre, updates as a timeline, social links and settings on the right. Everything a player needs without leaving the pause screen." },
  { src: "/vimeworld_cases.png", rev: true,  title: "Cases — Split-Panel Pattern",          desc: "List and detail sit side by side so navigation and content are always visible. The drop pool grid uses rarity-coloured borders following Pixelmon conventions — purple for legendary, cyan for rare, gold for uncommon. Price stays visible so players decide without extra clicks." },
  { src: "/vimeworld_privs.png", rev: false, title: "Privileges — Subscription Tiers",     desc: "Rank cards use player skins as avatars, making each tier immediately recognisable. The detail pane has a duration dropdown and tabbed benefit breakdown. A dedicated Gift button lets players purchase for others without leaving the interface." },
  { src: "/vimeworld_shop.png",  rev: true,  title: "Shop — Searchable Item Store",         desc: "Currency toggle sits next to search, letting players filter by what they can afford. Category sidebar keeps the 5-column grid manageable. Sort dropdown defaults to 'Default' — minimal friction to find any item." },
];

export default function VimeworldCase() {
  const { cursorRef, ringRef, hovered, setHovered } = useCursor();
  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  return (
    <>
      <CursorElements cursorRef={cursorRef} ringRef={ringRef} hovered={hovered} />

      <style>{`
        .w-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .sec-label { display:flex; align-items:center; gap:16px; margin-bottom:56px; }
        .sec-label span { font-family:'DM Mono',monospace; font-size:11px; color:var(--green); letter-spacing:.15em; white-space:nowrap; }
        .sec-label hr { flex:1; height:1px; border:none; background:var(--border); margin:0; }
        .divider { width:100%; height:1px; background:linear-gradient(90deg,transparent,rgba(26,255,110,.18),transparent); margin:100px 0; }
        .num-badge { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:.1em; color:var(--green); border:1px solid rgba(26,255,110,.3); border-radius:4px; padding:4px 10px; display:inline-block; width:fit-content; }
        .screen-title { font-family:'Unbounded', sans-serif; font-weight:800; font-size:20px; color:var(--white); letter-spacing:-.01em; margin:0; }
        .screen-desc  { font-family:'Space Grotesk',sans-serif; font-size:16px; color:var(--muted); line-height:1.7; margin:0; }
        .alt-row { display:flex; gap:72px; align-items:center; margin-bottom:80px; }
        .alt-row.rev { flex-direction:row-reverse; }
        .alt-row .img-side { flex:0 0 56%; }
        .alt-row .img-side img { width:100%; display:block; border-radius:4px; border:1px solid var(--border); }
        .alt-row .txt-side { flex:1; display:flex; flex-direction:column; gap:16px; }
        .txt-label { font-family:'DM Mono',monospace; font-size:11px; color:var(--green); letter-spacing:.1em; }
        .txt-h { font-family:'Unbounded', sans-serif; font-weight:800; font-size:clamp(20px,2.5vw,28px); color:var(--white); letter-spacing:-.02em; margin:0; line-height:1.2; }
        .txt-p { font-family:'Space Grotesk',sans-serif; font-size:16px; color:var(--muted); line-height:1.75; margin:0; }
        @media(max-width:900px){
          .alt-row,.alt-row.rev{ flex-direction:column !important; }
          .alt-row .img-side{ flex:none; width:100%; }
          .grid-2{ grid-template-columns:1fr !important; }
        }
        @media(max-width:768px){
          .w-inner{ padding:0 20px; }
          .meta-grid{ grid-template-columns:1fr 1fr !important; }
          .screens-grid{ grid-template-columns:1fr !important; }
          .contact-grid{ grid-template-columns:1fr !important; gap:48px !important; }
        }
      `}</style>

      <main style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden" }}>

        <CaseNav onEnter={onEnter} onLeave={onLeave} />

        {/* ── HERO ── */}
        <section style={{ padding: "140px 0 80px" }}>
          <div className="w-inner">
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "28px", height: "1px", background: "var(--green)" }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>GAME UI · 2025</span>
            </div>
            <h1 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(48px,7vw,96px)", lineHeight: 0.95, letterSpacing: "-.03em", color: "var(--white)", marginBottom: 32 }}>
              VimeWorld —<br />
              <span style={{ WebkitTextStroke: "1px var(--green)", color: "transparent" }}>Pixelmon UI</span>
            </h1>
            <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", marginBottom: 48 }}>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 17, lineHeight: 1.7, color: "var(--muted)", maxWidth: 520, margin: 0 }}>
                Full redesign of the in-game GUI for Pixelmon Ultimate — a custom Minecraft server by VimeWorld. 7 screens covering every section of the redesigned pause menu.
              </p>
            </div>
            {/* Meta */}
            <div className="meta-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: "40px 48px", width: "fit-content" }}>
              {[["CLIENT","VimeWorld"],["TYPE","Game UI / GUI"],["PLATFORM","Minecraft Java"],["TOOL","Figma"],["YEAR","2025"]].map(([k,v]) => (
                <div key={k}>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: ".18em", color: "var(--green)", opacity: 0.7, marginBottom: 4 }}>{k}</div>
                  <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 15 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section>
          <div className="w-inner">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--border)", marginBottom: 100 }}>
              {[["07","Screens"],["01","Designer"],["∞","Players"]].map(([n,l]) => (
                <div key={l} style={{ background: "var(--bg)", padding: "32px 36px" }}>
                  <div style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 800, fontSize: 56, color: "var(--green)", lineHeight: 1, marginBottom: 8 }}>{n}</div>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: ".15em", color: "var(--muted)", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ALL SCREENS ── */}
        <section style={{ marginBottom: 100 }}>
          <div className="w-inner">
            <div className="sec-label"><span>02 / ALL SCREENS</span><hr /></div>
            <div className="screens-grid reveal-group" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px 48px" }}>
              {SCREENS.map(({ src, num, title, desc }) => (
                <div key={num} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <img src={src} alt={title} style={{ width: "100%", display: "block", borderRadius: 4, border: "1px solid var(--border)" }} />
                  <span className="num-badge">{num}</span>
                  <h3 className="screen-title">{title}</h3>
                  <p className="screen-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEEP DIVE ── */}
        <section>
          <div className="w-inner">
            <div className="divider" />
            <div className="sec-label"><span>03 / DEEP DIVE</span><hr /></div>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,38px)", color: "var(--white)", letterSpacing: "-.02em", margin: "0 0 64px" }}>Screen Breakdowns</h2>
            {DEEP.map(({ src, rev, title, desc }, i) => (
              <div key={i} className={`alt-row${rev ? " rev" : ""}`}>
                <div className="img-side"><img src={src} alt={title} /></div>
                <div className="txt-side">
                  <span className="txt-label">{String(i+1).padStart(2,"0")} / SCREEN</span>
                  <h3 className="txt-h">{title}</h3>
                  <p className="txt-p">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── RESULT ── */}
        <section>
          <div className="w-inner">
            <div className="divider" />
            <div className="sec-label"><span>04 / RESULT</span><hr /></div>
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
              <div>
                <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,38px)", color: "var(--white)", letterSpacing: "-.02em", margin: "0 0 20px" }}>Final Result</h2>
                <p className="txt-p">Delivered a complete, production-ready interface — quests, economy, cases, kits, privileges, shop, and navigation unified into one cohesive system for the Pixelmon Ultimate server.</p>
              </div>
              <div style={{ paddingTop: 8 }}>
                <p className="txt-p">The project sharpened my skills in game UI pattern design and deepened my understanding of player interaction logic — how to reduce cognitive load in high-information interfaces while keeping the visual language exciting.</p>
              </div>
            </div>
          </div>
        </section>

        <CaseContact onEnter={onEnter} onLeave={onLeave} />
        <CaseFooter prevHref="/#works" prevLabel="ALL WORKS" nextHref="/works/lectra" nextLabel="LECTRA" onEnter={onEnter} onLeave={onLeave} />

      </main>
    </>
  );
}
