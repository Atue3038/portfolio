import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

/* ── All image assets from Figma ── */
const IMG_HERO = "https://www.figma.com/api/mcp/asset/1cb55a42-daef-42ec-a9fb-0969229bc37c";
const IMG_SKETCH = "https://www.figma.com/api/mcp/asset/a0bd9477-f170-42bd-a529-eb91be8072b8";
const IMG_UX_FLOW = "https://www.figma.com/api/mcp/asset/a19f24eb-1443-4ee5-a9da-595b9235c713";
const IMG_MAIN_UI = "https://www.figma.com/api/mcp/asset/765c96e5-9346-47cd-a1d8-3e2fa23e4684";

const IMG_USER_NEEDS = [
  "https://www.figma.com/api/mcp/asset/cd6a5187-0a07-4a3b-81f0-8821b527a2d7",
  "https://www.figma.com/api/mcp/asset/0bf2f6e5-d8ac-4a17-af32-b509ffc0a7c7",
  "https://www.figma.com/api/mcp/asset/423094ee-f664-4396-8790-15f7a38bbd43",
  "https://www.figma.com/api/mcp/asset/4a6ca68e-3e20-41b0-8866-caef23e08629",
  "https://www.figma.com/api/mcp/asset/6b6967ab-a6f8-45b4-a1b6-fa747fcd4c90",
  "https://www.figma.com/api/mcp/asset/cf95a462-b0fd-463b-b69d-e17647855c62",
  "https://www.figma.com/api/mcp/asset/8ea5f7c2-1160-4ddf-8556-6fd65cf08eab",
];

const IMG_UX_STRUCTURE = "https://www.figma.com/api/mcp/asset/efbe3638-3880-4b51-ad70-7ad496411b0a";

const IMG_COLORS = [
  "https://www.figma.com/api/mcp/asset/2e392312-5fa7-49c2-b847-14923a348a9e",
  "https://www.figma.com/api/mcp/asset/56985bb3-496e-4826-82c7-bc30a5461f4b",
  "https://www.figma.com/api/mcp/asset/9ba5651c-e896-4a06-ba6e-ab7a2ea98f35",
  "https://www.figma.com/api/mcp/asset/73c29a5f-dfd2-446c-ae47-3ee59b3aebcd",
  "https://www.figma.com/api/mcp/asset/b8bef3b3-b9be-40c1-91a1-3d27cf17c809",
];

const IMG_BUTTONS = "https://www.figma.com/api/mcp/asset/16a4a2d3-880c-4d35-a40f-09c5275940f5";
const IMG_ICONS_1 = "https://www.figma.com/api/mcp/asset/6c6fa198-06f3-44f5-8e73-c4113218ce15";
const IMG_ICONS_2 = "https://www.figma.com/api/mcp/asset/2d89c7c5-4d4c-44f9-9946-2264701b7b9f";

const IMG_STATES = "https://www.figma.com/api/mcp/asset/2a36a29a-d57d-4f20-a1c5-e636c7bb5063";

const IMG_FEATURE_BREAKDOWN = [
  "https://www.figma.com/api/mcp/asset/f64f0927-6b45-422c-bebd-f4370022b139",
  "https://www.figma.com/api/mcp/asset/721086c9-9134-4fe8-994f-eb8a9a18f145",
  "https://www.figma.com/api/mcp/asset/e921d2d9-3b13-4220-b729-e574c43ae2d5",
  "https://www.figma.com/api/mcp/asset/c809c995-147c-4007-b1cf-52b8efac89d6",
  "https://www.figma.com/api/mcp/asset/fe49529c-5f0d-4028-b0d7-57799d43aa04",
  "https://www.figma.com/api/mcp/asset/87cd3db8-877e-42fc-a74a-9806b274f787",
  "https://www.figma.com/api/mcp/asset/5df8de40-aa80-4946-ac51-892d82363130",
  "https://www.figma.com/api/mcp/asset/76b6c2de-3bd6-49d9-a4d1-004349b89764",
];

