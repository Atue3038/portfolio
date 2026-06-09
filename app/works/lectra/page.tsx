"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCursor, CursorElements, CaseNav, CaseContact, CaseFooter, Lightbox } from "@/components/CaseShell";
import { useLang } from "@/lib/LangContext";

const f = { fontFamily: "'Space Grotesk', sans-serif" } as const;
const m = { fontFamily: "'DM Mono', monospace" } as const;
const s = { fontFamily: "'Unbounded', sans-serif" } as const;

const SCREENS = {
  home:     "/lectra_home.png",
  library:  "/lectra_library.png",
  discrete: "/lectra_discrete.png",
  ai:       "/lectra_ai.png",
  add:      "/lectra_add.png",
  recent:   "/lectra_recent.png",
  profile:  "/lectra_profile.png",
};

function Phone({ src, label }: { src: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", flexShrink: 0 }}>
      {/* Outer wrapper — holds the liquid border, NO overflow hidden */}
      <div className="phone-outer">
        {/* Inner wrapper — clips the image */}
        <div style={{ width: "200px", borderRadius: "30px", overflow: "hidden", position: "relative", zIndex: 1 }}>
          <Image src={src} alt={label} width={390} height={844} className="img-loaded lb" style={{ width: "100%", height: "auto", display: "block", cursor: "zoom-in" }} quality={95} />
        </div>
      </div>
      <span style={{ ...m, fontSize: "10px", color: "rgba(240,244,241,0.4)", letterSpacing: "0.08em" }}>{label}</span>
    </div>
  );
}

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

