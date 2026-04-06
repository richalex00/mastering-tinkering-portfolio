// src/test/SectionView.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionView from "@/components/portfolio/SectionView";
import type { SectionEntry } from "@/data/sections";

const minimal: SectionEntry = {
  id: "2.2",
  title: "Design a building block — fabricate",
  date: "January 13th, 2026",
  reflection: "A simple reflection with no markdown.",
  images: [],
};

const withMarkdown: SectionEntry = {
  id: "4.1",
  title: "Overview on Design Methods",
  reflection: "**Brainstorming**\nA creative technique.",
  images: [],
};

describe("SectionView", () => {
  it("renders the section title", () => {
    render(<SectionView section={minimal} />);
    expect(screen.getByText("Design a building block — fabricate")).toBeTruthy();
  });

  it("renders the section code", () => {
    render(<SectionView section={minimal} />);
    expect(screen.getByText("2.2")).toBeTruthy();
  });

  it("renders the date when present", () => {
    render(<SectionView section={minimal} />);
    expect(screen.getByText("January 13th, 2026")).toBeTruthy();
  });

  it("renders reflection text", () => {
    render(<SectionView section={minimal} />);
    expect(screen.getByText("A simple reflection with no markdown.")).toBeTruthy();
  });

  it("renders bold markdown headings as highlighted spans", () => {
    render(<SectionView section={withMarkdown} />);
    expect(screen.getByText("Brainstorming")).toBeTruthy();
  });

  it("renders without images without crashing", () => {
    const { container } = render(<SectionView section={minimal} />);
    expect(container).toBeTruthy();
  });
});
