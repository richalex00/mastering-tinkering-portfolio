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
    expect(screen.getByText(/About [Mm]e/)).toBeInTheDocument();
  });

  it('renders "Richard" from the about me text', () => {
    render(<HomeView />);
    expect(screen.getByRole("article")).toHaveTextContent(/Richard/i);
  });

  it("renders the course description", () => {
    render(<HomeView />);
    expect(screen.getByText(/documents my journey/i)).toBeInTheDocument();
  });

  it("renders the profile photo with appropriate alt text", () => {
    render(<HomeView />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt", expect.stringMatching(/richard|profile/i));
  });
});
