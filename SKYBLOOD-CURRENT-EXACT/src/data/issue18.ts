import type { ComicPage, IssueMeta } from "./types";

const i18 = "/comic/i18";

export const ISSUE18: IssueMeta = {
  n: 18,
  title: "SKYBLOOD",
  issue: "Season Two — Issue #5",
  book: "Same Blood, Wrong Man",
  cover: `${i18}/cover.jpg`,
  logline:
    "Two men have Elias Marrow’s face. The blood says they are related. It does not say they are the same.",
};

export const pages18: ComicPage[] = [
  {
    id: "18-01",
    number: "1",
    act: "Act One — Hard Evidence",
    layout: "stack",
    panels: [
      {
        art: `${i18}/warning.jpg`,
        balloons: [
          { kind: "caption", text: "The notebook stays open. WHEN TWO TRUTHS ARRIVE TOGETHER, DO NOT MAKE THEM CHOOSE. THE SKY WILL." },
        ],
      },
      {
        art: `${i18}/tubes.jpg`,
        balloons: [{ kind: "caption", text: "For once they are looking at something simpler. Two sealed specimen tubes." }],
      },
    ],
  },
  {
    id: "18-02",
    number: "2",
    act: "Act One — Hard Evidence",
    layout: "splash",
    panels: [
      {
        art: `${i18}/sister.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "This your big supernatural plan?" },
          { kind: "speech", speaker: "Elias", text: "Blood test." },
          { kind: "speech", speaker: "Sister", text: "That’s disappointingly normal." },
          { kind: "speech", speaker: "W", text: "Normal is having a good week." },
        ],
      },
    ],
  },
  {
    id: "18-03",
    number: "3",
    act: "Act One — Hard Evidence",
    layout: "splash",
    panels: [
      {
        art: `${i18}/table.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Today we ask something smaller. Whether you’re me." },
        ],
      },
    ],
  },
  {
    id: "18-04",
    number: "4",
    act: "Act One — Hard Evidence",
    layout: "splash",
    panels: [
      {
        art: `${i18}/faceoff.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "You already know I’m not." },
          { kind: "speech", speaker: "Elias", text: "You know. I don’t. Not yet." },
        ],
      },
    ],
  },
  {
    id: "18-05",
    number: "5",
    act: "Act One — Hard Evidence",
    layout: "splash",
    panels: [
      {
        art: `${i18}/keys.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "And if it says you’re the same?" },
          { kind: "speech", speaker: "Elias", text: "Then we know something." },
          { kind: "speech", speaker: "Mother", text: "And if it says you’re not?" },
          { kind: "speech", speaker: "Elias", text: "Then we know something. That useful." },
        ],
      },
    ],
  },
  {
    id: "18-06",
    number: "6",
    act: "Act Two — The Draw",
    layout: "splash",
    panels: [
      {
        art: `${i18}/clinic.jpg`,
        balloons: [
          { kind: "caption", text: "A small independent clinic. Fluorescent lights. Plastic chairs. A receptionist who does not care about destiny." },
        ],
      },
    ],
  },
  {
    id: "18-07",
    number: "7",
    act: "Act Two — The Draw",
    layout: "splash",
    panels: [
      {
        art: `${i18}/notyou.jpg`,
        balloons: [
          { kind: "speech", speaker: "Receptionist", text: "Twins?" },
          { kind: "speech", speaker: "Elias", text: "Something like that." },
          { kind: "speech", speaker: "Double", text: "No." },
        ],
      },
    ],
  },
  {
    id: "18-08",
    number: "8",
    act: "Act Two — The Draw",
    layout: "splash",
    panels: [
      {
        art: `${i18}/grab.jpg`,
        balloons: [
          { kind: "caption", text: "Elias first. Needle. Tube. ELIAS MARROW. Ordinary red. Nothing happens." },
        ],
      },
    ],
  },
  {
    id: "18-09",
    number: "9",
    act: "Act Two — The Draw",
    layout: "splash",
    panels: [
      {
        art: `${i18}/gold.jpg`,
        balloons: [
          { kind: "caption", text: "The double next. Then every reflective surface catches gold. Cabinet. Phone. Tray. Window. Never skin. Never eyes." },
        ],
      },
    ],
  },
  {
    id: "18-10",
    number: "10",
    act: "Act Two — The Draw",
    layout: "splash",
    panels: [
      {
        art: `${i18}/window.jpg`,
        balloons: [
          { kind: "speech", speaker: "Phlebotomist", text: "Power flicker?" },
          { kind: "speech", speaker: "Elias", text: "Probably." },
        ],
      },
    ],
  },
  {
    id: "18-11",
    number: "11",
    act: "Act Two — The Draw",
    layout: "splash",
    panels: [
      {
        art: `${i18}/who.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "Don’t use his name. On mine." },
        ],
      },
    ],
  },
  {
    id: "18-12",
    number: "12",
    act: "Act Two — The Draw",
    layout: "splash",
    panels: [
      {
        art: `${i18}/apart.jpg`,
        balloons: [
          { kind: "speech", speaker: "Phlebotomist", text: "Then what name?" },
          { kind: "caption", text: "The double has no answer. That hurts more than he expected." },
        ],
      },
    ],
  },
  {
    id: "18-13",
    number: "13",
    act: "Act Two — The Draw",
    layout: "splash",
    panels: [
      {
        art: `${i18}/johndoe.jpg`,
        balloons: [
          { kind: "caption", text: "JOHN DOE. The instant the marker leaves the label — the gold stops." },
        ],
      },
    ],
  },
  {
    id: "18-14",
    number: "14",
    act: "Act Three — The Result",
    layout: "splash",
    panels: [
      {
        art: `${i18}/w.jpg`,
        balloons: [
          { kind: "speech", speaker: "Tech", text: "So." },
          { kind: "speech", speaker: "Elias", text: "That’s never a good opening." },
        ],
      },
    ],
  },
  {
    id: "18-15",
    number: "15",
    act: "Act Three — The Result",
    layout: "splash",
    panels: [
      {
        art: `${i18}/report.jpg`,
        balloons: [
          { kind: "speech", speaker: "Tech", text: "These samples are related. Closely. Not twins. Not the same person." },
        ],
      },
    ],
  },
  {
    id: "18-16",
    number: "16",
    act: "Act Three — The Result",
    layout: "splash",
    panels: [
      {
        art: `${i18}/receiver.jpg`,
        balloons: [
          { kind: "speech", speaker: "Tech", text: "Same maternal line." },
        ],
      },
    ],
  },
  {
    id: "18-17",
    number: "17",
    act: "Act Three — The Result",
    layout: "splash",
    panels: [
      {
        art: `${i18}/form.jpg`,
        balloons: [
          { kind: "speech", speaker: "Tech", text: "Extremely close overlap. Closer than brothers. Not twins." },
        ],
      },
    ],
  },
  {
    id: "18-18",
    number: "18",
    act: "Act Three — The Result",
    layout: "splash",
    panels: [
      {
        art: `${i18}/listen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Tech", text: "Genetically — you are upstream of him." },
          { kind: "speech", speaker: "Elias", text: "Say that in English." },
        ],
      },
    ],
  },
  {
    id: "18-19",
    number: "19",
    act: "Act Three — The Result",
    layout: "splash",
    panels: [
      {
        art: `${i18}/still.jpg`,
        balloons: [
          { kind: "speech", speaker: "Tech", text: "His sample reads like it descends from yours. That’s the problem." },
        ],
      },
    ],
  },
  {
    id: "18-20",
    number: "20",
    act: "Act Three — The Result",
    layout: "splash",
    panels: [
      {
        art: `${i18}/choice.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Son? Clone?" },
          { kind: "speech", speaker: "Tech", text: "No. Not something this test can name." },
        ],
      },
    ],
  },
  {
    id: "18-21",
    number: "21",
    act: "Act Four — The Part That Doesn’t Match",
    layout: "splash",
    panels: [
      {
        art: `${i18}/report.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What’s different?" },
          { kind: "speech", speaker: "Tech", text: "One region. Doesn’t make sense." },
        ],
      },
    ],
  },
  {
    id: "18-22",
    number: "22",
    act: "Act Four — The Part That Doesn’t Match",
    layout: "splash",
    panels: [
      {
        art: `${i18}/learned.jpg`,
        balloons: [
          { kind: "speech", speaker: "Tech", text: "There’s sequence information in his sample that isn’t present in yours." },
          { kind: "speech", speaker: "Elias", text: "Mutation?" },
          { kind: "speech", speaker: "Tech", text: "Maybe. That’s not how I’d phrase it." },
        ],
      },
    ],
  },
  {
    id: "18-23",
    number: "23",
    act: "Act Four — The Part That Doesn’t Match",
    layout: "splash",
    panels: [
      {
        art: `${i18}/notes.jpg`,
        balloons: [
          { kind: "speech", speaker: "Tech", text: "It’s organized. Mutations don’t usually look intentional." },
        ],
      },
    ],
  },
  {
    id: "18-24",
    number: "24",
    act: "Act Four — The Part That Doesn’t Match",
    layout: "splash",
    panels: [
      {
        art: `${i18}/emptyporch.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "We’re done. You wanted proof. You did." },
        ],
      },
    ],
  },
  {
    id: "18-25",
    number: "25",
    act: "Act Four — The Part That Doesn’t Match",
    layout: "splash",
    panels: [
      {
        art: `${i18}/site.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What did you know?" },
          { kind: "speech", speaker: "Double", text: "That I came after you. I don’t know after how." },
        ],
      },
    ],
  },
  {
    id: "18-26",
    number: "26",
    act: "Act Five — Something in the Blood",
    layout: "splash",
    panels: [
      {
        art: `${i18}/kitchen.jpg`,
        balloons: [
          { kind: "caption", text: "The report on the kitchen table. Grandfather’s notebook beside it. Two kinds of evidence. Neither explains the other." },
        ],
      },
    ],
  },
  {
    id: "18-27",
    number: "27",
    act: "Act Five — Something in the Blood",
    layout: "splash",
    panels: [
      {
        art: `${i18}/receiver.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Same mother?" },
          { kind: "speech", speaker: "Elias", text: "Same line." },
          { kind: "speech", speaker: "Double", text: "I remember her." },
        ],
      },
    ],
  },
  {
    id: "18-28",
    number: "28",
    act: "Act Five — Something in the Blood",
    layout: "splash",
    panels: [
      {
        art: `${i18}/photo.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "You remember being born?" },
          { kind: "speech", speaker: "Double", text: "No." },
          { kind: "speech", speaker: "Mother", text: "Being little? First day of school?" },
          { kind: "speech", speaker: "Double", text: "Pieces." },
          { kind: "speech", speaker: "Mother", text: "Your father? Then say his name." },
          { kind: "caption", text: "He cannot. Not pain. Absence." },
        ],
      },
    ],
  },
  {
    id: "18-29",
    number: "29",
    act: "Act Five — Something in the Blood",
    layout: "splash",
    panels: [
      {
        art: `${i18}/faceoff.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What do you remember first?" },
          { kind: "speech", speaker: "Double", text: "Waking up. Standing. Behind you." },
        ],
      },
    ],
  },
  {
    id: "18-30",
    number: "30",
    act: "Act Five — Something in the Blood",
    layout: "splash",
    panels: [
      {
        art: `${i18}/house.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "When?" },
          { kind: "speech", speaker: "Double", text: "Before you saw me." },
          { kind: "speech", speaker: "Double", text: "Everything you were about to lose." },
        ],
      },
    ],
  },
  {
    id: "18-31",
    number: "31",
    act: "Act Five — Something in the Blood",
    layout: "splash",
    panels: [
      {
        art: `${i18}/source.jpg`,
        balloons: [
          { kind: "caption", text: "Night. Closed lab. A printer nobody turned on." },
          { kind: "caption", text: "MARROW, ELIAS — SOURCE" },
          { kind: "caption", text: "UNASSIGNED DERIVATIVE — ACTIVE" },
          { kind: "caption", text: "Paper cannot close the record." },
        ],
      },
    ],
  },
  {
    id: "18-32",
    number: "32",
    act: "Act Five — Something in the Blood",
    layout: "stack",
    panels: [
      {
        art: `${i18}/gold.jpg`,
        balloons: [
          { kind: "caption", text: "Gold on the steel refrigerator door. FIRST SKY watches the same two tubes. Paper has classified the relationship. FIRST SKY still has not chosen." },
        ],
      },
      {
        art: `${i18}/tubes.jpg`,
        balloons: [
          { kind: "caption", text: "Inside JOHN DOE — one red cell moves against the flow. Then another. Not upward. Toward Elias’s sample." },
          { kind: "caption", text: "TO BE CONTINUED" },
        ],
      },
    ],
  },
];
