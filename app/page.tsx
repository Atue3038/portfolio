"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CARD_IMG = "/vimeworld_preview.png";
const CARD_IMG_LECTRA = "/lectra_preview.png";
const CARD_IMG_CZYSTO = "/czysto_preview.png";
const CARD_IMG_RENTEASE = "/rentease_preview.png";

/* Real contact links */
const LINKS = {
  telegram: "https://t.me/atuedesign",
  instagram: "https://www.instagram.com/atue_design?igsh=ZmRnbXFuNWh6ZWhj&utm_source=qr",
  gmail: "mailto:atue3038@gmail.com",
};

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const [hovered, setHovered]   = useState(false);
  const [loaded, setLoaded]     = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const rafRef   = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos  = useRef({ x: 0, y: 0 });

  /* ── RAF cursor ── */
  useEffect(() => {
    setLoaded(true);
    const move = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
    };
    const tick = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px";
        ringRef.current.style.top  = ringPos.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    rafRef.current = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(rafRef.current); };
  }, []);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(el => io.observe(el));

    /* Image fade-in on load */
    const imgs = document.querySelectorAll<HTMLImageElement>("img");
    imgs.forEach(img => {
      if (img.complete) {
        img.classList.add("img-loaded");
      } else {
        img.addEventListener("load", () => img.classList.add("img-loaded"), { once: true });
        img.addEventListener("error", () => img.classList.add("img-loaded"), { once: true });
      }
    });

    return () => io.disconnect();
  }, []);

  /* ── Nav active section ── */
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const ids = ["about", "works", "contact"];
    const obs = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach(o => o?.disconnect());
  }, []);

  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  return (
    <>
      <div ref={cursorRef} className="cursor" style={{ transform: `translate(-50%,-50%) scale(${hovered ? 3 : 1})`, background: hovered ? "transparent" : "var(--green)", border: hovered ? "1px solid var(--green)" : "none" }} />
      <div ref={ringRef} className="cursor-ring" style={{ width: hovered ? 56 : 36, height: hovered ? 56 : 36 }} />

      {/* ── GLOBAL MOBILE STYLES ── */}
      <style>{`
        /* NAV */
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-status { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .main-nav { padding: 16px 20px !important; }
          .mobile-menu { display: ${menuOpen ? "flex" : "none"} !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        .mobile-menu {
          position: fixed; top: 61px; left: 0; right: 0;
          background: rgba(5,10,6,0.97); backdrop-filter: blur(12px);
          flex-direction: column; padding: 24px 20px; gap: 0;
          border-bottom: 1px solid var(--border); z-index: 49;
        }
        .mobile-menu a {
          padding: 16px 0; font-family: 'DM Mono', monospace;
          font-size: 14px; color: var(--white); text-decoration: none;
          border-bottom: 1px solid var(--border); letter-spacing: 0.08em;
        }

        /* HERO */
        .hero-section {
          min-height: 100vh;
          display: flex; align-items: center;
          padding: 100px 48px 80px;
          position: relative; overflow: hidden;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 80px;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-photo-desktop { display: block; }
        .hero-photo-mobile  { display: none; }

        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .hero-photo-desktop { display: none !important; }
          .hero-photo-mobile  { display: block !important; }
          .hero-section { padding: 100px 32px 80px !important; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 100px 20px 64px !important; min-height: auto !important; }
          .hero-stats   { gap: 28px !important; }
          .hero-title   { font-size: clamp(32px, 10vw, 52px) !important; }
        }

        /* MOBILE PHOTO */
        .hero-photo-mobile {
          margin: 32px 0 40px;
          position: relative;
          width: 100%;
        }
        .hero-photo-mobile img {
          width: 100%;
          max-height: 380px;
          object-fit: cover;
          object-position: top;
          display: block;
          border-radius: 4px;
        }
        .hero-photo-mobile .photo-tag {
          position: absolute; bottom: 12px; left: 12px;
          background: rgba(5,10,6,0.85);
          border: 1px solid var(--border);
          padding: 6px 12px;
          font-family: 'DM Mono', monospace;
          font-size: 10px; color: var(--green);
          letter-spacing: 0.1em;
        }
        .hero-photo-mobile .photo-line {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: var(--green); border-radius: 0 0 4px 4px;
        }

        /* SERVICES */
        .services-section { padding: 120px 48px; }
        .services-grid { display: grid; grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .services-section { padding: 64px 20px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .services-grid > div { border-right: none !important; border-bottom: 1px solid var(--border) !important; outline: none !important; border-left: 1px solid var(--border) !important; border-right: 1px solid var(--border) !important; }
        }

        /* EXPERIENCE */
        .exp-section { padding: 0 48px 120px; }
        .exp-row { display: flex; align-items: center; justify-content: space-between; padding: 28px 32px; }
        @media (max-width: 768px) {
          .exp-section { padding: 0 20px 64px !important; }
          .exp-row { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; padding: 20px 16px !important; }
          .exp-year { margin-top: 4px !important; }
        }

        /* WORKS */
        .works-section { padding: 0 48px 120px; }
        .works-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: var(--border); }
        .work-card-img { height: 400px; }
        @media (max-width: 768px) {
          .works-section { padding: 0 0 64px !important; }
          .works-grid { grid-template-columns: 1fr !important; }
          .work-card-img { height: 280px !important; }
          .works-header { padding: 0 20px !important; margin-bottom: 32px !important; }
        }

        /* CONTACT */
        .contact-section { padding: 80px 48px 120px; border-top: 1px solid var(--border); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          .contact-section { padding: 64px 20px 80px !important; }
          .contact-hint { display: none !important; }
        }

        /* FOOTER */
        .main-footer { padding: 28px 48px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; border-top: 1px solid var(--border); }
        @media (max-width: 768px) {
          .main-footer { padding: 24px 20px !important; flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
        }
      `}</style>

      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* ── NAV ── */}
        <nav className="main-nav" style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          padding: "20px 48px", display: "flex", justifyContent: "space-between",
          alignItems: "center", backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)", background: "rgba(5,10,6,0.85)",
        }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--green)", letterSpacing: "0.1em" }}>OK.DESIGN</span>
          <div className="nav-links" style={{ display: "flex", gap: "32px" }}>
            {([["Works", "#works", "works"], ["About", "#about", "about"], ["Contact", "#contact", "contact"]] as [string, string, string][]).map(([l, h, id]) => (
              <a key={l} href={h} onMouseEnter={onEnter} onMouseLeave={onLeave}
                className={`nav-link-anim${activeSection === id ? " active" : ""}`}
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: activeSection === id ? "var(--white)" : "var(--muted)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--white)")}
                onMouseOut={e => (e.currentTarget.style.color = activeSection === id ? "var(--white)" : "var(--muted)")}
              >{l}</a>
            ))}
          </div>
          <div className="nav-status" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>
            <span style={{ animation: "blink 1.2s infinite", color: "var(--green)" }}>●</span>&nbsp;Available for work
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px", padding: "4px" }}>
            {[0,1,2].map(i => <div key={i} style={{ width: "22px", height: "2px", background: menuOpen && i === 1 ? "transparent" : "var(--white)", transition: "all 0.3s",
              transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px, 5px)" : i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "") : "" }} />)}
          </button>
        </nav>

        {/* Mobile menu */}
        <div className="mobile-menu">
          {[["Works", "#works"], ["About", "#about"], ["Contact", "#contact"]].map(([l, h]) => (
            <a key={l} href={h} onClick={() => setMenuOpen(false)}>{l}</a>
          ))}
        </div>

        {/* ── HERO ── */}
        <section className="hero-section">
          <div style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(120px, 25vw, 420px)", color: "rgba(26,255,110,0.03)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>01</div>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(26,255,110,0.4), transparent)", animation: "scanline 6s linear infinite", opacity: 0.4 }} />

          <div className="hero-grid">
            <div>
              <div className="hero-tag" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
                <div style={{ width: "32px", height: "1px", background: "var(--green)" }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase" }}>UI/UX Designer</span>
              </div>
              <h1 className="hero-title" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 7vw, 92px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "28px" }}>
                Oleksii<br />
                <span className="liquid-text">Klymushkin</span>
              </h1>

              {/* Photo — mobile only (between name and bio) */}
              <div className="hero-photo-mobile">
                <img src="/photo.png" alt="Oleksii Klymushkin" className="img-loaded" style={{ filter: "contrast(1.05)" }} />
                <div className="photo-tag">WARSAW — POLAND</div>
                <div className="photo-line" />
              </div>

              <p className="hero-bio" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(14px, 2vw, 17px)", lineHeight: "1.75", color: "var(--muted)", maxWidth: "440px", marginBottom: "40px" }}>
                Creating interfaces where every pixel has a reason. Game UI, web experiences, and digital products that feel alive.
              </p>
              <div className="hero-stats" style={{ display: "flex", gap: "40px", marginBottom: "40px" }}>
                {[["04", "Projects"], ["01", "Year Exp"], ["∞", "Ideas"]].map(([n, l]) => (
                  <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "34px", color: "var(--green)", lineHeight: 1, height: "40px", display: "flex", alignItems: l === "Ideas" ? "center" : "flex-end" }}>{n}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", marginTop: "8px", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", whiteSpace: "nowrap" }}>{l}</div>
                  </div>
                ))}
              </div>
              <a href="#works" onMouseEnter={onEnter} onMouseLeave={onLeave}
                className="hero-cta liquid-border shimmer-btn btn-press"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 28px", fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.15em", color: "var(--white)", textDecoration: "none", borderRadius: "2px" }}
                onMouseOver={e => { e.currentTarget.style.color = "var(--green)"; }}
                onMouseOut={e => { e.currentTarget.style.color = "var(--white)"; }}
              >VIEW WORK <span style={{ fontSize: "16px" }}>↓</span></a>
            </div>

            {/* Photo — desktop only */}
            <div className="hero-photo-desktop" style={{ position: "relative", flexShrink: 0 }}>
              <div style={{ position: "absolute", top: -14, right: -14, width: "100%", height: "100%", border: "1px solid rgba(26,255,110,0.25)", borderRadius: "4px", zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1, width: "340px", borderRadius: "4px", overflow: "hidden", background: "#000" }}>
                <img src="/photo.png" alt="Oleksii Klymushkin" className="img-loaded" style={{ width: "100%", height: "auto", display: "block", filter: "contrast(1.05)" }} />
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

        {/* ── SERVICES ── */}
        <section id="about" className="services-section">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "56px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>02 / SERVICES</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>
            <div className="services-grid reveal-group">
              {[
                { n: "01", title: "UI/UX Design", desc: "User research, flows, wireframes, and final UI — built as a connected system, not a set of screens." },
                { n: "02", title: "Interface Design", desc: "ESC menus, admin panels, dashboards — I design for high information density without cognitive overload." },
                { n: "03", title: "Website Design", desc: "Landing pages that convert: fast load, clear CTA hierarchy, and a visual language that builds trust on first scroll." },
                { n: "04", title: "App Design", desc: "Mobile-first experiences where every tap has one clear goal. Frictionless flows, dark themes, zero decoration without function." },
              ].map((item, i) => (
                <div key={item.n} className="reveal" onMouseEnter={onEnter} onMouseLeave={onLeave}
                  style={{ position: "relative", padding: "clamp(24px, 3vw, 44px)", borderBottom: i < 2 ? "1px solid var(--border)" : "none", borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none", outline: "1px solid var(--border)", cursor: "default", transition: "background 0.3s", overflow: "hidden" }}
                  onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
                  onMouseOut={e => (e.currentTarget.style.background = "transparent")}
                >
                  <div style={{ position: "absolute", bottom: -12, right: 16, fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "120px", color: "rgba(26,255,110,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>{item.n}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", marginBottom: "20px", letterSpacing: "0.1em" }}>{item.n}</div>
                  <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(18px, 2.5vw, 26px)", color: "var(--white)", marginBottom: "14px", letterSpacing: "-0.02em" }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(13px, 1.5vw, 15px)", color: "var(--muted)", lineHeight: "1.65", maxWidth: "320px" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="exp-section">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>03 / EXPERIENCE</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>
            {[
              { name: "VimeWorld — Pixelmon Ultimate", role: "UI/UX Designer", year: "2025 — NOW", link: null, active: true },
              { name: "Czysto Cleaner", role: "UI/UX Designer & Web Developer", year: "2026", link: "https://czysto-cleaner.pl", active: false },
            ].map((job) => (
              <div key={job.name} className="liquid-border exp-row"
                style={{ borderRadius: "2px", marginBottom: "2px", transition: "background 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
                onMouseOut={e => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--green)", flexShrink: 0, animation: job.active ? "blink 2s infinite" : "none", opacity: job.active ? 1 : 0.4 }} />
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: "clamp(14px, 2vw, 20px)", color: "var(--white)" }}>{job.name}</span>
                      {job.link && (
                        <a href={job.link} target="_blank" rel="noreferrer"
                          style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", textDecoration: "none", border: "1px solid rgba(26,255,110,0.3)", padding: "2px 8px", borderRadius: "2px" }}
                          onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.1)")}
                          onMouseOut={e => (e.currentTarget.style.background = "transparent")}
                        >↗ czysto-cleaner.pl</a>
                      )}
                    </div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>{job.role}</div>
                  </div>
                </div>
                <div className="exp-year" style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--green)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{job.year}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WORKS ── */}
        <section id="works" className="works-section">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="reveal works-header" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px", padding: "0" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>04 / WORKS</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>
          </div>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }} className="works-inner">
            <style>{`@media(max-width:768px){.works-inner{padding:0 !important;}}`}</style>
            <div className="works-grid">
              {[
                { href: "/works/vimeworld",  img: CARD_IMG,           tag: "GAME UI · 2025",          title: "VimeWorld",      sub: "In-game GUI redesign for Minecraft server" },
                { href: "/works/lectra",     img: CARD_IMG_LECTRA,    tag: "MOBILE APP · 2025",       title: "Lectra",         sub: "Academic project — AI note-taking app" },
                { href: "/works/czysto",     img: CARD_IMG_CZYSTO,    tag: "WEB · COMMERCIAL · 2026", title: "Czysto Cleaner", sub: "Commercial website — design & development" },
                { href: "/works/rentease",   img: CARD_IMG_RENTEASE,  tag: "WEB APP · IN PROGRESS",   title: "RentEase",       sub: "Booking platform — academic project" },
              ].map(({ href, img, tag, title, sub }) => (
                <Link key={title} href={href} onMouseEnter={onEnter} onMouseLeave={onLeave}
                  className="work-card"
                  style={{ textDecoration: "none", background: "var(--bg)", display: "block", position: "relative", overflow: "hidden" }}>
                  <div className="work-card-img" style={{ position: "relative", overflow: "hidden" }}>
                    <img src={img} alt={title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "saturate(0.6) brightness(0.75)", transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1), filter 0.4s" }}
                      onMouseOver={e => { const el = e.currentTarget as HTMLImageElement; el.style.transform = "scale(1.05)"; el.style.filter = "saturate(1) brightness(0.9)"; }}
                      onMouseOut={e => { const el = e.currentTarget as HTMLImageElement; el.style.transform = "scale(1)"; el.style.filter = "saturate(0.6) brightness(0.75)"; }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,6,0.97) 0%, rgba(5,10,6,0.2) 50%, transparent 100%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                        <div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--green)", letterSpacing: "0.1em", marginBottom: "6px" }}>{tag}</div>
                          <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(16px, 2.5vw, 26px)", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "4px" }}>{title}</div>
                          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "rgba(232,232,224,0.45)", lineHeight: 1.4 }}>{sub}</div>
                        </div>
                        <div style={{ color: "var(--green)", fontSize: "22px", flexShrink: 0, marginLeft: 12 }}>↗</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="contact-section">
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "56px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>05 / CONTACT</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>
            <div className="contact-grid">
              <div className="reveal">
                <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4.5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "20px" }}>
                  Let&apos;s build something<br />
                  <span style={{ color: "var(--green)" }}>worth remembering.</span>
                </h2>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(14px, 1.5vw, 16px)", color: "var(--muted)", lineHeight: "1.7", maxWidth: "380px" }}>
                  Open to freelance, collaborations, and full-time roles. If you have a project in mind — let&apos;s talk.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "Telegram", hint: "Fastest response", href: LINKS.telegram, primary: true },
                  { label: "Instagram", hint: "Design updates", href: LINKS.instagram, primary: false },
                  { label: "Gmail", hint: "For proposals", href: LINKS.gmail, primary: false },
                ].map(({ label, hint, href, primary }) => (
                  <a key={label} href={href} target={label !== "Gmail" ? "_blank" : undefined} rel="noreferrer"
                    onMouseEnter={onEnter} onMouseLeave={onLeave}
                    className="liquid-border btn-press"
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: primary ? "22px 20px" : "18px 20px", textDecoration: "none", borderRadius: "2px", transition: "background 0.2s" }}
                    onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.05)")}
                    onMouseOut={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
                      <span style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: primary ? "clamp(16px, 2vw, 20px)" : "clamp(14px, 2vw, 17px)", color: "var(--white)", whiteSpace: "nowrap" }}>{label}</span>
                      {primary && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", color: "var(--green)", border: "1px solid rgba(26,255,110,0.4)", padding: "2px 6px", letterSpacing: "0.1em", whiteSpace: "nowrap", flexShrink: 0 }}>PRIMARY</span>}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                      <span className="contact-hint" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>{hint}</span>
                      <span style={{ color: "var(--green)", fontSize: "18px" }}>→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="main-footer">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>© 2025 OLEKSII KLYMUSHKIN</span>
          <div style={{ display: "flex", gap: "24px" }}>
            {[["Insta", LINKS.instagram], ["Telegram", LINKS.telegram], ["Gmail", LINKS.gmail]].map(([l, href]) => (
              <a key={l} href={href} target={l !== "Gmail" ? "_blank" : undefined} rel="noreferrer"
                onMouseEnter={onEnter} onMouseLeave={onLeave}
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

      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* ── NAV ── */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          padding: "20px 48px", display: "flex", justifyContent: "space-between",
          alignItems: "center", backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}>
          <style>{`
            @media (max-width: 768px) {
              .nav-links { display: none !important; }
              .nav-status { display: none !important; }
              .nav-hamburger { display: flex !important; }
              .mobile-menu { display: ${menuOpen ? "flex" : "none"} !important; }
              nav { padding: 16px 20px !important; }
            }
            @media (min-width: 769px) {
              .nav-hamburger { display: none !important; }
              .mobile-menu { display: none !important; }
            }
            .mobile-menu {
              position: fixed; top: 61px; left: 0; right: 0;
              background: rgba(5,10,6,0.97); backdrop-filter: blur(12px);
              flex-direction: column; padding: 24px 20px; gap: 0;
              border-bottom: 1px solid var(--border); z-index: 49;
            }
            .mobile-menu a {
              padding: 16px 0; font-family: 'DM Mono', monospace;
              font-size: 14px; color: var(--white); text-decoration: none;
              border-bottom: 1px solid var(--border); letter-spacing: 0.08em;
            }
          `}</style>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--green)", letterSpacing: "0.1em" }}>OK.DESIGN</span>
          <div className="nav-links" style={{ display: "flex", gap: "32px" }}>
            {([["Works", "#works", "works"], ["About", "#about", "about"], ["Contact", "#contact", "contact"]] as [string, string, string][]).map(([l, h, id]) => (
              <a key={l} href={h} onMouseEnter={onEnter} onMouseLeave={onLeave}
                className={`nav-link-anim${activeSection === id ? " active" : ""}`}
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: activeSection === id ? "var(--white)" : "var(--muted)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--white)")}
                onMouseOut={e => (e.currentTarget.style.color = activeSection === id ? "var(--white)" : "var(--muted)")}
              >{l}</a>
            ))}
          </div>
          <div className="nav-status" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>
            <span style={{ animation: "blink 1.2s infinite", color: "var(--green)" }}>●</span>&nbsp;Available for work
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px", padding: "4px" }}>
            {[0,1,2].map(i => <div key={i} style={{ width: "22px", height: "2px", background: menuOpen && i === 1 ? "transparent" : "var(--white)", transition: "all 0.3s",
              transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px, 5px)" : i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "") : "" }} />)}
          </button>
        </nav>

        {/* Mobile menu */}
        <div className="mobile-menu">
          {[["Works", "#works"], ["About", "#about"], ["Contact", "#contact"]].map(([l, h]) => (
            <a key={l} href={h} onClick={() => setMenuOpen(false)}>{l}</a>
          ))}
        </div>

        {/* ── HERO ── */}
        <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 48px 64px", position: "relative", overflow: "hidden" }}>
          <style>{`
            @media (max-width: 1024px) { .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; } .hero-photo { display: none !important; } }
            @media (max-width: 768px) { .hero-section { padding: 100px 20px 48px !important; } .hero-stats { gap: 24px !important; } }
          `}</style>
          <div style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(180px, 30vw, 420px)", color: "rgba(26,255,110,0.03)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>01</div>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(26,255,110,0.4), transparent)", animation: "scanline 6s linear infinite", opacity: 0.4 }} />

          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "80px", alignItems: "center", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ maxWidth: "580px" }}>
              <div className="hero-tag" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
                <div style={{ width: "32px", height: "1px", background: "var(--green)" }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase" }}>UI/UX Designer</span>
              </div>
              <h1 className="hero-title" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 7vw, 92px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "36px" }}>
                Oleksii<br />
                <span className="liquid-text">Klymushkin</span>
              </h1>
              <p className="hero-bio" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: "1.75", color: "var(--muted)", maxWidth: "440px", marginBottom: "48px" }}>
                Creating interfaces where every pixel has a reason. Game UI, web experiences, and digital products that feel alive.
              </p>
              <div className="hero-stats" style={{ display: "flex", gap: "40px", marginBottom: "40px" }}>
                {[["04", "Projects"], ["01", "Year Exp"], ["∞", "Ideas"]].map(([n, l]) => (
                  <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "34px", color: "var(--green)", lineHeight: 1, height: "40px", display: "flex", alignItems: l === "Ideas" ? "center" : "flex-end" }}>{n}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", marginTop: "8px", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", whiteSpace: "nowrap" }}>{l}</div>
                  </div>
                ))}
              </div>
              <a href="#works" onMouseEnter={onEnter} onMouseLeave={onLeave}
                className="hero-cta liquid-border shimmer-btn btn-press"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 28px", fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.15em", color: "var(--white)", textDecoration: "none", borderRadius: "2px" }}
                onMouseOver={e => { e.currentTarget.style.color = "var(--green)"; }}
                onMouseOut={e => { e.currentTarget.style.color = "var(--white)"; }}
              >VIEW WORK <span style={{ fontSize: "16px" }}>↓</span></a>
            </div>

            <div className="hero-photo" style={{ position: "relative", flexShrink: 0 }}>
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

        {/* ── SERVICES ── */}
        <section id="about" style={{ padding: "120px 48px" }}>
          <style>{`
            @media (max-width: 768px) { .services-section { padding: 60px 20px !important; } .services-grid { grid-template-columns: 1fr !important; } }
            @media (max-width: 1024px) { .services-grid { grid-template-columns: 1fr 1fr !important; } }
          `}</style>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "80px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>02 / SERVICES</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>
            <div className="services-grid reveal-group" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
              {[
                { n: "01", title: "UI/UX Design", desc: "User research, flows, wireframes, and final UI — built as a connected system, not a set of screens." },
                { n: "02", title: "Interface Design", desc: "ESC menus, admin panels, dashboards — I design for high information density without cognitive overload." },
                { n: "03", title: "Website Design", desc: "Landing pages that convert: fast load, clear CTA hierarchy, and a visual language that builds trust on first scroll." },
                { n: "04", title: "App Design", desc: "Mobile-first experiences where every tap has one clear goal. Frictionless flows, dark themes, zero decoration without function." },
              ].map((item, i) => (
                <div key={item.n} className="reveal" onMouseEnter={onEnter} onMouseLeave={onLeave}
                  style={{ position: "relative", padding: "clamp(24px, 3vw, 44px)", borderBottom: i < 2 ? "1px solid var(--border)" : "none", borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none", outline: "1px solid var(--border)", cursor: "default", transition: "background 0.3s", overflow: "hidden" }}
                  onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
                  onMouseOut={e => (e.currentTarget.style.background = "transparent")}
                >
                  <div style={{ position: "absolute", bottom: -12, right: 16, fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "120px", color: "rgba(26,255,110,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>{item.n}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", marginBottom: "20px", letterSpacing: "0.1em" }}>{item.n}</div>
                  <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--white)", marginBottom: "14px", letterSpacing: "-0.02em" }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(13px, 1.5vw, 15px)", color: "var(--muted)", lineHeight: "1.65", maxWidth: "320px" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section style={{ padding: "0 48px 120px" }}>
          <style>{`@media (max-width: 768px) { .exp-section { padding: 0 20px 60px !important; } .exp-row { flex-direction: column !important; gap: 8px !important; align-items: flex-start !important; padding: 20px 16px !important; } }`}</style>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>03 / EXPERIENCE</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>
            {[
              { name: "VimeWorld — Pixelmon Ultimate", role: "UI/UX Designer", year: "2025 — NOW", link: null, active: true },
              { name: "Czysto Cleaner", role: "UI/UX Designer & Web Developer", year: "2026", link: "https://czysto-cleaner.pl", active: false },
            ].map((job) => (
              <div key={job.name} className="liquid-border exp-row"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 32px", borderRadius: "2px", marginBottom: "2px", transition: "background 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
                onMouseOut={e => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--green)", flexShrink: 0, animation: job.active ? "blink 2s infinite" : "none", opacity: job.active ? 1 : 0.4 }} />
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: "clamp(16px, 2vw, 22px)", color: "var(--white)" }}>{job.name}</span>
                      {job.link && (
                        <a href={job.link} target="_blank" rel="noreferrer"
                          style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", textDecoration: "none", border: "1px solid rgba(26,255,110,0.3)", padding: "2px 8px", borderRadius: "2px" }}
                          onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.1)")}
                          onMouseOut={e => (e.currentTarget.style.background = "transparent")}
                        >↗ czysto-cleaner.pl</a>
                      )}
                    </div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>{job.role}</div>
                  </div>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--green)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{job.year}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WORKS ── */}
        <section id="works" style={{ padding: "0 48px 120px" }}>
          <style>{`
            @media (max-width: 768px) { .works-section { padding: 0 0 60px !important; } .works-header { padding: 0 20px !important; margin-bottom: 24px !important; } .works-grid { grid-template-columns: 1fr !important; } .work-card-img { height: 260px !important; } }
            @media (max-width: 1024px) { .works-grid { grid-template-columns: 1fr 1fr !important; } }
          `}</style>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "64px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>04 / WORKS</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>
            <div className="works-grid reveal-group" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "var(--border)" }}>
              {[
                { href: "/works/vimeworld",  img: CARD_IMG,           tag: "GAME UI · 2025",          title: "VimeWorld",      sub: "In-game GUI redesign for Minecraft server" },
                { href: "/works/lectra",     img: CARD_IMG_LECTRA,    tag: "MOBILE APP · 2025",       title: "Lectra",         sub: "Academic project — AI note-taking app" },
                { href: "/works/czysto",     img: CARD_IMG_CZYSTO,    tag: "WEB · COMMERCIAL · 2026", title: "Czysto Cleaner", sub: "Commercial website — design & development" },
                { href: "/works/rentease",   img: CARD_IMG_RENTEASE,  tag: "WEB APP · IN PROGRESS",   title: "RentEase",       sub: "Booking platform — academic project" },
              ].map(({ href, img, tag, title, sub }) => (
                <Link key={title} href={href} onMouseEnter={onEnter} onMouseLeave={onLeave}
                  className="work-card"
                  style={{ textDecoration: "none", background: "var(--bg)", display: "block", position: "relative", overflow: "hidden" }}>
                  <div className="work-card-img" style={{ position: "relative", height: "400px", overflow: "hidden" }}>
                    <img src={img} alt={title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "saturate(0.6) brightness(0.75)", transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1), filter 0.4s" }}
                      onMouseOver={e => { const el = e.currentTarget as HTMLImageElement; el.style.transform = "scale(1.05)"; el.style.filter = "saturate(1) brightness(0.9)"; }}
                      onMouseOut={e => { const el = e.currentTarget as HTMLImageElement; el.style.transform = "scale(1)"; el.style.filter = "saturate(0.6) brightness(0.75)"; }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,6,0.95) 0%, transparent 55%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                        <div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.1em", marginBottom: "6px" }}>{tag}</div>
                          <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--white)", letterSpacing: "-0.02em", marginBottom: "4px" }}>{title}</div>
                          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "rgba(232,232,224,0.45)", lineHeight: 1.4 }}>{sub}</div>
                        </div>
                        <div style={{ color: "var(--green)", fontSize: "24px", flexShrink: 0 }}>↗</div>
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
          <style>{`
            @media (max-width: 1024px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
            @media (max-width: 768px) { .contact-section { padding: 60px 20px 80px !important; } .contact-btns { flex-direction: column !important; } .contact-btns a { text-align: center; } }
          `}</style>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "72px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>05 / CONTACT</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>
            <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
              <div className="reveal">
                <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "24px" }}>
                  Let&apos;s build something<br />
                  <span style={{ color: "var(--green)" }}>worth remembering.</span>
                </h2>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(14px, 1.5vw, 16px)", color: "var(--muted)", lineHeight: "1.7", maxWidth: "380px" }}>
                  Open to freelance, collaborations, and full-time roles. If you have a project in mind — let&apos;s talk.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: "Telegram", hint: "Fastest response", href: LINKS.telegram, primary: true },
                  { label: "Instagram", hint: "Design updates", href: LINKS.instagram, primary: false },
                  { label: "Gmail", hint: "For proposals", href: LINKS.gmail, primary: false },
                ].map(({ label, hint, href, primary }) => (
                  <a key={label} href={href} target={label !== "Gmail" ? "_blank" : undefined} rel="noreferrer" onMouseEnter={onEnter} onMouseLeave={onLeave}
                    className="liquid-border btn-press"
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: primary ? "26px 24px" : "22px 24px", textDecoration: "none", borderRadius: "2px", transition: "background 0.2s" }}
                    onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.05)")}
                    onMouseOut={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: primary ? "clamp(18px, 2vw, 22px)" : "clamp(16px, 2vw, 18px)", color: "var(--white)" }}>{label}</span>
                      {primary && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--green)", border: "1px solid rgba(26,255,110,0.4)", padding: "2px 8px", letterSpacing: "0.1em" }}>PRIMARY</span>}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>{hint}</span>
                      <span style={{ color: "var(--green)", fontSize: "18px", transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1)" }}
                        onMouseOver={e => (e.currentTarget.style.transform = "translateX(4px)")}
                        onMouseOut={e => (e.currentTarget.style.transform = "translateX(0)")}
                      >→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <style>{`@media (max-width: 768px) { .footer-inner { padding: 20px !important; flex-direction: column !important; align-items: flex-start !important; } }`}</style>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>© 2025 OLEKSII KLYMUSHKIN</span>
          <div style={{ display: "flex", gap: "24px" }}>
            {[["Insta", LINKS.instagram], ["Telegram", LINKS.telegram], ["Gmail", LINKS.gmail]].map(([l, href]) => (
              <a key={l} href={href} target={l !== "Gmail" ? "_blank" : undefined} rel="noreferrer" onMouseEnter={onEnter} onMouseLeave={onLeave}
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
