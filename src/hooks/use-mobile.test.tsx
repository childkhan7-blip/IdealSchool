import { renderHook } from "@testing-library/react";
import { act } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useIsMobile } from "./use-mobile";

type MediaQueryListener = () => void;

function mockMatchMedia() {
  const listeners = new Set<MediaQueryListener>();
  const matchMedia = vi.fn((query: string) => ({
    matches: window.innerWidth < 768,
    media: query,
    addEventListener: (_event: string, listener: MediaQueryListener) => listeners.add(listener),
    removeEventListener: (_event: string, listener: MediaQueryListener) =>
      listeners.delete(listener),
  }));
  vi.stubGlobal("matchMedia", matchMedia);
  return {
    matchMedia,
    listeners,
    resize(width: number) {
      window.innerWidth = width;
      act(() => {
        listeners.forEach((listener) => listener());
      });
    },
  };
}

describe("useIsMobile", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    window.innerWidth = 1024;
  });

  it("subscribes with the mobile breakpoint media query", () => {
    const media = mockMatchMedia();

    renderHook(() => useIsMobile());

    expect(media.matchMedia).toHaveBeenCalledWith("(max-width: 767px)");
    expect(media.listeners.size).toBe(1);
  });

  it("reports false on a wide viewport", () => {
    mockMatchMedia();
    window.innerWidth = 1024;

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it("reports true at widths below the breakpoint", () => {
    mockMatchMedia();
    window.innerWidth = 767;

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it("reports false exactly at the breakpoint", () => {
    mockMatchMedia();
    window.innerWidth = 768;

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it("updates when the media query changes", () => {
    const media = mockMatchMedia();
    window.innerWidth = 1024;
    const { result } = renderHook(() => useIsMobile());

    media.resize(500);
    expect(result.current).toBe(true);

    media.resize(900);
    expect(result.current).toBe(false);
  });

  it("removes its listener on unmount", () => {
    const media = mockMatchMedia();
    const { unmount } = renderHook(() => useIsMobile());

    unmount();

    expect(media.listeners.size).toBe(0);
  });
});
