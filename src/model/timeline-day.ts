import { Day } from "./day";
import { dayOfYear } from "./dayOfYear";
import { capitalizeFirstLetter } from "./util/capitalizeFirstLetter";

export type TimelineDay = Day & {
  /*An integer, between 0 and 6, representing the day of the week for the given date according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Returns NaN if the date is invalid. */
  dayOfWeekIndex: number;
  dayOfWeekName: string;
  /* 0 based index */
  dayOfYearIndex: number;
};

function dayOfWeekName(date: Date, localeName: string): string {
  return capitalizeFirstLetter(
    new Intl.DateTimeFormat(localeName, { weekday: "long" }).format(date),
  );
}

export function dayIndex(day0: Date, date: Date): number {
  const dayMilliseconds = 1000 * 3600 * 24;
  return Math.floor((date.getTime() - day0.getTime()) / dayMilliseconds);
}

export function buildTimelineDay(date: Date, localeName: string): TimelineDay {
  return {
    year: date.getUTCFullYear(),
    monthIndex: date.getUTCMonth(),

    dayOfWeekIndex: date.getUTCDay(),
    dayOfWeekName: dayOfWeekName(date, localeName),

    dayOfMonth: date.getUTCDate(),
    dayOfYearIndex: dayOfYear(date),
  };
}
