"use client";

export default function Footer() {
  return (
    <footer style={{
      marginTop: "160px",
      paddingLeft: "60px",
      paddingRight: "60px",
      paddingBottom: "0",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "8px",
      }}>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer" style={{
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "200px",
          padding: "12px 20px",
          fontFamily: "'Nexa', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: "#ffffff",
          textDecoration: "none",
        }}>Insta</a>

        <a href="https://behance.net/" target="_blank" rel="noreferrer" style={{
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "200px",
          padding: "12px 20px",
          fontFamily: "'Nexa', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: "#ffffff",
          textDecoration: "none",
        }}>Behance</a>

        <a href="https://t.me/" target="_blank" rel="noreferrer" style={{
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "200px",
          padding: "12px 20px",
          fontFamily: "'Nexa', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: "#ffffff",
          textDecoration: "none",
        }}>Telegram</a>
      </div>

      <h2 style={{
        fontFamily: "'Nexa', sans-serif",
        fontWeight: 700,
        fontSize: "110px",
        lineHeight: "1",
        color: "#ffffff",
        letterSpacing: "-5.5px",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        margin: 0,
        padding: 0,
      }}>
        Oleksii Klymushkin
      </h2>
    </footer>
  );
}
