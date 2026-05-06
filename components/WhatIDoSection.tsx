"use client";

const font = "'Nexa', sans-serif";
const skills = ["UI/UX Design", "Interface Design", "Website Design", "App Design"];

export default function WhatIDoSection() {
  return (
    <section style={{ marginTop: "120px", paddingLeft: "60px", paddingRight: "60px" }}>
      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)", marginBottom: "0" }} />

      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* Label */}
        <div style={{ width: "340px", flexShrink: 0, paddingTop: "22px" }}>
          <p style={{ fontFamily: font, fontWeight: 700, fontSize: "20px", color: "#fff", margin: 0 }}>
            What I do
          </p>
        </div>

        {/* Skills */}
        <div style={{ flex: 1 }}>
          {skills.map((skill, i) => (
            <div key={skill}>
              {i > 0 && <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)" }} />}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 0",
              }}>
                <p style={{ fontFamily: font, fontWeight: 700, fontSize: "36px", color: "#fff", textTransform: "uppercase", margin: 0 }}>
                  {skill}
                </p>
                <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#fff", flexShrink: 0 }} />
              </div>
            </div>
          ))}
          <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)" }} />
        </div>
      </div>
    </section>
  );
}
