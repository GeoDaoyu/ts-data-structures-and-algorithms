type CompareFunction<T> = (a: T, b: T) => boolean;

export default class Heap {
  heap: Array<number>;
  compare: CompareFunction<number>;
  constructor(compare: CompareFunction<number>) {
    this.heap = [];
    this.compare = compare;
  }
  // 下标规律
  getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }
  getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }
  push(value: number): number {
    const length = this.heap.push(value);
    this.heapifyUp(length - 1);
    return length;
  }
  peek(): number | undefined {
    const heap = this.heap;
    const value = heap[0];
    return value;
  }
  pop(): number | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const heap = this.heap;
    if (this.size() === 1) {
      return heap.pop();
    }
    const value = this.peek();
    heap[0] = heap.pop() as number; // 判断过堆是否为空，pop一定为number
    this.heapifyDown(0);
    return value;
  }
  heapifyUp(index: number): void {
    const parentIndex = this.getParentIndex(index);
    const childIndex = index;
    if (this.shouldSwap(parentIndex, childIndex)) {
      this.swap(parentIndex, childIndex);
      this.heapifyUp(parentIndex);
    }
  }
  heapifyDown(index: number): void {
    const parentIndex = index;
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    const childIndex = this.getMaxChildIndex(leftChildIndex, rightChildIndex);
    if (this.shouldSwap(parentIndex, childIndex)) {
      this.swap(parentIndex, childIndex);
      this.heapifyDown(childIndex);
    }
  }
  getMaxChildIndex(leftChildIndex: number, rightChildIndex: number): number {
    if (
      !this.isValidNode(leftChildIndex) &&
      !this.isValidNode(rightChildIndex)
    ) {
      return -1;
    } else if (
      this.isValidNode(leftChildIndex) &&
      this.isValidNode(rightChildIndex)
    ) {
      return this.compareAt(leftChildIndex, rightChildIndex)
        ? leftChildIndex
        : rightChildIndex;
    } else {
      return leftChildIndex;
    }
  }
  isValidNode(index: number): boolean {
    return index < this.size();
  }
  compareAt(i: number, j: number): boolean {
    const heap = this.heap;
    return this.compare(heap[i], heap[j]);
  }
  shouldSwap(parentIndex: number, childIndex: number): boolean {
    // 上滤 已到顶
    if (childIndex === 0) return false;
    // 下滤 已到底
    if (childIndex === -1) return false;
    return !this.compareAt(parentIndex, childIndex);
  }
  swap(i: number, j: number) {
    const heap = this.heap;
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
  print(): void {
    const heap = this.heap;
    console.log(heap);
  }
  size(): number {
    return this.heap.length;
  }
  isEmpty(): boolean {
    return this.size() === 0;
  }
}

const heap = new Heap((a: number, b: number) => a - b > 0);
heap.push(1);
heap.push(2);
heap.push(6);
heap.push(4);
heap.push(8);

heap.print();

// console.log(heap.peek());
console.log(heap.pop());

console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
heap.print();
