export type { Balloon, Panel, ComicPage } from "./types";
import type { ComicPage, IssueMeta } from "./types";

const c = "/comic";

export const ISSUE: IssueMeta = {
  n: 1,
  title: "SKYBLOOD",
  issue: "Issue #1",
  book: "The Temple Above",
  next: "Book Two — Weather in the Blood",
  cover: `${c}/cover.jpg`,
  logline:
    "Memphis. Night sort. Elias feels the hold before the klaxon. He turns back for Dez. Then the cloud focuses — and the sky says a name.",
};

export const pages: ComicPage[] = [
  {
    id: "p1",
    number: "1",
    act: "Cold Open — 1996",
    layout: "stack",
    panels: [
      {
        art: `${c}/airfield1996.jpg`,
        balloons: [
          { kind: "caption", text: "Thirty years ago." },
          { kind: "sfx", text: "hmmmm" },
        ],
      },
      {
        art: `${c}/woman1996.jpg`,
        position: "center top",
        balloons: [],
      },
    ],
  },
  {
    id: "p1b",
    number: "1",
    act: "Cold Open — 1996",
    layout: "stack",
    panels: [
      {
        art: `${c}/unmoving.jpg`,
        balloons: [
          { kind: "caption", text: "Something inside the cloud has edges." },
        ],
      },
      {
        art: `${c}/woman1996.jpg`,
        position: "bottom",
        balloons: [
          {
            kind: "speech",
            speaker: "Woman",
            text: "— no, listen. Listen. It has corners.",
          },
        ],
      },
    ],
  },
  {
    id: "p2",
    number: "2",
    act: "Cold Open — 1996",
    layout: "splash",
    panels: [
      {
        art: `${c}/p2-print.jpg`,
        balloons: [{ kind: "caption", text: "It was not overexposed." }],
      },
    ],
  },
  {
    id: "p3",
    number: "3",
    act: "Cold Open — 1996",
    layout: "splash",
    panels: [
      {
        art: `${c}/locker.jpg`,
        balloons: [{ kind: "caption", text: "Erasure looks like paperwork." }],
      },
    ],
  },
  {
    id: "p4",
    number: "4",
    act: "Cold Open — 1996",
    layout: "splash",
    panels: [
      {
        art: `${c}/payphone.jpg`,
        balloons: [
          { kind: "sfx", text: "tk … tk … tk" },
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book One — The Temple Above" },
        ],
      },
    ],
  },
  {
    id: "p5",
    number: "5",
    act: "Act One — The Man Who Watches the Sky",
    layout: "stack",
    panels: [
      {
        art: `${c}/hub.jpg`,
        balloons: [
          { kind: "caption", text: "Memphis. Now. Night sort." },
          { kind: "sfx", text: "WHRRRRRR  /  chk-chk-chk  /  beep beep" },
        ],
      },
      {
        art: `${c}/sort.jpg`,
        balloons: [
          { kind: "speech", speaker: "Dez", text: "How do you always —" },
          { kind: "speech", speaker: "Elias", text: "Label’s upside down. Every time." },
        ],
      },
    ],
  },
  {
    id: "p5b",
    number: "5",
    act: "Act One — The Man Who Watches the Sky",
    layout: "splash",
    panels: [
      {
        art: `${c}/listen.jpg`,
        balloons: [{ kind: "speech", speaker: "Elias", text: "Hold’s coming." }],
      },
    ],
  },
  {
    id: "p6",
    number: "6",
    act: "Act One — The Man Who Watches the Sky",
    layout: "stack",
    panels: [
      {
        art: `${c}/sort.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "Dez", text: "There’s no —" },
          { kind: "speech", speaker: "Elias", text: "Eleven minutes." },
        ],
      },
      {
        art: `${c}/hub.jpg`,
        balloons: [
          { kind: "sfx", text: "BWAAAP — BWAAAP" },
          { kind: "speech", speaker: "Dez", text: "Eleven minutes. How do you do that?" },
          { kind: "speech", speaker: "Elias", text: "I don’t." },
        ],
      },
    ],
  },
  {
    id: "p7",
    number: "7",
    act: "Act One — The Man Who Watches the Sky",
    layout: "splash",
    panels: [
      {
        art: `${c}/breakroom.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Worker 1",
            text: "Weatherman. Call it for Saturday — my sister’s doing the whole cookout thing —",
          },
          {
            kind: "speech",
            speaker: "Worker 2",
            text: "Nah, ask him for lottery numbers.",
          },
          {
            kind: "speech",
            speaker: "W",
            text: "When you said eleven minutes — what did it feel like?",
          },
          { kind: "speech", speaker: "Elias", text: "Pressure." },
          { kind: "speech", speaker: "W", text: "That’s not nothing." },
        ],
      },
    ],
  },
  {
    id: "p8",
    number: "8",
    act: "Act One — The Man Who Watches the Sky",
    layout: "splash",
    panels: [
      {
        art: `${c}/kitchen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Don’t say it." },
          { kind: "speech", speaker: "Elias", text: "I didn’t say anything." },
          {
            kind: "speech",
            speaker: "Sister",
            text: "You thought it in a real judgmental way.",
          },
          { kind: "speech", speaker: "Sister", text: "What’s wrong with your face." },
          { kind: "speech", speaker: "Elias", text: "Nothing’s wrong with my face." },
          {
            kind: "speech",
            speaker: "Sister",
            text: "You’ve got the face you get when you’re not saying something.",
          },
        ],
      },
    ],
  },
  {
    id: "p9",
    number: "9",
    act: "Act One — The Man Who Watches the Sky",
    layout: "splash",
    panels: [
      {
        art: `${c}/kitchen.jpg`,
        position: "right",
        balloons: [
          {
            kind: "caption",
            text: "Nobody in this house has talked about the weather in twenty years.",
          },
        ],
      },
    ],
  },
  {
    id: "p10",
    number: "10",
    act: "Act One — The Man Who Watches the Sky",
    layout: "stack",
    panels: [
      {
        art: `${c}/win-sleep.jpg`,
        balloons: [
          { kind: "caption", text: "Daylight after night sort. He sleeps facing the wall." },
        ],
      },
      {
        art: `${c}/win-stop.jpg`,
        balloons: [
          { kind: "caption", text: "Rain. Ordinary. Then one droplet stops." },
        ],
      },
    ],
  },
  {
    id: "p10b",
    number: "10",
    act: "Act One — The Man Who Watches the Sky",
    layout: "splash",
    panels: [
      {
        art: `${c}/win-three.jpg`,
        balloons: [
          { kind: "caption", text: "Another slows. Climbs. Three settle." },
          { kind: "caption", text: "He never sees it." },
        ],
      },
    ],
  },
  {
    id: "p10c",
    number: "10",
    act: "Act One — The Man Who Watches the Sky",
    layout: "splash",
    panels: [
      {
        art: `${c}/win-turn.jpg`,
        balloons: [
          { kind: "caption", text: "He turns in his sleep. They run down. Normal again." },
        ],
      },
    ],
  },
  {
    id: "p11",
    number: "11",
    act: "Act Two — Something Isn’t Moving",
    layout: "stack",
    panels: [
      {
        art: `${c}/sort.jpg`,
        balloons: [
          { kind: "speech", speaker: "Ops", text: "Sensor’s drunk again." },
          { kind: "speech", speaker: "Ops", text: "Third time this month." },
        ],
      },
      {
        art: `${c}/listen.jpg`,
        position: "center",
        balloons: [{ kind: "caption", text: "The cell isn’t moving." }],
      },
    ],
  },
  {
    id: "p12",
    number: "12",
    act: "Act Two — Something Isn’t Moving",
    layout: "splash",
    panels: [
      {
        art: `${c}/locker.jpg`,
        position: "left",
        balloons: [
          {
            kind: "speech",
            speaker: "Contractor",
            text: "Three years of lightning-hold logs. Insurance audit. Shouldn’t take long.",
          },
          { kind: "speech", speaker: "Ops", text: "Summaries or the whole thing?" },
          { kind: "speech", speaker: "Contractor", text: "You keep the originals?" },
          { kind: "speech", speaker: "Ops", text: "Signed and countersigned. Company policy." },
        ],
      },
    ],
  },
  {
    id: "p13",
    number: "13",
    act: "Act Two — Something Isn’t Moving",
    layout: "stack",
    panels: [
      {
        art: `${c}/sort.jpg`,
        balloons: [
          { kind: "caption", text: "Before he decides to move, his hand writes into a gap:  M—" },
          {
            kind: "speech",
            speaker: "Dez",
            text: "That row’s been light for months, man. Whose name are you writing?",
          },
          { kind: "speech", speaker: "Elias", text: "I don’t know." },
        ],
      },
    ],
  },
  {
    id: "p14",
    number: "14",
    act: "Act Two — Something Isn’t Moving",
    layout: "stack",
    panels: [
      { art: `${c}/listen.jpg`, balloons: [] },
      {
        art: `${c}/unmoving.jpg`,
        balloons: [
          { kind: "caption", text: "Cloud streaming hard to the east. One of them is not moving." },
          { kind: "speech", speaker: "Elias", text: "Hey — you see that?" },
        ],
      },
    ],
  },
  {
    id: "p15",
    number: "15",
    act: "Act Two — Something Isn’t Moving",
    layout: "stack",
    panels: [
      {
        art: `${c}/hub.jpg`,
        balloons: [{ kind: "speech", speaker: "Coworker", text: "Yeah. Big one." }],
      },
      {
        art: `${c}/debris.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "Paper, dust, a foam cup. A tight circle. Then they drop. He did not ask.",
          },
        ],
      },
    ],
  },
  {
    id: "p16",
    number: "16",
    act: "Act Two — Something Isn’t Moving",
    layout: "splash",
    panels: [
      {
        art: `${c}/elias.jpg`,
        balloons: [
          { kind: "caption", text: "He puts his hands in his pockets and walks back toward the sort." },
        ],
      },
    ],
  },
  {
    id: "p17",
    number: "17",
    act: "Act Three — The Hold",
    layout: "stack",
    panels: [
      {
        art: `${c}/hub.jpg`,
        balloons: [
          { kind: "sfx", text: "KRRRR  /  WHUMP  /  beep beep beep" },
          {
            kind: "speech",
            speaker: "Ops",
            text: "Lightning hold, lightning hold. Everybody in. Now.",
          },
        ],
      },
      {
        art: `${c}/rescue.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "Dez’s boot catches beneath a loose cargo strap. The net drags toward a loader wheel. Everyone else is already running.",
          },
        ],
      },
    ],
  },
  {
    id: "p18",
    number: "18",
    act: "Act Three — The Hold",
    layout: "stack",
    panels: [
      {
        art: `${c}/rescue.jpg`,
        position: "right",
        balloons: [
          {
            kind: "caption",
            text: "He turns back into the weather. Frees the boot. Shoves Dez toward shelter. Takes the dangerous side.",
          },
        ],
      },
      {
        art: `${c}/listen.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "The last bay door coming down. Yellow light narrowing to a strip. He lifts his head.",
          },
        ],
      },
    ],
  },
  {
    id: "p19",
    number: "19",
    act: "Act Three — The Hold",
    layout: "splash",
    panels: [
      {
        art: `${c}/focusing.jpg`,
        balloons: [
          { kind: "caption", text: "Grey on grey. Then an edge. Straight. Wrong. It is focusing, not appearing." },
        ],
      },
    ],
  },
  {
    id: "p20",
    number: "20–21",
    act: "Act Three — The Hold",
    layout: "spread",
    panels: [{ art: `${c}/temple.jpg`, balloons: [] }],
  },
  {
    id: "p22",
    number: "22",
    act: "Act Three — The Hold",
    layout: "splash",
    panels: [
      {
        art: `${c}/photograph.jpg`,
        balloons: [{ kind: "caption", text: "Eleven more times." }],
      },
    ],
  },
  {
    id: "p23",
    number: "23",
    act: "Act Four — No Thunder",
    layout: "splash",
    silent: true,
    panels: [
      {
        art: `${c}/strike.jpg`,
        balloons: [
          { kind: "caption", text: "The strike. Forty feet from him. No thunder." },
        ],
      },
    ],
  },
  {
    id: "p24",
    number: "24",
    act: "Act Four — No Thunder",
    layout: "spread",
    silent: true,
    panels: [{ art: `${c}/page24.jpg`, balloons: [] }],
  },
  {
    id: "p25",
    number: "25",
    act: "Act Four — No Thunder",
    layout: "splash",
    silent: true,
    panels: [
      {
        art: `${c}/page24.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "Rain on his face. No sound." },
          { kind: "speech", speaker: "Voice", text: "Way-Opener." },
        ],
      },
    ],
  },
  {
    id: "p26",
    number: "26",
    act: "Act Four — No Thunder",
    layout: "splash",
    silent: true,
    panels: [
      {
        art: `${c}/found.jpg`,
        balloons: [
          { kind: "speech", speaker: "Dez", text: "— hit, he got hit, I saw it —" },
          {
            kind: "speech",
            speaker: "Worker",
            text: "He didn’t get hit, look at him, he’s fine —",
          },
        ],
      },
    ],
  },
  {
    id: "p27",
    number: "27",
    act: "Act Four — No Thunder",
    layout: "splash",
    silent: true,
    panels: [
      {
        art: `${c}/elias.jpg`,
        balloons: [
          { kind: "speech", speaker: "Supervisor", text: "Take me through it." },
          { kind: "speech", speaker: "Elias", text: "There was a building." },
          {
            kind: "speech",
            speaker: "Elias",
            text: "In the cloud. Over the field. Tiers, like — a tower. I photographed it.",
          },
          { kind: "speech", speaker: "Supervisor", text: "Okay. Near strike. That’s a hell of a thing." },
          { kind: "speech", speaker: "Supervisor", text: "Take the week. Paid. I’ll put it down as shock." },
          {
            kind: "caption",
            text: "…reports disorientation consistent with proximity strike…",
          },
        ],
      },
    ],
  },
  {
    id: "p28",
    number: "28",
    act: "Act Five — The Photograph",
    layout: "splash",
    silent: true,
    panels: [
      {
        art: `${c}/photograph.jpg`,
        balloons: [
          { kind: "speech", speaker: "Dez", text: "… Yeah, that’s a big cloud, man." },
          { kind: "speech", speaker: "Dez", text: "Storm was crazy." },
          { kind: "caption", text: "The record exists. It has not been received." },
        ],
      },
    ],
  },
  {
    id: "p29",
    number: "29",
    act: "Act Five — The Photograph",
    layout: "splash",
    silent: true,
    panels: [
      {
        art: `${c}/kitchen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Okay. Walk me through it again." },
          {
            kind: "caption",
            text: "She did not say she believed him. It was the first time in his adult life that anyone had asked for more instead of less.",
          },
        ],
      },
    ],
  },
  {
    id: "p30",
    number: "30",
    act: "Act Five — The Photograph",
    layout: "splash",
    silent: true,
    panels: [
      {
        art: `${c}/mother.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Ma, look at this thing Elias —" },
          { kind: "speech", speaker: "Mother", text: "Delete it." },
          { kind: "speech", speaker: "Sister", text: "… Ma?" },
        ],
      },
    ],
  },
  {
    id: "p31",
    number: "31",
    act: "Act Five — The Photograph",
    layout: "splash",
    silent: true,
    panels: [
      {
        art: `${c}/elias.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "A crew photo from two years ago. Eight people. Their arms around something. The spacing is for nine.",
          },
        ],
      },
    ],
  },
  {
    id: "p32",
    number: "32",
    act: "Act Five — The Photograph",
    layout: "splash",
    silent: true,
    panels: [
      {
        art: `${c}/win-awake.jpg`,
        balloons: [
          { kind: "caption", text: "Same window. He is awake." },
          { kind: "caption", text: "Rain gone. Three droplets remain." },
        ],
      },
    ],
  },
  {
    id: "p32b",
    number: "32",
    act: "Act Five — The Photograph",
    layout: "splash",
    silent: true,
    panels: [
      {
        art: `${c}/win-open.jpg`,
        balloons: [
          { kind: "caption", text: "He unlocks it. Opens it." },
          { kind: "caption", text: "The three fall. One ordinary drop stays." },
        ],
      },
    ],
  },
  {
    id: "p32c",
    number: "32",
    act: "Act Five — The Photograph",
    layout: "spread",
    silent: true,
    panels: [
      {
        art: `${c}/win-up.jpg`,
        balloons: [
          { kind: "caption", text: "HE THOUGHT HE CONTROLLED THE SKY." },
          { kind: "caption", text: "THE SKY WAS WAITING FOR HIM." },
          { kind: "caption", text: "TO BE CONTINUED" },
          { kind: "caption", text: "SKYBLOOD Book Two — Weather in the Blood" },
        ],
      },
    ],
  },
];
