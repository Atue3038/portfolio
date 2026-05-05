"use client";

export default function WorkExperienceSection() {
  return (
    <section style={{ marginTop: "120px", paddingLeft: "60px", paddingRight: "60px" }}>
      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.2)", marginBottom: "32px" }} />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{
          fontFamily: "'Nexa', sans-serif",
          fontWeight: 700,
          fontSize: "20px",
          color: "#ffffff",
          margin: 0,
          minWidth: "200px",
        }}>Work Experience</p>

        <p style={{
          fontFamily: "'Nexa', sans-serif",
          fontWeight: 700,
          fontSize: "20px",
          color: "rgba(255,255,255,0.7)",
          textTransform: "uppercase",
          letterSpacing: "-0.5px",
          margin: 0,
        }}>UI/UX designer</p>

        <p style={{
          fontFamily: "'Nexa', sans-serif",
          fontWeight: 700,
          fontSize: "20px",
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          lineHeight: "1.4",
        }}>
          VimeWorld<br />[Pixelmon Ultimate]
        </p>

        <p style={{
          fontFamily: "'Nexa', sans-serif",
          fontWeight: 700,
          fontSize: "20px",
          color: "rgba(255,255,255,0.7)",
          margin: 0,
          textAlign: "right",
          minWidth: "140px",
        }}>2025 - Now</p>
      </div>

      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.2)", marginTop: "32px" }} />
    </section>
  );
}
