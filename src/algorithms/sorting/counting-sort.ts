const unsorted = [4, 3, 2, 6, 3, 8, 5, 7];
const countingSort = (array: number[]): number[] => {
  const length = 10; // 0 - 9的排序
  const buckets: number[][] = new Array(length).fill(0).map(() => []);
  array.forEach((v) => {
    buckets[v].push(v);
  });
  return buckets.flat();
};

console.log(unsorted);
console.log(countingSort(unsorted));