export default function LectraCase() {
  const { cursorRef, ringRef, hovered, setHovered } = useCursor();
  const { tr } = useLang();

  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveringScroll = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onEnterScroll = () => { isHoveringScroll.current = true; };
    const onLeaveScroll = () => { isHoveringScroll.current = false; };

    const onWheel = (e: WheelEvent) => {
      if (!isHoveringScroll.current) return;

      const dy = e.deltaY;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;

      // At left boundary scrolling left — pass to page (scroll up)
      if (dy < 0 && atStart) return;
      // At right boundary scrolling right — pass to page (scroll down)
      if (dy > 0 && atEnd) return;

      // Otherwise handle in the frame
      e.preventDefault();
      e.stopPropagation();
      el.scrollLeft += dy * 2.5;
    };

    el.addEventListener("mouseenter", onEnterScroll);
    el.addEventListener("mouseleave", onLeaveScroll);
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("mouseenter", onEnterScroll);
      el.removeEventListener("mouseleave", onLeaveScroll);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  return (
    <>
      <CursorElements cursorRef={cursorRef} ringRef={ringRef} hovered={hovered} />
      <Lightbox />

      <main style={{ background: "#050a06", minHeight: "100vh" }}>
        <CaseNav onEnter={onEnter} onLeave={onLeave} />
        <div style={{ overflowX: "hidden" }}>

        <style>{`
          @media (max-width: 768px) {
            .lectra-inner { padding: 80px 20px 80px !important; }
            .lectra-grid  { grid-template-columns: 1fr !important; gap: 40px !important; }
            .lectra-3col  { grid-template-columns: 1fr !important; }
            .lectra-phones-pair { flex-direction: column !important; align-items: center !important; }
          }
        `}</style>

        <div className="lectra-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 48px 120px" }}>

        {/* ── HERO ── */}
        <div style={{ marginBottom: "80px" }}>
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1px", background: "#1aff6e" }} />
            <span style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em" }}>{tr("lectra_tag")}</span>
          </div>
          <h1 className="reveal" style={{ ...s, fontWeight: 800, fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#f0f4f1", marginBottom: "24px" }}>
            Lectra —<br />
            <span style={{ background: "linear-gradient(90deg,#fff 0%,#1aff6e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI Note-Taking</span><br />
            for Students
          </h1>
          <p className="reveal" style={{ ...f, fontSize: "18px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", maxWidth: "520px", marginBottom: "32px" }}>
            {tr("lectra_bio")}
          </p>
          <div className="reveal" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["Mobile App", "UI/UX Design", "AI Product", "iOS"].map(t => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>

        {/* ── ALL SCREENS ROW ── */}
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(240,244,241,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>All screens</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(26,255,110,0.6)", letterSpacing: "0.12em" }}>← scroll to explore →</span>
        </div>
        <style>{`
          .phones-scroll {
            display: flex;
            gap: 20px;
            overflow-x: auto;
            padding-bottom: 16px;
            margin-bottom: 8px;
            scroll-behavior: smooth;
            cursor: grab;
          }
          .phones-scroll::-webkit-scrollbar {
            height: 4px;
          }
          .phones-scroll::-webkit-scrollbar-track {
            background: rgba(240,244,241,0.06);
            border-radius: 2px;
          }
          .phones-scroll::-webkit-scrollbar-thumb {
            background: rgba(26,255,110,0.5);
            border-radius: 2px;
          }
          .phones-scroll::-webkit-scrollbar-thumb:hover {
            background: #1aff6e;
          }

          /* Phone outer — holds liquid border, NO overflow hidden */
          .phone-outer {
            position: relative;
            width: 200px;
            border-radius: 32px;
            padding: 2px;
            background: rgba(255,255,255,0.18);
            box-shadow: 0 20px 60px rgba(0,0,0,0.6);
            cursor: pointer;
          }
          .phone-outer::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 32px;
            background: conic-gradient(
              from var(--angle, 0deg),
              transparent 0deg,
              rgba(26,255,110,0.3) 60deg,
              rgba(26,255,110,1) 120deg,
              rgba(255,255,255,1) 180deg,
              rgba(26,255,110,1) 240deg,
              rgba(26,255,110,0.3) 300deg,
              transparent 360deg
            );
            animation: liquidBorder 2s linear infinite;
            opacity: 0;
            transition: opacity 0.4s;
            z-index: 0;
          }
          .phone-outer:hover::before {
            opacity: 1;
          }
          .phone-outer:hover {
            background: transparent;
          }
        `}</style>
        <div ref={scrollRef} className="phones-scroll">
          <Phone src={SCREENS.home}     label="Home" />
          <Phone src={SCREENS.library}  label="Library" />
          <Phone src={SCREENS.discrete} label="Discrete Mathematics" />
          <Phone src={SCREENS.ai}       label="AI Chat — Lexi" />
          <Phone src={SCREENS.add}      label="Add Lesson" />
          <Phone src={SCREENS.recent}   label="Recent" />
          <Phone src={SCREENS.profile}  label="Profile" />
        </div>

        <Divider />

        {/* ── OVERVIEW ── */}
        <Label n="01" text={tr("lectra_l1")} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
              {tr("lectra_ov_p1")}
            </p>
            <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
              {tr("lectra_ov_p2")}
            </p>
            <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
              {tr("lectra_ov_p3")}
            </p>
          </div>
          <div>
            {([
              ["lectra_meta_platform","lectra_meta_platform_v"],
              ["lectra_meta_role","lectra_meta_role_v"],
              ["lectra_meta_type","lectra_meta_type_v"],
              ["lectra_meta_year","lectra_meta_year_v"],
              ["lectra_meta_tool","lectra_meta_tool_v"],
            ] as [string,string][]).map(([lk,vk]) => (
              <div key={lk} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(240,244,241,0.07)" }}>
                <span style={{ ...m, fontSize: "11px", color: "rgba(240,244,241,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{tr(lk)}</span>
                <span style={{ ...f, fontSize: "15px", color: "#f0f4f1", fontWeight: 600 }}>{tr(vk)}</span>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── PROBLEM ── */}
        <Label n="02" text={tr("lectra_l2")} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)" }}>
          {[
            { icon: "✍️", tk: "lectra_prob_1" },
            { icon: "📚", tk: "lectra_prob_2" },
            { icon: "⏰", tk: "lectra_prob_3" },
            { icon: "🔍", tk: "lectra_prob_4" },
          ].map((item: any) => (
            <div key={item.tk} style={{ background: "#050a06", padding: "36px 32px", transition: "background 0.3s" }}
              onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
              onMouseOut={e => (e.currentTarget.style.background = "#050a06")}
            >
              <div style={{ fontSize: "28px", marginBottom: "14px" }}>{item.icon}</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "20px", color: "#f0f4f1", marginBottom: "10px" }}>{tr(`${item.tk}_title`)}</h3>
              <p style={{ ...f, fontSize: "14px", lineHeight: "1.7", color: "rgba(240,244,241,0.45)" }}>{tr(`${item.tk}_desc`)}</p>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── SOLUTION ── */}
        <Label n="03" text={tr("lectra_l3")} />

        {/* Feature 1 */}
        <div className="lectra-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center", marginBottom: "80px" }}>
          <div>
            <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>{tr("lectra_f1_num")}</div>
            <h3 style={{ ...s, fontWeight: 800, fontSize: "30px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>{tr("lectra_h1")}</h3>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
              {tr("lectra_f1_p1")}
            </p>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
              {tr("lectra_f1_p2")}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Phone src={SCREENS.add} label="Add Lesson" />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="lectra-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center", marginBottom: "80px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Phone src={SCREENS.ai} label="Lexi — AI Assistant" />
          </div>
          <div>
            <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>{tr("lectra_f2_num")}</div>
            <h3 style={{ ...s, fontWeight: 800, fontSize: "30px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>{tr("lectra_h2")}</h3>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
              {tr("lectra_f2_p1")}
            </p>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
              {tr("lectra_f2_p2")}
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="lectra-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center", marginBottom: "80px" }}>
          <div>
            <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>{tr("lectra_f3_num")}</div>
            <h3 style={{ ...s, fontWeight: 800, fontSize: "30px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>{tr("lectra_h3")}</h3>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
              {tr("lectra_f3_p1")}
            </p>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
              {tr("lectra_f3_p2")}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Phone src={SCREENS.home} label="Home — exam view" />
          </div>
        </div>

        {/* Feature 4 */}
        <div className="lectra-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <Phone src={SCREENS.library}  label="Library" />
            <Phone src={SCREENS.discrete} label="Subject detail" />
          </div>
          <div>
            <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>{tr("lectra_f4_num")}</div>
            <h3 style={{ ...s, fontWeight: 800, fontSize: "30px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>{tr("lectra_h4")}</h3>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
              {tr("lectra_f4_p1")}
            </p>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
              {tr("lectra_f4_p2")}
            </p>
          </div>
        </div>

        <Divider />

        {/* ── UX DECISIONS ── */}
        <Label n="04" text={tr("lectra_l4")} />
        <div className="lectra-3col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)" }}>
          {[
            { icon: "🌙", tk: "lectra_ux1" },
            { icon: "🎯", tk: "lectra_ux2" },
            { icon: "🟢", tk: "lectra_ux3" },
            { icon: "📊", tk: "lectra_ux4" },
            { icon: "🤖", tk: "lectra_ux5" },
            { icon: "⚡", tk: "lectra_ux6" },
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

        {/* ── RESULT ── */}
        <Label n="05" text={tr("lectra_l5")} />
        <div className="lectra-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
              {tr("lectra_r_p1")}
            </p>
            <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
              {tr("lectra_r_p2")}
            </p>
            <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
              {tr("lectra_r_p3")}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)" }}>
            {([["7+","lectra_stat1"],["3","lectra_stat2"],["1","lectra_stat3"],["∞","lectra_stat4"]] as [string,string][]).map(([n, lk]) => (
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
        <CaseFooter prevHref="/works/vimeworld" prevLabel="VIMEWORLD" nextHref="/works/czysto" nextLabel="CZYSTO CLEANER" onEnter={onEnter} onLeave={onLeave} />
        </div>
      </main>
    </>
  );
}
