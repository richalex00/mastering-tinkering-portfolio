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
import newPoster from "@/assets/new poster.png";
import brokenSystemSketch from "@/assets/broken system sketch.jpeg";
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
import designlab1 from "@/assets/designlab1.jpeg";
import designlab2 from "@/assets/designlab2.jpeg";
import designlab3 from "@/assets/designlab3.jpeg";
import designlab4 from "@/assets/designlab4.jpeg";
import designlab5 from "@/assets/designlab5.jpeg";
import designlab6 from "@/assets/designlab6.jpeg";
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
    reflection: `Two tinkering spaces were identified as central to my practice: a shared workshop environment at the university and a personal workspace at home.

The shared workshop environment supports tinkering through its physical setup: tables arranged for group work, materials distributed across the space, and the presence of peers who naturally take on informal facilitation roles. The environment lowers the entry threshold by making materials immediately available, and the shared setting encourages spontaneous iteration and serendipitous exchange, both key characteristics of the tinkering process.

The personal workspace operates differently. Its primary tinkering quality is accessibility: it is always available and imposes no formal structure, making it well suited for low-stakes, early-stage exploration. However, the toolbox is limited to basic digital and craft materials, which constrains the depth of material exploration possible. Without a richer set of physical building blocks, the opportunities for hands-on experimentation are more restricted than in a dedicated workshop setting.

Both spaces reflect distinct components of the tinkering playground: the shared environment provides toolbox richness and facilitation; the personal space provides the accessible, low-threshold starting point for initial tinkering. A more detailed evaluation of these two environments against the full framework is carried out in section 1.2.`,
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
        caption: "My personal workspace: informal and accessible, but limited in materials and toolbox diversity",
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

In contrast, the shared workspace in the Design Lab provides a much richer toolbox, including access to machines, materials, and collaborative input. This environment better supports material exploration and prototyping, which are key aspects of tinkering. The presence of others also introduces an informal facilitator role, where feedback and discussion help guide the process and stimulate new ideas.

Looking at both spaces, I notice that each supports different aspects of tinkering. My personal space enables quick and independent exploration, while the Design Lab supports more structured experimentation and complex making. However, both spaces could be improved: my personal workspace lacks tools and materials, while the shared space could benefit from being more accessible for spontaneous use.

