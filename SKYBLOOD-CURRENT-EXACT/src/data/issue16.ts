import type { ComicPage, IssueMeta } from "./types";

const i16 = "/comic/i16";

export const ISSUE16: IssueMeta = {
  n: 16,
  title: "SKYBLOOD",
  issue: "Season Two — Issue #3",
  book: "The One at Home",
  cover: `${i16}/cover.jpg`,
  logline:
    "There is an Elias Marrow at the back door. Elias Marrow is not home. The porch is a surface. Paper wants a witness. A voice behind the wall asks why he remembers dying.",
};

export const pages16: ComicPage[] = [
  {
    id: "16-01",
    number: "1",
    act: "Act One — Don’t Open It",
    layout: "splash",
    panels: [
      {
        art: `${i16}/vestdoor.jpg`,
        balloons: [
          { kind: "caption", text: "Three knocks have already happened. Silence now." },
          { kind: "caption", text: "Outside the back-door glass: Elias. Work vest. His face. Waiting." },
        ],
      },
    ],
  },
  {
    id: "16-02",
    number: "2",
    act: "Act One — Don’t Open It",
    layout: "splash",
    panels: [
      {
        art: `${i16}/sister.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Elias?" },
          { kind: "speech", speaker: "Mother", text: "No." },
          { kind: "speech", speaker: "Sister", text: "You ain’t even looked at him." },
          { kind: "speech", speaker: "Mother", text: "I looked enough." },
          { kind: "caption", text: "The thing wearing his image raises one hand. Not waving. Showing the palm." },
        ],
      },
    ],
  },
  {
    id: "16-03",
    number: "3",
    act: "Act One — Don’t Open It",
    layout: "splash",
    panels: [
      {
        art: `${i16}/receiver.jpg`,
        balloons: [
          { kind: "caption", text: "No wound. No burn. The real Elias still has one." },
          { kind: "speech", speaker: "Mother", text: "That’s not my son." },
          { kind: "caption", text: "Outside Elias smiles. Too small to be theatrical. Exactly enough to hurt." },
        ],
      },
    ],
  },
  {
    id: "16-04",
    number: "4",
    act: "Act One — Don’t Open It",
    layout: "splash",
    panels: [
      {
        art: `${i16}/keys.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias outside", text: "Ma." },
          { kind: "speech", speaker: "Mother", text: "He knows his key works." },
        ],
      },
    ],
  },
  {
    id: "16-05",
    number: "5",
    act: "Act One — Don’t Open It",
    layout: "splash",
    panels: [
      {
        art: `${i16}/bolt.jpg`,
        balloons: [
          { kind: "caption", text: "Outside Elias produces Elias’s house key." },
          { kind: "speech", speaker: "Sister", text: "You were saying?" },
        ],
      },
    ],
  },
  {
    id: "16-06",
    number: "6",
    act: "Act One — Don’t Open It",
    layout: "splash",
    panels: [
      {
        art: `${i16}/peep.jpg`,
        balloons: [
          { kind: "caption", text: "The key enters the lock. Does not turn." },
          { kind: "speech", speaker: "Elias outside", text: "Receiver." },
        ],
      },
    ],
  },
  {
    id: "16-07",
    number: "7",
    act: "Act One — Don’t Open It",
    layout: "splash",
    panels: [
      {
        art: `${i16}/listen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "You can wear what came from me." },
          { kind: "speech", speaker: "Mother", text: "That don’t mean I received you." },
        ],
      },
    ],
  },
  {
    id: "16-08",
    number: "8",
    act: "Act Two — Contact",
    layout: "splash",
    panels: [
      {
        art: `${i16}/grab.jpg`,
        balloons: [
          { kind: "caption", text: "2417. Same moment. The double’s hand around his forearm. The world is silent." },
          { kind: "caption", text: "Physical contact. Impossible until now." },
        ],
      },
    ],
  },
  {
    id: "16-09",
    number: "9",
    act: "Act Two — Contact",
    layout: "splash",
    panels: [
      {
        art: `${i16}/site.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Let go." },
          { kind: "caption", text: "The double does. Sound crashes back. Traffic. W breathing. Loose material. No explosion." },
        ],
      },
    ],
  },
  {
    id: "16-10",
    number: "10",
    act: "Act Two — Contact",
    layout: "splash",
    panels: [
      {
        art: `${i16}/w.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "I saw that. He touched you." },
          { kind: "speech", speaker: "Elias", text: "Yeah." },
          { kind: "speech", speaker: "W", text: "You gonna give me more than yeah?" },
          { kind: "speech", speaker: "Elias", text: "When I get more than yeah." },
        ],
      },
    ],
  },
  {
    id: "16-11",
    number: "11",
    act: "Act Two — Contact",
    layout: "splash",
    panels: [
      {
        art: `${i16}/call.jpg`,
        balloons: [
          { kind: "caption", text: "SISTER CALLING" },
          { kind: "speech", speaker: "Elias", text: "What happened?" },
          { kind: "speech", speaker: "Sister", text: "You home?" },
          { kind: "speech", speaker: "Elias", text: "No." },
          { kind: "speech", speaker: "Sister", text: "Because you at the back door." },
        ],
      },
    ],
  },
  {
    id: "16-12",
    number: "12",
    act: "Act Two — Contact",
    layout: "splash",
    panels: [
      {
        art: `${i16}/faceoff.jpg`,
        balloons: [
          { kind: "caption", text: "The double looks genuinely confused. That matters." },
          { kind: "speech", speaker: "Elias", text: "You got somewhere else you need to be?" },
          { kind: "speech", speaker: "Double", text: "No." },
          { kind: "speech", speaker: "Elias", text: "She looking at me." },
          { kind: "speech", speaker: "Double", text: "Then she isn’t looking at me." },
        ],
      },
    ],
  },
  {
    id: "16-13",
    number: "13",
    act: "Act Two — Contact",
    layout: "splash",
    panels: [
      {
        art: `${i16}/joke.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "He got your vest." },
          { kind: "speech", speaker: "W", text: "Shit." },
          { kind: "speech", speaker: "Sister", text: "Who said that?" },
          { kind: "speech", speaker: "W", text: "Me. Which him?" },
        ],
      },
    ],
  },
  {
    id: "16-14",
    number: "14",
    act: "Act Two — Contact",
    layout: "splash",
    panels: [
      {
        art: `${i16}/table.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Tell me something he doesn’t know." },
          { kind: "speech", speaker: "Elias", text: "I can’t. That’s the problem." },
        ],
      },
    ],
  },
  {
    id: "16-15",
    number: "15",
    act: "Act Two — Contact",
    layout: "splash",
    panels: [
      {
        art: `${i16}/window.jpg`,
        balloons: [
          { kind: "caption", text: "His mouth does not move." },
          { kind: "speech", speaker: "Voice", text: "Open." },
          { kind: "speech", speaker: "Mother", text: "That’s not him." },
        ],
      },
    ],
  },
  {
    id: "16-16",
    number: "16",
    act: "Act Three — One Body, Two Surfaces",
    layout: "splash",
    panels: [
      {
        art: `${i16}/notyou.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What can copy me besides you?" },
          { kind: "speech", speaker: "Double", text: "Nothing can." },
          { kind: "speech", speaker: "Elias", text: "My mother looking at proof." },
          { kind: "speech", speaker: "Double", text: "She’s looking at an image." },
        ],
      },
    ],
  },
  {
    id: "16-17",
    number: "17",
    act: "Act Three — One Body, Two Surfaces",
    layout: "splash",
    panels: [
      {
        art: `${i16}/nolegs.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "Ask her where his feet are." },
          { kind: "caption", text: "Through the lower pane: no boots. No legs. Nothing below the glass." },
        ],
      },
    ],
  },
  {
    id: "16-18",
    number: "18",
    act: "Act Three — One Body, Two Surfaces",
    layout: "splash",
    panels: [
      {
        art: `${i16}/porch.jpg`,
        balloons: [
          { kind: "caption", text: "She moves left. He remains perfectly presented." },
          { kind: "speech", speaker: "Mother", text: "He’s not standing outside." },
        ],
      },
    ],
  },
  {
    id: "16-19",
    number: "19",
    act: "Act Three — One Body, Two Surfaces",
    layout: "stack",
    panels: [
      {
        art: `${i16}/emptyporch.jpg`,
        balloons: [{ kind: "caption", text: "Porch light. Empty porch." }],
      },
      {
        art: `${i16}/glasselias.jpg`,
        balloons: [
          { kind: "caption", text: "In the dark glass: vest, face, key. A reflection without a body." },
        ],
      },
    ],
  },
  {
    id: "16-20",
    number: "20",
    act: "Act Three — One Body, Two Surfaces",
    layout: "splash",
    panels: [
      {
        art: `${i16}/gold.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "It learned the surface." },
          { kind: "speech", speaker: "Elias", text: "From who?" },
          { kind: "speech", speaker: "Double", text: "Us." },
        ],
      },
    ],
  },
  {
    id: "16-21",
    number: "21",
    act: "Act Four — Paper Wants a Body",
    layout: "splash",
    panels: [
      {
        art: `${i16}/envelope.jpg`,
        balloons: [
          { kind: "caption", text: "Something slides beneath the front door. Not the back. No stamp. No address." },
        ],
      },
    ],
  },
  {
    id: "16-22",
    number: "22",
    act: "Act Four — Paper Wants a Body",
    layout: "splash",
    panels: [
      {
        art: `${i16}/sheet.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "Don’t touch it." },
          { kind: "caption", text: "The envelope opens by itself. Dry black ink. Paper’s mouth." },
        ],
      },
    ],
  },
  {
    id: "16-23",
    number: "23",
    act: "Act Four — Paper Wants a Body",
    layout: "splash",
    panels: [
      {
        art: `${i16}/witness.jpg`,
        balloons: [
          { kind: "caption", text: "MARROW, ELIAS  /  STATUS: DISPUTED  /  RESOLUTION REQUIRES WITNESS" },
          { kind: "caption", text: "This is not FIRST SKY. Different system. Different appetite." },
        ],
      },
    ],
  },
  {
    id: "16-24",
    number: "24",
    act: "Act Four — Paper Wants a Body",
    layout: "splash",
    panels: [
      {
        art: `${i16}/both.jpg`,
        balloons: [
          { kind: "caption", text: "The page in his bag: PRESENT BOTH" },
          { kind: "speech", speaker: "Elias", text: "It wants you." },
          { kind: "speech", speaker: "Double", text: "It wants a close." },
        ],
      },
    ],
  },
  {
    id: "16-25",
    number: "25",
    act: "Act Four — Paper Wants a Body",
    layout: "splash",
    panels: [
      {
        art: `${i16}/apart.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Explain Paper to me like I’m five." },
          { kind: "speech", speaker: "Elias", text: "It files things." },
          { kind: "speech", speaker: "Double", text: "Outcomes. People are easier." },
        ],
      },
    ],
  },
  {
    id: "16-26",
    number: "26",
    act: "Act Four — Paper Wants a Body",
    layout: "splash",
    panels: [
      {
        art: `${i16}/wall.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "It decides which record survives. I’ve seen it choose." },
          { kind: "speech", speaker: "Double", text: "Later." },
        ],
      },
    ],
  },
  {
    id: "16-27",
    number: "27",
    act: "Act Five — Not Yet",
    layout: "splash",
    panels: [
      {
        art: `${i16}/palmgold.jpg`,
        balloons: [
          { kind: "caption", text: "Palm against the glass. Gold around the hand. Not on it." },
          { kind: "caption", text: "Two systems. Same house. Neither invited." },
        ],
      },
    ],
  },
  {
    id: "16-28",
    number: "28",
    act: "Act Five — Not Yet",
    layout: "splash",
    panels: [
      {
        art: `${i16}/choice.jpg`,
        balloons: [
          { kind: "speech", speaker: "Voice", text: "Receiver. Present Elias Marrow." },
          { kind: "speech", speaker: "Mother", text: "Which one?" },
          { kind: "caption", text: "FIRST SKY does not answer immediately." },
        ],
      },
    ],
  },
  {
    id: "16-29",
    number: "29",
    act: "Act Five — Not Yet",
    layout: "splash",
    panels: [
      {
        art: `${i16}/who.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "It asked me something. Which one of us is Elias Marrow." },
          { kind: "speech", speaker: "W", text: "What’d you say?" },
          { kind: "speech", speaker: "Double", text: "Nothing." },
        ],
      },
    ],
  },
  {
    id: "16-30",
    number: "30",
    act: "Act Five — Not Yet",
    layout: "splash",
    panels: [
      {
        art: `${i16}/learned.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "Paper wants one record. FIRST SKY wants one address." },
          { kind: "speech", speaker: "Double", text: "If either one gets an answer, one of us becomes the mistake." },
        ],
      },
    ],
  },
  {
    id: "16-31",
    number: "31",
    act: "Act Five — Not Yet",
    layout: "stack",
    panels: [
      {
        art: `${i16}/still.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "I received Elias Marrow before any of you knew his name." },
          { kind: "speech", speaker: "Mother", text: "So if you don’t know which one he is — you ain’t asking me." },
          { kind: "caption", text: "The reflection vanishes. Not defeated. Refused an answer." },
        ],
      },
      {
        art: `${i16}/declines.jpg`,
        balloons: [{ kind: "caption", text: "RECEIVER DECLINES WITNESS" }],
      },
    ],
  },
  {
    id: "16-32",
    number: "32",
    act: "Act Five — Not Yet",
    layout: "splash",
    panels: [
      {
        art: `${i16}/cavity.jpg`,
        balloons: [
          { kind: "speech", speaker: "Voice", text: "If that’s you — don’t let him bring you in here." },
          { kind: "speech", speaker: "Voice", text: "His grandfather." },
          { kind: "speech", speaker: "Double", text: "No." },
          { kind: "speech", speaker: "Voice", text: "Ask him why he remembers me dying." },
          { kind: "caption", text: "TO BE CONTINUED" },
        ],
      },
    ],
  },
];
