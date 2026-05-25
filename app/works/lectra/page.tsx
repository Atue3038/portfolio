"use client";
import Link from "next/link";

const font = { fontFamily: "'Space Grotesk', sans-serif" };
const mono = { fontFamily: "'DM Mono', monospace" };
const syne = { fontFamily: "'Syne', sans-serif" };


const bg   = "var(--bg)";
const white = "var(--white)";
const green = "var(--green)";
const muted = "var(--muted)";

function NavBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} style={{ border: "1px solid rgba(240,244,241,0.2)", borderRadius: "200px", padding: "10px 18px", ...mono, fontWeight: 700, fontSize: "22px", color: white, textDecoration: "none" }}>
      {children}
    </a>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: "rgba(240,244,241,0.1)", margin: "80px 0" }} />;
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ border: "1px solid rgba(26,255,110,0.3)", borderRadius: "4px", padding: "4px 12px", ...mono, fontSize: "11px", color: green, letterSpacing: "0.1em" }}>
      {children}
    </span>
  );
}

/* Phone mockup wrapper */
function Phone({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
      <div style={{ width: "220px", background: "#121417", borderRadius: "36px", overflow: "hidden", border: "6px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 48px rgba(0,0,0,0.5)", flexShrink: 0, position: "relative" }}>
        {children}
      </div>
      {label && <span style={{ ...mono, fontSize: "11px", color: muted, letterSpacing: "0.08em", textAlign: "center" }}>{label}</span>}
    </div>
  );
}


/* Section heading */
function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "56px" }}>
      <span style={{ ...mono, fontSize: "11px", color: green, letterSpacing: "0.15em" }}>{n} / {label}</span>
      <div style={{ flex: 1, height: "1px", background: "rgba(240,244,241,0.1)" }} />
    </div>
  );
}

