const getDigit = (num: number, place: number) =>
  Math.floor(num / Math.pow(10, place)) % 10;
const countingSort = (array: number[], place: number): number[] => {
  const length = 10; // 0 - 9的排序
  const buckets: number[][] = new Array(length).fill(0).map(() => []);
  array.forEach((v) => {
    const index = getDigit(v, place);
    buckets[index].push(v);
  });
  return buckets.flat();
};
const unsorted = [4326, 3857, 4490, 7710, 1671, 1766];
const radixSort = (array: number[]): number[] => {
  const maxNumberLength = 4;
  let result = array;
  for (let i = 0; i < maxNumberLength; i++) {
    result = countingSort(result, i);
  }
  return result;
};

console.log(unsorted);
console.log(radixSort(unsorted));
