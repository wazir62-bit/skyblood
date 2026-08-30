import type { ComicPage, IssueMeta } from "./types";

const i13 = "/comic/i13";

export const ISSUE13: IssueMeta = {
  n: 13,
  title: "SKYBLOOD",
  issue: "Issue #13",
  book: "When the Sky Answers",
  cover: `${i13}/cover.jpg`,
  logline:
    "Four rules. A fire on the old network. Three missing. The face thinks it knows what he’ll die for. He chooses a stranger. The sky answers a decision. Grandfather was not alone.",
};

export const pages13: ComicPage[] = [
  {
    id: "13-01",
    number: "1",
    act: "Act One — What It Knew",
    layout: "splash",
    panels: [
      {
        art: `${i13}/kitchen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What did it know?" },
          { kind: "speech", speaker: "Mother", text: "People. Things about people. Things it shouldn’t know." },
        ],
      },
    ],
  },
  {
    id: "13-02",
    number: "2",
    act: "Act One — What It Knew",
    layout: "splash",
    panels: [
      {
        art: `${i13}/listen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Never tell it who matters to you." },
          { kind: "caption", text: "He thinks of W." },
        ],
      },
    ],
  },
  {
    id: "13-03",
    number: "3",
    act: "Act One — What It Knew",
    layout: "splash",
    panels: [
      {
        art: `${i13}/kitchen.jpg`,
        balloons: [
          { kind: "caption", text: "Don’t answer three after the first thunder." },
          { kind: "caption", text: "Don’t follow a familiar if they don’t call your name." },
          { kind: "caption", text: "When the wind goes completely still, get under something." },
          { kind: "caption", text: "If it comes wearing you, don’t let it see what you’ll die for." },
          { kind: "speech", speaker: "Elias", text: "Why was Granddaddy telling you this?" },
          { kind: "speech", speaker: "Mother", text: "He wasn’t. He was telling you." },
        ],
      },
    ],
  },
  {
    id: "13-04",
    number: "4",
    act: "Act One — What It Knew",
    layout: "spread",
    panels: [
      {
        art: `${i13}/cover.jpg`,
        balloons: [
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book Thirteen — When the Sky Answers" },
        ],
      },
    ],
  },
  {
    id: "13-05",
    number: "5",
    act: "Act Two — Smoke",
    layout: "splash",
    panels: [
      {
        art: `${i13}/phone.jpg`,
        balloons: [
          { kind: "caption", text: "Once. Twice. Three times." },
          { kind: "caption", text: "CALL ME. NOW." },
          { kind: "caption", text: "Smoke rising above Memphis." },
        ],
      },
    ],
  },
  {
    id: "13-06",
    number: "6",
    act: "Act Two — Smoke",
    layout: "splash",
    panels: [
      {
        art: `${i13}/tv.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Turn the news on." },
          { kind: "caption", text: "At the edge of the live shot: him." },
          { kind: "caption", text: "He is sitting beside her." },
        ],
      },
    ],
  },
  {
    id: "13-07",
    number: "7",
    act: "Act Two — Smoke",
    layout: "splash",
    panels: [
      {
        art: `${i13}/go.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Don’t go." },
          { kind: "speech", speaker: "Elias", text: "People in there." },
          { kind: "speech", speaker: "Mother", text: "That’s why it’s there." },
          { kind: "speech", speaker: "Elias", text: "It thinks it knows." },
        ],
      },
    ],
  },
  {
    id: "13-08",
    number: "8",
    act: "Act Three — Headcount",
    layout: "splash",
    panels: [
      {
        art: `${i13}/perim.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You need to leave." },
          { kind: "speech", speaker: "W", text: "I’m staying until you do. I ain’t running inside no burning building." },
        ],
      },
    ],
  },
  {
    id: "13-09",
    number: "9",
    act: "Act Three — Headcount",
    layout: "splash",
    panels: [
      {
        art: `${i13}/map.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Where’s the other three?" },
          { kind: "caption", text: "Not a vision. A shift. A number." },
        ],
      },
    ],
  },
  {
    id: "13-10",
    number: "10",
    act: "Act Three — Headcount",
    layout: "splash",
    panels: [
      {
        art: `${i13}/wind.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Move those people. Wind’s about to turn." },
          { kind: "speech", speaker: "Responder", text: "Why?" },
          { kind: "speech", speaker: "Elias", text: "Please." },
          { kind: "caption", text: "Seconds later the smoke takes the old ground." },
          { kind: "speech", speaker: "W", text: "You knew." },
        ],
      },
    ],
  },
  {
    id: "13-11",
    number: "11",
    act: "Act Three — Headcount",
    layout: "splash",
    panels: [
      {
        art: `${i13}/wait.jpg`,
        balloons: [
          { kind: "caption", text: "Two reachable. One isolated. Alive." },
          { kind: "speech", speaker: "W", text: "Don’t." },
          { kind: "speech", speaker: "Elias", text: "That’s usually my line." },
          { kind: "speech", speaker: "Elias", text: "Stay here." },
          { kind: "speech", speaker: "W", text: "Bring your ass back." },
        ],
      },
    ],
  },
  {
    id: "13-12",
    number: "12",
    act: "Act Four — Inside",
    layout: "splash",
    panels: [
      {
        art: `${i13}/under.jpg`,
        balloons: [
          { kind: "caption", text: "The wind disappears." },
          { kind: "caption", text: "Get under something." },
          { kind: "caption", text: "The rule saves two lives." },
        ],
      },
    ],
  },
  {
    id: "13-13",
    number: "13",
    act: "Act Four — Inside",
    layout: "splash",
    panels: [
      {
        art: `${i13}/carry.jpg`,
        balloons: [
          { kind: "caption", text: "Heat. Metal. Sprinklers." },
          { kind: "caption", text: "A man he does not know." },
        ],
      },
    ],
  },
  {
    id: "13-14",
    number: "14",
    act: "Act Four — Inside",
    layout: "splash",
    panels: [
      {
        art: `${i13}/nobody.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You see somebody?" },
          { kind: "speech", speaker: "Worker", text: "No." },
        ],
      },
    ],
  },
  {
    id: "13-15",
    number: "15",
    act: "Act Four — Inside",
    layout: "splash",
    panels: [
      {
        art: `${i13}/face.jpg`,
        balloons: [
          { kind: "speech", speaker: "Figure", text: "Leave him. He isn’t yours. You don’t know him." },
          { kind: "speech", speaker: "Elias", text: "Don’t have to." },
        ],
      },
    ],
  },
  {
    id: "13-16",
    number: "16",
    act: "Act Four — Inside",
    layout: "splash",
    panels: [
      {
        art: `${i13}/down.jpg`,
        balloons: [
          { kind: "caption", text: "Cold. Heavy. Real. He gets up." },
          { kind: "speech", speaker: "Figure", text: "Again. You always choose again." },
        ],
      },
    ],
  },
  {
    id: "13-17",
    number: "17",
    act: "Act Five — The Choice",
    layout: "splash",
    panels: [
      {
        art: `${i13}/choice.jpg`,
        balloons: [
          { kind: "speech", speaker: "Figure", text: "It heard you." },
          { kind: "speech", speaker: "Elias", text: "What heard me?" },
          { kind: "speech", speaker: "Figure", text: "You still think you’re the one waking up?" },
        ],
      },
    ],
  },
  {
    id: "13-18",
    number: "18",
    act: "Act Five — The Choice",
    layout: "spread",
    panels: [
      {
        art: `${i13}/turn.jpg`,
        balloons: [
          { kind: "caption", text: "The answer walks away." },
          { kind: "caption", text: "The stranger can’t breathe." },
          { kind: "caption", text: "He turns his back on the mystery." },
        ],
      },
    ],
  },
  {
    id: "13-19",
    number: "19",
    act: "Act Five — The Choice",
    layout: "splash",
    panels: [
      {
        art: `${i13}/three.jpg`,
        balloons: [
          { kind: "caption", text: "Three missing. Three alive." },
          { kind: "caption", text: "The face is gone. The question is not." },
        ],
      },
    ],
  },
  {
    id: "13-20",
    number: "20",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/rainw.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "You get beat up by yourself again?" },
          { kind: "speech", speaker: "W", text: "That wind. You do that?" },
          { kind: "speech", speaker: "Elias", text: "No." },
          { kind: "speech", speaker: "W", text: "You sure?" },
          { kind: "speech", speaker: "Elias", text: "No." },
        ],
      },
    ],
  },
  {
    id: "13-21",
    number: "21",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/rain.jpg`,
        balloons: [
          { kind: "caption", text: "Not command. Relationship." },
        ],
      },
    ],
  },
  {
    id: "13-22",
    number: "22",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/who.jpg`,
        balloons: [
          { kind: "speech", speaker: "Responder", text: "You called that wind before our instruments did. Who are you?" },
          { kind: "speech", speaker: "Elias", text: "Elias—" },
          { kind: "sfx", text: "THUNDER" },
        ],
      },
    ],
  },
  {
    id: "13-23",
    number: "23",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/dawn.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Your grandfather came home looking like that sometimes." },
          { kind: "speech", speaker: "Elias", text: "From where?" },
          { kind: "speech", speaker: "Mother", text: "I don’t know." },
          { kind: "speech", speaker: "Elias", text: "We find out." },
        ],
      },
    ],
  },
  {
    id: "13-24",
    number: "24",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/notes.jpg`,
        balloons: [
          { kind: "caption", text: "Names. Dates. Cities. HEARD 3. DID NOT ANSWER." },
          { kind: "speech", speaker: "Elias", text: "What’s First Sky?" },
          { kind: "speech", speaker: "Mother", text: "I don’t know." },
          { kind: "caption", text: "THEY WILL COME BACK FOR THE BLOOD." },
          { kind: "speech", speaker: "Mother", text: "Who is they?" },
        ],
      },
    ],
  },
  {
    id: "13-25",
    number: "25",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/photo.jpg`,
        balloons: [
          { kind: "caption", text: "The dead address before the facility." },
          { kind: "caption", text: "Grandfather was not alone." },
        ],
      },
    ],
  },
  {
    id: "13-26",
    number: "26",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/sleep.jpg`,
        balloons: [
          { kind: "caption", text: "Elias sleeps. The notebook is closed." },
        ],
      },
    ],
  },
  {
    id: "13-27",
    number: "27",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/sky.jpg`,
        balloons: [
          { kind: "caption", text: "Above the house. Above Memphis." },
        ],
      },
    ],
  },
  {
    id: "13-28",
    number: "28",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/ma-sleep.jpg`,
        balloons: [
          { kind: "caption", text: "Mother sleeps. The silence is done." },
        ],
      },
    ],
  },
  {
    id: "13-29",
    number: "29",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/w-sleep.jpg`,
        balloons: [
          { kind: "caption", text: "W sleeps somewhere that is not home." },
        ],
      },
    ],
  },
  {
    id: "13-30",
    number: "30",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/back.jpg`,
        balloons: [
          { kind: "caption", text: "BACK." },
          { kind: "caption", text: "Not arriving. Returning." },
        ],
      },
    ],
  },
  {
    id: "13-31",
    number: "31",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/house.jpg`,
        balloons: [
          { kind: "caption", text: "The sky hasn’t changed." },
        ],
      },
    ],
  },
  {
    id: "13-32",
    number: "32",
    act: "Act Six — After",
    layout: "spread",
    panels: [
      {
        art: `${i13}/up.jpg`,
        balloons: [
          { kind: "caption", text: "Elias has." },
          { kind: "caption", text: "SKYBLOOD — SEASON ONE END" },
          { kind: "caption", text: "THE SKY WAS NEVER EMPTY." },
        ],
      },
    ],
  },
  {
    id: "13-31",
    number: "31",
    act: "Act Six — After",
    layout: "splash",
    panels: [
      {
        art: `${i13}/photo.jpg`,
        balloons: [
          { kind: "caption", text: "The sky hasn’t changed." },
        ],
      },
    ],
  },
  {
    id: "13-32",
    number: "32",
    act: "Act Six — After",
    layout: "spread",
    panels: [
      {
        art: `${i13}/sky.jpg`,
        balloons: [
          { kind: "caption", text: "Elias has." },
          { kind: "caption", text: "SKYBLOOD — SEASON ONE END" },
          { kind: "caption", text: "THE SKY WAS NEVER EMPTY." },
        ],
      },
    ],
  },
];
