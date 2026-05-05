"use client";

export default function Navbar() {
  return (
    <header style={{ paddingTop: "45px", paddingLeft: "60px", paddingRight: "60px" }}>
      <h1 style={{
        fontFamily: "'Nexa', sans-serif",
        fontWeight: 700,
        fontSize: "110px",
        lineHeight: "1",
        color: "#ffffff",
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
        marginTop: "45px",
      }}>
        <a href="#works" style={{
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "200px",
          padding: "12px 20px",
          fontFamily: "'Nexa', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: "#ffffff",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}>Works</a>

        <a href="#about" style={{
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "200px",
          padding: "12px 20px",
          fontFamily: "'Nexa', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: "#ffffff",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}>About me</a>

        <a href="#contact" style={{
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "200px",
          padding: "12px 20px",
          fontFamily: "'Nexa', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: "#ffffff",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}>Contact</a>
      </nav>
    </header>
  );
}
