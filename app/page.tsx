"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const PHOTO = "https://www.figma.com/api/mcp/asset/0f26f36b-0d01-47aa-aade-53bb4ba79cad";
const CARD_IMG = "https://www.figma.com/api/mcp/asset/1006b5a8-f8c2-4849-ad1a-f84d5f46c8c9";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
      setTimeout(() => {
        if (ringRef.current) {
          ringRef.current.style.left = e.clientX + "px";
          ringRef.current.style.top = e.clientY + "px";
        }
      }, 80);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  return (
    <>
      {/* Custom cursor */}
      <div ref={cursorRef} className="cursor" style={{ transform: `translate(-50%,-50%) scale(${hovered ? 3 : 1})`, background: hovered ? "transparent" : "var(--green)", border: hovered ? "1px solid var(--green)" : "none" }} />
      <div ref={ringRef} className="cursor-ring" style={{ width: hovered ? 56 : 36, height: hovered ? 56 : 36 }} />

      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* ── NAV ── */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--green)", letterSpacing: "0.1em" }}>OK.DESIGN</span>
          <div style={{ display: "flex", gap: "32px" }}>
            {[["Works", "#works"], ["About", "#about"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={l} href={h} onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--white)")}
                onMouseOut={e => (e.currentTarget.style.color = "var(--muted)")}
              >{l}</a>
            ))}
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>
            <span style={{ animation: "blink 1.2s infinite" }}>●</span> Available for work
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 48px 64px", paddingTop: "80px", position: "relative", overflow: "hidden" }}>

          {/* Background number */}
          <div style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(200px, 35vw, 480px)", color: "rgba(26,255,110,0.03)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>01</div>

          {/* Scanline */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, var(--green-mid), transparent)", animation: "scanline 6s linear infinite", opacity: 0.4 }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "flex-end", maxWidth: "1200px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.2s" }}>
            {/* Left */}
            <div>
              {/* Label */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
                <div style={{ width: "32px", height: "1px", background: "var(--green)" }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase" }}>UI/UX Designer</span>
              </div>

              {/* Name */}
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "40px" }}>
                Oleksii<br />
                <span style={{ WebkitTextStroke: "1px rgba(240,244,241,0.3)", color: "transparent" }}>Klymu</span>
                <span style={{ color: "var(--green)" }}>sh</span>
                <span style={{ WebkitTextStroke: "1px rgba(240,244,241,0.3)", color: "transparent" }}>kin</span>
              </h1>

              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", lineHeight: "1.7", color: "var(--muted)", maxWidth: "420px", marginBottom: "48px" }}>
                Creating interfaces where every pixel has a reason. Game UI, web experiences, and digital products that feel alive.
              </p>

              {/* Stats row */}
              <div style={{ display: "flex", gap: "40px" }}>
                {[["01", "Projects"], ["01", "Year Exp"], ["∞", "Ideas"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "36px", color: "var(--green)", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", marginTop: "4px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — photo */}
            <div style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}>
              {/* Decorative frame */}
              <div style={{ position: "absolute", top: -16, right: -16, width: "100%", maxWidth: 380, height: "100%", border: "1px solid var(--green-mid)", borderRadius: "4px", zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 380, borderRadius: "4px", overflow: "hidden", background: "#064622" }}>
                <img src={PHOTO} alt="Oleksii" style={{ width: "100%", height: "auto", display: "block", filter: "contrast(1.05) saturate(0.9)" }} />
                {/* Green overlay strip */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--green)" }} />
              </div>
              {/* Tag */}
              <div style={{ position: "absolute", bottom: 24, left: -24, background: "var(--bg)", border: "1px solid var(--border)", padding: "8px 16px", fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.1em" }}>
                KYIV — UKRAINE
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</div>
            <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--green), transparent)" }} />
          </div>
        </section>

        {/* ── WHAT I DO ── */}
        <section id="about" style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "80px" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>02 / SERVICES</span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
            {[
              { n: "01", title: "UI/UX Design", desc: "Research-driven interfaces that solve real problems. From wireframe to final pixel." },
              { n: "02", title: "Interface Design", desc: "Complex systems made simple. Game UIs, dashboards, admin panels." },
              { n: "03", title: "Website Design", desc: "Marketing sites and landing pages that convert. Clean, fast, memorable." },
              { n: "04", title: "App Design", desc: "Mobile-first experiences. iOS, Android, cross-platform." },
            ].map((item, i) => (
              <div
                key={item.n}
                onMouseEnter={onEnter} onMouseLeave={onLeave}
                style={{
                  padding: "40px",
                  borderBottom: "1px solid var(--border)",
                  borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                  transition: "background 0.3s",
                  cursor: "default",
                }}
                onMouseOver={e => (e.currentTarget.style.background = "var(--green-dim)")}
                onMouseOut={e => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", marginBottom: "20px", letterSpacing: "0.1em" }}>{item.n}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "28px", color: "var(--white)", marginBottom: "16px", letterSpacing: "-0.02em" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "var(--muted)", lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WORK EXPERIENCE ── */}
        <section style={{ padding: "0 48px 120px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>03 / EXPERIENCE</span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "32px 0", borderBottom: "1px solid var(--border)", borderTop: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--green)", animation: "blink 2s infinite" }} />
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "22px", color: "var(--white)" }}>VimeWorld — Pixelmon Ultimate</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>UI/UX Designer</div>
              </div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--green)", letterSpacing: "0.05em" }}>2025 — NOW</div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="works" style={{ padding: "0 48px 120px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "64px" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>04 / WORKS</span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "var(--border)" }}>
            {[0, 1].map(i => (
              <Link key={i} href="/works/vimeworld" onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ textDecoration: "none", background: "var(--bg)", display: "block", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
                  <img src={CARD_IMG} alt="VimeWorld" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.7) brightness(0.8)", transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1), filter 0.4s" }}
                    onMouseOver={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLImageElement).style.filter = "saturate(1) brightness(0.9)"; }}
                    onMouseOut={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; (e.currentTarget as HTMLImageElement).style.filter = "saturate(0.7) brightness(0.8)"; }}
                  />
                  {/* Overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,6,0.9) 0%, transparent 60%)" }} />
                  {/* Content */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                      <div>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.1em", marginBottom: "8px" }}>GAME UI · 2025</div>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "26px", color: "var(--white)", letterSpacing: "-0.02em" }}>VimeWorld</div>
                      </div>
                      <div style={{ width: "40px", height: "40px", border: "1px solid var(--green-mid)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green)", fontSize: "18px" }}>↗</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: "80px 48px 120px", borderTop: "1px solid var(--border)", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "64px" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>05 / CONTACT</span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "24px" }}>
                Let&apos;s build something<br />
                <span style={{ color: "var(--green)" }}>worth remembering.</span>
              </h2>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.7" }}>
                Open to freelance, collaborations, and full-time roles. If you have a project in mind — let&apos;s talk.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Telegram", hint: "Fastest response" },
                { label: "Instagram", hint: "Design updates" },
                { label: "Gmail", hint: "For proposals" },
              ].map(({ label, hint }) => (
                <a key={label} href="#" onMouseEnter={onEnter} onMouseLeave={onLeave}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", border: "1px solid var(--border)", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "var(--green)"; e.currentTarget.style.background = "var(--green-dim)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "transparent"; }}
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
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 48px", maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>© 2025 OLEKSII KLYMUSHKIN</span>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Insta", "Behance", "Telegram"].map(l => (
              <a key={l} href="#" onMouseEnter={onEnter} onMouseLeave={onLeave}
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--green)")}
                onMouseOut={e => (e.currentTarget.style.color = "var(--muted)")}
              >{l}</a>
            ))}
          </div>
        </footer>

      </main>
    </>
  );
}
