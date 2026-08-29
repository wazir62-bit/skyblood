export type IssueCard = {
  season: 1 | 2 | 3;
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  title: string;
  synopsis: string;
  cover: string;
  /** Exact text from the Friday library snapshot. */
  recovered: boolean;
  fullComic?: boolean;
};

export const SEASONS = [
  {
    n: 1 as const,
    title: "Season One",
    closed: true,
    line: "Elias Marrow feels weather before the klaxon. He photographs a temple. He has not yet made a witness.",
  },
  {
    n: 2 as const,
    title: "Season Two",
    closed: true,
    line: "A man with his face starts arriving first. Paper names blood. It does not name the man.",
  },
  {
    n: 3 as const,
    title: "Season Three",
    closed: true,
    line: "The face in the opening is not him. The title was never for the photographer. This is the season the sky refuses a command.",
  },
];

const S1: Omit<IssueCard, "season">[] = [
  {
    number: 1,
    title: "The Temple Above",
    recovered: true,
    fullComic: true,
    cover: "/skyblood/issues/s1i01.jpg",
    synopsis:
      "Memphis. Night sort. Elias feels the hold before the klaxon. He turns back for Dez. Then the cloud focuses — and the sky says a name.",
  },
  {
    number: 2,
    title: "Weather in the Blood",
    recovered: true,
    cover: "/skyblood/issues/s1i02.jpg",
    synopsis:
      "The photograph still has not been received. His mother already knows why. The first witnessing is a name they stopped saying: Mae Marrow.",
  },
  {
    number: 3,
    title: "The House That Said a Name",
    recovered: true,
    cover: "/skyblood/issues/s1i03.jpg",
    synopsis:
      "The week of paid shock is over. A clipboard already has Mae Marrow. The weighing starts. It does not finish.",
  },
  {
    number: 4,
    title: "The Next Line",
    recovered: true,
    cover: "/skyblood/issues/s1i04.jpg",
    synopsis:
      "The form already has Mae Marrow. They want the receiver of record. Ink will not take a name nobody addressed.",
  },
  {
    number: 5,
    title: "The First Pole",
    recovered: true,
    cover: "/skyblood/issues/s1i05.jpg",
    synopsis:
      "They stage a hold to see if he will open a way on command. He turns back for a living body. Then they offer him first. He stays last.",
  },
  {
    number: 6,
    title: "They Filed It",
    recovered: true,
    cover: "/skyblood/issues/s1i06.jpg",
    synopsis:
      "They filed a copy of Mae. They filed the crew as a team. He takes the print by hand. The house will not take their envelope.",
  },
  {
    number: 7,
    title: "The Table",
    recovered: true,
    cover: "/skyblood/issues/s1i07.jpg",
    synopsis:
      "They come for the kitchen. They take the print. They do not take her. Paper is not the pans.",
  },
  {
    number: 8,
    title: "The Other Road",
    recovered: true,
    cover: "/skyblood/issues/s1i08.jpg",
    synopsis:
      "W is moved to days. The timestamps were true. He stops turning the sky into a log. When the klaxon is real, nobody walks toward him. He walks anyway.",
  },
  {
    number: 9,
    title: "The Other Side of Day",
    recovered: true,
    cover: "/skyblood/issues/s1i09.jpg",
    synopsis:
      "W never reported to days. Gloves still in the locker. Elias looks for him. Three knocks. They do not leave each other.",
  },
  {
    number: 10,
    title: "The Address",
    recovered: true,
    cover: "/skyblood/issues/s1i10.jpg",
    synopsis:
      "W did not choose that road. Somebody gave him an address. The location has been closed for years. The same number once had his grandfather. DID NOT REPORT.",
  },
  {
    number: 11,
    title: "The Room Behind the Wall",
    recovered: true,
    cover: "/skyblood/issues/s1i11.jpg",
    synopsis:
      "The knocks are in the wall. A box. A notebook that heard three. A woman at the door. A duct that explains one sound and not the others. W: don’t open it.",
  },
  {
    number: 12,
    title: "The Face at the Door",
    recovered: true,
    cover: "/skyblood/issues/s1i12.jpg",
    synopsis:
      "Something wearing Elias’s face is at W’s door. Elias is across town. Get W. Both men see it. W cannot go home. The face is looking at W.",
  },
  {
    number: 13,
    title: "When the Sky Answers",
    recovered: true,
    cover: "/skyblood/issues/s1i13.jpg",
    synopsis:
      "Four rules. A fire on the old network. Three missing. The face thinks it knows what he’ll die for. He chooses a stranger. The sky answers a decision. Grandfather was not alone.",
  },
];

