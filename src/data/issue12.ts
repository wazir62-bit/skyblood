import type { ComicPage, IssueMeta } from "./types";

const i12 = "/comic/i12";

export const ISSUE12: IssueMeta = {
  n: 12,
  title: "SKYBLOOD",
  issue: "Issue #12",
  book: "The Face at the Door",
  cover: `${i12}/cover.jpg`,
  logline:
    "Something wearing Elias’s face is at W’s door. Elias is across town. Get W. Both men see it. W cannot go home. The face is looking at W.",
};

export const pages12: ComicPage[] = [
  {
    id: "12-01",
    number: "1",
    act: "Act One — Peephole",
    layout: "splash",
    panels: [
      {
        art: `${i12}/peep.jpg`,
        balloons: [
          { kind: "sfx", text: "KNOCK KNOCK KNOCK" },
          { kind: "speech", speaker: "Elias", text: "Who is it." },
        ],
      },
    ],
  },
  {
    id: "12-02",
    number: "2",
    act: "Act One — Peephole",
    layout: "splash",
    panels: [
      {
        art: `${i12}/back.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Man… what the hell you doing here?" },
          { kind: "speech", speaker: "Elias", text: "What." },
          { kind: "speech", speaker: "W", text: "It’s you." },
        ],
      },
    ],
  },
  {
    id: "12-03",
    number: "3",
    act: "Act One — Peephole",
    layout: "splash",
    panels: [
      {
        art: `${i12}/phone.jpg`,
        balloons: [
          { kind: "caption", text: "His kitchen. The notebook. Across town." },
          { kind: "speech", speaker: "Elias", text: "Don’t open that door." },
          { kind: "speech", speaker: "W", text: "Wasn’t planning on it." },
        ],
      },
    ],
  },
  {
    id: "12-04",
    number: "4",
    act: "Act One — Peephole",
    layout: "spread",
    panels: [
      {
        art: `${i12}/cover.jpg`,
        balloons: [
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book Twelve — The Face at the Door" },
        ],
      },
    ],
  },
  {
    id: "12-05",
    number: "5",
    act: "Act One — Peephole",
    layout: "splash",
    panels: [
      {
        art: `${i12}/porch.jpg`,
        balloons: [
          { kind: "caption", text: "Same height. Same face. Not a monster." },
          { kind: "caption", text: "Still." },
          { kind: "speech", speaker: "Elias", text: "I’m coming." },
          { kind: "speech", speaker: "W", text: "Hurry." },
        ],
      },
    ],
  },
  {
    id: "12-06",
    number: "6",
    act: "Act Two — The Wait",
    layout: "splash",
    panels: [
      {
        art: `${i12}/drive.jpg`,
        balloons: [
          { kind: "caption", text: "Red lights. The city does not know." },
        ],
      },
    ],
  },
  {
    id: "12-07",
    number: "7",
    act: "Act Two — The Wait",
    layout: "splash",
    panels: [
      {
        art: `${i12}/joke.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Your twin ugly." },
          { kind: "speech", speaker: "Elias", text: "Good." },
          { kind: "speech", speaker: "W", text: "Need to lose some weight too." },
          { kind: "speech", speaker: "Elias", text: "Now you lying." },
        ],
      },
    ],
  },
  {
    id: "12-08",
    number: "8",
    act: "Act Two — The Wait",
    layout: "splash",
    panels: [
      {
        art: `${i12}/hand.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "He looking at the peephole." },
          { kind: "speech", speaker: "Elias", text: "He been looking at the door." },
          { kind: "speech", speaker: "W", text: "He looking at me." },
        ],
      },
    ],
  },
  {
    id: "12-09",
    number: "9",
    act: "Act Two — The Wait",
    layout: "splash",
    panels: [
      {
        art: `${i12}/gone.jpg`,
        balloons: [
          { kind: "caption", text: "Headlights. Then nothing." },
          { kind: "speech", speaker: "W", text: "He gone." },
          { kind: "speech", speaker: "Elias", text: "Good." },
          { kind: "speech", speaker: "W", text: "That ain’t good." },
        ],
      },
    ],
  },
  {
    id: "12-10",
    number: "10",
    act: "Act Three — I’m Here",
    layout: "splash",
    panels: [
      {
        art: `${i12}/arrive.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "I’m outside." },
          { kind: "speech", speaker: "W", text: "Say something only you know." },
          { kind: "speech", speaker: "Elias", text: "The date’s wrong." },
        ],
      },
    ],
  },
  {
    id: "12-11",
    number: "11",
    act: "Act Three — I’m Here",
    layout: "splash",
    panels: [
      {
        art: `${i12}/doorway.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "You look worse than the other one." },
          { kind: "speech", speaker: "Elias", text: "Keep talking and I’m leaving." },
          { kind: "speech", speaker: "W", text: "Take him with you." },
        ],
      },
    ],
  },
  {
    id: "12-12",
    number: "12",
    act: "Act Three — I’m Here",
    layout: "splash",
    panels: [
      {
        art: `${i12}/search.jpg`,
        balloons: [
          { kind: "caption", text: "They check the house. Together." },
        ],
      },
    ],
  },
  {
    id: "12-13",
    number: "13",
    act: "Act Three — I’m Here",
    layout: "splash",
    panels: [
      {
        art: `${i12}/room.jpg`,
        balloons: [
          { kind: "caption", text: "Nothing. His chair. His food. His bed." },
        ],
      },
    ],
  },
  {
    id: "12-14",
    number: "14",
    act: "Act Three — I’m Here",
    layout: "splash",
    panels: [
      {
        art: `${i12}/pack.jpg`,
        balloons: [
          { kind: "caption", text: "A bag. Not much." },
        ],
      },
    ],
  },
  {
    id: "12-15",
    number: "15",
    act: "Act Three — I’m Here",
    layout: "splash",
    panels: [
      {
        art: `${i12}/leave.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "I can’t go home tonight." },
          { kind: "speech", speaker: "Elias", text: "You coming with me." },
        ],
      },
    ],
  },
  {
    id: "12-16",
    number: "16",
    act: "Act Four — The Window",
    layout: "spread",
    panels: [
      {
        art: `${i12}/window.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "You see that?" },
          { kind: "speech", speaker: "Elias", text: "Yeah." },
        ],
      },
    ],
  },
  {
    id: "12-17",
    number: "17",
    act: "Act Four — The Window",
    layout: "splash",
    panels: [
      {
        art: `${i12}/tocar.jpg`,
        balloons: [
          { kind: "caption", text: "It turns toward W." },
          { kind: "speech", speaker: "Elias", text: "Get in the car." },
        ],
      },
    ],
  },
  {
    id: "12-18",
    number: "18",
    act: "Act Four — The Window",
    layout: "splash",
    panels: [
      {
        art: `${i12}/glass.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Where we going?" },
          { kind: "speech", speaker: "Elias", text: "Somewhere with people." },
          { kind: "speech", speaker: "W", text: "Terrible plan." },
        ],
      },
    ],
  },
  {
    id: "12-19",
    number: "19",
    act: "Act Four — The Window",
    layout: "splash",
    panels: [
      {
        art: `${i12}/canopy.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Them knocks. Your granddaddy write anything else?" },
        ],
      },
    ],
  },
  {
    id: "12-20",
    number: "20",
    act: "Act Four — The Window",
    layout: "splash",
    panels: [
      {
        art: `${i12}/notes.jpg`,
        balloons: [
          { kind: "caption", text: "DO NOT FOLLOW THE FAMILIAR." },
          { kind: "caption", text: "IT WEARS WHAT OPENS THE DOOR." },
          { kind: "speech", speaker: "W", text: "Could’ve used that earlier." },
          { kind: "speech", speaker: "Elias", text: "You didn’t open the door." },
          { kind: "speech", speaker: "W", text: "No." },
          { kind: "caption", text: "DON’T ANSWER YOURSELF. ONE OF US DID." },
        ],
      },
    ],
  },
  {
    id: "12-21",
    number: "21",
    act: "Act Five — The Road",
    layout: "splash",
    panels: [
      {
        art: `${i12}/road.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Elias." },
          { kind: "speech", speaker: "Elias", text: "I see him." },
        ],
      },
    ],
  },
  {
    id: "12-22",
    number: "22",
    act: "Act Five — The Road",
    layout: "spread",
    panels: [
      {
        art: `${i12}/between.jpg`,
        balloons: [
          { kind: "speech", speaker: "Figure", text: "You opened for me." },
          { kind: "speech", speaker: "W", text: "Man, don’t." },
          { kind: "speech", speaker: "Elias", text: "Stay here." },
        ],
      },
    ],
  },
  {
    id: "12-23",
    number: "23",
    act: "Act Five — The Road",
    layout: "splash",
    panels: [
      {
        art: `${i12}/shove.jpg`,
        balloons: [
          { kind: "speech", speaker: "Figure", text: "You aren’t first." },
          { kind: "speech", speaker: "Elias", text: "First what." },
          { kind: "speech", speaker: "Elias", text: "You want me? I’m right here." },
        ],
      },
    ],
  },
  {
    id: "12-24",
    number: "24",
    act: "Act Five — The Road",
    layout: "splash",
    panels: [
      {
        art: `${i12}/watch.jpg`,
        balloons: [
          { kind: "caption", text: "Cold. Real. It pushes back." },
          { kind: "speech", speaker: "Elias", text: "NO." },
          { kind: "caption", text: "Wind. Dust. He does not claim it." },
          { kind: "caption", text: "It does not chase. It watches." },
        ],
      },
    ],
  },
  {
    id: "12-25",
    number: "25",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i12}/public.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "What it feel like." },
          { kind: "speech", speaker: "Elias", text: "Like me if I was dead." },
          { kind: "speech", speaker: "W", text: "Why me?" },
          { kind: "speech", speaker: "Elias", text: "I don’t know." },
          { kind: "speech", speaker: "W", text: "I can’t stay at my house." },
          { kind: "speech", speaker: "Elias", text: "You won’t." },
        ],
      },
    ],
  },
  {
    id: "12-26",
    number: "26",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i12}/drop.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Don’t come knocking." },
          { kind: "speech", speaker: "Elias", text: "I’ll call first." },
          { kind: "speech", speaker: "W", text: "That wasn’t you." },
          { kind: "speech", speaker: "Elias", text: "No." },
          { kind: "speech", speaker: "W", text: "Good. Cause I was about to beat your ass." },
        ],
      },
    ],
  },
  {
    id: "12-27",
    number: "27",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i12}/ma.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "W okay?" },
          { kind: "speech", speaker: "Elias", text: "For now." },
          { kind: "speech", speaker: "Elias", text: "Something used my face." },
        ],
      },
    ],
  },
  {
    id: "12-28",
    number: "28",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i12}/listen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Did it speak?" },
        ],
      },
    ],
  },
  {
    id: "12-29",
    number: "29",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i12}/phone.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "How you know to ask that?" },
        ],
      },
    ],
  },
  {
    id: "12-30",
    number: "30",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i12}/listen.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Mother",
            text: "Your grandfather used to say the worst thing wasn’t seeing yourself.",
          },
        ],
      },
    ],
  },
  {
    id: "12-31",
    number: "31",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i12}/ma.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "It was hearing what it knew." },
        ],
      },
    ],
  },
  {
    id: "12-32",
    number: "32",
    act: "Act Six — After",
    layout: "spread",
    panels: [
      {
        art: `${i12}/listen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What did it know?" },
        ],
      },
    ],
  },
];
