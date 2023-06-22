const array = [4, 3, 2, 6, 3, 8, 5, 7];

const linearSearch = (array: number[], target: number) => {
  return array.findIndex((v) => v === target);
};

console.log(linearSearch(array, 2));
