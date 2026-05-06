"use client";

const font = "'Nexa', sans-serif";
const PHOTO = "https://www.figma.com/api/mcp/asset/0f26f36b-0d01-47aa-aade-53bb4ba79cad";

export default function HeroSection() {
  return (
    <section id="about" style={{
      marginTop: "100px",
      paddingLeft: "60px",
      paddingRight: "60px",
      display: "flex",
      gap: "72px",
      alignItems: "flex-start",
    }}>
      {/* Photo */}
      <div style={{
        width: "520px",
        height: "540px",
        borderRadius: "16px",
        overflow: "hidden",
        flexShrink: 0,
        background: "#064622",
        position: "relative",
      }}>
        <img src={PHOTO} alt="Oleksii Klymushkin" style={{
          position: "absolute",
          top: 0,
          left: "-4%",
          width: "108%",
          height: "auto",
          objectFit: "cover",
        }} />
      </div>

      {/* Right column */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "540px",
        paddingTop: "32px",
      }}>
        {/* Bio text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <p style={{ fontFamily: font, fontWeight: 700, fontSize: "22px", lineHeight: "32px", color: "#fff", margin: 0 }}>
            Hi!
          </p>
          <p style={{ fontFamily: font, fontWeight: 700, fontSize: "22px", lineHeight: "32px", color: "#fff", margin: 0 }}>
            I&apos;m Oleksii Klymushkin, a junior UI/UX designer creating beautiful, user-friendly, and intuitive designs.
          </p>
          <p style={{ fontFamily: font, fontWeight: 700, fontSize: "22px", lineHeight: "32px", color: "#fff", margin: 0 }}>
            My goal is to create designs that make users&apos; lives easier while delivering value to businesses. I aim to blend functionality with beauty, ensuring every interaction feels natural and intuitive.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "80px" }}>
          {[["1", "projects"], ["1", "year experience"]].map(([num, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <span style={{ fontFamily: font, fontWeight: 700, fontSize: "90px", lineHeight: 1, color: "#fff" }}>{num}</span>
              <span style={{ fontFamily: font, fontWeight: 700, fontSize: "18px", color: "rgba(255,255,255,0.6)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
