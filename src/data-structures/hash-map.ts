import { LinkedList } from "./linked-list";

export const loselose = (key: string) =>
  Array.from(key).reduce((acc, curr) => acc + curr.charCodeAt(0), 0) % 37;

export const djb2 = (key: string) =>
  Array.from(key).reduce((acc, curr) => acc * 33 + curr.charCodeAt(0), 5381) %
  1013;

export class HashMap {
  private array = new Array(1000).fill(0).map(() => new LinkedList());
  constructor() {}

  private hash(key) {
    return djb2(key);
  }

  /**
   * 返回某个 HashMap 对象中的一个指定元素。
   * @param key 必须参数，也是它唯一的参数，要从目标 HashMap 对象中获取的元素的键。
   * @returns {T}
   */
  get(key) {
    const position = this.hash(key);
    // @ts-ignore
    const list = this.array.at(position);
    const node = list.find((v) => v.at(0) === key);
    return node?.value.at(1);
  }

  /**
   * 为 HashMap 对象添加或更新一个指定了键（key）和值（value）的（新）键值对。
   * @param key 要添加至相应 HashMap 对象的元素的键。
   * @param value 要添加至相应 HashMap 对象的元素的值。
   * @returns HashMap 对象
   */
  set(key, value) {
    const position = this.hash(key);
    // @ts-ignore
    const list = this.array.at(position);
    const node = list.find((v) => v.at(0) === key);
    if (node) {
      node.value = [key, value];
    } else {
      list.append([key, value]);
    }
    return this;
  }

  /**
   * 移除 HashMap 对象中指定的元素。
   * @param key 必须。从 HashMap 对象中移除的元素的键。
   * @returns {boolean} 如果 HashMap 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false。
   */
  delete(key) {
    const value = this.get(key);
    if (value) {
      this.set(key, undefined);
      return true;
    } else {
      return false;
    }
  }

  /**
   * 移除 HashMap 对象中的所有元素。
   */
  clear() {
    this.array = this.array.map(() => new LinkedList());
  }
}
