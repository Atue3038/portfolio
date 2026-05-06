import Link from "next/link";

const font = "'Nexa', sans-serif";
const bg = "#07100b";
const white = "#ffffff";
const muted = "rgba(255,255,255,0.55)";

const IMG_HERO     = "https://www.figma.com/api/mcp/asset/72b8cbf0-89a3-4bf2-9f83-6b001727c2b4";
const IMG_MAIN_UI  = "https://www.figma.com/api/mcp/asset/dc06252a-1ecd-4a78-9f16-4eefba54881d";
const IMG_SKETCH   = "https://www.figma.com/api/mcp/asset/f41ea73b-268c-4e77-821b-6366b5e4d915";
const IMG_UX_FLOW  = "https://www.figma.com/api/mcp/asset/97f61097-48b8-42a4-9c58-0a713737b9d5";

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

const BUTTONS  = "https://www.figma.com/api/mcp/asset/37457c5e-3b93-4356-b432-c9314d5f78be";
const ICONS_1  = "https://www.figma.com/api/mcp/asset/a527cf3d-a216-4c19-a6aa-e546f880e003";
const ICONS_2  = "https://www.figma.com/api/mcp/asset/df06d388-fdf3-4ed0-965b-95c3cf5204a8";
const STATES   = "https://www.figma.com/api/mcp/asset/96534af3-cf35-4524-aee3-302e07740ccc";

const FEATURES = [
  "https://www.figma.com/api/mcp/asset/e8343665-f4db-4bdb-a0d7-5f94c3bdacde",
  "https://www.figma.com/api/mcp/asset/e61ad240-d842-4469-aaa5-23c1466d2982",
  "https://www.figma.com/api/mcp/asset/8a530af1-5057-4fa9-87d7-14e36f8009c2",
  "https://www.figma.com/api/mcp/asset/709a0243-17b3-4685-b8c1-080530ab4da6",
  "https://www.figma.com/api/mcp/asset/a5c320cc-5312-4e5c-a350-87d6409c20ea",
  "https://www.figma.com/api/mcp/asset/8e016223-d2c9-4313-bf67-d0db202da682",
  "https://www.figma.com/api/mcp/asset/9927f9f5-a7ec-41ce-a2d3-2401c0e1356f",
];

const CASES  = [
  "https://www.figma.com/api/mcp/asset/d1e6a165-b04e-4ec8-a411-37d4c6c24c60",
  "https://www.figma.com/api/mcp/asset/f0085539-5467-4888-b11f-2c762d7af867",
  "https://www.figma.com/api/mcp/asset/a0b915fa-6ae8-447e-8f47-e6a87e5f504e",
];
const PRIVS  = [
  "https://www.figma.com/api/mcp/asset/9cb5b341-e1db-4496-a3f2-5df21066e541",
  "https://www.figma.com/api/mcp/asset/c8d575d3-9efe-4310-b1f5-2c58c9feef07",
  "https://www.figma.com/api/mcp/asset/6781bc27-9431-47dc-82f9-99fd589c4acc",
];
const WARPS  = [
  "https://www.figma.com/api/mcp/asset/28c075ec-6509-4688-9804-a3821852107e",
  "https://www.figma.com/api/mcp/asset/02d883d2-390d-4ea5-9542-13414f7dfea3",
];
const GUIDES = [
  "https://www.figma.com/api/mcp/asset/e0e65fe4-7406-4518-8cff-178e26d909b9",
  "https://www.figma.com/api/mcp/asset/5492f058-324e-4ef1-a776-9c575329c81d",
];

/* Белая рамка как у картины — толстая, заметная */
function Frame({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div style={{
      border: "8px solid rgba(255,255,255,0.85)",
      borderRadius: "16px",
      overflow: "hidden",
      background: white,
      flexShrink: 0,
    }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
    </div>
  );
}

function Divider() {
  return <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.12)", margin: "80px 0" }} />;
}

