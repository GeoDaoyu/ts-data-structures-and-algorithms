export default class MaxHeap {
  heap: Array<number>;
  constructor() {
    this.heap = [];
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
    const childIndex = this.getMaxChildIndex(index);

    if (this.shouldSwap(parentIndex, childIndex)) {
      this.swap(parentIndex, childIndex);
      this.heapifyDown(childIndex);
    }
  }
  getMaxChildIndex(index: number): number {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    if (
      !this.isIndexValid(leftChildIndex) &&
      !this.isIndexValid(rightChildIndex)
    ) {
      return -1;
    } else if (
      this.isIndexValid(leftChildIndex) &&
      this.isIndexValid(rightChildIndex)
    ) {
      return this.heap[leftChildIndex] > this.heap[rightChildIndex]
        ? leftChildIndex
        : rightChildIndex;
    } else {
      return leftChildIndex;
    }
  }
  isIndexValid(index: number): boolean {
    return index < this.size();
  }
  shouldSwap(parentIndex: number, childIndex: number): boolean {
    // 上滤 已到顶
    if (childIndex === 0) return false;
    // 下滤 已到底
    if (childIndex === -1) return false;
    const heap = this.heap;
    const parent = heap[parentIndex];
    const child = heap[childIndex];
    return parent < child;
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

const maxHeap = new MaxHeap();
maxHeap.push(1);
maxHeap.push(2);
maxHeap.push(6);
maxHeap.push(4);
maxHeap.push(8);

maxHeap.print();

// console.log(maxHeap.peek());
console.log(maxHeap.pop());

console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
maxHeap.print();
