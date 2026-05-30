"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const LINKS = {
  telegram:  "https://t.me/atuedesign",
  instagram: "https://www.instagram.com/atue_design?igsh=ZmRnbXFuNWh6ZWhj&utm_source=qr",
  gmail:     "mailto:atue3038@gmail.com",
};

// All real screenshots already in /public/
const SCREENS = [
  {
    src:   "/vimeworld_menu.png",
    num:   "01",
    title: "Main Menu",
    desc:  "Dashboard with quests, daily bonuses, server updates, guidebook, and social links. All key features accessible without leaving the pause screen.",
  },
  {
    src:   "/vimeworld_cases.png",
    num:   "02",
    title: "Cases",
    desc:  "Split-panel layout — case list on the left, drop pool and Buy / Open actions on the right. Rarity borders follow Pixelmon colour conventions.",
  },
  {
    src:   "/vimeworld_privs.png",
    num:   "03",
    title: "Privileges",
    desc:  "Rank tiers displayed as cards with player skins. Detail panel shows full benefits, a duration dropdown, and dedicated Buy and Gift buttons.",
  },
  {
    src:   "/vimeworld_kits.png",
    num:   "04",
    title: "Kits",
    desc:  "Available / All toggle filter. Selecting a kit shows the full inventory grid with a one-time-use warning before the player claims.",
  },
  {
    src:   "/vimeworld_shop.png",
    num:   "05",
    title: "Shop",
    desc:  "Full item store with search, category filters, and currency toggle. Items in a scrollable 5-column grid with sort controls.",
  },
  {
    src:   "/vimeworld_cart.png",
    num:   "06",
    title: "Cart",
    desc:  "Pending rewards and purchases grouped by category — Privileges, Cases, Other. Each item shows quantity and a Claim button.",
  },
  {
    src:   "/vimeworld_warps.png",
    num:   "07",
    title: "Warps",
    desc:  "Location cards with colour-coded borders per warp type. More Info reveals a detail view with a Teleport action.",
  },
];

