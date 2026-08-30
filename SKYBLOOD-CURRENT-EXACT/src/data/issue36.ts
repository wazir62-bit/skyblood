import type { ComicPage, IssueMeta } from "./types";

const i36 = "/comic/i36";

export const ISSUE36: IssueMeta = {
  n: 36,
  title: "SKYBLOOD",
  issue: "Season Three — Issue #9",
  book: "Heavy",
  cover: `${i36}/v3_p07.jpg`,
  logline:
    "The ground told him where the weight was. One palm. No gold. The wall fell where nobody was standing. It started.",
};

export const pages36: ComicPage[] = [
  {
    id: "36-01",
    number: "1",
    act: "Act One — The Window",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n01_window.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You sure he was watching that?" },
          { kind: "speech", speaker: "RJ", text: "Yeah. Long enough for me to notice." },
        ],
      },
    ],
  },
  {
    id: "36-02",
    number: "2",
    act: "Act One — The Window",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n02_bandage.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Stay here." },
          { kind: "speech", speaker: "RJ", text: "Wasn’t going nowhere." },
          { kind: "speech", speaker: "Mother", text: "Neither one of y’all going nowhere. You bleeding through that bandage again." },
        ],
      },
    ],
  },
  {
    id: "36-03",
    number: "3",
    act: "Act One — The Window",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n03_mancar.jpg`,
        balloons: [
          { kind: "caption", text: "The man is leaving." },
          { kind: "speech", speaker: "Elias", text: "Then I’m going somewhere." },
          { kind: "speech", speaker: "Mother", text: "—" },
          { kind: "speech", speaker: "Elias", text: "I’ll be back." },
        ],
      },
    ],
  },
  {
    id: "36-04",
    number: "4",
    act: "Act Two — The Camera",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n04_wbreak.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "You suspended from work and somehow got busier." },
          { kind: "speech", speaker: "Elias", text: "You check that camera?" },
          { kind: "speech", speaker: "W", text: "City traffic. Not ours." },
        ],
      },
    ],
  },
  {
    id: "36-05",
    number: "5",
    act: "Act Two — The Camera",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n05_phone.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Man outside Mama’s house was watching it. At midnight." },
          { kind: "speech", speaker: "W", text: "Memphis got weird hobbies." },
        ],
      },
    ],
  },
  {
    id: "36-06",
    number: "6",
    act: "Act Two — The Camera",
    layout: "splash",
    panels: [
      {
        art: `${i36}/v2_p06_phone.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "What you think is on it?" },
          { kind: "speech", speaker: "Elias", text: "Somebody coming out the house. The badge man. Maybe." },
        ],
      },
    ],
  },
  {
    id: "36-07",
    number: "7",
    act: "Act Two — Family",
    layout: "splash",
    panels: [
      {
        art: `${i36}/v3_p07.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "You ready? Your house." },
          { kind: "speech", speaker: "RJ", text: "I got a house here." },
        ],
      },
    ],
  },
  {
    id: "36-08",
    number: "8",
    act: "Act Two — Family",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n08_kitchen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "You got a grandma here." },
          { kind: "speech", speaker: "Mother", text: "And your mama said get your stuff." },
          { kind: "speech", speaker: "RJ", text: "Everybody teaming up." },
        ],
      },
    ],
  },
  {
    id: "36-09",
    number: "9",
    act: "Act Two — Family",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n09_object.jpg`,
        balloons: [
          { kind: "caption", text: "Ordinary object. Nothing glowing." },
          { kind: "speech", speaker: "Sister", text: "Leave it." },
          { kind: "speech", speaker: "RJ", text: "I wasn’t touching it. I know what it is." },
        ],
      },
    ],
  },
  {
    id: "36-10",
    number: "10",
    act: "Act Two — Family",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n10_rjface.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "I know you know." },
          { kind: "speech", speaker: "RJ", text: "I’ve always known." },
          { kind: "speech", speaker: "Sister", text: "Knowing ain’t the same as needing." },
        ],
      },
    ],
  },
  {
    id: "36-11",
    number: "11",
    act: "Act Three — The Man",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n11_street.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "That’s him? He don’t look strange." },
          { kind: "speech", speaker: "Elias", text: "Neither do I." },
        ],
      },
    ],
  },
  {
    id: "36-12",
    number: "12",
    act: "Act Three — The Man",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n12_yard.jpg`,
        balloons: [
          { kind: "speech", speaker: "Man", text: "We need to talk." },
          { kind: "speech", speaker: "Elias", text: "Start with your name." },
          { kind: "speech", speaker: "Man", text: "Not yet." },
          { kind: "speech", speaker: "W", text: "Then conversation over." },
          { kind: "speech", speaker: "Man", text: "Good." },
        ],
      },
    ],
  },
  {
    id: "36-13",
    number: "13",
    act: "Act Three — The Man",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n13_eliasc.jpg`,
        balloons: [
          { kind: "speech", speaker: "Man", text: "He needs people who don’t believe strangers." },
          { kind: "speech", speaker: "Elias", text: "You followed somebody to my mother’s house. Show me." },
        ],
      },
    ],
  },
  {
    id: "36-14",
    number: "14",
    act: "Act Three — The Man",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n14_cam.jpg`,
        balloons: [
          { kind: "caption", text: "Traffic-camera footage. Mother’s street. A figure approaches." },
        ],
      },
    ],
  },
  {
    id: "36-15",
    number: "15",
    act: "Act Three — The Man",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n15_gatec.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "That’s not me." },
          { kind: "speech", speaker: "Man", text: "I know." },
          { kind: "speech", speaker: "W", text: "How?" },
        ],
      },
    ],
  },
  {
    id: "36-16",
    number: "16",
    act: "Act Three — The Man",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n16_warehouse.jpg`,
        balloons: [
          { kind: "speech", speaker: "Man", text: "Because Elias Marrow was somewhere else." },
          { kind: "caption", text: "Warehouse perimeter. Same time. Two locations. Body / record." },
        ],
      },
    ],
  },
  {
    id: "36-17",
    number: "17",
    act: "Act Three — The Man",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n17_elias2.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Where’d you get this?" },
          { kind: "speech", speaker: "Man", text: "That’s why I haven’t given you my name. It’s the safest one I have." },
        ],
      },
    ],
  },
  {
    id: "36-18",
    number: "18",
    act: "Act Four — The Call",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n18_camup.jpg`,
        balloons: [
          { kind: "speech", speaker: "Man", text: "Your mother’s address just got queried again. Your name." },
        ],
      },
    ],
  },
  {
    id: "36-19",
    number: "19",
    act: "Act Four — The Call",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n19_school.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Where?" },
          { kind: "speech", speaker: "Man", text: "School transportation." },
        ],
      },
    ],
  },
  {
    id: "36-20",
    number: "20",
    act: "Act Four — RJ",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n20_car.jpg`,
        balloons: [
          { kind: "caption", text: "Sister driving. RJ in the passenger seat. Construction. Diverted. He looks down." },
        ],
      },
    ],
  },
  {
    id: "36-21",
    number: "21",
    act: "Act Four — RJ",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n21_sneaker.jpg`,
        balloons: [
          { kind: "caption", text: "Sneaker on the floorboard. Tiny vibration. A deep crack. Nobody else sees it yet." },
        ],
      },
    ],
  },
  {
    id: "36-22",
    number: "22",
    act: "Act Four — RJ",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n22_stop.jpg`,
        balloons: [
          { kind: "speech", speaker: "RJ", text: "Mama. Stop." },
          { kind: "speech", speaker: "Sister", text: "Why?" },
          { kind: "speech", speaker: "RJ", text: "STOP." },
        ],
      },
    ],
  },
  {
    id: "36-23",
    number: "23",
    act: "Act Four — RJ",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n23_fall.jpg`,
        balloons: [
          { kind: "speech", speaker: "Worker", text: "MOVE!" },
          { kind: "caption", text: "The wall begins collapsing toward stopped traffic." },
        ],
      },
    ],
  },
  {
    id: "36-24",
    number: "24",
    act: "Act Five — First Response",
    layout: "splash",
    panels: [
      {
        art: `${i36}/v3_p24.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "RJ!" },
          { kind: "caption", text: "His foot hits pavement. He feels weight. No gold." },
        ],
      },
    ],
  },
  {
    id: "36-25",
    number: "25",
    act: "Act Five — First Response",
    layout: "splash",
    panels: [
      {
        art: `${i36}/v3_p25.jpg`,
        balloons: [
          { kind: "caption", text: "One hand on pavement. Instinct. No incantation. No Anubis name. No gold." },
          { kind: "speech", speaker: "RJ", text: "...what?" },
        ],
      },
    ],
  },
  {
    id: "36-26",
    number: "26",
    act: "Act Five — First Response",
    layout: "splash",
    panels: [
      {
        art: `${i36}/n26_ridge.jpg`,
        balloons: [
          { kind: "caption", text: "Asphalt fractures. A ridge of earth pushes upward." },
        ],
      },
    ],
  },
  {
    id: "36-27",
    number: "27",
    act: "Act Five — First Response",
    layout: "splash",
    panels: [
      {
        art: `${i36}/v3_p27.jpg`,
        balloons: [
          { kind: "caption", text: "The wall hits the raised earth. Redirected. Empty construction lane. No glow. No costume. He did not know he could do that." },
        ],
      },
    ],
  },
  {
    id: "36-28",
    number: "28",
    act: "Act Five — First Response",
    layout: "splash",
    panels: [
      {
        art: `${i36}/v3_p28.jpg`,
        balloons: [
          { kind: "speech", speaker: "RJ", text: "Mama—" },
          { kind: "caption", text: "He lifts his hand. The earth stops moving." },
        ],
      },
    ],
  },
  {
    id: "36-29",
    number: "29",
    act: "Act Five — First Response",
    layout: "splash",
    panels: [
      {
        art: `${i36}/v3_p29.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "You hurt?" },
          { kind: "speech", speaker: "RJ", text: "No. I felt it." },
        ],
      },
    ],
  },
  {
    id: "36-30",
    number: "30",
    act: "Act Five — First Response",
    layout: "splash",
    panels: [
      {
        art: `${i36}/v4_p30.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Felt what? You saw it?" },
          { kind: "speech", speaker: "RJ", text: "No. It was leaning before it moved." },
        ],
      },
    ],
  },
  {
    id: "36-31",
    number: "31",
    act: "Act Five — First Response",
    layout: "splash",
    panels: [
      {
        art: `${i36}/v4_p31.jpg`,
        balloons: [
          { kind: "caption", text: "His hand. Normal. No gold. No mark." },
          { kind: "speech", speaker: "RJ", text: "The ground told me where the weight was." },
        ],
      },
    ],
  },
  {
    id: "36-32",
    number: "32",
    act: "Act Five — First Response",
    layout: "splash",
    panels: [
      {
        art: `${i36}/v3_p32.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What’s wrong? What happened?" },
          { kind: "speech", speaker: "Sister", text: "It started." },
          { kind: "caption", text: "The wall fell where nobody was standing." },
          { kind: "caption", text: "END — S3 #9" },
        ],
      },
    ],
  },
];
