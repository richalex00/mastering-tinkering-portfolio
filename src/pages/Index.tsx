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
    reflection: `The two main tinkering spaces for me are my room and the designlab. My room is a chaotic haven where creativity thrives amidst the mess. The Designlab, on the other hand, is a more structured environment filled with tools and materials that invite hands-on experimentation.`,
    tags: ["Fabricate", "Tinkering"],
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
    title2: "3.1 Properties of Tinkering Materials",
    date2: "January 16th, 2026",
    reflection2: `Here is a visual diary of my design process for the building block assignment. I started with broad brainstorming, exploring different shapes and connection methods. I found myself drawn to nature as inspiration, which was a feature in every aspect of the design. I ultimately landed on a final concept that blends organic function and aesthetics.`,
    tags2: ["Analyse", "Categorise"],
    images2: [],
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
