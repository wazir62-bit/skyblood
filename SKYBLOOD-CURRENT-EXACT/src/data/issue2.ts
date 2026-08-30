import type { ComicPage, IssueMeta } from "./types";

const i2 = "/comic/i2";

export const ISSUE2: IssueMeta = {
  n: 2,
  title: "SKYBLOOD",
  issue: "Issue #2",
  book: "Weather in the Blood",
  cover: `${i2}/cover.jpg`,
  logline:
    "The photograph still has not been received. His mother already knows why. The first witnessing is a name they stopped saying: Mae Marrow.",
};

export const pages2: ComicPage[] = [
  {
    id: "2-01",
    number: "1",
    act: "Act One — The Week They Paid Him to Be Quiet",
    layout: "splash",
    panels: [
      {
        art: `${i2}/sleepless.jpg`,
        balloons: [
          { kind: "caption", text: "The week they paid him to be quiet." },
          { kind: "sfx", text: "rain on glass" },
        ],
      },
    ],
  },
  {
    id: "2-02",
    number: "2",
    act: "Act One — The Week They Paid Him to Be Quiet",
    layout: "splash",
    panels: [
      {
        art: `${i2}/sister.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "You going back?" },
          { kind: "speech", speaker: "Elias", text: "Next week." },
          { kind: "speech", speaker: "Sister", text: "You still got the pictures." },
        ],
      },
    ],
  },
  {
    id: "2-03",
    number: "3",
    act: "Act One — The Week They Paid Him to Be Quiet",
    layout: "splash",
    panels: [
      {
        art: `${i2}/phone.jpg`,
        balloons: [
          { kind: "caption", text: "Same image on the phone. Cloud. Tiers. Unmistakable." },
          { kind: "caption", text: "The record exists. It has not been received." },
        ],
      },
    ],
  },
  {
    id: "2-04",
    number: "4",
    act: "Act One — The Week They Paid Him to Be Quiet",
    layout: "splash",
    panels: [
      {
        art: `${i2}/door.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Walk me through it again." },
          { kind: "caption", text: "Elias looks at the closed front door instead." },
        ],
      },
    ],
  },
  {
    id: "2-05",
    number: "5",
    act: "Act One — The Week They Paid Him to Be Quiet",
    layout: "splash",
    panels: [
      {
        art: `${i2}/knock.jpg`,
        balloons: [
          { kind: "sfx", text: "knock." },
          { kind: "caption", text: "The world has sound again. The house does not." },
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book Two — Weather in the Blood" },
        ],
      },
    ],
  },
  {
    id: "2-06",
    number: "6",
    act: "Act One — The Week They Paid Him to Be Quiet",
    layout: "splash",
    panels: [
      {
        art: `${i2}/hands.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "I didn’t delete it." },
          { kind: "speech", speaker: "Mother", text: "I know." },
        ],
      },
    ],
  },
  {
    id: "2-07",
    number: "7",
    act: "Act One — The Week They Paid Him to Be Quiet",
    layout: "splash",
    panels: [
      {
        art: `${i2}/sister-window.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Sister",
            text: "Somebody gonna tell me why Ma looks like she saw a ghost in a cloud.",
          },
          { kind: "speech", speaker: "Mother", text: "Don’t." },
        ],
      },
    ],
  },
  {
    id: "2-08",
    number: "8",
    act: "Act Two — Blood",
    layout: "splash",
    panels: [
      {
        art: `${i2}/table.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "It called me something." },
          { kind: "speech", speaker: "Elias", text: "A voice. Not far. A title I don’t repeat." },
        ],
      },
    ],
  },
  {
    id: "2-09",
    number: "9",
    act: "Act Two — Blood",
    layout: "splash",
    panels: [
      {
        art: `${i2}/mother-receive.jpg`,
        position: "top",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Your grandmother used to photograph weather." },
        ],
      },
    ],
  },
  {
    id: "2-10",
    number: "10",
    act: "Act Two — Blood",
    layout: "splash",
    panels: [
      {
        art: `${i2}/mae.jpg`,
        balloons: [
          { kind: "caption", text: "Thirty years ago, Mae Marrow was delighted by storms." },
          { kind: "caption", text: "Then her pictures started coming up blank." },
        ],
      },
    ],
  },
  {
    id: "2-11",
    number: "11",
    act: "Act Two — Blood",
    layout: "splash",
    panels: [
      {
        art: `${i2}/fridge.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Then work acted like she’d never been on the board." },
          { kind: "speech", speaker: "Mother", text: "Then we stopped saying her name." },
          { kind: "speech", speaker: "Sister", text: "Why?" },
          { kind: "speech", speaker: "Mother", text: "Because saying it made the air listen." },
        ],
      },
    ],
  },
  {
    id: "2-12",
    number: "12",
    act: "Act Two — Blood",
    layout: "splash",
    panels: [
      {
        art: `${i2}/ask.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What’s her name." },
          { kind: "caption", text: "The rule in this house is old enough to be furniture." },
        ],
      },
    ],
  },
  {
    id: "2-13",
    number: "13",
    act: "Act Two — Blood",
    layout: "splash",
    panels: [
      {
        art: `${i2}/insane.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "That’s insane." },
          { kind: "caption", text: "She means it. She is also the one who asked for more." },
        ],
      },
    ],
  },
  {
    id: "2-14",
    number: "14",
    act: "Act Three — The Letter That Survived",
    layout: "splash",
    panels: [
      {
        art: `${i2}/breath.jpg`,
        balloons: [
          { kind: "caption", text: "Pressure behind the eyes. Inner ear. Metallic taste." },
          {
            kind: "caption",
            text: "Outside, the rain on this Memphis street is ordinary. On the window beside Elias, one thin strip of water begins sliding toward the fog of his breath. Then stops.",
          },
        ],
      },
    ],
  },
  {
    id: "2-15",
    number: "15",
    act: "Act Three — The Letter That Survived",
    layout: "splash",
    panels: [
      {
        art: `${i2}/lookaway.jpg`,
        balloons: [
          { kind: "caption", text: "He sees it. He looks away." },
          {
            kind: "caption",
            text: "He cannot command it. His emotions can still make a boundary twitch. So Elias controls the only thing he can. His breathing.",
          },
        ],
      },
    ],
  },
  {
    id: "2-16",
    number: "16",
    act: "Act Three — The Letter That Survived",
    layout: "splash",
    panels: [
      {
        art: `${i2}/box.jpg`,
        balloons: [
          { kind: "caption", text: "Mother lets him open the hall closet. She stays in the doorway. She does not look inside." },
        ],
      },
    ],
  },
  {
    id: "2-17",
    number: "17",
    act: "Act Three — The Letter That Survived",
    layout: "splash",
    panels: [
      {
        art: `${i2}/tapem.jpg`,
        balloons: [
          { kind: "caption", text: "An old weather camera. Blank prints. A deteriorated cardboard evidence box." },
          { kind: "caption", text: "One strip of masking tape. Everything faded except a single letter: M" },
          { kind: "speech", speaker: "Elias", text: "M—" },
        ],
      },
    ],
  },
  {
    id: "2-18",
    number: "18",
    act: "Act Three — The Letter That Survived",
    layout: "splash",
    panels: [
      {
        art: `${i2}/notebook.jpg`,
        balloons: [
          { kind: "caption", text: "His work notebook. Loading marks. Trailer numbers. In one unused margin: M. M. M." },
          { kind: "speech", speaker: "Elias", text: "I wrote this at work." },
          { kind: "speech", speaker: "Elias", text: "Into a gap everybody else treats like nothing." },
          { kind: "speech", speaker: "Elias", text: "I didn’t know I was writing it." },
        ],
      },
    ],
  },
  {
    id: "2-19",
    number: "19",
    act: "Act Four — Address",
    layout: "splash",
    panels: [
      {
        art: `${i2}/her.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "If we say it, they can find it again." },
          { kind: "speech", speaker: "Elias", text: "Find what?" },
          { kind: "speech", speaker: "Mother", text: "Her." },
          { kind: "speech", speaker: "Mother", text: "Names are how the sky keeps a body." },
        ],
      },
    ],
  },
  {
    id: "2-20",
    number: "20",
    act: "Act Four — Address",
    layout: "stack",
    panels: [
      {
        art: `${i2}/sister.jpg`,
        balloons: [{ kind: "speech", speaker: "Sister", text: "Then we should say it." }],
      },
      {
        art: `${i2}/print-fill.jpg`,
        balloons: [
          { kind: "caption", text: "Mother looks at Elias. The circuit is a choice." },
          { kind: "caption", text: "The blank print. The camera. The temple on the phone. Evidence. Not a spell." },
        ],
      },
    ],
  },
  {
    id: "2-21",
    number: "21",
    act: "Act Four — Address",
    layout: "splash",
    panels: [
      {
        art: `${i2}/name.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Mae." },
          { kind: "caption", text: "Mother closes her eyes." },
          { kind: "speech", speaker: "Mother", text: "Mae Marrow." },
          { kind: "caption", text: "They say it together. The sister hears it. The mother receives it." },
        ],
      },
    ],
  },
  {
    id: "2-22",
    number: "22",
    act: "Act Four — Address",
    layout: "spread",
    panels: [
      {
        art: `${i2}/dishwater.jpg`,
        balloons: [
          { kind: "caption", text: "Recognition-light. Gold on dishwater. Gold on the phone glass. Gold across the old camera lens." },
          { kind: "caption", text: "Not on their eyes. Not on their skin." },
        ],
      },
    ],
  },
  {
    id: "2-23",
    number: "23",
    act: "Act Five — Received",
    layout: "splash",
    panels: [
      {
        art: `${i2}/heartbeat.jpg`,
        balloons: [
          { kind: "caption", text: "For one heartbeat, the blank print is not blank. Cloud. Tiers. A woman in profile." },
          { kind: "caption", text: "Not enough face to identify. Enough shape to know someone was there." },
          { kind: "caption", text: "Then — only weather again. The photograph has not been repaired. The name has somewhere to live." },
        ],
      },
    ],
  },
  {
    id: "2-24",
    number: "24",
    act: "Act Five — Received",
    layout: "splash",
    panels: [
      {
        art: `${i2}/watchprint.jpg`,
        balloons: [
          { kind: "caption", text: "Mother watches the blank print. Thirty years of silence sitting behind her eyes." },
          { kind: "caption", text: "She has not been hiding the story. She has been keeping it contained." },
          { kind: "caption", text: "She has been the keeper of the silence." },
        ],
      },
    ],
  },
  {
    id: "2-25",
    number: "25",
    act: "Act Five — Received",
    layout: "spread",
    panels: [
      {
        art: `${i2}/field.jpg`,
        balloons: [
          { kind: "caption", text: "Far from Memphis. No location given." },
          { kind: "caption", text: "A lone man walks a field of repeating stone. A thousand passes. This time he stops. He turns his head." },
        ],
      },
    ],
  },
  {
    id: "2-26",
    number: "26",
    act: "Act Five — Received",
    layout: "splash",
    panels: [
      {
        art: `${i2}/spoken.jpg`,
        balloons: [
          { kind: "caption", text: "Across the street from the Marrow house: a forgettable jacket. A small notebook." },
          { kind: "caption", text: "MAE MARROW — SPOKEN." },
          { kind: "caption", text: "The notebook closes." },
        ],
      },
    ],
  },
  {
    id: "2-27",
    number: "27",
    act: "Act Five — Received",
    layout: "splash",
    panels: [
      {
        art: `${i2}/porch.jpg`,
        balloons: [
          { kind: "sfx", text: "rain" },
          { kind: "caption", text: "Ordinary Memphis rain. It does not obey Elias." },
        ],
      },
    ],
  },
  {
    id: "2-28",
    number: "28",
    act: "Act Five — Received",
    layout: "splash",
    panels: [
      {
        art: `${i2}/porch-two.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "So what are you." },
          { kind: "speech", speaker: "Elias", text: "A cargo worker. With a week left of paid shock." },
          { kind: "speech", speaker: "Sister", text: "That’s not what I asked." },
          { kind: "speech", speaker: "Elias", text: "I know." },
        ],
      },
    ],
  },
  {
    id: "2-29",
    number: "29",
    act: "Act Five — Received",
    layout: "splash",
    panels: [
      {
        art: `${i2}/table.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "You opened a door I spent thirty years keeping shut." },
          { kind: "speech", speaker: "Elias", text: "She was already on the other side of it." },
        ],
      },
    ],
  },
  {
    id: "2-30",
    number: "30",
    act: "Act Five — Received",
    layout: "splash",
    panels: [
      {
        art: `${i2}/fridgegap.jpg`,
        balloons: [
          { kind: "caption", text: "The photograph on the refrigerator does not repair itself. The missing portion remains missing." },
          { kind: "caption", text: "Witnessing is not a spell. The gap remains. The name does not." },
        ],
      },
    ],
  },
  {
    id: "2-31",
    number: "31",
    act: "Act Five — Received",
    layout: "splash",
    panels: [
      {
        art: `${i2}/stroke.jpg`,
        balloons: [
          { kind: "caption", text: "Elsewhere — the same wounded stone. Rain collects in the old cut." },
          { kind: "caption", text: "This time the water does not simply run off. It gathers into the first recognizable stroke of a letter." },
          { kind: "caption", text: "Not a full word. Not yet. A first cut." },
        ],
      },
    ],
  },
  {
    id: "2-32",
    number: "32",
    act: "Act Five — Received",
    layout: "spread",
    panels: [
      {
        art: `${i2}/scale.jpg`,
        balloons: [
          { kind: "caption", text: "Beside it, the scale moves. One degree." },
          { kind: "sfx", text: "click." },
          { kind: "caption", text: "TO BE CONTINUED" },
        ],
      },
    ],
  },
];
