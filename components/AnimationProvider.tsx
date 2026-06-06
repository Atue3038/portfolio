"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global animation system — mounted once in layout.tsx
 * Handles:
 * 1. Page enter animation on every route change
 * 2. Scroll reveal for all .reveal elements
 * 3. Image fade-in on load
 * 4. Stagger for .reveal-group children
 */
export function AnimationProvider() {
  const pathname = usePathname();

  /* ── Page enter on route change ── */
  useEffect(() => {
    const main = document.querySelector<HTMLElement>("main");
    if (!main) return;
    main.classList.remove("page-enter");
    // force reflow
    void main.offsetHeight;
    main.classList.add("page-enter");
  }, [pathname]);

  /* ── Scroll reveal + image loader ── */
  useEffect(() => {
    // Small delay so DOM is fully painted after route change
    const timer = setTimeout(() => {
      /* Reveal observer */
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
      );
      els.forEach(el => io.observe(el));

      /* Image fade-in */
      const imgs = document.querySelectorAll<HTMLImageElement>("img:not(.img-loaded)");
      imgs.forEach(img => {
        if (img.complete && img.naturalWidth > 0) {
          img.classList.add("img-loaded");
        } else {
          img.addEventListener("load",  () => img.classList.add("img-loaded"), { once: true });
          img.addEventListener("error", () => img.classList.add("img-loaded"), { once: true });
        }
      });

      return () => io.disconnect();
    }, 60);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
