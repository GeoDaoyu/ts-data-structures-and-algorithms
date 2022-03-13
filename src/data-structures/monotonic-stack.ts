import Stack from './stack';
// 单调栈就是栈里面存放的数据都是有序的，所以可以分为单调递增栈和单调递减栈两种。

// 单调递增栈就是从栈底到栈顶是从大到小 [3,2,1]
// (a: number, b: number) => a - b <= 0)
// 单调递减栈就是从栈底到栈顶是从小到大 [1,2,3]
// (a: number, b: number) => a - b >= 0)

class MonotonicStack extends Stack {
  private compare: (...args: any) => boolean;

  constructor(compare = (a: number, b: number) => a - b >= 0) {
    super();
    this.compare = compare;
  }

  /**
   * 入栈
   * @param element 入栈元素
   * @returns {number} 入栈后的数组长度
   */
  push(element) {
    const top = this.peek();
    if (this.isEmpty() || this.compare(element, top)) {
      return super.push(element);
    } else {
      this.pop();
      return this.push(element);
    }
  }
}
export default MonotonicStack;