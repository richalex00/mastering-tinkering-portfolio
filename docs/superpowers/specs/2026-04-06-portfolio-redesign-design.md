# Portfolio Redesign — Design Spec
**Date:** 2026-04-06
**Project:** Mastering Tinkering — EIT Digital HCI Portfolio
**Author:** Richard Alexander

---

## Context

This portfolio is a graded submission for the *Mastering Tinkering* course at EIT Digital. The lecturer navigates it to assess work across the semester. The current site is a single long-scroll page with a top header, an about-me section, and all week sections stacked vertically. The goal is to redesign it to feel minimal and gallery-like (think Steve Jobs keynote meets art gallery), with clean navigation and well-presented work.

The redesign has two phases:
1. **Codebase cleanup** — split the monolithic `Index.tsx` into organised, maintainable pieces
2. **UI redesign** — new layout, navigation, and section presentation

All existing text content is preserved exactly as-is. No copy changes.

---

## Design Decisions

### Layout
Two-panel layout replacing the current single-scroll page:
- **Left panel:** fixed sidebar, never scrolls
- **Right panel:** content pane, scrolls independently per section

Clicking a sidebar item swaps the content pane without a full page reload (React state-driven, no routing change needed).

### Sidebar
- **Header block** (sticky top): title "Mastering Tinkering" in serif + "Richard Alexander" in small caps label
- **HOME item:** loads the intro/about content. Styled the same as section items, not visually special
- **Section items:** grouped by number prefix — all 1.x together, all 2.x together, 3.x, 4.x, 5.x — with a 1px divider line between each group
- Each item shows: section code (e.g. `1.1`) in small monospace above, short title below
- Active item: left border accent in clay colour (`hsl(18,30%,38%)`), subtle background tint
- **Footer block** (sticky bottom): "EIT Digital · HCI · 2026" in muted label style
- Sidebar is scrollable if content overflows, with header and footer pinned

### Landing / HOME view
When the page first loads, the content pane shows the existing intro content:
- Course title + description (from current `Header` component)
- About me text + profile photo (from current `Introduction` component)
No changes to the text. Structured as a clean landing, not a separate "About" section.

### Section layout (within each section)
Each section follows this fixed order:
1. Section code — small, muted, monospace (e.g. `2.2`)
2. Date — small, muted, below the code (if present)
3. Title — serif, prominent
4. Reflection text — body size, generous line height
5. Image grid — below the text, 3-column grid for landscape images, full-width for wide/auto images
6. (If section has a second sub-entry, it repeats the same pattern below a thin divider)

Sections with no images simply end after the reflection text — no empty space, no placeholder.

**No tags.** Tags are removed from the UI entirely for now. Future enhancement: revisit with two-tag system (course theory term + activity type) once content is finalised.

### Colours & Typography
Unchanged from current. Key tokens:
- Background: `hsl(40,30%,97%)` warm cream
- Foreground: `hsl(30,15%,12%)` warm charcoal
- Primary/accent: `hsl(18,30%,45%)` clay
- Headings: Cormorant Garamond serif
- Body: Inter sans-serif
- Border/divider: `hsl(35,15%,88%)`

---

## Component Architecture

### New components
| Component | Purpose |
|---|---|
| `src/components/portfolio/Sidebar.tsx` | Fixed left panel — title, nav items grouped by prefix, footer |
| `src/components/portfolio/ContentPane.tsx` | Right panel — renders whichever section is active |
| `src/components/portfolio/SectionView.tsx` | Renders a single section entry (code, date, title, reflection, images) |
| `src/components/portfolio/HomeView.tsx` | Renders the landing/intro content (replaces current Header + Introduction) |

### Removed / replaced
| Current | Replaced by |
|---|---|
| `src/pages/Index.tsx` (monolithic) | Slim orchestrator — just renders `Sidebar` + `ContentPane`, imports data |
| `src/components/portfolio/Header.tsx` | Absorbed into `HomeView.tsx` |
| `src/components/portfolio/Introduction.tsx` | Absorbed into `HomeView.tsx` |
| `src/components/portfolio/WeekSection.tsx` | Replaced by `SectionView.tsx` |

### Data extraction
The `weekData` array (currently inline in `Index.tsx`, ~300+ lines) moves to:
```
src/data/sections.ts
```
Exports a single typed array `sections: SectionEntry[]`. The type definition stays in the same file. This makes `Index.tsx` a thin orchestrator and makes the data easy to update independently.

### State
A single piece of state in `Index.tsx` (or a top-level layout component):
```ts
const [activeSection, setActiveSection] = useState<string>('home')
```
Where `string` is the section code (e.g. `'1.1'`, `'2.2'`, `'home'`). Sidebar passes `setActiveSection` down; `ContentPane` receives `activeSection` and renders accordingly.

---

## Sections Reference

All sections, grouped as they appear in the sidebar:

**Group 1.x — Tinkering Spaces**
- 1.1 Tinkering Spaces — photo safari
- 1.2 Tinkering Spaces — reflect back

**Group 2.x — Building Block**
- 2.1 Design a building block
- 2.2 Design a building block — fabricate
- 2.3 Design a building block — make it interoperable
- 2.4 Design your building block — evaluate

**Group 3.x — Materials**
- 3.1 Properties of Tinkering Materials
- 3.2 Properties of Tinkering Materials — extension
- 3.3 Properties of Tinkering Materials — wide walls

**Group 4.x — Design Methods & Scaffolding**
- 4.0 Scaffolding material: programming metaphor
- 4.1 Overview on Design Methods

**Group 5.x — Group Work**
- 5.0 Group work
- 5.1 Group Assignment: playground design
- 5.2 Group Assignment: physical MVP, first iteration

---

## Out of Scope

- Mobile layout (submission viewed on desktop by lecturer)
- Dark mode toggle (palette stays light)
- Tag system (deferred — see Tags note above)
- Any changes to written content or image assets
- Animation changes (existing Framer Motion fade-ins can be preserved or simplified)

---

## Future Enhancements (not in this spec)

- **Tags:** two-tag system per section — one course theory term (e.g. *Wide Walls*, *Scaffolding*, *Making Do*) + one activity type (*Prototype*, *Analysis*, *Reflection*). To be added once all content is finalised.
- **Remaining sections:** a couple of sections still to be added to the data. Data structure supports this — just append to `sections.ts`.