const IMG_CASES = [
  "https://www.figma.com/api/mcp/asset/739b6488-1d8f-4e9e-8688-cca86410e705",
  "https://www.figma.com/api/mcp/asset/a61d23aa-f842-4811-bae6-f7c7f16df34f",
];
const IMG_PRIVILEGES = [
  "https://www.figma.com/api/mcp/asset/cf8b01d6-92b3-4918-887a-68ed55379da8",
  "https://www.figma.com/api/mcp/asset/52b824a1-9cf2-4e7c-9cfe-baeaa3492547",
  "https://www.figma.com/api/mcp/asset/8436fc90-3a7a-4429-b61e-1c4984d267a6",
];
const IMG_WARPS = [
  "https://www.figma.com/api/mcp/asset/3d2edeb2-2406-433b-a6b2-7883109156e7",
  "https://www.figma.com/api/mcp/asset/8083f17d-482f-41df-95ba-0614e93d394e",
];
const IMG_GUIDEBOOK = [
  "https://www.figma.com/api/mcp/asset/5980cab7-d0d0-4e99-9a66-c75c1ab7a972",
  "https://www.figma.com/api/mcp/asset/870d8c02-7441-4bcc-a26f-7c8f4d6f6f5d",
];

/* ── Reusable styled components ── */
function SectionDivider() {
  return (
    <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)", margin: "80px 0 60px" }} />
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "35px", color: "#fff", marginBottom: "40px" }}>
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "30px", color: "#fff", marginBottom: "28px" }}>
      {children}
    </h3>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "25px", lineHeight: "40px", color: "#fff" }}>
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "25px", lineHeight: "40px", color: "#fff", paddingLeft: "30px" }}>
      {items.map((item) => (
        <li key={item} style={{ marginBottom: "4px", listStyleType: "disc" }}>{item}</li>
      ))}
    </ul>
  );
}

function CaseFrame({ src }: { src: string }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "25px",
      boxShadow: "0px 4px 50px rgba(0,0,0,0.25)",
      padding: "60px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <img src={src} alt="" style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }} />
    </div>
  );
}

const TYPO_ITEMS = [
  { label: "Headings — 30-40 px", size: "35px" },
  { label: "Body Text — 22-25 px", size: "24px" },
  { label: "Small Buttons — 15 px", size: "15px" },
  { label: "Default Buttons — 20 px", size: "20px" },
  { label: "Large Buttons — 30 px", size: "30px" },
  { label: "UI Labels — 22-30 px", size: "26px" },
  { label: "Captions — 20-30 px", size: "22px" },
];

