"use client";

const font = "'Nexa', sans-serif";

export default function Navbar() {
  return (
    <header style={{ paddingTop: "48px", paddingLeft: "60px", paddingRight: "60px" }}>
      <h1 style={{
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
      </h1>
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "24px",
      }}>
        {[["Works", "#works"], ["About me", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
          <a key={label} href={href} style={{
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
      </nav>
    </header>
  );
}
