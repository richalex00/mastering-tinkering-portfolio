// src/test/Sidebar.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Sidebar from "@/components/portfolio/Sidebar";

describe("Sidebar", () => {
  it('renders "Mastering Tinkering" in the sidebar header', () => {
    render(<Sidebar activeId="home" onNavigate={vi.fn()} />);
    expect(screen.getByText("Mastering Tinkering")).toBeInTheDocument();
  });

  it('renders "Richard Alexander" in the sidebar header', () => {
    render(<Sidebar activeId="home" onNavigate={vi.fn()} />);
    expect(screen.getByText(/richard alexander/i)).toBeInTheDocument();
  });

  it("renders a nav item for section 1.1", () => {
    render(<Sidebar activeId="home" onNavigate={vi.fn()} />);
    const btn = screen.getByRole("button", { name: /1\.1/i });
    expect(btn).toBeInTheDocument();
  });

  it("renders a nav item for section 2.2", () => {
    render(<Sidebar activeId="home" onNavigate={vi.fn()} />);
    const btn = screen.getByRole("button", { name: /2\.2/i });
    expect(btn).toBeInTheDocument();
  });

  it("renders a nav item for section 5.2", () => {
    render(<Sidebar activeId="home" onNavigate={vi.fn()} />);
    const btn = screen.getByRole("button", { name: /5\.2/i });
    expect(btn).toBeInTheDocument();
  });

  it("marks the active item with aria-current=page", () => {
    render(<Sidebar activeId="2.2" onNavigate={vi.fn()} />);
    // Find the button whose descendant contains the code "2.2"
    const activeItem = screen.getByRole("button", { name: /2\.2/i });
    expect(activeItem.getAttribute("aria-current")).toBe("page");
  });

  it("does not mark inactive items with aria-current=page", () => {
    render(<Sidebar activeId="2.2" onNavigate={vi.fn()} />);
    const inactiveItem = screen.getByRole("button", { name: /1\.1/i });
    expect(inactiveItem.getAttribute("aria-current")).toBeNull();
  });

  it("calls onNavigate with the section id when a nav item is clicked", () => {
    const onNavigate = vi.fn();
    render(<Sidebar activeId="home" onNavigate={onNavigate} />);
    fireEvent.click(screen.getByRole("button", { name: /1\.1/i }));
    expect(onNavigate).toHaveBeenCalledWith("1.1");
  });

  it('renders "About Me" as the home nav item', () => {
    render(<Sidebar activeId="home" onNavigate={vi.fn()} />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("marks home item as active when activeId is 'home'", () => {
    render(<Sidebar activeId="home" onNavigate={vi.fn()} />);
    const homeBtn = screen.getByRole("button", { name: /about me/i });
    expect(homeBtn).toHaveAttribute("aria-current", "page");
  });

  it('calls onNavigate("home") when the home nav item is clicked', () => {
    const onNavigate = vi.fn();
    render(<Sidebar activeId="1.1" onNavigate={onNavigate} />);
    fireEvent.click(screen.getByRole("button", { name: /about me/i }));
    expect(onNavigate).toHaveBeenCalledWith("home");
  });
});
