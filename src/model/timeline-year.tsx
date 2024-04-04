import { TimelineMonth, buildTimelineMonth } from "./timeline-month";
import { Season, buildSeasons } from "./season";

export type TimelineYear = {
  months: TimelineMonth[];
};

export function currentYear(): number {
  return new Date().getUTCFullYear();
}

export function buildTimelineYear(
  localeName: string,
  year: number,
): TimelineYear {
  const seasons = buildSeasons(year);
  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((monthIdx) =>
    buildTimelineMonth(year, monthIdx, seasons, localeName),
  );
  return {
    months: months
  };
}
