class Stack {
  private elements = new Array();

  constructor() {}

  /**
   * 弹出栈顶元素
   * @returns {T} 栈顶元素
   */
  pop() {
    return this.elements.pop();
  }

  /**
   * 入栈
   * @param elements 入栈元素或入栈元素数组
   * @returns {number} 入栈后的数组长度
   */
  push(...elements) {
    return this.elements.push(...elements);
  }

  /**
   * 获取栈顶元素，但不弹出
   * @returns {T} 栈顶元素
   */
  peek() {
    // @ts-ignore
    return this.elements.at(-1);
  }

  /**
   * 获取栈的大小
   * @returns {number} 栈的大小
   */
  size() {
    return this.elements.length;
  }

  /**
   * 判断栈是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this.elements.length === 0;
  }

  /**
   * 清空栈
   */
  clear() {
    this.elements.length = 0;
  }

  /**
   * 栈转成字符串
   * @returns {string} 字符串
   */
  toString() {
    return this.elements.toString();
  }
}

export default Stack;
