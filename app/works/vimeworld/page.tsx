import Link from "next/link";

/* ── Assets from Figma ── */
const IMG_HERO = "https://www.figma.com/api/mcp/asset/f5a6106f-5c42-4553-9eab-0e2c23593305";
const IMG_MAIN_UI = "https://www.figma.com/api/mcp/asset/1cd4e71b-007d-4cd9-aa48-14218c9e0998";
const IMG_SKETCH = "https://www.figma.com/api/mcp/asset/42aace97-955e-4717-8af0-88f2f674d8b3";

/* User needs tiles */
const USER_NEEDS = [
  "https://www.figma.com/api/mcp/asset/4d4c18d7-2938-4534-abbc-9dcf5d0472db",
  "https://www.figma.com/api/mcp/asset/ccd64a5c-6873-49f0-9411-b2c0cd8cf4ec",
  "https://www.figma.com/api/mcp/asset/e88ef641-9e30-4c90-9b86-13c32e9282ea",
  "https://www.figma.com/api/mcp/asset/3a07e718-7195-4dc6-a7e1-d7a458f4665e",
  "https://www.figma.com/api/mcp/asset/9e4c0488-465b-43c3-a17a-f3f6e0f95af4",
  "https://www.figma.com/api/mcp/asset/09a60b5e-f79a-4670-81b3-bb6e76df4419",
  "https://www.figma.com/api/mcp/asset/92ed3edd-aa3e-420e-968e-7a0023b39196",
];

/* UX Flow diagram */
const UX_FLOW = "https://www.figma.com/api/mcp/asset/34a0acf8-ca11-44fa-9ddb-356f641fcdd4";

/* Colors */
const COLORS = [
  "https://www.figma.com/api/mcp/asset/9d089d2d-4209-4c6d-adfe-ccd1505e9266",
  "https://www.figma.com/api/mcp/asset/14bd9759-315c-4d1d-897e-875119cb65fc",
  "https://www.figma.com/api/mcp/asset/abf7c0df-bd7f-4e87-9ea4-91f0ba5d2841",
  "https://www.figma.com/api/mcp/asset/1c7d2c34-f3c8-40df-96d7-b181366782e1",
  "https://www.figma.com/api/mcp/asset/898e9bc8-e811-47b6-83de-5f111fac8594",
];

/* Buttons */
const BUTTONS = "https://www.figma.com/api/mcp/asset/8365b19f-0715-4a13-a030-e9c27e97178c";

/* Icons */
const ICONS_1 = "https://www.figma.com/api/mcp/asset/390c74e0-bdb9-481d-a2f9-e8517f63051c";
const ICONS_2 = "https://www.figma.com/api/mcp/asset/447706a6-3767-4b48-b18e-eec7e3c46fa8";

/* States */
const STATES = "https://www.figma.com/api/mcp/asset/499e41bc-2365-46d8-a7f8-ab55bfe7f801";

/* Feature breakdown */
const FEATURES = [
  "https://www.figma.com/api/mcp/asset/eeacedaf-3b05-4840-8016-1687bb7b29c2",
  "https://www.figma.com/api/mcp/asset/911bd7de-5301-4c0d-bdce-8da005e00970",
  "https://www.figma.com/api/mcp/asset/31d593a9-b96f-4cd7-bd13-7d412cad317b",
  "https://www.figma.com/api/mcp/asset/1fcb25c0-dbfe-450d-8897-f5a1de8e9a6b",
  "https://www.figma.com/api/mcp/asset/8573bb85-697f-4417-91f3-5b928ea1f6d8",
  "https://www.figma.com/api/mcp/asset/5e443ddf-c926-46b6-afbe-be9e99693844",
  "https://www.figma.com/api/mcp/asset/c2386e0a-c0f1-44d9-86d3-1f92bbd5e672",
];

/* Additional screens */
const CASE_LEFT = "https://www.figma.com/api/mcp/asset/a0b915fa-6ae8-447e-8f47-e6a87e5f504e";
const CASE_RIGHT = "https://www.figma.com/api/mcp/asset/419af299-f451-4e72-bf58-27ba3a489d7f";

const PRIV_LEFT = "https://www.figma.com/api/mcp/asset/9cb5b341-e1db-4496-a3f2-5df21066e541";
const PRIV_MID = "https://www.figma.com/api/mcp/asset/c8d575d3-9efe-4310-b1f5-2c58c9feef07";
const PRIV_RIGHT = "https://www.figma.com/api/mcp/asset/6781bc27-9431-47dc-82f9-99fd589c4acc";

const WARP_LEFT = "https://www.figma.com/api/mcp/asset/28c075ec-6509-4688-9804-a3821852107e";
const WARP_RIGHT = "https://www.figma.com/api/mcp/asset/02d883d2-390d-4ea5-9542-13414f7dfea3";

