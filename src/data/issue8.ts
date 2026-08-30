import type { ComicPage, IssueMeta } from "./types";

const i8 = "/comic/i8";

export const ISSUE8: IssueMeta = {
  n: 8,
  title: "SKYBLOOD",
  issue: "Issue #8",
  book: "The Other Road",
  cover: `${i8}/cover.jpg`,
  logline:
    "W is moved to days. The timestamps were true. He stops turning the sky into a log. When the klaxon is real, nobody walks toward him. He walks anyway.",
};

export const pages8: ComicPage[] = [
  {
    id: "8-01",
    number: "1",
    act: "Act One — Coffee",
    layout: "splash",
    panels: [
      {
        art: `${i8}/coffee.jpg`,
        balloons: [
          { kind: "caption", text: "Night." },
          { kind: "caption", text: "W is where W is." },
        ],
      },
    ],
  },
  {
    id: "8-02",
    number: "2",
    act: "Act One — Coffee",
    layout: "splash",
    panels: [
      {
        art: `${i8}/coffee.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "W", text: "Sort’s heavy." },
          { kind: "speech", speaker: "Elias", text: "Yeah." },
        ],
      },
    ],
  },
  {
    id: "8-03",
    number: "3",
    act: "Act One — Coffee",
    layout: "splash",
    panels: [
      {
        art: `${i8}/sense.jpg`,
        balloons: [
          { kind: "caption", text: "Pressure drops in his jaw." },
          { kind: "caption", text: "The board has not caught it." },
        ],
      },
    ],
  },
  {
    id: "8-04",
    number: "4",
    act: "Act One — Coffee",
    layout: "spread",
    panels: [
      {
        art: `${i8}/cover.jpg`,
        balloons: [
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book Eight — The Other Road" },
        ],
      },
    ],
  },
  {
    id: "8-05",
    number: "5",
    act: "Act One — Coffee",
    layout: "splash",
    panels: [
      {
        art: `${i8}/coffee.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "It’s coming early." },
          { kind: "speech", speaker: "W", text: "I’ll keep an eye." },
        ],
      },
    ],
  },
  {
    id: "8-06",
    number: "6",
    act: "Act One — Coffee",
    layout: "splash",
    panels: [
      {
        art: `${i8}/chock-l.jpg`,
        balloons: [
          { kind: "caption", text: "He works. W works." },
        ],
      },
    ],
  },
  {
    id: "8-07",
    number: "7",
    act: "Act One — Coffee",
    layout: "splash",
    panels: [
      {
        art: `${i8}/coffee.jpg`,
        position: "left",
        balloons: [
          { kind: "caption", text: "End of shift." },
          { kind: "caption", text: "Two vests. Same road." },
        ],
      },
    ],
  },
  {
    id: "8-08",
    number: "8",
    act: "Act Two — The Hole",
    layout: "splash",
    panels: [
      {
        art: `${i8}/wrong.jpg`,
        balloons: [
          { kind: "caption", text: "Next night." },
          { kind: "caption", text: "He looks for W." },
        ],
      },
    ],
  },
  {
    id: "8-09",
    number: "9",
    act: "Act Two — The Hole",
    layout: "splash",
    panels: [
      {
        art: `${i8}/wrong.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You seen—" },
          { kind: "caption", text: "The man in W’s paint is not W." },
        ],
      },
    ],
  },
  {
    id: "8-10",
    number: "10",
    act: "Act Two — The Hole",
    layout: "splash",
    panels: [
      {
        art: `${i8}/geom.jpg`,
        balloons: [
          { kind: "speech", speaker: "New lead", text: "I’m covering nights." },
          { kind: "speech", speaker: "New lead", text: "They moved him." },
        ],
      },
    ],
  },
  {
    id: "8-11",
    number: "11",
    act: "Act Two — The Hole",
    layout: "splash",
    panels: [
      {
        art: `${i8}/ops.jpg`,
        balloons: [
          { kind: "speech", speaker: "Ops", text: "Weather restriction." },
          { kind: "speech", speaker: "Ops", text: "Days. For now." },
        ],
      },
    ],
  },
  {
    id: "8-12",
    number: "12",
    act: "Act Two — The Hole",
    layout: "splash",
    panels: [
      {
        art: `${i8}/form.jpg`,
        balloons: [
          { kind: "caption", text: "His timestamps." },
          { kind: "caption", text: "Printed. True." },
        ],
      },
    ],
  },
  {
    id: "8-13",
    number: "13",
    act: "Act Two — The Hole",
    layout: "splash",
    panels: [
      {
        art: `${i8}/ops.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Ops", text: "You called it early. That’s in the log." },
          { kind: "speech", speaker: "Ops", text: "I can’t leave him as night lead on that." },
        ],
      },
    ],
  },
  {
    id: "8-14",
    number: "14",
    act: "Act Two — The Hole",
    layout: "splash",
    panels: [
      {
        art: `${i8}/ops.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "I was trying to keep people." },
          { kind: "speech", speaker: "Ops", text: "I know. That’s why." },
        ],
      },
    ],
  },
  {
    id: "8-15",
    number: "15",
    act: "Act Three — Days",
    layout: "splash",
    panels: [
      {
        art: `${i8}/days.jpg`,
        balloons: [
          { kind: "caption", text: "Sun. Wrong light." },
          { kind: "caption", text: "W on days." },
        ],
      },
    ],
  },
  {
    id: "8-16",
    number: "16",
    act: "Act Three — Days",
    layout: "splash",
    panels: [
      {
        art: `${i8}/days.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "W", text: "They’ve got numbers." },
          { kind: "speech", speaker: "W", text: "Not mad at you." },
        ],
      },
    ],
  },
  {
    id: "8-17",
    number: "17",
    act: "Act Three — Days",
    layout: "splash",
    panels: [
      {
        art: `${i8}/form.jpg`,
        position: "right",
        balloons: [
          { kind: "caption", text: "Effective: Tuesday." },
          { kind: "caption", text: "Incident they cite: Wednesday." },
        ],
      },
    ],
  },
  {
    id: "8-18",
    number: "18",
    act: "Act Three — Days",
    layout: "splash",
    panels: [
      {
        art: `${i8}/form.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "A day early." },
          { kind: "caption", text: "Or a clerk’s hand." },
        ],
      },
    ],
  },
  {
    id: "8-19",
    number: "19",
    act: "Act Three — Days",
    layout: "splash",
    panels: [
      {
        art: `${i8}/days.jpg`,
        position: "left",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "The date’s wrong." },
          { kind: "speech", speaker: "W", text: "Dates get wrong." },
        ],
      },
    ],
  },
  {
    id: "8-20",
    number: "20",
    act: "Act Three — Days",
    layout: "splash",
    panels: [
      {
        art: `${i8}/cover.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "He does not know which." },
          { kind: "caption", text: "The other road is empty either way." },
        ],
      },
    ],
  },
  {
    id: "8-21",
    number: "21",
    act: "Act Four — He Does Not Say It",
    layout: "splash",
    panels: [
      {
        art: `${i8}/sense.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "Night again." },
          { kind: "caption", text: "The same drop in the jaw." },
        ],
      },
    ],
  },
  {
    id: "8-22",
    number: "22",
    act: "Act Four — He Does Not Say It",
    layout: "splash",
    panels: [
      {
        art: `${i8}/shut.jpg`,
        balloons: [
          { kind: "caption", text: "He does not say it." },
          { kind: "caption", text: "He has seen what a log costs." },
        ],
      },
    ],
  },
  {
    id: "8-23",
    number: "23",
    act: "Act Four — He Does Not Say It",
    layout: "splash",
    panels: [
      {
        art: `${i8}/shut.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "New lead", text: "Board’s still green." },
        ],
      },
    ],
  },
  {
    id: "8-24",
    number: "24",
    act: "Act Four — He Does Not Say It",
    layout: "splash",
    panels: [
      {
        art: `${i8}/alone.jpg`,
        balloons: [
          { kind: "sfx", text: "KLAXON" },
          { kind: "caption", text: "After. The sky he already had." },
        ],
      },
    ],
  },
  {
    id: "8-25",
    number: "25",
    act: "Act Four — He Does Not Say It",
    layout: "splash",
    panels: [
      {
        art: `${i8}/geom.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "Crew goes." },
          { kind: "caption", text: "The new lead goes." },
        ],
      },
    ],
  },
  {
    id: "8-26",
    number: "26",
    act: "Act Four — He Does Not Say It",
    layout: "splash",
    panels: [
      {
        art: `${i8}/alone.jpg`,
        position: "right",
        balloons: [
          { kind: "caption", text: "A kid still on the far paint." },
          { kind: "caption", text: "Nobody turns with him." },
        ],
      },
    ],
  },
  {
    id: "8-27",
    number: "27",
    act: "Act Four — He Does Not Say It",
    layout: "splash",
    panels: [
      {
        art: `${i8}/alone.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "He walks anyway." },
          { kind: "caption", text: "Body. Rain. No wind he made." },
        ],
      },
    ],
  },
  {
    id: "8-28",
    number: "28",
    act: "Act Four — He Does Not Say It",
    layout: "splash",
    panels: [
      {
        art: `${i8}/door.jpg`,
        balloons: [
          { kind: "caption", text: "Door. Human." },
          { kind: "caption", text: "The kid comes in." },
        ],
      },
    ],
  },
  {
    id: "8-29",
    number: "29",
    act: "Act Five — Either Way",
    layout: "splash",
    panels: [
      {
        art: `${i8}/border.jpg`,
        balloons: [
          { kind: "caption", text: "Last off the field." },
          { kind: "caption", text: "Alone." },
        ],
      },
    ],
  },
  {
    id: "8-30",
    number: "30",
    act: "Act Five — Either Way",
    layout: "splash",
    panels: [
      {
        art: `${i8}/chock-r.jpg`,
        balloons: [
          { kind: "caption", text: "He was right." },
          { kind: "caption", text: "W is still on days." },
        ],
      },
    ],
  },
  {
    id: "8-31",
    number: "31",
    act: "Act Five — Either Way",
    layout: "splash",
    panels: [
      {
        art: `${i8}/form.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "Tuesday. Wednesday." },
          { kind: "caption", text: "He does not know which story that is." },
        ],
      },
    ],
  },
  {
    id: "8-32",
    number: "32",
    act: "Act Five — Either Way",
    layout: "spread",
    panels: [
      {
        art: `${i8}/cover.jpg`,
        balloons: [
          { kind: "caption", text: "They never touched W." },
          { kind: "caption", text: "He walked anyway." },
        ],
      },
    ],
  },
];
