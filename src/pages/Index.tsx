import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import Introduction from "@/components/portfolio/Introduction";
import WeekSection from "@/components/portfolio/WeekSection";
import Footer from "@/components/portfolio/Footer";

// Import images
import week1Materials from "@/assets/week1-materials.jpg";
import week1Process from "@/assets/week1-process.jpg";
import week2Collaboration from "@/assets/week2-collaboration.jpg";
import week2Sculpture from "@/assets/week2-sculpture.jpg";
import week3Sketches from "@/assets/week3-sketches.jpg";
import week3Electronics from "@/assets/week3-electronics.jpg";
import tinkeringSpaceLec1 from "@/assets/tinkering_spaces.jpeg";
import sketch1 from "@/assets/sketch 1.jpeg";
import sketch2 from "@/assets/sketch 2.jpeg";
import sketch3 from "@/assets/sketch 3.jpeg";
import sketch4 from "@/assets/sketch 4.jpeg";
import sketch5 from "@/assets/sketch 5.jpeg";
import sketch6 from "@/assets/sketch 6.jpeg";
import hex1 from "@/assets/hex1.jpeg";
import hex2 from "@/assets/hex2.jpeg";
import hex3 from "@/assets/hex3.jpeg";
import hex4 from "@/assets/hex4.jpeg";
import hex5 from "@/assets/hex5.jpeg";
import hex6 from "@/assets/hex6.jpeg";
import materials from "@/assets/materials.jpeg";
import table from "@/assets/table.png";
import tinkering1 from "@/assets/tinkering1.jpeg";
import tinkering2 from "@/assets/tinkering2.jpeg";
import tinkering3 from "@/assets/tinkering3.jpeg";
import tinkering4 from "@/assets/tinkering4.jpeg";
import tinkering5 from "@/assets/tinkering5.jpeg";
import tinkering6 from "@/assets/tinkering6.jpeg";
import sketchmissing from "@/assets/sketch missing.jpeg";
import tinkeringSpace2 from "@/assets/tinkering space 2.jpeg";

