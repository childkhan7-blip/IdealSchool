import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { reportLovableError } from "./lovable-error-reporting";

describe("reportLovableError", () => {
  const captureException = vi.fn();
  const reportRuntimeError = vi.fn();

  beforeEach(() => {
    window.history.replaceState({}, "", "/admissions");
    window.__lovableEvents = { captureException };
    window.__lovableReportRuntimeError = reportRuntimeError;
  });

  afterEach(() => {
    vi.clearAllMocks();
    delete window.__lovableEvents;
    delete window.__lovableReportRuntimeError;
  });

  it("reports the error with boundary context and options", () => {
    const error = new Error("boom");

    reportLovableError(error);

    expect(captureException).toHaveBeenCalledWith(
      error,
      { source: "react_error_boundary", route: "/admissions" },
      { mechanism: "react_error_boundary", handled: false, severity: "error" },
    );
  });

  it("merges extra context, letting callers override the defaults", () => {
    reportLovableError(new Error("boom"), { boundary: "root", source: "custom" });

    expect(captureException).toHaveBeenCalledWith(
      expect.any(Error),
      { source: "custom", route: "/admissions", boundary: "root" },
      expect.anything(),
    );
  });

  it("forwards the message, stack and route to the runtime error hook", () => {
    const error = new Error("boom");

    reportLovableError(error);

    expect(reportRuntimeError).toHaveBeenCalledWith({
      message: "boom",
      stack: error.stack,
      filename: "/admissions",
    });
  });

  it("omits the stack for non-Error values", () => {
    reportLovableError("something broke");

    expect(reportRuntimeError).toHaveBeenCalledWith({
      message: "something broke",
      filename: "/admissions",
    });
  });

  it("describes a thrown Response by status and url", () => {
    reportLovableError(new Response(null, { status: 404 }));

    expect(reportRuntimeError).toHaveBeenCalledWith(
      expect.objectContaining({ message: "Response 404" }),
    );
  });

  it("does not throw when the lovable hooks are absent", () => {
    delete window.__lovableEvents;
    delete window.__lovableReportRuntimeError;

    expect(() => reportLovableError(new Error("boom"))).not.toThrow();
  });
});
