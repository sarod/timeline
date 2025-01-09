import {
  TimelineDay,
  buildTimelineDay as buildTimelineDay,
} from "./timeline-day";
import { range } from "./range";
import { capitalizeFirstLetter } from "./util/capitalizeFirstLetter";
import { Season } from "./season";

interface SeasonFragment {
  seasonId: string;
  /* Number of days of this season in the month*/
  fragmentLength: number;
  /* Which season day matches the first day of the fragmen*/
  firstSeasonDay: number;
}

export interface TimelineMonth  {
  name: string;
  monthIdx: number;
  days: TimelineDay[];
  seasonFragments: SeasonFragment[];
}

function monthName(monthIdx: number, localeName: string): string {
  const format = (date: Date) => new Intl.DateTimeFormat(localeName, { month: "long" }).format(date);
  return capitalizeFirstLetter(format(new Date(Date.UTC(2024, monthIdx))));
}

function timelineDays(
  year: number,
  monthIdx: number,
  localeName: string,
): TimelineDay[] {
  return range(1, 31)
    .map((day) => new Date(Date.UTC(year, monthIdx, day)))
    .filter((date) => date.getUTCMonth() === monthIdx)
    .map((date) => buildTimelineDay(date, localeName));
}

function seasonsFragmentsForMonth(
  firstDayOfMonth: number,
  lastDayOfMonth: number,
  seasons: Season[],
): SeasonFragment[] {
  return seasons
    .filter(
      (season) =>
        (firstDayOfMonth >= season.startDayOfYearIndex &&
          firstDayOfMonth <= season.endDayOfYearIndex) ||
        (lastDayOfMonth >= season.startDayOfYearIndex &&
          lastDayOfMonth <= season.endDayOfYearIndex),
    )
    .map((season) => {
      const fragmentStartDay = Math.max(
        season.startDayOfYearIndex,
        firstDayOfMonth,
      );
      const fragmentLastDay = Math.min(
        season.endDayOfYearIndex,
        lastDayOfMonth,
      );
      return {
        seasonId: season.id,
        fragmentLength: fragmentLastDay - fragmentStartDay + 1,
        firstSeasonDay:
          fragmentStartDay <= season.startDayOfYearIndex
            ? 0
            : fragmentStartDay - season.startDayOfYearIndex + 1,
      };
    });
}

export function buildTimelineMonth(
  year: number,
  monthIdx: number,
  seasons: Season[],
  localeName: string,
): TimelineMonth {
  const days = timelineDays(year, monthIdx, localeName);
  const firstDayOfMonth = days[0].dayOfYearIndex;
  const lastDayOfMonth = days[days.length - 1].dayOfYearIndex;
  return {
    name: monthName(monthIdx, localeName),
    monthIdx: monthIdx,
    days: days,
    seasonFragments: seasonsFragmentsForMonth(
      firstDayOfMonth,
      lastDayOfMonth,
      seasons,
    ),
  };
}