const S2: Omit<IssueCard, "season">[] = [
  {
    number: 1,
    title: "He’s Not Me",
    recovered: true,
    cover: "/skyblood/issues/s2i01.jpg",
    synopsis:
      "Twelve days after the fire. The notebook is still the #13 page. Paper files RETURNED. FIRST SKY writes an empty line. The double has no vest. He’s not me.",
  },
  {
    number: 2,
    title: "Somebody Already Came",
    recovered: true,
    cover: "/skyblood/issues/s2i02.jpg",
    synopsis:
      "Somebody with Elias Marrow’s face has started arriving first. It doesn’t think he’s you. The vest is no longer proof.",
  },
  {
    number: 3,
    title: "The One at Home",
    recovered: true,
    cover: "/skyblood/issues/s2i03.jpg",
    synopsis:
      "There is an Elias Marrow at the back door. Elias Marrow is not home. The porch is a surface. Paper wants a witness. A voice behind the wall asks why he remembers dying.",
  },
  {
    number: 4,
    title: "I Remember You Dead",
    recovered: true,
    cover: "/skyblood/issues/s2i04.jpg",
    synopsis:
      "A voice behind the wall says it is his grandfather. The other Elias remembers burying him. Both are evidence. Neither is proof.",
  },
  {
    number: 5,
    title: "Same Blood, Wrong Man",
    recovered: true,
    cover: "/skyblood/issues/s2i05.jpg",
    synopsis:
      "Two men have Elias Marrow’s face. The blood says they are related. It does not say they are the same.",
  },
  {
    number: 6,
    title: "I Am Not What Came After",
    recovered: true,
    cover: "/skyblood/issues/s2i06.jpg",
    synopsis:
      "Paper has named the relationship. That does not mean it named the man. He says Asa. Paper says Asa Marrow, son, 51%. He keeps the first word only.",
  },
  {
    number: 7,
    title: "The Name He Kept",
    recovered: true,
    cover: "/skyblood/issues/s2i07.jpg",
    synopsis:
      "Paper gave him a surname. He did not take it. A cashier wrote ASA on a bag. Something with six fingers already knew the name.",
  },
  {
    number: 8,
    title: "The Man with Six Fingers",
    recovered: true,
    cover: "/skyblood/issues/s2i08.jpg",
    synopsis:
      "Something in the dark knew Asa’s name. Names travel faster than bodies. Grandfather was the one they kept.",
  },
  {
    number: 9,
    title: "What They Kept",
    recovered: true,
    cover: "/skyblood/issues/s2i09.jpg",
    synopsis:
      "Paper says Grandfather was the source. Something else was closed. Sister looks for what expected them. Abel is offered. Nobody accepts it yet.",
  },
  {
    number: 10,
    title: "Abel Was Here",
    recovered: true,
    cover: "/skyblood/issues/s2i10.jpg",
    synopsis:
      "A name offered by the dark is not proof. Mae said Abel. Thomas said Abel. He answers. Paper files REOPENING ELIGIBLE. He will not let the dark tell him what Thomas did.",
  },
  {
    number: 11,
    title: "The Man Who Stayed",
    recovered: true,
    cover: "/skyblood/issues/s2i11.jpg",
    synopsis:
      "Thomas survived. That may only have been the result. He did not choose Abel. He chose the side he was standing on. Record count: 1. Body count: 2. The face in the opening is not him.",
  },
  {
    number: 12,
    title: "The Opening Is Occupied",
    recovered: false,
    cover: "/skyblood/issues/s2i12.jpg",
    synopsis:
      "Somebody is already standing where Thomas did not choose to stand. Paper still has one record. The second body has a face. It does not wait to be counted.",
  },
  {
    number: 13,
    title: "They Counted the Wrong Man",
    recovered: false,
    cover: "/skyblood/issues/s2i13.jpg",
    synopsis:
      "The file closes on Thomas. The face does not. Season two ends with a living count paper will not hold. Elias is not in the opening. The opening is waiting.",
  },
];

