import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

type ErrorCaptureModule = typeof import("./error-capture");

// describeError only falls back to name/message when there is no stack, so most
// assertions here run against stackless errors to stay runtime independent.
function stackless<T extends Error>(error: T): T {
  delete error.stack;
  return error;
}

// The module patches console.error on import, so load a fresh copy per test and
// restore the original afterwards to keep the patches from stacking up.
async function loadModule(): Promise<ErrorCaptureModule> {
  vi.resetModules();
  return import("./error-capture");
}

describe("error-capture", () => {
  let originalConsoleError: typeof console.error;

  beforeEach(() => {
    originalConsoleError = console.error;
    console.error = vi.fn();
  });

  afterEach(() => {
    console.error = originalConsoleError;
    vi.useRealTimers();
  });

  describe("describeError", () => {
    it("uses the stack of an Error", async () => {
      const { describeError } = await loadModule();
      const error = new Error("boom");

      expect(describeError(error)).toBe(error.stack);
    });

    it("falls back to name and message when there is no stack", async () => {
      const { describeError } = await loadModule();
      const error = stackless(new TypeError("no stack here"));

      expect(describeError(error)).toBe("TypeError: no stack here");
    });

    it("appends a numeric status or statusCode", async () => {
      const { describeError } = await loadModule();
      const withStatus = stackless(Object.assign(new Error("a"), { status: 503 }));
      const withStatusCode = stackless(Object.assign(new Error("b"), { statusCode: 404 }));
      const withStringStatus = stackless(Object.assign(new Error("c"), { status: "500" }));

      expect(describeError(withStatus)).toBe("Error: a (status 503)");
      expect(describeError(withStatusCode)).toBe("Error: b (status 404)");
      expect(describeError(withStringStatus)).toBe("Error: c");
    });

    it("walks the cause chain up to five levels", async () => {
      const { describeError } = await loadModule();
      let error = stackless(new Error("level-0"));
      for (let depth = 1; depth < 8; depth++) {
        error = stackless(new Error(`level-${depth}`, { cause: error }));
      }

      const lines = describeError(error).split("\n");

      expect(lines).toHaveLength(5);
      expect(lines[0]).toBe("Error: level-7");
      expect(lines[1]).toBe("caused by: Error: level-6");
      expect(lines[4]).toBe("caused by: Error: level-3");
    });

    it("handles non-Error values, including at the end of a cause chain", async () => {
      const { describeError } = await loadModule();
      const wrapped = stackless(new Error("outer", { cause: { code: 42 } }));

      expect(describeError("plain string")).toBe("plain string");
      expect(describeError({ code: 42 })).toBe('{"code":42}');
      expect(describeError(describeError)).toBe(String(describeError));
      expect(describeError(wrapped)).toBe('Error: outer\n{"code":42}');
    });

    it("stops at a nullish cause and on unserializable values", async () => {
      const { describeError } = await loadModule();
      const circular: Record<string, unknown> = {};
      circular["self"] = circular;

      expect(describeError(undefined)).toBe("");
      expect(describeError(null)).toBe("");
      expect(describeError(circular)).toBe(String(circular));
    });

    it("truncates very long descriptions", async () => {
      const { describeError } = await loadModule();
      const error = stackless(new Error("x".repeat(20_000)));

      expect(describeError(error)).toHaveLength(8_000);
    });
  });

  describe("console.error patch", () => {
    it("expands Error arguments and leaves other arguments untouched", async () => {
      const patched = console.error;
      await loadModule();
      const error = new Error("logged");

      console.error("context", error, 7);

      expect(patched).toHaveBeenCalledWith("context", error.stack, 7);
    });
  });

  describe("consumeLastCapturedError", () => {
    it("returns undefined when nothing was captured", async () => {
      const { consumeLastCapturedError } = await loadModule();

      expect(consumeLastCapturedError()).toBeUndefined();
    });

    it("returns an error logged through console.error exactly once", async () => {
      const { consumeLastCapturedError } = await loadModule();
      const error = new Error("captured");

      console.error(error);

      expect(consumeLastCapturedError()).toBe(error);
      expect(consumeLastCapturedError()).toBeUndefined();
    });

    it("keeps only the most recently logged error", async () => {
      const { consumeLastCapturedError } = await loadModule();
      const first = new Error("first");
      const second = new Error("second");

      console.error(first);
      console.error(second);

      expect(consumeLastCapturedError()).toBe(second);
    });

    it("ignores non-Error console.error arguments", async () => {
      const { consumeLastCapturedError } = await loadModule();

      console.error("just a message", { not: "an error" });

      expect(consumeLastCapturedError()).toBeUndefined();
    });

    it("discards a capture older than the five second TTL", async () => {
      vi.useFakeTimers();
      const { consumeLastCapturedError } = await loadModule();

      console.error(new Error("stale"));
      vi.advanceTimersByTime(5_001);

      expect(consumeLastCapturedError()).toBeUndefined();
    });

    it("keeps a capture that is still inside the TTL", async () => {
      vi.useFakeTimers();
      const { consumeLastCapturedError } = await loadModule();
      const error = new Error("fresh");

      console.error(error);
      vi.advanceTimersByTime(4_000);

      expect(consumeLastCapturedError()).toBe(error);
    });
  });

  describe("global event listeners", () => {
    it("captures the error of an error event", async () => {
      const { consumeLastCapturedError } = await loadModule();
      const error = new Error("from window");

      globalThis.dispatchEvent(new ErrorEvent("error", { error }));

      expect(consumeLastCapturedError()).toBe(error);
    });

    it("falls back to the event itself when it carries no error", async () => {
      const { consumeLastCapturedError } = await loadModule();
      const event = new ErrorEvent("error");

      globalThis.dispatchEvent(event);

      expect(consumeLastCapturedError()).toBe(event);
    });

    it("captures the reason of an unhandled rejection", async () => {
      const { consumeLastCapturedError } = await loadModule();
      const reason = new Error("rejected");
      const event = Object.assign(new Event("unhandledrejection"), { reason });

      globalThis.dispatchEvent(event);

      expect(consumeLastCapturedError()).toBe(reason);
    });
  });
});
