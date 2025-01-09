import { dayOfYear } from "./dayOfYear";

export interface Season {
  id: string;
  startDayOfYearIndex: number;
  endDayOfYearIndex: number;
}

export function buildSeasons(year: number): Season[] {
  return [
    {
      id: "winter",
      startDayOfYearIndex: dayOfYear(new Date(Date.UTC(year, 0, 1))),
      endDayOfYearIndex: dayOfYear(new Date(Date.UTC(year, 2, 19))),
    },
    {
      id: "spring",
      startDayOfYearIndex: dayOfYear(new Date(Date.UTC(year, 2, 20))),
      endDayOfYearIndex: dayOfYear(new Date(Date.UTC(year, 5, 19))),
    },
    {
      id: "summer",
      startDayOfYearIndex: dayOfYear(new Date(Date.UTC(year, 5, 20))),
      endDayOfYearIndex: dayOfYear(new Date(Date.UTC(year, 8, 21))),
    },
    {
      id: "fall",
      startDayOfYearIndex: dayOfYear(new Date(Date.UTC(year, 8, 22))),
      endDayOfYearIndex: dayOfYear(new Date(Date.UTC(year, 11, 20))),
    },
    {
      id: "winter",
      startDayOfYearIndex: dayOfYear(new Date(Date.UTC(year, 11, 21))),
      endDayOfYearIndex: dayOfYear(new Date(Date.UTC(year, 11, 31))),
    },
  ];
}
