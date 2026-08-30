import type { ComicPage, IssueMeta } from "./types";

const i9 = "/comic/i9";

export const ISSUE9: IssueMeta = {
  n: 9,
  title: "SKYBLOOD",
  issue: "Issue #9",
  book: "The Other Side of Day",
  cover: `${i9}/cover.jpg`,
  logline:
    "W never reported to days. Gloves still in the locker. Elias looks for him. Three knocks. They do not leave each other.",
};

export const pages9: ComicPage[] = [
  {
    id: "9-01",
    number: "1",
    act: "Act One — Days",
    layout: "splash",
    panels: [
      {
        art: `${i9}/ops.jpg`,
        balloons: [
          { kind: "caption", text: "Days have passed." },
          { kind: "caption", text: "Nights without W have become a habit." },
        ],
      },
    ],
  },
  {
    id: "9-02",
    number: "2",
    act: "Act One — Days",
    layout: "splash",
    panels: [
      {
        art: `${i9}/ops.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "How W liking daylight?" },
          { kind: "speech", speaker: "Days man", text: "W ain’t been here." },
        ],
      },
    ],
  },
  {
    id: "9-03",
    number: "3",
    act: "Act One — Days",
    layout: "splash",
    panels: [
      {
        art: `${i9}/ops.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Today." },
          { kind: "speech", speaker: "Days man", text: "Since they moved him." },
        ],
      },
    ],
  },
  {
    id: "9-04",
    number: "4",
    act: "Act One — Days",
    layout: "spread",
    panels: [
      {
        art: `${i9}/cover.jpg`,
        balloons: [
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book Nine — The Other Side of Day" },
        ],
      },
    ],
  },
  {
    id: "9-05",
    number: "5",
    act: "Act One — Days",
    layout: "splash",
    panels: [
      {
        art: `${i9}/gloves.jpg`,
        balloons: [
          { kind: "caption", text: "Voicemail. Again." },
          { kind: "caption", text: "His gloves are still in the locker." },
        ],
      },
    ],
  },
  {
    id: "9-06",
    number: "6",
    act: "Act One — Days",
    layout: "splash",
    panels: [
      {
        art: `${i9}/ops.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Ops", text: "Reassigned. Days." },
          { kind: "speech", speaker: "Elias", text: "What department." },
        ],
      },
    ],
  },
  {
    id: "9-07",
    number: "7",
    act: "Act One — Days",
    layout: "splash",
    panels: [
      {
        art: `${i9}/ops.jpg`,
        balloons: [
          { kind: "caption", text: "The name is not on the day roster." },
          { kind: "speech", speaker: "Ops", text: "Probably ain’t updated." },
        ],
      },
    ],
  },
  {
    id: "9-08",
    number: "8",
    act: "Act Two — The City",
    layout: "splash",
    panels: [
      {
        art: `${i9}/cover.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "The paper that moved him exists." },
          { kind: "caption", text: "The paper that received him does not." },
        ],
      },
    ],
  },
  {
    id: "9-09",
    number: "9",
    act: "Act Two — The City",
    layout: "splash",
    panels: [
      {
        art: `${i9}/truck.jpg`,
        balloons: [
          { kind: "caption", text: "His place. Truck gone." },
          { kind: "caption", text: "No answer." },
        ],
      },
    ],
  },
  {
    id: "9-10",
    number: "10",
    act: "Act Two — The City",
    layout: "splash",
    panels: [
      {
        art: `${i9}/gas.jpg`,
        balloons: [
          { kind: "speech", speaker: "Clerk", text: "Yeah. Him." },
          { kind: "speech", speaker: "Clerk", text: "Asked for directions. Showed me an address." },
        ],
      },
    ],
  },
  {
    id: "9-11",
    number: "11",
    act: "Act Two — The City",
    layout: "splash",
    panels: [
      {
        art: `${i9}/gas.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "The time is wrong." },
          { kind: "caption", text: "W was here when he should have been on days." },
        ],
      },
    ],
  },
  {
    id: "9-12",
    number: "12",
    act: "Act Two — The City",
    layout: "splash",
    panels: [
      {
        art: `${i9}/cam.jpg`,
        balloons: [
          { kind: "caption", text: "Tape: he buys. He shows the phone. He leaves." },
          { kind: "caption", text: "Then he looks out." },
        ],
      },
    ],
  },
  {
    id: "9-13",
    number: "13",
    act: "Act Two — The City",
    layout: "splash",
    panels: [
      {
        art: `${i9}/cam.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What was he looking at." },
          { kind: "speech", speaker: "Clerk", text: "I don’t know." },
        ],
      },
    ],
  },
  {
    id: "9-14",
    number: "14",
    act: "Act Two — The City",
    layout: "splash",
    panels: [
      {
        art: `${i9}/cam.jpg`,
        position: "right",
        balloons: [
          { kind: "caption", text: "He walks across the lot. Not to the truck." },
          { kind: "caption", text: "Thirty seconds. Then he drives." },
        ],
      },
    ],
  },
  {
    id: "9-15",
    number: "15",
    act: "Act Three — The Phone",
    layout: "splash",
    panels: [
      {
        art: `${i9}/truck.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "Truck. Access road. Empty. Locked." },
          { kind: "caption", text: "No struggle." },
        ],
      },
    ],
  },
  {
    id: "9-16",
    number: "16",
    act: "Act Three — The Phone",
    layout: "splash",
    panels: [
      {
        art: `${i9}/phone.jpg`,
        balloons: [
          { kind: "caption", text: "He calls." },
          { kind: "caption", text: "He hears it." },
        ],
      },
    ],
  },
  {
    id: "9-17",
    number: "17",
    act: "Act Three — The Phone",
    layout: "splash",
    panels: [
      {
        art: `${i9}/phone.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "Cracked. In the gravel." },
          { kind: "caption", text: "No W." },
        ],
      },
    ],
  },
  {
    id: "9-18",
    number: "18",
    act: "Act Three — The Phone",
    layout: "splash",
    panels: [
      {
        art: `${i9}/pit.jpg`,
        balloons: [
          { kind: "caption", text: "He calls the police." },
          { kind: "caption", text: "Then he follows the prints." },
        ],
      },
    ],
  },
  {
    id: "9-19",
    number: "19",
    act: "Act Four — Three Knocks",
    layout: "splash",
    panels: [
      {
        art: `${i9}/sense.jpg`,
        balloons: [
          { kind: "caption", text: "Pressure. Same as always." },
          { kind: "caption", text: "He does not want to trust it." },
        ],
      },
    ],
  },
  {
    id: "9-20",
    number: "20",
    act: "Act Four — Three Knocks",
    layout: "splash",
    panels: [
      {
        art: `${i9}/sense.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "W believed him first." },
          { kind: "caption", text: "He listens anyway." },
        ],
      },
    ],
  },
  {
    id: "9-21",
    number: "21",
    act: "Act Four — Three Knocks",
    layout: "splash",
    panels: [
      {
        art: `${i9}/pit.jpg`,
        position: "center",
        balloons: [
          { kind: "sfx", text: "KNOCK KNOCK KNOCK" },
          { kind: "caption", text: "Pause. Three again." },
        ],
      },
    ],
  },
  {
    id: "9-22",
    number: "22",
    act: "Act Four — Three Knocks",
    layout: "splash",
    panels: [
      {
        art: `${i9}/pinned.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What the hell you doing down here." },
          { kind: "speech", speaker: "W", text: "Currently? Waiting on your slow ass." },
        ],
      },
    ],
  },
  {
    id: "9-23",
    number: "23",
    act: "Act Four — Three Knocks",
    layout: "splash",
    panels: [
      {
        art: `${i9}/pinned.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "How you get down here." },
          { kind: "speech", speaker: "W", text: "I saw something. Looked familiar." },
        ],
      },
    ],
  },
  {
    id: "9-24",
    number: "24",
    act: "Act Four — Three Knocks",
    layout: "splash",
    panels: [
      {
        art: `${i9}/pinned.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "W", text: "Like I was supposed to know where it was going." },
        ],
      },
    ],
  },
  {
    id: "9-25",
    number: "25",
    act: "Act Five — Neither Leaves",
    layout: "splash",
    panels: [
      {
        art: `${i9}/pull.jpg`,
        balloons: [
          { kind: "caption", text: "The structure shifts. Water." },
          { kind: "speech", speaker: "W", text: "Don’t trade places with me." },
        ],
      },
    ],
  },
  {
    id: "9-26",
    number: "26",
    act: "Act Five — Neither Leaves",
    layout: "splash",
    panels: [
      {
        art: `${i9}/pull.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Ain’t nobody trading nothing." },
          { kind: "caption", text: "Freight. Weight. A life before the sky." },
        ],
      },
    ],
  },
  {
    id: "9-27",
    number: "27",
    act: "Act Five — Neither Leaves",
    layout: "splash",
    panels: [
      {
        art: `${i9}/pull.jpg`,
        position: "bottom",
        balloons: [
          { kind: "caption", text: "W comes free." },
          { kind: "caption", text: "The support fails. Elias is on the wrong side." },
        ],
      },
    ],
  },
  {
    id: "9-28",
    number: "28",
    act: "Act Five — Neither Leaves",
    layout: "splash",
    panels: [
      {
        art: `${i9}/pull.jpg`,
        balloons: [
          { kind: "caption", text: "W could leave." },
          { kind: "caption", text: "He moves toward Elias. Again." },
        ],
      },
    ],
  },
  {
    id: "9-29",
    number: "29",
    act: "Act Five — Neither Leaves",
    layout: "splash",
    panels: [
      {
        art: `${i9}/w.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "How you found me." },
          { kind: "speech", speaker: "Elias", text: "Your phone." },
        ],
      },
    ],
  },
  {
    id: "9-30",
    number: "30",
    act: "Act Five — Neither Leaves",
    layout: "splash",
    panels: [
      {
        art: `${i9}/w.jpg`,
        position: "center",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Down there. Knocking." },
          { kind: "speech", speaker: "W", text: "I wasn’t knocking." },
        ],
      },
    ],
  },
  {
    id: "9-31",
    number: "31",
    act: "Act Five — Neither Leaves",
    layout: "splash",
    panels: [
      {
        art: `${i9}/photo.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "I took a picture. I don’t know why." },
          { kind: "caption", text: "A person. Too far. Pixel. He does not know." },
        ],
      },
    ],
  },
  {
    id: "9-32",
    number: "32",
    act: "Act Five — Neither Leaves",
    layout: "spread",
    panels: [
      {
        art: `${i9}/glass.jpg`,
        balloons: [
          { kind: "caption", text: "The tape again." },
          { kind: "caption", text: "He was looking up. At the sky in the glass." },
        ],
      },
    ],
  },
];