function H2({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: font, fontWeight: 700, fontSize: "34px", color: white, margin: "0 0 32px" }}>{children}</p>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: font, fontWeight: 700, fontSize: "26px", color: white, margin: "0 0 20px" }}>{children}</p>;
}
function Body({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: font, fontWeight: 700, fontSize: "18px", lineHeight: "30px", color: white, margin: 0 }}>{children}</p>;
}
function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ fontFamily: font, fontWeight: 700, fontSize: "18px", lineHeight: "30px", color: white, paddingLeft: "22px", margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

/* 
  Блок с чередованием: картинка выходит за край страницы на ~12%
  side="left"  → картинка слева (уходит влево за padding), текст справа
  side="right" → текст слева, картинка справа (уходит вправо за padding)
  side="left-only" → только картинка слева (без текста)
*/
function ScreenRow({
  src,
  text,
  side,
}: {
  src: string;
  text?: string;
  side: "left" | "right" | "left-only";
}) {
  const img = (
    <div style={{
      flex: "0 0 62%",
      /* Выходим за край на 60px (равно padding контейнера) */
      marginLeft: side === "left" || side === "left-only" ? "-60px" : "0",
      marginRight: side === "right" ? "-60px" : "0",
    }}>
      <Frame src={src} />
    </div>
  );

  const txt = text ? (
    <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
      <Body>{text}</Body>
    </div>
  ) : null;

  return (
    <div style={{
      display: "flex",
      gap: "40px",
      alignItems: "center",
      marginBottom: "32px",
      overflow: "hidden",
    }}>
      {side === "left" || side === "left-only" ? (
        <>{img}{txt}</>
      ) : (
        <>{txt}{img}</>
      )}
    </div>
  );
}

/* Секция с заголовком и набором блоков */
function AdditionalSection({
  title,
  rows,
}: {
  title: string;
  rows: { src: string; text?: string; side: "left" | "right" | "left-only" }[];
}) {
  return (
    <div style={{ marginBottom: "80px" }}>
      <H3>{title}</H3>
      {rows.map((row, i) => (
        <ScreenRow key={i} src={row.src} text={row.text} side={row.side} />
      ))}
    </div>
  );
}

