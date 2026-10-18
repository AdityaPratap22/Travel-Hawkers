"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollObserver automatically discovers elements with reveal classes:
 * - .reveal (fades and translates up)
 * - .reveal-left (fades and translates from left)
 * - .reveal-right (fades and translates from right)
 * - .reveal-zoom (fades and scales up)
 * - .reveal-fade (simple fade in)
 *
 * Automatically adds .revealed when the element enters the viewport.
 * Listens for pathname changes and DOM mutations for seamless client-side page transitions.
 */
export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const selector =
      ".reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-fade, [data-reveal]";

    if (prefersReducedMotion) {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -40px 0px", // triggers slightly before scrolling deep
      threshold: 0.1,
    });

    const observeElements = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        if (!el.classList.contains("revealed")) {
          observer.observe(el);
        }
      });
    };

    // Initial observe
    observeElements();

    // Re-observe when DOM dynamically mutates (e.g., dynamic imports, tabs, accordions)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
