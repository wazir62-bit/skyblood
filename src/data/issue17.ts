import type { ComicPage, IssueMeta } from "./types";

const i17 = "/comic/i17";

export const ISSUE17: IssueMeta = {
  n: 17,
  title: "SKYBLOOD",
  issue: "Season Two — Issue #4",
  book: "I Remember You Dead",
  cover: `${i17}/cover.jpg`,
  logline:
    "A voice behind the wall says it is his grandfather. The other Elias remembers burying him. Both are evidence. Neither is proof.",
};

export const pages17: ComicPage[] = [
  {
    id: "17-01",
    number: "1",
    act: "Act One — Say It Again",
    layout: "splash",
    panels: [
      {
        art: `${i17}/cavity.jpg`,
        balloons: [
          { kind: "caption", text: "2417. Nobody moves." },
          { kind: "speech", speaker: "Voice", text: "Ask him why he remembers me dying." },
        ],
      },
    ],
  },
  {
    id: "17-02",
    number: "2",
    act: "Act One — Say It Again",
    layout: "splash",
    panels: [
      {
        art: `${i17}/inside.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Say it again. Who you are." },
          { kind: "speech", speaker: "Voice", text: "Your grandfather." },
          { kind: "speech", speaker: "Elias", text: "Name." },
        ],
      },
    ],
  },
  {
    id: "17-03",
    number: "3",
    act: "Act One — Say It Again",
    layout: "splash",
    panels: [
      {
        art: `${i17}/wall.jpg`,
        balloons: [
          { kind: "speech", speaker: "Voice", text: "Don’t give names to dark rooms." },
          { kind: "caption", text: "That sounds like a rule. Not proof." },
        ],
      },
    ],
  },
  {
    id: "17-04",
    number: "4",
    act: "Act One — Say It Again",
    layout: "splash",
    panels: [
      {
        art: `${i17}/w.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "I got an idea." },
          { kind: "speech", speaker: "Elias", text: "Was your idea going in there?" },
          { kind: "speech", speaker: "W", text: "Maybe." },
          { kind: "speech", speaker: "Elias", text: "Then it’s accurate." },
        ],
      },
    ],
  },
  {
    id: "17-05",
    number: "5",
    act: "Act One — Say It Again",
    layout: "splash",
    panels: [
      {
        art: `${i17}/faceoff.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "We leave." },
          { kind: "speech", speaker: "Elias", text: "You scared?" },
          { kind: "speech", speaker: "Double", text: "Yes." },
        ],
      },
    ],
  },
  {
    id: "17-06",
    number: "6",
    act: "Act One — Say It Again",
    layout: "splash",
    panels: [
      {
        art: `${i17}/notyou.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You remember him dying. How?" },
          { kind: "speech", speaker: "Double", text: "The way you don’t." },
        ],
      },
    ],
  },
  {
    id: "17-07",
    number: "7",
    act: "Act Two — A Memory Elias Never Had",
    layout: "splash",
    panels: [
      {
        art: `${i17}/site.jpg`,
        balloons: [
          { kind: "caption", text: "They do not enter. Daylight. Concrete. Real Memphis. The opening stays visible. Reaching it would require a choice." },
        ],
      },
    ],
  },
  {
    id: "17-08",
    number: "8",
    act: "Act Two — A Memory Elias Never Had",
    layout: "splash",
    panels: [
      {
        art: `${i17}/notes.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Start talking. His death." },
          { kind: "speech", speaker: "Double", text: "You won’t like it." },
          { kind: "speech", speaker: "Elias", text: "Been having a rough month." },
        ],
      },
    ],
  },
  {
    id: "17-09",
    number: "9",
    act: "Act Two — A Memory Elias Never Had",
    layout: "splash",
    panels: [
      {
        art: `${i17}/learned.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "Hospital. Night. Your mother was there." },
          { kind: "speech", speaker: "Elias", text: "I wasn’t." },
          { kind: "speech", speaker: "Double", text: "I know. I was." },
        ],
      },
    ],
  },
  {
    id: "17-10",
    number: "10",
    act: "Act Two — A Memory Elias Never Had",
    layout: "splash",
    panels: [
      {
        art: `${i17}/who.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "As me?" },
          { kind: "speech", speaker: "Double", text: "I don’t know." },
          { kind: "speech", speaker: "Double", text: "You think I enjoy not knowing what body my memories belong to?" },
        ],
      },
    ],
  },
  {
    id: "17-11",
    number: "11",
    act: "Act Two — A Memory Elias Never Had",
    layout: "splash",
    panels: [
      {
        art: `${i17}/window.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "He knew I was outside. He kept looking toward the glass." },
          { kind: "caption", text: "Boundary. Again." },
        ],
      },
    ],
  },
  {
    id: "17-12",
    number: "12",
    act: "Act Two — A Memory Elias Never Had",
    layout: "splash",
    panels: [
      {
        art: `${i17}/photo.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "Your mother was holding his hand. He said four things." },
          { kind: "caption", text: "Elias opens the notebook. Grandfather’s four rules." },
        ],
      },
    ],
  },
  {
    id: "17-13",
    number: "13",
    act: "Act Two — A Memory Elias Never Had",
    layout: "splash",
    panels: [
      {
        art: `${i17}/grab.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "I can’t say them." },
          { kind: "speech", speaker: "Elias", text: "Can’t or won’t?" },
          { kind: "speech", speaker: "Double", text: "Can’t. Every time I try—" },
          { kind: "caption", text: "One drop. Real blood. He catches the rest against his sleeve." },
        ],
      },
    ],
  },
  {
    id: "17-14",
    number: "14",
    act: "Act Three — His Blood",
    layout: "splash",
    panels: [
      {
        art: `${i17}/apart.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Does he normally do that?" },
          { kind: "speech", speaker: "Elias", text: "I don’t have a normal for him." },
        ],
      },
    ],
  },
  {
    id: "17-15",
    number: "15",
    act: "Act Three — His Blood",
    layout: "stack",
    panels: [
      {
        art: `${i17}/drop.jpg`,
        balloons: [{ kind: "caption", text: "The drop hits concrete. Nothing happens. One heartbeat. Two." }],
      },
      {
        art: `${i17}/shard.jpg`,
        balloons: [
          { kind: "caption", text: "A surviving shard inside 2417 turns gold. Not the blood. The glass." },
        ],
      },
    ],
  },
  {
    id: "17-16",
    number: "16",
    act: "Act Three — His Blood",
    layout: "splash",
    panels: [
      {
        art: `${i17}/gold.jpg`,
        balloons: [
          { kind: "caption", text: "FIRST SKY does not speak. The gold remains." },
          { kind: "speech", speaker: "Double", text: "We need to go. Because that hasn’t happened before." },
        ],
      },
    ],
  },
  {
    id: "17-17",
    number: "17",
    act: "Act Three — His Blood",
    layout: "splash",
    panels: [
      {
        art: `${i17}/drop.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "What hasn’t?" },
          { kind: "speech", speaker: "Double", text: "Me." },
        ],
      },
    ],
  },
  {
    id: "17-18",
    number: "18",
    act: "Act Three — His Blood",
    layout: "splash",
    panels: [
      {
        art: `${i17}/clock.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "Maybe it’s blood. Yours do that?" },
          { kind: "speech", speaker: "Elias", text: "Don’t know." },
          { kind: "speech", speaker: "Double", text: "Don’t find out." },
        ],
      },
    ],
  },
  {
    id: "17-19",
    number: "19",
    act: "Act Three — His Blood",
    layout: "splash",
    panels: [
      {
        art: `${i17}/bag.jpg`,
        balloons: [
          { kind: "caption", text: "He unwraps the bandage. Healing. Closed. No fresh blood. Nothing happens." },
        ],
      },
    ],
  },
  {
    id: "17-20",
    number: "20",
    act: "Act Three — His Blood",
    layout: "splash",
    panels: [
      {
        art: `${i17}/form.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "It reacted after his blood hit the ground. That’s all we know." },
        ],
      },
    ],
  },
  {
    id: "17-21",
    number: "21",
    act: "Act Four — The Woman Who Was There",
    layout: "splash",
    panels: [
      {
        art: `${i17}/kitchen.jpg`,
        balloons: [
          { kind: "caption", text: "Mother’s kitchen. The double waits outside. Not at a window. He chose it." },
        ],
      },
    ],
  },
  {
    id: "17-22",
    number: "22",
    act: "Act Four — The Woman Who Was There",
    layout: "splash",
    panels: [
      {
        art: `${i17}/table.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "He remembers Granddad dying. Hospital. Night. You holding his hand. Someone outside the room." },
        ],
      },
    ],
  },
  {
    id: "17-23",
    number: "23",
    act: "Act Four — The Woman Who Was There",
    layout: "splash",
    panels: [
      {
        art: `${i17}/receiver.jpg`,
        balloons: [
          { kind: "speech", speaker: "Mother", text: "You weren’t there." },
          { kind: "speech", speaker: "Elias", text: "He knew you were holding Granddad’s hand." },
        ],
      },
    ],
  },
  {
    id: "17-24",
    number: "24",
    act: "Act Four — The Woman Who Was There",
    layout: "splash",
    panels: [
      {
        art: `${i17}/listen.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Did Granddad keep looking at the door?" },
          { kind: "speech", speaker: "Mother", text: "Glass. The little window in it." },
        ],
      },
    ],
  },
  {
    id: "17-25",
    number: "25",
    act: "Act Four — The Woman Who Was There",
    layout: "splash",
    panels: [
      {
        art: `${i17}/sister.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Looking at what?" },
          { kind: "speech", speaker: "Mother", text: "I thought he was looking for somebody. Every time I checked — hall was empty." },
        ],
      },
    ],
  },
  {
    id: "17-26",
    number: "26",
    act: "Act Four — The Woman Who Was There",
    layout: "splash",
    panels: [
      {
        art: `${i17}/still.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "He says Granddad spoke four things." },
          { kind: "speech", speaker: "Mother", text: "Last two days, your grandfather couldn’t speak. Not one word." },
        ],
      },
    ],
  },
  {
    id: "17-27",
    number: "27",
    act: "Act Four — The Woman Who Was There",
    layout: "splash",
    panels: [
      {
        art: `${i17}/notes.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "So he remembers something that didn’t happen?" },
          { kind: "speech", speaker: "Mother", text: "No. He remembers something I didn’t witness." },
          { kind: "caption", text: "That’s his hand. She does not know when he wrote the rules." },
        ],
      },
    ],
  },
  {
    id: "17-28",
    number: "28",
    act: "Act Five — Late",
    layout: "splash",
    panels: [
      {
        art: `${i17}/emptyporch.jpg`,
        balloons: [
          { kind: "speech", speaker: "Double", text: "She say I was there?" },
          { kind: "speech", speaker: "Elias", text: "She never saw you." },
          { kind: "speech", speaker: "Double", text: "That’s not what I asked." },
        ],
      },
    ],
  },
  {
    id: "17-29",
    number: "29",
    act: "Act Five — Late",
    layout: "splash",
    panels: [
      {
        art: `${i17}/choice.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Granddad couldn’t talk. She heard nothing." },
          { kind: "speech", speaker: "Double", text: "He talked to me." },
          { kind: "speech", speaker: "Elias", text: "Then what exactly do you remember?" },
          { kind: "speech", speaker: "Double", text: "Being late." },
        ],
      },
    ],
  },
  {
    id: "17-30",
    number: "30",
    act: "Act Five — Late",
    layout: "splash",
    panels: [
      {
        art: `${i17}/who.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Late from where?" },
          { kind: "speech", speaker: "Double", text: "I don’t know how to say it without making it smaller." },
          { kind: "speech", speaker: "Elias", text: "Can’t?" },
          { kind: "speech", speaker: "Double", text: "Won’t." },
        ],
      },
    ],
  },
  {
    id: "17-31",
    number: "31",
    act: "Act Five — Late",
    layout: "splash",
    panels: [
      {
        art: `${i17}/warning.jpg`,
        balloons: [
          { kind: "caption", text: "An old folded page. Crease worn soft. No two Eliases. No convenient names." },
          { kind: "caption", text: "WHEN TWO TRUTHS ARRIVE TOGETHER, DO NOT MAKE THEM CHOOSE." },
          { kind: "caption", text: "THE SKY WILL." },
        ],
      },
    ],
  },
  {
    id: "17-32",
    number: "32",
    act: "Act Five — Late",
    layout: "stack",
    panels: [
      {
        art: `${i17}/goldhouse.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Which one of us came first?" },
          { kind: "speech", speaker: "Double", text: "I don’t think that’s the question. Which one gets called back." },
          { kind: "speech", speaker: "Elias", text: "Back where?" },
          { kind: "caption", text: "Every window on the house turns gold. Glass only. Three witnesses. No voice." },
        ],
      },
      {
        art: `${i17}/burned.jpg`,
        balloons: [
          { kind: "caption", text: "At 2417 the drop remains. Ordinary red. Beside it, in broken glass: a sky that is not Memphis." },
          { kind: "caption", text: "TO BE CONTINUED" },
        ],
      },
    ],
  },
];
