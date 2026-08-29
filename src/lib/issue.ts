export type Balloon = {
  speaker?: string;
  text: string;
  place?: "tl" | "tr" | "bl" | "br" | "mid";
};

export type Repair = {
  was: string;
  now: string;
  uniqueJob: string;
  kills: string;
};

export type ComicPage = {
  n: number;
  art: string;
  pos?: string;
  movement: string;
  caption?: string;
  balloons?: Balloon[];
  silent?: boolean;
  repair?: Repair;
};

export const ISSUE = {
  id: "1",
  number: 1,
  title: "The Temple Above",
  series: "SKYBLOOD",
  locale: "Memphis air hub · 11:00 p.m.–4:00 a.m.",
  logline:
    "A man who has always felt the sky respond to him photographs proof that the sky has been watching back.",
  out:
    "He has created evidence. He has not yet created a witness.",
} as const;

const A = {
  cover: "/skyblood/cover.jpg",
  elias: "/skyblood/elias.jpg",
  hub: "/skyblood/hub.jpg",
  temple: "/skyblood/temple.jpg",
  p13: "/skyblood/p13.jpg",
  p24: "/skyblood/p24.jpg",
  p25: "/skyblood/p25.jpg",
  p30: "/skyblood/p30.jpg",
  p31: "/skyblood/p31.jpg",
  alone: "/skyblood/alone.jpg",
  work: "/skyblood/work.jpg",
  lightning: "/skyblood/lightning.jpg",
  call: "/skyblood/call.jpg",
  glass: "/skyblood/glass.jpg",
  final: "/skyblood/final.jpg",
  desk: "/skyblood/desk.jpg",
  marcus: "/skyblood/marcus.jpg",
} as const;