export default function LectraCase() {
  return (
    <main style={{ background: bg, minHeight: "100vh", overflowX: "hidden" }}>

      {/* NAV */}
      <header style={{ padding: "45px 60px 0", maxWidth: "1200px", margin: "0 auto" }}>
        <Link href="/" style={{ ...syne, fontWeight: 800, fontSize: "110px", color: white, letterSpacing: "-5.5px", textTransform: "uppercase", textDecoration: "none", display: "block", lineHeight: 1 }}>
          Oleksii Klymushkin
        </Link>
        <nav style={{ display: "flex", justifyContent: "space-between", marginTop: "22px" }}>
          <NavBtn href="/#works">Works</NavBtn>
          <NavBtn href="/#about">About me</NavBtn>
          <NavBtn href="/#contact">Contact</NavBtn>
        </nav>
      </header>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 60px 0" }}>

        {/* HERO */}
        <div style={{ marginBottom: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ width: "32px", height: "1px", background: green }} />
            <span style={{ ...mono, fontSize: "12px", color: green, letterSpacing: "0.15em", textTransform: "uppercase" }}>Academic Project · 2025</span>
          </div>
          <h1 style={{ ...syne, fontWeight: 800, fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 1, letterSpacing: "-0.03em", color: white, marginBottom: "24px" }}>
            Lectra —<br />
            <span style={{ background: "linear-gradient(90deg, #ffffff 0%, #1aff6e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>AI Note-Taking</span><br />
            for Students
          </h1>
          <p style={{ ...font, fontSize: "18px", lineHeight: "1.75", color: muted, maxWidth: "560px", marginBottom: "40px" }}>
            A mobile app that records lectures, processes notes with AI, and builds a personalized study plan — so students can focus on understanding, not writing.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["Mobile App", "UI/UX Design", "AI Product", "iOS"].map(t => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>

        {/* HERO SCREENS */}
        <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginBottom: "16px", overflowX: "auto", paddingBottom: "8px" }}>
          <Phone label="Home">
            <img src="https://www.figma.com/api/mcp/asset/805be11e-73fb-4480-9545-d132757eee5c" alt="Home" style={{ width: "100%", display: "block" }} />
          </Phone>
          <Phone label="Library">
            <div style={{ background: "#1a1d24", padding: "20px 14px", minHeight: "440px" }}>
              <div style={{ ...syne, fontWeight: 700, fontSize: "20px", color: white, textAlign: "center", marginBottom: "16px" }}>Library</div>
              <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px", marginBottom: "8px" }}>
                <div style={{ ...font, fontSize: "13px", color: white, fontWeight: 600 }}>Discrete Mathematics</div>
                <div style={{ ...mono, fontSize: "10px", color: green, marginTop: "4px" }}>Lessons: 12</div>
              </div>
              {["Biology", "Physics", "PE Lessons", "Geography", "Chemistry"].map(s => (
                <div key={s} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "12px", marginBottom: "8px" }}>
                  <div style={{ ...font, fontSize: "13px", color: white, fontWeight: 600 }}>{s}</div>
                </div>
              ))}
            </div>
          </Phone>
          <Phone label="AI Chat — Lexi">
            <div style={{ background: "#121417", padding: "16px 12px", minHeight: "440px" }}>
              <div style={{ ...font, fontSize: "13px", color: white, fontWeight: 600, marginBottom: "12px", textAlign: "center" }}>Recurrence Relations</div>
              <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "12px", marginBottom: "10px" }}>
                <div style={{ ...font, fontSize: "11px", color: white, lineHeight: "1.6" }}>👋 Hi! I&apos;m here to help you with your lesson. Record your lecture or upload your notes, and I&apos;ll analyze the material.</div>
              </div>
              <div style={{ background: "rgba(79,108,255,0.3)", borderRadius: "12px", padding: "10px 12px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: green, display: "flex", alignItems: "center", justifyContent: "center" }}>▶</div>
                <span style={{ ...mono, fontSize: "10px", color: white }}>1:33:27</span>
              </div>
              <div style={{ ...font, fontSize: "11px", color: green, fontWeight: 600, marginBottom: "8px" }}>✅ Your lesson has been analyzed.</div>
              <div style={{ ...font, fontSize: "10px", color: muted, lineHeight: "1.6" }}>📌 Key Topics Covered<br />• Definition of recurrence relations<br />• Linear vs. non-linear<br />• Homogeneous forms</div>
            </div>
          </Phone>
          <Phone label="Add Lesson">
            <div style={{ background: "#121417", padding: "20px 12px", minHeight: "440px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ ...font, fontSize: "12px", color: white, textAlign: "center", background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px" }}>Choose how you&apos;d like to add your lesson</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div style={{ background: "#3DCC97", borderRadius: "14px", padding: "20px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: "20px", marginBottom: "6px" }}>📁</div>
                  <div style={{ ...font, fontSize: "11px", color: white, fontWeight: 600 }}>Import file</div>
                </div>
                <div style={{ background: "#3DCC97", borderRadius: "14px", padding: "20px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: "20px", marginBottom: "6px" }}>📄</div>
                  <div style={{ ...font, fontSize: "11px", color: white, fontWeight: 600 }}>Upload notes</div>
                </div>
              </div>
              <div style={{ background: "#4F6CFF", borderRadius: "14px", padding: "20px 10px", textAlign: "center" }}>
                <div style={{ fontSize: "20px", marginBottom: "6px" }}>🎤</div>
                <div style={{ ...font, fontSize: "11px", color: white, fontWeight: 600 }}>Record lecture</div>
              </div>
            </div>
          </Phone>
        </div>

        <Divider />

        {/* OVERVIEW */}
        <SectionLabel n="01" label="OVERVIEW" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div>
            <h2 style={{ ...syne, fontWeight: 800, fontSize: "32px", color: white, marginBottom: "20px", letterSpacing: "-0.02em" }}>What is Lectra?</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ ...font, fontSize: "16px", lineHeight: "1.75", color: muted }}>
                Lectra is an AI-powered note-taking app designed for university students. The core idea: instead of frantically writing during a lecture, you record it — and the AI does the rest.
              </p>
              <p style={{ ...font, fontSize: "16px", lineHeight: "1.75", color: muted }}>
                The app transcribes audio, extracts key topics, structures the material, and builds a personalized preparation plan tied to your exam schedule.
              </p>
              <p style={{ ...font, fontSize: "16px", lineHeight: "1.75", color: muted }}>
                You can also photograph textbook pages or upload existing notes — Lexi, the built-in AI assistant, processes everything and helps you study smarter.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { label: "Platform", value: "iOS Mobile App" },
              { label: "Role", value: "UI/UX Designer (solo)" },
              { label: "Type", value: "Academic Project" },
              { label: "Year", value: "2025" },
              { label: "Tools", value: "Figma, Auto Layout" },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid rgba(240,244,241,0.08)" }}>
                <span style={{ ...mono, fontSize: "11px", color: muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
                <span style={{ ...font, fontSize: "15px", color: white, fontWeight: 600 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* PROBLEM */}
        <SectionLabel n="02" label="PROBLEM" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.1)", marginBottom: "60px" }}>
          {[
            { icon: "✍️", title: "Divided attention", desc: "Students can't listen and write at the same time. Important context gets lost while rushing to copy words." },
            { icon: "📚", title: "Passive material", desc: "Static notes don't adapt. Students don't know what to review first, or how much time they have left." },
            { icon: "⏰", title: "No study plan", desc: "Most students start preparing too late. There's no system that connects the material to the exam date." },
            { icon: "🔍", title: "Hard to navigate", desc: "Finding a specific topic across multiple notebooks and files is time-consuming and frustrating." },
          ].map(item => (
            <div key={item.title} style={{ background: bg, padding: "36px 32px" }}
              onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
              onMouseOut={e => (e.currentTarget.style.background = bg)}
            >
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>{item.icon}</div>
              <h3 style={{ ...syne, fontWeight: 800, fontSize: "20px", color: white, marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ ...font, fontSize: "14px", lineHeight: "1.7", color: muted }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* SOLUTION */}
        <SectionLabel n="03" label="SOLUTION" />
        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>

          {/* Feature 1 — Record */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <div style={{ ...mono, fontSize: "11px", color: green, letterSpacing: "0.15em", marginBottom: "16px" }}>FEATURE 01</div>
              <h3 style={{ ...syne, fontWeight: 800, fontSize: "28px", color: white, marginBottom: "16px", letterSpacing: "-0.02em" }}>Record. Import. Upload.</h3>
              <p style={{ ...font, fontSize: "16px", lineHeight: "1.75", color: muted, marginBottom: "20px" }}>
                Three ways to feed material into the app: record the lecture live, import a file, or photograph your handwritten notes. The AI handles everything after that.
              </p>
              <p style={{ ...font, fontSize: "16px", lineHeight: "1.75", color: muted }}>
                After processing, Lexi — the built-in AI — presents a structured breakdown of key topics, definitions, and concepts. No manual work required.
              </p>
            </div>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
              <Phone label="Choose input">
                <div style={{ background: "#121417", padding: "20px 12px", minHeight: "380px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ ...font, fontSize: "12px", color: white, textAlign: "center", background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px" }}>Choose how you&apos;d like to add your lesson</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div style={{ background: "#3DCC97", borderRadius: "14px", padding: "20px 10px", textAlign: "center" }}>
                      <div style={{ fontSize: "20px", marginBottom: "6px" }}>📁</div>
                      <div style={{ ...font, fontSize: "11px", color: white, fontWeight: 600 }}>Import file</div>
                    </div>
                    <div style={{ background: "#3DCC97", borderRadius: "14px", padding: "20px 10px", textAlign: "center" }}>
                      <div style={{ fontSize: "20px", marginBottom: "6px" }}>📄</div>
                      <div style={{ ...font, fontSize: "11px", color: white, fontWeight: 600 }}>Upload notes</div>
                    </div>
                  </div>
                  <div style={{ background: "#4F6CFF", borderRadius: "14px", padding: "20px 10px", textAlign: "center" }}>
                    <div style={{ fontSize: "20px", marginBottom: "6px" }}>🎤</div>
                    <div style={{ ...font, fontSize: "11px", color: white, fontWeight: 600 }}>Record lecture</div>
                  </div>
                </div>
              </Phone>
            </div>
          </div>

          {/* Feature 2 — AI Analysis */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
              <Phone label="Lexi AI Chat">
                <div style={{ background: "#121417", padding: "16px 12px", minHeight: "380px" }}>
                  <div style={{ ...font, fontSize: "12px", color: white, fontWeight: 600, marginBottom: "12px", textAlign: "center" }}>Recurrence Relations</div>
                  <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "12px", marginBottom: "10px" }}>
                    <div style={{ ...font, fontSize: "10px", color: white, lineHeight: "1.6" }}>👋 Hi! I&apos;m here to help. Record your lecture and I&apos;ll structure the key ideas into clear insights.</div>
                  </div>
                  <div style={{ background: "rgba(79,108,255,0.3)", borderRadius: "12px", padding: "10px 12px", marginBottom: "10px", display: "flex", gap: "8px", alignItems: "center" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: green, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>▶</div>
                    <span style={{ ...mono, fontSize: "10px", color: white }}>1:33:27</span>
                  </div>
                  <div style={{ ...font, fontSize: "10px", color: green, fontWeight: 600, marginBottom: "8px" }}>✅ Your lesson has been analyzed.</div>
                  <div style={{ ...font, fontSize: "10px", color: muted, lineHeight: "1.7" }}>
                    📌 Key Topics Covered<br />
                    • Definition of recurrence relations<br />
                    • Linear vs. non-linear<br />
                    • Homogeneous forms<br />
                    • Methods of solving<br />
                    • Applications in algorithms
                  </div>
                </div>
              </Phone>
            </div>
            <div>
              <div style={{ ...mono, fontSize: "11px", color: green, letterSpacing: "0.15em", marginBottom: "16px" }}>FEATURE 02</div>
              <h3 style={{ ...syne, fontWeight: 800, fontSize: "28px", color: white, marginBottom: "16px", letterSpacing: "-0.02em" }}>Lexi processes the lecture for you</h3>
              <p style={{ ...font, fontSize: "16px", lineHeight: "1.75", color: muted, marginBottom: "20px" }}>
                After uploading or recording, Lexi — the AI assistant — analyzes the content and returns a structured breakdown: key topics, definitions, and a summary you can actually study from.
              </p>
              <p style={{ ...font, fontSize: "16px", lineHeight: "1.75", color: muted }}>
                You can also ask Lexi questions directly in the chat to clarify anything from the material. It&apos;s like having a tutor who was at the same lecture.
              </p>
            </div>
          </div>

          {/* Feature 3 — Exam plan */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <div style={{ ...mono, fontSize: "11px", color: green, letterSpacing: "0.15em", marginBottom: "16px" }}>FEATURE 03</div>
              <h3 style={{ ...syne, fontWeight: 800, fontSize: "28px", color: white, marginBottom: "16px", letterSpacing: "-0.02em" }}>Exam countdown + smart study plan</h3>
              <p style={{ ...font, fontSize: "16px", lineHeight: "1.75", color: muted, marginBottom: "20px" }}>
                Set your exam date and Lectra calculates exactly how prepared you are. A circular progress indicator shows your readiness percentage per subject — with clear metrics for preparation level, target score, and gap to goal.
              </p>
              <p style={{ ...font, fontSize: "16px", lineHeight: "1.75", color: muted }}>
                If you&apos;re falling behind, the app tells you — and helps you prioritize which material to tackle next.
              </p>
            </div>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
              <Phone label="Home — exam view">
                <div style={{ background: "#121417", padding: "16px 12px", minHeight: "380px" }}>
                  <div style={{ ...font, fontSize: "12px", color: white, fontWeight: 600, marginBottom: "10px" }}>Upcoming Exams</div>
                  <div style={{ background: "rgba(212,219,254,0.15)", borderRadius: "14px", padding: "14px", marginBottom: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
                      <span style={{ ...font, fontSize: "10px", color: "#ff4b4b", fontWeight: 700 }}>⏱ 5d</span>
                      <span style={{ ...font, fontSize: "12px", color: white, fontWeight: 600 }}>Discrete Mathematics</span>
                    </div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <div style={{ width: "72px", height: "72px", borderRadius: "50%", border: "4px solid #4F6CFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ ...syne, fontWeight: 800, fontSize: "16px", color: white }}>37%</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ ...font, fontSize: "10px", color: white }}>🎓 Preparation <span style={{ color: green }}>25%</span></div>
                        <div style={{ ...font, fontSize: "10px", color: white }}>🏆 Target <span style={{ color: green }}>70%</span></div>
                        <div style={{ ...font, fontSize: "10px", color: white }}>⚡ Gap <span style={{ color: green }}>33%</span></div>
                      </div>
                    </div>
                    <div style={{ ...font, fontSize: "10px", color: "#ffcc00", marginTop: "8px", textAlign: "center" }}>You&apos;re behind schedule ⚠️</div>
                  </div>
                </div>
              </Phone>
            </div>
          </div>

        </div>

        <Divider />

        {/* UX DECISIONS */}
        <SectionLabel n="04" label="UX DECISIONS" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px", background: "rgba(240,244,241,0.1)", marginBottom: "60px" }}>
          {[
            { icon: "🌙", title: "Dark-first UI", desc: "Students use the app in lectures, libraries, late at night. Dark theme reduces eye strain and respects the environment." },
            { icon: "🎯", title: "One action per screen", desc: "Each screen has a single clear goal. No cognitive overload — the student always knows what to do next." },
            { icon: "🟢", title: "Green as progress", desc: "Accent color is reserved exclusively for active/completed states — progress bars, listened labels, AI responses. It signals 'done'." },
            { icon: "📊", title: "Visual progress", desc: "Circular indicators give an immediate sense of how prepared you are. Numbers alone don't communicate urgency — shapes do." },
            { icon: "🤖", title: "AI feels human", desc: "Lexi introduces itself warmly and guides the user through the flow. The chat interface lowers the barrier to using AI features." },
            { icon: "⚡", title: "Freemium pattern", desc: "Premium is surfaced subtly — a soft banner, not a blocker. Users see the value first, then get invited to unlock more." },
          ].map(item => (
            <div key={item.title} style={{ background: bg, padding: "32px 28px" }}
              onMouseOver={e => (e.currentTarget.style.background = "rgba(26,255,110,0.04)")}
              onMouseOut={e => (e.currentTarget.style.background = bg)}
            >
              <div style={{ fontSize: "24px", marginBottom: "14px" }}>{item.icon}</div>
              <h3 style={{ ...syne, fontWeight: 800, fontSize: "17px", color: white, marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ ...font, fontSize: "13px", lineHeight: "1.65", color: muted }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <Divider />

        {/* RESULT */}
        <SectionLabel n="05" label="RESULT" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <h2 style={{ ...syne, fontWeight: 800, fontSize: "32px", color: white, marginBottom: "20px", letterSpacing: "-0.02em" }}>What I learned</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ ...font, fontSize: "16px", lineHeight: "1.75", color: muted }}>
                Designing Lectra pushed me to think about AI not as a feature — but as the core interaction. The challenge was making it feel natural and trustworthy, not technical or intimidating.
              </p>
              <p style={{ ...font, fontSize: "16px", lineHeight: "1.75", color: muted }}>
                I also deepened my understanding of freemium UX patterns — how to show value without blocking it, and how to place upgrade prompts that feel helpful rather than aggressive.
              </p>
              <p style={{ ...font, fontSize: "16px", lineHeight: "1.75", color: muted }}>
                The project taught me to design for real student behavior: tired, distracted, time-pressured. Every design decision had to earn its place.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { n: "5+", label: "Core screens designed" },
              { n: "3", label: "Input methods" },
              { n: "1", label: "AI assistant (Lexi)" },
              { n: "∞", label: "Study sessions enabled" },
            ].map(({ n, label }) => (
              <div key={label} style={{ border: "1px solid rgba(240,244,241,0.1)", padding: "28px 24px", textAlign: "center" }}>
                <div style={{ ...syne, fontWeight: 800, fontSize: "40px", color: green, lineHeight: 1, marginBottom: "8px" }}>{n}</div>
                <div style={{ ...mono, fontSize: "11px", color: muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* CONTACT */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "460px" }}>
            <p style={{ ...font, fontSize: "16px", color: white, lineHeight: "1.7" }}>
              Ready to work together? Let&apos;s talk about freelance projects, collaborations, and full-time roles.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {[["Telegram", true], ["Instagram", false], ["Gmail", false]].map(([l, f]) => (
                <a key={l as string} href="#"
                  style={{ background: f ? white : "transparent", color: f ? bg : white, border: f ? "none" : "1px solid rgba(240,244,241,0.2)", borderRadius: "200px", padding: "12px 24px", ...font, fontWeight: 700, fontSize: "16px", textDecoration: "none", whiteSpace: "nowrap" }}
                >{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer style={{ marginTop: "120px", paddingBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0" }}>
            {["Insta", "Behance", "Telegram"].map(l => (
              <a key={l} href="#" style={{ border: "1px solid rgba(240,244,241,0.2)", borderRadius: "200px", padding: "10px 18px", ...mono, fontWeight: 700, fontSize: "22px", color: white, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <p style={{ ...syne, fontWeight: 800, fontSize: "110px", color: white, letterSpacing: "-5.5px", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>Oleksii Klymushkin</p>
        </footer>

      </div>
    </main>
  );
}
