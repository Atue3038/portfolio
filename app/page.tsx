"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CARD_IMG = "/vimeworld_preview.png";
const CARD_IMG_LECTRA = "/lectra_preview.png";
const CARD_IMG_CZYSTO = "/czysto_preview.png";
const CARD_IMG_RENTEASE = "/rentease_preview.png";

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
      <div ref={cursorRef} className="cursor" style={{ transform: `translate(-50%,-50%) scale(${hovered ? 3 : 1})`, background: hovered ? "transparent" : "var(--green)", border: hovered ? "1px solid var(--green)" : "none" }} />
      <div ref={ringRef} className="cursor-ring" style={{ width: hovered ? 56 : 36, height: hovered ? 56 : 36 }} />

      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* ── NAV ── */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--green)", letterSpacing: "0.1em" }}>OK.DESIGN</span>
          <div style={{ display: "flex", gap: "32px" }}>
            {[["Works", "#works"], ["About", "#about"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={l} href={h} onMouseEnter={onEnter} onMouseLeave={onLeave}
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--white)")}
                onMouseOut={e => (e.currentTarget.style.color = "var(--muted)")}
              >{l}</a>
            ))}
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>
            <span style={{ animation: "blink 1.2s infinite", color: "var(--green)" }}>●</span>&nbsp;Available for work
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 48px 64px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(180px, 30vw, 420px)", color: "rgba(26,255,110,0.03)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>01</div>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(26,255,110,0.4), transparent)", animation: "scanline 6s linear infinite", opacity: 0.4 }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "80px", alignItems: "center", width: "100%", maxWidth: "1200px", margin: "0 auto", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.2s" }}>
            <div style={{ maxWidth: "580px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
                <div style={{ width: "32px", height: "1px", background: "var(--green)" }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase" }}>UI/UX Designer</span>
              </div>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(52px, 7vw, 92px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "36px" }}>
                Oleksii<br />
                <span className="liquid-text">Klymushkin</span>
              </h1>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", lineHeight: "1.75", color: "var(--muted)", maxWidth: "440px", marginBottom: "48px" }}>
                Creating interfaces where every pixel has a reason. Game UI, web experiences, and digital products that feel alive.
              </p>
              <div style={{ display: "flex", gap: "48px", alignItems: "flex-start" }}>
                {/* 04 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ height: "40px", display: "flex", alignItems: "flex-end" }}>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "34px", color: "var(--green)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>04</span>
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", marginTop: "8px", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>Projects</div>
                </div>
                {/* 01 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ height: "40px", display: "flex", alignItems: "flex-end" }}>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "34px", color: "var(--green)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>01</span>
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", marginTop: "8px", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>Year Exp</div>
                </div>
                {/* ∞ — выровнен по центру относительно высоты чисел */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ height: "40px", display: "flex", alignItems: "flex-end" }}>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "42px", color: "var(--green)", lineHeight: 1, position: "relative", bottom: "-4px" }}>∞</span>
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", marginTop: "8px", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>Ideas</div>
                </div>
              </div>
            </div>

            <div style={{ position: "relative", flexShrink: 0 }}>
              <div style={{ position: "absolute", top: -14, right: -14, width: "100%", height: "100%", border: "1px solid rgba(26,255,110,0.25)", borderRadius: "4px", zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1, width: "340px", borderRadius: "4px", overflow: "hidden", background: "#000" }}>
                <img src="/photo.png" alt="Oleksii Klymushkin" style={{ width: "100%", height: "auto", display: "block", filter: "contrast(1.05)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--green)" }} />
              </div>
              <div style={{ position: "absolute", bottom: 20, left: -20, background: "var(--bg)", border: "1px solid var(--border)", padding: "7px 14px", fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.1em", zIndex: 2 }}>
                WARSAW — POLAND
              </div>
            </div>
          </div>

          <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</div>
            <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--green), transparent)" }} />
          </div>
        </section>

        {/* ── WHAT I DO ── */}
        <section id="about" style={{ padding: "120px 48px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "80px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>02 / SERVICES</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>

            {/* Services — liquid border на каждой ячейке */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
              {[
                { n: "01", title: "UI/UX Design", desc: "Research-driven interfaces that solve real problems. From wireframe to final pixel." },
                { n: "02", title: "Interface Design", desc: "Complex systems made simple. Game UIs, dashboards, admin panels." },
                { n: "03", title: "Website Design", desc: "Marketing sites and landing pages that convert. Clean, fast, memorable." },
                { n: "04", title: "App Design", desc: "Mobile-first experiences. iOS, Android, cross-platform." },
              ].map((item, i) => (
                <div
                  key={item.n}
                  className="liquid-border"
                  onMouseEnter={onEnter} onMouseLeave={onLeave}
                  style={{
                    padding: "44px",
                    borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                    borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                    border: i < 2 && i % 2 === 0 ? "1px solid var(--border)" : undefined,
                    outline: "1px solid var(--border)",
                    cursor: "default",
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
                  onMouseOut={e => (e.currentTarget.style.background = "transparent")}
                >
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", marginBottom: "20px", letterSpacing: "0.1em" }}>{item.n}</div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "26px", color: "var(--white)", marginBottom: "14px", letterSpacing: "-0.02em" }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "var(--muted)", lineHeight: "1.65", maxWidth: "320px" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORK EXPERIENCE ── */}
        <section style={{ padding: "0 48px 120px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>03 / EXPERIENCE</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>
            {[
              {
                name: "VimeWorld — Pixelmon Ultimate",
                role: "UI/UX Designer",
                year: "2025 — NOW",
                link: null,
                active: true,
              },
              {
                name: "Czysto Cleaner",
                role: "UI/UX Designer & Web Developer",
                year: "2026",
                link: "https://czysto-cleaner.pl",
                active: false,
              },
            ].map((job) => (
              <div
                key={job.name}
                className="liquid-border"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 32px", borderRadius: "2px", marginBottom: "2px", transition: "background 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
                onMouseOut={e => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--green)", flexShrink: 0, animation: job.active ? "blink 2s infinite" : "none", opacity: job.active ? 1 : 0.4 }} />
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "22px", color: "var(--white)" }}>{job.name}</span>
                      {job.link && (
                        <a href={job.link} target="_blank" rel="noreferrer"
                          style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.08em", textDecoration: "none", border: "1px solid rgba(26,255,110,0.3)", padding: "2px 8px", borderRadius: "2px", transition: "background 0.2s" }}
                          onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.1)")}
                          onMouseOut={e => (e.currentTarget.style.background = "transparent")}
                        >↗ czysto-cleaner.pl</a>
                      )}
                    </div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>{job.role}</div>
                  </div>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--green)", letterSpacing: "0.05em" }}>{job.year}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="works" style={{ padding: "0 48px 120px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "64px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>04 / WORKS</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "var(--border)" }}>
              {[
                { href: "/works/vimeworld",  img: CARD_IMG,           tag: "GAME UI · 2025",        title: "VimeWorld" },
                { href: "/works/lectra",     img: CARD_IMG_LECTRA,    tag: "MOBILE APP · 2025",     title: "Lectra" },
                { href: "/works/czysto",     img: CARD_IMG_CZYSTO,    tag: "WEB · COMMERCIAL · 2026", title: "Czysto Cleaner" },
                { href: "/works/rentease",   img: CARD_IMG_RENTEASE,  tag: "WEB APP · IN PROGRESS", title: "RentEase" },
              ].map(({ href, img, tag, title }) => (
                <Link key={title} href={href} onMouseEnter={onEnter} onMouseLeave={onLeave}
                  style={{ textDecoration: "none", background: "var(--bg)", display: "block", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "relative", height: "360px", overflow: "hidden" }}>
                    <img src={img} alt={title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "saturate(0.6) brightness(0.75)", transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1), filter 0.4s" }}
                      onMouseOver={e => { const el = e.currentTarget as HTMLImageElement; el.style.transform = "scale(1.05)"; el.style.filter = "saturate(1) brightness(0.9)"; }}
                      onMouseOut={e => { const el = e.currentTarget as HTMLImageElement; el.style.transform = "scale(1)"; el.style.filter = "saturate(0.6) brightness(0.75)"; }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,6,0.92) 0%, transparent 60%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                        <div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.1em", marginBottom: "8px" }}>{tag}</div>
                          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "24px", color: "var(--white)", letterSpacing: "-0.02em" }}>{title}</div>
                        </div>
                        <div style={{ width: "44px", height: "44px", border: "1px solid rgba(26,255,110,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green)", fontSize: "20px" }}>↗</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: "80px 48px 120px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "72px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>05 / CONTACT</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
              <div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "24px" }}>
                  Let&apos;s build something<br />
                  <span style={{ color: "var(--green)" }}>worth remembering.</span>
                </h2>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "var(--muted)", lineHeight: "1.7", maxWidth: "380px" }}>
                  Open to freelance, collaborations, and full-time roles. If you have a project in mind — let&apos;s talk.
                </p>
              </div>

              {/* Contact buttons — liquid border */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[["Telegram", "Fastest response", "#"], ["Instagram", "Design updates", "#"], ["Gmail", "For proposals", "mailto:example@gmail.com"]].map(([label, hint, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="liquid-border"
                    onMouseEnter={onEnter} onMouseLeave={onLeave}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "22px 24px",
                      textDecoration: "none",
                      borderRadius: "2px",
                      transition: "background 0.2s",
                    }}
                    onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.05)")}
                    onMouseOut={e => (e.currentTarget.style.background = "transparent")}
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
        <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
