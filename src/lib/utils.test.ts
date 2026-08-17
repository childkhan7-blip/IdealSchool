import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("drops falsy values and flattens arrays and objects", () => {
    expect(cn("a", undefined, null, false, ["b", "c"], { d: true, e: false })).toBe("a b c d");
  });

  it("lets later tailwind classes win over conflicting earlier ones", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("text-sm text-red-500", "text-blue-500")).toBe("text-sm text-blue-500");
  });

  it("returns an empty string with no usable input", () => {
    expect(cn()).toBe("");
    expect(cn(undefined, false)).toBe("");
  });
});
