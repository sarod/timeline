import { dayIndex } from "./timeline-day";

export function dayOfYear(date: Date): number {
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return dayIndex(yearStart, date);
}
