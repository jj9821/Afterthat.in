/**
 * Global Scroll Lock & Overlay Scroll Independence System
 * 
 * Provides:
 * 1. Reference-counted body scroll locking for multiple/nested modals
 * 2. Exact scroll position preservation and pixel-perfect restoration
 * 3. Horizontal layout shift prevention (scrollbar width compensation)
 * 4. Deep integration with Lenis smooth scroll (lenis.stop() / lenis.start() / lenis.scrollTo())
 * 5. React hook `useScrollLock(isActive)` for declarative lifecycle management
 */

import { useEffect } from "react";

// Maintain reference count for open modals
let lockCount = 0;
let savedScrollY = 0;
let originalHtmlStyles: {
  overflow: string;
  overscrollBehavior: string;
} | null = null;
let originalBodyStyles: {
  overflow: string;
  paddingRight: string;
  overscrollBehavior: string;
  touchAction: string;
} | null = null;

// Reference to Lenis instance
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let registeredLenis: any = null;

/**
 * Register active Lenis instance
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function registerLenis(lenis: any): void {
  registeredLenis = lenis;
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__lenis = lenis;
  }
}

/**
 * Unregister Lenis instance on teardown
 */
export function unregisterLenis(): void {
  registeredLenis = null;
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (window as any).__lenis;
  }
}

/**
 * Retrieve active Lenis instance
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getLenis(): any {
  if (registeredLenis) return registeredLenis;
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (window as any).__lenis || null;
  }
  return null;
}

/**
 * Lock background scrolling when a modal or preview opens
 */
export function lockScroll(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  if (lockCount === 0) {
    // 1. Capture current scroll position accurately
    savedScrollY = window.scrollY || document.documentElement.scrollTop || 0;

    // 2. Measure scrollbar width to prevent horizontal layout jump
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);

    // 3. Save original inline styles to restore later
    originalHtmlStyles = {
      overflow: document.documentElement.style.overflow,
      overscrollBehavior: document.documentElement.style.overscrollBehavior,
    };
    originalBodyStyles = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
      overscrollBehavior: document.body.style.overscrollBehavior,
      touchAction: document.body.style.touchAction,
    };

    // 4. Pause Lenis smooth scrolling so it ceases intercepting wheel/touch events
    const lenis = getLenis();
    if (lenis && typeof lenis.stop === "function") {
      try {
        lenis.stop();
      } catch (err) {
        console.warn("Error stopping Lenis:", err);
      }
    }

    // 5. Add classes to html and body
    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");

    // 6. Freeze document scrolling without moving elements out of flow
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    document.body.style.touchAction = "none";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }

  lockCount++;
}

/**
 * Unlock background scrolling when modal or preview closes
 */
export function unlockScroll(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  lockCount = Math.max(0, lockCount - 1);

  if (lockCount === 0) {
    const targetY = savedScrollY;

    // 1. Remove modal classes
    document.documentElement.classList.remove("modal-open");
    document.body.classList.remove("modal-open");
    document.documentElement.style.removeProperty("--scrollbar-width");

    // 2. Restore html and body styles
    if (originalHtmlStyles) {
      document.documentElement.style.overflow = originalHtmlStyles.overflow;
      document.documentElement.style.overscrollBehavior = originalHtmlStyles.overscrollBehavior;
      originalHtmlStyles = null;
    } else {
      document.documentElement.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";
    }

    if (originalBodyStyles) {
      document.body.style.overflow = originalBodyStyles.overflow;
      document.body.style.paddingRight = originalBodyStyles.paddingRight;
      document.body.style.overscrollBehavior = originalBodyStyles.overscrollBehavior;
      document.body.style.touchAction = originalBodyStyles.touchAction;
      originalBodyStyles = null;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.overscrollBehavior = "";
      document.body.style.touchAction = "";
    }

    // 3. Restore exact scroll position on the window
    window.scrollTo({
      top: targetY,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });

    // 4. Resume Lenis smooth scroll and synchronize its internal scroll value
    const lenis = getLenis();
    if (lenis) {
      try {
        if (typeof lenis.start === "function") {
          lenis.start();
        }
        if (typeof lenis.scrollTo === "function") {
          lenis.scrollTo(targetY, { immediate: true });
        }
      } catch (err) {
        console.warn("Error resuming Lenis:", err);
      }
    }
  }
}

/**
 * React hook to lock scroll when `isActive` is true, with automatic cleanup on unmount
 */
export function useScrollLock(isActive: boolean): void {
  useEffect(() => {
    if (!isActive) return;

    lockScroll();

    return () => {
      unlockScroll();
    };
  }, [isActive]);
}
