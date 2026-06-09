"use client";
import Image from "next/image";
import { useState } from "react";
import { useCursor, CursorElements, CaseNav, CaseContact, CaseFooter, Lightbox } from "@/components/CaseShell";
import { useLang } from "@/lib/LangContext";

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

function Screenshot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(240,244,241,0.08)", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
        <Image src={src} alt={alt} width={1440} height={900} className="img-loaded lb" style={{ width: "100%", height: "auto", display: "block", cursor: "zoom-in" }} quality={95} />
      </div>
      {caption && <span style={{ ...m, fontSize: "11px", color: "rgba(240,244,241,0.3)", textAlign: "center", letterSpacing: "0.06em" }}>{caption}</span>}
    </div>
  );
}

export default function CzystoCase() {
  const { cursorRef, ringRef, hovered, setHovered } = useCursor();
  const { tr } = useLang();
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
            .czy-inner { padding: 120px 20px 80px !important; }
            .czy-grid  { grid-template-columns: 1fr !important; gap: 40px !important; }
            .czy-3col  { grid-template-columns: 1fr !important; }
          }
        `}</style>
        <div className="czy-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 48px 120px" }}>

          {/* HERO */}
          <div style={{ marginBottom: "72px" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "28px", height: "1px", background: "#1aff6e" }} />
              <span style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em" }}>{tr("czysto_tag")}</span>
            </div>
            <h1 className="reveal" style={{ ...s, fontWeight: 800, fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#f0f4f1", marginBottom: "24px" }}>
              Czysto Cleaner —<br />
              <span style={{ background: "linear-gradient(90deg,#fff 0%,#1aff6e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Website</span><br />
              End-to-End
            </h1>
            <p className="reveal" style={{ ...f, fontSize: "18px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", maxWidth: "560px", marginBottom: "32px" }}>
              {tr("czysto_bio")}
            </p>
            <div className="reveal" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
              {["Web Design", "Development", "Next.js", "Commercial", "PL / RU / EN"].map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            <a className="reveal" href="https://czysto-cleaner.pl" target="_blank" rel="noreferrer" onMouseEnter={onEnter} onMouseLeave={onLeave}
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid rgba(26,255,110,0.4)", borderRadius: "4px", padding: "12px 20px", ...m, fontSize: "12px", color: "#1aff6e", textDecoration: "none", letterSpacing: "0.1em", transition: "background 0.2s" }}
              onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.08)")}
              onMouseOut={e => (e.currentTarget.style.background = "transparent")}
            >{tr("czysto_visit")}</a>
          </div>

          <Screenshot src={SCREENS.hero} alt="Czysto Cleaner — Hero" caption="Hero section" />
          <Divider />

          {/* OVERVIEW */}
          <Label n="01" text={tr("czysto_l1")} />
          <div className="czy-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", marginBottom: "60px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>{tr("czysto_ov_p1")}</p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>{tr("czysto_ov_p2")}</p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>{tr("czysto_ov_p3")}</p>
            </div>
            <div>
              {[
                ["czysto_meta_client",   "czysto_meta_client_v"],
                ["czysto_meta_platform", "czysto_meta_platform_v"],
                ["czysto_meta_role",     "czysto_meta_role_v"],
                ["czysto_meta_stack",    "czysto_meta_stack_v"],
                ["czysto_meta_langs",    "czysto_meta_langs_v"],
                ["czysto_meta_year",     "czysto_meta_year_v"],
                ["czysto_meta_status",   "czysto_meta_status_v"],
              ].map(([lk, vk]) => (
                <div key={lk} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid rgba(240,244,241,0.06)" }}>
                  <span style={{ ...m, fontSize: "10px", color: "rgba(240,244,241,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{tr(lk)}</span>
                  <span style={{ ...s, fontWeight: 700, fontSize: "14px", color: "#f0f4f1", textAlign: "right" }}>{tr(vk)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DESIGN DECISIONS */}
          <Divider />
          <Label n="02" text={tr("czysto_l2")} />
          <div className="czy-3col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.06)", marginBottom: "0" }}>
            {([
              { icon: "🤍", tk: "czysto_dd_1" },
              { icon: "🌍", tk: "czysto_dd_2" },
              { icon: "📱", tk: "czysto_dd_3" },
              { icon: "⚡", tk: "czysto_dd_4" },
              { icon: "🎥", tk: "czysto_dd_5" },
              { icon: "🎁", tk: "czysto_dd_6" },
            ] as { icon: string; tk: string }[]).map(item => (
              <div key={item.tk} style={{ background: "#050a06", padding: "32px 28px", transition: "background 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
                onMouseOut={e => (e.currentTarget.style.background = "#050a06")}
              >
                <div style={{ fontSize: "24px", marginBottom: "14px" }}>{item.icon}</div>
                <h3 style={{ ...s, fontWeight: 800, fontSize: "17px", color: "#f0f4f1", marginBottom: "10px" }}>{tr(`${item.tk}_title`)}</h3>
                <p style={{ ...f, fontSize: "13px", lineHeight: "1.65", color: "rgba(240,244,241,0.45)" }}>{tr(`${item.tk}_desc`)}</p>
              </div>
            ))}
          </div>

          <Screenshot src={SCREENS.advantages} alt="Nasze zalety" caption="Advantages section" />
          <Divider />

          {/* SECTIONS BREAKDOWN */}
          <Label n="03" text={tr("czysto_l3")} />

          <div className="czy-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "72px" }}>
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>{tr("czysto_s1_num")}</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>{tr("czysto_s1_title")}</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>{tr("czysto_s1_p1")}</p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>{tr("czysto_s1_p2")}</p>
            </div>
            <Screenshot src={SCREENS.included} alt="Co wchodzi w skład usługi" />
          </div>

          <div className="czy-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "72px" }}>
            <Screenshot src={SCREENS.pricing} alt="Cennik" />
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>{tr("czysto_s2_num")}</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>{tr("czysto_s2_title")}</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>{tr("czysto_s2_p1")}</p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>{tr("czysto_s2_p2")}</p>
            </div>
          </div>

          <div className="czy-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "72px" }}>
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>{tr("czysto_s3_num")}</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>{tr("czysto_s3_title")}</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>{tr("czysto_s3_p1")}</p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>{tr("czysto_s3_p2")}</p>
            </div>
            <Screenshot src={SCREENS.equipment} alt="Sprzęt i gwarancje" />
          </div>

          <div className="czy-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <Screenshot src={SCREENS.contact} alt="Kontakt" />
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>{tr("czysto_s4_num")}</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>{tr("czysto_s4_title")}</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>{tr("czysto_s4_p1")}</p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>{tr("czysto_s4_p2")}</p>
            </div>
          </div>

          <Divider />

          {/* RESULT */}
          <Label n="04" text={tr("czysto_l4")} />
          <div className="czy-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>{tr("czysto_r_p1")}</p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>{tr("czysto_r_p2")}</p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>{tr("czysto_r_p3")}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)" }}>
              {([
                ["01", "czysto_stat_1"],
                ["3",  "czysto_stat_2"],
                ["6",  "czysto_stat_3"],
                ["∞",  "czysto_stat_4"],
              ] as [string, string][]).map(([n, lk]) => (
                <div key={lk} style={{ background: "#050a06", padding: "32px 24px", textAlign: "center" }}>
                  <div style={{ ...s, fontWeight: 800, fontSize: "44px", color: "#1aff6e", lineHeight: 1, marginBottom: "8px" }}>{n}</div>
                  <div style={{ ...m, fontSize: "10px", color: "rgba(240,244,241,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{tr(lk)}</div>
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
