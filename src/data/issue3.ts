import type { ComicPage, IssueMeta } from "./types";

const i3 = "/comic/i3";

export const ISSUE3: IssueMeta = {
  n: 3,
  title: "SKYBLOOD",
  issue: "Issue #3",
  book: "The House That Said a Name",
  cover: `${i3}/cover.jpg`,
  logline:
    "The week of paid shock is over. A clipboard already has Mae Marrow. The weighing starts. It does not finish.",
};

export const pages3: ComicPage[] = [
  {
    id: "3-01",
    number: "1",
    act: "Act One — Clock In",
    layout: "splash",
    panels: [
      {
        art: `${i3}/vest.jpg`,
        balloons: [
          { kind: "caption", text: "The week they paid him to be quiet is over." },
          { kind: "caption", text: "The vest is still a vest." },
        ],
      },
    ],
  },
  {
    id: "3-02",
    number: "2",
    act: "Act One — Clock In",
    layout: "splash",
    panels: [
      {
        art: `${i3}/apron.jpg`,
        balloons: [
          { kind: "caption", text: "Memphis cargo. Ordinary shift. Ordinary rain." },
          { kind: "sfx", text: "klaxon test — then nothing" },
        ],
      },
    ],
  },
  {
    id: "3-03",
    number: "3",
    act: "Act One — Clock In",
    layout: "splash",
    panels: [
      {
        art: `${i3}/breakroom.jpg`,
        balloons: [
          { kind: "speech", speaker: "Dez", text: "You look like you lived." },
          { kind: "speech", speaker: "Elias", text: "That’s the job." },
          { kind: "speech", speaker: "Dez", text: "Somebody from upstairs asked for you." },
        ],
      },
    ],
  },
  {
    id: "3-04",
    number: "4",
    act: "Act One — Clock In",
    layout: "splash",
    panels: [
      {
        art: `${i3}/crew.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "The crew photo still has a gap. Mae is not the only Unweighed. He does not fill this one in.",
          },
        ],
      },
    ],
  },
  {
    id: "3-05",
    number: "5",
    act: "Act One — Clock In",
    layout: "spread",
    panels: [
      {
        art: `${i3}/rain.jpg`,
        balloons: [
          { kind: "caption", text: "SKYBLOOD" },
          { kind: "caption", text: "Book Three — The House That Said a Name" },
        ],
      },
    ],
  },
  {
    id: "3-06",
    number: "6",
    act: "Act One — Clock In",
    layout: "splash",
    panels: [
      {
        art: `${i3}/sister.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "They already found us." },
          { kind: "speech", speaker: "Elias", text: "They found a name. That’s different." },
        ],
      },
    ],
  },
  {
    id: "3-07",
    number: "7",
    act: "Act One — Clock In",
    layout: "splash",
    panels: [
      {
        art: `${i3}/mother.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Mother",
            text: "A receiver can be seen. I knew that when I said it.",
          },
        ],
      },
    ],
  },
  {
    id: "3-08",
    number: "8",
    act: "Act Two — The Audit",
    layout: "splash",
    panels: [
      {
        art: `${i3}/gate.jpg`,
        balloons: [
          { kind: "caption", text: "He looks like HR. That is the point." },
          { kind: "speech", speaker: "Contractor", text: "Follow-up on an incident." },
        ],
      },
    ],
  },
  {
    id: "3-09",
    number: "9",
    act: "Act Two — The Audit",
    layout: "splash",
    panels: [
      {
        art: `${i3}/office.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Contractor",
            text: "You photographed weather. Then you wrote a letter into a gap on a board.",
          },
          { kind: "speech", speaker: "Elias", text: "I clocked in." },
        ],
      },
    ],
  },
  {
    id: "3-10",
    number: "10",
    act: "Act Two — The Audit",
    layout: "splash",
    panels: [
      {
        art: `${i3}/clipboard.jpg`,
        balloons: [
          { kind: "caption", text: "The form already has her." },
          { kind: "speech", speaker: "Contractor", text: "Mae Marrow." },
        ],
      },
    ],
  },
  {
    id: "3-11",
    number: "11",
    act: "Act Two — The Audit",
    layout: "splash",
    panels: [
      {
        art: `${i3}/office.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "That’s my grandmother." },
          {
            kind: "speech",
            speaker: "Contractor",
            text: "That’s a file that was empty last month.",
          },
        ],
      },
    ],
  },
  {
    id: "3-12",
    number: "12",
    act: "Act Two — The Audit",
    layout: "splash",
    panels: [
      {
        art: `${i3}/office.jpg`,
        position: "left",
        balloons: [
          { kind: "speech", speaker: "Contractor", text: "Who received it." },
          { kind: "speech", speaker: "Elias", text: "I’m not going to help you write the next line." },
        ],
      },
    ],
  },
  {
    id: "3-13",
    number: "13",
    act: "Act Two — The Audit",
    layout: "splash",
    panels: [
      {
        art: `${i3}/door.jpg`,
        balloons: [
          { kind: "sfx", text: "knock." },
          { kind: "speech", speaker: "Contractor", text: "You said a name in this house." },
        ],
      },
    ],
  },
  {
    id: "3-14",
    number: "14",
    act: "Act Two — The Audit",
    layout: "splash",
    panels: [
      {
        art: `${i3}/door.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Mother", text: "I heard you. You can stay on that side." },
          { kind: "caption", text: "She does not invite him in. A receiver is not a welcome mat." },
        ],
      },
    ],
  },
  {
    id: "3-15",
    number: "15",
    act: "Act Two — The Audit",
    layout: "splash",
    panels: [
      {
        art: `${i3}/mother.jpg`,
        balloons: [
          { kind: "caption", text: "He leaves a card she does not pick up." },
        ],
      },
    ],
  },
  {
    id: "3-16",
    number: "16",
    act: "Act Three — The Circuit Is a Choice",
    layout: "splash",
    panels: [
      {
        art: `${i3}/sister.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Then let me say it too." },
          { kind: "speech", speaker: "Sister", text: "Let me receive. I’m already in the house." },
        ],
      },
    ],
  },
  {
    id: "3-17",
    number: "17",
    act: "Act Three — The Circuit Is a Choice",
    layout: "splash",
    panels: [
      {
        art: `${i3}/standoff.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "I will not make you a door." },
          { kind: "speech", speaker: "Sister", text: "You made him one." },
          { kind: "speech", speaker: "Mother", text: "The sky made him one. I only answered." },
        ],
      },
    ],
  },
  {
    id: "3-18",
    number: "18",
    act: "Act Three — The Circuit Is a Choice",
    layout: "splash",
    panels: [
      {
        art: `${i3}/standoff.jpg`,
        position: "right",
        balloons: [
          { kind: "speech", speaker: "Elias", text: "The circuit is a choice. Not tonight." },
          { kind: "caption", text: "She hears it. She does not receive it. That is the difference." },
        ],
      },
    ],
  },
  {
    id: "3-19",
    number: "19",
    act: "Act Three — The Circuit Is a Choice",
    layout: "splash",
    panels: [
      {
        art: `${i3}/sister.jpg`,
        position: "top",
        balloons: [
          { kind: "speech", speaker: "Sister", text: "So I just wait to be erased." },
          { kind: "speech", speaker: "Elias", text: "You wait until someone can hold you. That’s not the same thing." },
        ],
      },
    ],
  },
  {
    id: "3-20",
    number: "20",
    act: "Act Four — Weighing",
    layout: "splash",
    panels: [
      {
        art: `${i3}/window.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "Pressure. Inner ear. The glass twitches toward his breath and stops. He looks away. He does not command it.",
          },
        ],
      },
    ],
  },
  {
    id: "3-21",
    number: "21",
    act: "Act Four — Weighing",
    layout: "spread",
    panels: [
      {
        art: `${i3}/ink.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "Recognition-light on wet ink. Not on his eyes. Not on his skin. The next line stays blank.",
          },
        ],
      },
    ],
  },
  {
    id: "3-22",
    number: "22",
    act: "Act Four — Weighing",
    layout: "splash",
    panels: [
      {
        art: `${i3}/crew.jpg`,
        balloons: [
          {
            kind: "caption",
            text: "The other gap does not fill. Witnessing one name does not restore a crew.",
          },
        ],
      },
    ],
  },
  {
    id: "3-23",
    number: "23",
    act: "Act Four — Weighing",
    layout: "splash",
    panels: [
      {
        art: `${i3}/clipboard.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Contractor",
            text: "Weighing in progress. That’s not a threat. That’s a status.",
          },
        ],
      },
    ],
  },
  {
    id: "3-24",
    number: "24",
    act: "Act Four — Weighing",
    layout: "splash",
    panels: [
      {
        art: `${i3}/letters.jpg`,
        balloons: [
          { kind: "caption", text: "Far from Memphis, the wound takes more of a name." },
        ],
      },
    ],
  },
  {
    id: "3-25",
    number: "25",
    act: "Act Five — Unfinished",
    layout: "splash",
    panels: [
      {
        art: `${i3}/rain.jpg`,
        balloons: [
          { kind: "sfx", text: "rain" },
          { kind: "caption", text: "Ordinary Memphis rain. It still does not obey him." },
        ],
      },
    ],
  },
  {
    id: "3-26",
    number: "26",
    act: "Act Five — Unfinished",
    layout: "splash",
    panels: [
      {
        art: `${i3}/porch.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "When is it my turn." },
          {
            kind: "speech",
            speaker: "Elias",
            text: "When you choose. And when someone receives you. Not tonight.",
          },
        ],
      },
    ],
  },
  {
    id: "3-27",
    number: "27",
    act: "Act Five — Unfinished",
    layout: "splash",
    panels: [
      {
        art: `${i3}/porch.jpg`,
        position: "bottom",
        balloons: [
          { kind: "speech", speaker: "Sister", text: "You’re still just a cargo worker." },
          { kind: "speech", speaker: "Elias", text: "That’s the part I’m keeping." },
        ],
      },
    ],
  },
  {
    id: "3-28",
    number: "28",
    act: "Act Five — Unfinished",
    layout: "splash",
    panels: [
      {
        art: `${i3}/mother.jpg`,
        balloons: [
          {
            kind: "speech",
            speaker: "Mother",
            text: "They started a weighing. We cannot close what we opened.",
          },
          { kind: "speech", speaker: "Elias", text: "Then we don’t give them the next name." },
        ],
      },
    ],
  },
  {
    id: "3-29",
    number: "29",
    act: "Act Five — Unfinished",
    layout: "splash",
    panels: [
      {
        art: `${i3}/ink.jpg`,
        position: "right",
        balloons: [
          { kind: "caption", text: "Mae Marrow. Then a blank. The blank is the threat." },
        ],
      },
    ],
  },
  {
    id: "3-30",
    number: "30",
    act: "Act Five — Unfinished",
    layout: "splash",
    panels: [
      {
        art: `${i3}/apron.jpg`,
        balloons: [
          { kind: "caption", text: "He clocks back in. The vest is still a vest." },
        ],
      },
    ],
  },
  {
    id: "3-31",
    number: "31",
    act: "Act Five — Unfinished",
    layout: "splash",
    panels: [
      {
        art: `${i3}/letters.jpg`,
        position: "center",
        balloons: [
          { kind: "caption", text: "The stone is not finished. Neither is he." },
        ],
      },
    ],
  },
  {
    id: "3-32",
    number: "32",
    act: "Act Five — Unfinished",
    layout: "spread",
    panels: [
      {
        art: `${i3}/scale.jpg`,
        balloons: [
          { kind: "caption", text: "The scale hangs. Mid-motion. Not a second tick. Not yet." },
          { kind: "caption", text: "TO BE CONTINUED" },
        ],
      },
    ],
  },
];
