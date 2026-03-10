import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import Introduction from "@/components/portfolio/Introduction";
import WeekSection from "@/components/portfolio/WeekSection";
import Footer from "@/components/portfolio/Footer";

// Import images
import connectionBlock1 from "@/assets/connection block 1.jpeg";
import connectionBlock2 from "@/assets/connection block 2.jpeg";
import connectionBlock3 from "@/assets/connection block 3.jpeg";
import connectionBlock4 from "@/assets/connection block 4.jpeg";
import connectionBlock5 from "@/assets/connection block 5.jpeg";
import connectionBlock6 from "@/assets/connection block 6.jpeg";
import connectionBlockSketch1 from "@/assets/connection block sketch 1.jpeg";
import connectionBlockSketch2 from "@/assets/connection block sketch 2.jpeg";
import hex1 from "@/assets/hex1.jpeg";
import hex2 from "@/assets/hex2.jpeg";
import hex3 from "@/assets/hex3.jpeg";
import hex4 from "@/assets/hex4.jpeg";
import hex5 from "@/assets/hex5.jpeg";
import hex6 from "@/assets/hex6.jpeg";
import materials from "@/assets/materials.jpeg";
import sketch1 from "@/assets/sketch 1.jpeg";
import sketch2 from "@/assets/sketch 2.jpeg";
import sketch3 from "@/assets/sketch 3.jpeg";
import sketch4 from "@/assets/sketch 4.jpeg";
import sketch5 from "@/assets/sketch 5.jpeg";
import sketch6 from "@/assets/sketch 6.jpeg";
import sketchmissing from "@/assets/sketch missing.jpeg";
import table2 from "@/assets/table 2.png";
import table from "@/assets/table.png";
import tinkeringSpaceLec1 from "@/assets/tinkering_spaces.jpeg";
import tinkering1 from "@/assets/tinkering1.jpeg";
import tinkering2 from "@/assets/tinkering2.jpeg";
import tinkering3 from "@/assets/tinkering3.jpeg";
import tinkering4 from "@/assets/tinkering4.jpeg";
import tinkering5 from "@/assets/tinkering5.jpeg";
import tinkering6 from "@/assets/tinkering6.jpeg";
import tinkeringGroup1 from "@/assets/tinkering group 1.jpeg";
import tinkeringGroup2 from "@/assets/tinkering group 2.jpeg";
import tinkeringGroup3 from "@/assets/tinkering group 3.jpeg";
import tinkeringGroupSession from "@/assets/tinkering group session.jpeg";
import tinkeringSpace2 from "@/assets/tinkering space 2.jpeg";
import lego1 from "@/assets/lego 1.jpeg";
import lego2 from "@/assets/lego 2.jpeg";
import lego3 from "@/assets/lego 3.jpeg";

interface WeekDataEntry {
  weekNumber: number;
  title: string;
  date?: string;
  reflection: string;
  tags?: string[];
  images: {
    src: string;
    alt: string;
    caption?: string;
    aspectRatio?: "landscape" | "portrait" | "square" | "auto";
    span?: "normal" | "wide";
  }[];
  title2?: string;
  date2?: string;
  reflection2?: string;
  tags2?: string[];
  images2?: {
    src: string;
    alt: string;
    caption?: string;
    aspectRatio?: "landscape" | "portrait" | "square" | "auto";
    span?: "normal" | "wide";
  }[];
  postTitle2?: string;
  postReflection2?: string;
}

