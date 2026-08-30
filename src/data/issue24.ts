import type { ComicPage, IssueMeta } from "./types";

const i24 = "/comic/i24";

export const ISSUE24: IssueMeta = {
  n: 24,
  title: "SKYBLOOD",
  issue: "Season Two — Issue #11",
  book: "The Man Who Stayed",
  cover: `${i24}/cover.jpg`,
  logline:
    "Thomas survived. That may only have been the result. He did not choose Abel. He chose the side he was standing on. Record count: 1. Body count: 2. The face in the opening is not him.",
};

export const pages24: ComicPage[] = [
  {
    id: "24-01",
    number: "1",
    act: "Act One — What Thomas Left",
    layout: "splash",
    panels: [
      {
        art: `${i24}/kitchen.jpg`,
        balloons: [
          { kind: "caption", text: "Cassette. Notebook. ABEL — CLOSED. REOPENING ELIGIBLE. Four kinds of evidence. No agreement." },
        ],
      },
    ],
  },
  {
    id: "24-02",
    number: "2",
    act: "Act One — What Thomas Left",
    layout: "splash",
    panels: [
      {
        art: `${i24}/pad.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "That list gonna survive us?" },
          { kind: "speech", speaker: "Elias", text: "Probably not." },
        ],
      },
    ],
  },
  {
    id: "24-03",
    number: "3",
    act: "Act One — What Thomas Left",
    layout: "splash",
    panels: [
      {
        art: `${i24}/table.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Mae knew Abel. Thomas knew Abel. Paper closed something. Everybody remembers Thomas. That’s what we know." },
        ],
      },
    ],
  },
  {
    id: "24-04",
    number: "4",
    act: "Act One — What Thomas Left",
    layout: "splash",
    panels: [
      {
        art: `${i24}/man.jpg`,
        balloons: [
          { kind: "speech", speaker: "Abel", text: "Thomas chose. I don’t know what. Mae was right about that." },
        ],
      },
    ],
  },
  {
    id: "24-05",
    number: "5",
    act: "Act One — What Thomas Left",
    layout: "splash",
    panels: [
      {
        art: `${i24}/who.jpg`,
        balloons: [
          { kind: "speech", speaker: "Abel", text: "I remember being angry at him. That ain’t proof. It’s mine, though." },
        ],
      },
    ],
  },
  {
    id: "24-06",
    number: "6",
    act: "Act One — What Thomas Left",
    layout: "splash",
    panels: [
      {
        art: `${i24}/keys.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Then we stop asking what you remember. We ask what he carried home." },
        ],
      },
    ],
  },
  {
    id: "24-07",
    number: "7",
    act: "Act Two — The Last Shift",
    layout: "splash",
    panels: [
      {
        art: `${i24}/form.jpg`,
        balloons: [
          { kind: "caption", text: "Receipts. Gloves. Union card. Bent flashlight. Folded time sheet." },
        ],
      },
    ],
  },
  {
    id: "24-08",
    number: "8",
    act: "Act Two — The Last Shift",
    layout: "splash",
    panels: [
      {
        art: `${i24}/july14.jpg`,
        balloons: [
          { kind: "caption", text: "One date circled. Same date as Mae’s cassette." },
        ],
      },
    ],
  },
  {
    id: "24-09",
    number: "9",
    act: "Act Two — The Last Shift",
    layout: "splash",
    panels: [
      {
        art: `${i24}/timesheet.jpg`,
        balloons: [
          { kind: "caption", text: "Two employee numbers beside Thomas’s name. One crossed out. Different ink." },
        ],
      },
    ],
  },
  {
    id: "24-10",
    number: "10",
    act: "Act Two — The Last Shift",
    layout: "splash",
    panels: [
      {
        art: `${i24}/receiver.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "He only had one." },
          { kind: "speech", speaker: "Elias", text: "You remember one." },
        ],
      },
    ],
  },
  {
    id: "24-11",
    number: "11",
    act: "Act Two — The Last Shift",
    layout: "splash",
    panels: [
      {
        art: `${i24}/notes.jpg`,
        balloons: [
          { kind: "caption", text: "Thomas’s hand. DON’T CLOCK OUT FOR ME." },
        ],
      },
    ],
  },
  {
    id: "24-12",
    number: "12",
    act: "Act Two — The Last Shift",
    layout: "splash",
    panels: [
      {
        art: `${i24}/listen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Your hours are your hours. Don’t let somebody else leave in your place." },
        ],
      },
    ],
  },
  {
    id: "24-13",
    number: "13",
    act: "Act Three — The Board",
    layout: "splash",
    panels: [
      {
        art: `${i24}/photo.jpg`,
        balloons: [
          { kind: "caption", text: "Thomas visible. Abel not. Two empty badge hooks beside Thomas’s position." },
        ],
      },
    ],
  },
  {
    id: "24-14",
    number: "14",
    act: "Act Three — The Board",
    layout: "splash",
    panels: [
      {
        art: `${i24}/sister.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Built for two." },
        ],
      },
    ],
  },
  {
    id: "24-15",
    number: "15",
    act: "Act Three — The Board",
    layout: "splash",
    panels: [
      {
        art: `${i24}/w.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Could’ve been anybody." },
          { kind: "speech", speaker: "Elias", text: "Exactly. Find the badge numbers." },
        ],
      },
    ],
  },
  {
    id: "24-16",
    number: "16",
    act: "Act Three — The Board",
    layout: "splash",
    panels: [
      {
        art: `${i24}/eligible.jpg`,
        balloons: [
          { kind: "caption", text: "Another number. Same department. Same shift. No name. Fibers thinner. Closure scar." },
        ],
      },
    ],
  },
  {
    id: "24-17",
    number: "17",
    act: "Act Three — The Board",
    layout: "splash",
    panels: [
      {
        art: `${i24}/choice.jpg`,
        balloons: [
          { kind: "speech", speaker: "Abel", text: "I know that. Don’t know from where." },
        ],
      },
    ],
  },
  {
    id: "24-18",
    number: "18",
    act: "Act Three — The Board",
    layout: "splash",
    panels: [
      {
        art: `${i24}/pad.jpg`,
        balloons: [
          { kind: "caption", text: "Elias writes the number. Not Abel’s name. Evidence first." },
        ],
      },
    ],
  },
  {
    id: "24-19",
    number: "19",
    act: "Act Four — The Choice",
    layout: "splash",
    panels: [
      {
        art: `${i24}/player.jpg`,
        balloons: [
          { kind: "caption", text: "They rewind farther. A section nobody had played." },
        ],
      },
    ],
  },
  {
    id: "24-20",
    number: "20",
    act: "Act Four — The Choice",
    layout: "splash",
    panels: [
      {
        art: `${i24}/tapes.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mae", text: "Thomas, don’t touch it." },
          { kind: "speech", speaker: "Thomas", text: "I’m not leaving him there." },
        ],
      },
    ],
  },
  {
    id: "24-21",
    number: "21",
    act: "Act Four — The Choice",
    layout: "splash",
    panels: [
      {
        art: `${i24}/still.jpg`,
        balloons: [
          { kind: "speech", speaker: "Thomas", text: "You said it closes one." },
          { kind: "speech", speaker: "Abel", text: "I said it closes an answer." },
        ],
      },
    ],
  },
  {
    id: "24-22",
    number: "22",
    act: "Act Four — The Choice",
    layout: "splash",
    panels: [
      {
        art: `${i24}/faceoff.jpg`,
        balloons: [
          { kind: "speech", speaker: "Thomas", text: "If I walk, it follows me." },
          { kind: "speech", speaker: "Abel", text: "If you stay, it keeps looking." },
          { kind: "speech", speaker: "Thomas", text: "Better me than you." },
        ],
      },
    ],
  },
  {
    id: "24-23",
    number: "23",
    act: "Act Four — The Choice",
    layout: "splash",
    panels: [
      {
        art: `${i24}/house.jpg`,
        balloons: [
          { kind: "speech", speaker: "Abel", text: "That’s not your choice." },
          { kind: "speech", speaker: "Thomas", text: "It is if I’m the one holding the door." },
        ],
      },
    ],
  },
  {
    id: "24-24",
    number: "24",
    act: "Act Four — The Choice",
    layout: "splash",
    panels: [
      {
        art: `${i24}/walk.jpg`,
        balloons: [
          { kind: "speech", speaker: "Thomas", text: "Abel, go." },
          { kind: "speech", speaker: "Abel", text: "I said no." },
          { kind: "caption", text: "Metal. A latch. A heavy door moving." },
        ],
      },
    ],
  },
  {
    id: "24-25",
    number: "25",
    act: "Act Four — The Choice",
    layout: "splash",
    panels: [
      {
        art: `${i24}/timesheet.jpg`,
        balloons: [
          { kind: "speech", speaker: "Thomas", text: "DON’T CLOCK OUT FOR ME." },
          { kind: "caption", text: "Pressure. Mae screaming both names." },
        ],
      },
    ],
  },
  {
    id: "24-26",
    number: "26",
    act: "Act Five — He Didn’t Choose Abel",
    layout: "splash",
    panels: [
      {
        art: `${i24}/listen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Abel", text: "You closed it." },
          { kind: "speech", speaker: "Thomas", text: "I closed the door." },
        ],
      },
    ],
  },
  {
    id: "24-27",
    number: "27",
    act: "Act Five — He Didn’t Choose Abel",
    layout: "splash",
    panels: [
      {
        art: `${i24}/site.jpg`,
        balloons: [
          { kind: "speech", speaker: "Thomas", text: "I didn’t choose you. I chose the side I was standing on." },
        ],
      },
    ],
  },
  {
    id: "24-28",
    number: "28",
    act: "Act Five — He Didn’t Choose Abel",
    layout: "splash",
    panels: [
      {
        art: `${i24}/man.jpg`,
        balloons: [
          { kind: "speech", speaker: "Abel", text: "That’s what I hated him for. He thought staying wasn’t choosing." },
        ],
      },
    ],
  },
  {
    id: "24-29",
    number: "29",
    act: "Act Five — He Didn’t Choose Abel",
    layout: "splash",
    panels: [
      {
        art: `${i24}/receiver.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Was he wrong?" },
          { kind: "speech", speaker: "Abel", text: "I don’t know." },
        ],
      },
    ],
  },
  {
    id: "24-30",
    number: "30",
    act: "Act Five — He Didn’t Choose Abel",
    layout: "splash",
    panels: [
      {
        art: `${i24}/eligible.jpg`,
        balloons: [
          { kind: "caption", text: "THOMAS MARROW — RETAINED. CLOSURE EVENT: BOUNDARY RESOLUTION. PARTICIPANT COUNT: 2." },
        ],
      },
    ],
  },
  {
    id: "24-31",
    number: "31",
    act: "Act Five — He Didn’t Choose Abel",
    layout: "splash",
    panels: [
      {
        art: `${i24}/counts.jpg`,
        balloons: [
          { kind: "caption", text: "SURVIVING RECORD COUNT: 1. SURVIVING BODY COUNT: 2." },
          { kind: "speech", speaker: "Elias", text: "That’s what Paper says survived." },
        ],
      },
    ],
  },
  {
    id: "24-32",
    number: "32",
    act: "Act Five — He Didn’t Choose Abel",
    layout: "splash",
    panels: [
      {
        art: `${i24}/cavity.jpg`,
        balloons: [
          { kind: "speech", speaker: "Voice", text: "The version that remembered both." },
          { kind: "speech", speaker: "Abel", text: "That’s not Thomas." },
          { kind: "speech", speaker: "Figure", text: "He said the same thing about you." },
          { kind: "caption", text: "TO BE CONTINUED" },
        ],
      },
    ],
  },
];
