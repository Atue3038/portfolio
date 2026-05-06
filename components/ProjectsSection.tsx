"use client";
import Link from "next/link";

const font = "'Nexa', sans-serif";
const CARD_IMG = "https://www.figma.com/api/mcp/asset/1006b5a8-f8c2-4849-ad1a-f84d5f46c8c9";

const projects = [
  { title: "VimeWorld", tags: ["Interface", "2025"], href: "/works/vimeworld" },
  { title: "VimeWorld", tags: ["Interface", "2025"], href: "/works/vimeworld" },
];

export default function ProjectsSection() {
  return (
    <section id="works" style={{ marginTop: "120px", paddingLeft: "60px", paddingRight: "60px" }}>
      <div style={{ display: "flex", gap: "24px" }}>
        {projects.map((project, i) => (
          <Link key={i} href={project.href} style={{ flex: 1, display: "flex", flexDirection: "column", textDecoration: "none" }}>
            {/* Title + tags */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <p style={{ fontFamily: font, fontWeight: 700, fontSize: "20px", color: "#fff", margin: 0 }}>
                {project.title}
              </p>
              <div style={{ display: "flex", gap: "6px" }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    background: "#fff",
                    color: "#07100b",
                    padding: "2px 16px",
                    fontFamily: font,
                    fontWeight: 700,
                    fontSize: "15px",
                    /* rectangular — no border-radius, как в Figma */
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Card — тонкая рамка, не жирная */}
            <div style={{
              width: "100%",
              height: "300px",
              borderRadius: "14px",
              overflow: "hidden",
              position: "relative",
              background: "#0f1f16",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              <img src={CARD_IMG} alt={project.title} style={{
                position: "absolute",
                top: "-8%",
                left: 0,
                width: "100%",
                height: "130%",
                maxWidth: "none",
                objectFit: "cover",
              }} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
