"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import type { Lang } from "@/lib/i18n";

const LINKS = {
  telegram:  "https://t.me/atuedesign",
  instagram: "https://www.instagram.com/atue_design?igsh=ZmRnbXFuNWh6ZWhj&utm_source=qr",
  gmail:     "mailto:atue3038@gmail.com",
};

function LangSwitcher({ onEnter, onLeave }: { onEnter: () => void; onLeave: () => void }) {
  const { lang, setLang } = useLang();
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {(["en", "ua", "ru"] as Lang[]).map(l => (
        <button key={l} onClick={() => setLang(l)}
          onMouseEnter={onEnter} onMouseLeave={onLeave}
          style={{
            background: lang === l ? "rgba(26,255,110,0.12)" : "transparent",
            border: `1px solid ${lang === l ? "rgba(26,255,110,0.5)" : "var(--border)"}`,
            color: lang === l ? "var(--green)" : "var(--muted)",
            fontFamily: "'DM Mono', monospace", fontSize: "10px",
            letterSpacing: "0.08em", padding: "4px 8px",
            cursor: "pointer", borderRadius: "2px", transition: "all 0.2s",
            textTransform: "uppercase",
          }}
        >{l}</button>
      ))}
    </div>
  );
}

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const rafRef    = useRef<number>(0);
  const mousePos  = useRef({ x: 0, y: 0 });
  const ringPos   = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Page enter animation
    const main = document.querySelector<HTMLElement>("main");
    if (main) {
      main.classList.remove("page-enter");
      void main.offsetHeight;
      main.classList.add("page-enter");
    }

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
    };

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px";
        ringRef.current.style.top  = ringPos.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    /* Scroll reveal — text elements only */
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(el => io.observe(el));

    /* Image fade-in on load — no FOUC */
    const imgs = document.querySelectorAll<HTMLImageElement>("img");
    imgs.forEach(img => {
      if (img.complete) {
        img.classList.add("img-loaded");
      } else {
        img.addEventListener("load", () => img.classList.add("img-loaded"), { once: true });
        img.addEventListener("error", () => img.classList.add("img-loaded"), { once: true });
      }
    });

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      io.disconnect();
    };
  }, []);

  return { cursorRef, ringRef, hovered, setHovered };
}

export function CursorElements({
  cursorRef,
  ringRef,
  hovered,
}: {
  cursorRef: React.RefObject<HTMLDivElement>;
  ringRef: React.RefObject<HTMLDivElement>;
  hovered: boolean;
}) {
  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        style={{
          transform: `translate(-50%,-50%) scale(${hovered ? 3 : 1})`,
          background: hovered ? "transparent" : "var(--green)",
          border: hovered ? "1px solid var(--green)" : "none",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ width: hovered ? 56 : 36, height: hovered ? 56 : 36 }}
      />
    </>
  );
}

