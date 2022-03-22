export default class Queue {
  private elements = new Array();

  constructor() {}

  /**
   * 进队列
   * @param elements 进队列元素或进队列元素数组
   * @returns {number} 进队列后的队列长度
   */
  enqueue(...elements) {
    return this.elements.push(...elements);
  }

  /**
   * 移除队列列头的元素
   * @returns {T} 队列列头的元素
   */
  dequeue() {
    return this.elements.shift();
  }

  /**
   * 获取队列列头元素，但不出队列
   * @returns {T} 队列列头元素
   */
  peek() {
    // @ts-ignore
    return this.elements.at(0);
  }

  /**
   * 获取队列的大小
   * @returns {number} 队列的大小
   */
  size() {
    return this.elements.length;
  }

  /**
   * 判断队列是否为空
   * @returns {boolean} 是 或 否
   */
  isEmpty() {
    return this.elements.length === 0;
  }

  /**
   * 清空队列
   */
  clear() {
    this.elements.length = 0;
  }

  /**
   * 转成字符串
   * @returns {string} 字符串
   */
  toString() {
    return this.elements.toString();
  }
}
