// src/test/Index.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import Index from "@/pages/Index";

describe("Index", () => {
  it("renders the sidebar with 'Mastering Tinkering'", () => {
    render(<Index />);
    const sidebar = screen.getByRole("complementary"); // <aside> has implicit role "complementary"
    expect(sidebar).toHaveTextContent("Mastering Tinkering");
  });

  it("renders HomeView content on initial load", () => {
    render(<Index />);
    // HomeView renders an h2 "About Me"; Sidebar also has an "About Me" button, so use heading query
    expect(screen.getByRole("heading", { name: "About Me" })).toBeInTheDocument();
  });

  it("clicking a section nav item shows that section's content", () => {
    render(<Index />);
    const btn = screen.getByRole("button", { name: /1\.1/ });
    fireEvent.click(btn);
    // SectionView renders the title as an h1; Sidebar also has it as a nav button label
    expect(screen.getByRole("heading", { name: "Tinkering Spaces - photo safari" })).toBeInTheDocument();
  });

  describe("URL param ?section=2.2", () => {
    beforeEach(() => {
      window.history.pushState({}, "", "/?section=2.2");
    });
    afterEach(() => {
      window.history.pushState({}, "", "/");
    });

    it("loads the correct section from ?section=2.2", () => {
      render(<Index />);
      // SectionView renders the title as an h1
      expect(screen.getByRole("heading", { name: "Design a building block - fabricate" })).toBeInTheDocument();
    });
  });
});
