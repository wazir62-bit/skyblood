export type Balloon = {
  speaker?: string;
  text: string;
  kind: "speech" | "caption" | "sfx" | "thought";
};

export type Panel = {
  art: string;
  position?: string;
  balloons: Balloon[];
};

export type ComicPage = {
  id: string;
  number: string;
  act: string;
  layout: "splash" | "stack" | "spread";
  silent?: boolean;
  gems?: string[];
  panels: Panel[];
};

export type IssueMeta = {
  n: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40;
  title: string;
  issue: string;
  book: string;
  next?: string;
  cover: string;
  logline: string;
};
