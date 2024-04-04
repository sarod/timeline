import { expect, test } from "vitest";
import { buildTimelineDay } from "./timeline-day";

test("buildTimelineDay 2024-01-01", () => {
  const date = new Date(Date.UTC(2024, 0, 1));
  const day = buildTimelineDay(date, "fr-fr");
  expect(day).toEqual({
    year: 2024,
    monthIndex: 0,
    dayOfWeekIndex: 1,
    dayOfWeekName: "Lundi",
    dayOfMonth: 1,
    dayOfYearIndex: 0,
  });
});

test("buildTimelineDay 2024-04-01", () => {
  const date = new Date(Date.UTC(2024, 3, 2));
  const day = buildTimelineDay(date, "fr-fr");
  expect(day).toEqual({
    year: 2024,
    monthIndex: 3,
    dayOfWeekIndex: 2,
    dayOfWeekName: "Mardi",
    dayOfMonth: 2,
    dayOfYearIndex: 92,
  });
});
