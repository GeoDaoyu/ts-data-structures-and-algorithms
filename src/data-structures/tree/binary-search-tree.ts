export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class BinarySearchTree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }
  /**
   * 插入节点
   * @param value 节点的值
   * @param node 当前节点，默认值根节点
   */
  insert(value, node = this.root) {
    const newNode = new TreeNode(value);
    // 当根节点没有值时
    if (node === null) {
      this.root = newNode;
      return;
    }
    // 比较节点值，选择左边还是右边
    if (value <= node.value) {
      if (node.left) {
        this.insert(value, node.left);
      } else {
        node.left = newNode;
      }
    } else {
      if (node.right) {
        this.insert(value, node.right);
      } else {
        node.right = newNode;
      }
    }
  }

  /**
   * 中序遍历 generator函数
   * @param node 节点
   */
  *inOrderTraverse(node: TreeNode | null) {
    if (node) {
      yield* this.inOrderTraverse(node.left);
      yield node.value;
      yield* this.inOrderTraverse(node.right);
    }
  }

  /**
   * 前序遍历 generator函数
   * @param node 节点
   */
  *preOrderTraverse(node: TreeNode | null) {
    if (node) {
      yield* this.preOrderTraverse(node.left);
      yield node.value;
      yield* this.preOrderTraverse(node.right);
    }
  }

  /**
   * 后序遍历 generator函数
   * @param node 节点
   */
  *postOrderTraverse(node: TreeNode | null) {
    if (node) {
      yield* this.postOrderTraverse(node.left);
      yield node.value;
      yield* this.postOrderTraverse(node.right);
    }
  }

  *levelOrderTraverse(node: TreeNode | null) {
    if (node) {
      const queue = [node];
      while (queue.length) {
        const cur = queue.shift();
        yield cur?.value;
        if (cur?.left) queue.push(cur.left);
        if (cur?.right) queue.push(cur.right);
      }
    }
  }

  *levelOrderTraverseWith2D(node: TreeNode | null) {
    if (node) {
      const queue = [node];
      while (queue.length) {
        const n = queue.length;
        const level: Array<number | undefined> = [];
        for (let i = 0; i < n; i++) {
          const cur = queue.shift();
          level.push(cur?.value);
          if (cur?.left) queue.push(cur.left);
          if (cur?.right) queue.push(cur.right);
        }
        yield level;
      }
    }
  }
  /**
   * 打印函数
   * @param traverse 遍历器
   */
  print(traverse: Function) {
    const iterator = traverse.call(this, this.root);
    const output = Array.from(iterator);
    console.log(output);
  }

  /**
   * 求BST的最小值
   * @param node 节点
   * @returns
   */
  min(node: TreeNode | null = this.root) {
    return node?.left ? this.min(node.left) : node?.value;
  }

  /**
   * 求BST的最大值
   * @param node 节点
   * @returns
   */
  max(node: TreeNode | null = this.root) {
    return node?.right ? this.max(node.right) : node?.value;
  }

  /**
   * 是否包含目标值
   * @param value 目标值
   * @param node 当前节点，默认值根节点
   * @returns {boolean} 是否
   */
  has(value, node = this.root) {
    if (!node) return false;
    const map = [
      [(v) => v < 0, this.has(value, node.left)], // 比当前值小，往左边查找
      [(v) => v === 0, true], // 找到目标值
      [(v) => v > 0, this.has(value, node.right)], // 比当前值大，往右边查找
    ];
    for (let [fn, result] of map) {
      const dif = value - node.value;
      if (fn(dif)) return result;
    }
  }

  remove(value) {
    const root = this.removeNode(this.root, value);
    return root;
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    }
    // 查找要删除的节点是在左还是右
    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      // 值等于node的值
      // 第一种情况：一个叶子节点
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // 第二种情况：只有一个子节点的节点
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // 第三种情况：一个有两个子节点的节点
      const aux = this.findMinNode(node.right);
      node.value = aux.value;
      node.right = this.removeNode(node.right, aux.value);
      return node;
    }
  }
  findMinNode(node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }
}
const b = new BinarySearchTree();
// 插入数字与顺序与书本一样
b.insert(11);
b.insert(7);
b.insert(15);
b.insert(5);
b.insert(3);
b.insert(9);
b.insert(8);
b.insert(10);
b.insert(13);
b.insert(12);
b.insert(14);
b.insert(20);
b.insert(18);
b.insert(25);
b.insert(6);
b.print(b.inOrderTraverse);
// console.log(b.min());
// console.log(b.max());
// console.log(b.has(15));
// b.remove(14);
b.print(b.levelOrderTraverse);

