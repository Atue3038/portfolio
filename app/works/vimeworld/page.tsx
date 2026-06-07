"use client";
import Image from "next/image";
import { useCursor, CursorElements, CaseNav, CaseContact, CaseFooter, Lightbox } from "@/components/CaseShell";
import { useLang } from "@/lib/LangContext";

export default function VimeworldCase() {
  const { cursorRef, ringRef, hovered, setHovered } = useCursor();
  const { tr } = useLang();
  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  const SCREENS = [
    { src: "/vimeworld_menu.png",  num: "01", titleKey: "vw_s1_title", descKey: "vw_s1_desc" },
    { src: "/vimeworld_cases.png", num: "02", titleKey: "vw_s2_title", descKey: "vw_s2_desc" },
    { src: "/vimeworld_privs.png", num: "03", titleKey: "vw_s3_title", descKey: "vw_s3_desc" },
    { src: "/vimeworld_kits.png",  num: "04", titleKey: "vw_s4_title", descKey: "vw_s4_desc" },
    { src: "/vimeworld_shop.png",  num: "05", titleKey: "vw_s5_title", descKey: "vw_s5_desc" },
    { src: "/vimeworld_cart.png",  num: "06", titleKey: "vw_s6_title", descKey: "vw_s6_desc" },
    { src: "/vimeworld_warps.png", num: "07", titleKey: "vw_s7_title", descKey: "vw_s7_desc" },
  ];

  const DEEP = [
    { src: "/vimeworld_menu.png",  rev: false, titleKey: "vw_d1_title", descKey: "vw_d1_desc" },
    { src: "/vimeworld_cases.png", rev: true,  titleKey: "vw_d2_title", descKey: "vw_d2_desc" },
    { src: "/vimeworld_privs.png", rev: false, titleKey: "vw_d3_title", descKey: "vw_d3_desc" },
    { src: "/vimeworld_shop.png",  rev: true,  titleKey: "vw_d4_title", descKey: "vw_d4_desc" },
  ];

  return (
    <>
      <CursorElements cursorRef={cursorRef} ringRef={ringRef} hovered={hovered} />
      <Lightbox />

      <style>{`
        .w-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .sec-label { display:flex; align-items:center; gap:16px; margin-bottom:56px; }
        .sec-label span { font-family:'DM Mono',monospace; font-size:11px; color:var(--green); letter-spacing:.15em; white-space:nowrap; }
        .sec-label hr { flex:1; height:1px; border:none; background:var(--border); margin:0; }
        .divider { width:100%; height:1px; background:linear-gradient(90deg,transparent,rgba(26,255,110,.18),transparent); margin:100px 0; }
        .num-badge { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:.1em; color:var(--green); border:1px solid rgba(26,255,110,.3); border-radius:4px; padding:4px 10px; display:inline-block; width:fit-content; }
        .screen-title { font-family:'Unbounded', sans-serif; font-weight:800; font-size:20px; color:var(--white); letter-spacing:-.01em; margin:0; }
        .screen-desc  { font-family:'Space Grotesk',sans-serif; font-size:16px; color:var(--muted); line-height:1.7; margin:0; }
        .alt-row { display:flex; gap:72px; align-items:center; margin-bottom:80px; }
        .alt-row.rev { flex-direction:row-reverse; }
        .alt-row .img-side { flex:0 0 56%; }
        .alt-row .img-side img { width:100%; display:block; border-radius:4px; border:1px solid var(--border); }
        .alt-row .txt-side { flex:1; display:flex; flex-direction:column; gap:16px; }
        .txt-label { font-family:'DM Mono',monospace; font-size:11px; color:var(--green); letter-spacing:.1em; }
        .txt-h { font-family:'Unbounded', sans-serif; font-weight:800; font-size:clamp(20px,2.5vw,28px); color:var(--white); letter-spacing:-.02em; margin:0; line-height:1.2; }
        .txt-p { font-family:'Space Grotesk',sans-serif; font-size:16px; color:var(--muted); line-height:1.75; margin:0; }
        @media(max-width:900px){
          .alt-row,.alt-row.rev{ flex-direction:column !important; }
          .alt-row .img-side{ flex:none; width:100%; }
          .grid-2{ grid-template-columns:1fr !important; }
        }
        @media(max-width:768px){
          .w-inner{ padding:0 20px; }
          .meta-grid{ grid-template-columns:1fr 1fr !important; }
          .screens-grid{ grid-template-columns:1fr !important; }
          .contact-grid{ grid-template-columns:1fr !important; gap:48px !important; }
        }
      `}</style>

      <main style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden" }}>

        <CaseNav onEnter={onEnter} onLeave={onLeave} />

        {/* ── HERO ── */}
        <section style={{ padding: "140px 0 80px" }}>
          <div className="w-inner">
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "28px", height: "1px", background: "var(--green)" }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--green)", letterSpacing: "0.15em" }}>{tr("vw_tag")}</span>
            </div>
            <h1 className="reveal" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(48px,7vw,96px)", lineHeight: 0.95, letterSpacing: "-.03em", color: "var(--white)", marginBottom: 32 }}>
              VimeWorld —<br />
              <span style={{ WebkitTextStroke: "1px var(--green)", color: "transparent" }}>Pixelmon UI</span>
            </h1>
            <div className="reveal" style={{ display: "flex", gap: "48px", flexWrap: "wrap", marginBottom: 48 }}>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 17, lineHeight: 1.7, color: "var(--muted)", maxWidth: 520, margin: 0 }}>
                {tr("vw_bio")}
              </p>
            </div>
            <div className="reveal meta-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", gap: "40px 48px", width: "fit-content" }}>
              {[[tr("vw_client"),tr("vw_client_val")],[tr("vw_type"),tr("vw_type_val")],[tr("vw_platform"),tr("vw_platform_val")],[tr("vw_tool"),tr("vw_tool_val")],[tr("vw_year"),tr("vw_year_val")]].map(([k,v]) => (
                <div key={k}>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: ".18em", color: "var(--green)", opacity: 0.7, marginBottom: 4 }}>{k}</div>
                  <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: 15 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section>
          <div className="w-inner">
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--border)", marginBottom: 100 }}>
              {[["07",tr("vw_stat_screens")],["01",tr("vw_stat_designer")],["∞",tr("vw_stat_players")]].map(([n,l]) => (
                <div key={l} style={{ background: "var(--bg)", padding: "32px 36px" }}>
                  <div style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 800, fontSize: 56, color: "var(--green)", lineHeight: 1, marginBottom: 8 }}>{n}</div>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: ".15em", color: "var(--muted)", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ALL SCREENS ── */}
        <section style={{ marginBottom: 100 }}>
          <div className="w-inner">
            <div className="sec-label reveal"><span>02 / ALL SCREENS</span><hr /></div>
            <div className="screens-grid reveal-group" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px 48px" }}>
              {SCREENS.map(({ src, num, titleKey, descKey }) => (
                <div key={num} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <Image src={src} alt={tr(titleKey)} width={1440} height={900} className="img-loaded lb" style={{ width: "100%", height: "auto", display: "block", borderRadius: 4, border: "1px solid var(--border)", cursor: "zoom-in" }} quality={95} />
                  <span className="num-badge">{num}</span>
                  <h3 className="screen-title">{tr(titleKey)}</h3>
                  <p className="screen-desc">{tr(descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEEP DIVE ── */}
        <section>
          <div className="w-inner">
            <div className="divider" />
            <div className="sec-label reveal"><span>03 / DEEP DIVE</span><hr /></div>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,38px)", color: "var(--white)", letterSpacing: "-.02em", margin: "0 0 64px" }}>Screen Breakdowns</h2>
            {DEEP.map(({ src, rev, titleKey, descKey }, i) => (
              <div key={i} className={`alt-row${rev ? " rev" : ""}`}>
                <div className="img-side"><Image src={src} alt={tr(titleKey)} width={1440} height={900} className="img-loaded lb" style={{ width: "100%", height: "auto", cursor: "zoom-in", display: "block" }} quality={95} /></div>
                <div className="txt-side">
                  <span className="txt-label">{String(i+1).padStart(2,"0")} / SCREEN</span>
                  <h3 className="txt-h">{tr(titleKey)}</h3>
                  <p className="txt-p">{tr(descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── RESULT ── */}
        <section>
          <div className="w-inner">
            <div className="divider" />
            <div className="sec-label reveal"><span>04 / RESULT</span><hr /></div>
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
              <div>
                <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,38px)", color: "var(--white)", letterSpacing: "-.02em", margin: "0 0 20px" }}>{tr("vw_result_title")}</h2>
                <p className="txt-p">{tr("vw_result_p1")}</p>
              </div>
              <div style={{ paddingTop: 8 }}>
                <p className="txt-p">{tr("vw_result_p2")}</p>
              </div>
            </div>
          </div>
        </section>

        <CaseContact onEnter={onEnter} onLeave={onLeave} />
        <CaseFooter prevHref="/#works" prevLabel="ALL WORKS" nextHref="/works/lectra" nextLabel="LECTRA" onEnter={onEnter} onLeave={onLeave} />

      </main>
    </>
  );
}
