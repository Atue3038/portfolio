"use client";

const PHOTO_URL = "https://www.figma.com/api/mcp/asset/0f26f36b-0d01-47aa-aade-53bb4ba79cad";

export default function HeroSection() {
  return (
    <section id="about" style={{
      marginTop: "80px",
      paddingLeft: "60px",
      paddingRight: "60px",
      display: "flex",
      gap: "80px",
      alignItems: "flex-start",
    }}>
      {/* Photo */}
      <div style={{
        width: "587px",
        height: "601px",
        borderRadius: "16px",
        overflow: "hidden",
        flexShrink: 0,
        background: "#064622",
        position: "relative",
      }}>
        <img src={PHOTO_URL} alt="Oleksii Klymushkin" style={{
          position: "absolute",
          top: 0, left: 0,
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
        height: "601px",
      }}>
        {/* Bio */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p style={{
            fontFamily: "'Nexa', sans-serif",
            fontWeight: 700,
            fontSize: "25px",
            lineHeight: "35px",
            color: "#ffffff",
            margin: 0,
          }}>Hi!</p>
          <p style={{
            fontFamily: "'Nexa', sans-serif",
            fontWeight: 700,
            fontSize: "25px",
            lineHeight: "35px",
            color: "#ffffff",
            margin: 0,
          }}>I&apos;m Oleksii Klymushkin, a junior UI/UX designer creating beautiful, user-friendly, and intuitive designs.</p>
          <p style={{
            fontFamily: "'Nexa', sans-serif",
            fontWeight: 700,
            fontSize: "25px",
            lineHeight: "35px",
            color: "#ffffff",
            margin: 0,
          }}>My goal is to create designs that make users&apos; lives easier while delivering value to businesses. I aim to blend functionality with beauty, ensuring every interaction feels natural and intuitive.</p>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "80px", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <span style={{
              fontFamily: "'Nexa', sans-serif",
              fontWeight: 700,
              fontSize: "100px",
              lineHeight: "1",
              color: "#ffffff",
            }}>1</span>
            <span style={{
              fontFamily: "'Nexa', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "rgba(255,255,255,0.7)",
            }}>projects</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <span style={{
              fontFamily: "'Nexa', sans-serif",
              fontWeight: 700,
              fontSize: "100px",
              lineHeight: "1",
              color: "#ffffff",
            }}>1</span>
            <span style={{
              fontFamily: "'Nexa', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "rgba(255,255,255,0.7)",
            }}>year experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
