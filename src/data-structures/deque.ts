// 双端队列
// 双端队列允许在两端添加和移除元素

class Deque {
  private elements = new Array();

  constructor() {}

  /**
   * 进队列 从列头
   * @param element 进队列元素
   * @returns {number} 进队列后的队列长度
   */
  unshift(element) {
    return this.elements.unshift(element);
  }

  /**
   * 进队列 从列尾
   * @param element 进队列元素
   * @returns {number} 进队列后的队列长度
   */
  push(element) {
    return this.elements.push(element);
  }

  /**
   * 移除队列列头的元素
   * @returns {T} 队列列头的元素
   */
  shift() {
    return this.elements.shift();
  }

  /**
   * 移除队列列尾的元素
   * @returns {T} 队列列尾的元素
   */
  pop() {
    return this.elements.pop();
  }

  /**
   * 获取队列列头元素，但不出队列
   * @returns {T} 队列列头元素
   */
  head() {
    // @ts-ignore
    return this.elements.at(0);
  }

  /**
   * 获取队列列尾元素，但不出队列
   * @returns {T} 队列列头元素
   */
   tail() {
    // @ts-ignore
    return this.elements.at(-1);
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
   * @returns {boolean}
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

export default Deque;
