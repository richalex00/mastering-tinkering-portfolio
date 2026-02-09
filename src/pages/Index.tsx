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
  //   {
  //     weekNumber: 2,
  //     title: "Collaborative Making",
  //     date: "January 22, 2024",
  //     reflection: `Working with a group changed everything. Ideas that seemed fixed in my mind became fluid when shared. We built a kinetic sculpture together, negotiating different visions into something none of us could have made alone. The process taught me that tinkering is inherently social.`,
  //     tags: ["Group Project", "In-Class Contribution"],
  //     images: [
  //       {
  //         src: week2Collaboration,
  //         alt: "Students collaborating around a table",
  //         caption: "Collaborative ideation session with the group",
  //         aspectRatio: "landscape" as const,
  //         span: "wide" as const,
  //       },
  //       {
  //         src: week2Sculpture,
  //         alt: "Wire and paper kinetic sculpture",
  //         caption: "Final kinetic sculpture — movement activated by breath",
  //         aspectRatio: "square" as const,
  //       },
  //     ],
  //   },
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
          title2={week.title2}
          date2={week.date2}
          reflection2={week.reflection2}
          tags2={week.tags2}
          images2={week.images2}
        />
      ))}

      <Footer />
    </main>
  );
};

export default Index;
