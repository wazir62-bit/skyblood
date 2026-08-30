import type { ComicPage, IssueMeta } from "./types";

const i6 = "/comic/i6";

export const ISSUE6: IssueMeta = {
  n: 6,
  title: "SKYBLOOD",
  issue: "Issue #6",
  book: "They Filed It",
  cover: `${i6}/cover.jpg`,
  logline:
    "They filed a copy of Mae. They filed the crew as a team. He takes the print by hand. The house will not take their envelope.",
};

export const pages6: ComicPage[] = [
  {
    id: "6-01",
    number: "1",
    act: "Act One — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i6}/filed.jpg`,
        balloons: [
          { kind: "caption", text: "The line is empty." },
          { kind: "caption", text: "The stamp is not." },
        ],
      },
    ],
  },
  {
    id: "6-02",
    number: "2",
    act: "Act One — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i6}/clock.jpg`,
        balloons: [
          { kind: "caption", text: "He clocks in." },
          { kind: "caption", text: "The vest is still a vest." },
        ],
      },
    ],
  },
  {
    id: "6-03",
    number: "3",
    act: "Act One — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i6}/copy.jpg`,
        balloons: [
          { kind: "caption", text: "In their folder: a washed print." },
          { kind: "caption", text: "1996. She had a camera." },
        ],
      },
    ],
  },
  {
    id: "6-04",
    number: "4",
    act: "Act One — The Copy",
    layout: "spread",
    panels: [
      {
        art: `${i6}/cover.jpg`,
        balloons: [
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book Six — They Filed It" },
        ],
      },
    ],
  },
  {
    id: "6-05",
    number: "5",
    act: "Act One — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i6}/dezform.jpg`,
        balloons: [
          { kind: "speech", speaker: "Dez", text: "They put my name on a team." },
        ],
      },
    ],
  },
  {
    id: "6-06",
    number: "6",
    act: "Act One — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i6}/wform.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Mine too. Weather response." },
          { kind: "speech", speaker: "W", text: "I don’t do that." },
        ],
      },
    ],
  },
  {
    id: "6-07",
    number: "7",
    act: "Act One — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i6}/take.jpg`,
        balloons: [
          { kind: "speech", speaker: "Contractor", text: "You made a team." },
          { kind: "speech", speaker: "Contractor", text: "We filed a team." },
        ],
      },
    ],
  },
  {
    id: "6-08",
    number: "8",
    act: "Act One — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i6}/copy.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "Then he sees her." },
          { kind: "caption", text: "Not a name on a form. The print." },
        ],
      },
    ],
  },
  {
    id: "6-09",
    number: "9",
    act: "Act Two — He Takes It",
    layout: "splash",
    panels: [
      {
        art: `${i6}/wform.jpg`,
        position: "left",
        balloons: [
          { kind: "speech", speaker: "W", text: "That’s not ops." },
        ],
      },
    ],
  },
  {
    id: "6-10",
    number: "10",
    act: "Act Two — He Takes It",
    layout: "splash",
    panels: [
      {
        art: `${i6}/take.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "Contractor", text: "Historical weather. Family. Pattern." },
          { kind: "caption", text: "They want her in their book." },
        ],
      },
    ],
  },
  {
    id: "6-11",
    number: "11",
    act: "Act Two — He Takes It",
    layout: "splash",
    panels: [
      {
        art: `${i6}/clock.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "He does not say her name here." },
          { kind: "caption", text: "The heart does not testify." },
        ],
      },
    ],
  },
  {
    id: "6-12",
    number: "12",
    act: "Act Two — He Takes It",
    layout: "splash",
    panels: [
      {
        art: `${i6}/take.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "His hand is on the paper." },
          { kind: "caption", text: "Not a spell. A theft." },
        ],
      },
    ],
  },
  {
    id: "6-13",
    number: "13",
    act: "Act Two — He Takes It",
    layout: "splash",
    panels: [
      {
        art: `${i6}/take.jpg`,
        position: "left",
        balloons: [
          { kind: "caption", text: "He takes the copy." },
          { kind: "caption", text: "Human." },
        ],
      },
    ],
  },
  {
    id: "6-14",
    number: "14",
    act: "Act Two — He Takes It",
    layout: "splash",
    panels: [
      {
        art: `${i6}/empty.jpg`,
        balloons: [
          { kind: "caption", text: "The folder is light." },
          { kind: "speech", speaker: "Contractor", text: "That’s obstruction." },
        ],
      },
    ],
  },
  {
    id: "6-15",
    number: "15",
    act: "Act Three — The House",
    layout: "splash",
    panels: [
      {
        art: `${i6}/official.jpg`,
        balloons: [
          { kind: "caption", text: "They sent a man to the door." },
          { kind: "caption", text: "Another copy." },
        ],
      },
    ],
  },
  {
    id: "6-16",
    number: "16",
    act: "Act Three — The House",
    layout: "splash",
    panels: [
      {
        art: `${i6}/official.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "You don’t have my name." },
          { kind: "speech", speaker: "Mother", text: "You don’t have hers." },
        ],
      },
    ],
  },
  {
    id: "6-17",
    number: "17",
    act: "Act Three — The House",
    layout: "splash",
    panels: [
      {
        art: `${i6}/porch.jpg`,
        balloons: [
          { kind: "caption", text: "He comes from the hub with the print." },
          { kind: "caption", text: "Rain on the vest. Still a vest." },
        ],
      },
    ],
  },
  {
    id: "6-18",
    number: "18",
    act: "Act Three — The House",
    layout: "splash",
    panels: [
      {
        art: `${i6}/sister.jpg`,
        balloons: [
          { kind: "caption", text: "An envelope on the floor." },
          { kind: "speech", speaker: "Sister", text: "If they already have her—" },
        ],
      },
    ],
  },
  {
    id: "6-19",
    number: "19",
    act: "Act Three — The House",
    layout: "splash",
    panels: [
      {
        art: `${i6}/porch.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Not tonight." },
        ],
      },
    ],
  },
  {
    id: "6-20",
    number: "20",
    act: "Act Three — The House",
    layout: "splash",
    panels: [
      {
        art: `${i6}/kitchen.jpg`,
        balloons: [
          { kind: "caption", text: "The copy goes on the table." },
          { kind: "caption", text: "Beside the fridge. In the house that said her name." },
        ],
      },
    ],
  },
  {
    id: "6-21",
    number: "21",
    act: "Act Four — Not Yours",
    layout: "splash",
    panels: [
      {
        art: `${i6}/empty.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Contractor", text: "That’s still obstruction." },
        ],
      },
    ],
  },
  {
    id: "6-22",
    number: "22",
    act: "Act Four — Not Yours",
    layout: "splash",
    panels: [
      {
        art: `${i6}/kitchen.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "That’s a kitchen." },
        ],
      },
    ],
  },
  {
    id: "6-23",
    number: "23",
    act: "Act Four — Not Yours",
    layout: "splash",
    panels: [
      {
        art: `${i6}/wform.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "W", text: "I clocked in." },
          { kind: "speech", speaker: "W", text: "That’s the part." },
        ],
      },
    ],
  },
  {
    id: "6-24",
    number: "24",
    act: "Act Four — Not Yours",
    layout: "splash",
    panels: [
      {
        art: `${i6}/dezform.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "Dez", text: "I’m not a team." },
        ],
      },
    ],
  },
  {
    id: "6-25",
    number: "25",
    act: "Act Four — Not Yours",
    layout: "splash",
    panels: [
      {
        art: `${i6}/filed.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "They filed it." },
          { kind: "caption", text: "He did not sign." },
        ],
      },
    ],
  },
  {
    id: "6-26",
    number: "26",
    act: "Act Four — Not Yours",
    layout: "splash",
    panels: [
      {
        art: `${i6}/clock.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "They can stamp a living name." },
          { kind: "caption", text: "They cannot stamp a mouth." },
        ],
      },
    ],
  },
  {
    id: "6-27",
    number: "27",
    act: "Act Five — Two Records",
    layout: "splash",
    panels: [
      {
        art: `${i6}/scale.jpg`,
        balloons: [
          { kind: "caption", text: "The wash will not keep their copy." },
        ],
      },
    ],
  },
  {
    id: "6-28",
    number: "28",
    act: "Act Five — Two Records",
    layout: "splash",
    panels: [
      {
        art: `${i6}/scale.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "The pans catch." },
          { kind: "caption", text: "Not a tick." },
        ],
      },
    ],
  },
  {
    id: "6-29",
    number: "29",
    act: "Act Five — Two Records",
    layout: "splash",
    panels: [
      {
        art: `${i6}/kitchen.jpg`,
        position: "left",
        balloons: [
          { kind: "caption", text: "The print is in the house." },
          { kind: "caption", text: "The gap on the crew wall waits. He does not say it." },
        ],
      },
    ],
  },
  {
    id: "6-30",
    number: "30",
    act: "Act Five — Two Records",
    layout: "splash",
    panels: [
      {
        art: `${i6}/official.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "The envelope stays in his hand." },
          { kind: "caption", text: "The door stays a door." },
        ],
      },
    ],
  },
  {
    id: "6-31",
    number: "31",
    act: "Act Five — Two Records",
    layout: "splash",
    panels: [
      {
        art: `${i6}/wform.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "W", text: "Don’t be interesting." },
          { kind: "speech", speaker: "Elias", text: "Too late." },
        ],
      },
    ],
  },
  {
    id: "6-32",
    number: "32",
    act: "Act Five — Two Records",
    layout: "spread",
    panels: [
      {
        art: `${i6}/cover.jpg`,
        balloons: [
          { kind: "caption", text: "They filed it. He did not sign." },
          { kind: "caption", text: "The copy is in the house. The column still wants a pole." },
        ],
      },
    ],
  },
];
