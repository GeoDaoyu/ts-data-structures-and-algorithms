const unsorted = [4, 3, 2, 6, 3, 8, 5, 7];
const bubbleSort = (array: number[]): number[] => {
  // 克隆，不破坏原始数组
  const clone = [...array];
  // 一次冒泡，实质是把最大的泡排序到数组最后,
  // 增加一个swap的返回值，作为递归的出口，当没有swap的时候，说明数组已经排序完成
  const bubble = (array: number[]): { numbers: number[]; swaped: boolean } => {
    let swaped = false;
    const numbers = array.reduce((prev, curr, i, array) => {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; // swap
        swaped = true;
      }
      return array;
    }, array);
    return { numbers, swaped };
  };
  // 递归，不断冒泡，直到排序完成
  const recurse = (array: number[]) => {
    const { numbers, swaped } = bubble(array);
    return swaped ? recurse(numbers) : numbers;
  };

  return recurse(clone);
};

console.log(unsorted);
console.log(bubbleSort(unsorted));
