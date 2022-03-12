// Array
// JavaScript的 Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。

// 常见操作
// 创建数组
let fruits = ["Apple", "Banana"];

console.log(fruits.length);

// 通过索引访问数组元素
let first = fruits[0];
first;
let last = fruits[fruits.length - 1];
last;

// 遍历数组
fruits.forEach((item, index, array) => {
  console.log(item, index);
});

// 添加元素到数组的末尾
let newLength = fruits.push("Orange");
fruits;

// 删除数组末尾的元素
last = fruits.pop();

// 删除数组头部元素
first = fruits.shift();

// 添加元素到数组的头部
newLength = fruits.unshift("Strawberry");

// 找出某个元素在数组中的索引
fruits.push("Mango");
fruits;

let pos = fruits.indexOf("Banana");

// 找出某个元素在数组中的索引
let removedItem = fruits.splice(pos, 1);
removedItem;
fruits;

// 从一个索引位置删除多个元素
let vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
pos = 1;
let n = 2;
let removedItems = vegetables.splice(pos, n);
removedItems;
vegetables;

// 复制一个数组
let shallowCopy = fruits.slice();
shallowCopy;

// 构造器
let arr = [1, 2, 3];
arr;
arr = new Array(1, 2, 3);
arr;
arr = new Array(3).fill(0);
arr;

// 静态属性
const MyArray = Array[Symbol.species];
let myArray = new MyArray(2);
myArray;

// 静态方法
// console.log(Array.from("foo"));
// console.log(Array.from([1, 2, 3], (x) => x + x));

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => {
    return start + i * step;
  });

let myRange = range(0, 4, 1);
myRange;

function combine() {
  let arr = [].concat.apply([], arguments);
  return Array.from(new Set(arr));
}
var m = [1, 2, 2];
var n = [2, 3, 3];
console.log(combine(m, n));

// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);

// 当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.

arr = Array.of(1, 2, 3);
arr;

arr.length;

// length 属性的值是一个 0 到 2^32 - 1 的整数。

// 实例方法
let array1 = [5, 12, 8, 130, 44];
// console.log(array1.at(0));
// console.log(array1.at(-2));
// console.log(array1.at(100));

var num1 = [1, 2, 3],
  num2 = [4, 5, 6],
  num3 = [7, 8, 9],
  num4 = [[10]];

var nums = num1.concat(num2, num3, num4);
nums;

let persons = [{ name: "sam" }];
let person2 = { name: "tom" };
arr = persons.concat(person2);
arr;
person2.name = "jack";
arr;

[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]
const array2 = ["a", "b", "c", "d", "e"];
console.log(array2.copyWithin(0, 3, 4));
array2;

arr = ["a", "b", "c"];
var iterator = arr.entries();
console.log(iterator.next());

let arr2 = ["a", "b", "c"];
var iterator2 = arr2.entries();

for (let e of iterator2) {
  console.log(e);
}

[12, 5, 8, 130, 44].every(x => x >= 10); 

let fillArr = Array(3).fill(Array(3).fill(0)) // [{}, {}, {}];
// 需要注意如果fill的参数为引用类型，会导致都执行同一个引用类型
fillArr
fillArr[0][0] = 1
fillArr;
let mapArr = Array(3).fill(0).map(() => Array(3).fill(0));
mapArr[0][0] = 1
mapArr;

var filtered = [12, 5, 8, 130, 44].filter(x => x <= 10);
filtered;

nums = [1,2,3,4,5]
const item = nums.findIndex((v, i) => {
  delete nums[3]
  return v === 4;
})
item;

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]

var arr = [1, 2, [3, 4]];

// 展开一层数组
arr.flat();
// 等效于
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// 使用扩展运算符 ...
const flattened = arr => [].concat(...arr);

// Let's say we want to remove all the negative numbers and split the odd numbers into an even number and a 1
let a = [5, 4, -3, 20, 17, -33, -4, 18]
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap( (n) =>
  (n < 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
)
// expected output: [4, 1, 4, 20, 16, 1, 18]

var words = ['one', 'two', 'three', 'four'];
words.forEach(function(word) {
  console.log(word);
  if (word === 'two') {
    words.shift();
    words[3] = '4'
  }
});
// one
// two
// four

function flatten(arr) {
  const result = [];

  arr.forEach((i) => {
    if (Array.isArray(i))
      result.push(...flatten(i));
    else
      result.push(i);
  })

  return result;
}

// Usage
const problem = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

flatten(problem); 

[1, 2, 3].includes(2);     // true

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);

var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join(); 

var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]

let o = parseInt('11', undefined)
o;

// Building-blocks to use for composition
const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

// Function composition enabling pipe functionality
const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240

const compose = (...args) => (value) => args.reduceRight((acc, fn) => fn(acc), value)

// Increament passed number
const inc = (n) => n + 1

// Doubles the passed value
const double = (n) => n * 2

// using composition function
console.log(compose(double, inc)(2)); // 6

// using composition function
console.log(compose(inc, double)(2)); // 5

