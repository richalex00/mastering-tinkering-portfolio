import { useState, useRef, useEffect } from "react";
import { sections } from "@/data/sections";
import Sidebar from "@/components/portfolio/Sidebar";
import HomeView from "@/components/portfolio/HomeView";
import SectionView from "@/components/portfolio/SectionView";
import type { SectionEntry } from "@/data/sections";

// Read initial section from URL search param ?section=X.X
function getInitialSection(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get("section") ?? "home";
}

export default function Index() {
  const [activeId, setActiveId] = useState<string>(getInitialSection);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0 });
  }, [activeId]);

  function handleNavigate(id: string) {
    setActiveId(id);
    // Update URL without reload
    const url = new URL(window.location.href);
    if (id === "home") {
      url.searchParams.delete("section");
    } else {
      url.searchParams.set("section", id);
    }
    window.history.pushState({}, "", url);
  }

  const activeSection: SectionEntry | undefined =
    activeId !== "home"
      ? sections.find((s) => s.id === activeId)
      : undefined;

  return (
    <div className="portfolio-layout">
      <Sidebar activeId={activeId} onNavigate={handleNavigate} />
      <main className="portfolio-content" ref={contentRef}>
        {activeSection ? (
          <SectionView section={activeSection} />
        ) : (
          <HomeView />
        )}
      </main>
    </div>
  );
}
