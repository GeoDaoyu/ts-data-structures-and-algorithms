export class DoublyLinkedListNode {
  value: undefined;
  prev: DoublyLinkedListNode | null;
  next: DoublyLinkedListNode | null;
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export class DoublyLinkedList {
  tail: DoublyLinkedListNode = null;
  head: DoublyLinkedListNode = null;
  protected length: number = 0;

  constructor() {}

  /**
   * 在链表表头插入节点
   * @param value 节点值
   * @returns 当前链表
   */
  prepend(value) {
    const node = new DoublyLinkedListNode(value);
    if (this.head) {
      node.next = this.head;
      node.prev = null;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  /**
   * 在链表表尾插入节点
   * @param value 节点值
   * @returns {LinkedList} 当前示例
   */
  append(value) {
    const node = new DoublyLinkedListNode(value);
    if (this.head) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  /**
   * 在链表对应索引的节点 后面 插入新节点
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
    if (position > 0 && position < this.length) {
      const node = new DoublyLinkedListNode(value);
      let curr = this.head;
      let prev;
      let index = 0;
      while (index < position) {
        prev = curr;
        curr = curr.next;
        index++;
      }
      node.next = curr;
      node.prev = prev;
      this.length++;
    }
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
        if (this.length === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (position === this.length - 1) {
        curr = this.tail;
        this.tail = curr.prev;
        this.tail.next = null;
      } else {
        while (index < position) {
          prev = curr;
          curr = curr.next;
          index++;
        }
        prev.next = curr.next;
        curr.next.prev = prev;
      }
      this.length--;
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
