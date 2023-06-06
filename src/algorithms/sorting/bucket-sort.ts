const unsorted = [4, 3, 2, 6, 3, 8, 5, 7].map((v) => v / 10);
const bucketSort = (array: number[]): number[] => {
  const bucketsCount = 5; // 桶个数
  const buckets: number[][] = new Array(bucketsCount).fill(0).map(() => []);
  // 映射规则，每0.2间隔一个桶, 左开右闭
  const map = (v: number) => {
    const index = Math.floor(v / 0.2);
    buckets[index].push(v);
  };
  array.forEach(map);
  return buckets
    .map((bucket) => bucket.sort((a: number, b: number) => a - b))
    .flat();
};

console.log(unsorted);
console.log(bucketSort(unsorted));
