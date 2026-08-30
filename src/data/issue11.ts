import type { ComicPage, IssueMeta } from "./types";

const i11 = "/comic/i11";
const i10 = "/comic/i10";

export const ISSUE11: IssueMeta = {
  n: 11,
  title: "SKYBLOOD",
  issue: "Issue #11",
  book: "The Room Behind the Wall",
  cover: `${i11}/cover.jpg`,
  logline:
    "The knocks are in the wall. A box. A notebook that heard three. A woman at the door. A duct that explains one sound and not the others. W: don’t open it.",
};

export const pages11: ComicPage[] = [
  {
    id: "11-01",
    number: "1",
    act: "Act One — The Wall",
    layout: "splash",
    panels: [
      {
        art: `${i11}/hall.jpg`,
        balloons: [
          { kind: "sfx", text: "KNOCK KNOCK KNOCK" },
          { kind: "caption", text: "Inside the house." },
        ],
      },
    ],
  },
  {
    id: "11-02",
    number: "2",
    act: "Act One — The Wall",
    layout: "splash",
    panels: [
      {
        art: `${i10}/hall.jpg`,
        balloons: [
          { kind: "caption", text: "Kitchen. Nothing." },
          { kind: "caption", text: "Hallway. Nothing." },
        ],
      },
    ],
  },
  {
    id: "11-03",
    number: "3",
    act: "Act One — The Wall",
    layout: "splash",
    panels: [
      {
        art: `${i11}/cavity.jpg`,
        balloons: [
          { kind: "sfx", text: "KNOCK KNOCK KNOCK" },
          { kind: "caption", text: "The wall." },
        ],
      },
    ],
  },
  {
    id: "11-04",
    number: "4",
    act: "Act One — The Wall",
    layout: "spread",
    panels: [
      {
        art: `${i11}/cover.jpg`,
        balloons: [
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book Eleven — The Room Behind the Wall" },
        ],
      },
    ],
  },
  {
    id: "11-05",
    number: "5",
    act: "Act One — The Wall",
    layout: "splash",
    panels: [
      {
        art: `${i11}/hall.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Leave it." },
          { kind: "speech", speaker: "Elias", text: "You know what’s back there?" },
          { kind: "speech", speaker: "Mother", text: "No." },
        ],
      },
    ],
  },
  {
    id: "11-06",
    number: "6",
    act: "Act One — The Wall",
    layout: "splash",
    panels: [
      {
        art: `${i11}/cavity.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "Solid. Then hollow." },
          {
            kind: "speech",
            speaker: "Elias",
            text: "For ten issues everybody been telling me what not to look at.",
          },
        ],
      },
    ],
  },
  {
    id: "11-07",
    number: "7",
    act: "Act One — The Wall",
    layout: "splash",
    panels: [
      {
        art: `${i11}/cover.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "Dust. Old framing. A box." },
          { kind: "caption", text: "No glow." },
        ],
      },
    ],
  },
  {
    id: "11-08",
    number: "8",
    act: "Act Two — The Box",
    layout: "splash",
    panels: [
      {
        art: `${i11}/box.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You know this?" },
          { kind: "caption", text: "She sits. That is an answer." },
        ],
      },
    ],
  },
  {
    id: "11-09",
    number: "9",
    act: "Act Two — The Box",
    layout: "splash",
    panels: [
      {
        art: `${i11}/box.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "How it get in my wall." },
          { kind: "speech", speaker: "Mother", text: "I don’t know." },
        ],
      },
    ],
  },
  {
    id: "11-10",
    number: "10",
    act: "Act Two — The Box",
    layout: "splash",
    panels: [
      {
        art: `${i11}/box.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "ID. Receipts. Notebook. Key. Photographs. Paper." },
          { kind: "caption", text: "No costume." },
        ],
      },
    ],
  },
  {
    id: "11-11",
    number: "11",
    act: "Act Two — The Box",
    layout: "splash",
    panels: [
      {
        art: `${i11}/notes.jpg`,
        balloons: [
          { kind: "caption", text: "Hours. Loads. Weather." },
          { kind: "caption", text: "Pressure early. Wind wrong. Clouds holding." },
        ],
      },
    ],
  },
  {
    id: "11-12",
    number: "12",
    act: "Act Two — The Box",
    layout: "splash",
    panels: [
      {
        art: `${i11}/notes.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "Not his words." },
          { kind: "caption", text: "His thoughts." },
          { kind: "speech", speaker: "Elias", text: "Nothing." },
        ],
      },
    ],
  },
  {
    id: "11-13",
    number: "13",
    act: "Act Three — Voss",
    layout: "splash",
    panels: [
      {
        art: `${i11}/cavity.jpg`,
        position: "bottom",
        balloons: [
          { kind: "sfx", text: "KNOCK KNOCK KNOCK" },
          { kind: "caption", text: "Not this wall anymore. The front door." },
        ],
      },
    ],
  },
  {
    id: "11-14",
    number: "14",
    act: "Act Three — Voss",
    layout: "splash",
    panels: [
      {
        art: `${i11}/voss.jpg`,
        balloons: [
          { kind: "speech", speaker: "Voss", text: "Dr. Mara Voss. Historical preservation." },
          { kind: "speech", speaker: "Voss", text: "2417." },
        ],
      },
    ],
  },
  {
    id: "11-15",
    number: "15",
    act: "Act Three — Voss",
    layout: "splash",
    panels: [
      {
        art: `${i11}/voss.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "How you know that." },
          { kind: "speech", speaker: "Voss", text: "People remember a six-foot-four man asking unusual questions." },
        ],
      },
    ],
  },
  {
    id: "11-16",
    number: "16",
    act: "Act Three — Voss",
    layout: "splash",
    panels: [
      {
        art: `${i11}/voss.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Do I know you?" },
          { kind: "speech", speaker: "Voss", text: "No, ma’am." },
        ],
      },
    ],
  },
  {
    id: "11-17",
    number: "17",
    act: "Act Three — Voss",
    layout: "splash",
    panels: [
      {
        art: `${i11}/voss.jpg`,
        balloons: [
          { kind: "speech", speaker: "Voss", text: "Structurally dangerous. That’s all." },
          { kind: "caption", text: "She sees a corner of the notebook." },
        ],
      },
    ],
  },
  {
    id: "11-18",
    number: "18",
    act: "Act Three — Voss",
    layout: "splash",
    panels: [
      {
        art: `${i11}/hall.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "She lying." },
          { kind: "speech", speaker: "Elias", text: "She looked at the book." },
        ],
      },
    ],
  },
  {
    id: "11-19",
    number: "19",
    act: "Act Three — Voss",
    layout: "splash",
    panels: [
      {
        art: `${i11}/car.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You take something out my house?" },
          { kind: "speech", speaker: "Voss", text: "If you think I stole something, call the police." },
        ],
      },
    ],
  },
  {
    id: "11-20",
    number: "20",
    act: "Act Three — Voss",
    layout: "splash",
    panels: [
      {
        art: `${i11}/floor.jpg`,
        balloons: [
          { kind: "caption", text: "The notebook is on the floor." },
          { kind: "caption", text: "He was wrong." },
        ],
      },
    ],
  },
  {
    id: "11-21",
    number: "21",
    act: "Act Four — What He Knows",
    layout: "splash",
    panels: [
      {
        art: `${i10}/mother.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Mother",
            text: "You looking so hard for something, everything start looking like it.",
          },
        ],
      },
    ],
  },
  {
    id: "11-22",
    number: "22",
    act: "Act Four — What He Knows",
    layout: "splash",
    panels: [
      {
        art: `${i11}/notes.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "HEARD 3." },
          { kind: "caption", text: "DIDN’T ANSWER. ANSWERED. NOTHING." },
        ],
      },
    ],
  },
  {
    id: "11-23",
    number: "23",
    act: "Act Four — What He Knows",
    layout: "splash",
    panels: [
      {
        art: `${i11}/notes.jpg`,
        balloons: [
          { kind: "caption", text: "HEARD 3. ELIAS SAFE." },
          { kind: "caption", text: "The date is before he was born." },
        ],
      },
    ],
  },
  {
    id: "11-24",
    number: "24",
    act: "Act Four — What He Knows",
    layout: "splash",
    panels: [
      {
        art: `${i11}/notes.jpg`,
        position: "right",
        balloons: [
          { kind: "caption", text: "Later hand. Smaller." },
          { kind: "caption", text: "NOT A NAME." },
          { kind: "speech", speaker: "Elias", text: "What else does Elias mean." },
        ],
      },
    ],
  },
  {
    id: "11-25",
    number: "25",
    act: "Act Five — The Key",
    layout: "splash",
    panels: [
      {
        art: `${i11}/key.jpg`,
        balloons: [
          { kind: "caption", text: "A locker key. A number. No decoration." },
          { kind: "caption", text: "He does not need a myth. He needs a locker." },
        ],
      },
    ],
  },
  {
    id: "11-26",
    number: "26",
    act: "Act Five — The Key",
    layout: "splash",
    panels: [
      {
        art: `${i11}/box.jpg`,
        balloons: [
          { kind: "sfx", text: "KNOCK KNOCK KNOCK" },
          { kind: "caption", text: "The box. Empty. Then the floor vent." },
        ],
      },
    ],
  },
  {
    id: "11-27",
    number: "27",
    act: "Act Five — The Key",
    layout: "splash",
    panels: [
      {
        art: `${i11}/duct.jpg`,
        balloons: [
          { kind: "caption", text: "Loose duct. Pressure. Three hits." },
          { kind: "speech", speaker: "Mother", text: "So all this—" },
          { kind: "speech", speaker: "Elias", text: "No." },
        ],
      },
    ],
  },
  {
    id: "11-28",
    number: "28",
    act: "Act Five — The Key",
    layout: "splash",
    panels: [
      {
        art: `${i11}/duct.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "He fixes it. The house goes quiet." },
          { kind: "caption", text: "The wall knocked before the weather." },
        ],
      },
    ],
  },
  {
    id: "11-29",
    number: "29",
    act: "Act Six — Don’t Open It",
    layout: "splash",
    panels: [
      {
        art: `${i11}/hall.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "You at home?" },
          { kind: "speech", speaker: "W", text: "Somebody just knocked on my door three times." },
        ],
      },
    ],
  },
  {
    id: "11-30",
    number: "30",
    act: "Act Six — Don’t Open It",
    layout: "splash",
    panels: [
      {
        art: `${i11}/key.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Don’t open it." },
          { kind: "speech", speaker: "Elias", text: "I’m coming." },
        ],
      },
    ],
  },
  {
    id: "11-31",
    number: "31",
    act: "Act Six — Don’t Open It",
    layout: "splash",
    panels: [
      {
        art: `${i11}/notes.jpg`,
        position: "left",
        balloons: [
          { kind: "caption", text: "He does not see the margin." },
          { kind: "caption", text: "A doorway under three points." },
        ],
      },
    ],
  },
  {
    id: "11-32",
    number: "32",
    act: "Act Six — Don’t Open It",
    layout: "spread",
    panels: [
      {
        art: `${i11}/peep.jpg`,
        balloons: [
          { kind: "sfx", text: "KNOCK KNOCK KNOCK" },
          { kind: "speech", speaker: "W", text: "Man… what the hell you doing here?" },
        ],
      },
    ],
  },
];
