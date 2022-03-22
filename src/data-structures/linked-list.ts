export class LinkedListNode {
  value: undefined;
  next: LinkedListNode | null;
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  head: LinkedListNode = null;
  protected length: number = 0;

  constructor() {}

  /**
   * 在链表表头插入节点
   * @param value 节点值
   * @returns 当前链表
   */
  prepend(value) {
    const node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  /**
   * 在链表表尾插入节点
   * @param value 节点值
   * @returns {LinkedList} 当前示例
   */
  append(value) {
    const node = new LinkedListNode(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.length++;
    return this;
  }

  /**
   * 根据索引位置删除元素
   * @param position 索引值
   * @returns {LinkedList} 当前示例
   */
  removeAt(position) {
    // 检查索引越界
    if (position >= 0 && position < this.length) {
      let curr = this.head;
      let prev;
      let index = 0;
      if (position === 0) {
        this.head = curr.next;
      } else {
        while (index < position) {
          prev = curr;
          curr = curr.next;
          index++;
        }
        prev.next = curr.next;
      }
      this.length--;
    }
    return this;
  }

  /**
   * 在链表对应索引的节点 上 插入新节点
   * @param value 新节点值
   * @param index 索引
   * @returns 当前链表
   */
  insert(value, position) {
    if (position === 0) {
      return this.prepend(value);
    }
    if (position === this.length) {
      return this.append(value);
    }
    // 检查position越界
    if (position > 0 && position < this.length) {
      const node = new LinkedListNode(value);
      let curr = this.head;
      let prev;
      let index = 0;
      while (index < position) {
        prev = curr;
        curr = curr.next;
        index++;
      }
      node.next = curr;
      prev.next = node;
      this.length++;
    }
    return this;
  }

  /**
   * 返回元素在链表中的索引，没找到则返回-1
   * 使用 === 来做比较
   * @param value 节点值
   * @returns {number} 索引值 或 -1
   */
  indexOf(value) {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.value === value) {
        return index;
      }
      index++;
      curr = curr.next;
    }
    return -1;
  }

  /**
   * 从链表中移除指定元素
   * @param value 元素值
   * @returns 当前链表
   */
  remove(value) {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }

  /**
   * 返回链表长度
   * @returns {number} 链表长度
   */
  size() {
    return this.length;
  }

  /**
   * 判断链表是否为空
   * @returns {bool} 是 或 否
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * 链表值转字符串
   * @returns {string} 字符串
   */
  toString() {
    let curr = this.head;
    const array = [];
    while (curr) {
      array.push(curr.value);
      curr = curr.next;
    }
    return array.toString();
  }
}
