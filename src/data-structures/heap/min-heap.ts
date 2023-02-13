import MaxHeap from "./max-heap";
export default class MinHeap extends MaxHeap {
  compareAt(i: number, j: number): boolean {
    const heap = this.heap;
    return heap[i] < heap[j];
  }
}

const minHeap = new MinHeap();
minHeap.push(8);
minHeap.push(1);
minHeap.push(2);
minHeap.push(6);
minHeap.push(4);

minHeap.print();

// console.log(minHeap.peek());
console.log(minHeap.pop());

console.log(minHeap.pop());
console.log(minHeap.pop());
console.log(minHeap.pop());
console.log(minHeap.pop());
minHeap.print();
