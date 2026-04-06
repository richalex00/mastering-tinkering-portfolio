// src/test/Index.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import Index from "@/pages/Index";

describe("Index", () => {
  it("renders the sidebar with 'Mastering Tinkering'", () => {
    render(<Index />);
    const asideEl = document.querySelector("aside");
    expect(asideEl).toBeTruthy();
    expect(asideEl?.textContent).toContain("Mastering Tinkering");
  });

  it("renders HomeView content on initial load", () => {
    render(<Index />);
    // HomeView renders an h2 "About Me"; Sidebar also has an "About Me" button, so use heading query
    expect(screen.getByRole("heading", { name: "About Me" })).toBeTruthy();
  });

  it("clicking a section nav item shows that section's content", () => {
    render(<Index />);
    const btn = screen.getByRole("button", { name: /1\.1/ });
    fireEvent.click(btn);
    // SectionView renders the title as an h1; Sidebar also has it as a nav button label
    expect(screen.getByRole("heading", { name: "Tinkering Spaces - photo safari" })).toBeTruthy();
  });

  describe("URL param ?section=2.2", () => {
    beforeEach(() => {
      Object.defineProperty(window, "location", {
        writable: true,
        value: { ...window.location, search: "?section=2.2" },
      });
    });
    afterEach(() => {
      Object.defineProperty(window, "location", {
        writable: true,
        value: { ...window.location, search: "" },
      });
    });

    it("loads the correct section from ?section=2.2", () => {
      render(<Index />);
      // SectionView renders the title as an h1
      expect(screen.getByRole("heading", { name: "Design a building block - fabricate" })).toBeTruthy();
    });
  });
});
