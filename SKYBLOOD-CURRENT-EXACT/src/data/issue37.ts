import type { ComicPage, IssueMeta } from "./types";

const i37 = "/comic/i37";

export const ISSUE37: IssueMeta = {
  n: 37,
  title: "SKYBLOOD",
  issue: "Season Three — Issue #10",
  book: "Both Are True",
  cover: `${i37}/thomas.jpg`,
  logline:
    "Missing a second. A name he has heard: Asa Vale. Floor heavy. He warns. Elias holds the porch. The house stands. The record says they cannot enter. Thomas died three days before the call. That’s wrong. That’s why he came.",
};

export const pages37: ComicPage[] = [
  {
    id: "37-01",
    number: "1",
    act: "Act One — Missing Movement",
    layout: "splash",
    panels: [
      {
        art: `${i37}/time.jpg`,
        balloons: [
          { kind: "caption", text: "8:41:16 — he approaches. 8:41:17 — empty. 8:41:18 — back gate. Too far for one second. Missing movement." },
        ],
      },
    ],
  },
  {
    id: "37-02",
    number: "2",
    act: "Act One — Missing Movement",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p02.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You pulled the footage. Why?" },
        ],
      },
    ],
  },
  {
    id: "37-03",
    number: "3",
    act: "Act One — Missing Movement",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p03.jpg`,
        balloons: [
          { kind: "speech", speaker: "Man", text: "Because somebody else requested it first. Elias Marrow." },
          { kind: "speech", speaker: "W", text: "I’m getting tired of that answer." },
        ],
      },
    ],
  },
  {
    id: "37-04",
    number: "4",
    act: "Act One — Asa",
    layout: "splash",
    panels: [
      {
        art: `${i37}/asa.jpg`,
        balloons: [
          { kind: "caption", text: "Not a weapon. Identification. A name." },
          { kind: "caption", text: "ASA VALE." },
        ],
      },
    ],
  },
  {
    id: "37-05",
    number: "5",
    act: "Act One — Asa",
    layout: "splash",
    panels: [
      {
        art: `${i37}/p05.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Asa." },
          { kind: "speech", speaker: "Asa", text: "You heard it before." },
          { kind: "speech", speaker: "Elias", text: "Yeah." },
        ],
      },
    ],
  },
  {
    id: "37-06",
    number: "6",
    act: "Act One — Asa",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p06.jpg`,
        balloons: [
          { kind: "speech", speaker: "Asa", text: "From who?" },
          { kind: "speech", speaker: "Elias", text: "You first." },
        ],
      },
    ],
  },
  {
    id: "37-07",
    number: "7",
    act: "Act One — Asa",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p07.jpg`,
        balloons: [
          { kind: "speech", speaker: "Asa", text: "I investigate failures that don’t agree with their records. It became a job." },
          { kind: "speech", speaker: "W", text: "For who?" },
          { kind: "speech", speaker: "Asa", text: "People who don’t like paying twice for the same disaster." },
        ],
      },
    ],
  },
  {
    id: "37-08",
    number: "8",
    act: "Act One — Asa",
    layout: "splash",
    panels: [
      {
        art: `${i37}/p08.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You know Paper?" },
          { kind: "speech", speaker: "Asa", text: "I know paper." },
          { kind: "speech", speaker: "Elias", text: "That’s not what I asked." },
        ],
      },
    ],
  },
  {
    id: "37-09",
    number: "9",
    act: "Act Two — Home",
    layout: "splash",
    panels: [
      {
        art: `${i37}/p09.jpg`,
        balloons: [
          { kind: "speech", speaker: "RJ", text: "Uncle E still outside? With weird dude?" },
          { kind: "speech", speaker: "Mother", text: "Don’t call grown men weird dudes. Even when accurate." },
        ],
      },
    ],
  },
  {
    id: "37-10",
    number: "10",
    act: "Act Two — Home",
    layout: "splash",
    panels: [
      {
        art: `${i37}/p10.jpg`,
        balloons: [
          { kind: "caption", text: "A pencil rolls. He catches it. Nobody notices. No power." },
        ],
      },
    ],
  },
  {
    id: "37-11",
    number: "11",
    act: "Act Two — The Caller",
    layout: "splash",
    panels: [
      {
        art: `${i37}/p11.jpg`,
        balloons: [
          { kind: "speech", speaker: "Asa", text: "Answer it." },
          { kind: "speech", speaker: "Elias", text: "You know who this is?" },
          { kind: "speech", speaker: "Asa", text: "No." },
        ],
      },
    ],
  },
  {
    id: "37-12",
    number: "12",
    act: "Act Two — The Caller",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p12.jpg`,
        balloons: [
          { kind: "speech", speaker: "Voice", text: "You found Asa." },
          { kind: "speech", speaker: "Elias", text: "You know him." },
        ],
      },
    ],
  },
  {
    id: "37-13",
    number: "13",
    act: "Act Two — The Caller",
    layout: "splash",
    panels: [
      {
        art: `${i37}/p13.jpg`,
        balloons: [
          { kind: "speech", speaker: "Voice", text: "I know his record." },
          { kind: "speech", speaker: "Elias", text: "Same thing?" },
          { kind: "speech", speaker: "Voice", text: "Ask him about 1996. Ask him who answered the phone." },
        ],
      },
    ],
  },
  {
    id: "37-14",
    number: "14",
    act: "Act Three — 1996",
    layout: "splash",
    panels: [
      {
        art: `${i37}/p14.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "1996. Payphone." },
          { kind: "speech", speaker: "Asa", text: "Who told you?" },
          { kind: "speech", speaker: "Elias", text: "Wrong question." },
        ],
      },
    ],
  },
  {
    id: "37-15",
    number: "15",
    act: "Act Three — 1996",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p15.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Who answered?" },
          { kind: "speech", speaker: "Asa", text: "Nobody." },
        ],
      },
    ],
  },
  {
    id: "37-16",
    number: "16",
    act: "Act Three — 1996",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p16.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Phone rang." },
          { kind: "speech", speaker: "Asa", text: "Yes. Nobody was on the other end." },
        ],
      },
    ],
  },
  {
    id: "37-17",
    number: "17",
    act: "Act Four — Floor Heavy",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p17.jpg`,
        balloons: [
          { kind: "caption", text: "A vibration under the house. Water trembles. No gold. His foot on the floor." },
        ],
      },
    ],
  },
  {
    id: "37-18",
    number: "18",
    act: "Act Four — Floor Heavy",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p18.jpg`,
        balloons: [
          { kind: "speech", speaker: "RJ", text: "Mama. Everybody get out the kitchen." },
          { kind: "speech", speaker: "Mother", text: "Why?" },
          { kind: "speech", speaker: "RJ", text: "Floor heavy." },
        ],
      },
    ],
  },
  {
    id: "37-19",
    number: "19",
    act: "Act Four — Floor Heavy",
    layout: "splash",
    panels: [
      {
        art: `${i37}/p19.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Mama." },
          { kind: "caption", text: "They move. He does not use a power. He warns." },
        ],
      },
    ],
  },
  {
    id: "37-20",
    number: "20",
    act: "Act Five — Hero",
    layout: "splash",
    panels: [
      {
        art: `${i37}/p20.jpg`,
        balloons: [
          { kind: "caption", text: "The porch drops. Foundation." },
          { kind: "speech", speaker: "Asa", text: "Foundation." },
        ],
      },
    ],
  },
  {
    id: "37-21",
    number: "21",
    act: "Act Five — Hero",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p21.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "RJ felt it." },
          { kind: "speech", speaker: "Elias", text: "Across the street. Now." },
        ],
      },
    ],
  },
  {
    id: "37-22",
    number: "22",
    act: "Act Five — Hero",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p22b.jpg`,
        balloons: [
          { kind: "speech", speaker: "Asa", text: "Gas line?" },
          { kind: "speech", speaker: "Elias", text: "Meter’s on that wall." },
          { kind: "caption", text: "HISSSSS." },
        ],
      },
    ],
  },
  {
    id: "37-23",
    number: "23",
    act: "Act Five — Hero",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p23.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "ELIAS!" },
          { kind: "caption", text: "He catches the beam." },
        ],
      },
    ],
  },
  {
    id: "37-24",
    number: "24",
    act: "Act Five — Hero",
    layout: "splash",
    panels: [
      {
        art: `${i37}/p24.jpg`,
        balloons: [
          { kind: "speech", speaker: "Asa", text: "I NEED TEN SECONDS!" },
          { kind: "speech", speaker: "Elias", text: "TAKE EIGHT!" },
          { kind: "caption", text: "Ordinary clothes. No lime. No gold. He holds it." },
        ],
      },
    ],
  },
  {
    id: "37-25",
    number: "25",
    act: "Act Five — Hero",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p25.jpg`,
        balloons: [
          { kind: "speech", speaker: "Asa", text: "DONE!" },
          { kind: "caption", text: "The porch collapses. Dust. Everyone alive." },
        ],
      },
    ],
  },
  {
    id: "37-26",
    number: "26",
    act: "Act Five — RJ",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p26.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You felt that?" },
          { kind: "speech", speaker: "RJ", text: "Yeah." },
        ],
      },
    ],
  },
  {
    id: "37-27",
    number: "27",
    act: "Act Five — RJ",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p27.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "How?" },
          { kind: "speech", speaker: "RJ", text: "I don’t know." },
          { kind: "speech", speaker: "Sister", text: "He said the floor was heavy." },
          { kind: "speech", speaker: "RJ", text: "It was." },
        ],
      },
    ],
  },
  {
    id: "37-28",
    number: "28",
    act: "Act Five — Both Are True",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p28.jpg`,
        balloons: [
          { kind: "speech", speaker: "Inspector", text: "Old washout. Looks like it’s been developing for years." },
        ],
      },
    ],
  },
  {
    id: "37-29",
    number: "29",
    act: "Act Five — Both Are True",
    layout: "splash",
    panels: [
      {
        art: `${i37}/n_p29.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You thinking somebody did this?" },
          { kind: "speech", speaker: "Asa", text: "No." },
          { kind: "speech", speaker: "Elias", text: "Neither am I." },
        ],
      },
    ],
  },
  {
    id: "37-30",
    number: "30",
    act: "Act Five — Both Are True",
    layout: "splash",
    panels: [
      {
        art: `${i37}/unsafe.jpg`,
        balloons: [
          { kind: "caption", text: "UNSAFE FOR OCCUPANCY. The house exists. The record says they cannot enter. Both are true." },
        ],
      },
    ],
  },
  {
    id: "37-31",
    number: "31",
    act: "Act Five — Both Are True",
    layout: "splash",
    panels: [
      {
        art: `${i37}/thomas.jpg`,
        balloons: [
          { kind: "caption", text: "1996. MARROW, THOMAS. STATUS: DECEASED. Three days before the payphone." },
        ],
      },
    ],
  },
  {
    id: "37-32",
    number: "32",
    act: "Act Five — Both Are True",
    layout: "splash",
    panels: [
      {
        art: `${i37}/p31.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "That’s wrong." },
          { kind: "speech", speaker: "Asa", text: "I know. That’s why I came looking for you." },
          { kind: "caption", text: "END — S3 #10" },
        ],
      },
    ],
  },
];
