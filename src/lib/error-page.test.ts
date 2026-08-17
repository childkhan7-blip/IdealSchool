import { describe, expect, it } from "vitest";
import { renderErrorPage } from "./error-page";

describe("renderErrorPage", () => {
  const html = renderErrorPage();

  it("returns a standalone HTML document", () => {
    expect(html.startsWith("<!doctype html>")).toBe(true);
    expect(html.trimEnd().endsWith("</html>")).toBe(true);
    expect(html).toContain('<meta charset="utf-8" />');
    expect(html).toContain("<title>This page didn't load</title>");
  });

  it("offers a reload action and a link home", () => {
    expect(html).toContain('onclick="location.reload()"');
    expect(html).toContain('href="/"');
  });

  it("is deterministic", () => {
    expect(renderErrorPage()).toBe(html);
  });
});
