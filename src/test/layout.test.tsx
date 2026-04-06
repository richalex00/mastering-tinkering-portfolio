import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "@/pages/Index";

describe("Layout structure", () => {
  it("renders the two-panel layout wrapper", () => {
    const { container } = render(<Index />);
    const layout = container.querySelector(".portfolio-layout");
    expect(layout).toBeInTheDocument();
  });

  it("renders the main content pane", () => {
    const { container } = render(<Index />);
    const content = container.querySelector(".portfolio-content");
    expect(content).toBeInTheDocument();
  });
});
