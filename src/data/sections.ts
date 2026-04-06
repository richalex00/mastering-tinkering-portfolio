import type { GalleryImage } from "@/components/portfolio/ImageGallery";

// Image imports
import connectionBlock1 from "@/assets/connection block 1.jpeg";
import connectionBlock2 from "@/assets/connection block 2.jpeg";
import connectionBlock3 from "@/assets/connection block 3.jpeg";
import connectionBlock4 from "@/assets/connection block 4.jpeg";
import connectionBlock5 from "@/assets/connection block 5.jpeg";
import connectionBlock6 from "@/assets/connection block 6.jpeg";
import connectionBlockSketch1 from "@/assets/connection block sketch 1.jpeg";
import connectionBlockSketch2 from "@/assets/connection block sketch 2.jpeg";
import designMethodsBrainstorm from "@/assets/design methods brainstorm.jpeg";
import groupProjectBioSensor from "@/assets/group project bio sensor.png";
import manualPage1 from "@/assets/manual page 1.png";
import manualPage2 from "@/assets/manual page 2.png";
import poster from "@/assets/poster.png";
import hex1 from "@/assets/hex1.jpeg";
import hex2 from "@/assets/hex2.jpeg";
import hex3 from "@/assets/hex3.jpeg";
import hex4 from "@/assets/hex4.jpeg";
import hex5 from "@/assets/hex5.jpeg";
import hex6 from "@/assets/hex6.jpeg";
import materials from "@/assets/materials.jpeg";
import masteringTinkering from "@/assets/Mastering Tinkering.png";
import masteringTinkering1 from "@/assets/Mastering Tinkering (1).png";
import masteringTinkering2 from "@/assets/Mastering Tinkering (2).png";
import masteringTinkering3 from "@/assets/Mastering Tinkering (3).png";
import masteringTinkering4 from "@/assets/Mastering Tinkering (4).png";
import masteringTinkering5 from "@/assets/Mastering Tinkering (5).png";
import scratch1 from "@/assets/scratch1.png";
import scratch2 from "@/assets/scratch2.webp";
import sketch1 from "@/assets/sketch 1.jpeg";
import sketch2 from "@/assets/sketch 2.jpeg";
import sketch3 from "@/assets/sketch 3.jpeg";
import sketch4 from "@/assets/sketch 4.jpeg";
import sketch5 from "@/assets/sketch 5.jpeg";
import sketch6 from "@/assets/sketch 6.jpeg";
import sketchmissing from "@/assets/sketch missing.jpeg";
import nintendo1 from "@/assets/nintendo1.jpg";
import nintendo2 from "@/assets/nintendo 2.webp";
import keva1 from "@/assets/KEVA 1.webp";
import keva2 from "@/assets/keva 2.avif";
import table2 from "@/assets/table 2.png";
import table3 from "@/assets/table3.png";
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
import aiSketch from "@/assets/AI sketch.jpeg";
import uiSketch from "@/assets/UI sketch.jpeg";

export interface Subsection {
  title: string;
  reflection: string;
  images: GalleryImage[];
}

export interface SectionEntry {
  id: string;
  title: string;
  date?: string;
  reflection: string;
  images: GalleryImage[];
  subsections?: Subsection[];
  postTitle?: string;
  postReflection?: string;
}

export const sectionSortValue = (id: string): number => {
  const [majorRaw, minorRaw = "0"] = id.split(".");
  const major = Number(majorRaw);
  const minor = Number(minorRaw);
  if (Number.isNaN(major) || Number.isNaN(minor)) return Number.MAX_SAFE_INTEGER;
  return major * 1000 + minor;
};

