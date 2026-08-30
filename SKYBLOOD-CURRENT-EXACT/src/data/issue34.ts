import type { ComicPage, IssueMeta } from "./types";

const i34 = "/comic/i34";

export const ISSUE34: IssueMeta = {
  n: 34,
  title: "SKYBLOOD",
  issue: "Season Three — Issue #7",
  book: "My Name Opens Doors",
  cover: `${i34}/badges.jpg`,
  logline:
    "Both badges are valid. Both get suspended. A caller used his name to open Mother’s door. RJ is in the house until Sister takes him. The man across the street is not on the phone.",
};

export const pages34: ComicPage[] = [
  {
    id: "34-01",
    number: "1",
    act: "Act One — Two Badges",
    layout: "splash",
    panels: [
      {
        art: `${i34}/badges.jpg`,
        balloons: [
          { kind: "caption", text: "Security office. Night. Two badges. Identical. MARROW, ELIAS. Two entry events." },
          { kind: "speech", speaker: "Officer", text: "Which one’s fake?" },
        ],
      },
    ],
  },
  {
    id: "34-02",
    number: "2",
    act: "Act One — Two Badges",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p02.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "That one." },
          { kind: "speech", speaker: "Officer", text: "How you know?" },
          { kind: "speech", speaker: "Elias", text: "Because this one’s mine." },
          { kind: "speech", speaker: "Officer", text: "That’s not what I asked." },
        ],
      },
    ],
  },
  {
    id: "34-03",
    number: "3",
    act: "Act One — Two Badges",
    layout: "splash",
    panels: [
      {
        art: `${i34}/valid.jpg`,
        balloons: [
          { kind: "caption", text: "First: VALID. Second: VALID." },
          { kind: "speech", speaker: "Officer", text: "System doesn’t agree with you." },
        ],
      },
    ],
  },
  {
    id: "34-04",
    number: "4",
    act: "Act One — Two Badges",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p04.jpg`,
        balloons: [
          { kind: "caption", text: "Elias physically between the two badges. Visual scale." },
          { kind: "speech", speaker: "W", text: "He’s standing right here." },
          { kind: "speech", speaker: "Officer", text: "That’s what makes this a problem." },
        ],
      },
    ],
  },
  {
    id: "34-05",
    number: "5",
    act: "Act Two — The Consequence",
    layout: "splash",
    panels: [
      {
        art: `${i34}/suspend.jpg`,
        balloons: [
          { kind: "caption", text: "ACCESS CREDENTIAL SUSPENSION." },
          { kind: "speech", speaker: "Elias", text: "Mine?" },
          { kind: "speech", speaker: "Supervisor", text: "Both." },
        ],
      },
    ],
  },
  {
    id: "34-06",
    number: "6",
    act: "Act Two — The Consequence",
    layout: "splash",
    panels: [
      {
        art: `${i34}/elias.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You know I’m me." },
          { kind: "speech", speaker: "Supervisor", text: "Personally? Yeah. That doesn’t." },
          { kind: "caption", text: "For the first time: his name doesn’t get him into his own workplace." },
        ],
      },
    ],
  },
  {
    id: "34-07",
    number: "7",
    act: "Act Two — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/rjkitch.jpg`,
        balloons: [
          { kind: "caption", text: "Mother’s kitchen. Two badges in evidence bags. RJ at the table. Sister’s son. Elias’s nephew. The camera simply had not been on him." },
          { kind: "speech", speaker: "Elias", text: "Ain’t seen you in a minute." },
          { kind: "speech", speaker: "RJ", text: "I got a mama." },
          { kind: "speech", speaker: "Sister", text: "And you’re going back to her house tonight." },
          { kind: "speech", speaker: "RJ", text: "I ain’t say I wasn’t." },
        ],
      },
    ],
  },
  {
    id: "34-08",
    number: "8",
    act: "Act Two — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p08.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "So somebody copied you." },
          { kind: "speech", speaker: "Elias", text: "Copied a card." },
          { kind: "speech", speaker: "Sister", text: "With your face." },
          { kind: "speech", speaker: "Elias", text: "Still a card." },
          { kind: "speech", speaker: "Mother", text: "Good. Keep knowing the difference." },
        ],
      },
    ],
  },
  {
    id: "34-09",
    number: "9",
    act: "Act Two — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p09.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "What you gonna do?" },
          { kind: "speech", speaker: "Elias", text: "Find where they made it." },
        ],
      },
    ],
  },
  {
    id: "34-10",
    number: "10",
    act: "Act Two — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/badges.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "They got one thing wrong. Picture’s old. That’s not the picture on my current badge." },
        ],
      },
    ],
  },
  {
    id: "34-11",
    number: "11",
    act: "Act Three — The Old Record",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p11.jpg`,
        balloons: [
          { kind: "caption", text: "Diner. Off property. Ordinary paperwork W can access for himself." },
          { kind: "speech", speaker: "W", text: "How old?" },
          { kind: "speech", speaker: "Elias", text: "Three years." },
          { kind: "speech", speaker: "W", text: "Then whoever made it didn’t copy your wallet." },
        ],
      },
    ],
  },
  {
    id: "34-12",
    number: "12",
    act: "Act Three — The Old Record",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p12.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Copied something that kept the old picture." },
          { kind: "speech", speaker: "W", text: "Old HR? Badge vendor?" },
          { kind: "speech", speaker: "Elias", text: "Maybe." },
        ],
      },
    ],
  },
  {
    id: "34-13",
    number: "13",
    act: "Act Three — The Old Record",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p13.jpg`,
        balloons: [
          { kind: "speech", speaker: "W", text: "You got a lot of maybes." },
          { kind: "speech", speaker: "Elias", text: "One less than yesterday." },
        ],
      },
    ],
  },
  {
    id: "34-14",
    number: "14",
    act: "Act Four — The Call",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p14.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Yeah." },
          { kind: "caption", text: "Unknown number. Silence." },
          { kind: "speech", speaker: "Voice", text: "Your badge worked." },
        ],
      },
    ],
  },
  {
    id: "34-15",
    number: "15",
    act: "Act Four — The Call",
    layout: "splash",
    panels: [
      {
        art: `${i34}/w.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Who is this?" },
          { kind: "speech", speaker: "Voice", text: "Wrong question." },
          { kind: "speech", speaker: "Elias", text: "Then hang up." },
          { kind: "caption", text: "The caller doesn’t." },
        ],
      },
    ],
  },
  {
    id: "34-16",
    number: "16",
    act: "Act Four — The Call",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p16.jpg`,
        balloons: [
          { kind: "speech", speaker: "Voice", text: "You saved them. Even after your employer told you not to enter. Why?" },
          { kind: "speech", speaker: "Elias", text: "They were gonna die." },
          { kind: "speech", speaker: "Voice", text: "That’s enough?" },
          { kind: "speech", speaker: "Elias", text: "For me." },
          { kind: "speech", speaker: "Voice", text: "Good." },
        ],
      },
    ],
  },
  {
    id: "34-17",
    number: "17",
    act: "Act Four — The Call",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p17.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "You cut the brake line?" },
          { kind: "speech", speaker: "Voice", text: "No." },
          { kind: "speech", speaker: "Elias", text: "Chain the warehouse door?" },
          { kind: "speech", speaker: "Voice", text: "No." },
          { kind: "speech", speaker: "Elias", text: "Make the badge?" },
        ],
      },
    ],
  },
  {
    id: "34-18",
    number: "18",
    act: "Act Four — The Call",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p18.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "There you are." },
          { kind: "caption", text: "Call ends." },
          { kind: "speech", speaker: "W", text: "What’d you get?" },
        ],
      },
    ],
  },
  {
    id: "34-19",
    number: "19",
    act: "Act Four — The Call",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p20.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Not enough." },
          { kind: "speech", speaker: "W", text: "Sound like the man from the parking lot?" },
          { kind: "speech", speaker: "Elias", text: "No." },
          { kind: "caption", text: "Do not merge the investigator and the caller." },
        ],
      },
    ],
  },
  {
    id: "34-20",
    number: "20",
    act: "Act Five — The Trap",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p21.jpg`,
        balloons: [
          { kind: "caption", text: "Blocked number. Then Sister." },
          { kind: "speech", speaker: "Sister", text: "You at Mama’s?" },
          { kind: "speech", speaker: "Elias", text: "No." },
        ],
      },
    ],
  },
  {
    id: "34-21",
    number: "21",
    act: "Act Five — The Trap",
    layout: "splash",
    panels: [
      {
        art: `${i34}/rjclose.jpg`,
        balloons: [
          { kind: "speech", speaker: "Sister", text: "Then who just opened her back door?" },
          { kind: "speech", speaker: "Elias", text: "Get her out. Get RJ out." },
          { kind: "speech", speaker: "Sister", text: "They’re with me." },
        ],
      },
    ],
  },
  {
    id: "34-22",
    number: "22",
    act: "Act Five — The Trap",
    layout: "splash",
    panels: [
      {
        art: `${i34}/accepted.jpg`,
        balloons: [
          { kind: "caption", text: "Door alert:" },
          { kind: "caption", text: "ELIAS MARROW — ACCESS ACCEPTED" },
        ],
      },
    ],
  },
  {
    id: "34-23",
    number: "23",
    act: "Act Five — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p24.jpg`,
        balloons: [
          { kind: "caption", text: "Back door open. No forced entry. No costume. No gold. No weapon." },
        ],
      },
    ],
  },
  {
    id: "34-24",
    number: "24",
    act: "Act Five — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/cups.jpg`,
        balloons: [
          { kind: "caption", text: "Two cups. One where Mother sits. One opposite. The scale. Someone else understands placement." },
        ],
      },
    ],
  },
  {
    id: "34-25",
    number: "25",
    act: "Act Five — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p07.jpg`,
        balloons: [
          { kind: "caption", text: "Rooms empty. RJ is not here. Between the cups: a red service tag. Blank." },
        ],
      },
    ],
  },
  {
    id: "34-26",
    number: "26",
    act: "Act Five — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p27.jpg`,
        balloons: [
          { kind: "caption", text: "He does not touch it. Unknown number." },
          { kind: "speech", speaker: "Elias", text: "You came in my mother’s house." },
          { kind: "speech", speaker: "Voice", text: "Your name did." },
        ],
      },
    ],
  },
  {
    id: "34-27",
    number: "27",
    act: "Act Five — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p28.jpg`,
        balloons: [
          { kind: "speech", speaker: "Elias", text: "Come back. You wanted to know why I save people. Come find out what I do when somebody threatens them." },
        ],
      },
    ],
  },
  {
    id: "34-28",
    number: "28",
    act: "Act Five — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p29.jpg`,
        balloons: [
          { kind: "speech", speaker: "Voice", text: "I didn’t threaten anyone." },
          { kind: "speech", speaker: "Elias", text: "You opened her door." },
          { kind: "speech", speaker: "Voice", text: "The system opened her door." },
          { kind: "speech", speaker: "Elias", text: "You used my name." },
        ],
      },
    ],
  },
  {
    id: "34-29",
    number: "29",
    act: "Act Five — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/rjface.jpg`,
        balloons: [
          { kind: "speech", speaker: "Voice", text: "To know which one people believe. The man. Or the record." },
        ],
      },
    ],
  },
  {
    id: "34-30",
    number: "30",
    act: "Act Five — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p31.jpg`,
        balloons: [
          { kind: "caption", text: "Family photographs. Not supernatural. People. History. RJ is in one of them now." },
          { kind: "speech", speaker: "Elias", text: "Come ask me without hiding behind mine." },
        ],
      },
    ],
  },
  {
    id: "34-31",
    number: "31",
    act: "Act Five — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p01.jpg`,
        balloons: [
          { kind: "speech", speaker: "Voice", text: "I already did." },
          { kind: "caption", text: "Call ends." },
          { kind: "speech", speaker: "Elias", text: "No." },
        ],
      },
    ],
  },
  {
    id: "34-32",
    number: "32",
    act: "Act Five — Home",
    layout: "splash",
    panels: [
      {
        art: `${i34}/p32.jpg`,
        balloons: [
          { kind: "caption", text: "Across the street. The plain-clothed man from #3/#5. Beside his car. Not calling. Not hiding." },
          { kind: "caption", text: "Elias sees him. The man sees Elias. Neither moves." },
          { kind: "caption", text: "END — S3 #7" },
        ],
      },
    ],
  },
];
