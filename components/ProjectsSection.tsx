"use client";
import Link from "next/link";

const CARD_IMG =
  "https://www.figma.com/api/mcp/asset/1006b5a8-f8c2-4849-ad1a-f84d5f46c8c9";

const projects = [
  { title: "VimeWorld", tags: ["Interface", "2025"], href: "/works/vimeworld" },
  { title: "VimeWorld", tags: ["Interface", "2025"], href: "/works/vimeworld" },
];

export default function ProjectsSection() {
  return (
    <section id="works" style={{ marginTop: "100px", paddingLeft: "60px", paddingRight: "60px" }}>
      <div style={{ display: "flex", gap: "24px" }}>
        {projects.map((project, i) => (
          <Link key={i} href={project.href} style={{ flex: 1, display: "flex", flexDirection: "column", textDecoration: "none", cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "7px" }}>
              <p style={{ fontFamily: "'Nexa', sans-serif", fontWeight: 700, fontSize: "25px", color: "#ffffff" }}>
                {project.title}
              </p>
              <div style={{ display: "flex", gap: "6px" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ width: "100%", height: "330px", borderRadius: "16px", overflow: "hidden", position: "relative", background: "#0f1f16" }}>
              <img
                src={CARD_IMG}
                alt={project.title}
                style={{ position: "absolute", top: "-8.15%", left: "-0.04%", width: "100%", height: "130.42%", maxWidth: "none", objectFit: "cover" }}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
