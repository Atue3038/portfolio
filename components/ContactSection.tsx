"use client";

const font = "'Nexa', sans-serif";

export default function ContactSection() {
  return (
    <section id="contact" style={{
      marginTop: "140px",
      paddingLeft: "60px",
      paddingRight: "60px",
      display: "flex",
      justifyContent: "flex-end",
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "480px" }}>
        <p style={{ fontFamily: font, fontWeight: 700, fontSize: "20px", lineHeight: "1.6", color: "#fff", margin: 0 }}>
          Ready to work together? Let&apos;s talk about freelance projects, collaborations, and full-time roles.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <a href="https://t.me/" target="_blank" rel="noreferrer" style={{
            background: "#fff", color: "#07100b",
            borderRadius: "200px", padding: "13px 26px",
            fontFamily: font, fontWeight: 700, fontSize: "20px",
            textDecoration: "none", whiteSpace: "nowrap",
          }}>Telegram</a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" style={{
            border: "1px solid rgba(255,255,255,0.2)", color: "#fff",
            borderRadius: "200px", padding: "13px 26px",
            fontFamily: font, fontWeight: 700, fontSize: "20px",
            textDecoration: "none", whiteSpace: "nowrap",
          }}>Instagram</a>
          <a href="mailto:example@gmail.com" style={{
            border: "1px solid rgba(255,255,255,0.2)", color: "#fff",
            borderRadius: "200px", padding: "13px 26px",
            fontFamily: font, fontWeight: 700, fontSize: "20px",
            textDecoration: "none", whiteSpace: "nowrap",
          }}>Gmail</a>
        </div>
      </div>
    </section>
  );
}
