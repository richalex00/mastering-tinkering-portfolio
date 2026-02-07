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

const weekData = [
  {
    weekNumber: 1,
    title: "Material Encounters",
    date: "January 15, 2024",
    reflection: `The first week was about getting comfortable with unfamiliar materials. I found myself drawn to the tension between control and accident—how cardboard folds predictably but wire has its own memory. The assignment pushed me to make without planning, which felt uncomfortable but revealing.`,
    tags: ["Assignment", "Material Exploration"],
    images: [
      {
        src: week1Materials,
        alt: "Workshop materials spread on table",
        caption: "Initial material survey — wire, wood, paper, found objects",
        aspectRatio: "landscape" as const,
        span: "wide" as const,
      },
      {
        src: week1Process,
        alt: "Hands working on cardboard prototype",
        caption: "Building the first prototype without sketching first",
        aspectRatio: "portrait" as const,
      },
    ],
  },
  {
    weekNumber: 2,
    title: "Collaborative Making",
    date: "January 22, 2024",
    reflection: `Working with a group changed everything. Ideas that seemed fixed in my mind became fluid when shared. We built a kinetic sculpture together, negotiating different visions into something none of us could have made alone. The process taught me that tinkering is inherently social.`,
    tags: ["Group Project", "In-Class Contribution"],
    images: [
      {
        src: week2Collaboration,
        alt: "Students collaborating around a table",
        caption: "Collaborative ideation session with the group",
        aspectRatio: "landscape" as const,
        span: "wide" as const,
      },
      {
        src: week2Sculpture,
        alt: "Wire and paper kinetic sculpture",
        caption: "Final kinetic sculpture — movement activated by breath",
        aspectRatio: "square" as const,
      },
    ],
  },
  {
    weekNumber: 3,
    title: "Systems & Circuits",
    date: "January 29, 2024",
    reflection: `This week introduced electronics as a material. The resistance of the medium—literal and figurative—forced a slower pace. Each failed circuit was a lesson in patience. I'm beginning to understand that tinkering isn't about speed; it's about attention and responsiveness to what the materials tell you.`,
    tags: ["Assignment", "Electronics", "Reflection"],
    images: [
      {
        src: week3Sketches,
        alt: "Open sketchbook with mechanical drawings",
        caption: "Concept sketches for the motorized mechanism",
        aspectRatio: "landscape" as const,
      },
      {
        src: week3Electronics,
        alt: "Electronic components arranged artistically",
        caption: "Component study — understanding the parts before assembly",
        aspectRatio: "portrait" as const,
      },
    ],
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Introduction />
      
      {weekData.map((week) => (
        <WeekSection
          key={week.weekNumber}
          weekNumber={week.weekNumber}
          title={week.title}
          date={week.date}
          reflection={week.reflection}
          tags={week.tags}
          images={week.images}
        />
      ))}
      
      <Footer />
    </main>
  );
};

export default Index;
