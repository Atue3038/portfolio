"use client";

const skills = ["UI/UX design", "Interface Design", "Website Design", "App Design"];

export default function WhatIDoSection() {
  return (
    <section style={{ marginTop: "120px", paddingLeft: "60px", paddingRight: "60px" }}>
      {/* Top divider */}
      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.2)", marginBottom: "32px" }} />

      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* Label */}
        <div style={{ width: "380px", flexShrink: 0, paddingTop: "8px" }}>
          <p style={{
            fontFamily: "'Nexa', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "#ffffff",
            margin: 0,
          }}>What I do</p>
        </div>

        {/* Skills list */}
        <div style={{ flex: 1 }}>
          {skills.map((skill, i) => (
            <div key={skill}>
              {i > 0 && <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.2)" }} />}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "16px",
                paddingBottom: "16px",
              }}>
                <p style={{
                  fontFamily: "'Nexa', sans-serif",
                  fontWeight: 700,
                  fontSize: "40px",
                  color: "#ffffff",
                  textTransform: "uppercase",
                  margin: 0,
                }}>{skill}</p>
                <div style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  flexShrink: 0,
                }} />
              </div>
            </div>
          ))}
          <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.2)" }} />
        </div>
      </div>
    </section>
  );
}
