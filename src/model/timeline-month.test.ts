import { expect, test } from "vitest";
import { buildSeasons } from "./season";
import { buildTimelineMonth } from "./timeline-month";

test("2024-03 should have 31 days", () => {
  const month = buildTimelineMonth(2024, 2, [], "fr-fr");
  expect(month.days.length).toEqual(31);
});

test("2024-03 should have 2 season fragments", () => {
  const seasons = buildSeasons(2024);
  const month = buildTimelineMonth(2024, 2, seasons, "fr-fr");
  expect(month.seasonFragments.length).toEqual(2);
});

test("2024-03 season fragments", () => {
  const seasons = buildSeasons(2024);
  const month = buildTimelineMonth(2024, 2, seasons, "fr-fr");
  expect(month.seasonFragments).toEqual([
    {
      seasonId: "winter",
      fragmentLength: 19,
      firstSeasonDay: 61,
    },
    {
      seasonId: "spring",
      fragmentLength: 12,
      firstSeasonDay: 0,
    },
  ]);
});