export const PAGES: ComicPage[] = [
  {
    n: 1,
    art: A.hub,
    pos: "center top",
    movement: "I · The Sky Habit",
    caption:
      "Memphis. Night cargo. The sky is a working surface until it isn’t.",
  },
  {
    n: 2,
    art: A.temple,
    pos: "center center",
    movement: "I · The Sky Habit",
    caption:
      "Look first. The story will try to name it later.",
  },
  {
    n: 3,
    art: A.work,
    pos: "center 30%",
    movement: "I · The Sky Habit",
    caption:
      "Elias Marrow is good at the job because the air tells him a half-second early. He does not call it a gift.",
  },
  {
    n: 4,
    art: A.marcus,
    pos: "center 20%",
    movement: "I · The Sky Habit",
    balloons: [
      {
        speaker: "Marcus",
        text: "You check the sky more than Weather does.",
        place: "tl",
      },
      {
        speaker: "Elias",
        text: "Clouds are thinking.",
        place: "br",
      },
    ],
  },
  {
    n: 5,
    art: A.work,
    pos: "center 70%",
    movement: "I · The Sky Habit",
    caption:
      "A supervisor’s correction lands wrong. Wind slams a container door. Elias breathes down. The door stops.",
  },
  {
    n: 6,
    art: A.call,
    pos: "center 25%",
    movement: "I · The Sky Habit",
    balloons: [
      {
        speaker: "Mama",
        text: "Don’t start talking about the weather.",
        place: "tl",
      },
    ],
    caption: "She takes the phone from Tasha. The rule is older than the job.",
  },
  {
    n: 7,
    art: A.elias,
    pos: "center 20%",
    movement: "I · The Sky Habit",
    caption:
      "Alone, he records it: the sky has answered him since childhood. He deletes the memo before it can become a witness.",
  },
  {
    n: 8,
    art: A.desk,
    pos: "center center",
    movement: "I · The Sky Habit",
    caption:
      "On the workplace display the cell turns against the forecast and walks straight at the hub.",
  },
  {
    n: 9,
    art: A.desk,
    pos: "left center",
    movement: "II · Lightning Hold",
    caption:
      "Hold called. Radios, alarms, procedure. The sky’s first authority tonight is a binder, not a god.",
  },
  {
    n: 10,
    art: A.glass,
    pos: "center 40%",
    movement: "II · Lightning Hold",
    balloons: [
      {
        speaker: "Marcus",
        text: "Elias— leave it—",
        place: "tl",
      },
    ],
    caption: "An unsecured net. He doubles back. Marcus is pulled inside with the crew.",
  },
  {
    n: 11,
    art: A.alone,
    pos: "center 35%",
    movement: "II · Lightning Hold",
    caption:
      "Rain everywhere except a narrow circle around his boots.",
  },
  {
    n: 12,
    art: A.lightning,
    pos: "center 40%",
    movement: "II · Lightning Hold",
    silent: true,
    caption:
      "White light. Instrument confirmation. No thunder. For one breath the industrial world has no sound.",
  },
  {
    n: 13,
    art: A.p13,
    pos: "center 45%",
    movement: "III · The Shape Inside",
    repair: {
      was: "Later pages kept restaging the same act — raising the phone at the temple — so the capture never finished.",
      now: "This is the only time he takes the picture. The phone is ruder than the eye. After this, the photograph exists as an object, not as a repeated gesture.",
      uniqueJob: "Invent the record.",
      kills: "Do not raise the phone at the temple again on 21, 24, or 25.",
    },
    caption:
      "The camera will not let the sky stay a cloud. On the glass: stacked roofs. Above the glass: weather.",
  },
  {
    n: 14,
    art: A.temple,
    pos: "center 20%",
    movement: "III · The Shape Inside",
    balloons: [
      {
        speaker: "Elias",
        text: "Eagle. Tower. Whatever the mind needs.",
        place: "bl",
      },
    ],
    caption: "The mass adds another tier while he is still bargaining.",
  },
  {
    n: 15,
    art: A.temple,
    pos: "center 60%",
    movement: "III · The Shape Inside",
    caption:
      "The moon sits beside it like a lamp outside a door. A dark opening holds in moving cloud.",
  },
  {
    n: 16,
    art: A.glass,
    pos: "center 55%",
    movement: "III · The Shape Inside",
    caption:
      "From behind glass Marcus photographs Elias, not the sky. In that frame the shadow points moonward. The head is still a man’s.",
  },
  {
    n: 17,
    art: A.p13,
    pos: "center 15%",
    movement: "III · The Shape Inside",
    caption:
      "He lowers the phone. The temple softens. He raises it. Rooflines return. Looking is part of the architecture now. He does not shoot again.",
  },
  {
    n: 18,
    art: A.temple,
    pos: "center 35%",
    movement: "III · The Shape Inside",
    caption:
      "Zoomed in: one smooth vertical band interrupts the detail. It means nothing yet. It is a place a name used to live.",
  },
  {
    n: 19,
    art: A.temple,
    pos: "center 80%",
    movement: "III · The Shape Inside",
    caption:
      "The doorway surrounds him without the ground changing. For one second he hears stone being read in a language he does not know.",
  },
  {
    n: 20,
    art: A.hub,
    pos: "center 60%",
    movement: "IV · Proof That Refuses",
    caption:
      "The cell collapses into ordinary haze. The crew comes back onto the ramp as if the night were weather again.",
  },
  {
    n: 21,
    art: A.marcus,
    pos: "center 35%",
    movement: "IV · Proof That Refuses",
    balloons: [
      {
        speaker: "Marcus",
        text: "That’s an eagle, man.",
        place: "tl",
      },
      {
        speaker: "Elias",
        text: "Look at the roofs.",
        place: "br",
      },
    ],
    caption:
      "While they argue, the image on the live phone goes softer. This is disbelief doing work — not the later prints, not the file being eaten.",
  },
  {
    n: 22,
    art: A.work,
    pos: "center 50%",
    movement: "IV · Proof That Refuses",
    balloons: [
      {
        speaker: "Deke",
        text: "Why are you still on my ramp.",
        place: "tl",
      },
      {
        speaker: "Elias",
        text: "Loose net. That’s all.",
        place: "br",
      },
    ],
    caption: "He protects the job by erasing himself a second time.",
  },
  {
    n: 23,
    art: A.desk,
    pos: "right center",
    movement: "IV · Proof That Refuses",
    caption:
      "Weather confirms a strike and cannot find its sound. An anomaly file opens itself and waits for a human who has not arrived.",
  },
  {
    n: 24,
    art: A.p24,
    pos: "center 40%",
    movement: "IV · Proof That Refuses",
    repair: {
      was: "This page used to re-take the photo from 13 and re-run the eagle argument from 21, so the plot stalled on ‘did you see it.’",
      now: "No one is shooting. Two physical prints sit on the break-room table. Marcus’s print: Elias, moonward shadow, empty sky. Elias’s print: temple, no figure, no shadow.",
      uniqueJob: "Prove they did not record the same night.",
      kills: "Do not raise the phone. Do not repeat ‘that’s an eagle.’",
    },
    balloons: [
      {
        speaker: "Marcus",
        text: "That’s you. That’s not a building.",
        place: "tl",
      },
      {
        speaker: "Elias",
        text: "That’s what I was looking at.",
        place: "br",
      },
    ],
    caption: "Same minute. Two records. They do not agree.",
  },
  {
    n: 25,
    art: A.p25,
    pos: "center 45%",
    movement: "IV · Proof That Refuses",
    repair: {
      was: "Erosion was written as ‘the picture got less distinct’ — the same beat as 21 — so the night had no antagonist, only fog.",
      now: "The file is being hunted. He duplicates it. Copy A loses the door. Copy B loses the moon. A roof-tier vanishes between blinks. Metadata crawls backward.",
      uniqueJob: "Turn the record into a thing that can be attacked.",
      kills: "Do not restate the two-print comparison. Do not re-take the photo.",
    },
    caption:
      "He duplicates the file. Copy A loses the door. Copy B loses the moon. The night is being edited.",
  },
  {
    n: 26,
    art: A.call,
    pos: "center 55%",
    movement: "IV · Proof That Refuses",
    balloons: [
      {
        speaker: "Mama",
        text: "Do not bring that to my house.",
        place: "tl",
      },
    ],
    caption: "He texts the image with no caption. She recognizes it strongly enough to forbid arrival.",
  },
  {
    n: 27,
    art: A.alone,
    pos: "center 70%",
    movement: "V · Way-Opener",
    caption:
      "Shift ends. Ordinary operations resume. The impossible night is already becoming paperwork.",
  },
  {
    n: 28,
    art: A.elias,
    pos: "center 40%",
    movement: "V · Way-Opener",
    caption:
      "The phone restores the memo he deleted. Beneath his own voice: a second breath, speaking through the wind.",
  },
  {
    n: 29,
    art: A.temple,
    pos: "center 10%",
    movement: "V · Way-Opener",
    balloons: [
      {
        text: "Way-Opener.",
        place: "mid",
      },
    ],
    caption:
      "It does not call him a god. It addresses an office he understands without translation. This is the only time the title is spoken.",
  },
  {
    n: 30,
    art: A.p30,
    pos: "center 70%",
    movement: "V · Way-Opener",
    repair: {
      was: "The cab scene repeated the voice saying Way-Opener, then previewed the jackal, so page 29 and 31 had nothing new to do.",
      now: "No voice. No jackal. No temple. He looks up at ordinary cloud with relief, as if the title were an invitation to enter.",
      uniqueJob: "Let him misread the office as blessing.",
      kills: "Do not speak the title. Do not throw the jackal shadow. Do not show the photograph.",
    },
    caption:
      "He hears an office and thinks it is a door for him. He is wrong. The night will not correct him yet.",
  },
  {
    n: 31,
    art: A.p31,
    pos: "center 45%",
    movement: "V · Way-Opener",
    silent: true,
    repair: {
      was: "The jackal was stacked onto the title and the moonward shadow, so the guardian-form leak felt like a recap instead of a first sighting.",
      now: "Only this: passing headlights, human head in the cab, jackal head on the visor, one frame. No temple. No title. No photo.",
      uniqueJob: "Leak the guardian form once, as shadow, not as costume.",
      kills: "Do not reuse the moonward pointing-shadow from 16. Do not name Way-Opener.",
    },
  },
  {
    n: 32,
    art: A.final,
    pos: "center 40%",
    movement: "V · Way-Opener",
    caption:
      "He backs the photograph up. He drives toward his mother’s house and stops short. Above the hub the clouds look empty. On the phone the temple remains, its blank band waiting for a name.",
  },
];

export const REPAIRS = PAGES.filter((p) => p.repair);

export function pageByNumber(n: number) {
  return PAGES.find((p) => p.n === n);
}
