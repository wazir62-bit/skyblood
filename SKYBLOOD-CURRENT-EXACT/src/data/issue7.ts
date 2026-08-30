import type { ComicPage, IssueMeta } from "./types";

const i7 = "/comic/i7";

export const ISSUE7: IssueMeta = {
  n: 7,
  title: "SKYBLOOD",
  issue: "Issue #7",
  book: "The Table",
  cover: `${i7}/cover.jpg`,
  logline:
    "They come for the kitchen. They take the print. They do not take her. Paper is not the pans.",
};

export const pages7: ComicPage[] = [
  {
    id: "7-01",
    number: "1",
    act: "Act One — Knock",
    layout: "splash",
    panels: [
      {
        art: `${i7}/table.jpg`,
        balloons: [
          { kind: "caption", text: "Day." },
          { kind: "caption", text: "The copy is on the table." },
        ],
      },
    ],
  },
  {
    id: "7-02",
    number: "2",
    act: "Act One — Knock",
    layout: "splash",
    panels: [
      {
        art: `${i7}/clock.jpg`,
        balloons: [
          { kind: "caption", text: "He is at the hub." },
          { kind: "caption", text: "The vest is still a vest." },
        ],
      },
    ],
  },
  {
    id: "7-03",
    number: "3",
    act: "Act One — Knock",
    layout: "splash",
    panels: [
      {
        art: `${i7}/knock.jpg`,
        balloons: [
          { kind: "sfx", text: "KNOCK" },
          { kind: "caption", text: "Two men. Daylight. Not a freeze." },
        ],
      },
    ],
  },
  {
    id: "7-04",
    number: "4",
    act: "Act One — Knock",
    layout: "spread",
    panels: [
      {
        art: `${i7}/cover.jpg`,
        balloons: [
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book Seven — The Table" },
        ],
      },
    ],
  },
  {
    id: "7-05",
    number: "5",
    act: "Act One — Knock",
    layout: "splash",
    panels: [
      {
        art: `${i7}/knock.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "Official", text: "Records retrieval." },
          { kind: "speech", speaker: "Official", text: "The photocopy is company property." },
        ],
      },
    ],
  },
  {
    id: "7-06",
    number: "6",
    act: "Act One — Knock",
    layout: "splash",
    panels: [
      {
        art: `${i7}/knock.jpg`,
        position: "left",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "You don’t have my name." },
        ],
      },
    ],
  },
  {
    id: "7-07",
    number: "7",
    act: "Act One — Knock",
    layout: "splash",
    panels: [
      {
        art: `${i7}/call.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "They’re here." },
          { kind: "caption", text: "He is already moving." },
        ],
      },
    ],
  },
  {
    id: "7-08",
    number: "8",
    act: "Act One — Knock",
    layout: "splash",
    panels: [
      {
        art: `${i7}/call.jpg`,
        position: "right",
        balloons: [
          { kind: "caption", text: "He does not look at the sky." },
          { kind: "caption", text: "He looks at the road home." },
        ],
      },
    ],
  },
  {
    id: "7-09",
    number: "9",
    act: "Act Two — They Think Paper Is a Person",
    layout: "splash",
    panels: [
      {
        art: `${i7}/table.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "The print is still on the wood." },
          { kind: "caption", text: "They came for that." },
        ],
      },
    ],
  },
  {
    id: "7-10",
    number: "10",
    act: "Act Two — They Think Paper Is a Person",
    layout: "splash",
    panels: [
      {
        art: `${i7}/take.jpg`,
        balloons: [
          { kind: "speech", speaker: "Official", text: "Obstruction. Then retrieval." },
        ],
      },
    ],
  },
  {
    id: "7-11",
    number: "11",
    act: "Act Two — They Think Paper Is a Person",
    layout: "splash",
    panels: [
      {
        art: `${i7}/sister.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Give it to them." },
          { kind: "speech", speaker: "Sister", text: "If paper is all they want—" },
        ],
      },
    ],
  },
  {
    id: "7-12",
    number: "12",
    act: "Act Two — They Think Paper Is a Person",
    layout: "splash",
    panels: [
      {
        art: `${i7}/sink.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Paper is never all they want." },
        ],
      },
    ],
  },
  {
    id: "7-13",
    number: "13",
    act: "Act Two — They Think Paper Is a Person",
    layout: "splash",
    panels: [
      {
        art: `${i7}/cover.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "He is in the kitchen." },
          { kind: "caption", text: "Vest on. Still a vest." },
        ],
      },
    ],
  },
  {
    id: "7-14",
    number: "14",
    act: "Act Two — They Think Paper Is a Person",
    layout: "splash",
    panels: [
      {
        art: `${i7}/take.jpg`,
        position: "left",
        balloons: [
          { kind: "caption", text: "He does not say her name." },
          { kind: "caption", text: "Not for them." },
        ],
      },
    ],
  },
  {
    id: "7-15",
    number: "15",
    act: "Act Three — The Table",
    layout: "splash",
    panels: [
      {
        art: `${i7}/take.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "A hand on the print." },
          { kind: "caption", text: "Not his." },
        ],
      },
    ],
  },
  {
    id: "7-16",
    number: "16",
    act: "Act Three — The Table",
    layout: "splash",
    panels: [
      {
        art: `${i7}/take.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "That’s a kitchen." },
        ],
      },
    ],
  },
  {
    id: "7-17",
    number: "17",
    act: "Act Three — The Table",
    layout: "splash",
    panels: [
      {
        art: `${i7}/take.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "He does not make a wind." },
          { kind: "caption", text: "He does not make a title." },
        ],
      },
    ],
  },
  {
    id: "7-18",
    number: "18",
    act: "Act Three — The Table",
    layout: "splash",
    panels: [
      {
        art: `${i7}/empty.jpg`,
        balloons: [
          { kind: "caption", text: "They take the print." },
          { kind: "caption", text: "The table keeps the shape." },
        ],
      },
    ],
  },
  {
    id: "7-19",
    number: "19",
    act: "Act Three — The Table",
    layout: "splash",
    panels: [
      {
        art: `${i7}/knock.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Official", text: "Retrieved." },
        ],
      },
    ],
  },
  {
    id: "7-20",
    number: "20",
    act: "Act Three — The Table",
    layout: "splash",
    panels: [
      {
        art: `${i7}/sink.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "You took paper." },
          { kind: "speech", speaker: "Mother", text: "You didn’t take her." },
        ],
      },
    ],
  },
  {
    id: "7-21",
    number: "21",
    act: "Act Four — Paper Isn’t the Pans",
    layout: "splash",
    panels: [
      {
        art: `${i7}/empty.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "The wood is empty." },
          { kind: "caption", text: "The house is not." },
        ],
      },
    ],
  },
  {
    id: "7-22",
    number: "22",
    act: "Act Four — Paper Isn’t the Pans",
    layout: "splash",
    panels: [
      {
        art: `${i7}/folder.jpg`,
        balloons: [
          { kind: "speech", speaker: "Contractor", text: "We retrieved the record." },
        ],
      },
    ],
  },
  {
    id: "7-23",
    number: "23",
    act: "Act Four — Paper Isn’t the Pans",
    layout: "splash",
    panels: [
      {
        art: `${i7}/call.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You retrieved paper." },
        ],
      },
    ],
  },
  {
    id: "7-24",
    number: "24",
    act: "Act Four — Paper Isn’t the Pans",
    layout: "splash",
    panels: [
      {
        art: `${i7}/sister.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Then we say it louder." },
          { kind: "speech", speaker: "Elias", text: "Not tonight." },
        ],
      },
    ],
  },
  {
    id: "7-25",
    number: "25",
    act: "Act Four — Paper Isn’t the Pans",
    layout: "splash",
    panels: [
      {
        art: `${i7}/sink.jpg`,
        position: "right",
        balloons: [
          { kind: "caption", text: "She washes a plate." },
          { kind: "caption", text: "That is also a record." },
        ],
      },
    ],
  },
  {
    id: "7-26",
    number: "26",
    act: "Act Four — Paper Isn’t the Pans",
    layout: "splash",
    panels: [
      {
        art: `${i7}/clock.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "He clocks back in." },
          { kind: "caption", text: "Last off the field. Still." },
        ],
      },
    ],
  },
  {
    id: "7-27",
    number: "27",
    act: "Act Five — Two Records",
    layout: "splash",
    panels: [
      {
        art: `${i7}/scale.jpg`,
        balloons: [
          { kind: "caption", text: "Their envelope at the basin." },
          { kind: "caption", text: "The wash does not keep it." },
        ],
      },
    ],
  },
  {
    id: "7-28",
    number: "28",
    act: "Act Five — Two Records",
    layout: "splash",
    panels: [
      {
        art: `${i7}/scale.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "The pans catch." },
          { kind: "caption", text: "Not a tick." },
        ],
      },
    ],
  },
  {
    id: "7-29",
    number: "29",
    act: "Act Five — Two Records",
    layout: "splash",
    panels: [
      {
        art: `${i7}/empty.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "The gap on the crew wall waits." },
          { kind: "caption", text: "He does not say it." },
        ],
      },
    ],
  },
  {
    id: "7-30",
    number: "30",
    act: "Act Five — Two Records",
    layout: "splash",
    panels: [
      {
        art: `${i7}/table.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "They have a print." },
          { kind: "caption", text: "They do not have a mouth." },
        ],
      },
    ],
  },
  {
    id: "7-31",
    number: "31",
    act: "Act Five — Two Records",
    layout: "splash",
    panels: [
      {
        art: `${i7}/sink.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Delete it never worked." },
          { kind: "speech", speaker: "Mother", text: "Taking it won’t either." },
        ],
      },
    ],
  },
  {
    id: "7-32",
    number: "32",
    act: "Act Five — Two Records",
    layout: "spread",
    panels: [
      {
        art: `${i7}/empty.jpg`,
        balloons: [
          { kind: "caption", text: "They came for the kitchen. They left with paper." },
          { kind: "caption", text: "The name is still in the house." },
        ],
      },
    ],
  },
];
