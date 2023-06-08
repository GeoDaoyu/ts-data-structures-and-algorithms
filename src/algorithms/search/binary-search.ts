const sortedArray = new Array(10).fill(0).map((_, i) => i);

const binarySearch = (array: number[], target: number): number => {
  const searchInRange = (left: number, right: number) => {
    if (left > right) return -1;
    const midIndex = Math.floor((left + right) / 2);
    const mid = array[midIndex];
    const conditions = new Map([
      [mid === target, () => midIndex],
      [mid > target, () => searchInRange(left, midIndex - 1)],
      [mid < target, () => searchInRange(midIndex + 1, right)],
    ]);
    return conditions.get(true)();
  };
  return searchInRange(0, array.length - 1);
};

console.log(binarySearch(sortedArray, 2));
