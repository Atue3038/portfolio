"use client";

const font = "'Nexa', sans-serif";

export default function WorkExperienceSection() {
  return (
    <section style={{ marginTop: "100px", paddingLeft: "60px", paddingRight: "60px" }}>
      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)", marginBottom: "22px" }} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontFamily: font, fontWeight: 700, fontSize: "20px", color: "#fff", margin: 0, minWidth: "180px" }}>
          Work Experience
        </p>
        <p style={{ fontFamily: font, fontWeight: 700, fontSize: "20px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "-0.5px", margin: 0 }}>
          UI/UX designer
        </p>
        <p style={{ fontFamily: font, fontWeight: 700, fontSize: "20px", color: "#fff", textAlign: "center", lineHeight: "1.4", margin: 0 }}>
          VimeWorld<br />[Pixelmon Ultimate]
        </p>
        <p style={{ fontFamily: font, fontWeight: 700, fontSize: "20px", color: "rgba(255,255,255,0.6)", margin: 0, textAlign: "right", minWidth: "130px" }}>
          2025 - Now
        </p>
      </div>
      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)", marginTop: "22px" }} />
    </section>
  );
}
