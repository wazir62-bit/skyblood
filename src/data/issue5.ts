import type { ComicPage, IssueMeta } from "./types";

const i5 = "/comic/i5";

export const ISSUE5: IssueMeta = {
  n: 5,
  title: "SKYBLOOD",
  issue: "Issue #5",
  book: "The First Pole",
  cover: `${i5}/cover.jpg`,
  logline:
    "They stage a hold to see if he will open a way on command. He turns back for a living body. Then they offer him first. He stays last.",
};

export const pages5: ComicPage[] = [
  {
    id: "5-01",
    number: "1",
    act: "Act One — They Are on the Floor",
    layout: "splash",
    panels: [
      {
        art: `${i5}/hub.jpg`,
        balloons: [
          { kind: "caption", text: "Memphis. Night sort. He goes round the walls." },
        ],
      },
    ],
  },
  {
    id: "5-02",
    number: "2",
    act: "Act One — They Are on the Floor",
    layout: "splash",
    panels: [
      {
        art: `${i5}/vest.jpg`,
        balloons: [{ kind: "caption", text: "Clock in. The vest is still a vest." }],
      },
    ],
  },
  {
    id: "5-03",
    number: "3",
    act: "Act One — They Are on the Floor",
    layout: "splash",
    panels: [
      {
        art: `${i5}/watch.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "The forgettable jacket brought a friend. They are not watching the sky.",
          },
        ],
      },
    ],
  },
  {
    id: "5-04",
    number: "4",
    act: "Act One — They Are on the Floor",
    layout: "spread",
    panels: [
      {
        art: `${i5}/cover.jpg`,
        balloons: [
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book Five — The First Pole" },
        ],
      },
    ],
  },
  {
    id: "5-05",
    number: "5",
    act: "Act One — They Are on the Floor",
    layout: "splash",
    panels: [
      {
        art: `${i5}/breakroom.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "W",
            text: "They’re writing everything down this week. Don’t be interesting.",
          },
        ],
      },
    ],
  },
  {
    id: "5-06",
    number: "6",
    act: "Act One — They Are on the Floor",
    layout: "splash",
    panels: [
      {
        art: `${i5}/board.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "Someone has moved a blank tag to the front of the first row.",
          },
        ],
      },
    ],
  },
  {
    id: "5-07",
    number: "7",
    act: "Act One — They Are on the Floor",
    layout: "splash",
    panels: [
      {
        art: `${i5}/board.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "His hand does not finish it. Occupation holds." },
        ],
      },
    ],
  },
  {
    id: "5-08",
    number: "8",
    act: "Act One — They Are on the Floor",
    layout: "splash",
    panels: [
      {
        art: `${i5}/apron.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Dez",
            text: "You see the new audit guys? They asked who leaves last.",
          },
        ],
      },
    ],
  },
  {
    id: "5-09",
    number: "9",
    act: "Act Two — He Feels It First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/listen.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "Pressure. Metallic taste. He does not look up.",
          },
        ],
      },
    ],
  },
  {
    id: "5-10",
    number: "10",
    act: "Act Two — He Feels It First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/watch.jpg`,
        position: "right",
        balloons: [
          {
            kind: "caption",
            text: "The clipboard is pointed at his face, not the radar.",
          },
        ],
      },
    ],
  },
  {
    id: "5-11",
    number: "11",
    act: "Act Two — He Feels It First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/breakroom.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Hold’s coming." },
          { kind: "speech", speaker: "W", text: "How long." },
          { kind: "speech", speaker: "Elias", text: "Enough to get off the field." },
        ],
      },
    ],
  },
  {
    id: "5-12",
    number: "12",
    act: "Act Two — He Feels It First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/hub.jpg`,
        balloons: [
          { kind: "sfx", text: "KLAXON" },
          {
            kind: "caption",
            text: "After. They have two times now: his, and the airport’s.",
          },
        ],
      },
    ],
  },
  {
    id: "5-13",
    number: "13",
    act: "Act Two — He Feels It First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/last.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "Ramp freeze. Bodies stream in. The clipboards do not.",
          },
        ],
      },
    ],
  },
  {
    id: "5-14",
    number: "14",
    act: "Act Two — He Feels It First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/rescue.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "Stand four. A kid on a tug. Someone left a gap where a name should be.",
          },
        ],
      },
    ],
  },
  {
    id: "5-15",
    number: "15",
    act: "Act Three — Last off the Field",
    layout: "splash",
    panels: [
      {
        art: `${i5}/rescue.jpg`,
        position: "left",
        balloons: [
          { kind: "caption", text: "He turns back. Hands. Latch. Human." },
        ],
      },
    ],
  },
  {
    id: "5-16",
    number: "16",
    act: "Act Three — Last off the Field",
    layout: "splash",
    panels: [
      {
        art: `${i5}/rescue.jpg`,
        position: "right",
        balloons: [
          {
            kind: "caption",
            text: "No wind. No title. The sky does not get this one.",
          },
        ],
      },
    ],
  },
  {
    id: "5-17",
    number: "17",
    act: "Act Three — Last off the Field",
    layout: "splash",
    panels: [
      {
        art: `${i5}/found.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Kid",
            text: "How do you always —",
          },
          { kind: "speech", speaker: "Elias", text: "I was still outside." },
        ],
      },
    ],
  },
  {
    id: "5-18",
    number: "18",
    act: "Act Three — Last off the Field",
    layout: "splash",
    panels: [
      {
        art: `${i5}/hunter.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Contractor",
            text: "That’s the second time. We have a timestamp.",
          },
        ],
      },
    ],
  },
  {
    id: "5-19",
    number: "19",
    act: "Act Three — Last off the Field",
    layout: "splash",
    panels: [
      {
        art: `${i5}/lookaway.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "A straight edge in the cloud. He looks away before it can finish.",
          },
        ],
      },
    ],
  },
  {
    id: "5-20",
    number: "20",
    act: "Act Three — Last off the Field",
    layout: "splash",
    panels: [
      {
        art: `${i5}/lookaway.jpg`,
        position: "center",
        balloons: [
          {
            kind: "caption",
            text: "The glass does not get his breath. Not tonight.",
          },
        ],
      },
    ],
  },
  {
    id: "5-21",
    number: "21",
    act: "Act Four — They Offer Him First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/offer.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Contractor",
            text: "Fitness review. We need a designated first-out for weather events.",
          },
        ],
      },
    ],
  },
  {
    id: "5-22",
    number: "22",
    act: "Act Four — They Offer Him First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/offer.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "FIRST-OUT LEAD. His name already typed. A line for a signature." },
        ],
      },
    ],
  },
  {
    id: "5-23",
    number: "23",
    act: "Act Four — They Offer Him First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/hunter.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Contractor",
            text: "You still think it came here to find you?",
          },
        ],
      },
    ],
  },
  {
    id: "5-24",
    number: "24",
    act: "Act Four — They Offer Him First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/vest.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Elias",
            text: "I’m last off the field. That’s the part I’m keeping.",
          },
        ],
      },
    ],
  },
  {
    id: "5-25",
    number: "25",
    act: "Act Four — They Offer Him First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/offer.jpg`,
        position: "left",
        balloons: [
          { kind: "caption", text: "He does not sign. The pen stays where it is." },
        ],
      },
    ],
  },
  {
    id: "5-26",
    number: "26",
    act: "Act Four — They Offer Him First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/sister.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Sister",
            text: "Put me on it. If they need a name, use mine.",
          },
          { kind: "speech", speaker: "Elias", text: "Not tonight." },
        ],
      },
    ],
  },
  {
    id: "5-27",
    number: "27",
    act: "Act Four — They Offer Him First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/door.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Mother",
            text: "You don’t have to be first for anyone.",
          },
        ],
      },
    ],
  },
  {
    id: "5-28",
    number: "28",
    act: "Act Four — They Offer Him First",
    layout: "splash",
    panels: [
      {
        art: `${i5}/kitchen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "I know what they call it." },
          { kind: "caption", text: "He does not say the title. The heart does not take the stand." },
        ],
      },
    ],
  },
  {
    id: "5-29",
    number: "29",
    act: "Act Five — The Book Stays Open",
    layout: "splash",
    panels: [
      {
        art: `${i5}/keeper.jpg`,
        balloons: [
          { kind: "caption", text: "Far from Memphis the letters are still unfinished." },
        ],
      },
    ],
  },
  {
    id: "5-30",
    number: "30",
    act: "Act Five — The Book Stays Open",
    layout: "splash",
    panels: [
      {
        art: `${i5}/scale.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "The pans remember the catch. They do not tick. A scratch on the beam. Not a second name.",
          },
        ],
      },
    ],
  },
  {
    id: "5-31",
    number: "31",
    act: "Act Five — The Book Stays Open",
    layout: "splash",
    panels: [
      {
        art: `${i5}/crew.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "The gap is still a gap. He can see a first name. He does not say it.",
          },
        ],
      },
    ],
  },
  {
    id: "5-32",
    number: "32",
    act: "Act Five — The Book Stays Open",
    layout: "spread",
    panels: [
      {
        art: `${i5}/last.jpg`,
        balloons: [
          { kind: "caption", text: "The column goes in. He walks the other way." },
          { kind: "caption", text: "Not first." },
        ],
      },
    ],
  },
];
