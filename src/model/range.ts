export function range(start: number, end: number): number[] {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}
