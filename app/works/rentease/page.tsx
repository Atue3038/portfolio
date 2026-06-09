"use client";
import Image from "next/image";
import { useState } from "react";
import { useCursor, CursorElements, CaseNav, CaseContact, CaseFooter, Lightbox } from "@/components/CaseShell";
import { useLang } from "@/lib/LangContext";

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
        <Image src={src} alt={alt} width={1440} height={900} className="img-loaded lb" style={{ width: "100%", height: "auto", display: "block", cursor: "zoom-in" }} quality={95} />
      </div>
      {caption && <span style={{ ...m, fontSize: "11px", color: "rgba(240,244,241,0.3)", textAlign: "center", letterSpacing: "0.06em" }}>{caption}</span>}
    </div>
  );
}

export default function RentEaseCase() {
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
              <span style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em" }}>{tr("rentease_tag")}</span>
            </div>
            <h1 className="reveal" style={{ ...s, fontWeight: 800, fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#f0f4f1", marginBottom: "24px" }}>
              RentEase —<br />
              <span style={{ background: "linear-gradient(90deg,#fff 0%,#1aff6e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Booking</span><br />
              Platform
            </h1>
            <p className="reveal" style={{ ...f, fontSize: "18px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", maxWidth: "560px", marginBottom: "32px" }}>
              {tr("rentease_bio")}
            </p>
            <div className="reveal" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
              {["Web Design", "UI/UX", "Booking Platform", "Academic", "In Progress"].map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            {/* In progress badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ffcc00", animation: "blink 2s infinite" }} />
              <span style={{ ...m, fontSize: "11px", color: "rgba(240,244,241,0.4)", letterSpacing: "0.1em" }}>{tr("re_wip")}</span>
            </div>
          </div>

          {/* HERO SCREENSHOT */}
          <Shot src={SCREENS.main} alt="RentEase — main screen" caption={tr("re_cap1")} />

          <Divider />

          {/* OVERVIEW */}
          <Label n="01" text={tr("rentease_l1")} />
          <div className="re-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", marginBottom: "0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                {tr("re_ov_p1")}
              </p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                {tr("re_ov_p2")}
              </p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                {tr("re_ov_p3")}
              </p>
            </div>
            <div>
              {([
                ["re_meta_type",     "re_meta_type_v"],
                ["re_meta_role",     "re_meta_role_v"],
                ["re_meta_platform", "re_meta_platform_v"],
                ["re_meta_tool",     "re_meta_tool_v"],
                ["re_meta_year",     "re_meta_year_v"],
                ["re_meta_status",   "re_meta_status_v"],
              ] as [string,string][]).map(([lk, vk]) => (
                <div key={lk} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid rgba(240,244,241,0.07)" }}>
                  <span style={{ ...m, fontSize: "11px", color: "rgba(240,244,241,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{tr(lk)}</span>
                  <span style={{ ...f, fontSize: "15px", color: "#f0f4f1", fontWeight: 600 }}>{tr(vk)}</span>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* SCREENS */}
          <Label n="02" text={tr("rentease_l2")} />

          {/* Search + Location */}
          <div className="re-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "72px" }}>
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>{tr("re_s1_num")}</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>{tr("re_s1_title")}</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
                {tr("re_s1_p1")}
              </p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
                {tr("re_s1_p2")}
              </p>
            </div>
            <Shot src={SCREENS.location} alt="Location dropdown" caption={tr("re_cap2")} />
          </div>

          {/* Calendar */}
          <div className="re-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "72px" }}>
            <Shot src={SCREENS.calRange} alt="Date range selected" caption={tr("re_cap3")} />
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>{tr("re_s2_num")}</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>{tr("re_s2_title")}</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
                {tr("re_s2_p1")}
              </p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
                {tr("re_s2_p2")}
              </p>
            </div>
          </div>

          {/* Calendar states row */}
          <div className="re-3shot" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginBottom: "72px" }}>
            <Shot src={SCREENS.calEmpty} alt="Calendar empty" caption={tr("re_cal1")} />
            <Shot src={SCREENS.calStart} alt="Calendar start selected" caption={tr("re_cal2")} />
            <Shot src={SCREENS.calRange} alt="Calendar range selected" caption={tr("re_cal3")} />
          </div>

          {/* Auth */}
          <div className="re-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>{tr("re_s3_num")}</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "28px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>{tr("re_s3_title")}</h3>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
                {tr("re_s3_p1")}
              </p>
              <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
                {tr("re_s3_p2")}
              </p>
            </div>
            <Shot src={SCREENS.auth} alt="Auth modal" caption={tr("re_auth_cap")} />
          </div>

          <Divider />

          {/* DESIGN DECISIONS */}
          <Label n="03" text={tr("rentease_l3")} />
          <div className="re-3col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)", marginBottom: "0" }}>
            {[
              { icon: "🤍", tk: "re_dd1" },
              { icon: "🔵", tk: "re_dd2" },
              { icon: "🗂️", tk: "re_dd3" },
              { icon: "📍", tk: "re_dd4" },
              { icon: "📅", tk: "re_dd5" },
              { icon: "🔐", tk: "re_dd6" },
            ].map((item: any) => (
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

          <Divider />

          {/* RESULT */}
          <Label n="04" text={tr("re_result_label")} />
          <div className="re-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                {tr("re_r_p1")}
              </p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                {tr("re_r_p2")}
              </p>
              <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
                {tr("re_r_p3")}
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)" }}>
              {([["6","re_stat1"],["3","re_stat2"],["1","re_stat3"],["∞","re_stat4"]] as [string,string][]).map(([n, lk]) => (
                <div key={n} style={{ background: "#050a06", padding: "32px 24px", textAlign: "center" }}>
                  <div style={{ ...s, fontWeight: 800, fontSize: "44px", color: "#1aff6e", lineHeight: 1, marginBottom: "8px" }}>{n}</div>
                  <div style={{ ...m, fontSize: "10px", color: "rgba(240,244,241,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{tr(lk)}</div>
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
