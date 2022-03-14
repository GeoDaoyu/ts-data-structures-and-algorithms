import Deque from "./deque";
// 单调队列就是队列里面存放的数据都是有序的，所以可以分为单调递增队列和单调递减队列两种。

// 单调递增队列就是从队头到队尾是从小到大 [1,2,3]
// (a: number, b: number) => a >= b)
// 单调递减队列就是从队头到队尾是从小到大 [3,2,1]
// (a: number, b: number) => a <= b)

class MonotonicQueue extends Deque {
  private comparator;

  constructor(comparator = (a: number, b: number) => a >= b) {
    super();
    this.comparator = comparator;
  }

  /**
   * 进队列
   * @param element 进队列元素
   * @returns {number} 进队列后的队列长度
   */
  enqueue(element) {
    const tail = this.tail();
    if (this.isEmpty() || this.comparator(element, tail)) {
      return this.push(element);
    } else {
      this.pop();
      return this.enqueue(element);
    }
  }

  /**
   * 移除队列列头的元素
   * @returns {T} 队列列头的元素
   */
  dequeue() {
    return this.shift();
  }

  /**
   * 获取队列列头元素，但不出队列
   * @returns {T} 队列列头元素
   */
  peek() {
    // @ts-ignore
    return this.elements.at(0);
  }
}

export default MonotonicQueue;

