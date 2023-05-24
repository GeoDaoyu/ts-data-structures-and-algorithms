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
const unsorted = [4, 3, 2, 6, 3, 8, 5, 7];
const shellSort = (array: number[]): number[] => {
  const getGap = (gap: number) => (gap / 2) | 0; // 每次取半，向下取整
  /**
   * 对一维数组进行分组，分组规则：每间隔gap的元素为一组
   * @param array 待分组的一维数组
   * @param gap 间隔
   * @returns {number[][]} 分组后的二维数组
   */
  const group = (array: number[], gap: number): number[][] => {
    return array.reduce(
      (acc: number[][], curr: number, index: number) => {
        const groupIndex = index % gap;
        acc[groupIndex].push(curr);
        return acc;
      },
      Array.from({ length: gap }, () => [])
    );
  };
  /**
   * 分组的逆函数，把按间隔分组的二维数组还原回一维数组
   * @param array 待合并的二维数组
   * @param gap 间距
   * @returns {number[]} 还原后的一维数组
   */
  const merge = (array: number[][], gap: number) => {
    return array.reduce(
      (acc: number[], group: number[], groupIndex: number) => {
        group.forEach((value, i) => {
          const index = groupIndex + i * gap;
          acc[index] = value;
        });
        return acc;
      },
      []
    );
  };
  const recurse = (array: number[], gap: number) => {
    // 递归出口
    if (gap === 1) {
      return insertSort(array);
    }
    // 分组
    const grouped = group(array, gap);
    // 子序列排序
    const subSorted = grouped.map(insertSort);
    // 合并
    const merged = merge(subSorted, gap);
    return recurse(merged, getGap(gap));
  };
  return recurse(array, getGap(array.length));
};

console.log(unsorted);
console.log(shellSort(unsorted));
