import { ISSUE, pages as pages1 } from "./issue1";
import { ISSUE2, pages2 } from "./issue2";
import { ISSUE3, pages3 } from "./issue3";
import { ISSUE4, pages4 } from "./issue4";
import { ISSUE5, pages5 } from "./issue5";
import { ISSUE6, pages6 } from "./issue6";
import { ISSUE7, pages7 } from "./issue7";
import { ISSUE8, pages8 } from "./issue8";
import { ISSUE9, pages9 } from "./issue9";
import { ISSUE10, pages10 } from "./issue10";
import { ISSUE11, pages11 } from "./issue11";
import { ISSUE12, pages12 } from "./issue12";
import { ISSUE13, pages13 } from "./issue13";
import { ISSUE14, pages14 } from "./issue14";
import { ISSUE15, pages15 } from "./issue15";
import { ISSUE16, pages16 } from "./issue16";
import { ISSUE17, pages17 } from "./issue17";
import { ISSUE18, pages18 } from "./issue18";
import { ISSUE19, pages19 } from "./issue19";
import { ISSUE20, pages20 } from "./issue20";
import { ISSUE21, pages21 } from "./issue21";
import { ISSUE22, pages22 } from "./issue22";
import { ISSUE23, pages23 } from "./issue23";
import { ISSUE24, pages24 } from "./issue24";
import { ISSUE25, pages25 } from "./issue25";
import { ISSUE26, pages26 } from "./issue26";
import { ISSUE27, pages27 } from "./issue27";
import { ISSUE28, pages28 } from "./issue28";
import { ISSUE29, pages29 } from "./issue29";
import { ISSUE30, pages30 } from "./issue30";
import { ISSUE31, pages31 } from "./issue31";
import { ISSUE32, pages32 } from "./issue32";
import { ISSUE33, pages33 } from "./issue33";
import { ISSUE34, pages34 } from "./issue34";
import { ISSUE35, pages35 } from "./issue35";
import { ISSUE36, pages36 } from "./issue36";
import { ISSUE37, pages37 } from "./issue37";
import { ISSUE38, pages38 } from "./issue38";
import { ISSUE39, pages39 } from "./issue39";
import { ISSUE40, pages40 } from "./issue40";
import { withGems } from "./gems";
import type { ComicPage, IssueMeta } from "./types";

export const ISSUES: Record<
  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40,
  { meta: IssueMeta; pages: ComicPage[] }
> = {
  1: { meta: ISSUE, pages: withGems(pages1) },
  2: { meta: ISSUE2, pages: withGems(pages2) },
  3: { meta: ISSUE3, pages: withGems(pages3) },
  4: { meta: ISSUE4, pages: withGems(pages4) },
  5: { meta: ISSUE5, pages: withGems(pages5) },
  6: { meta: ISSUE6, pages: withGems(pages6) },
  7: { meta: ISSUE7, pages: withGems(pages7) },
  8: { meta: ISSUE8, pages: withGems(pages8) },
  9: { meta: ISSUE9, pages: withGems(pages9) },
  10: { meta: ISSUE10, pages: withGems(pages10) },
  11: { meta: ISSUE11, pages: withGems(pages11) },
  12: { meta: ISSUE12, pages: withGems(pages12) },
  13: { meta: ISSUE13, pages: withGems(pages13) },
  14: { meta: ISSUE14, pages: withGems(pages14) },
  15: { meta: ISSUE15, pages: withGems(pages15) },
  16: { meta: ISSUE16, pages: withGems(pages16) },
  17: { meta: ISSUE17, pages: withGems(pages17) },
  18: { meta: ISSUE18, pages: withGems(pages18) },
  19: { meta: ISSUE19, pages: withGems(pages19) },
  20: { meta: ISSUE20, pages: withGems(pages20) },
  21: { meta: ISSUE21, pages: withGems(pages21) },
  22: { meta: ISSUE22, pages: withGems(pages22) },
  23: { meta: ISSUE23, pages: withGems(pages23) },
  24: { meta: ISSUE24, pages: withGems(pages24) },
  25: { meta: ISSUE25, pages: withGems(pages25) },
  26: { meta: ISSUE26, pages: withGems(pages26) },
  27: { meta: ISSUE27, pages: withGems(pages27) },
  28: { meta: ISSUE28, pages: withGems(pages28) },
  29: { meta: ISSUE29, pages: withGems(pages29) },
  30: { meta: ISSUE30, pages: withGems(pages30) },
  31: { meta: ISSUE31, pages: withGems(pages31) },
  32: { meta: ISSUE32, pages: withGems(pages32) },
  33: { meta: ISSUE33, pages: withGems(pages33) },
  34: { meta: ISSUE34, pages: withGems(pages34) },
  35: { meta: ISSUE35, pages: withGems(pages35) },
  36: { meta: ISSUE36, pages: withGems(pages36) },
  37: { meta: ISSUE37, pages: withGems(pages37) },
  38: { meta: ISSUE38, pages: withGems(pages38) },
  39: { meta: ISSUE39, pages: withGems(pages39) },
  40: { meta: ISSUE40, pages: withGems(pages40) },
};

export function getIssue(n: number): { meta: IssueMeta; pages: ComicPage[] } {
  if (n === 40) return ISSUES[40];
  if (n === 39) return ISSUES[39];
  if (n === 38) return ISSUES[38];
  if (n === 37) return ISSUES[37];
  if (n === 36) return ISSUES[36];
  if (n === 35) return ISSUES[35];
  if (n === 34) return ISSUES[34];
  if (n === 33) return ISSUES[33];
  if (n === 32) return ISSUES[32];
  if (n === 31) return ISSUES[31];
  if (n === 30) return ISSUES[30];
  if (n === 29) return ISSUES[29];
  if (n === 28) return ISSUES[28];
  if (n === 27) return ISSUES[27];
  if (n === 26) return ISSUES[26];
  if (n === 25) return ISSUES[25];
  if (n === 24) return ISSUES[24];
  if (n === 23) return ISSUES[23];
  if (n === 22) return ISSUES[22];
  if (n === 21) return ISSUES[21];
  if (n === 20) return ISSUES[20];
  if (n === 19) return ISSUES[19];
  if (n === 18) return ISSUES[18];
  if (n === 17) return ISSUES[17];
  if (n === 16) return ISSUES[16];
  if (n === 15) return ISSUES[15];
  if (n === 14) return ISSUES[14];
  if (n === 13) return ISSUES[13];
  if (n === 12) return ISSUES[12];
  if (n === 11) return ISSUES[11];
  if (n === 10) return ISSUES[10];
  if (n === 9) return ISSUES[9];
  if (n === 8) return ISSUES[8];
  if (n === 7) return ISSUES[7];
  if (n === 6) return ISSUES[6];
  if (n === 5) return ISSUES[5];
  if (n === 4) return ISSUES[4];
  if (n === 3) return ISSUES[3];
  if (n === 2) return ISSUES[2];
  return ISSUES[1];
}
