// src/components/portfolio/Sidebar.tsx
import { sections } from "@/data/sections";
import type { SectionEntry } from "@/data/sections";

interface SidebarProps {
  activeId: string;
  onNavigate: (id: string) => void;
}

// Group sections by the first character of their id
const grouped = sections.reduce<Record<string, SectionEntry[]>>((acc, s) => {
  const prefix = s.id.split(".")[0];
  (acc[prefix] ??= []).push(s);
  return acc;
}, {});
const groupKeys = Object.keys(grouped).sort((a, b) => Number(a) - Number(b));

const Sidebar = ({ activeId, onNavigate }: SidebarProps) => {
  return (
    <aside className="h-full flex flex-col bg-[hsl(40,25%,95%)] border-r border-border">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 shrink-0">
        <p className="font-serif text-lg leading-snug text-[hsl(30,12%,18%)]">
          Mastering Tinkering
        </p>
        <p className="text-xs tracking-widest uppercase text-[hsl(30,8%,75%)] mt-1">
          Richard Alexander
        </p>
      </div>

      {/* Scrollable nav area */}
      <nav className="overflow-y-auto flex-1 px-3 pb-4">
        {/* Home item */}
        <button
          type="button"
          onClick={() => onNavigate("home")}
          aria-current={activeId === "home" ? "page" : undefined}
          className={[
            "w-full text-left px-3 py-2 rounded-sm border-l-2 transition-colors",
            activeId === "home"
              ? "border-[hsl(18,30%,38%)] bg-[hsl(40,20%,92%)]"
              : "border-transparent hover:bg-[hsl(40,20%,92%)]",
          ].join(" ")}
        >
          <span className="gallery-body text-sm text-[hsl(30,15%,12%)]">
            About Me
          </span>
        </button>

        {/* Groups */}
        {groupKeys.map((key) => (
          <div key={key}>
            <div className="gallery-divider my-2" />
            {grouped[key].map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onNavigate(section.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "w-full text-left px-3 py-2 rounded-sm border-l-2 transition-colors",
                    isActive
                      ? "border-[hsl(18,30%,38%)] bg-[hsl(40,20%,92%)]"
                      : "border-transparent hover:bg-[hsl(40,20%,92%)]",
                  ].join(" ")}
                >
                  <span className="block font-mono text-[10px] gallery-label mb-0.5">
                    {section.id}
                  </span>
                  <span className="block text-xs text-[hsl(30,15%,12%)] leading-snug">
                    {section.title}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 shrink-0 border-t border-border">
        <p className="gallery-caption text-[hsl(30,10%,45%)]">
          EIT Digital · HCI · 2026
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
