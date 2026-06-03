"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCursor, CursorElements, CaseNav, CaseContact, CaseFooter } from "@/components/CaseShell";

const f = { fontFamily: "'Space Grotesk', sans-serif" } as const;
const m = { fontFamily: "'DM Mono', monospace" } as const;
const s = { fontFamily: "'Syne', sans-serif" } as const;

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
          <img src={src} alt={label} style={{ width: "100%", display: "block" }} />
        </div>
      </div>
      <span style={{ ...m, fontSize: "10px", color: "rgba(240,244,241,0.4)", letterSpacing: "0.08em" }}>{label}</span>
    </div>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: "rgba(240,244,241,0.08)", margin: "80px 0" }} />;
}

function Label({ n, text }: { n: string; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "48px" }}>
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
    <main style={{ background: "#050a06", minHeight: "100vh", overflowX: "hidden" }}>

      <CaseNav onEnter={onEnter} onLeave={onLeave} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 48px 120px" }}>

        {/* ── HERO ── */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1px", background: "#1aff6e" }} />
            <span style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em" }}>ACADEMIC PROJECT · 2025</span>
          </div>
          <h1 style={{ ...s, fontWeight: 800, fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#f0f4f1", marginBottom: "24px" }}>
            Lectra —<br />
            <span style={{ background: "linear-gradient(90deg,#fff 0%,#1aff6e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI Note-Taking</span><br />
            for Students
          </h1>
          <p style={{ ...f, fontSize: "18px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", maxWidth: "520px", marginBottom: "32px" }}>
            A mobile app that records lectures, processes notes with AI, and builds a personalized study plan — so students can focus on understanding, not writing.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["Mobile App", "UI/UX Design", "AI Product", "iOS"].map(t => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>

        {/* ── ALL SCREENS ROW ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
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
        <Label n="01" text="OVERVIEW" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
              Lectra is an AI-powered note-taking app designed for university students. The core idea: instead of frantically writing during a lecture, you record it — and the AI does the rest.
            </p>
            <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
              The app transcribes audio, extracts key topics, structures the material, and builds a personalized preparation plan tied to your exam schedule.
            </p>
            <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
              You can also photograph textbook pages or upload existing notes — Lexi, the built-in AI assistant, processes everything and helps you study smarter.
            </p>
          </div>
          <div>
            {[
              ["Platform", "iOS Mobile App"],
              ["Role", "UI/UX Designer (solo)"],
              ["Type", "Academic Project"],
              ["Year", "2025"],
              ["Tools", "Figma, Auto Layout"],
            ].map(([label, value]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(240,244,241,0.07)" }}>
                <span style={{ ...m, fontSize: "11px", color: "rgba(240,244,241,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
                <span style={{ ...f, fontSize: "15px", color: "#f0f4f1", fontWeight: 600 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── PROBLEM ── */}
        <Label n="02" text="PROBLEM" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)" }}>
          {[
            { icon: "✍️", title: "Divided attention", desc: "Students can't listen and write at the same time. Important context gets lost while rushing to copy words." },
            { icon: "📚", title: "Passive material", desc: "Static notes don't adapt. Students don't know what to review first, or how much time they have left." },
            { icon: "⏰", title: "No study plan", desc: "Most students start preparing too late. There's no system that connects the material to the exam date." },
            { icon: "🔍", title: "Hard to navigate", desc: "Finding a specific topic across multiple notebooks is time-consuming and frustrating." },
          ].map(item => (
            <div key={item.title} style={{ background: "#050a06", padding: "36px 32px", transition: "background 0.3s" }}
              onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
              onMouseOut={e => (e.currentTarget.style.background = "#050a06")}
            >
              <div style={{ fontSize: "28px", marginBottom: "14px" }}>{item.icon}</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "20px", color: "#f0f4f1", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ ...f, fontSize: "14px", lineHeight: "1.7", color: "rgba(240,244,241,0.45)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── SOLUTION ── */}
        <Label n="03" text="SOLUTION" />

        {/* Feature 1 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center", marginBottom: "80px" }}>
          <div>
            <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>FEATURE 01</div>
            <h3 style={{ ...s, fontWeight: 800, fontSize: "30px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>Record. Import. Upload.</h3>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
              Three ways to feed material: record the lecture live, import a file, or photograph your handwritten notes. The AI handles everything after that.
            </p>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
              The interface makes the choice obvious — two green buttons for passive input, one blue button for live recording. Color signals priority.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Phone src={SCREENS.add} label="Add Lesson" />
          </div>
        </div>

        {/* Feature 2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center", marginBottom: "80px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Phone src={SCREENS.ai} label="Lexi — AI Assistant" />
          </div>
          <div>
            <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>FEATURE 02</div>
            <h3 style={{ ...s, fontWeight: 800, fontSize: "30px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>Lexi processes the lecture for you</h3>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
              After uploading or recording, Lexi analyzes the content and returns a structured breakdown: key topics, definitions, and a summary you can actually study from.
            </p>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
              You can also ask Lexi questions directly in the chat. It&apos;s like having a tutor who was at the same lecture.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center", marginBottom: "80px" }}>
          <div>
            <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>FEATURE 03</div>
            <h3 style={{ ...s, fontWeight: 800, fontSize: "30px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>Exam countdown + smart prep tracker</h3>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
              Set your exam date and Lectra calculates exactly how prepared you are. Circular progress shows readiness per subject — with preparation level, target score, and gap to goal.
            </p>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
              If you&apos;re falling behind, the app tells you — and helps you prioritize what to tackle next.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Phone src={SCREENS.home} label="Home — exam view" />
          </div>
        </div>

        {/* Feature 4 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <Phone src={SCREENS.library}  label="Library" />
            <Phone src={SCREENS.discrete} label="Subject detail" />
          </div>
          <div>
            <div style={{ ...m, fontSize: "11px", color: "#1aff6e", letterSpacing: "0.15em", marginBottom: "16px" }}>FEATURE 04</div>
            <h3 style={{ ...s, fontWeight: 800, fontSize: "30px", color: "#f0f4f1", marginBottom: "16px", letterSpacing: "-0.02em" }}>Library — everything in one place</h3>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)", marginBottom: "16px" }}>
              All subjects and their lectures in one structured library. You can see at a glance how many lessons each subject has and how prepared you are.
            </p>
            <p style={{ ...f, fontSize: "16px", lineHeight: "1.75", color: "rgba(240,244,241,0.5)" }}>
              Drill into any subject to see individual lectures with listen progress — so you always know exactly where you left off.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── UX DECISIONS ── */}
        <Label n="04" text="UX DECISIONS" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)" }}>
          {[
            { icon: "🌙", title: "Dark-first UI", desc: "Students use the app in lectures, libraries, late at night. Dark theme reduces eye strain and fits the environment." },
            { icon: "🎯", title: "One action per screen", desc: "Each screen has a single clear goal. No cognitive overload — the student always knows what to do next." },
            { icon: "🟢", title: "Green = progress", desc: "Accent color reserved for active/completed states only — progress bars, listened labels, AI responses." },
            { icon: "📊", title: "Visual readiness", desc: "Circular indicators communicate urgency instantly. Numbers alone don't — shapes do." },
            { icon: "🤖", title: "AI feels human", desc: "Lexi introduces itself warmly and guides the user. The chat interface lowers the barrier to AI features." },
            { icon: "⚡", title: "Freemium done right", desc: "Premium is surfaced subtly — a soft banner, not a blocker. Users see value first, then get invited to unlock more." },
          ].map(item => (
            <div key={item.title} style={{ background: "#050a06", padding: "32px 28px", transition: "background 0.3s" }}
              onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
              onMouseOut={e => (e.currentTarget.style.background = "#050a06")}
            >
              <div style={{ fontSize: "24px", marginBottom: "14px" }}>{item.icon}</div>
              <h3 style={{ ...s, fontWeight: 800, fontSize: "17px", color: "#f0f4f1", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ ...f, fontSize: "13px", lineHeight: "1.65", color: "rgba(240,244,241,0.45)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── RESULT ── */}
        <Label n="05" text="RESULT" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
              Designing Lectra pushed me to think about AI not as a feature — but as the core interaction. The challenge was making it feel natural and trustworthy, not technical or intimidating.
            </p>
            <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
              I also deepened my understanding of freemium UX — how to show value without blocking it, and how to place upgrade prompts that feel helpful rather than aggressive.
            </p>
            <p style={{ ...f, fontSize: "17px", lineHeight: "1.75", color: "rgba(240,244,241,0.55)" }}>
              Every design decision had to earn its place — designing for students means tired, distracted, time-pressured users.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.08)" }}>
            {[["7+", "Screens designed"], ["3", "Input methods"], ["1", "AI assistant"], ["∞", "Study sessions"]].map(([n, l]) => (
              <div key={l} style={{ background: "#050a06", padding: "32px 24px", textAlign: "center" }}>
                <div style={{ ...s, fontWeight: 800, fontSize: "44px", color: "#1aff6e", lineHeight: 1, marginBottom: "8px" }}>{n}</div>
                <div style={{ ...m, fontSize: "10px", color: "rgba(240,244,241,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

      </div>
      <CaseContact onEnter={onEnter} onLeave={onLeave} />
      <CaseFooter prevHref="/works/vimeworld" prevLabel="VIMEWORLD" nextHref="/works/czysto" nextLabel="CZYSTO CLEANER" onEnter={onEnter} onLeave={onLeave} />
    </main>
    </>
  );
}
