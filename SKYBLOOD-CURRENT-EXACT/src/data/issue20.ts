import type { ComicPage, IssueMeta } from "./types";

const i20 = "/comic/i20";

export const ISSUE20: IssueMeta = {
  n: 20,
  title: "SKYBLOOD",
  issue: "Season Two — Issue #7",
  book: "The Name He Kept",
  cover: `${i20}/cover.jpg`,
  logline:
    "Paper gave him a surname. He did not take it. A cashier wrote ASA on a bag. Something with six fingers already knew the name.",
};

export const pages20: ComicPage[] = [
  {
    id: "20-01",
    number: "1",
    act: "Act One — Asa",
    layout: "splash",
    panels: [
      {
        art: `${i20}/asaname.jpg`,
        balloons: [
          { kind: "caption", text: "Three handwritten lines. ASA. ASA. ASA. No surname." },
        ],
      },
    ],
  },
  {
    id: "20-02",
    number: "2",
    act: "Act One — Asa",
    layout: "splash",
    panels: [
      {
        art: `${i20}/kitchen.jpg`,
        balloons: [
          { kind: "caption", text: "Asleep in a folding chair. Not Elias’s. Not Grandfather’s. Small distinction. Important." },
        ],
      },
    ],
  },
  {
    id: "20-03",
    number: "3",
    act: "Act One — Asa",
    layout: "splash",
    panels: [
      {
        art: `${i20}/sister.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "You stay here all night?" },
          { kind: "speech", speaker: "Asa", text: "Mostly. Here." },
          { kind: "speech", speaker: "Sister", text: "Then that just means yes." },
          { kind: "speech", speaker: "Asa", text: "Learning that." },
        ],
      },
    ],
  },
  {
    id: "20-04",
    number: "4",
    act: "Act One — Asa",
    layout: "splash",
    panels: [
      {
        art: `${i20}/receiver.jpg`,
        balloons: [
          { kind: "caption", text: "One cup in front of Asa. No ceremony." },
          { kind: "speech", speaker: "Asa", text: "That mine?" },
          { kind: "speech", speaker: "Mother", text: "You sitting there." },
        ],
      },
    ],
  },
  {
    id: "20-05",
    number: "5",
    act: "Act One — Asa",
    layout: "splash",
    panels: [
      {
        art: `${i20}/keys.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Still like it?" },
          { kind: "speech", speaker: "Asa", text: "Yeah. You?" },
          { kind: "speech", speaker: "Elias", text: "Ain’t mine to like." },
        ],
      },
    ],
  },
  {
    id: "20-06",
    number: "6",
    act: "Act Two — The Record Doesn’t Agree",
    layout: "splash",
    panels: [
      {
        art: `${i20}/clock.jpg`,
        balloons: [
          { kind: "caption", text: "ELIAS MARROW — ACTIVE. Below: ASSOCIATED RECORD — ASA MARROW." },
        ],
      },
    ],
  },
  {
    id: "20-07",
    number: "7",
    act: "Act Two — The Record Doesn’t Agree",
    layout: "splash",
    panels: [
      {
        art: `${i20}/profile.jpg`,
        balloons: [
          { kind: "caption", text: "No photo. No employee number. RELATION: POTENTIAL DESCENDANT. CONFIDENCE: 51%." },
        ],
      },
    ],
  },
  {
    id: "20-08",
    number: "8",
    act: "Act Two — The Record Doesn’t Agree",
    layout: "splash",
    panels: [
      {
        art: `${i20}/w.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Fifty-one ain’t enough to ruin nobody’s life." },
          { kind: "speech", speaker: "Coworker", text: "You talk to machines too much now." },
          { kind: "speech", speaker: "Elias", text: "They started it." },
        ],
      },
    ],
  },
  {
    id: "20-09",
    number: "9",
    act: "Act Two — The Record Doesn’t Agree",
    layout: "splash",
    panels: [
      {
        art: `${i20}/unplaced.jpg`,
        balloons: [
          { kind: "caption", text: "ASA MARROW — PROVISIONAL. SOURCE: ELIAS MARROW. STATUS: UNPLACED." },
        ],
      },
    ],
  },
  {
    id: "20-10",
    number: "10",
    act: "Act Two — The Record Doesn’t Agree",
    layout: "splash",
    panels: [
      {
        art: `${i20}/bag.jpg`,
        balloons: [
          { kind: "caption", text: "The unplugged printer starts. Same page. Asa watches from across the room. He does not approach." },
        ],
      },
    ],
  },
  {
    id: "20-11",
    number: "11",
    act: "Act Two — The Record Doesn’t Agree",
    layout: "splash",
    panels: [
      {
        art: `${i20}/listen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "You gonna read it?" },
          { kind: "speech", speaker: "Asa", text: "Already know what it thinks." },
          { kind: "speech", speaker: "Mother", text: "Thinking ain’t the same as knowing. That goes for Paper too." },
        ],
      },
    ],
  },
  {
    id: "20-12",
    number: "12",
    act: "Act Three — The First Place That Calls Him Asa",
    layout: "splash",
    panels: [
      {
        art: `${i20}/emptyporch.jpg`,
        balloons: [
          { kind: "caption", text: "Convenience store. Two men. Same face. Asa’s own jacket. Nothing symbolic. Just his." },
        ],
      },
    ],
  },
  {
    id: "20-13",
    number: "13",
    act: "Act Three — The First Place That Calls Him Asa",
    layout: "splash",
    panels: [
      {
        art: `${i20}/faceoff.jpg`,
        balloons: [
          { kind: "speech", speaker: "Cashier", text: "Y’all brothers?" },
          { kind: "speech", speaker: "Both", text: "No." },
          { kind: "speech", speaker: "Cashier", text: "Cousins?" },
          { kind: "speech", speaker: "Asa", text: "Maybe. We don’t know." },
        ],
      },
    ],
  },
  {
    id: "20-14",
    number: "14",
    act: "Act Three — The First Place That Calls Him Asa",
    layout: "splash",
    panels: [
      {
        art: `${i20}/lunch.jpg`,
        balloons: [
          { kind: "speech", speaker: "Asa", text: "Asa." },
          { kind: "caption", text: "The cashier writes ASA on a paper bag. Nothing happens. No gold. No Paper. No FIRST SKY." },
        ],
      },
    ],
  },
  {
    id: "20-15",
    number: "15",
    act: "Act Three — The First Place That Calls Him Asa",
    layout: "splash",
    panels: [
      {
        art: `${i20}/who.jpg`,
        balloons: [
          { kind: "speech", speaker: "Asa", text: "First time somebody wrote it because I told them to." },
        ],
      },
    ],
  },
  {
    id: "20-16",
    number: "16",
    act: "Act Three — The First Place That Calls Him Asa",
    layout: "splash",
    panels: [
      {
        art: `${i20}/apart.jpg`,
        balloons: [
          { kind: "speech", speaker: "Asa", text: "Feels different." },
          { kind: "speech", speaker: "Elias", text: "Because nobody was trying to decide what you were for." },
        ],
      },
    ],
  },
  {
    id: "20-17",
    number: "17",
    act: "Act Four — The Man in the Photograph",
    layout: "splash",
    panels: [
      {
        art: `${i20}/six.jpg`,
        balloons: [
          { kind: "caption", text: "The old photograph is on the table. Asa stops when he sees it." },
        ],
      },
    ],
  },
  {
    id: "20-18",
    number: "18",
    act: "Act Four — The Man in the Photograph",
    layout: "splash",
    panels: [
      {
        art: `${i20}/photo.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "I found another one. Same man. Beside Grandfather. Years later." },
        ],
      },
    ],
  },
  {
    id: "20-19",
    number: "19",
    act: "Act Four — The Man in the Photograph",
    layout: "splash",
    panels: [
      {
        art: `${i20}/table.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Same hand." },
          { kind: "speech", speaker: "Asa", text: "Same coat. I don’t remember it. I know it." },
        ],
      },
    ],
  },
  {
    id: "20-20",
    number: "20",
    act: "Act Four — The Man in the Photograph",
    layout: "splash",
    panels: [
      {
        art: `${i20}/choice.jpg`,
        balloons: [
          { kind: "speech", speaker: "Asa", text: "Memory feels like something behind me. That feels like something waiting in front." },
        ],
      },
    ],
  },
  {
    id: "20-21",
    number: "21",
    act: "Act Four — The Man in the Photograph",
    layout: "splash",
    panels: [
      {
        art: `${i20}/noname.jpg`,
        balloons: [
          { kind: "caption", text: "Grandfather’s hand. A date from decades ago. Not prophecy." },
          { kind: "caption", text: "HE WOULD NOT GIVE ME HIS NAME." },
        ],
      },
    ],
  },
  {
    id: "20-22",
    number: "22",
    act: "Act Four — The Man in the Photograph",
    layout: "splash",
    panels: [
      {
        art: `${i20}/still.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Six fingers got a name?" },
          { kind: "speech", speaker: "Asa", text: "Or she knew what came before him." },
        ],
      },
    ],
  },
  {
    id: "20-23",
    number: "23",
    act: "Act Five — Unplaced",
    layout: "splash",
    panels: [
      {
        art: `${i20}/unplaced.jpg`,
        balloons: [
          { kind: "caption", text: "Three printers. Work. House. Lab. ASA MARROW — PROVISIONAL. STATUS: UNPLACED." },
        ],
      },
    ],
  },
  {
    id: "20-24",
    number: "24",
    act: "Act Five — Unplaced",
    layout: "splash",
    panels: [
      {
        art: `${i20}/house.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Thought you wasn’t reading those." },
          { kind: "speech", speaker: "Asa", text: "Changed my mind." },
        ],
      },
    ],
  },
  {
    id: "20-25",
    number: "25",
    act: "Act Five — Unplaced",
    layout: "splash",
    panels: [
      {
        art: `${i20}/crossed.jpg`,
        balloons: [
          { kind: "caption", text: "He crosses out MARROW. Leaves ASA. Paper reprints. Again. Again. Again." },
        ],
      },
    ],
  },
  {
    id: "20-26",
    number: "26",
    act: "Act Five — Unplaced",
    layout: "splash",
    panels: [
      {
        art: `${i20}/faceoff.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Paper got more paper than you got patience." },
          { kind: "speech", speaker: "Asa", text: "We’ll see." },
        ],
      },
    ],
  },
  {
    id: "20-27",
    number: "27",
    act: "Act Five — Unplaced",
    layout: "splash",
    panels: [
      {
        art: `${i20}/receiver.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Don’t argue with a filing cabinet. Then live louder than the file." },
        ],
      },
    ],
  },
  {
    id: "20-28",
    number: "28",
    act: "Act Five — Unplaced",
    layout: "splash",
    panels: [
      {
        art: `${i20}/notes.jpg`,
        balloons: [
          { kind: "caption", text: "He folds every page. Not destroyed. Not accepted. Evidence of disagreement." },
        ],
      },
    ],
  },
  {
    id: "20-29",
    number: "29",
    act: "Act Five — Unplaced",
    layout: "splash",
    panels: [
      {
        art: `${i20}/sixtoe.jpg`,
        balloons: [
          { kind: "caption", text: "2417. The voice has not spoken again. On the floor: one new footprint. Six toes." },
        ],
      },
    ],
  },
  {
    id: "20-30",
    number: "30",
    act: "Act Five — Unplaced",
    layout: "splash",
    panels: [
      {
        art: `${i20}/site.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Asa?" },
          { kind: "speech", speaker: "Elias", text: "Five toes. I think we finally got something that ain’t wearing my face." },
        ],
      },
    ],
  },
  {
    id: "20-31",
    number: "31",
    act: "Act Five — Unplaced",
    layout: "splash",
    panels: [
      {
        art: `${i20}/cavity.jpg`,
        balloons: [
          { kind: "speech", speaker: "Asa", text: "Don’t go in." },
          { kind: "speech", speaker: "Elias", text: "How’d you know?" },
          { kind: "speech", speaker: "Asa", text: "Because I remember that foot." },
        ],
      },
    ],
  },
  {
    id: "20-32",
    number: "32",
    act: "Act Five — Unplaced",
    layout: "stack",
    panels: [
      {
        art: `${i20}/six.jpg`,
        balloons: [
          { kind: "speech", speaker: "Asa", text: "The first place I woke up. Not behind you. Before that. I was looking at him." },
        ],
      },
      {
        art: `${i20}/sixtoe.jpg`,
        balloons: [
          { kind: "caption", text: "Six fingers curl around the opening. Human-shaped. Wrong by one." },
          { kind: "speech", speaker: "Voice", text: "Asa." },
          { kind: "caption", text: "Something else knows the name he chose. FIRST SKY silent. Paper silent." },
          { kind: "caption", text: "TO BE CONTINUED" },
        ],
      },
    ],
  },
];
