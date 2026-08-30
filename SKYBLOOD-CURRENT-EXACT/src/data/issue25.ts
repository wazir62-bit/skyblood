import type { ComicPage, IssueMeta } from "./types";

const i25 = "/comic/i25";

export const ISSUE25: IssueMeta = {
  n: 25,
  title: "SKYBLOOD",
  issue: "Season Two — Issue #12",
  book: "That Is Not My Grandfather",
  cover: `${i25}/cover.jpg`,
  logline:
    "Paper kept one record. Two bodies survived. Something wearing Thomas Marrow’s face stands behind the wall. It is not him. It is afraid of two answers.",
};

export const pages25: ComicPage[] = [
  {
    id: "25-01",
    number: "1",
    act: "Act One — Thomas",
    layout: "splash",
    panels: [
      {
        art: `${i25}/cavity.jpg`,
        balloons: [
          { kind: "speech", speaker: "Abel", text: "That’s not Thomas." },
          { kind: "speech", speaker: "Figure", text: "He said the same thing about you." },
        ],
      },
    ],
  },
  {
    id: "25-02",
    number: "2",
    act: "Act One — Thomas",
    layout: "splash",
    panels: [
      {
        art: `${i25}/site.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Step out." },
          { kind: "speech", speaker: "Figure", text: "No. You won’t like what changes." },
          { kind: "speech", speaker: "Abel", text: "Don’t ask twice." },
        ],
      },
    ],
  },
  {
    id: "25-03",
    number: "3",
    act: "Act One — Thomas",
    layout: "splash",
    panels: [
      {
        art: `${i25}/who.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Your name Thomas?" },
          { kind: "speech", speaker: "Figure", text: "Yes." },
          { kind: "speech", speaker: "Abel", text: "No." },
          { kind: "speech", speaker: "Figure", text: "Still doing that. Surviving definitions." },
        ],
      },
    ],
  },
  {
    id: "25-04",
    number: "4",
    act: "Act One — Thomas",
    layout: "splash",
    panels: [
      {
        art: `${i25}/photo.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What did my grandfather call my mother?" },
          { kind: "speech", speaker: "Figure", text: "Baby girl." },
        ],
      },
    ],
  },
  {
    id: "25-05",
    number: "5",
    act: "Act One — Thomas",
    layout: "splash",
    panels: [
      {
        art: `${i25}/listen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What did he call Mae when he was mad?" },
          { kind: "speech", speaker: "Figure", text: "Mae." },
          { kind: "caption", text: "Wrong. Not enough yet." },
        ],
      },
    ],
  },
  {
    id: "25-06",
    number: "6",
    act: "Act One — Thomas",
    layout: "splash",
    panels: [
      {
        art: `${i25}/choice.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Granddad hated one thing in coffee." },
          { kind: "speech", speaker: "Figure", text: "Sugar." },
          { kind: "speech", speaker: "Elias", text: "No. He drank it sweet." },
          { kind: "caption", text: "The face does not change. It records the failure." },
        ],
      },
    ],
  },
  {
    id: "25-07",
    number: "7",
    act: "Act Two — A Record Can Know Facts",
    layout: "splash",
    panels: [
      {
        art: `${i25}/receiver.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Ask him something nobody wrote down." },
        ],
      },
    ],
  },
  {
    id: "25-08",
    number: "8",
    act: "Act Two — A Record Can Know Facts",
    layout: "splash",
    panels: [
      {
        art: `${i25}/sister.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Something stupid. Important people leave records. People leave nonsense." },
        ],
      },
    ],
  },
  {
    id: "25-09",
    number: "9",
    act: "Act Two — A Record Can Know Facts",
    layout: "splash",
    panels: [
      {
        art: `${i25}/kitchen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Ask him about the green chair. Don’t tell him anything else." },
        ],
      },
    ],
  },
  {
    id: "25-10",
    number: "10",
    act: "Act Two — A Record Can Know Facts",
    layout: "splash",
    panels: [
      {
        art: `${i25}/walk.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Green chair. That mean anything?" },
          { kind: "speech", speaker: "Figure", text: "Furniture." },
        ],
      },
    ],
  },
  {
    id: "25-11",
    number: "11",
    act: "Act Two — A Record Can Know Facts",
    layout: "splash",
    panels: [
      {
        art: `${i25}/still.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Granddad broke it when Ma was twelve." },
          { kind: "speech", speaker: "Figure", text: "No record." },
        ],
      },
    ],
  },
  {
    id: "25-12",
    number: "12",
    act: "Act Two — A Record Can Know Facts",
    layout: "splash",
    panels: [
      {
        art: `${i25}/faceoff.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Then why you answer like one?" },
          { kind: "speech", speaker: "Figure", text: "Because that is what survived." },
        ],
      },
    ],
  },
  {
    id: "25-13",
    number: "13",
    act: "Act Three — What Survived",
    layout: "splash",
    panels: [
      {
        art: `${i25}/man.jpg`,
        balloons: [
          { kind: "speech", speaker: "Abel", text: "Do you remember me? Before closure?" },
          { kind: "speech", speaker: "Figure", text: "Yes." },
          { kind: "speech", speaker: "Abel", text: "What did we do the week before?" },
          { kind: "caption", text: "No answer." },
        ],
      },
    ],
  },
  {
    id: "25-14",
    number: "14",
    act: "Act Three — What Survived",
    layout: "splash",
    panels: [
      {
        art: `${i25}/table.jpg`,
        balloons: [
          { kind: "speech", speaker: "Abel", text: "Where’d we eat? Who cheated at cards? What did Mae call us when we came in late?" },
          { kind: "caption", text: "The face tightens. Not emotion. Failure." },
        ],
      },
    ],
  },
  {
    id: "25-15",
    number: "15",
    act: "Act Three — What Survived",
    layout: "splash",
    panels: [
      {
        art: `${i25}/notes.jpg`,
        balloons: [
          { kind: "speech", speaker: "Figure", text: "I contain his retained record." },
          { kind: "speech", speaker: "Elias", text: "That ain’t what he asked." },
          { kind: "speech", speaker: "Figure", text: "It is the answer." },
        ],
      },
    ],
  },
  {
    id: "25-16",
    number: "16",
    act: "Act Three — What Survived",
    layout: "splash",
    panels: [
      {
        art: `${i25}/who.jpg`,
        balloons: [
          { kind: "caption", text: "Abel looks devastated. Not because the figure is fake. Because it contains enough Thomas to hurt." },
        ],
      },
    ],
  },
  {
    id: "25-17",
    number: "17",
    act: "Act Three — What Survived",
    layout: "splash",
    panels: [
      {
        art: `${i25}/listen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Abel", text: "Did he die?" },
          { kind: "speech", speaker: "Figure", text: "Eventually. After closure." },
          { kind: "speech", speaker: "Elias", text: "Normal death?" },
          { kind: "speech", speaker: "Figure", text: "Define normal." },
        ],
      },
    ],
  },
  {
    id: "25-18",
    number: "18",
    act: "Act Three — What Survived",
    layout: "splash",
    panels: [
      {
        art: `${i25}/choice.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Did you come from him?" },
          { kind: "speech", speaker: "Figure", text: "I remained from him." },
        ],
      },
    ],
  },
  {
    id: "25-19",
    number: "19",
    act: "Act Four — The Retained Man",
    layout: "splash",
    panels: [
      {
        art: `${i25}/deceased.jpg`,
        balloons: [
          { kind: "caption", text: "THOMAS MARROW — RETAINED. BIOLOGICAL STATUS: DECEASED." },
          { kind: "caption", text: "That part is now hard ground." },
        ],
      },
    ],
  },
  {
    id: "25-20",
    number: "20",
    act: "Act Four — The Retained Man",
    layout: "splash",
    panels: [
      {
        art: `${i25}/counts.jpg`,
        balloons: [
          { kind: "caption", text: "RECORD STATUS: ACTIVE." },
          { kind: "speech", speaker: "Sister", text: "How can both be true?" },
          { kind: "speech", speaker: "Mother", text: "We been learning that all year." },
        ],
      },
    ],
  },
  {
    id: "25-21",
    number: "21",
    act: "Act Four — The Retained Man",
    layout: "splash",
    panels: [
      {
        art: `${i25}/man.jpg`,
        balloons: [
          { kind: "caption", text: "Thomas died. The figure still stands there." },
        ],
      },
    ],
  },
  {
    id: "25-22",
    number: "22",
    act: "Act Four — The Retained Man",
    layout: "splash",
    panels: [
      {
        art: `${i25}/faceoff.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You’re not his body." },
          { kind: "speech", speaker: "Figure", text: "Correct." },
          { kind: "speech", speaker: "Abel", text: "You’re not his memory." },
          { kind: "speech", speaker: "Figure", text: "Incomplete." },
          { kind: "speech", speaker: "Elias", text: "You’re not him." },
          { kind: "speech", speaker: "Figure", text: "Define him." },
        ],
      },
    ],
  },
  {
    id: "25-23",
    number: "23",
    act: "Act Four — The Retained Man",
    layout: "splash",
    panels: [
      {
        art: `${i25}/pad.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "No. I’m not letting you make the question smaller." },
        ],
      },
    ],
  },
  {
    id: "25-24",
    number: "24",
    act: "Act Four — The Retained Man",
    layout: "splash",
    panels: [
      {
        art: `${i25}/still.jpg`,
        balloons: [
          { kind: "speech", speaker: "Figure", text: "Good." },
          { kind: "caption", text: "That bothers Elias more than hostility would." },
        ],
      },
    ],
  },
  {
    id: "25-25",
    number: "25",
    act: "Act Five — The Thing Paper Kept",
    layout: "splash",
    panels: [
      {
        art: `${i25}/blankface.jpg`,
        balloons: [
          { kind: "caption", text: "One inch closer. The face flickers. For one heartbeat: not Thomas. Blank. Then Thomas again." },
        ],
      },
    ],
  },
  {
    id: "25-26",
    number: "26",
    act: "Act Five — The Thing Paper Kept",
    layout: "splash",
    panels: [
      {
        art: `${i25}/photo.jpg`,
        balloons: [
          { kind: "speech", speaker: "Abel", text: "That face ain’t yours." },
          { kind: "speech", speaker: "Figure", text: "It is the face attached to the surviving record." },
        ],
      },
    ],
  },
  {
    id: "25-27",
    number: "27",
    act: "Act Five — The Thing Paper Kept",
    layout: "splash",
    panels: [
      {
        art: `${i25}/form.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "So Paper made you." },
          { kind: "speech", speaker: "Figure", text: "No." },
          { kind: "speech", speaker: "Abel", text: "FIRST SKY?" },
          { kind: "speech", speaker: "Figure", text: "No. The record remained. Something eventually answered it." },
        ],
      },
    ],
  },
  {
    id: "25-28",
    number: "28",
    act: "Act Five — The Thing Paper Kept",
    layout: "splash",
    panels: [
      {
        art: `${i25}/eligible.jpg`,
        balloons: [
          { kind: "caption", text: "No taxonomy. No cosmic species. A mechanism-shaped mystery." },
        ],
      },
    ],
  },
  {
    id: "25-29",
    number: "29",
    act: "Act Five — The Thing Paper Kept",
    layout: "splash",
    panels: [
      {
        art: `${i25}/house.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Why stay at 2417?" },
          { kind: "speech", speaker: "Figure", text: "Because this is where Thomas’s surviving record still points." },
          { kind: "speech", speaker: "Elias", text: "Address." },
        ],
      },
    ],
  },
  {
    id: "25-30",
    number: "30",
    act: "Act Five — The Thing Paper Kept",
    layout: "splash",
    panels: [
      {
        art: `${i25}/w.jpg`,
        balloons: [
          { kind: "speech", speaker: "Figure", text: "Thomas’s record cannot close cleanly while you remain open." },
          { kind: "speech", speaker: "Elias", text: "You want Abel reopened?" },
          { kind: "speech", speaker: "Figure", text: "No." },
        ],
      },
    ],
  },
  {
    id: "25-31",
    number: "31",
    act: "Act Five — The Thing Paper Kept",
    layout: "splash",
    panels: [
      {
        art: `${i25}/cavity.jpg`,
        balloons: [
          { kind: "speech", speaker: "Figure", text: "If Abel reopens — Thomas stops being the only answer." },
          { kind: "speech", speaker: "Abel", text: "And you stop being Thomas." },
          { kind: "caption", text: "The figure says nothing. That is answer enough." },
        ],
      },
    ],
  },
  {
    id: "25-32",
    number: "32",
    act: "Act Five — The Thing Paper Kept",
    layout: "stack",
    panels: [
      {
        art: `${i25}/conflict.jpg`,
        balloons: [
          { kind: "caption", text: "RECORD CONFLICT ANTICIPATED. RESOLUTION PENDING." },
        ],
      },
      {
        art: `${i25}/walk.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "That thing scared of you." },
          { kind: "speech", speaker: "Abel", text: "It’s scared of two answers." },
          { kind: "caption", text: "No gold. No FIRST SKY. Paper waiting." },
          { kind: "caption", text: "TO BE CONTINUED" },
        ],
      },
    ],
  },
];