export default function VimeworldCase() {
  return (
    <main style={{ background: bg, minHeight: "100vh", overflow: "hidden" }}>

      {/* NAV */}
      <header style={{ padding: "45px 60px 0" }}>
        <Link href="/" style={{ fontFamily: font, fontWeight: 700, fontSize: "110px", color: white, letterSpacing: "-5.5px", textTransform: "uppercase", textDecoration: "none", display: "block", lineHeight: 1 }}>
          Oleksii Klymushkin
        </Link>
        <nav style={{ display: "flex", justifyContent: "space-between", marginTop: "22px" }}>
          {[["Works", "/#works"], ["About me", "/#about"], ["Contact", "/#contact"]].map(([l, h]) => (
            <a key={l} href={h} style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: "200px", padding: "10px 18px", fontFamily: font, fontWeight: 700, fontSize: "22px", color: white, textDecoration: "none" }}>{l}</a>
          ))}
        </nav>
      </header>

      <div style={{ padding: "72px 60px 0" }}>

        {/* HERO */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontFamily: font, fontWeight: 700, fontSize: "40px", color: white, margin: "0 0 12px" }}>Minecraft ESC Menu — UI/UX Design</p>
          <p style={{ fontFamily: font, fontWeight: 700, fontSize: "28px", color: muted, margin: 0 }}>Full Interface &amp; Experience</p>
        </div>
        <Frame src={IMG_HERO} />

        {/* PROJECT OVERVIEW */}
        <div style={{ marginTop: "72px" }}>
          <H2>Project overview</H2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "820px" }}>
            <Body>The project is a completely redesigned ESC menu for a Minecraft server.</Body>
            <Body>I created the UX flow, navigation, player action scenarios, as well as a visual UI that integrates the player profile, quests, daily rewards, guidebook, updates, and social features.</Body>
            <Body>The goal is to enhance the player experience and make the interface intuitive, modern, and user-friendly.</Body>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div style={{ marginTop: "56px" }}>
          <H2>Disclaimer</H2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "820px" }}>
            <Body>The server logo and branding belong to their respective owners.</Body>
            <Body>The project showcases both UX and UI: menu structure, player scenarios, navigation, and visual design.</Body>
            <Body>The project was developed for a client.</Body>
          </div>
        </div>

        <Divider />

        {/* PROBLEM & GOALS */}
        <H2>Problem &amp; Goals</H2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
          <div>
            <H3>Problem</H3>
            <Body>Standard Minecraft ESC menu:</Body>
            <div style={{ marginTop: "12px" }}>
              <Ul items={["Does not display the player's profile or statistics", "Does not reflect bonuses, quests, or the shop", "Not suitable for servers with a large number of features"]} />
            </div>
          </div>
          <div>
            <H3>Goals</H3>
            <Ul items={["Create an extended ESC menu with clear navigation", "Place key server features on a single screen", "Reduce the number of clicks and make the interface intuitive", "Design a modern UI with a neon aesthetic", "Improve player accessibility and engagement"]} />
          </div>
        </div>

        <Divider />

        {/* USER NEEDS */}
        <H2>User needs</H2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px", marginBottom: "14px" }}>
          {USER_NEEDS.slice(0, 4).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "10px" }} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px", maxWidth: "75%", margin: "0 auto 48px" }}>
          {USER_NEEDS.slice(4).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "10px" }} />)}
        </div>
        <H3>The player needs to:</H3>
        <Ul items={["quickly access quests", "collect daily rewards", "see their balance and privileges", "keep track of server updates", "navigate to the shop and settings", "easily exit the game and open social links"]} />

        <Divider />

        {/* UX STRUCTURE */}
        <H2>UX structure</H2>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "48px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Body>At the concept stage, I created sketches to distribute blocks, separate the left and right areas, and define the card-based structure for quests and the guidebook. This helped establish the UX flow and minimize cognitive load.</Body>
            <Body>The menu structure reflects the logic of how players use the features. The UX flow intuitively guides the player from the main screen to the actions they need.</Body>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <Frame src={IMG_SKETCH} />
            <Frame src={IMG_UX_FLOW} />
          </div>
        </div>

        <Divider />

        {/* UI STYLE GUIDE */}
        <H2>UI Style Guide</H2>
        <H3>Colors</H3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px", marginBottom: "14px" }}>
          {COLORS.slice(0, 3).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "10px" }} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px", maxWidth: "66%", marginBottom: "56px" }}>
          {COLORS.slice(3).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "10px" }} />)}
        </div>

        <H3>Typography — Nexa [Bold]</H3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "56px" }}>
          {[["Headings — 30-40 px", "32px"], ["Body Text — 22-25 px", "22px"], ["Small Buttons — 15 px", "15px"], ["Default Buttons — 20 px", "20px"], ["Large Buttons — 30 px", "28px"], ["UI Labels — 22-30 px", "24px"], ["Captions — 20-30 px", "20px"]].map(([label, size]) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px 24px", display: "flex", flexDirection: "column", gap: "18px" }}>
              <span style={{ fontFamily: font, fontWeight: 700, fontSize: "13px", color: muted }}>{label}</span>
              <span style={{ fontFamily: font, fontWeight: 700, fontSize: size, color: white }}>Hello World</span>
            </div>
          ))}
        </div>

        <H3>Buttons</H3>
        <img src={BUTTONS} alt="Buttons" style={{ width: "100%", borderRadius: "10px", marginBottom: "56px" }} />

        <H3>Icons &amp; Components</H3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "56px" }}>
          <img src={ICONS_1} alt="" style={{ width: "100%", borderRadius: "10px" }} />
          <img src={ICONS_2} alt="" style={{ width: "100%", borderRadius: "10px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", marginBottom: "32px" }}>
          <div><H3>Hover state</H3><Ul items={["Icons slightly enlarge when hovered", "Provides visual feedback and draws attention to interactive elements", "Improves click target perception and engagement"]} /></div>
          <div><H3>Pressed / Active State</H3><Ul items={["A light neon outline appears around the icon or button", "Signals that the element has been clicked or activated", "Maintains visual consistency with the neon UI style"]} /></div>
        </div>
        <img src={STATES} alt="States" style={{ width: "100%", borderRadius: "10px" }} />

        <Divider />

        {/* MAIN UI */}
        <H2>Main UI</H2>
        <Body>The main screen demonstrates the UX flow: large navigation blocks, quest and reward cards, and a right column with social buttons and settings. Everything is designed for convenient and predictable player interaction.</Body>
        <div style={{ marginTop: "32px" }}><Frame src={IMG_MAIN_UI} /></div>

        <Divider />

        {/* FEATURE BREAKDOWN */}
        <H2>Feature Breakdown</H2>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
            {FEATURES.slice(0, 3).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "10px" }} />)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
            {FEATURES.slice(3, 6).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "10px" }} />)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px" }}>
            {FEATURES.slice(6).map((src, i) => <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: "10px" }} />)}
          </div>
        </div>

        <Divider />

        {/* ADDITIONAL SCREENS */}
        <H2>Additional Screens</H2>

        <AdditionalSection title="Cases" rows={[
          { src: CASES[0], text: 'Clicking the "Buy" button opens a menu where you can select the number of cases to purchase. The total cost and a confirmation button are also displayed.', side: "left" },
          { src: CASES[1], text: 'Clicking the "Open" button opens a case-opening window for the user, which includes a "Boost" button.', side: "right" },
          { src: CASES[2], side: "left-only" },
        ]} />

        <AdditionalSection title="Privileges" rows={[
          { src: PRIVS[0], text: "This screen displays a list of privileges, as well as information about the selected case. There are buttons to purchase a privilege or gift it to another player.", side: "left" },
          { src: PRIVS[1], text: 'Clicking "Buy" opens a window with purchase details and a confirmation button.', side: "right" },
          { src: PRIVS[2], text: 'Clicking "Gift" opens an almost identical window to the "Buy" option, but includes a field to enter the nickname of the player to whom the user wants to gift the privilege.', side: "left" },
        ]} />

        <AdditionalSection title="Warps" rows={[
          { src: WARPS[0], text: 'The screen displays cards for warps, each with a "More Info" button. Each card has a hover effect, highlighting it and slightly increasing its size.', side: "left" },
          { src: WARPS[1], text: 'Clicking the "More Info" button opens a window with detailed information about the warp, as well as a "Teleport" button.', side: "right" },
        ]} />

        <AdditionalSection title="GuideBook" rows={[
          { src: GUIDES[0], text: 'Clicking the "Go" button opens a convenient window, with categories on the left side and the information for the selected category displayed on the right side.', side: "left" },
          { src: GUIDES[1], text: "On the right side of the window, all information is structured, with each item having buttons to expand for more details and the option to collapse it back.", side: "right" },
        ]} />

        <Divider />

        {/* FINAL RESULT */}
        <H2>Final Result</H2>
        <Body>I created an interface that integrates all server functionality, improved the UX, and developed UI components. The project enhanced my UI/UX skills for game interfaces and helped me gain a deeper understanding of the visual logic behind player interactions.</Body>

        {/* CONTACT */}
        <div style={{ marginTop: "120px", display: "flex", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "460px" }}>
            <Body>Ready to work together? Let&apos;s talk about freelance projects, collaborations, and full-time roles.</Body>
            <div style={{ display: "flex", gap: "12px" }}>
              {[["Telegram", true], ["Instagram", false], ["Gmail", false]].map(([label, filled]) => (
                <a key={label as string} href={label === "Gmail" ? "mailto:example@gmail.com" : "#"} style={{ background: filled ? white : "transparent", color: filled ? bg : white, border: filled ? "none" : "1px solid rgba(255,255,255,0.2)", borderRadius: "200px", padding: "12px 24px", fontFamily: font, fontWeight: 700, fontSize: "18px", textDecoration: "none", whiteSpace: "nowrap" }}>{label}</a>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer style={{ marginTop: "120px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {["Insta", "Behance", "Telegram"].map(l => (
              <a key={l} href="#" style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: "200px", padding: "10px 18px", fontFamily: font, fontWeight: 700, fontSize: "22px", color: white, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <p style={{ fontFamily: font, fontWeight: 700, fontSize: "110px", color: white, letterSpacing: "-5.5px", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>Oleksii Klymushkin</p>
        </footer>

      </div>
    </main>
  );
}