Overall, this comparison shows that an effective tinkering environment requires a balance between accessibility, a rich toolbox, and opportunities for experimentation and reflection. The photos above, taken during a revisit to the Design Lab, replace the initial images from section 1.1 and better represent the available toolbox in that space.`,
    images: [
      {
        src: designlab1,
        alt: "Design Lab printer and large-format paper cutter station",
        caption: "Design Lab: printer and paper cutter station, supporting 2D fabrication and material preparation",
        aspectRatio: "landscape",
      },
      {
        src: designlab2,
        alt: "Design Lab soldering stations with magnifying lamps and bench power supplies",
        caption: "Design Lab: dedicated soldering stations for electronics assembly and circuit prototyping",
        aspectRatio: "landscape",
      },
      {
        src: designlab3,
        alt: "Design Lab materials and components available for use",
        caption: "Design Lab: material toolbox available to students",
        aspectRatio: "landscape",
      },
      {
        src: designlab4,
        alt: "Design Lab laser cutter with a rack of sheet timber stock available to students",
        caption: "Design Lab: laser cutter and timber stock, enabling precision cutting of wood and other sheet materials",
        aspectRatio: "landscape",
      },
      {
        src: designlab5,
        alt: "Design Lab fabrics section with a large cutting table, fabric rolls, and a pegboard of tools",
        caption: "Design Lab: fabrics section with cutting table and sewing materials, supporting textile-based making",
        aspectRatio: "landscape",
      },
      {
        src: designlab6,
        alt: "Design Lab bank of multiple 3D printers lined up along a workbench",
        caption: "Design Lab: multiple 3D printers available for rapid prototyping and iterative physical form-making",
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
        alt: "Hand-drawn brainstorm sketches exploring building block shapes and connection concepts",
        caption: "Building block brainstorm",
        aspectRatio: "landscape",
      },
      {
        src: sketch2,
        alt: "Sketches exploring different geometric block form variations",
        caption: "Block shape ideas",
        aspectRatio: "landscape",
      },
      {
        src: sketch3,
        alt: "Sketch showing connection groove concepts cut into the block faces",
        caption: "Connection grooves",
        aspectRatio: "landscape",
      },
      {
        src: sketchmissing,
        alt: "Sketch showing the iterative evolution of the connection point design",
        caption: "Connection point evolution",
        aspectRatio: "landscape",
      },
      {
        src: sketch4,
        alt: "Sketch drawing on mycelium growth structures as inspiration for organic material and form",
        caption: "Mycelium material inspiration",
        aspectRatio: "landscape",
      },
      {
        src: sketch5,
        alt: "Sketch exploring interlocking edge configurations between block units",
        caption: "Interlocking edges",
        aspectRatio: "landscape",
      },
      {
        src: sketch6,
        alt: "Final building block concept sketch consolidating form, connections, and material choices",
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

The design emphasizes adaptability over precision. Instead of defining a single way of building, the block functions as infrastructure for experimentation. This iteration builds directly on the shape explorations from section 2.1 and the physical prototype developed in section 2.2.`,
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
    reflection: `This table summarises the material properties identified through hands-on experimentation during the course session, along with scored examples of materials that rank especially high or low for each property.

The properties were developed to evaluate how well a given tinkering material supports open-ended exploration, iteration, and the development of material knowledge: the tacit, experiential understanding of how a material behaves that can only be acquired through direct interaction. For each property, examples drawn from established tinkering sets (such as LEGO, LittleBits, and Meccano) were assessed. Basic materials such as paper or clay, while valuable as components within a set, were not evaluated in isolation, as they do not in themselves provide sufficient structure to constitute a meaningful tinkering toolbox.

The table functions as an analytical framework for selecting or designing materials that support effective tinkering, and forms the basis for the extended property set developed in section 3.2, as well as the wide walls examples explored in section 3.3.`,
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
        alt: "LEGO tree scene built during the class session, demonstrating modifiability and familiar connection points",
        caption: "LEGO: high modifiability, familiar connection points, diverse output from a shared brick set",
        aspectRatio: "landscape",
      },
      {
        src: tinkering2,
        alt: "LittleBits kit with magnetic snap-together modules and colour-coded component reference cards",
        caption: "LittleBits: low threshold via colour-coded modules and magnetic snap connections, with a well-organised toolbox",
        aspectRatio: "landscape",
      },
      {
        src: tinkering3,
        alt: "Session tinkering table with multiple material kits laid out for evaluation",
        caption: "Session tinkering table: the shared toolbox available to all groups during the evaluation exercise",
        aspectRatio: "landscape",
      },
      {
        src: tinkering4,
        alt: "Meccano kit case with a small wheeled vehicle assembled from metal parts and fasteners",
        caption: "Meccano: fastener-based mechanical connections; structural and mechanical outputs with a higher assembly threshold",
        aspectRatio: "landscape",
      },
      {
        src: tinkering5,
        alt: "Makeblock session setup with sensor modules, wiring, and an electronic controller on a work table",
        caption: "Makeblock: higher technical complexity and longer feedback loops than snap-together alternatives; rewards persistence",
        aspectRatio: "landscape",
      },
      {
        src: tinkering6,
        alt: "Arduino beginner kit with board, cables, and component packaging laid out on a table",
        caption: "Arduino: low-level programmable electronics with a steeper initial threshold than higher-abstraction kits",
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
            alt: "Labeled diagram of the Scratch editor showing the Blocks Palette, Scripts Area, Stage, and Sprites List",
            caption: "The Scratch editor: a shared set of blocks that can be assembled in limitless combinations",
            aspectRatio: "landscape",
          },
          {
            src: scratch2,
            alt: "The Scratch cat mascot next to a laptop running a platformer game built in Scratch",
            caption: "A game built in Scratch — one of many possible project types created from the same block palette",
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
            alt: "Hands playing a cardboard piano Toy-Con with the Nintendo Switch screen embedded, running a music game",
            caption: "The Labo piano Toy-Con: cardboard folded into a musical instrument, brought to life by the Switch",
            aspectRatio: "landscape",
          },
          {
            src: nintendo2,
            alt: "A cardboard fishing rod Toy-Con with the Nintendo Switch as the screen showing an underwater fishing game",
            caption: "The Labo fishing rod: a completely different device built from the same cardboard kit as the piano",
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
            alt: "A tall, symmetrical KEVA plank structure with wing-like extensions, balanced without any connectors",
            caption: "A freestanding KEVA structure: identical planks balanced into a complex architectural form without connectors",
            aspectRatio: "landscape",
          },
          {
            src: keva2,
            alt: "KEVA Planks product packaging showing a Roman column building structure on the box",
            caption: "KEVA Planks packaging: the same set of identical planks used to recreate classical Roman column architecture",
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
    reflection: `For this assignment I designed and realised a physical metaphor that explains how an API enables communication between different software systems. The choice of a tangible, physical medium is deliberate: as the course framework notes, physical objects engage the brain differently from written or on-screen representations, and hands-on material supports the development of intuitive understanding in a way that abstract diagrams typically do not. A physical metaphor therefore functions as scaffolding, lowering the threshold for grasping an abstract concept by grounding it in something that can be seen, pointed at, and spatially reasoned about.

LEGO was selected as the construction material because its affordances directly support the metaphor. Individual bricks can be assembled, separated, and rearranged without damage, mirroring how software components interact while remaining decoupled from one another. Its familiar, low-threshold character also ensures that a viewer's attention stays on the programming concept being communicated rather than on the material itself, which is essential for scaffolding material to function effectively.

The blue building on the left represents the client application (such as a website or mobile app). This is the system that wants to request information or functionality from another system.

A minifigure pushing a trolley with a blue block represents a request. The blue block symbolizes the data or instruction being sent from the client to the API.

Before the request can continue, it must pass an authentication check, represented by the guard minifigure holding a speaker. This reflects how APIs often require authentication (such as API keys or tokens) to verify whether the request is allowed.

The grey arches represent the API gateway, which acts as the controlled interface between the client and the server. Requests must pass through this gate rather than directly accessing the backend system.

The boxes beside the gate represent the API specification or contract, which defines the rules for how requests must be structured and what actions are allowed.

Behind the gate is the backend processing system, represented by a robotic structure connected with pipes. This symbolizes the internal logic that processes the request and interacts with the server or database, represented by the connected blocks.

Finally, the system produces a response, shown as a crate containing either a green block (success) or a red block (failure). This response is returned to the client after the request has been processed.

This metaphor focuses on the programming concepts of request/response communication, authentication, system interfaces, and backend processing, demonstrating how APIs control the flow of information between software systems. The choice of LEGO as material relates to the wide walls analysis in section 3.3, where LEGO is discussed as a tinkering material that supports diverse construction with a single shared toolbox. The design methods that informed this approach are mapped in section 4.1.`,
    images: [
      {
        src: lego1,
        alt: "Close-up of the LEGO API metaphor showing the authentication guard, API gateway arches, and backend processing system",
        caption: "The authentication checkpoint and API gateway: requests must pass through the guarded grey arch before reaching the backend",
        aspectRatio: "landscape",
      },
      {
        src: lego2,
        alt: "Full view of the LEGO API metaphor showing client application on the left, the request journey, gateway, and backend on the right",
        caption: "Full API metaphor: client (blue building, left) sends a request through the gateway to the backend processing system (right)",
        aspectRatio: "landscape",
      },
      {
        src: lego3,
        alt: "Alternative angle of the LEGO API metaphor showing a rearranged iteration of the client, gateway, and backend components",
        caption: "Iterative rearrangement of the metaphor: LEGO's reassembly without damage mirrors how software components can be decoupled and reconfigured",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "4.1",
    title: "Overview on Design Methods",
    date: "March 20th, 2026",
    reflection: `The mind map above organises six design methods by their relationships and distinguishing characteristics, mapping where they overlap, diverge, and connect to the tinkering mindset.

Several methods cluster around shared values. Rapid prototyping and iterative design are closely related: both are action-oriented and rely on cycles of making and evaluating. Iterative design extends rapid prototyping by treating each cycle as input to the next rather than as a standalone test. Both share significant common ground with tinkering, particularly in their emphasis on short feedback loops, hands-on exploration, and treating incomplete or failed attempts as productive steps rather than setbacks.

Research through design differs in that its primary output is knowledge rather than a solution. The making process itself is the method of inquiry, which closely parallels the tinkering principle of discovery through material interaction: understanding emerges from doing, not from pre-defined hypothesis testing.

Co-design introduces a social dimension, involving users or stakeholders as active contributors to the design process. This parallels the facilitator and environment components of the tinkering framework, where shared engagement shapes the direction of exploration and informal facilitation can emerge from within the group.

Brainstorming and critical design occupy more divergent positions. Brainstorming is primarily a generative, seed-like technique that opens up the solution space but does not itself constitute an iterative design process. Critical design, by contrast, is reflective and deliberately speculative: it challenges assumptions rather than solving problems, and its outcomes are often intentionally non-functional.

---

**Brainstorming**: A divergent thinking technique for generating a large number of ideas rapidly and without judgment. In a tinkering context it functions most naturally as a seed: a prompt that opens up the exploration space before a direction is chosen.

**Co-design**: A participatory approach in which users or stakeholders contribute directly to the design process. The shared engagement introduces informal facilitation dynamics and distributes ownership of outcomes.

**Critical Design**: A speculative practice that uses designed artifacts to question assumptions, provoke reflection, and explore alternative possibilities rather than deliver functional solutions.

**Research Through Design**: A methodology in which knowledge is generated through the process of designing and making. The artifact and its development are treated as a form of research output, not merely a product.

**Rapid Prototyping**: The rapid construction of physical or digital models to test ideas, supporting fast experimentation and low-cost iteration.

**Iterative Design**: A cyclical approach in which designs are repeatedly built, tested, evaluated, and refined. Each iteration informs the next, converging progressively toward a more effective outcome.

The three tinkering playground designs in section 4.2 apply several of these methods directly, particularly rapid prototyping and iterative design, to problems in the field of interaction technology.`,
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
        images: [
          {
            src: brokenSystemSketch,
            alt: "Broken system sketch",
            caption: "Broken system sketch",
            aspectRatio: "auto",
            span: "wide",
          },
        ],
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
        alt: "Students gathered around a large table, collaboratively wiring and assembling electronic components during the group tinkering session",
        caption: "Group session overview: multiple teams working simultaneously with wired electronics and physical constructions",
        aspectRatio: "landscape",
      },
      {
        src: tinkeringGroup1,
        alt: "Cardboard components mid-build including a circular base with a drawn human figure, before wiring",
        caption: "Body instrument mid-build: the circular cardboard base with human figure before sensor wiring begins",
        aspectRatio: "landscape",
      },
      {
        src: tinkeringGroup2,
        alt: "Hands connecting orange wires to the cardboard human figure, integrating the electronic sensors",
        caption: "Wiring phase: connecting sensors to the body instrument, translating the physical figure into an electronic interface",
        aspectRatio: "landscape",
      },
      {
        src: tinkeringGroup3,
        alt: "Completed cardboard body instrument with wiring, connected to a controller and remote, ready for testing",
        caption: "Completed body instrument: fully wired and connected to a controller, ready for the testing and presentation phase",
        aspectRatio: "landscape",
      },
    ],
    postTitle: "POEMS Observation Report",
    postReflection: `Project: Cardboard Vitruvian Man with Motorized Limbs
Context: Group tinkering session involving mechanical construction and basic electronics


**P: Participants**

The session involved a small group of learners working collaboratively. Participants had mixed levels of prior experience with electronics, crafting, and mechanical design. Roles emerged organically, including designing the cardboard structure, assembling electronic components, and testing motor movement. Collaboration and peer learning were central features of the activity.

Validity note: Multiple participants contributed observations, reducing single-observer bias.
Transferability note: The activity is suitable for learners with varied technical backgrounds.

**O: Objects**

The main artifact produced was a cardboard Vitruvian Man model with movable arms and legs. Materials included:

  - Cardboard (body and limbs)
  - Small electronic motors
  - Power source (e.g., batteries)
  - Wires and simple connectors
  - Fasteners (brads, string, or joints enabling rotation)
  - The limbs were attached in a way that allowed rotational movement when motors were activated.

Reproducibility note: All materials are low-cost and widely available, making the setup easy to replicate.


**E: Environment**

  - The tinkering session took place in an indoor workspace with tables, shared tools, and enough room for group interaction. The environment allowed participants to freely move, test components, and iterate on their design without strict time pressure.

  Transferability note: The activity can be reproduced in classrooms, makerspaces, or informal learning environments.


**M: Messages**

Several key messages emerged through the activity:

  - Mechanical movement can be achieved using simple materials combined with basic electronics.
  - The session involved iterative experimentation characteristic of a tinkering process, distinct from trial-and-error in that progress was driven by observation and reflection, not simply by repeating attempts until something worked.
  - Collaboration improves problem-solving, especially when combining artistic and technical tasks.
  - Participants communicated frequently, sharing ideas, troubleshooting issues, and reflecting on what worked or failed.

  Validity note: Observed behaviors aligned with participants' verbal reflections during the session.


**S: Services (or Systems / Skills)**

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
        alt: "Title slide for the Muscle Music components playground design",
        caption: "Playground design title slide: Muscle Music components, University of Twente",
        aspectRatio: "auto",
        span: "wide",
      },
      {
        src: masteringTinkering1,
        alt: "Slide explaining the core idea: using EMG muscle signals to generate musical sound as an interactive interface",
        caption: "Core concept: EMG signals from muscle movement used as input to generate and control musical sound",
        aspectRatio: "auto",
        span: "wide",
      },
      {
        src: masteringTinkering2,
        alt: "Playground materials slide showing the seed, prompt, and toolbox components of the tinkering framework",
        caption: "Playground structure: seed (flex arm to produce a beat), prompt (what sound configurations work best), toolbox (EMG electrodes, controller, sound library, speakers)",
        aspectRatio: "auto",
        span: "wide",
      },
      {
        src: masteringTinkering3,
        alt: "Scaffolding slide showing facilitator support actions: demonstrating EMG examples, listing starting ideas, guiding groups toward diverse outputs",
        caption: "Facilitator scaffolding: demonstrating EMG signals, providing starting idea lists, and guiding groups toward diverse musical outputs",
        aspectRatio: "auto",
        span: "wide",
      },
      {
        src: masteringTinkering4,
        alt: "Process slide showing session location setup and timing breakdown across introduction, exploration, building, and presentation phases",
        caption: "Session structure: four group tables, one EMG demo station, one materials table; timed phases from sensor exploration (15 min) to instrument building (65 min)",
        aspectRatio: "auto",
        span: "wide",
      },
      {
        src: masteringTinkering5,
        alt: "Exploration space slide mapping the design domain, adjacent fields, and exploration possibilities for the playground",
        caption: "Exploration space: domain (human-computer interaction), adjacent fields (music tech, wearable tech, haptics), and possibilities (muscle synthesizers, wearable instruments, rehabilitation tools)",
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
        src: newPoster,
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
  {
    id: "5.4",
    title: "Group Project - Evaluation",
    reflection: `The initial idea was to create a way for people without much musical expertise to experiment with music creation. The goal was to design a playground that requires less prior knowledge than a traditional instrument, lowering the barrier to entry while still leaving room for genuine musical expression.

To achieve this, the playground makes use of EMG technology to read muscle signals directly from the user's body. The interaction is intentionally intuitive: users start by creating simple beats with a single limb, then gradually layer in additional muscle signals to build more complex, melodic structures. The underlying principle is that the body itself becomes the instrument, no learned technique required to get started, but enough depth to reward experimentation and practice over time.

The following subsections present a structured evaluation of this playground, carried out with another group as external test participants. The focus is on critical performance (high ceiling, wide walls) rather than surface-level confirmation.`,
    images: [],
    subsections: [
      {
        title: "Design Description",
        reflection: `Our design evolved from a simple sensor-to-computer setup into an autonomous wearable instrument. The first version required a laptop connection, which immediately revealed a problem: users were physically constrained and couldn't move freely, which defeated the purpose of a wearable. This motivated the switch to a battery-powered system, making the device fully standalone.

A second significant change came when we got access to a speaker. Replacing the buzzer wasn't just a component swap; the speaker allowed for continuous pitch variation driven by muscle tension, which is what made it feel like an actual instrument rather than a trigger device. The circuit was kept deliberately minimal and visible so that users could understand what they were interacting with without prior explanation.`,
        images: [],
      },
      {
        title: "Evaluation Method",
        reflection: `We conducted an evaluation using two different perspectives. First, our own group tested everything internally: verifying signal stability, checking that all components behaved as expected under sustained use, and confirming the basic interaction loop worked.

Then, three students from another group acted as guinea pigs. They were given the electrodes and a one-sentence explanation of placement, with no further guidance, to test the interaction cold. This external phase allowed us to observe the low threshold and high ceiling from an outside perspective. We focused observations on three criteria:

- **Setup efficiency:** timing how long it took a non-expert to correctly place the electrodes on the bone and muscle.
- **Intuitive mapping:** observing whether the user could instinctively correlate muscle tension with speaker pitch without external guidance.
- **Performance range:** testing whether users could intentionally produce three distinct musical notes.

By using this two-step approach we were able to move from functional confirmation to a critical analysis of the playground's actual performance limits.`,
        images: [],
      },
      {
        title: "Evaluation Results",
        reflection: `**Low Threshold**

Observation: All three testers triggered a sound within 5 seconds of having the electrodes connected.

Critical analysis: While the entry barrier is low, the fixed gain was too high for some stronger users, causing the signal to saturate quickly. This suggests a need for an adjustable gain in future iterations to accommodate different body types.

---

**Wide Walls**

Observation: Users moved beyond simple "on/off" triggers and began creating rhythmic patterns.

Critical analysis: The walls are currently constrained by the output of the speaker. While users could play sounds, they could not play chords. To widen the walls, the system should be mapped to a MIDI polyphonic synthesizer, allowing muscle intensity to control more parameters than just pitch.

---

**High Ceiling**

Observation: After a few minutes of practice, users started using the sensor like a real instrument, creating rhythms.

Critical analysis: The ceiling is currently limited by muscle fatigue. To hit the highest notes the user has to squeeze very hard, which causes hand tremor and makes the sound glitchy. This is a genuine physical constraint of the EMG interaction model, not a software problem; solving it would likely require gesture-based note selection rather than pure intensity mapping.`,
        images: [],
      },
    ],
  },
];

export const sections: SectionEntry[] = [...rawSections].sort(
  (a, b) => sectionSortValue(a.id) - sectionSortValue(b.id),
);