export default function VimeworldCase() {
  return (
    <main style={{ background: "#07100b" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ paddingTop: "80px", paddingLeft: "60px", paddingRight: "60px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "48px", color: "#fff", marginBottom: "16px" }}>
          Minecraft ESC Menu — UI/UX Design
        </h1>
        <p style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "40px", color: "rgba(255,255,255,0.7)", marginBottom: "60px" }}>
          Full Interface &amp; Experience
        </p>
        <CaseFrame src={IMG_HERO} />
      </section>

      {/* ── PROJECT OVERVIEW ── */}
      <section style={{ padding: "80px 60px 0" }}>
        <SectionTitle>Project overview</SectionTitle>
        <BodyText>
          The project is a completely redesigned ESC menu for a Minecraft server.
          <br /><br />
          I created the UX flow, navigation, player action scenarios, as well as a visual UI that integrates the player profile, quests, daily rewards, guidebook, updates, and social features.
          <br /><br />
          The goal is to enhance the player experience and make the interface intuitive, modern, and user-friendly.
        </BodyText>

        <div style={{ marginTop: "60px" }}>
          <SectionTitle>Disclaimer</SectionTitle>
          <BodyText>
            The server logo and branding belong to their respective owners.
            <br /><br />
            The project showcases both UX and UI: menu structure, player scenarios, navigation, and visual design.
            <br /><br />
            The project was developed for a client.
          </BodyText>
        </div>
      </section>

      {/* ── PROBLEM & GOALS ── */}
      <SectionDivider />
      <section style={{ padding: "0 60px" }}>
        <SectionTitle>Problem &amp; Goals</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
          <div>
            <SubTitle>Problem</SubTitle>
            <BodyText>Standard Minecraft ESC menu:</BodyText>
            <div style={{ marginTop: "16px" }}>
              <BulletList items={[
                "Does not display the player's profile or statistics",
                "Does not reflect bonuses, quests, or the shop",
                "Not suitable for servers with a large number of features",
              ]} />
            </div>
          </div>
          <div>
            <SubTitle>Goals</SubTitle>
            <BulletList items={[
              "Create an extended ESC menu with clear navigation",
              "Place key server features on a single screen",
              "Reduce the number of clicks and make the interface intuitive",
              "Design a modern UI with a neon aesthetic",
              "Improve player accessibility and engagement",
            ]} />
          </div>
        </div>
      </section>

      {/* ── USER NEEDS ── */}
      <SectionDivider />
      <section style={{ padding: "0 60px" }}>
        <SectionTitle>User needs</SectionTitle>
        {/* 4 + 3 grid of user need tiles */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", marginBottom: "24px" }}>
          {IMG_USER_NEEDS.slice(0, 4).map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: "100%", height: "auto", borderRadius: "16px" }} />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginLeft: "auto", marginRight: "auto", maxWidth: "75%" }}>
          {IMG_USER_NEEDS.slice(4).map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: "100%", height: "auto", borderRadius: "16px" }} />
          ))}
        </div>

        <div style={{ marginTop: "60px" }}>
          <SubTitle>The player needs to:</SubTitle>
          <BulletList items={[
            "quickly access quests",
            "collect daily rewards",
            "see their balance and privileges",
            "keep track of server updates",
            "navigate to the shop and settings",
            "easily exit the game and open social links",
          ]} />
        </div>
      </section>

      {/* ── UX STRUCTURE ── */}
      <SectionDivider />
      <section style={{ padding: "0 60px" }}>
        <SectionTitle>UX structure</SectionTitle>
        <BodyText>
          At the concept stage, I created sketches to distribute blocks, separate the left and right areas, and define the card-based structure for quests and the guidebook. This helped establish the UX flow and minimize cognitive load.
        </BodyText>
        <div style={{ marginTop: "16px", marginBottom: "40px" }}>
          <BodyText>
            The menu structure reflects the logic of how players use the features. The UX flow intuitively guides the player from the main screen to the actions they need.
          </BodyText>
        </div>
        {/* Sketch images */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <CaseFrame src={IMG_SKETCH} />
          <CaseFrame src={IMG_UX_FLOW} />
        </div>
      </section>

      {/* ── UI STYLE GUIDE ── */}
      <SectionDivider />
      <section style={{ padding: "0 60px" }}>
        <SectionTitle>UI Style Guide</SectionTitle>

        {/* Colors */}
        <SubTitle>Colors</SubTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "24px" }}>
          {IMG_COLORS.slice(0, 3).map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: "100%", height: "auto", borderRadius: "16px" }} />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", maxWidth: "66%", marginBottom: "60px" }}>
          {IMG_COLORS.slice(3).map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: "100%", height: "auto", borderRadius: "16px" }} />
          ))}
        </div>

        {/* Typography */}
        <SubTitle>Typography — Nexa [Bold]</SubTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "60px" }}>
          {TYPO_ITEMS.map(({ label, size }) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.12)",
              borderRadius: "20px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}>
              <span style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "18px", color: "rgba(255,255,255,0.7)" }}>
                {label}
              </span>
              <span style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: size, color: "#fff" }}>
                Hello World
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <SubTitle>Buttons</SubTitle>
        <img src={IMG_BUTTONS} alt="Buttons" style={{ width: "100%", height: "auto", borderRadius: "16px", marginBottom: "60px" }} />

        {/* Icons & Components */}
        <SubTitle>Icons &amp; Components</SubTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "60px" }}>
          <img src={IMG_ICONS_1} alt="Icons 1" style={{ width: "100%", height: "auto", borderRadius: "16px" }} />
          <img src={IMG_ICONS_2} alt="Icons 2" style={{ width: "100%", height: "auto", borderRadius: "16px" }} />
        </div>

        {/* Hover + Active states */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: "40px" }}>
          <div>
            <SubTitle>Hover state</SubTitle>
            <BulletList items={[
              "Icons slightly enlarge when hovered",
              "Provides visual feedback and draws attention to interactive elements",
              "Improves click target perception and engagement",
            ]} />
          </div>
          <div>
            <SubTitle>Pressed / Active State</SubTitle>
            <BulletList items={[
              "A light neon outline appears around the icon or button",
              "Signals that the element has been clicked or activated",
              "Maintains visual consistency with the neon UI style",
            ]} />
          </div>
        </div>
        <img src={IMG_STATES} alt="States" style={{ width: "100%", height: "auto", borderRadius: "16px" }} />
      </section>

      {/* ── MAIN UI ── */}
      <SectionDivider />
      <section style={{ padding: "0 60px" }}>
        <SectionTitle>Main UI</SectionTitle>
        <BodyText>
          The main screen demonstrates the UX flow: large navigation blocks, quest and reward cards, and a right column with social buttons and settings. Everything is designed for convenient and predictable player interaction.
        </BodyText>
        <div style={{ marginTop: "40px" }}>
          <CaseFrame src={IMG_MAIN_UI} />
        </div>
      </section>

      {/* ── FEATURE BREAKDOWN ── */}
      <SectionDivider />
      <section style={{ padding: "0 60px" }}>
        <SectionTitle>Feature Breakdown</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "20px" }}>
          {IMG_FEATURE_BREAKDOWN.slice(0, 3).map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: "100%", height: "auto", borderRadius: "16px" }} />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "20px" }}>
          {IMG_FEATURE_BREAKDOWN.slice(3, 6).map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: "100%", height: "auto", borderRadius: "16px" }} />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {IMG_FEATURE_BREAKDOWN.slice(6).map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: "100%", height: "auto", borderRadius: "16px" }} />
          ))}
        </div>
      </section>

      {/* ── ADDITIONAL SCREENS ── */}
      <SectionDivider />
      <section style={{ padding: "0 60px" }}>
        <SectionTitle>Additional Screens</SectionTitle>

        {/* Cases */}
        <SubTitle>Cases</SubTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <BodyText>
              Clicking the &quot;Buy&quot; button opens a menu where you can select the number of cases to purchase. The total cost and a confirmation button are also displayed.
            </BodyText>
            <CaseFrame src={IMG_CASES[0]} />
            <BodyText>
              Clicking the &quot;Open&quot; button opens a case-opening window for the user, which includes a &quot;Boost&quot; button.
            </BodyText>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <CaseFrame src={IMG_CASES[1]} />
          </div>
        </div>

        {/* Privileges */}
        <SubTitle>Privileges</SubTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <BodyText>
              This screen displays a list of privileges, as well as information about the selected case. There are buttons to purchase a privilege or gift it to another player.
            </BodyText>
            <CaseFrame src={IMG_PRIVILEGES[0]} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <BodyText>
              Clicking &quot;Buy&quot; opens a window with purchase details and a confirmation button.
            </BodyText>
            <CaseFrame src={IMG_PRIVILEGES[1]} />
            <BodyText>
              Clicking &quot;Gift&quot; opens an almost identical window to the &quot;Buy&quot; option, but includes a field to enter the nickname of the player to whom the user wants to gift the privilege.
            </BodyText>
            <CaseFrame src={IMG_PRIVILEGES[2]} />
          </div>
        </div>

        {/* Warps */}
        <SubTitle>Warps</SubTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <BodyText>
              The screen displays cards for warps, each with a &quot;More Info&quot; button, allowing the user to click and learn more about the warp. Clicking the left mouse button on a warp card will automatically teleport the user to it.
            </BodyText>
            <BodyText>Each card has a hover effect, highlighting it and slightly increasing its size.</BodyText>
            <CaseFrame src={IMG_WARPS[0]} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <BodyText>
              Clicking the &quot;More Info&quot; button opens a window with detailed information about the warp, as well as a &quot;Teleport&quot; button.
            </BodyText>
            <CaseFrame src={IMG_WARPS[1]} />
          </div>
        </div>

        {/* GuideBook */}
        <SubTitle>GuideBook</SubTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <BodyText>
              Clicking the &quot;Go&quot; button on a GuideBook card on the main page opens a convenient window, with categories (rules, guides, command list, and server features) on the left side, and the information for the selected category displayed on the right side.
            </BodyText>
            <CaseFrame src={IMG_GUIDEBOOK[0]} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <BodyText>
              On the right side of the window, all information is structured, with each item having buttons to expand for more details and the option to collapse it back.
            </BodyText>
            <CaseFrame src={IMG_GUIDEBOOK[1]} />
          </div>
        </div>
      </section>

      {/* ── FINAL RESULT ── */}
      <SectionDivider />
      <section style={{ padding: "0 60px" }}>
        <SectionTitle>Final Result</SectionTitle>
        <BodyText>
          I created an interface that integrates all server functionality, improved the UX, and developed UI components. The project enhanced my UI/UX skills for game interfaces and helped me gain a deeper understanding of the visual logic behind player interactions.
        </BodyText>
      </section>

      {/* ── CONTACT + FOOTER ── */}
      <ContactSection />
      <Footer />
    </main>
  );
}
