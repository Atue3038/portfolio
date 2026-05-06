import Link from "next/link";

/* ── Fresh Figma assets ── */
const IMG_HERO        = "https://www.figma.com/api/mcp/asset/72b8cbf0-89a3-4bf2-9f83-6b001727c2b4";
const IMG_MAIN_UI     = "https://www.figma.com/api/mcp/asset/dc06252a-1ecd-4a78-9f16-4eefba54881d";
const IMG_UX_FLOW     = "https://www.figma.com/api/mcp/asset/97f61097-48b8-42a4-9c58-0a713737b9d5";
const IMG_SKETCH_L    = "https://www.figma.com/api/mcp/asset/f41ea73b-268c-4e77-821b-6366b5e4d915";

const USER_NEEDS = [
  "https://www.figma.com/api/mcp/asset/2828cb21-b4e4-4401-9977-627a8af0b535",
  "https://www.figma.com/api/mcp/asset/166eaa11-ea6d-4954-96f4-800429f6473d",
  "https://www.figma.com/api/mcp/asset/183e3d6f-f987-4e5d-abd5-f4a32c995656",
  "https://www.figma.com/api/mcp/asset/d95a61c3-6ad3-41b1-b70d-4381f3e092b8",
  "https://www.figma.com/api/mcp/asset/7a42f18f-aae9-45fb-b695-f14e27f5b0fc",
  "https://www.figma.com/api/mcp/asset/7e73860d-a58d-4e9b-add9-7d34825fdfec",
  "https://www.figma.com/api/mcp/asset/db5b48d8-455c-4933-993d-cfc639781050",
];

const COLORS = [
  "https://www.figma.com/api/mcp/asset/cdd7a95c-84a2-412e-9564-4a5c2bb8759d",
  "https://www.figma.com/api/mcp/asset/374b9ebf-da1b-4f52-a31c-158baa2ddfb5",
  "https://www.figma.com/api/mcp/asset/da84cb79-fe9d-4292-b051-0548469815ec",
  "https://www.figma.com/api/mcp/asset/b8390bbc-d230-4fc7-8a94-0b8d8c8dc562",
  "https://www.figma.com/api/mcp/asset/56ed0caf-71f1-4e1f-a857-ec9046a764c6",
];

const BUTTONS   = "https://www.figma.com/api/mcp/asset/37457c5e-3b93-4356-b432-c9314d5f78be";
const ICONS_1   = "https://www.figma.com/api/mcp/asset/a527cf3d-a216-4c19-a6aa-e546f880e003";
const ICONS_2   = "https://www.figma.com/api/mcp/asset/df06d388-fdf3-4ed0-965b-95c3cf5204a8";
const STATES    = "https://www.figma.com/api/mcp/asset/96534af3-cf35-4524-aee3-302e07740ccc";

const FEATURES = [
  "https://www.figma.com/api/mcp/asset/e8343665-f4db-4bdb-a0d7-5f94c3bdacde",
  "https://www.figma.com/api/mcp/asset/e61ad240-d842-4469-aaa5-23c1466d2982",
  "https://www.figma.com/api/mcp/asset/8a530af1-5057-4fa9-87d7-14e36f8009c2",
  "https://www.figma.com/api/mcp/asset/709a0243-17b3-4685-b8c1-080530ab4da6",
  "https://www.figma.com/api/mcp/asset/a5c320cc-5312-4e5c-a350-87d6409c20ea",
  "https://www.figma.com/api/mcp/asset/8e016223-d2c9-4313-bf67-d0db202da682",
  "https://www.figma.com/api/mcp/asset/9927f9f5-a7ec-41ce-a2d3-2401c0e1356f",
];

/* Additional screens — left col (text side), right col (image side) */
const CASE_IMG_RIGHT  = "https://www.figma.com/api/mcp/asset/d1e6a165-b04e-4ec8-a411-37d4c6c24c60";
const CASE_IMG_LEFT   = "https://www.figma.com/api/mcp/asset/f0085539-5467-4888-b11f-2c762d7af867";