const rawSections: SectionEntry[] = [
  {
    id: "1.1",
    title: "Tinkering Spaces - photo safari",
    date: "January 5th, 2026",
    reflection: `The two main tinkering spaces for me are my room and the designlab. My room is a chaotic haven where creativity thrives amidst the mess. The Designlab, on the other hand, is a more structured environment filled with tools and materials that invite hands-on experimentation.`,
    images: [
      {
        src: tinkeringSpaceLec1,
        alt: "Workshop materials spread on table",
        caption: "Tinkering examples group task",
        aspectRatio: "landscape",
      },
      {
        src: tinkeringSpace2,
        alt: "Hands working on cardboard prototype",
        caption: "My messy desk in my messy room, the perfect recipie for creativity",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "1.2",
    title: "Tinkering Spaces - reflect back",
    date: "March 20th, 2026",
    reflection: `Reflecting on my tinkering spaces using the framework from the course reader, I can identify several elements of the tinkering "playground" and how they are present or missing in different environments.

In my personal workspace, the environment supports low-threshold experimentation. It is easily accessible and informal, which encourages quick idea generation and spontaneous tinkering. However, the available toolbox is limited, mainly consisting of basic materials and digital tools. This restricts the complexity of what I can build and reduces opportunities for deeper material exploration. The space supports iteration and reflection, but lacks diversity in materials and equipment.

When reflecting upon the tinkering spaces I previously uploaded, I realised I should revisit the design lab to take some better photos of the tools available. In contrast, the shared workspace in the Design Lab provides a much richer toolbox, including access to machines, materials, and collaborative input. This environment better supports material exploration and prototyping, which are key aspects of tinkering. The presence of others also introduces an informal facilitator role, where feedback and discussion help guide the process and stimulate new ideas.

Looking at both spaces, I notice that each supports different aspects of tinkering. My personal space enables quick and independent exploration, while the Design Lab supports more structured experimentation and complex making. However, both spaces could be improved: my personal workspace lacks tools and materials, while the shared space could benefit from being more accessible for spontaneous use.

Overall, this comparison shows that an effective tinkering environment requires a balance between accessibility, a rich toolbox, and opportunities for experimentation and reflection.`,
    images: [
      {
        src: tinkeringSpaceLec1,
        alt: "Tinkering examples in shared workspace",
        caption: "Shared tinkering setup",
        aspectRatio: "landscape",
      },
      {
        src: tinkeringSpace2,
        alt: "Personal tinkering workspace",
        caption: "Personal tinkering setup",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "2.1",
    title: "Design a building block",
    date: "January 9th, 2026",
    reflection: `Here is a visual diary of my design process for the building block assignment. I started with broad brainstorming, exploring different shapes and connection methods. I found myself drawn to nature as inspiration, which was a feature in every aspect of the design. I ultimately landed on a final concept that blends organic function and aesthetics.`,
    images: [
      {
        src: sketch1,
        alt: "Replace with your image description",
        caption: "Building block brainstorm",
        aspectRatio: "landscape",
      },
      {
        src: sketch2,
        alt: "Replace with your image description",
        caption: "Block shape ideas",
        aspectRatio: "landscape",
      },
      {
        src: sketch3,
        alt: "Replace with your image description",
        caption: "Connection grooves",
        aspectRatio: "landscape",
      },
      {
        src: sketchmissing,
        alt: "Replace with your image description",
        caption: "Connection point evolution",
        aspectRatio: "landscape",
      },
      {
        src: sketch4,
        alt: "Replace with your image description",
        caption: "Myceluim material",
        aspectRatio: "landscape",
      },
      {
        src: sketch5,
        alt: "Replace with your image description",
        caption: "Interlocking edges",
        aspectRatio: "landscape",
      },
      {
        src: sketch6,
        alt: "Replace with your image description",
        caption: "Final block concept",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "2.2",
    title: "Design a building block - fabricate",
    date: "January 13th, 2026",
    reflection: `For this tinkering prototype, I worked with the materials I had readily available to quickly explore and test my concept. I used oven-bake clay and bent paperclips to form the block structure, embedding magnets so the piece could attach to metal surfaces, and incorporating small jewellery hooks as connection elements.

This first physical iteration demonstrates the core functional idea: the block can be fixed onto a surface via magnets, while the hooks act as simple attachment points for components such as electronic wiring or modular add-ons. Rather than aiming for a polished finish, the focus of this prototype was rapid experimentation, testing joinery logic, and evaluating how the interaction would work in practice.

In future iterations, I plan to refine the geometry and durability of the design by producing a 3D-printed version.`,
    images: [
      {
        src: materials,
        alt: "Materials used for tinkering",
        caption: "Materials used for tinkering",
        aspectRatio: "landscape",
      },
      {
        src: hex1,
        alt: "Hexagon shape outline",
        caption: "Hexagon shape outline",
        aspectRatio: "landscape",
      },
      {
        src: hex2,
        alt: "Clay hexagon formed",
        caption: "Clay hexagon formed",
        aspectRatio: "landscape",
      },
      {
        src: hex3,
        alt: "Hexagon with added paperclip wiring",
        caption: "Added paperclip wiring",
        aspectRatio: "landscape",
      },
      {
        src: hex4,
        alt: "Embedded magnets",
        caption: "Embedded magnets",
        aspectRatio: "landscape",
      },
      {
        src: hex5,
        alt: "Interlocking edges",
        caption: "Covering top layer",
        aspectRatio: "landscape",
      },
      {
        src: hex6,
        alt: "Replace with your image description",
        caption: "After having been cooked in the oven and added hooks for space to add wiring, hexagon sticks to fridge",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "2.3",
    title: "Design a building block - make it interoperable",
    date: "February 24th, 2026",
    reflection: `This assignment explored how a building block can become interoperable by designing an interface that allows it to connect with different materials and systems. Inspired by the idea of a universal construction kit, I focused on creating a component that acts as a connector rather than a final object.

My initial prototype consisted of hexagonal clay tiles with embedded magnets and jewelry hooks intended for threading wires. While this version enabled attachment, the connections were mostly surface-level and limited in flexibility. Through testing and reflection, I shifted toward designing a more neutral intermediary element.

The resulting connection block is a clay cube with channels running through four sides, allowing structural elements or wires to pass directly through the form. Magnets embedded on the opposing flat faces enable quick alignment and reversible connections between modules. This combination supports both mechanical and potential electrical linking, allowing blocks to be rearranged, extended, or combined with other materials.

The design emphasizes adaptability over precision. Instead of defining a single way of building, the block functions as infrastructure for experimentation`,
    images: [
      {
        src: connectionBlockSketch1,
        alt: "Connection block sketch image 1",
        caption: "Connection block sketch 1",
        aspectRatio: "landscape",
      },
      {
        src: connectionBlockSketch2,
        alt: "Connection block sketch image 2",
        caption: "Connection block sketch 2",
        aspectRatio: "landscape",
      },
      {
        src: connectionBlock1,
        alt: "Connection block prototype image 1",
        caption: "Connection block 1",
        aspectRatio: "landscape",
      },
      {
        src: connectionBlock2,
        alt: "Connection block prototype image 2",
        caption: "Connection block 2",
        aspectRatio: "landscape",
      },
      {
        src: connectionBlock3,
        alt: "Connection block prototype image 3",
        caption: "Connection block 3",
        aspectRatio: "landscape",
      },
      {
        src: connectionBlock4,
        alt: "Connection block prototype image 4",
        caption: "Connection block 4",
        aspectRatio: "landscape",
      },
      {
        src: connectionBlock5,
        alt: "Connection block prototype image 5",
        caption: "Connection block 5",
        aspectRatio: "landscape",
      },
      {
        src: connectionBlock6,
        alt: "Connection block prototype image 6",
        caption: "Connection block 6",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "2.4",
    title: "Design your building block - evaluate",
    reflection:
      "To evaluate the effectiveness of my building block design, I applied the same material affordance criteria used in the tinkering material comparison table. This evaluation helps determine how well the prototype supports experimentation, accessibility, and creative exploration within a tinkering process.\n\nAccording to the course reader, tinkering is characterized by hands-on exploration, experimentation, and iteration, where understanding emerges through interaction with materials. My prototype reflects this idea by allowing users to physically experiment with connections between components. The magnets allow quick attachment to surfaces or other blocks, while the cylindrical holes and hooks provide multiple connection points for wires, rods, or other elements. These features encourage users to try different configurations and observe how the system behaves.\n\nThe design also relates to the reader's concept of the toolbox, where materials and components function as building blocks for experimentation. Rather than representing a finished product, the hexagonal tile and connector block act as modular elements that can be combined in different ways. This supports open-ended exploration and iterative design, allowing users to gradually expand their constructions and experiment with new ideas.\n\nFinally, the prototype demonstrates the principle of \"making do\", which is described in the reader as using available materials creatively during experimentation. The clay prototype was created using simple materials such as magnets, paper clips, and jewelry hooks. Although the prototype is not yet optimized for durability, it allowed rapid testing of the core concept. Through this process, I could explore how the block connects to other elements and identify potential improvements for a future 3D printed version.",
    images: [
      {
        src: table3,
        alt: "Building block evaluation table",
        caption: "Building block affordance evaluation",
        aspectRatio: "auto",
        span: "wide",
      },
    ],
  },
  {
    id: "3.1",
    title: "Properties of Tinkering Materials",
    date: "January 16th, 2026",
    reflection: `This table describes the materials we tinkered with during the lecture and summarizes what we observed while using them.`,
    images: [
      {
        src: table,
        alt: "Table of materials and their properties",
        caption: "Table of materials and their properties",
        aspectRatio: "auto",
        span: "wide",
      },
      {
        src: tinkering1,
        alt: "Tinkering 1",
        caption: "Lego",
        aspectRatio: "landscape",
      },
      {
        src: tinkering2,
        alt: "Tinkering 2",
        caption: "Littlebits",
        aspectRatio: "landscape",
      },
      {
        src: tinkering3,
        alt: "Tinkering 3",
        caption: "Tinkering table",
        aspectRatio: "landscape",
      },
      {
        src: tinkering4,
        alt: "Tinkering 4",
        caption: "Mechano",
        aspectRatio: "landscape",
      },
      {
        src: tinkering5,
        alt: "Tinkering 5",
        caption: "Makeblock",
        aspectRatio: "landscape",
      },
      {
        src: tinkering6,
        alt: "Tinkering 6",
        caption: "Arduino",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "3.2",
    title: "Properties of Tinkering Materials - extension",
    date: "March 8th, 2026",
    reflection: `To expand the analysis, several additional properties were added to the material table. These focus on how well materials support experimentation and iterative exploration during tinkering. The new properties evaluate aspects such as how easily constructions can be modified, how quickly ideas can be tested, and how understandable the system is for the user.

Reversibility - How easily constructions can be disassembled, modified, or rebuilt without damaging parts. High reversibility supports experimentation and iteration because users can undo mistakes and quickly test alternative designs.

Iteration speed - The speed at which ideas can be built, modified, and tested. Materials with high iteration speed allow rapid experimentation and encourage playful exploration.

Transparency - The degree to which the inner workings of a system are visible and understandable. Transparent systems help learners understand how components function and interact.`,
    images: [
      {
        src: table2,
        alt: "Extended materials properties notes",
        caption: "Extended material properties overview",
        aspectRatio: "auto",
        span: "wide",
      },
      {
        src: tinkering3,
        alt: "Material experimentation setup",
        caption: "Material testing setup",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "3.3",
    title: "Properties of Tinkering Materials - wide walls",
    reflection:
      '"Wide walls" describes tinkering materials that allow many different types of projects and creative directions. Instead of guiding users toward a single predefined outcome, these tools support a wide range of creative exploration. The following examples demonstrate materials and systems that enable diverse forms of tinkering and experimentation.',
    images: [],
    subsections: [
      {
        title: "Scratch",
        reflection:
          "Scratch is a visual programming environment designed to allow users to create many different types of digital projects using the same basic programming blocks. Instead of focusing on one specific application, Scratch enables users to build games, animations, interactive stories, simulations, or music projects. This demonstrates the concept of wide walls, because the system supports many creative directions while using a shared set of tools.\n\nIn the context of tinkering described in the course reader, Scratch supports experimentation, iteration, and discovery. Users can quickly modify code blocks, observe the results, and improve their projects through repeated experimentation. The visual block system lowers the barrier to entry while still allowing complex projects, which makes it well suited for exploratory learning and creative problem solving.",
        images: [
          {
            src: scratch1,
            alt: "Scratch projects and interface",
            caption: "Scratch",
            aspectRatio: "landscape",
          },
          {
            src: scratch2,
            alt: "Scratch projects and interface 2",
            caption: "Scratch 2",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "Nintendo Labo",
        reflection:
          "Nintendo Labo combines cardboard construction with digital interaction through the Nintendo Switch. Users build physical devices called Toy-Con, such as musical instruments, vehicles, fishing rods, or robot controllers, which interact with the console's sensors and software. Because the same cardboard construction kit can be used to create many different devices, Nintendo Labo demonstrates the principle of wide walls.\n\nThe system encourages a tinkering mindset similar to the process described in the reader: users experiment with materials, observe how mechanisms work, and modify designs to improve them. By combining simple materials like cardboard with digital feedback from the console, the system supports hands-on exploration and iterative experimentation. This allows users to discover new possibilities and develop creative solutions through making and testing.",
        images: [
          {
            src: nintendo1,
            alt: "Nintendo Labo example 1",
            caption: "Nintendo Labo 1",
            aspectRatio: "landscape",
          },
          {
            src: nintendo2,
            alt: "Nintendo Labo example 2",
            caption: "Nintendo Labo 2",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "KEVA Planks",
        reflection:
          "KEVA Planks are simple wooden blocks that all have the same size and shape, but can be used to build a wide variety of structures. Because the planks do not use connectors or predefined instructions, users must experiment with balance, structure, and geometry when building. This open-ended approach makes KEVA Planks a strong example of wide walls, as the same basic material can be used to create towers, bridges, architectural models, or abstract sculptures.\n\nThis type of system reflects the idea of material exploration described in the course reader. Through hands-on experimentation, users gain knowledge about the properties of the material and how different structures behave. The process often involves trial, observation, and refinement, which aligns with the iterative tinkering process where new discoveries emerge through interaction with the material.",
        images: [
          {
            src: keva1,
            alt: "KEVA Planks example 1",
            caption: "KEVA Planks 1",
            aspectRatio: "landscape",
          },
          {
            src: keva2,
            alt: "KEVA Planks example 2",
            caption: "KEVA Planks 2",
            aspectRatio: "landscape",
          },
        ],
      },
    ],
  },
  {
    id: "4.0",
    title: "Scaffolding material: programming metaphor",
    date: "March 8th, 2026",
    reflection: `For this assignment I designed a physical metaphor that explains how an API enables communication between different software systems. APIs are an important programming concept because they allow applications to exchange information through a structured interface without needing direct access to each other's internal systems.

I used LEGO as the material because its affordances make it easy to represent systems and interactions in a tangible way. LEGO bricks can be assembled, separated, and moved, which mirrors how components in software systems interact while remaining independent. Minifigures, gates, and blocks make it possible to physically demonstrate the flow of information through the system.

The blue building on the left represents the client application (such as a website or mobile app). This is the system that wants to request information or functionality from another system.

A minifigure pushing a trolley with a blue block represents a request. The blue block symbolizes the data or instruction being sent from the client to the API.

Before the request can continue, it must pass an authentication check, represented by the guard minifigure holding a speaker. This reflects how APIs often require authentication (such as API keys or tokens) to verify whether the request is allowed.

The grey arches represent the API gateway, which acts as the controlled interface between the client and the server. Requests must pass through this gate rather than directly accessing the backend system.

The boxes beside the gate represent the API specification or contract, which defines the rules for how requests must be structured and what actions are allowed.

Behind the gate is the backend processing system, represented by a robotic structure connected with pipes. This symbolizes the internal logic that processes the request and interacts with the server or database, represented by the connected blocks.

Finally, the system produces a response, shown as a crate containing either a green block (success) or a red block (failure). This response is returned to the client after the request has been processed.

This metaphor focuses on the programming concepts of request/response communication, authentication, system interfaces, and backend processing, demonstrating how APIs control the flow of information between software systems.`,
    images: [
      {
        src: lego1,
        alt: "Lego scaffolding material image 1",
        caption: "Lego 1",
        aspectRatio: "landscape",
      },
      {
        src: lego2,
        alt: "Lego scaffolding material image 2",
        caption: "Lego 2",
        aspectRatio: "landscape",
      },
      {
        src: lego3,
        alt: "Lego scaffolding material image 3",
        caption: "Lego 3",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "4.1",
    title: "Overview on Design Methods",
    date: "March 20th, 2026",
    reflection: `**Brainstorming**
A creative technique used to generate a large number of ideas quickly without judgment. It focuses on divergent thinking and exploring many possible solutions.

**Co-design**
A collaborative design approach where users or stakeholders actively participate in the design process, contributing ideas, feedback, and decisions.

**Critical Design**
A design approach that challenges assumptions and provokes reflection by creating speculative or provocative artifacts rather than practical solutions.

**Research Through Design**
A method where knowledge is generated through the process of designing and making artifacts. The design process itself is used as a form of research.

**Rapid Prototyping**
The quick creation of physical or digital models to test ideas, allowing fast experimentation and iteration.

**Iterative Design**
A cyclical design process where ideas are repeatedly tested, evaluated, and improved over multiple versions.`,
    images: [
      {
        src: designMethodsBrainstorm,
        alt: "Design methods brainstorm",
        caption: "Design methods brainstorm",
        aspectRatio: "auto",
        span: "wide",
      },
    ],
  },
  {
    id: "4.2",
    title: "Tinkering as Design Method in your Field",
    date: "March 30th, 2026",
    reflection: `**Tinkerable Problems in Interaction Technology**`,
    images: [],
    subsections: [
      {
        title: "1. Understanding AI Systems as Black Boxes",
        reflection: `**Problem**
AI systems are often experienced as opaque: users observe inputs and outputs without insight into internal processes. This limits both critical engagement and the development of intuition about system behavior.

**Tinkerability**
This problem is underspecified and does not have a single correct interpretation, making it suitable for a tinkering approach. Understanding emerges through interaction, iteration, and interpretation, rather than explanation alone.
The setup aligns with boxed complexity, where advanced functionality is encapsulated but still open to exploration. This allows users to engage with behavior without needing to construct the system from first principles.

**Tinkering Playground**
The playground is structured around direct interaction with a functioning AI system as material.
- Seed: A pretrained AI model that produces immediate, observable outputs
- Toolbox: Input manipulation (e.g. noise, transformations), custom data inputs, and real-time output visualization
- Environment: An interactive interface that supports rapid iteration and low-cost experimentation
- Process: Iterative cycles of modifying inputs, observing outputs, and forming interpretations
- Discovery: Development of intuition about system behavior, including failure cases and inconsistencies
- Facilitator: Provides prompts (e.g. "confuse the model") and supports reflection without explaining underlying mechanisms

**Target Group**
Students in computer science or interaction design, particularly those encountering AI systems without prior deep technical knowledge.

**Onboarding and Scaffolding**
- Initial prompt: vary a single parameter and observe changes
- Example inputs to lower the threshold
- Facilitator prompts focused on identifying patterns and anomalies

Scaffolding remains minimal and directional, supporting exploration without prescribing outcomes.

**Example Assignments**
- Produce an input that results in a misclassification
- Identify patterns in incorrect predictions
- Relate observed behavior to hypotheses about the model`,
        images: [
          {
            src: aiSketch,
            alt: "AI systems sketch",
            caption: "AI Systems as Black Boxes",
            aspectRatio: "auto",
            span: "wide",
          },
        ],
      },
      {
        title: "2. Designing Intuitive User Interfaces",
        reflection: `**Problem**
Interface design involves complex, context-dependent interactions between user expectations, system behavior, and form. These relationships cannot be fully specified in advance.

**Tinkerability**
The problem benefits from material exploration and iterative reframing. There is no single optimal solution; instead, understanding emerges through prototyping and interaction.
This aligns with making do, where constrained materials shape the exploration space and guide design decisions.

**Tinkering Playground**
The playground is material-driven, where interaction emerges through prototyping under constraints.
- Seed: An open design challenge (e.g. "design a music player")
- Toolbox: Paper, cardboard, markers, basic electronics, and imposed constraints (e.g. no screens, limited inputs)
- Environment: A workspace that supports rapid construction, testing, and iteration
- Process: Cycles of building, testing, and modifying prototypes in response to observed interaction
- Discovery: Insights into how material choices and constraints shape interaction and usability
- Facilitator: Encourages iteration, reframes problems, and prevents early fixation on a single solution

**Target Group**
Interaction design students and HCI learners working with early-stage concepts.

**Onboarding and Scaffolding**
- Introduction through simple example prototypes
- Templates for common interface elements
- Constraints used as structuring devices rather than limitations

Facilitation focuses on maintaining iteration and avoiding premature convergence.

**Example Assignments**
- Design a music player without visual output
- Create an interface operable without sight
- Prototype and iteratively refine an intentionally unclear interface`,
        images: [
          {
            src: uiSketch,
            alt: "User interface design sketch",
            caption: "Designing Intuitive User Interfaces",
            aspectRatio: "auto",
            span: "wide",
          },
        ],
      },
      {
        title: "3. Debugging as Exploration of System Behavior",
        reflection: `**Problem**
Debugging is commonly approached as a goal-oriented task aimed at fixing errors. This often leads to convergence on a solution without understanding underlying system behavior.

**Tinkerability**
Reframing debugging as tinkering shifts the focus from solution to understanding through experimentation. Instead of minimizing errors, the process uses them as entry points for exploration.
This distinguishes tinkering from trial-and-error: the objective is not only to reach a working state, but to generate insight.

**Tinkering Playground**
The playground is structured around failure as material for exploration.
- Seed: A pre-constructed system containing faults (software or hardware)
- Toolbox: Buggy code or circuits, debugging tools (logs, probes, visualizations), and modifiable components
- Environment: A safe experimental setup where systems can be altered and failure carries no penalty
- Process: Observation, hypothesis formation, intervention, and reflection on system responses
- Discovery: Understanding how system behavior emerges and how faults propagate
- Facilitator: Guides attention toward explanation and reflection rather than immediate solution convergence

**Target Group**
Programming students and learners in embedded or interactive systems.

**Onboarding and Scaffolding**
- Initial focus on observation before intervention
- Prompts encouraging explanation ("what is happening?")
- Facilitator support in structuring reflection

Scaffolding supports reasoning without directing toward immediate solutions.

**Example Assignments**
- Describe a bug without resolving it
- Introduce new faults and observe system changes
- Compare different investigative strategies`,
        images: [],
      },
    ],
  },
  {
    id: "5.0",
    title: "Group work",
    date: "February 17th, 2026",
    reflection: `In this lecture, we did a hands-on group participation activity where we tinkered with cardboard structures and electronic motors to bring movement into our prototype ideas. It was a fun and collaborative session that blended quick making, testing, and creative problem-solving.`,
    images: [
      {
        src: tinkeringGroupSession,
        alt: "Group tinkering session overview",
        caption: "Group tinkering session",
        aspectRatio: "landscape",
      },
      {
        src: tinkeringGroup1,
        alt: "Tinkering group work 1",
        caption: "Tinkering group 1",
        aspectRatio: "landscape",
      },
      {
        src: tinkeringGroup2,
        alt: "Tinkering group work 2",
        caption: "Tinkering group 2",
        aspectRatio: "landscape",
      },
      {
        src: tinkeringGroup3,
        alt: "Tinkering group work 3",
        caption: "Tinkering group 3",
        aspectRatio: "landscape",
      },
    ],
    postTitle: "POEMS Observation Report",
    postReflection: `Project: Cardboard Vitruvian Man with Motorized Limbs
Context: Group tinkering session involving mechanical construction and basic electronics


**P — Participants**

The session involved a small group of learners working collaboratively. Participants had mixed levels of prior experience with electronics, crafting, and mechanical design. Roles emerged organically, including designing the cardboard structure, assembling electronic components, and testing motor movement. Collaboration and peer learning were central features of the activity.

Validity note: Multiple participants contributed observations, reducing single-observer bias.
Transferability note: The activity is suitable for learners with varied technical backgrounds.

**O — Objects**

The main artifact produced was a cardboard Vitruvian Man model with movable arms and legs. Materials included:

  - Cardboard (body and limbs)
  - Small electronic motors
  - Power source (e.g., batteries)
  - Wires and simple connectors
  - Fasteners (brads, string, or joints enabling rotation)
  - The limbs were attached in a way that allowed rotational movement when motors were activated.

Reproducibility note: All materials are low-cost and widely available, making the setup easy to replicate.


**E — Environment**

  - The tinkering session took place in an indoor workspace with tables, shared tools, and enough room for group interaction. The environment allowed participants to freely move, test components, and iterate on their design without strict time pressure.

  Transferability note: The activity can be reproduced in classrooms, makerspaces, or informal learning environments.


**M — Messages**

Several key messages emerged through the activity:

  - Mechanical movement can be achieved using simple materials combined with basic electronics.
  - Trial-and-error is an effective strategy in tinkering and prototyping.
  - Collaboration improves problem-solving, especially when combining artistic and technical tasks.
  - Participants communicated frequently, sharing ideas, troubleshooting issues, and reflecting on what worked or failed.

  Validity note: Observed behaviors aligned with participants' verbal reflections during the session.


**S — Services (or Systems / Skills)**

The session supported the development of multiple skills:

  - Basic understanding of motor-driven movement
  - Hands-on problem solving
  - Collaborative design and iterative improvement
  - Connecting abstract concepts (human proportions, motion) to physical construction
  - The system as a whole demonstrated how artistic concepts (Vitruvian Man) can be integrated with simple engineering principles.
  - Reproducibility note: Following the same steps and division of tasks would likely lead to similar learning outcomes in another group.


**Reflection on Quality Criteria**

**Transferability:**
The activity can be adapted to different age groups, learning contexts, and levels of technical complexity by changing materials or motor types.

**Validity:**
Observations were based on direct participation, group discussion, and visible outcomes (working motorized limbs), ensuring alignment between observed actions and conclusions.

**Reproducibility:**
Because the materials, environment, and process are clearly described, another group could replicate the session and reasonably expect comparable results.`,
  },
  {
    id: "5.1",
    title: "Group Assignment: playground design",
    reflection:
      "This project explores the transformation of electromyography (EMG) signals into musical expression. By capturing electrical activity produced by muscle movements, the system interprets these biological signals and maps them to musical parameters such as pitch, rhythm, and dynamics. The result is an interactive interface where the human body becomes an instrument, translating subtle muscle activity into sound. This work sits at the intersection of biomedical sensing, signal processing, and creative technology, demonstrating how physiological data can be used to create new forms of musical interaction.",
    images: [
      {
        src: masteringTinkering,
        alt: "Mastering Tinkering playground design image 1",
        caption: "Cover page",
        aspectRatio: "auto",
        span: "wide",
      },
      {
        src: masteringTinkering1,
        alt: "Mastering Tinkering playground design image 2",
        caption: "Our idea",
        aspectRatio: "auto",
        span: "wide",
      },
      {
        src: masteringTinkering2,
        alt: "Mastering Tinkering playground design image 3",
        caption: "Materials",
        aspectRatio: "auto",
        span: "wide",
      },
      {
        src: masteringTinkering3,
        alt: "Mastering Tinkering playground design image 4",
        caption: "Scaffolding",
        aspectRatio: "auto",
        span: "wide",
      },
      {
        src: masteringTinkering4,
        alt: "Mastering Tinkering playground design image 5",
        caption: "Process",
        aspectRatio: "auto",
        span: "wide",
      },
      {
        src: masteringTinkering5,
        alt: "Mastering Tinkering playground design image 6",
        caption: "Expolration Space",
        aspectRatio: "auto",
        span: "wide",
      },
    ],
  },
  {
    id: "5.2",
    title: "Group Assignment: physical MVP, first iteration",
    date: "March 20th, 2026",
    reflection: `**Bio sensors**
The main idea of our playground design is one where the users place electronic components on their limbs to measure movement. This movement is converted into musical signals, with each limb tied to an instrument played through a buzzer, and pitch determined by the intensity of movement.

To design the Minimal Viable Product (MVP) that will be showcased during class, we used the brainstorming design method to generate ideas for the demonstration.

The main challenge we encountered during brainstorming was that obtaining EMG materials in a short timespan and with a small budget was not possible. Because of this, we decided to use strain gauges to acquire limb movement. These are easier to obtain and, when placed on articulations, can measure movement in the arms and legs.

**Scaffolding Materials**
The main scaffolding components will be a manual that explains sensor details, followed by starting exercises to help users get familiar with coding and sensor use in the demonstration. This requires creating a clear design and developing it into a practical manual, using references as guidance.

To support users, scaffolding is divided into two parts: a Visual Manual and Starting Exercises.

**The Manual**
The manual uses modular instructions to keep guidance simple and avoid overwhelming participants. It includes:
- Component map: A visual guide showing how to connect the sensors to the controller.
- Signals manual: A guide explaining how skin contact and sensor placement affect sound quality.
- Reference guide: Icons showing which movements create specific sounds.

**Starting Exercises**
These exercises provide a low threshold for beginners to get comfortable with the technology:
- First exercise: Users try to make a sound by flexing a muscle. This helps them understand sensor sensitivity.
- Second exercise: Users practice changing volume by moving from soft to hard flexes. This helps them understand how movement intensity changes the output.
- Third exercise: Users try to make different sounds using different muscles from different parts of the body (for example, arm and leg). This helps them learn the different sounds of each muscle.

These are the basic exercises. After participants complete them, additional exercises with elevated difficulty will be introduced.

**Scaffolding Strategies**
The manual also provides prompting questions to help participants who get stuck. Examples include:
- How does the sound change if you move the sensor slightly to the left?
- Could you use your legs for the beat while your arms control the melody?

This way, people who face problems can first try to solve them independently before asking for help.

**Materials**
It was decided that electrical components would replace musical instruments, since physical instruments would require many fabrication steps.

For electrical EMG signal replacement, strain gauges will be used because they are easier to wire and work in a similar way to the EMG signals that will be used later.

As the brain of the system, and to ensure signals are routed correctly and the setup works as intended, we will use an Arduino UNO. This is a microcontroller all of us have prior experience with, and it is well suited to this project. A small breadboard may also be needed to route cables and adjust electrical currents.

For instrument replacement, we will use a buzzer component that changes pitch based on the electrical signal. This will be controlled by the Arduino and the type of signal it forwards to the buzzer, based on signal strength and the specified code.`,
    images: [
      {
        src: groupProjectBioSensor,
        alt: "Group project bio sensor concept",
        caption: "Bio sensor concept",
        aspectRatio: "auto",
        span: "wide",
      },
    ],
  },
  {
    id: "5.3",
    title: "Group Assignment - complete design, digital poster",
    date: "March 30th, 2026",
    reflection: `This section presents the complete design concept and the final digital poster for our group assignment. It consolidates the core idea, system components, interaction flow, and scaffolding approach into one clear communication artifact for presentation.

The poster captures how body movement is translated into sound through sensor input and microcontroller processing, while also outlining the learning pathway for participants through guided exercises and support materials.`,
    images: [
      {
        src: poster,
        alt: "Complete design digital poster",
        caption: "Digital poster",
        aspectRatio: "auto",
        span: "wide",
      },
    ],
    subsections: [
      {
        title: "Workshop Exercise Guide",
        reflection:
          "The two pages of the workshop exercise guide are shown below for direct reference during setup and facilitation.",
        images: [
          {
            src: manualPage1,
            alt: "Workshop exercise guide page 1",
            caption: "Workshop exercise guide - page 1",
            aspectRatio: "auto",
            span: "wide",
          },
          {
            src: manualPage2,
            alt: "Workshop exercise guide page 2",
            caption: "Workshop exercise guide - page 2",
            aspectRatio: "auto",
            span: "wide",
          },
        ],
      },
    ],
  },
];

export const sections: SectionEntry[] = [...rawSections].sort(
  (a, b) => sectionSortValue(a.id) - sectionSortValue(b.id),
);
