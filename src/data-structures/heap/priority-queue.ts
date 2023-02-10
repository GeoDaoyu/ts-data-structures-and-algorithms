import MaxHeap from "./max-heap";

class PriorityQueue extends MaxHeap {
  heap: Array<number>;
  constructor(values?: Array<number>) {
    super();
    this.heap = [];
    values?.forEach((v) => this.push(v));
  }
  enqueue(value: number): number {
    return this.push(value);
  }
  dequeue(): number | undefined {
    return this.pop();
  }
  front(): number | undefined {
    return this.peek();
  }
}

const pq = new PriorityQueue([2, 3, 6, 4, 8, 10]);
pq.print();
pq.enqueue(11);
console.log(pq.front());