const S3: Omit<IssueCard, "season">[] = [
  {
    number: 1,
    title: "The Face Was First",
    recovered: false,
    cover: "/skyblood/issues/s3i01.jpg",
    synopsis:
      "The opening had a tenant before Elias looked. It does not wait for him to agree. Season three begins with a face that arrived before the photograph.",
  },
  {
    number: 2,
    title: "Two Bodies, One File",
    recovered: false,
    cover: "/skyblood/issues/s3i02.jpg",
    synopsis:
      "Paper cannot hold two. It keeps the one that files easier. The other one walks. The record stays at one because the clerk is afraid of arithmetic.",
  },
  {
    number: 3,
    title: "Blood Is Not a Witness",
    recovered: false,
    cover: "/skyblood/issues/s3i03.jpg",
    synopsis:
      "They draw blood to settle the face. Related is not the same. The lab will not say which man the sky answers. Ink wants a percentage. The sky does not.",
  },
  {
    number: 4,
    title: "Six Fingers on the Record",
    recovered: false,
    cover: "/skyblood/issues/s3i04.jpg",
    synopsis:
      "A print with six fingers is already in the folder. It is older than Asa. It is signed with a name they filed as closed. Closed is not gone.",
  },
  {
    number: 5,
    title: "They Kept Grandfather",
    recovered: false,
    cover: "/skyblood/issues/s3i05.jpg",
    synopsis:
      "Paper says source. Sister says kept. The dark used a man and stored the rest. Abel is not a gift. It is inventory.",
  },
  {
    number: 6,
    title: "Abel Does Not Take the Call",
    recovered: false,
    cover: "/skyblood/issues/s3i06.jpg",
    synopsis:
      "They dial the name the wall offered. Nobody picks up. Something on the line is already speaking. It does not use a mouth they would recognize.",
  },
  {
    number: 7,
    title: "Mae Said It Third",
    recovered: false,
    cover: "/skyblood/issues/s3i07.jpg",
    synopsis:
      "Mae said Abel after the photograph and after the fire. Third time is not proof. Third time is a door she will not walk. She puts the phone face down.",
  },
  {
    number: 8,
    title: "Asa Will Not Be Marrow",
    recovered: false,
    cover: "/skyblood/issues/s3i08.jpg",
    synopsis:
      "He keeps the first word. They stamp the second anyway. A bag that says ASA is not a legal name. It is the only one that answers.",
  },
  {
    number: 9,
    title: "The Vest Is Empty",
    recovered: false,
    cover: "/skyblood/issues/s3i09.jpg",
    synopsis:
      "The double still has no vest. Elias puts his on and the sky does not change. Clothing was never the office. The office is who stays in the door.",
  },
  {
    number: 10,
    title: "Command and the Rain Refuses",
    recovered: false,
    cover: "/skyblood/issues/s3i10.jpg",
    synopsis:
      "He asks. He does not raise a hand. The rain does not move. For the first time the refusal is the evidence. He has never been in charge of it.",
  },
  {
    number: 11,
    title: "W Opens the Wall",
    recovered: false,
    cover: "/skyblood/issues/s3i11.jpg",
    synopsis:
      "W said don’t. Then he does. The knocks were never in the duct. They were in a mouth that learned three names and would like a fourth.",
  },
  {
    number: 12,
    title: "The Source Was a Room",
    recovered: false,
    cover: "/skyblood/issues/s3i12.jpg",
    synopsis:
      "Grandfather was not a person they kept. Grandfather was a room they ran. The face in the opening belongs to the room. It has always been furnished.",
  },
  {
    number: 13,
    title: "I Am Not the Way",
    recovered: false,
    cover: "/skyblood/issues/s3i13.jpg",
    synopsis:
      "The title was never for the man who photographs. It was for the one who stays in the door. Elias refuses the office. The sky answers the refusal. Season three ends with a way that is open and empty.",
  },
];

export const ISSUES: IssueCard[] = [
  ...S1.map((x) => ({ ...x, season: 1 as const })),
  ...S2.map((x) => ({ ...x, season: 2 as const })),
  ...S3.map((x) => ({ ...x, season: 3 as const })),
];

export function issuesInSeason(season: 1 | 2 | 3) {
  return ISSUES.filter((i) => i.season === season);
}

export function getIssue(season: number, number: number) {
  return ISSUES.find((i) => i.season === season && i.number === number);
}

export function issueId(i: Pick<IssueCard, "season" | "number">) {
  return `s${i.season}i${String(i.number).padStart(2, "0")}`;
}