const weekData: WeekDataEntry[] = [
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
  {
    weekNumber: 3,
    title: "2.3 Design a building block - make it interoperable",
    date: "February 24th, 2026",
    reflection: `This assignment explored how a building block can become interoperable by designing an interface that allows it to connect with different materials and systems. Inspired by the idea of a universal construction kit, I focused on creating a component that acts as a connector rather than a final object.

My initial prototype consisted of hexagonal clay tiles with embedded magnets and jewelry hooks intended for threading wires. While this version enabled attachment, the connections were mostly surface-level and limited in flexibility. Through testing and reflection, I shifted toward designing a more neutral intermediary element.

The resulting connection block is a clay cube with channels running through four sides, allowing structural elements or wires to pass directly through the form. Magnets embedded on the opposing flat faces enable quick alignment and reversible connections between modules. This combination supports both mechanical and potential electrical linking, allowing blocks to be rearranged, extended, or combined with other materials.

The design emphasizes adaptability over precision. Instead of defining a single way of building, the block functions as infrastructure for experimentation`,
    tags: ["Interoperable Design", "Iterative Prototyping"],
    images: [
      {
        src: connectionBlockSketch1,
        alt: "Connection block sketch image 1",
        caption: "Connection block sketch 1",
        aspectRatio: "landscape" as const,
      },
      {
        src: connectionBlockSketch2,
        alt: "Connection block sketch image 2",
        caption: "Connection block sketch 2",
        aspectRatio: "landscape" as const,
      },
      {
        src: connectionBlock1,
        alt: "Connection block prototype image 1",
        caption: "Connection block 1",
        aspectRatio: "landscape" as const,
      },
      {
        src: connectionBlock2,
        alt: "Connection block prototype image 2",
        caption: "Connection block 2",
        aspectRatio: "landscape" as const,
      },
      {
        src: connectionBlock3,
        alt: "Connection block prototype image 3",
        caption: "Connection block 3",
        aspectRatio: "landscape" as const,
      },
      {
        src: connectionBlock4,
        alt: "Connection block prototype image 4",
        caption: "Connection block 4",
        aspectRatio: "landscape" as const,
      },
      {
        src: connectionBlock5,
        alt: "Connection block prototype image 5",
        caption: "Connection block 5",
        aspectRatio: "landscape" as const,
      },
      {
        src: connectionBlock6,
        alt: "Connection block prototype image 6",
        caption: "Connection block 6",
        aspectRatio: "landscape" as const,
      },
    ],
    title2: "5.0 Group work",
    date2: "February 17th, 2026",
    reflection2: `In this lecture, we did a hands-on group participation activity where we tinkered with cardboard structures and electronic motors to bring movement into our prototype ideas. It was a fun and collaborative session that blended quick making, testing, and creative problem-solving.`,
    tags2: ["Group Participation", "Cardboard", "Electronic Motors"],
    images2: [
      {
        src: tinkeringGroupSession,
        alt: "Group tinkering session overview",
        caption: "Group tinkering session",
        aspectRatio: "landscape" as const,
      },
      {
        src: tinkeringGroup1,
        alt: "Tinkering group work 1",
        caption: "Tinkering group 1",
        aspectRatio: "landscape" as const,
      },
      {
        src: tinkeringGroup2,
        alt: "Tinkering group work 2",
        caption: "Tinkering group 2",
        aspectRatio: "landscape" as const,
      },
      {
        src: tinkeringGroup3,
        alt: "Tinkering group work 3",
        caption: "Tinkering group 3",
        aspectRatio: "landscape" as const,
      },
    ],
    postTitle2: "POEMS Observation Report",
    postReflection2: `Project: Cardboard Vitruvian Man with Motorized Limbs
Context: Group tinkering session involving mechanical construction and basic electronics


P — Participants

The session involved a small group of learners working collaboratively. Participants had mixed levels of prior experience with electronics, crafting, and mechanical design. Roles emerged organically, including designing the cardboard structure, assembling electronic components, and testing motor movement. Collaboration and peer learning were central features of the activity.

Validity note: Multiple participants contributed observations, reducing single-observer bias.
Transferability note: The activity is suitable for learners with varied technical backgrounds.


O — Objects

The main artifact produced was a cardboard Vitruvian Man model with movable arms and legs. Materials included:

  - Cardboard (body and limbs)
  - Small electronic motors
  - Power source (e.g., batteries)
  - Wires and simple connectors
  - Fasteners (brads, string, or joints enabling rotation)
  - The limbs were attached in a way that allowed rotational movement when motors were activated.

Reproducibility note: All materials are low-cost and widely available, making the setup easy to replicate.


E — Environment

  - The tinkering session took place in an indoor workspace with tables, shared tools, and enough room for group interaction. The environment allowed participants to freely move, test components, and iterate on their design without strict time pressure.

  Transferability note: The activity can be reproduced in classrooms, makerspaces, or informal learning environments.


M — Messages

Several key messages emerged through the activity:

  - Mechanical movement can be achieved using simple materials combined with basic electronics.
  - Trial-and-error is an effective strategy in tinkering and prototyping.
  - Collaboration improves problem-solving, especially when combining artistic and technical tasks.
  - Participants communicated frequently, sharing ideas, troubleshooting issues, and reflecting on what worked or failed.

  Validity note: Observed behaviors aligned with participants’ verbal reflections during the session.


S — Services (or Systems / Skills)

The session supported the development of multiple skills:

  - Basic understanding of motor-driven movement
  - Hands-on problem solving
  - Collaborative design and iterative improvement
  - Connecting abstract concepts (human proportions, motion) to physical construction
  - The system as a whole demonstrated how artistic concepts (Vitruvian Man) can be integrated with simple engineering principles.
  - Reproducibility note: Following the same steps and division of tasks would likely lead to similar learning outcomes in another group.

  
Reflection on Quality Criteria

Transferability:
The activity can be adapted to different age groups, learning contexts, and levels of technical complexity by changing materials or motor types.

Validity:
Observations were based on direct participation, group discussion, and visible outcomes (working motorized limbs), ensuring alignment between observed actions and conclusions.

Reproducibility:
Because the materials, environment, and process are clearly described, another group could replicate the session and reasonably expect comparable results.`,
  },
  {
    weekNumber: 4,
    title: "3.2 Properties of Tinkering Materials - extension",
    date: "March 8th, 2026",
    reflection: `To expand the analysis, several additional properties were added to the material table. These focus on how well materials support experimentation and iterative exploration during tinkering. The new properties evaluate aspects such as how easily constructions can be modified, how quickly ideas can be tested, and how understandable the system is for the user.
    
Reversibility - How easily constructions can be disassembled, modified, or rebuilt without damaging parts. High reversibility supports experimentation and iteration because users can undo mistakes and quickly test alternative designs.

Iteration speed - The speed at which ideas can be built, modified, and tested. Materials with high iteration speed allow rapid experimentation and encourage playful exploration.

Transparency - The degree to which the inner workings of a system are visible and understandable. Transparent systems help learners understand how components function and interact.`,
    tags: ["Materials", "Extension"],
    images: [
      {
        src: table2,
        alt: "Extended materials properties notes",
        caption: "Extended material properties overview",
        aspectRatio: "auto" as const,
      },
      {
        src: tinkering3,
        alt: "Material experimentation setup",
        caption: "Material testing setup",
        aspectRatio: "landscape" as const,
      },
    ],
    title2: "4.0 Scaffolding material: programming metaphor",
    date2: "March 8th, 2026",
    reflection2: `For this assignment I designed a physical metaphor that explains how an API enables communication between different software systems. APIs are an important programming concept because they allow applications to exchange information through a structured interface without needing direct access to each other’s internal systems.

I used LEGO as the material because its affordances make it easy to represent systems and interactions in a tangible way. LEGO bricks can be assembled, separated, and moved, which mirrors how components in software systems interact while remaining independent. Minifigures, gates, and blocks make it possible to physically demonstrate the flow of information through the system.

The blue building on the left represents the client application (such as a website or mobile app). This is the system that wants to request information or functionality from another system.

A minifigure pushing a trolley with a blue block represents a request. The blue block symbolizes the data or instruction being sent from the client to the API.

Before the request can continue, it must pass an authentication check, represented by the guard minifigure holding a speaker. This reflects how APIs often require authentication (such as API keys or tokens) to verify whether the request is allowed.

The grey arches represent the API gateway, which acts as the controlled interface between the client and the server. Requests must pass through this gate rather than directly accessing the backend system.

The boxes beside the gate represent the API specification or contract, which defines the rules for how requests must be structured and what actions are allowed.

Behind the gate is the backend processing system, represented by a robotic structure connected with pipes. This symbolizes the internal logic that processes the request and interacts with the server or database, represented by the connected blocks.

Finally, the system produces a response, shown as a crate containing either a green block (success) or a red block (failure). This response is returned to the client after the request has been processed.

This metaphor focuses on the programming concepts of request/response communication, authentication, system interfaces, and backend processing, demonstrating how APIs control the flow of information between software systems.`,
    tags2: ["Scaffolding", "Programming Metaphor"],
    images2: [
      {
        src: lego1,
        alt: "Lego scaffolding material image 1",
        caption: "Lego 1",
        aspectRatio: "landscape" as const,
      },
      {
        src: lego2,
        alt: "Lego scaffolding material image 2",
        caption: "Lego 2",
        aspectRatio: "landscape" as const,
      },
      {
        src: lego3,
        alt: "Lego scaffolding material image 3",
        caption: "Lego 3",
        aspectRatio: "landscape" as const,
      },
    ],
  },
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
          postTitle2={selected.postTitle2}
          postReflection2={selected.postReflection2}
        />
      )}

      <Footer />
    </main>
  );
};

export default Index;