const weekData = [
  {
    weekNumber: 1,
    title: "1.1 Tinkering Spaces - photo safari",
    date: "January 5th, 2026",
    reflection: `The two main tinkering spaces for me are my room and the designlab. My room is a chaotic haven where creativity thrives amidst the mess. The Designlab, on the other hand, is a more structured environment filled with tools and materials that invite hands-on experimentation.`,
    tags: ["Environment", "Photo Safari"],
    images: [
      {
        src: tinkeringSpaceLec1,
        alt: "Workshop materials spread on table",
        caption: "Tinkering examples group task",
        aspectRatio: "landscape" as const,
      },
      {
        src: tinkeringSpace2,
        alt: "Hands working on cardboard prototype",
        caption:
          "My messy desk in my messy room, the perfect recipie for creativity",
        aspectRatio: "landscape" as const,
      },
    ],
    title2: "2.2 Design a building block",
    date2: "January 9th, 2026",
    reflection2: `Here is a visual diary of my design process for the building block assignment. I started with broad brainstorming, exploring different shapes and connection methods. I found myself drawn to nature as inspiration, which was a feature in every aspect of the design. I ultimately landed on a final concept that blends organic function and aesthetics.`,
    tags2: ["Design", "Sketching"],
    images2: [
      {
        src: sketch1,
        alt: "Replace with your image description",
        caption: "Building block brainstorm",
        aspectRatio: "landscape" as const,
      },
      {
        src: sketch2,
        alt: "Replace with your image description",
        caption: "Block shape ideas",
        aspectRatio: "landscape" as const,
      },
      {
        src: sketch3,
        alt: "Replace with your image description",
        caption: "Connection grooves",
        aspectRatio: "landscape" as const,
      },
      {
        src: sketchmissing,
        alt: "Replace with your image description",
        caption: "Connection point evolution",
        aspectRatio: "landscape" as const,
      },
      {
        src: sketch4,
        alt: "Replace with your image description",
        caption: "Myceluim material",
        aspectRatio: "landscape" as const,
      },
      {
        src: sketch5,
        alt: "Replace with your image description",
        caption: "Interlocking edges",
        aspectRatio: "landscape" as const,
      },
      {
        src: sketch6,
        alt: "Replace with your image description",
        caption: "Final block concept",
        aspectRatio: "landscape" as const,
      },
    ],
  },
  {
    weekNumber: 2,
    title: "2.2 Design a building block - fabricate",
    date: "January 13th, 2026",
    reflection: `For this tinkering prototype, I worked with the materials I had readily available to quickly explore and test my concept. I used oven-bake clay and bent paperclips to form the block structure, embedding magnets so the piece could attach to metal surfaces, and incorporating small jewellery hooks as connection elements. 

This first physical iteration demonstrates the core functional idea: the block can be fixed onto a surface via magnets, while the hooks act as simple attachment points for components such as electronic wiring or modular add-ons. Rather than aiming for a polished finish, the focus of this prototype was rapid experimentation, testing joinery logic, and evaluating how the interaction would work in practice.

In future iterations, I plan to refine the geometry and durability of the design by producing a 3D-printed version.`,
    tags: ["Fabricate", "Tinkering"],
    images: [
      {
        src: materials,
        alt: "Materials used for tinkering",
        caption: "Materials used for tinkering",
        aspectRatio: "landscape" as const,
      },
      {
        src: hex1,
        alt: "Hexagon shape outline",
        caption: "Hexagon shape outline",
        aspectRatio: "landscape" as const,
      },
      {
        src: hex2,
        alt: "Clay hexagon formed",
        caption: "Clay hexagon formed",
        aspectRatio: "landscape" as const,
      },
      {
        src: hex3,
        alt: "Hexagon with added paperclip wiring",
        caption: "Added paperclip wiring",
        aspectRatio: "landscape" as const,
      },
      {
        src: hex4,
        alt: "Embedded magnets",
        caption: "Embedded magnets",
        aspectRatio: "landscape" as const,
      },
      {
        src: hex5,
        alt: "Interlocking edges",
        caption: "Covering top layer",
        aspectRatio: "landscape" as const,
      },
      {
        src: hex6,
        alt: "Replace with your image description",
        caption:
          "After having been cooked in the oven and added hooks for space to add wiring, hexagon sticks to fridge",
        aspectRatio: "landscape" as const,
      },
    ],
    title2: "3.1 Properties of Tinkering Materials",
    date2: "January 16th, 2026",
    reflection2: `This table describes the materials we tinkered with during the lecture and summarizes what we observed while using them.`,
    tags2: ["Analyse", "Categorise"],
    images2: [
      {
        src: table,
        alt: "Table of materials and their properties",
        caption: "Table of materials and their properties",
        aspectRatio: "auto" as const,
      },
      {
        src: tinkering1,
        alt: "Tinkering 1",
        caption: "Lego",
        aspectRatio: "landscape" as const,
      },
      {
        src: tinkering2,
        alt: "Tinkering 2",
        caption: "Littlebits",
        aspectRatio: "landscape" as const,
      },
      {
        src: tinkering3,
        alt: "Tinkering 3",
        caption: "Tinkering table",
        aspectRatio: "landscape" as const,
      },
      {
        src: tinkering4,
        alt: "Tinkering 4",
        caption: "Mechano",
        aspectRatio: "landscape" as const,
      },
      {
        src: tinkering5,
        alt: "Tinkering 5",
        caption: "Makeblock",
        aspectRatio: "landscape" as const,
      },
      {
        src: tinkering6,
        alt: "Tinkering 6",
        caption: "Arduino",
        aspectRatio: "landscape" as const,
      },
    ],
  },
  //   {
  //     weekNumber: 3,
  //     title: "Systems & Circuits",
  //     date: "January 29, 2024",
  //     reflection: `This week introduced electronics as a material. The resistance of the medium—literal and figurative—forced a slower pace. Each failed circuit was a lesson in patience. I'm beginning to understand that tinkering isn't about speed; it's about attention and responsiveness to what the materials tell you.`,
  //     tags: ["Assignment", "Electronics", "Reflection"],
  //     images: [
  //       {
  //         src: week3Sketches,
  //         alt: "Open sketchbook with mechanical drawings",
  //         caption: "Concept sketches for the motorized mechanism",
  //         aspectRatio: "landscape" as const,
  //       },
  //       {
  //         src: week3Electronics,
  //         alt: "Electronic components arranged artistically",
  //         caption: "Component study — understanding the parts before assembly",
  //         aspectRatio: "portrait" as const,
  //       },
  //     ],9
  //   },
];

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const weekNumbers = weekData.map((week) => week.weekNumber);
  const defaultWeek = weekNumbers[0] ?? 1;
  const initialParam = Number(searchParams.get("week"));
  const initialWeek = weekNumbers.includes(initialParam)
    ? initialParam
    : defaultWeek;
  const [selectedWeek, setSelectedWeek] = useState<number>(initialWeek);
  const selected = weekData.find((w) => w.weekNumber === selectedWeek);

  useEffect(() => {
    const paramValue = Number(searchParams.get("week"));
    const nextWeek = weekNumbers.includes(paramValue)
      ? paramValue
      : defaultWeek;
    if (nextWeek !== selectedWeek) {
      setSelectedWeek(nextWeek);
    }
  }, [defaultWeek, searchParams, selectedWeek, weekNumbers]);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Introduction />

      <div className="gallery-container mt-8 mb-6">
        <div role="tablist" className="inline-flex rounded-md bg-muted p-1">
          {weekNumbers.map((n) => {
            const active = selectedWeek === n;
            return (
              <button
                key={n}
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setSelectedWeek(n);
                  setSearchParams({ week: String(n) });
                }}
                className={`px-4 py-2 rounded-md focus:outline-none ${active ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              >
                Week {n}
              </button>
            );
          })}
        </div>
      </div>

      {selected && (
        <WeekSection
          key={selected.weekNumber}
          weekNumber={selected.weekNumber}
          title={selected.title}
          date={selected.date}
          reflection={selected.reflection ?? ""}
          tags={selected.tags}
          images={selected.images}
          title2={selected.title2}
          date2={selected.date2}
          reflection2={selected.reflection2}
          tags2={selected.tags2}
          images2={selected.images2}
        />
      )}

      <Footer />
    </main>
  );
};

export default Index;