const GUIDE_LEFT = "https://www.figma.com/api/mcp/asset/e0e65fe4-7406-4518-8cff-178e26d909b9";
const GUIDE_RIGHT = "https://www.figma.com/api/mcp/asset/5492f058-324e-4ef1-a776-9c575329c81d";

/* ─── Shared styles ─── */
const T = {
  h1: { fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "48px", color: "#fff", lineHeight: "normal" } as React.CSSProperties,
  h2: { fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "35px", color: "#fff", lineHeight: "normal" } as React.CSSProperties,
  h3: { fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "30px", color: "#fff", lineHeight: "normal" } as React.CSSProperties,
  body: { fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "25px", color: "#fff", lineHeight: "40px" } as React.CSSProperties,
  muted: { fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "40px", color: "rgba(255,255,255,0.7)", lineHeight: "normal" } as React.CSSProperties,
};

function Card({ src }: { src: string }) {
  return (
    <div style={{ background: "#fff", borderRadius: "25px", boxShadow: "0 4px 50px rgba(0,0,0,0.25)", padding: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src={src} alt="" style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }} />
    </div>
  );
}

function Divider() {
  return <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)", margin: "100px 0" }} />;
}

export default function VimeworldCase() {
  return (
    <main style={{ background: "#07100b", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <header style={{ padding: "45px 60px 0" }}>
        <Link href="/" style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "110px", color: "#fff", letterSpacing: "-5.5px", textTransform: "uppercase", textDecoration: "none", display: "block", lineHeight: "1" }}>
          Oleksii Klymushkin
        </Link>
        <nav style={{ display: "flex", justifyContent: "space-between", marginTop: "45px" }}>
          {["Works", "About me", "Contact"].map(l => (
            <a key={l} href={l === "Works" ? "/#works" : l === "About me" ? "/#about" : "/#contact"} style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: "200px", padding: "12px 20px", fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "18px", color: "#fff", textDecoration: "none" }}>{l}</a>
          ))}
        </nav>
      </header>

      <div style={{ padding: "80px 60px 0" }}>

        {/* ── HERO ── */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={T.h1}>Minecraft ESC Menu — UI/UX Design</p>
          <p style={{ ...T.muted, marginTop: "16px" }}>Full Interface &amp; Experience</p>
        </div>
        <Card src={IMG_HERO} />

        {/* ── PROJECT OVERVIEW ── */}
        <div style={{ marginTop: "100px" }}>
          <p style={{ ...T.h2, marginBottom: "45px" }}>Project overview</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={T.body}>The project is a completely redesigned ESC menu for a Minecraft server.</p>
            <p style={T.body}>I created the UX flow, navigation, player action scenarios, as well as a visual UI that integrates the player profile, quests, daily rewards, guidebook, updates, and social features.</p>
            <p style={T.body}>The goal is to enhance the player experience and make the interface intuitive, modern, and user-friendly.</p>
          </div>
        </div>

        {/* ── DISCLAIMER ── */}
        <div style={{ marginTop: "80px" }}>
          <p style={{ ...T.h2, marginBottom: "45px" }}>Disclaimer</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={T.body}>The server logo and branding belong to their respective owners.</p>
            <p style={T.body}>The project showcases both UX and UI: menu structure, player scenarios, navigation, and visual design.</p>
            <p style={T.body}>The project was developed for a client.</p>
          </div>
        </div>

        <Divider />

        {/* ── PROBLEM & GOALS ── */}
        <p style={{ ...T.h2, marginBottom: "60px" }}>Problem &amp; Goals</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
          <div>
            <p style={{ ...T.h3, marginBottom: "32px" }}>Problem</p>
            <p style={{ ...T.body, marginBottom: "16px" }}>Standard Minecraft ESC menu:</p>
            <ul style={{ ...T.body, paddingLeft: "30px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>Does not display the player&apos;s profile or statistics</li>
              <li>Does not reflect bonuses, quests, or the shop</li>
              <li>Not suitable for servers with a large number of features</li>
            </ul>
          </div>
          <div>
            <p style={{ ...T.h3, marginBottom: "32px" }}>Goals</p>
            <ul style={{ ...T.body, paddingLeft: "30px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>Create an extended ESC menu with clear navigation</li>
              <li>Place key server features on a single screen</li>
              <li>Reduce the number of clicks and make the interface intuitive</li>
              <li>Design a modern UI with a neon aesthetic</li>
              <li>Improve player accessibility and engagement</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* ── USER NEEDS ── */}
        <p style={{ ...T.h2, marginBottom: "60px" }}>User needs</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "20px" }}>
          {USER_NEEDS.slice(0, 4).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "16px" }} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", maxWidth: "75%", margin: "0 auto" }}>
          {USER_NEEDS.slice(4).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "16px" }} />)}
        </div>
        <div style={{ marginTop: "60px" }}>
          <p style={{ ...T.h3, marginBottom: "32px" }}>The player needs to:</p>
          <ul style={{ ...T.body, paddingLeft: "30px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>quickly access quests</li>
            <li>collect daily rewards</li>
            <li>see their balance and privileges</li>
            <li>keep track of server updates</li>
            <li>navigate to the shop and settings</li>
            <li>easily exit the game and open social links</li>
          </ul>
        </div>

        <Divider />

        {/* ── UX STRUCTURE ── */}
        <p style={{ ...T.h2, marginBottom: "45px" }}>UX structure</p>
        <p style={{ ...T.body, marginBottom: "24px" }}>At the concept stage, I created sketches to distribute blocks, separate the left and right areas, and define the card-based structure for quests and the guidebook. This helped establish the UX flow and minimize cognitive load.</p>
        <p style={{ ...T.body, marginBottom: "60px" }}>The menu structure reflects the logic of how players use the features. The UX flow intuitively guides the player from the main screen to the actions they need.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <Card src={IMG_SKETCH} />
          <Card src={UX_FLOW} />
        </div>

        <Divider />

        {/* ── UI STYLE GUIDE ── */}
        <p style={{ ...T.h2, marginBottom: "60px" }}>UI Style Guide</p>

        {/* Colors */}
        <p style={{ ...T.h3, marginBottom: "32px" }}>Colors</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "20px" }}>
          {COLORS.slice(0, 3).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "16px" }} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", maxWidth: "66%", marginBottom: "80px" }}>
          {COLORS.slice(3).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "16px" }} />)}
        </div>

        {/* Typography */}
        <p style={{ ...T.h3, marginBottom: "32px" }}>Typography — Nexa [Bold]</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "80px" }}>
          {[
            { label: "Headings — 30-40 px", size: "35px" },
            { label: "Body Text — 22-25 px", size: "24px" },
            { label: "Small Buttons — 15 px", size: "15px" },
            { label: "Default Buttons — 20 px", size: "20px" },
            { label: "Large Buttons — 30 px", size: "30px" },
            { label: "UI Labels — 22-30 px", size: "27px" },
            { label: "Captions — 20-30 px", size: "22px" },
          ].map(({ label, size }) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.12)", borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <span style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "18px", color: "rgba(255,255,255,0.7)" }}>{label}</span>
              <span style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: size, color: "#fff" }}>Hello World</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <p style={{ ...T.h3, marginBottom: "32px" }}>Buttons</p>
        <img src={BUTTONS} alt="Buttons" style={{ width: "100%", borderRadius: "16px", marginBottom: "80px" }} />

        {/* Icons */}
        <p style={{ ...T.h3, marginBottom: "32px" }}>Icons &amp; Components</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "80px" }}>
          <img src={ICONS_1} alt="" style={{ width: "100%", borderRadius: "16px" }} />
          <img src={ICONS_2} alt="" style={{ width: "100%", borderRadius: "16px" }} />
        </div>

        {/* States */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", marginBottom: "40px" }}>
          <div>
            <p style={{ ...T.h3, marginBottom: "32px" }}>Hover state</p>
            <ul style={{ ...T.body, paddingLeft: "30px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>Icons slightly enlarge when hovered</li>
              <li>Provides visual feedback and draws attention to interactive elements</li>
              <li>Improves click target perception and engagement</li>
            </ul>
          </div>
          <div>
            <p style={{ ...T.h3, marginBottom: "32px" }}>Pressed / Active State</p>
            <ul style={{ ...T.body, paddingLeft: "30px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>A light neon outline appears around the icon or button</li>
              <li>Signals that the element has been clicked or activated</li>
              <li>Maintains visual consistency with the neon UI style</li>
            </ul>
          </div>
        </div>
        <img src={STATES} alt="States" style={{ width: "100%", borderRadius: "16px" }} />

        <Divider />

        {/* ── MAIN UI ── */}
        <p style={{ ...T.h2, marginBottom: "45px" }}>Main UI</p>
        <p style={{ ...T.body, marginBottom: "60px" }}>The main screen demonstrates the UX flow: large navigation blocks, quest and reward cards, and a right column with social buttons and settings. Everything is designed for convenient and predictable player interaction.</p>
        <Card src={IMG_MAIN_UI} />

        <Divider />

        {/* ── FEATURE BREAKDOWN ── */}
        <p style={{ ...T.h2, marginBottom: "60px" }}>Feature Breakdown</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "20px" }}>
          {FEATURES.slice(0, 3).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "16px" }} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "20px" }}>
          {FEATURES.slice(3, 6).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "16px" }} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {FEATURES.slice(6).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "16px" }} />)}
        </div>

        <Divider />

        {/* ── ADDITIONAL SCREENS ── */}
        <p style={{ ...T.h2, marginBottom: "60px" }}>Additional Screens</p>

        {/* Cases */}
        <p style={{ ...T.h3, marginBottom: "40px" }}>Cases</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start", marginBottom: "100px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <p style={T.body}>Clicking the &quot;Buy&quot; button opens a menu where you can select the number of cases to purchase. The total cost and a confirmation button are also displayed.</p>
            <Card src={CASE_LEFT} />
            <p style={T.body}>Clicking the &quot;Open&quot; button opens a case-opening window for the user, which includes a &quot;Boost&quot; button.</p>
          </div>
          <div>
            <Card src={CASE_RIGHT} />
          </div>
        </div>

        {/* Privileges */}
        <p style={{ ...T.h3, marginBottom: "40px" }}>Privileges</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start", marginBottom: "100px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <p style={T.body}>This screen displays a list of privileges, as well as information about the selected case. There are buttons to purchase a privilege or gift it to another player.</p>
            <Card src={PRIV_LEFT} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <p style={T.body}>Clicking &quot;Buy&quot; opens a window with purchase details and a confirmation button.</p>
            <Card src={PRIV_MID} />
            <p style={T.body}>Clicking &quot;Gift&quot; opens an almost identical window to the &quot;Buy&quot; option, but includes a field to enter the nickname of the player to whom the user wants to gift the privilege.</p>
            <Card src={PRIV_RIGHT} />
          </div>
        </div>

        {/* Warps */}
        <p style={{ ...T.h3, marginBottom: "40px" }}>Warps</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start", marginBottom: "100px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <p style={T.body}>The screen displays cards for warps, each with a &quot;More Info&quot; button, allowing the user to click and learn more about the warp. Clicking the left mouse button on a warp card will automatically teleport the user to it.</p>
            <p style={T.body}>Each card has a hover effect, highlighting it and slightly increasing its size.</p>
            <Card src={WARP_LEFT} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <p style={T.body}>Clicking the &quot;More Info&quot; button opens a window with detailed information about the warp, as well as a &quot;Teleport&quot; button.</p>
            <Card src={WARP_RIGHT} />
          </div>
        </div>

        {/* GuideBook */}
        <p style={{ ...T.h3, marginBottom: "40px" }}>GuideBook</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start", marginBottom: "100px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <p style={T.body}>Clicking the &quot;Go&quot; button on a GuideBook card on the main page opens a convenient window, with categories (rules, guides, command list, and server features) on the left side, and the information for the selected category displayed on the right side.</p>
            <Card src={GUIDE_LEFT} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <p style={T.body}>On the right side of the window, all information is structured, with each item having buttons to expand for more details and the option to collapse it back.</p>
            <Card src={GUIDE_RIGHT} />
          </div>
        </div>

        {/* ── FINAL RESULT ── */}
        <Divider />
        <p style={{ ...T.h2, marginBottom: "45px" }}>Final Result</p>
        <p style={T.body}>I created an interface that integrates all server functionality, improved the UX, and developed UI components. The project enhanced my UI/UX skills for game interfaces and helped me gain a deeper understanding of the visual logic behind player interactions.</p>

        {/* ── CONTACT ── */}
        <div style={{ marginTop: "160px", display: "flex", justifyContent: "flex-end" }}>
          <div style={{ maxWidth: "620px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <p style={{ ...T.body, fontSize: "22px" }}>Ready to work together? Let&apos;s talk about freelance projects, collaborations, and full-time roles.</p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a href="https://t.me/" target="_blank" rel="noreferrer" style={{ background: "#fff", color: "#07100b", borderRadius: "200px", padding: "14px 28px", fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "20px", textDecoration: "none" }}>Telegram</a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", borderRadius: "200px", padding: "14px 28px", fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "20px", textDecoration: "none" }}>Instagram</a>
              <a href="mailto:example@gmail.com" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", borderRadius: "200px", padding: "14px 28px", fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "20px", textDecoration: "none" }}>Gmail</a>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer style={{ marginTop: "160px", paddingBottom: "0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            {["Insta", "Behance", "Telegram"].map(l => (
              <a key={l} href="#" style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: "200px", padding: "12px 20px", fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "18px", color: "#fff", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <p style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "110px", color: "#fff", letterSpacing: "-5.5px", textTransform: "uppercase", lineHeight: "1", margin: 0 }}>Oleksii Klymushkin</p>
        </footer>

      </div>
    </main>
  );
}
