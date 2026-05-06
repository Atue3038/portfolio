"use client";

const font = "'Nexa', sans-serif";

export default function Footer() {
  return (
    <footer style={{ marginTop: "140px", paddingLeft: "60px", paddingRight: "60px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0" }}>
        {[["Insta", "https://instagram.com/"], ["Behance", "https://behance.net/"], ["Telegram", "https://t.me/"]].map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" style={{
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "200px",
            padding: "10px 18px",
            fontFamily: font,
            fontWeight: 700,
            fontSize: "22px",
            color: "#fff",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}>{label}</a>
        ))}
      </div>
      <h2 style={{
        fontFamily: font,
        fontWeight: 700,
        fontSize: "110px",
        lineHeight: 1,
        color: "#fff",
        letterSpacing: "-5.5px",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        margin: 0,
      }}>
        Oleksii Klymushkin
      </h2>
    </footer>
  );
}