const PRIV_IMG_RIGHT  = "https://www.figma.com/api/mcp/asset/c66bb347-580a-4bdc-8254-7ff5234eb3a4";
const PRIV_IMG_MID    = "https://www.figma.com/api/mcp/asset/3cc08112-44ca-46f0-b631-ab52c390e16f";
const PRIV_IMG_LEFT   = "https://www.figma.com/api/mcp/asset/b959507b-b0a2-4263-846e-94063011e22e";

const WARP_IMG_RIGHT  = "https://www.figma.com/api/mcp/asset/4edce945-56d6-4f34-a03c-9ca9c4405c40";
const WARP_IMG_LEFT   = "https://www.figma.com/api/mcp/asset/96534af3-cf35-4524-aee3-302e07740ccc";

const GUIDE_IMG_RIGHT = "https://www.figma.com/api/mcp/asset/1b6ba9dd-3bcb-4ee5-b547-11d93e1d2351";
const GUIDE_IMG_LEFT  = "https://www.figma.com/api/mcp/asset/26a4d67c-16ee-469f-b76b-0e40996db9a3";

/* ── Shared style tokens ── */
const font = "'Nexa', sans-serif";
const white = "#ffffff";
const muted = "rgba(255,255,255,0.6)";

const s = {
  h2: { fontFamily: font, fontWeight: 700, fontSize: "35px", color: white, lineHeight: "normal", margin: 0 } as React.CSSProperties,
  h3: { fontFamily: font, fontWeight: 700, fontSize: "30px", color: white, lineHeight: "normal", margin: 0 } as React.CSSProperties,
  body: { fontFamily: font, fontWeight: 700, fontSize: "20px", color: white, lineHeight: "34px", margin: 0 } as React.CSSProperties,
  muted: { fontFamily: font, fontWeight: 700, fontSize: "32px", color: muted, lineHeight: "normal", margin: 0 } as React.CSSProperties,
};

/* Thin-border image frame — твоя идея: лёгкая подложка, не жирная */
function Frame({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div style={{
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "16px",
      overflow: "hidden",
      background: "rgba(255,255,255,0.03)",
    }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
    </div>
  );
}

function Divider() {
  return <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.12)", margin: "80px 0" }} />;
}

function NavBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} style={{
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: "200px",
      padding: "12px 15px",
      fontFamily: font,
      fontWeight: 700,
      fontSize: "25px",
      color: white,
      textDecoration: "none",
      whiteSpace: "nowrap" as const,
    }}>{children}</a>
  );
}

