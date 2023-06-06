const unsorted = [4, 3, 2, 6, 3, 8, 5, 7];
const countingSort = (array: number[]): number[] => {
  const length = 10; // 0 - 9的排序
  const bucket = new Array(length).fill(0);
  array.forEach((v) => {
    bucket[v] = bucket[v] + 1;
  });
  return bucket.reduce((acc, curr, index) => {
    return acc.concat(new Array(curr).fill(index));
  }, []);
};

console.log(unsorted);
console.log(countingSort(unsorted));