export function CaseNav({
  onEnter,
  onLeave,
  backHref = "/#works",
}: {
  onEnter: () => void;
  onLeave: () => void;
  backHref?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { tr } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const navContent = (
    <>
      <nav
        className="case-nav"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
          padding: "0 48px", height: "61px", display: "flex",
          justifyContent: "space-between", alignItems: "center",
          backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
          background: "rgba(5,10,6,0.92)",
        }}
      >
        <style>{`
          @media (max-width: 768px) {
            .case-nav { padding: 0 20px !important; }
            .case-nav-center { display: none !important; }
            .case-nav-right { display: none !important; }
            .case-nav-hamburger { display: flex !important; }
          }
        `}</style>

        {/* Left: logo + back */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Link href="/" onMouseEnter={onEnter} onMouseLeave={onLeave}
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--green)", letterSpacing: ".1em", textDecoration: "none" }}
          >OK.DESIGN</Link>
          <Link href={backHref} onMouseEnter={onEnter} onMouseLeave={onLeave}
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", letterSpacing: ".1em", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, transition: "color .2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "var(--white)")}
            onMouseOut={e => (e.currentTarget.style.color = "var(--muted)")}
          >← BACK</Link>
        </div>

        {/* Center: links */}
        <div className="case-nav-center" style={{ display: "flex", gap: "32px" }}>
          {([
            [tr("nav_works"), "/#works"],
            [tr("nav_about"), "/#about"],
            [tr("nav_contact"), "/#contact"],
          ] as [string, string][]).map(([l, h]) => (
            <a key={l} href={h} onMouseEnter={onEnter} onMouseLeave={onLeave}
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "var(--muted)", textDecoration: "none", letterSpacing: ".05em", transition: "color .2s" }}
              onMouseOver={e => (e.currentTarget.style.color = "var(--white)")}
              onMouseOut={e => (e.currentTarget.style.color = "var(--muted)")}
            >{l}</a>
          ))}
        </div>

        {/* Right: status + lang + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span className="case-nav-right" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", whiteSpace: "nowrap" }}>
            <span style={{ animation: "blink 1.2s infinite", color: "var(--green)" }}>●</span>&nbsp;{tr("nav_available")}
          </span>
          <div className="case-nav-right"><LangSwitcher onEnter={onEnter} onLeave={onLeave} /></div>
          <button className="case-nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: "5px", padding: "4px", display: "none" }}
          >
            {[0, 1, 2].map(i => (
              <div key={i} style={{ width: "22px", height: "2px", background: menuOpen && i === 1 ? "transparent" : "var(--white)", transition: "all 0.3s",
                transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px, 5px)" : i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "") : "" }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: "fixed", top: "61px", left: 0, right: 0, zIndex: 9998,
        background: "rgba(5,10,6,0.97)", backdropFilter: "blur(12px)",
        flexDirection: "column", padding: "24px 20px", gap: 0,
        borderBottom: "1px solid var(--border)",
        display: menuOpen ? "flex" : "none",
      }}>
        {([
          [tr("nav_works"), "/#works"],
          [tr("nav_about"), "/#about"],
          [tr("nav_contact"), "/#contact"],
        ] as [string, string][]).map(([l, h]) => (
          <a key={l} href={h} onClick={() => setMenuOpen(false)}
            style={{ padding: "16px 0", fontFamily: "'DM Mono', monospace", fontSize: "14px", color: "var(--white)", textDecoration: "none", borderBottom: "1px solid var(--border)", letterSpacing: "0.08em" }}
          >{l}</a>
        ))}
      </div>
    </>
  );

  if (!mounted) return null;

  // Render nav directly into body via portal — bypasses all stacking contexts
  const { createPortal } = require("react-dom");
  return createPortal(navContent, document.body);
}

export function CaseContact({
  onEnter,
  onLeave,
}: {
  onEnter: () => void;
  onLeave: () => void;
}) {
  const { tr } = useLang();
  return (
    <section style={{ borderTop: "1px solid var(--border)", marginTop: 100, padding: "80px 0 100px" }}>
      <style>{`
        @media (max-width: 768px) {
          .case-contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .case-contact-wrap { padding: 0 20px !important; }
          .case-contact-hint { display: none !important; }
        }
      `}</style>
      <div className="case-contact-wrap" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: ".15em" }}>{tr("contact_label")}</span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </div>
        <div className="case-contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(28px,4.5vw,52px)", lineHeight: 1.1, letterSpacing: "-.03em", color: "var(--white)", marginBottom: 20 }}>
              {tr("contact_h")}<br /><span style={{ color: "var(--green)" }}>{tr("contact_h_accent")}</span>
            </h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: "var(--muted)", lineHeight: 1.7, maxWidth: 360 }}>
              {tr("contact_p")}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Telegram",  hintKey: "tg_hint", href: LINKS.telegram,  primary: true  },
              { label: "Instagram", hintKey: "ig_hint", href: LINKS.instagram, primary: false },
              { label: "Gmail",     hintKey: "gm_hint", href: LINKS.gmail,     primary: false },
            ].map(({ label, hintKey, href, primary }) => (
              <a key={label} href={href}
                target={label !== "Gmail" ? "_blank" : undefined}
                rel="noreferrer"
                onMouseEnter={onEnter} onMouseLeave={onLeave}
                className="liquid-border"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: primary ? "22px 20px" : "18px 20px", textDecoration: "none", borderRadius: 2, transition: "background .2s" }}
                onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,.05)")}
                onMouseOut={e => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: primary ? 18 : 16, color: "var(--white)" }}>{label}</span>
                  {primary && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "var(--green)", border: "1px solid rgba(26,255,110,0.4)", padding: "2px 6px", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>PRIMARY</span>}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span className="case-contact-hint" style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--muted)" }}>{tr(hintKey as any)}</span>
                  <span style={{ color: "var(--green)", fontSize: 18 }}>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseFooter({
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
  onEnter,
  onLeave,
}: {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
      <div style={{ display: "flex", gap: 24 }}>
        {prevHref && (
          <Link href={prevHref}
            onMouseEnter={onEnter} onMouseLeave={onLeave}
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", textDecoration: "none", letterSpacing: ".1em", transition: "color .2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "var(--green)")}
            onMouseOut={e => (e.currentTarget.style.color = "var(--muted)")}
          >← {prevLabel}</Link>
        )}
        {nextHref && (
          <Link href={nextHref}
            onMouseEnter={onEnter} onMouseLeave={onLeave}
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", textDecoration: "none", letterSpacing: ".1em", transition: "color .2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "var(--green)")}
            onMouseOut={e => (e.currentTarget.style.color = "var(--muted)")}
          >NEXT: {nextLabel} →</Link>
        )}
      </div>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>© 2025 OLEKSII KLYMUSHKIN</span>
      <div style={{ display: "flex", gap: 24 }}>
        {([["Insta", LINKS.instagram], ["Telegram", LINKS.telegram], ["Gmail", LINKS.gmail]] as [string, string][]).map(([l, href]) => (
          <a key={l} href={href}
            target={l !== "Gmail" ? "_blank" : undefined}
            rel="noreferrer"
            onMouseEnter={onEnter} onMouseLeave={onLeave}
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", textDecoration: "none", letterSpacing: ".1em", transition: "color .2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "var(--green)")}
            onMouseOut={e => (e.currentTarget.style.color = "var(--muted)")}
          >{l}</a>
        ))}
      </div>
    </footer>
  );
}

/* ── LIGHTBOX ── */
export function Lightbox() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const img = target.closest<HTMLImageElement>("img.lb");
      if (img) { e.preventDefault(); setSrc(img.src); }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSrc(null); };
    if (src) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [src]);

  if (!src) return null;

  return (
    <div
      onClick={() => setSrc(null)}
      style={{
        position: "fixed", inset: 0, zIndex: 9990,
        background: "rgba(5,10,6,0.92)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "32px", cursor: "zoom-out",
        animation: "fadeIn 0.2s ease both",
      }}
    >
      {/* Close button */}
      <button
        onClick={() => setSrc(null)}
        style={{
          position: "fixed", top: 24, right: 24,
          background: "rgba(240,244,241,0.08)", border: "1px solid var(--border)",
          color: "var(--white)", width: 44, height: 44, borderRadius: "50%",
          fontSize: 20, cursor: "pointer", display: "flex",
          alignItems: "center", justifyContent: "center",
          transition: "background .2s", zIndex: 1,
        }}
        onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.15)")}
        onMouseOut={e => (e.currentTarget.style.background = "rgba(240,244,241,0.08)")}
      >×</button>

      <img
        src={src}
        alt=""
        onClick={e => e.stopPropagation()}
        className="img-loaded"
        style={{
          maxWidth: "90vw", maxHeight: "88vh",
          width: "auto", height: "auto",
          objectFit: "contain", borderRadius: 4,
          border: "1px solid rgba(240,244,241,0.12)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          cursor: "default",
          imageRendering: "auto",
          WebkitImageRendering: "auto" as any,
          animation: "fadeIn 0.25s ease both",
        }}
      />

      {/* Hint */}
      <div style={{
        position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
        fontFamily: "'DM Mono', monospace", fontSize: 11,
        color: "var(--muted)", letterSpacing: "0.1em",
      }}>
        ESC или клик для закрытия
      </div>
    </div>
  );
}
