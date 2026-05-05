"use client";

export default function ContactSection() {
  return (
    <section id="contact" style={{
      marginTop: "160px",
      paddingLeft: "60px",
      paddingRight: "60px",
      display: "flex",
      justifyContent: "flex-end",
    }}>
      <div style={{ maxWidth: "620px", display: "flex", flexDirection: "column", gap: "40px" }}>
        <p style={{
          fontFamily: "'Nexa', sans-serif",
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: "1.5",
          color: "#ffffff",
          margin: 0,
        }}>
          Ready to work together? Let&apos;s talk about freelance projects, collaborations, and full-time roles.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="https://t.me/" target="_blank" rel="noreferrer" style={{
            background: "#ffffff",
            color: "#07100b",
            borderRadius: "200px",
            padding: "14px 28px",
            fontFamily: "'Nexa', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}>Telegram</a>

          <a href="https://instagram.com/" target="_blank" rel="noreferrer" style={{
            background: "transparent",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "200px",
            padding: "14px 28px",
            fontFamily: "'Nexa', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}>Instagram</a>

          <a href="mailto:example@gmail.com" style={{
            background: "transparent",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "200px",
            padding: "14px 28px",
            fontFamily: "'Nexa', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}>Gmail</a>
        </div>
      </div>
    </section>
  );
}
