const unsorted = [4, 3, 2, 6, 3, 8, 5, 7];
const selectionSort = (array: number[]): number[] => {
  const clone = [...array];
  const getMinIndex = (array: number[], startIndex: number): number => {
    return array.reduce((minIndex, curr, i, array) => {
      if (i < startIndex) return minIndex;
      return curr < array[minIndex] ? i : minIndex;
    }, startIndex);
  };
  const swap = (i: number, j: number, array: number[]) => {
    [array[i], array[j]] = [array[j], array[i]];
  };
  const recurse = (array: number[], index: number = 0): number[] => {
    // 递归出口
    if (index === array.length - 1) return array;
    // 获取当前index的最小值索引(即选择还未排序的数组中最小的值)
    const minIndex = getMinIndex(array, index);
    // 交换元素(即把选择的值放到对应的位置上)
    swap(minIndex, index, array);
    // 下一层的递归(在剩下的数组中继续选择)
    return recurse(array, index + 1);
  };

  return recurse(clone);
};

console.log(unsorted);
console.log(selectionSort(unsorted));
