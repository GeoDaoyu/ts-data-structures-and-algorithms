// 概念
// Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。

// Objects 和 maps 的比较

// 实例化
// new Map([iterable])

let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

// 属性和方法
const map = new Map()
map.size;
map.set(1, 1)
map.get(1)
map.delete(1)
map.has(1)
map.clear()
// 遍历方法
for (let key of map.keys()) {
  console.log(key);
}
for (let value of map.values()) {
  console.log(value);
}
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
map.forEach((value, key) => {
  console.log(value, key);
});

// 内部实现
// https://tc39.es/ecma262/#sec-map-objects
// 在 JavaScript 里，map API 可以 通过使其四个 API 方法共用两个数组(一个存放键,一个存放值)来实现。
// 给这种 map 设置值时会同时将键和值添加到这两个数组的末尾。从而使得键和值的索引在两个数组中相对应。

// WeakMap
// WeakMap 的 key 只能是 Object 类型。 原始数据类型 是不能作为 key 的（比如 Symbol）。
// 正由于这样的弱引用，WeakMap 的 key 是不可枚举的（没有方法能给出所有的 key）。