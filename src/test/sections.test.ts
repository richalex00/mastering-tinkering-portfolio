import { describe, it, expect } from "vitest";
import { sectionSortValue, sections } from "@/data/sections";

describe("sectionSortValue", () => {
  it("sorts 1.1 before 1.2", () => {
    expect(sectionSortValue("1.1")).toBeLessThan(sectionSortValue("1.2"));
  });

  it("sorts 1.2 before 2.1", () => {
    expect(sectionSortValue("1.2")).toBeLessThan(sectionSortValue("2.1"));
  });

  it("sorts 4.0 before 4.1", () => {
    expect(sectionSortValue("4.0")).toBeLessThan(sectionSortValue("4.1"));
  });
});

describe("sections", () => {
  it("first section is 1.1", () => {
    expect(sections[0].id).toBe("1.1");
  });

  it("contains section 2.2", () => {
    expect(sections.find((s) => s.id === "2.2")).toBeDefined();
  });

  it("all sections have id, title, reflection", () => {
    for (const s of sections) {
      expect(s.id).toBeTruthy();
      expect(s.title).toBeTruthy();
      expect(s.reflection).toBeTruthy();
    }
  });
});
