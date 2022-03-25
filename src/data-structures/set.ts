// 概念
// Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

// 实例化
// new Set([iterable])

// 属性和方法
const set = new Set();
set.size;
set.add(1);
set.delete(1);
set.has(1);
set.clear();
// 遍历方法
for (let key of set.keys()) {
  console.log(key);
}
for (let value of set.values()) {
  console.log(value);
}
for (let [key, value] of set.entries()) {
  console.log(key, value);
}
set.forEach((key, value) => {
  console.log(key, value);
});

// 集合常用方法

/**
 * 判断subset是否为set的子集
 * @param {Set} set
 * @param {Set} subset
 * @returns {boolean} 是 或 否
 */
const isSuperset = (set, subset) => [...subset].every((v) => set.has(v));

/**
 * 求两集合的并集，A和B的所有元素
 * @param setA 集合
 * @param setB 集合
 * @returns 并集
 */
const union = (setA, setB) => new Set([...setA, ...setB]);

/**
 * 求交集，既在A也在B
 * @param setA 集合
 * @param setB 集合
 * @returns 交集
 */
const intersection = (setA, setB) =>
  new Set([...setA].filter((v) => setB.has(v)));

/**
 * 求差集，A-B
 * @param setA 集合
 * @param setB 集合
 * @return 差集
 */
const difference = (setA, setB) =>
  new Set([...setA].filter((v) => !setB.has(v)));

/**
 * 求对称差集，相当于两个相对补集的并集
 * @param setA 集合
 * @param setB 集合
 * @returns 对称差集
 */
const symmetricDifference = (setA, setB) =>
  union(difference(setA, setB), difference(setB, setA));

let setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([3, 4, 5, 6]);

let t = isSuperset(setA, setB); // => true
t;
t = union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
t;
t = intersection(setA, setC); // => Set [3, 4]
t;
t = difference(setA, setC); // => Set [1, 2]
t;
t = symmetricDifference(setA, setC); // => Set [1, 2, 5, 6]
t;

// WeakSet 与Set 区别
// 与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值。
// WeakSet 是不可遍历的
