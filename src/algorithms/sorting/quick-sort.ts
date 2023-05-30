const unsorted = [4, 3, 2, 6, 3, 8, 5, 7];
const quickSort = (array: number[]): number[] => {
  if (array.length <= 1) return array;
  const [pivot, ...rest] = array;
  const left = rest.filter((el) => el < pivot);
  const right = rest.filter((el) => el >= pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(unsorted);
console.log(quickSort(unsorted));
