const unsorted = [4, 3, 2, 6, 3, 8, 5, 7];
const mergeSort = (array: number[]): number[] => {
  const initial = array.map((value) => [value]);
  /**
   * 将两个有序数组合并为一个有序数组，两个有序数组被放在一个数组中，所以是一个二维数组
   * 这么入参的原因，是为了方便map传参
   * @param array 二维数组
   * @returns {number[]} 一维数组
   */
  const merge = (array: number[][]): number[] => {
    const [arrayA, arrayB] = array;
    const length = arrayA.length + arrayB.length;
    const recurse = (acc: number[]) => {
      if (acc.length === length) return acc;
      if (arrayA.length === 0) return [...acc, ...arrayB];
      if (arrayB.length === 0) return [...acc, ...arrayA];
      if (arrayA[0] < arrayB[0]) {
        return recurse([...acc, arrayA.shift() as number]);
      } else {
        return recurse([...acc, arrayB.shift() as number]);
      }
    };

    return recurse([]);
  };

  /**
   * 将数组每2个元素分为一组
   * @param array 二维数组
   * @returns {number[][][]} 三维数组
   */
  const group = (array: number[][]): number[][][] => {
    const grouped: number[][][] = [];
    const len = array.length;
    for (let i = 0; i < len; i += 2) {
      grouped.push([array[i], array[i + 1] || []]);
    }
    return grouped;
  };

  const recurse = (acc: number[][]): number[][] => {
    if (acc.length === 0) return [[]];
    if (acc.length === 1) return acc;
    const grouped = group(acc);
    const merged = grouped.map(merge);
    return recurse(merged);
  };

  return recurse(initial)[0];
};

console.log(unsorted);
console.log(mergeSort(unsorted));
