import type { ComicPage, IssueMeta } from "./types";

const i4 = "/comic/i4";

export const ISSUE4: IssueMeta = {
  n: 4,
  title: "SKYBLOOD",
  issue: "Issue #4",
  book: "The Next Line",
  cover: `${i4}/cover.jpg`,
  logline:
    "The form already has Mae Marrow. They want the receiver of record. Ink will not take a name nobody addressed.",
};

export const pages4: ComicPage[] = [
  {
    id: "4-01",
    number: "1",
    act: "Act One — Receiver of Record",
    layout: "splash",
    panels: [
      {
        art: `${i4}/blank.jpg`,
        balloons: [
          { kind: "caption", text: "The blank is still the threat." },
        ],
      },
    ],
  },
  {
    id: "4-02",
    number: "2",
    act: "Act One — Receiver of Record",
    layout: "splash",
    panels: [
      {
        art: `${i4}/vest.jpg`,
        balloons: [
          { kind: "caption", text: "He clocks in. The vest is still a vest." },
        ],
      },
    ],
  },
  {
    id: "4-03",
    number: "3",
    act: "Act One — Receiver of Record",
    layout: "splash",
    panels: [
      {
        art: `${i4}/apron.jpg`,
        balloons: [
          { kind: "caption", text: "Ordinary shift. Ordinary rain. He does not command it." },
        ],
      },
    ],
  },
  {
    id: "4-04",
    number: "4",
    act: "Act One — Receiver of Record",
    layout: "spread",
    panels: [
      {
        art: `${i4}/rain.jpg`,
        balloons: [
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book Four — The Next Line" },
        ],
      },
    ],
  },
  {
    id: "4-05",
    number: "5",
    act: "Act One — Receiver of Record",
    layout: "splash",
    panels: [
      {
        art: `${i4}/office.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Contractor",
            text: "Weighing in progress requires a receiver of record.",
          },
          { kind: "speech", speaker: "Elias", text: "I clocked in." },
        ],
      },
    ],
  },
  {
    id: "4-06",
    number: "6",
    act: "Act One — Receiver of Record",
    layout: "splash",
    panels: [
      {
        art: `${i4}/office.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "Contractor", text: "Who received Mae Marrow." },
          { kind: "speech", speaker: "Elias", text: "I’m not going to help you write the next line." },
        ],
      },
    ],
  },
  {
    id: "4-07",
    number: "7",
    act: "Act Two — Inventory",
    layout: "splash",
    panels: [
      {
        art: `${i4}/writer.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Contractor",
            text: "The house that said a name has a mother in it.",
          },
          { kind: "caption", text: "He does not have her name. He has a function." },
        ],
      },
    ],
  },
  {
    id: "4-08",
    number: "8",
    act: "Act Two — Inventory",
    layout: "splash",
    panels: [
      {
        art: `${i4}/door.jpg`,
        balloons: [
          { kind: "sfx", text: "knock." },
          { kind: "speech", speaker: "Contractor", text: "I need the receiver of record." },
        ],
      },
    ],
  },
  {
    id: "4-09",
    number: "9",
    act: "Act Two — Inventory",
    layout: "splash",
    panels: [
      {
        art: `${i4}/door.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "You can stay on that side." },
          { kind: "speech", speaker: "Mother", text: "You will not list me." },
        ],
      },
    ],
  },
  {
    id: "4-10",
    number: "10",
    act: "Act Two — Inventory",
    layout: "splash",
    panels: [
      {
        art: `${i4}/sister.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Then write me." },
          { kind: "speech", speaker: "Sister", text: "I’m already in the house. Let me receive." },
        ],
      },
    ],
  },
  {
    id: "4-11",
    number: "11",
    act: "Act Two — Inventory",
    layout: "splash",
    panels: [
      {
        art: `${i4}/kitchen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "I will not make you a door." },
          { kind: "speech", speaker: "Elias", text: "The circuit is a choice. Not tonight." },
        ],
      },
    ],
  },
  {
    id: "4-12",
    number: "12",
    act: "Act Two — Inventory",
    layout: "splash",
    panels: [
      {
        art: `${i4}/sister.jpg`,
        position: "top",
        balloons: [
          { kind: "speech", speaker: "Sister", text: "So she gets hunted and I get protected." },
          { kind: "speech", speaker: "Elias", text: "You get time. That’s not the same as being erased." },
        ],
      },
    ],
  },
  {
    id: "4-13",
    number: "13",
    act: "Act Three — Ink That Will Not Take",
    layout: "splash",
    panels: [
      {
        art: `${i4}/writer.jpg`,
        position: "center",
        balloons: [
          {
            kind: "caption",
            text: "He tries the line anyway. Not a true name. A function. Household. Receiver of record.",
          },
        ],
      },
    ],
  },
  {
    id: "4-14",
    number: "14",
    act: "Act Three — Ink That Will Not Take",
    layout: "splash",
    panels: [
      {
        art: `${i4}/blank.jpg`,
        balloons: [
          { kind: "caption", text: "The ink beads. It will not become letters." },
          {
            kind: "caption",
            text: "A close without a name is a theft. The paper knows it even if he does not.",
          },
        ],
      },
    ],
  },
  {
    id: "4-15",
    number: "15",
    act: "Act Three — Ink That Will Not Take",
    layout: "spread",
    panels: [
      {
        art: `${i4}/ink.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "Recognition-light on Mae Marrow. Not on the blank. Not on his eyes. Not on his skin.",
          },
        ],
      },
    ],
  },
  {
    id: "4-16",
    number: "16",
    act: "Act Three — Ink That Will Not Take",
    layout: "splash",
    panels: [
      {
        art: `${i4}/window.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "Pressure. Inner ear. The glass twitches toward his breath and stops. He looks away.",
          },
        ],
      },
    ],
  },
  {
    id: "4-17",
    number: "17",
    act: "Act Three — Ink That Will Not Take",
    layout: "splash",
    panels: [
      {
        art: `${i4}/crew.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "The other gap is still empty. He can see a first name in it. He does not say it.",
          },
        ],
      },
    ],
  },
  {
    id: "4-18",
    number: "18",
    act: "Act Four — Refusal",
    layout: "splash",
    panels: [
      {
        art: `${i4}/office.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Contractor",
            text: "Then the weighing remains open. That’s not a threat. That’s a status.",
          },
          { kind: "speech", speaker: "Elias", text: "Keep it open." },
        ],
      },
    ],
  },
  {
    id: "4-19",
    number: "19",
    act: "Act Four — Refusal",
    layout: "splash",
    panels: [
      {
        art: `${i4}/kitchen.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Mother",
            text: "You don’t have my name. You’re not getting it.",
          },
          { kind: "speech", speaker: "Elias", text: "I won’t address it either." },
        ],
      },
    ],
  },
  {
    id: "4-20",
    number: "20",
    act: "Act Four — Refusal",
    layout: "splash",
    panels: [
      {
        art: `${i4}/kitchen.jpg`,
        position: "left",
        balloons: [
          {
            kind: "speech",
            speaker: "Mother",
            text: "If you say it, they can find it. Names are how the sky keeps a body.",
          },
          { kind: "caption", text: "She taught him that. She will not be the next body." },
        ],
      },
    ],
  },
  {
    id: "4-21",
    number: "21",
    act: "Act Four — Refusal",
    layout: "splash",
    panels: [
      {
        art: `${i4}/porch.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "When is it my turn." },
          {
            kind: "speech",
            speaker: "Elias",
            text: "When you choose. And when someone receives you. Not because a clipboard is hungry.",
          },
        ],
      },
    ],
  },
  {
    id: "4-22",
    number: "22",
    act: "Act Four — Refusal",
    layout: "splash",
    panels: [
      {
        art: `${i4}/porch.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Sister", text: "You’re still just a cargo worker." },
          { kind: "speech", speaker: "Elias", text: "That’s the part I’m keeping." },
        ],
      },
    ],
  },
  {
    id: "4-23",
    number: "23",
    act: "Act Five — Open",
    layout: "splash",
    panels: [
      {
        art: `${i4}/rain.jpg`,
        balloons: [
          { kind: "sfx", text: "rain" },
          { kind: "caption", text: "Ordinary Memphis rain. It still does not obey him." },
        ],
      },
    ],
  },
  {
    id: "4-24",
    number: "24",
    act: "Act Five — Open",
    layout: "splash",
    panels: [
      {
        art: `${i4}/letters.jpg`,
        balloons: [
          { kind: "caption", text: "Far from Memphis, the wound does not finish the name." },
        ],
      },
    ],
  },
  {
    id: "4-25",
    number: "25",
    act: "Act Five — Open",
    layout: "splash",
    panels: [
      {
        art: `${i4}/apron.jpg`,
        balloons: [
          { kind: "caption", text: "He clocks back in. Same kit. No suit-up." },
        ],
      },
    ],
  },
  {
    id: "4-26",
    number: "26",
    act: "Act Five — Open",
    layout: "splash",
    panels: [
      {
        art: `${i4}/blank.jpg`,
        position: "right",
        balloons: [
          { kind: "caption", text: "Mae Marrow. Then a blank. The blank held." },
        ],
      },
    ],
  },
  {
    id: "4-27",
    number: "27",
    act: "Act Five — Open",
    layout: "splash",
    panels: [
      {
        art: `${i4}/kitchen.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Mother",
            text: "We did not close it. We did not let them steal a close.",
          },
          { kind: "speech", speaker: "Elias", text: "Then we don’t give them the next name." },
        ],
      },
    ],
  },
  {
    id: "4-28",
    number: "28",
    act: "Act Five — Open",
    layout: "splash",
    panels: [
      {
        art: `${i4}/crew.jpg`,
        balloons: [
          { kind: "caption", text: "The crew gap waits. He still does not fill it in." },
        ],
      },
    ],
  },
  {
    id: "4-29",
    number: "29",
    act: "Act Five — Open",
    layout: "splash",
    panels: [
      {
        art: `${i4}/window.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "He looks away before the glass can finish looking back." },
        ],
      },
    ],
  },
  {
    id: "4-30",
    number: "30",
    act: "Act Five — Open",
    layout: "splash",
    panels: [
      {
        art: `${i4}/writer.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "The contractor puts the clipboard in a case. Status: open. He will be back.",
          },
        ],
      },
    ],
  },
  {
    id: "4-31",
    number: "31",
    act: "Act Five — Open",
    layout: "splash",
    panels: [
      {
        art: `${i4}/letters.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "The stone is not finished. Neither is the house." },
        ],
      },
    ],
  },
  {
    id: "4-32",
    number: "32",
    act: "Act Five — Open",
    layout: "spread",
    panels: [
      {
        art: `${i4}/scale.jpg`,
        balloons: [
          { kind: "caption", text: "The scale tries to drop. It catches. Mid-motion. Still not a second tick." },
          { kind: "caption", text: "TO BE CONTINUED" },
        ],
      },
    ],
  },
];
