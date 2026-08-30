import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ComicReader } from "@/components/comic/ComicReader";
import { getIssue } from "@/data/catalog";

const search = z.object({
  i: z.coerce.number().int().min(1).max(40).catch(1),
  p: z.coerce.number().int().min(0).catch(0),
  g: z.coerce.number().int().min(0).max(1).catch(0),
});

export const Route = createFileRoute("/read")({
  validateSearch: search,
  component: Read,
});

function Read() {
  const { i, p, g } = Route.useSearch();
  const issue =
    i === 40
      ? 40
      : i === 39
      ? 39
      : i === 38
      ? 38
      : i === 37
        ? 37
      : i === 36
        ? 36
      : i === 35
        ? 35
      : i === 34
        ? 34
      : i === 33
        ? 33
      : i === 32
        ? 32
      : i === 31
        ? 31
      : i === 30
        ? 30
      : i === 29
        ? 29
      : i === 28
        ? 28
      : i === 27
        ? 27
      : i === 26
        ? 26
      : i === 25
        ? 25
      : i === 24
        ? 24
      : i === 23
        ? 23
      : i === 22
        ? 22
      : i === 21
        ? 21
      : i === 20
        ? 20
      : i === 19
        ? 19
      : i === 18
        ? 18
      : i === 17
        ? 17
      : i === 16
        ? 16
      : i === 15
        ? 15
      : i === 14
        ? 14
      : i === 13
        ? 13
      : i === 12
        ? 12
      : i === 11
        ? 11
      : i === 10
        ? 10
      : i === 9
        ? 9
      : i === 8
        ? 8
      : i === 7
        ? 7
        : i === 6
          ? 6
          : i === 5
            ? 5
            : i === 4
              ? 4
              : i === 3
                ? 3
                : i === 2
                  ? 2
                  : 1;
  const { pages } = getIssue(issue);
  const index = Number.isFinite(p) ? Math.min(Math.max(p, 0), pages.length - 1) : 0;
  return <ComicReader issue={issue} index={index} study={g === 1} />;
}
