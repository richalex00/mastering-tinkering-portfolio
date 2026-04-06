// src/test/HomeView.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomeView from "@/components/portfolio/HomeView";

describe("HomeView", () => {
  it('renders "Mastering Tinkering" text', () => {
    render(<HomeView />);
    expect(screen.getAllByText(/Mastering Tinkering/i).length).toBeGreaterThan(0);
  });

  it('renders "About Me" heading', () => {
    render(<HomeView />);
    expect(screen.getByText(/About [Mm]e/)).toBeTruthy();
  });

  it('renders "Richard" from the about me text', () => {
    render(<HomeView />);
    expect(screen.getByText(/Richard/)).toBeTruthy();
  });

  it("renders the profile photo with appropriate alt text", () => {
    render(<HomeView />);
    const img = screen.getByRole("img");
    expect(img).toBeTruthy();
    const alt = (img as HTMLImageElement).alt.toLowerCase();
    expect(alt.includes("richard") || alt.includes("profile")).toBe(true);
  });
});