export default function VimeworldCase() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorRef.current && Object.assign(cursorRef.current.style, { left: e.clientX + "px", top: e.clientY + "px" });
      setTimeout(() => {
        ringRef.current && Object.assign(ringRef.current.style, { left: e.clientX + "px", top: e.clientY + "px" });
      }, 80);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"
        style={{ transform: `translate(-50%,-50%) scale(${hovered ? 3 : 1})`, background: hovered ? "transparent" : "var(--green)", border: hovered ? "1px solid var(--green)" : "none" }} />
      <div ref={ringRef} className="cursor-ring"
        style={{ width: hovered ? 56 : 36, height: hovered ? 56 : 36 }} />

      <style>{`
        .w-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .sec-label { display:flex; align-items:center; gap:16px; margin-bottom:56px; }
        .sec-label span { font-family:'DM Mono',monospace; font-size:11px; color:var(--green); letter-spacing:.15em; white-space:nowrap; }
        .sec-label hr { flex:1; height:1px; border:none; background:var(--border); margin:0; }
        .divider { width:100%; height:1px; background:linear-gradient(90deg,transparent,rgba(26,255,110,.18),transparent); margin:100px 0; }
        .screen-card { background:var(--bg); display:flex; flex-direction:column; }
        .screen-card img { width:100%; display:block; }
        .screen-card .info { padding:16px 0 0; display:flex; flex-direction:column; gap:10px; }
        .num-badge { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:.1em; color:var(--green); border:1px solid rgba(26,255,110,.3); border-radius:4px; padding:4px 10px; display:inline-block; width:fit-content; }
        .screen-title { font-family:'Syne',sans-serif; font-weight:800; font-size:22px; color:var(--white); letter-spacing:-.01em; margin:0; }
        .screen-desc  { font-family:'Space Grotesk',sans-serif; font-size:15px; color:var(--muted); line-height:1.65; margin:0; }
        .alt-row { display:flex; gap:72px; align-items:center; margin-bottom:80px; }
        .alt-row.rev { flex-direction:row-reverse; }
        .alt-row .img-side { flex:0 0 56%; }
        .alt-row .img-side img { width:100%; display:block; border-radius:4px; border:1px solid var(--border); }
        .alt-row .txt-side { flex:1; display:flex; flex-direction:column; gap:16px; }
        .txt-label { font-family:'DM Mono',monospace; font-size:11px; color:var(--green); letter-spacing:.1em; }
        .txt-h { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(20px,2.5vw,28px); color:var(--white); letter-spacing:-.02em; margin:0; line-height:1.2; }
        .txt-p { font-family:'Space Grotesk',sans-serif; font-size:16px; color:var(--muted); line-height:1.75; margin:0; }
        @media(max-width:900px){
          .alt-row,.alt-row.rev{ flex-direction:column !important; }
          .alt-row .img-side{ flex:none; width:100%; }
          .grid-2{ grid-template-columns:1fr !important; }
        }
        @media(max-width:768px){
          .w-inner{ padding:0 20px; }
          nav{ padding:16px 20px !important; }
          .meta-grid{ grid-template-columns:1fr 1fr !important; }
          .screens-grid{ grid-template-columns:1fr !important; }
          .contact-grid{ grid-template-columns:1fr !important; gap:48px !important; }
        }
      `}</style>

      <main style={{ background:"var(--bg)", minHeight:"100vh", overflowX:"hidden" }}>

        {/* NAV */}
        <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, padding:"20px 48px", display:"flex", justifyContent:"space-between", alignItems:"center", backdropFilter:"blur(12px)", borderBottom:"1px solid var(--border)" }}>
          <Link href="/" onMouseEnter={onEnter} onMouseLeave={onLeave}
            style={{ fontFamily:"'DM Mono',monospace", fontSize:"13px", color:"var(--green)", letterSpacing:".1em", textDecoration:"none" }}>
            OK.DESIGN
          </Link>
          <div style={{ display:"flex", gap:"32px" }}>
            {([["Works","/#works"],["About","/#about"],["Contact","/#contact"]] as [string,string][]).map(([l,h]) => (
              <a key={l} href={h} onMouseEnter={onEnter} onMouseLeave={onLeave}
                style={{ fontFamily:"'DM Mono',monospace", fontSize:"13px", color:"var(--muted)", textDecoration:"none", letterSpacing:".05em", transition:"color .2s" }}
                onMouseOver={e=>(e.currentTarget.style.color="var(--white)")}
                onMouseOut={e=>(e.currentTarget.style.color="var(--muted)")}
              >{l}</a>
            ))}
          </div>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:"var(--muted)" }}>
            <span style={{ animation:"blink 1.2s infinite", color:"var(--green)" }}>●</span>&nbsp;Available for work
          </span>
        </nav>

        {/* HERO */}
        <section style={{ paddingTop:160 }}>
          <div className="w-inner">

            <Link href="/#works" onMouseEnter={onEnter} onMouseLeave={onLeave}
              style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"'DM Mono',monospace", fontSize:"12px", color:"var(--muted)", textDecoration:"none", letterSpacing:".08em", marginBottom:64, transition:"color .2s" }}
              onMouseOver={e=>(e.currentTarget.style.color="var(--green)")}
              onMouseOut={e=>(e.currentTarget.style.color="var(--muted)")}
            >← BACK TO WORKS</Link>

            {/* tags */}
            <div style={{ display:"flex", gap:10, marginBottom:28 }}>
              {["Game UI","2025","Client Project"].map(t=>(
                <span key={t} style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", letterSpacing:".1em", color:"var(--green)", border:"1px solid rgba(26,255,110,.3)", borderRadius:4, padding:"4px 10px" }}>{t}</span>
              ))}
            </div>

            {/* title */}
            <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(42px,7vw,90px)", color:"var(--white)", letterSpacing:"-.03em", lineHeight:1.0, margin:"0 0 24px", maxWidth:860 }}>
              VimeWorld —<br /><span style={{ color:"var(--green)" }}>ESC Menu</span><br />Redesign
            </h1>
            <p style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(15px,1.5vw,18px)", color:"var(--muted)", maxWidth:520, lineHeight:1.7, margin:"0 0 64px" }}>
              Full UI/UX redesign of the in-game Escape menu for VimeWorld's Pixelmon Ultimate server — UX flow, player scenarios, and full visual interface.
            </p>

            {/* meta */}
            <div className="meta-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:2, background:"var(--border)", marginBottom:64 }}>
              {([["Role","UI/UX Designer"],["Client","VimeWorld"],["Year","2025"],["Screens","7+"]] as [string,string][]).map(([label,val])=>(
                <div key={label} style={{ background:"var(--bg)", padding:"24px 28px" }}>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:"var(--muted)", letterSpacing:".1em", marginBottom:8 }}>{label}</div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(18px,2vw,22px)", color:"var(--white)" }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section>
          <div className="w-inner">
            <div className="divider" />
            <div className="sec-label"><span>01 / OVERVIEW</span><hr /></div>

            <div className="grid-2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, marginBottom:0 }}>
              <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(24px,3vw,38px)", color:"var(--white)", letterSpacing:"-.02em", margin:0 }}>Project Overview</h2>
                <p className="txt-p">The standard Minecraft ESC menu gives players nothing useful — no profile, no quests, no shop. For a feature-rich server like Pixelmon Ultimate that's a dead end every time someone pauses.</p>
                <p className="txt-p">I redesigned the full system: UX flow, navigation, player scenarios, and a modern interface that brings quests, economy, rewards, and social features onto a single screen.</p>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(24px,3vw,38px)", color:"var(--white)", letterSpacing:"-.02em", margin:0 }}>Problem & Goals</h2>
                {[
                  ["×","No player profile, stats, or balance visible in the default menu","rgba(255,80,80,.6)"],
                  ["×","No access to quests, shop, or daily bonuses without extra commands","rgba(255,80,80,.6)"],
                  ["+","One screen for every key server feature — zero dead ends","var(--green)"],
                  ["+","Modern neon UI, fewer clicks, intuitive player flow","var(--green)"],
                ].map(([icon,text,color],i)=>(
                  <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:14, color:color as string, flexShrink:0, marginTop:1 }}>{icon}</span>
                    <p className="txt-p" style={{ margin:0 }}>{text as string}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SCREENS */}
        <section>
          <div className="w-inner">
            <div className="divider" />
            <div className="sec-label"><span>02 / SCREENS</span><hr /></div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(24px,3vw,38px)", color:"var(--white)", letterSpacing:"-.02em", margin:"0 0 12px" }}>Designed Screens</h2>
            <p className="txt-p" style={{ maxWidth:520, marginBottom:56 }}>Seven screens covering every section of the redesigned menu.</p>
          </div>

          {/* screens — each card is image then text immediately below */}
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 48px" }}>
            <div className="screens-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"120px 48px" }}>
              {SCREENS.map(({ src, num, title, desc })=>(
                <div key={num} className="screen-card">
                  <img src={src} alt={title} style={{ borderRadius:4, border:"1px solid var(--border)" }} />
                  <div className="info">
                    <span className="num-badge">{num}</span>
                    <h3 className="screen-title">{title}</h3>
                    <p className="screen-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEEP DIVE */}
        <section>
          <div className="w-inner">
            <div className="divider" />
            <div className="sec-label"><span>03 / DEEP DIVE</span><hr /></div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(24px,3vw,38px)", color:"var(--white)", letterSpacing:"-.02em", margin:"0 0 64px" }}>Screen Breakdowns</h2>

            {([
              ["/vimeworld_menu.png",  false, "Main Screen — Dashboard Logic",
                "Top nav with icon buttons and player profile, then a four-column content area. Quests on the left, daily bonuses and guidebook in the centre, updates as a timeline, social links and settings on the right. Everything a player needs without leaving the pause screen."],
              ["/vimeworld_cases.png", true,  "Cases — Split-Panel Pattern",
                "List and detail sit side by side so navigation and content are always visible. The drop pool grid uses rarity-coloured borders following Pixelmon conventions — purple for legendary, cyan for rare, gold for uncommon. Price stays visible so players decide without extra clicks."],
              ["/vimeworld_privs.png", false, "Privileges — Subscription Tiers",
                "Rank cards use player skins as avatars, making each tier immediately recognisable. The detail pane has a duration dropdown and tabbed benefit breakdown. A dedicated Gift button lets players purchase for others without leaving the interface."],
              ["/vimeworld_shop.png",  true,  "Shop — Searchable Item Store",
                "Currency toggle sits next to search, letting players filter by what they can afford. Category sidebar keeps the 5-column grid manageable. Sort dropdown defaults to 'Default' — minimal friction to find any item."],
            ] as [string, boolean, string, string][]).map(([src, rev, title, desc], i)=>(
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

        {/* RESULT */}
        <section>
          <div className="w-inner">
            <div className="divider" />
            <div className="sec-label"><span>04 / RESULT</span><hr /></div>
            <div className="grid-2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80 }}>
              <div>
                <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(24px,3vw,38px)", color:"var(--white)", letterSpacing:"-.02em", margin:"0 0 20px" }}>Final Result</h2>
                <p className="txt-p">Delivered a complete, production-ready interface — quests, economy, cases, kits, privileges, shop, and navigation unified into one cohesive system for the Pixelmon Ultimate server.</p>
              </div>
              <div style={{ paddingTop:8 }}>
                <p className="txt-p">The project sharpened my skills in game UI pattern design and deepened my understanding of player interaction logic — how to reduce cognitive load in high-information interfaces while keeping the visual language exciting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section style={{ borderTop:"1px solid var(--border)", marginTop:100, padding:"100px 0 120px" }}>
          <div className="w-inner">
            <div className="sec-label"><span>05 / CONTACT</span><hr /></div>
            <div className="contact-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
              <div>
                <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(32px,4.5vw,56px)", lineHeight:1.05, letterSpacing:"-.03em", color:"var(--white)", marginBottom:20 }}>
                  Let&apos;s build something<br /><span style={{ color:"var(--green)" }}>worth remembering.</span>
                </h2>
                <p className="txt-p" style={{ maxWidth:360 }}>Open to freelance, collaborations, and full-time roles.</p>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {[
                  { label:"Telegram",  hint:"Fastest response", href:LINKS.telegram },
                  { label:"Instagram", hint:"Design updates",   href:LINKS.instagram },
                  { label:"Gmail",     hint:"For proposals",    href:LINKS.gmail },
                ].map(({ label, hint, href })=>(
                  <a key={label} href={href} target={label !== "Gmail" ? "_blank" : undefined} rel="noreferrer"
                    onMouseEnter={onEnter} onMouseLeave={onLeave}
                    className="liquid-border"
                    style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"22px 24px", textDecoration:"none", borderRadius:2, transition:"background .2s" }}
                    onMouseOver={e=>(e.currentTarget.style.background="rgba(26,255,110,.05)")}
                    onMouseOut={e=>(e.currentTarget.style.background="transparent")}
                  >
                    <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:18, color:"var(--white)" }}>{label}</span>
                    <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                      <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:"var(--muted)" }}>{hint}</span>
                      <span style={{ color:"var(--green)", fontSize:18 }}>→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop:"1px solid var(--border)", padding:"28px 48px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
          <div style={{ display:"flex", gap:24 }}>
            <Link href="/#works"
              style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:"var(--muted)", textDecoration:"none", letterSpacing:".1em", transition:"color .2s" }}
              onMouseOver={e=>(e.currentTarget.style.color="var(--green)")}
              onMouseOut={e=>(e.currentTarget.style.color="var(--muted)")}
            >← ALL WORKS</Link>
            <Link href="/works/lectra"
              style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:"var(--muted)", textDecoration:"none", letterSpacing:".1em", transition:"color .2s" }}
              onMouseOver={e=>(e.currentTarget.style.color="var(--green)")}
              onMouseOut={e=>(e.currentTarget.style.color="var(--muted)")}
            >NEXT: LECTRA →</Link>
          </div>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:"var(--muted)" }}>© 2025 OLEKSII KLYMUSHKIN</span>
          <div style={{ display:"flex", gap:24 }}>
            {([["Insta",LINKS.instagram],["Telegram",LINKS.telegram],["Gmail",LINKS.gmail]] as [string,string][]).map(([l,href])=>(
              <a key={l} href={href} target={l !== "Gmail" ? "_blank" : undefined} rel="noreferrer"
                style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:"var(--muted)", textDecoration:"none", letterSpacing:".1em", transition:"color .2s" }}
                onMouseOver={e=>(e.currentTarget.style.color="var(--green)")}
                onMouseOut={e=>(e.currentTarget.style.color="var(--muted)")}
              >{l}</a>
            ))}
          </div>
        </footer>

      </main>
    </>
  );
}
