import type { ComicPage, IssueMeta } from "./types";

const i10 = "/comic/i10";

export const ISSUE10: IssueMeta = {
  n: 10,
  title: "SKYBLOOD",
  issue: "Issue #10",
  book: "The Address",
  cover: `${i10}/cover.jpg`,
  logline:
    "W did not choose that road. Somebody gave him an address. The location has been closed for years. The same number once had his grandfather. DID NOT REPORT.",
};

export const pages10: ComicPage[] = [
  {
    id: "10-01",
    number: "1",
    act: "Act One — Crutches",
    layout: "splash",
    panels: [
      {
        art: `${i10}/home.jpg`,
        balloons: [
          { kind: "caption", text: "W is home." },
          { kind: "caption", text: "Irritated that everybody keeps asking." },
        ],
      },
    ],
  },
  {
    id: "10-02",
    number: "2",
    act: "Act One — Crutches",
    layout: "splash",
    panels: [
      {
        art: `${i10}/home.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "W", text: "You hear them knocks again?" },
          { kind: "speech", speaker: "Elias", text: "No." },
        ],
      },
    ],
  },
  {
    id: "10-03",
    number: "3",
    act: "Act One — Crutches",
    layout: "splash",
    panels: [
      {
        art: `${i10}/home.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "W", text: "Good." },
          { kind: "speech", speaker: "W", text: "You?" },
          { kind: "speech", speaker: "Elias", text: "No." },
        ],
      },
    ],
  },
  {
    id: "10-04",
    number: "4",
    act: "Act One — Crutches",
    layout: "spread",
    panels: [
      {
        art: `${i10}/cover.jpg`,
        balloons: [
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book Ten — The Address" },
        ],
      },
    ],
  },
  {
    id: "10-05",
    number: "5",
    act: "Act One — Crutches",
    layout: "splash",
    panels: [
      {
        art: `${i10}/home.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "W", text: "Somebody gave me an address. Before the station." },
          { kind: "speech", speaker: "Elias", text: "Who." },
          { kind: "speech", speaker: "W", text: "That’s the problem." },
        ],
      },
    ],
  },
  {
    id: "10-06",
    number: "6",
    act: "Act Two — The Paper",
    layout: "splash",
    panels: [
      {
        art: `${i10}/ops.jpg`,
        balloons: [
          { kind: "caption", text: "He remembers where it came from." },
          { kind: "caption", text: "Work." },
        ],
      },
    ],
  },
  {
    id: "10-07",
    number: "7",
    act: "Act Two — The Paper",
    layout: "splash",
    panels: [
      {
        art: `${i10}/form.jpg`,
        balloons: [
          { kind: "caption", text: "Day crew. Orientation." },
          { kind: "caption", text: "2417. The road he disappeared on." },
        ],
      },
    ],
  },
  {
    id: "10-08",
    number: "8",
    act: "Act Two — The Paper",
    layout: "splash",
    panels: [
      {
        art: `${i10}/ops.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Who entered the destination." },
          { kind: "speech", speaker: "Ops", text: "Computer. Routine." },
        ],
      },
    ],
  },
  {
    id: "10-09",
    number: "9",
    act: "Act Two — The Paper",
    layout: "splash",
    panels: [
      {
        art: `${i10}/ops.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "That location still active?" },
          { kind: "speech", speaker: "Ops", text: "No. Closed years ago." },
        ],
      },
    ],
  },
  {
    id: "10-10",
    number: "10",
    act: "Act Two — The Paper",
    layout: "splash",
    panels: [
      {
        art: `${i10}/form.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Ops", text: "That shouldn’t be in there." },
        ],
      },
    ],
  },
  {
    id: "10-11",
    number: "11",
    act: "Act Two — The Paper",
    layout: "splash",
    panels: [
      {
        art: `${i10}/ops.jpg`,
        balloons: [
          { kind: "caption", text: "They want a database error." },
          { kind: "speech", speaker: "Elias", text: "Who else got sent there." },
        ],
      },
    ],
  },
  {
    id: "10-12",
    number: "12",
    act: "Act Three — The List",
    layout: "splash",
    panels: [
      {
        art: `${i10}/archive.jpg`,
        balloons: [
          { kind: "caption", text: "He asks. Pushes. Waits." },
          { kind: "caption", text: "He does not punch a wall." },
        ],
      },
    ],
  },
  {
    id: "10-13",
    number: "13",
    act: "Act Three — The List",
    layout: "splash",
    panels: [
      {
        art: `${i10}/form.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "A handful. Years apart." },
          { kind: "caption", text: "Most corrected before anyone went." },
        ],
      },
    ],
  },
  {
    id: "10-14",
    number: "14",
    act: "Act Three — The List",
    layout: "splash",
    panels: [
      {
        art: `${i10}/form.jpg`,
        balloons: [
          { kind: "caption", text: "One wasn’t. W." },
          { kind: "caption", text: "Another. Older. The name is missing." },
        ],
      },
    ],
  },
  {
    id: "10-15",
    number: "15",
    act: "Act Three — The List",
    layout: "splash",
    panels: [
      {
        art: `${i10}/ops.jpg`,
        position: "left",
        balloons: [
          { kind: "speech", speaker: "Records", text: "Wait." },
          { kind: "speech", speaker: "Records", text: "Somebody got hurt near there. Years ago." },
        ],
      },
    ],
  },
  {
    id: "10-16",
    number: "16",
    act: "Act Four — The Number",
    layout: "splash",
    panels: [
      {
        art: `${i10}/fence.jpg`,
        balloons: [
          { kind: "caption", text: "Daylight. Fenced." },
          { kind: "caption", text: "He does not go in." },
        ],
      },
    ],
  },
  {
    id: "10-17",
    number: "17",
    act: "Act Four — The Number",
    layout: "splash",
    panels: [
      {
        art: `${i10}/seal.jpg`,
        balloons: [
          { kind: "caption", text: "The address is the old property." },
          { kind: "caption", text: "W was found behind it." },
        ],
      },
    ],
  },
  {
    id: "10-18",
    number: "18",
    act: "Act Four — The Number",
    layout: "splash",
    panels: [
      {
        art: `${i10}/seal.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "The old front. Sealed." },
          { kind: "caption", text: "The same number over the door." },
        ],
      },
    ],
  },
  {
    id: "10-19",
    number: "19",
    act: "Act Four — The Number",
    layout: "splash",
    panels: [
      {
        art: `${i10}/point.jpg`,
        balloons: [
          { kind: "speech", speaker: "Man", text: "Warehouse. Before that, something else." },
          { kind: "speech", speaker: "Elias", text: "You know him?" },
          { kind: "speech", speaker: "Man", text: "I know where he’s standing." },
        ],
      },
    ],
  },
  {
    id: "10-20",
    number: "20",
    act: "Act Four — The Number",
    layout: "splash",
    panels: [
      {
        art: `${i10}/point.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "Man", text: "A door." },
          { kind: "speech", speaker: "Elias", text: "To what." },
          { kind: "speech", speaker: "Man", text: "I don’t know." },
        ],
      },
    ],
  },
  {
    id: "10-21",
    number: "21",
    act: "Act Five — The Photograph",
    layout: "splash",
    panels: [
      {
        art: `${i10}/archive.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "Maps. Parcels. The street changed." },
          { kind: "caption", text: "The number kept showing up." },
        ],
      },
    ],
  },
  {
    id: "10-22",
    number: "22",
    act: "Act Five — The Photograph",
    layout: "splash",
    panels: [
      {
        art: `${i10}/photo.jpg`,
        balloons: [
          { kind: "caption", text: "Workers. Ordinary." },
          { kind: "caption", text: "Then a face he knows." },
        ],
      },
    ],
  },
  {
    id: "10-23",
    number: "23",
    act: "Act Five — The Photograph",
    layout: "splash",
    panels: [
      {
        art: `${i10}/mother.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "That’s my daddy." },
          { kind: "speech", speaker: "Elias", text: "He worked there?" },
        ],
      },
    ],
  },
  {
    id: "10-24",
    number: "24",
    act: "Act Five — The Photograph",
    layout: "splash",
    panels: [
      {
        art: `${i10}/mother.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You know that number?" },
          { kind: "speech", speaker: "Mother", text: "No." },
          { kind: "speech", speaker: "Elias", text: "Ma." },
          { kind: "speech", speaker: "Mother", text: "I said no." },
        ],
      },
    ],
  },
  {
    id: "10-25",
    number: "25",
    act: "Act Five — The Photograph",
    layout: "splash",
    panels: [
      {
        art: `${i10}/mother.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Your grandfather didn’t like storms." },
          { kind: "speech", speaker: "Mother", text: "He’d stand by the door. Listening." },
        ],
      },
    ],
  },
  {
    id: "10-26",
    number: "26",
    act: "Act Five — The Photograph",
    layout: "splash",
    panels: [
      {
        art: `${i10}/mother.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "For what." },
          { kind: "speech", speaker: "Mother", text: "Knocking." },
          { kind: "speech", speaker: "Mother", text: "He never opened the door." },
        ],
      },
    ],
  },
  {
    id: "10-27",
    number: "27",
    act: "Act Six — Open It",
    layout: "splash",
    panels: [
      {
        art: `${i10}/cover.jpg`,
        position: "center",
        balloons: [
          { kind: "sfx", text: "KNOCK KNOCK KNOCK" },
          { kind: "caption", text: "The front door. A storm. Real." },
        ],
      },
    ],
  },
  {
    id: "10-28",
    number: "28",
    act: "Act Six — Open It",
    layout: "splash",
    panels: [
      {
        art: `${i10}/cover.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Don’t." },
          { kind: "speech", speaker: "Mother", text: "Don’t open that door." },
        ],
      },
    ],
  },
  {
    id: "10-29",
    number: "29",
    act: "Act Six — Open It",
    layout: "splash",
    panels: [
      {
        art: `${i10}/delivery.jpg`,
        balloons: [
          { kind: "speech", speaker: "Driver", text: "Elias Marrow?" },
          { kind: "speech", speaker: "Elias", text: "Yeah." },
          { kind: "speech", speaker: "Driver", text: "Need a signature." },
        ],
      },
    ],
  },
  {
    id: "10-30",
    number: "30",
    act: "Act Six — Open It",
    layout: "splash",
    panels: [
      {
        art: `${i10}/sheet.jpg`,
        balloons: [
          { kind: "caption", text: "No return address." },
          { kind: "caption", text: "The dead work number. His grandfather. DID NOT REPORT." },
        ],
      },
    ],
  },
  {
    id: "10-31",
    number: "31",
    act: "Act Six — Open It",
    layout: "splash",
    panels: [
      {
        art: `${i10}/mother.jpg`,
        position: "left",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "You don’t open a door because somebody knocks?" },
          { kind: "speech", speaker: "Elias", text: "That’s generally how doors work." },
        ],
      },
    ],
  },
  {
    id: "10-32",
    number: "32",
    act: "Act Six — Open It",
    layout: "spread",
    panels: [
      {
        art: `${i10}/hall.jpg`,
        balloons: [
          { kind: "sfx", text: "KNOCK KNOCK KNOCK" },
          { kind: "caption", text: "Not the front door." },
          { kind: "caption", text: "Farther in. Pause. Three again." },
        ],
      },
    ],
  },
];
