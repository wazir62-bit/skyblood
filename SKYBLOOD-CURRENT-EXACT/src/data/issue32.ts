import type { ComicPage, IssueMeta } from "./types";

const i32 = "/comic/i32";

export const ISSUE32: IssueMeta = {
  n: 32,
  title: "SKYBLOOD",
  issue: "Season Three — Issue #5",
  book: "Off the Clock",
  cover: `${i32}/p24.jpg`,
  logline:
    "No vest. Two plates. A chained door. A windshield that saw someone the camera missed. Then W: somebody used his badge to get on the ramp.",
};

export const pages32: ComicPage[] = [
  {
    id: "32-01",
    number: "1",
    act: "Act One — Off the Clock",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p01.jpg`,
        balloons: [
          { kind: "caption", text: "1:07 p.m. Leg wrapped. Work clothes hanging. Lime vest folded separately. He leaves it." },
        ],
      },
    ],
  },
  {
    id: "32-02",
    number: "2",
    act: "Act One — Off the Clock",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p02.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "You look unemployed." },
          { kind: "speech", speaker: "Elias", text: "Medical." },
          { kind: "speech", speaker: "Mother", text: "Still don’t look employed." },
        ],
      },
    ],
  },
  {
    id: "32-03",
    number: "3",
    act: "Act One — Off the Clock",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p03.jpg`,
        balloons: [
          { kind: "caption", text: "Two plates. Balanced across from each other. He sits between their weight. The scale. Quiet." },
        ],
      },
    ],
  },
  {
    id: "32-04",
    number: "4",
    act: "Act One — Off the Clock",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p04.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "You needed somebody to tell you stop." },
          { kind: "speech", speaker: "Elias", text: "People don’t stop needing help because I’m off." },
          { kind: "speech", speaker: "Mother", text: "You hearing yourself turn into a job." },
        ],
      },
    ],
  },
  {
    id: "32-05",
    number: "5",
    act: "Act One — Off the Clock",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p05.jpg`,
        balloons: [
          { kind: "caption", text: "MALIK ASKED ABOUT YOU." },
          { kind: "speech", speaker: "Mother", text: "Go. I told you don’t make it a job." },
        ],
      },
    ],
  },
  {
    id: "32-06",
    number: "6",
    act: "Act Two — Malik",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p07.jpg`,
        balloons: [
          { kind: "caption", text: "Waiting Room B. Ordinary window. Ordinary fluorescent. He keeps walking. No gold." },
        ],
      },
    ],
  },
  {
    id: "32-07",
    number: "7",
    act: "Act Two — Malik",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p08.jpg`,
        balloons: [
          { kind: "speech", speaker: "Malik", text: "You look worse than me." },
          { kind: "speech", speaker: "Elias", text: "You got a bed." },
          { kind: "speech", speaker: "Mrs. Reed", text: "He got jokes now." },
        ],
      },
    ],
  },
  {
    id: "32-08",
    number: "8",
    act: "Act Two — Malik",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p09.jpg`,
        balloons: [
          { kind: "speech", speaker: "Malik", text: "They fired my supervisor. For falsifying the evacuation report." },
          { kind: "speech", speaker: "Elias", text: "Didn’t he?" },
          { kind: "speech", speaker: "Malik", text: "He ain’t make the badge say I left." },
        ],
      },
    ],
  },
  {
    id: "32-09",
    number: "9",
    act: "Act Two — Malik",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p10.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mrs. Reed", text: "They found somebody to put on one side." },
          { kind: "caption", text: "Badge. Wristband. Opposite. The scale." },
        ],
      },
    ],
  },
  {
    id: "32-10",
    number: "10",
    act: "Act Two — Malik",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p11.jpg`,
        balloons: [
          { kind: "caption", text: "EXIT — 4:58. SMOKE INHALATION — RESCUED 5:51." },
          { kind: "speech", speaker: "Elias", text: "What happened between those?" },
        ],
      },
    ],
  },
  {
    id: "32-11",
    number: "11",
    act: "Act Two — Malik",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p12.jpg`,
        balloons: [
          { kind: "speech", speaker: "Malik", text: "That’s what nobody asking." },
          { kind: "speech", speaker: "Elias", text: "I am." },
          { kind: "speech", speaker: "Malik", text: "Then start with the door. It wasn’t supposed to lock." },
        ],
      },
    ],
  },
  {
    id: "32-12",
    number: "12",
    act: "Act Three — The Door",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p13.jpg`,
        balloons: [
          { kind: "speech", speaker: "Captain", text: "You collect doors now?" },
          { kind: "speech", speaker: "Elias", text: "Only ones that almost kill people." },
        ],
      },
    ],
  },
  {
    id: "32-13",
    number: "13",
    act: "Act Three — The Door",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p14.jpg`,
        balloons: [
          { kind: "speech", speaker: "Captain", text: "Fails open." },
          { kind: "speech", speaker: "Elias", text: "Didn’t." },
          { kind: "speech", speaker: "Captain", text: "Because somebody chained it. From outside." },
        ],
      },
    ],
  },
  {
    id: "32-14",
    number: "14",
    act: "Act Three — The Door",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p15.jpg`,
        balloons: [
          { kind: "speech", speaker: "Captain", text: "Your boy’s supervisor didn’t do that. Camera had him on the other side of the building. Somebody else closed that door." },
        ],
      },
    ],
  },
  {
    id: "32-15",
    number: "15",
    act: "Act Four — The Minute",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p17.jpg`,
        balloons: [
          { kind: "caption", text: "4:41. Empty. Continuous video." },
          { kind: "speech", speaker: "Elias", text: "Camera get them?" },
          { kind: "speech", speaker: "Captain", text: "Got everybody." },
        ],
      },
    ],
  },
  {
    id: "32-16",
    number: "16",
    act: "Act Four — The Minute",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p18.jpg`,
        balloons: [
          { kind: "caption", text: "4:42 empty. 4:43: chain is on the door." },
          { kind: "speech", speaker: "Elias", text: "Missing minute?" },
          { kind: "speech", speaker: "Captain", text: "No. Continuous video." },
        ],
      },
    ],
  },
  {
    id: "32-17",
    number: "17",
    act: "Act Four — The Minute",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p19.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Then somebody’s in it." },
          { kind: "speech", speaker: "Captain", text: "Show me." },
          { kind: "caption", text: "Nothing impossible. Bad security footage." },
        ],
      },
    ],
  },
  {
    id: "32-18",
    number: "18",
    act: "Act Four — The Minute",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p20.jpg`,
        balloons: [
          { kind: "caption", text: "Windshield. A figure. Ordinary dark clothes. No gold. Direct camera: empty. Reflection: someone at the door." },
        ],
      },
    ],
  },
  {
    id: "32-19",
    number: "19",
    act: "Act Four — The Minute",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p21.jpg`,
        balloons: [
          { kind: "speech", speaker: "Captain", text: "Reflection. Could be anybody." },
          { kind: "speech", speaker: "Elias", text: "Yeah." },
          { kind: "caption", text: "He keeps looking. No supernatural conclusion." },
        ],
      },
    ],
  },
  {
    id: "32-20",
    number: "20",
    act: "Act Five — Off-Clock",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p22.jpg`,
        balloons: [
          { kind: "caption", text: "A crash. Fire-damaged canopy coming down. Investigator underneath. Elias moves." },
        ],
      },
    ],
  },
  {
    id: "32-21",
    number: "21",
    act: "Act Five — Off-Clock",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p23.jpg`,
        balloons: [
          { kind: "caption", text: "He shoves the investigator clear. The roof comes onto him." },
        ],
      },
    ],
  },
  {
    id: "32-22",
    number: "22",
    act: "Act Five — Off-Clock",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p24.jpg`,
        balloons: [
          { kind: "caption", text: "One knee. Both arms. Ordinary clothes. No vest. No gold. No aura. Elias Marrow holding up something that should crush him." },
        ],
      },
    ],
  },
  {
    id: "32-23",
    number: "23",
    act: "Act Five — Off-Clock",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p25.jpg`,
        balloons: [
          { kind: "speech", speaker: "Captain", text: "MOVE!" },
          { kind: "caption", text: "Investigator out. Elias throws the steel aside." },
        ],
      },
    ],
  },
  {
    id: "32-24",
    number: "24",
    act: "Act Five — Off-Clock",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p26.jpg`,
        balloons: [
          { kind: "speech", speaker: "Captain", text: "Door was adrenaline. What’s this?" },
          { kind: "speech", speaker: "Elias", text: "Bad day." },
        ],
      },
    ],
  },
  {
    id: "32-25",
    number: "25",
    act: "Act Five — Off-Clock",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p27.jpg`,
        balloons: [
          { kind: "caption", text: "The captain offers a hand. Ordinary five fingers. No gold." },
          { kind: "speech", speaker: "Captain", text: "You need a doctor." },
        ],
      },
    ],
  },
  {
    id: "32-26",
    number: "26",
    act: "Act Five — Off-Clock",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p28.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Already got people telling me that." },
          { kind: "speech", speaker: "Captain", text: "You also need to stop coming to active scenes. You gonna?" },
          { kind: "speech", speaker: "Elias", text: "Probably not." },
        ],
      },
    ],
  },
  {
    id: "32-27",
    number: "27",
    act: "Act Six — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p30.jpg`,
        balloons: [
          { kind: "speech", speaker: "Captain", text: "Don’t make me regret that." },
          { kind: "speech", speaker: "Elias", text: "You don’t know what you gave me." },
          { kind: "caption", text: "A printed still. Not the original. Windshield. Figure." },
        ],
      },
    ],
  },
  {
    id: "32-28",
    number: "28",
    act: "Act Six — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p31.jpg`,
        balloons: [
          { kind: "caption", text: "Direct view: empty. Reflection: person. One frame. Two truths. He folds the paper." },
        ],
      },
    ],
  },
  {
    id: "32-29",
    number: "29",
    act: "Act Six — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p06.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Yeah." },
          { kind: "speech", speaker: "W", text: "Where you at?" },
          { kind: "speech", speaker: "Elias", text: "Why?" },
        ],
      },
    ],
  },
  {
    id: "32-30",
    number: "30",
    act: "Act Six — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p32.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Because somebody just used your badge to get on the ramp." },
        ],
      },
    ],
  },
  {
    id: "32-31",
    number: "31",
    act: "Act Six — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p16.jpg`,
        balloons: [
          { kind: "caption", text: "He stops. No gold. No FIRST SKY. No Paper." },
        ],
      },
    ],
  },
  {
    id: "32-32",
    number: "32",
    act: "Act Six — The Copy",
    layout: "splash",
    panels: [
      {
        art: `${i32}/p29.jpg`,
        balloons: [
          { kind: "caption", text: "A stolen identity. People inside the fence." },
        ],
      },
    ],
  },
];