export default function VimeworldCase() {
  return (
    <main style={{ background: "#07100b", minHeight: "100vh" }}>

      {/* NAV */}
      <header style={{ padding: "45px 60px 0" }}>
        <Link href="/" style={{ fontFamily: font, fontWeight: 700, fontSize: "110px", color: white, letterSpacing: "-5.5px", textTransform: "uppercase", textDecoration: "none", display: "block", lineHeight: 1 }}>
          Oleksii Klymushkin
        </Link>
        <nav style={{ display: "flex", justifyContent: "space-between", marginTop: "22px" }}>
          <NavBtn href="/#works">Works</NavBtn>
          <NavBtn href="/#about">About me</NavBtn>
          <NavBtn href="/#contact">Contact</NavBtn>
        </nav>
      </header>

      <div style={{ padding: "80px 60px 0" }}>

        {/* HERO */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ ...s.h2, fontSize: "42px" }}>Minecraft ESC Menu — UI/UX Design</p>
          <p style={{ ...s.muted, marginTop: "12px" }}>Full Interface &amp; Experience</p>
        </div>
        <Frame src={IMG_HERO} />

        {/* PROJECT OVERVIEW */}
        <div style={{ marginTop: "80px" }}>
          <p style={{ ...s.h2, marginBottom: "32px" }}>Project overview</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "860px" }}>
            <p style={s.body}>The project is a completely redesigned ESC menu for a Minecraft server.</p>
            <p style={s.body}>I created the UX flow, navigation, player action scenarios, as well as a visual UI that integrates the player profile, quests, daily rewards, guidebook, updates, and social features.</p>
            <p style={s.body}>The goal is to enhance the player experience and make the interface intuitive, modern, and user-friendly.</p>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div style={{ marginTop: "60px" }}>
          <p style={{ ...s.h2, marginBottom: "32px" }}>Disclaimer</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "860px" }}>
            <p style={s.body}>The server logo and branding belong to their respective owners.</p>
            <p style={s.body}>The project showcases both UX and UI: menu structure, player scenarios, navigation, and visual design.</p>
            <p style={s.body}>The project was developed for a client.</p>
          </div>
        </div>

        <Divider />

        {/* PROBLEM & GOALS */}
        <p style={{ ...s.h2, marginBottom: "48px" }}>Problem &amp; Goals</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
          <div>
            <p style={{ ...s.h3, marginBottom: "24px" }}>Problem</p>
            <p style={{ ...s.body, marginBottom: "12px" }}>Standard Minecraft ESC menu:</p>
            <ul style={{ ...s.body, paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>Does not display the player&apos;s profile or statistics</li>
              <li>Does not reflect bonuses, quests, or the shop</li>
              <li>Not suitable for servers with a large number of features</li>
            </ul>
          </div>
          <div>
            <p style={{ ...s.h3, marginBottom: "24px" }}>Goals</p>
            <ul style={{ ...s.body, paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>Create an extended ESC menu with clear navigation</li>
              <li>Place key server features on a single screen</li>
              <li>Reduce the number of clicks and make the interface intuitive</li>
              <li>Design a modern UI with a neon aesthetic</li>
              <li>Improve player accessibility and engagement</li>
            </ul>
          </div>
        </div>

        <Divider />

        {/* USER NEEDS */}
        <p style={{ ...s.h2, marginBottom: "48px" }}>User needs</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "16px" }}>
          {USER_NEEDS.slice(0, 4).map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "12px" }} />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", maxWidth: "75%", margin: "0 auto 48px" }}>
          {USER_NEEDS.slice(4).map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "12px" }} />
          ))}
        </div>
        <p style={{ ...s.h3, marginBottom: "20px" }}>The player needs to:</p>
        <ul style={{ ...s.body, paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
          <li>quickly access quests</li>
          <li>collect daily rewards</li>
          <li>see their balance and privileges</li>
          <li>keep track of server updates</li>
          <li>navigate to the shop and settings</li>
          <li>easily exit the game and open social links</li>
        </ul>

        <Divider />

        {/* UX STRUCTURE */}
        <p style={{ ...s.h2, marginBottom: "32px" }}>UX structure</p>
        <p style={{ ...s.body, marginBottom: "20px", maxWidth: "860px" }}>
          At the concept stage, I created sketches to distribute blocks, separate the left and right areas, and define the card-based structure for quests and the guidebook. This helped establish the UX flow and minimize cognitive load.
        </p>
        <p style={{ ...s.body, marginBottom: "48px", maxWidth: "860px" }}>
          The menu structure reflects the logic of how players use the features. The UX flow intuitively guides the player from the main screen to the actions they need.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <Frame src={IMG_SKETCH_L} />
          <Frame src={IMG_UX_FLOW} />
        </div>

        <Divider />

        {/* UI STYLE GUIDE */}
        <p style={{ ...s.h2, marginBottom: "40px" }}>UI Style Guide</p>

        <p style={{ ...s.h3, marginBottom: "24px" }}>Colors</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "16px" }}>
          {COLORS.slice(0, 3).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "12px" }} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", maxWidth: "66%", marginBottom: "60px" }}>
          {COLORS.slice(3).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "12px" }} />)}
        </div>

        <p style={{ ...s.h3, marginBottom: "24px" }}>Typography — Nexa [Bold]</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px", marginBottom: "60px" }}>
          {[
            { label: "Headings — 30-40 px", size: "32px" },
            { label: "Body Text — 22-25 px", size: "22px" },
            { label: "Small Buttons — 15 px", size: "15px" },
            { label: "Default Buttons — 20 px", size: "20px" },
            { label: "Large Buttons — 30 px", size: "30px" },
            { label: "UI Labels — 22-30 px", size: "26px" },
            { label: "Captions — 20-30 px", size: "22px" },
          ].map(({ label, size }) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "16px", padding: "24px 28px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <span style={{ fontFamily: font, fontWeight: 700, fontSize: "15px", color: muted }}>{label}</span>
              <span style={{ fontFamily: font, fontWeight: 700, fontSize: size, color: white }}>{label.split("—")[0].trim()}</span>
            </div>
          ))}
        </div>

        <p style={{ ...s.h3, marginBottom: "24px" }}>Buttons</p>
        <img src={BUTTONS} alt="Buttons" style={{ width: "100%", borderRadius: "12px", marginBottom: "60px" }} />

        <p style={{ ...s.h3, marginBottom: "24px" }}>Icons &amp; Components</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "60px" }}>
          <img src={ICONS_1} alt="" style={{ width: "100%", borderRadius: "12px" }} />
          <img src={ICONS_2} alt="" style={{ width: "100%", borderRadius: "12px" }} />
        </div>

        {/* Hover / Active */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: "36px" }}>
          <div>
            <p style={{ ...s.h3, marginBottom: "20px" }}>Hover state</p>
            <ul style={{ ...s.body, paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>Icons slightly enlarge when hovered</li>
              <li>Provides visual feedback and draws attention to interactive elements</li>
              <li>Improves click target perception and engagement</li>
            </ul>
          </div>
          <div>
            <p style={{ ...s.h3, marginBottom: "20px" }}>Pressed / Active State</p>
            <ul style={{ ...s.body, paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>A light neon outline appears around the icon or button</li>
              <li>Signals that the element has been clicked or activated</li>
              <li>Maintains visual consistency with the neon UI style</li>
            </ul>
          </div>
        </div>
        <img src={STATES} alt="States" style={{ width: "100%", borderRadius: "12px" }} />

        <Divider />

        {/* MAIN UI */}
        <p style={{ ...s.h2, marginBottom: "32px" }}>Main UI</p>
        <p style={{ ...s.body, marginBottom: "40px", maxWidth: "860px" }}>
          The main screen demonstrates the UX flow: large navigation blocks, quest and reward cards, and a right column with social buttons and settings. Everything is designed for convenient and predictable player interaction.
        </p>
        <Frame src={IMG_MAIN_UI} />

        <Divider />

        {/* FEATURE BREAKDOWN */}
        <p style={{ ...s.h2, marginBottom: "40px" }}>Feature Breakdown</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {FEATURES.slice(0, 3).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "12px" }} />)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {FEATURES.slice(3, 6).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "12px" }} />)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
            {FEATURES.slice(6).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "12px" }} />)}
          </div>
        </div>

        <Divider />

        {/* ADDITIONAL SCREENS */}
        <p style={{ ...s.h2, marginBottom: "56px" }}>Additional Screens</p>

        {/* Cases — текст слева (1/3), картинка справа (2/3) */}
        <p style={{ ...s.h3, marginBottom: "32px" }}>Cases</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", alignItems: "start", marginBottom: "80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={s.body}>Clicking the &quot;Buy&quot; button opens a menu where you can select the number of cases to purchase. The total cost and a confirmation button are also displayed.</p>
            <p style={s.body}>Clicking the &quot;Open&quot; button opens a case-opening window for the user, which includes a &quot;Boost&quot; button.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Frame src={CASE_IMG_RIGHT} />
            <Frame src={CASE_IMG_LEFT} />
          </div>
        </div>

        {/* Privileges */}
        <p style={{ ...s.h3, marginBottom: "32px" }}>Privileges</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", alignItems: "start", marginBottom: "80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={s.body}>This screen displays a list of privileges, as well as information about the selected case. There are buttons to purchase a privilege or gift it to another player.</p>
            <p style={s.body}>Clicking &quot;Buy&quot; opens a window with purchase details and a confirmation button.</p>
            <p style={s.body}>Clicking &quot;Gift&quot; opens an almost identical window to the &quot;Buy&quot; option, but includes a field to enter the nickname of the player to whom the user wants to gift the privilege.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Frame src={PRIV_IMG_LEFT} />
            <Frame src={PRIV_IMG_MID} />
            <Frame src={PRIV_IMG_RIGHT} />
          </div>
        </div>

        {/* Warps */}
        <p style={{ ...s.h3, marginBottom: "32px" }}>Warps</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", alignItems: "start", marginBottom: "80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={s.body}>The screen displays cards for warps, each with a &quot;More Info&quot; button, allowing the user to click and learn more about the warp. Clicking the left mouse button on a warp card will automatically teleport the user to it.</p>
            <p style={s.body}>Each card has a hover effect, highlighting it and slightly increasing its size.</p>
            <p style={s.body}>Clicking the &quot;More Info&quot; button opens a window with detailed information about the warp, as well as a &quot;Teleport&quot; button.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Frame src={WARP_IMG_LEFT} />
            <Frame src={WARP_IMG_RIGHT} />
          </div>
        </div>

        {/* GuideBook */}
        <p style={{ ...s.h3, marginBottom: "32px" }}>GuideBook</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", alignItems: "start", marginBottom: "80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={s.body}>Clicking the &quot;Go&quot; button on a GuideBook card on the main page opens a convenient window, with categories (rules, guides, command list, and server features) on the left side, and the information for the selected category displayed on the right side.</p>
            <p style={s.body}>On the right side of the window, all information is structured, with each item having buttons to expand for more details and the option to collapse it back.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Frame src={GUIDE_IMG_LEFT} />
            <Frame src={GUIDE_IMG_RIGHT} />
          </div>
        </div>

        {/* FINAL RESULT */}
        <Divider />
        <p style={{ ...s.h2, marginBottom: "32px" }}>Final Result</p>
        <p style={{ ...s.body, maxWidth: "860px" }}>
          I created an interface that integrates all server functionality, improved the UX, and developed UI components. The project enhanced my UI/UX skills for game interfaces and helped me gain a deeper understanding of the visual logic behind player interactions.
        </p>

        {/* CONTACT */}
        <div style={{ marginTop: "140px", display: "flex", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "36px", maxWidth: "480px" }}>
            <p style={{ fontFamily: font, fontWeight: 700, fontSize: "20px", color: white, lineHeight: "1.5", margin: 0 }}>
              Ready to work together? Let&apos;s talk about freelance projects, collaborations, and full-time roles.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <a href="https://t.me/" target="_blank" rel="noreferrer" style={{ background: white, color: "#07100b", borderRadius: "200px", padding: "13px 26px", fontFamily: font, fontWeight: 700, fontSize: "20px", textDecoration: "none" }}>Telegram</a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" style={{ border: "1px solid rgba(255,255,255,0.2)", color: white, borderRadius: "200px", padding: "13px 26px", fontFamily: font, fontWeight: 700, fontSize: "20px", textDecoration: "none" }}>Instagram</a>
              <a href="mailto:example@gmail.com" style={{ border: "1px solid rgba(255,255,255,0.2)", color: white, borderRadius: "200px", padding: "13px 26px", fontFamily: font, fontWeight: 700, fontSize: "20px", textDecoration: "none" }}>Gmail</a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer style={{ marginTop: "140px", paddingBottom: "0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0" }}>
            {[["Insta", "#"], ["Behance", "#"], ["Telegram", "#"]].map(([label, href]) => (
              <a key={label} href={href} style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: "200px", padding: "12px 15px", fontFamily: font, fontWeight: 700, fontSize: "25px", color: white, textDecoration: "none" }}>{label}</a>
            ))}
          </div>
          <p style={{ fontFamily: font, fontWeight: 700, fontSize: "110px", color: white, letterSpacing: "-5.5px", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>
            Oleksii Klymushkin
          </p>
        </footer>

      </div>
    </main>
  );
}
