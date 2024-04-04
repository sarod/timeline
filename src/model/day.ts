export type Day = {
  year: number;
  monthIndex: number;
  /* 1 -> 31 */
  dayOfMonth: number;
};

export function dateFromDay(day: Day): Date {
  return new Date(Date.UTC(day.year, day.dayOfMonth, day.dayOfMonth));
}
