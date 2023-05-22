const unsorted = [4, 3, 2, 6, 3, 8, 5, 7];
const insertSort = (array: number[]): number[] => {
  // 一次插入，实质是当前的元素插入到合适的位置,
  // 可以理解为从牌堆中抽牌，把抽到的这张牌在手牌中进行排序
  const insert = (array: number[], value: number): number[] => {
    const index = array.findIndex((el) => el > value);
    return index < 0
      ? [...array, value]
      : [...array.slice(0, index), value, ...array.slice(index)];
  };
  // 化约，遍历完数组，对所有元素进行插入操作
  return array.reduce(insert, []);
};

console.log(unsorted);
console.log(insertSort(unsorted));
