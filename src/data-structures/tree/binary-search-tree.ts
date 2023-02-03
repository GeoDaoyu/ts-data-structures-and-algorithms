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

  insert(value: number): void {
    const node = new TreeNode(value);
    if (this.root === null) {
      this.root = node;
    } else {
      // 往树中插入节点
      this.insertNode(node, this.root);
    }
  }

  insertNode(newNode: TreeNode, node: TreeNode): void {
    if (newNode.value < node.value) {
      // 往左侧插入
      if (node.left) {
        this.insertNode(newNode, node.left);
      } else {
        node.left = newNode;
      }
    } else {
      // 往右侧插入
      if (node.right) {
        this.insertNode(newNode, node.right);
      } else {
        node.right = newNode;
      }
    }
  }

  *inOrderTraverse(node: TreeNode | null): Generator<number> {
    if (node) {
      yield* this.inOrderTraverse(node.left);
      yield node.value;
      yield* this.inOrderTraverse(node.right);
    }
  }

  *preOrderTraverse(node: TreeNode | null): Generator<number> {
    if (node) {
      yield node.value;
      yield* this.preOrderTraverse(node.left);
      yield* this.preOrderTraverse(node.right);
    }
  }

  *postOrderTraverse(node: TreeNode | null): Generator<number> {
    if (node) {
      yield* this.postOrderTraverse(node.left);
      yield* this.postOrderTraverse(node.right);
      yield node.value;
    }
  }

  print(fn: Function): void {
    const iterator = fn.call(this, this.root);
    const output: number[] = Array.from(iterator);
    console.log(output);
  }

  min(): number | null {
    const root = this.root;
    if (root === null) return null;
    const node = this.minNode(root);
    return node.value;
  }

  minNode(node: TreeNode): TreeNode {
    if (node.left) {
      return this.minNode(node.left);
    } else {
      return node;
    }
  }

  max(): number | null {
    const root = this.root;
    if (root === null) return null;
    const node = this.maxNode(root);
    return node.value;
  }

  maxNode(node: TreeNode): TreeNode {
    if (node.right) {
      return this.maxNode(node.right);
    } else {
      return node;
    }
  }

  has(value: number): boolean {
    const root = this.root;
    if (root === null) {
      return false;
    } else {
      return this.hasNode(root, value);
    }
  }

  hasNode(node: TreeNode, value: number): boolean {
    if (node.value === value) {
      return true;
    }
    if (value < node.value) {
      if (node.left) {
        return this.hasNode(node.left, value);
      } else {
        return false;
      }
    } else {
      if (node.right) {
        return this.hasNode(node.right, value);
      } else {
        return false;
      }
    }
  }

  remove(value: number): void {
    const root = this.root;
    if (root === null) {
      return;
    }
    // 先找到目标值的节点
    const [parent, node] = this.findNode(null, root, value);
    if (node === null) {
      return;
    }
    // 删除这个节点
    if (!node.left && !node.right) {
      // 没有子节点
      this.removeEmptyNode(parent, node);
    } else if (node.left && node.right) {
      // 有两个子节点
      this.removeFullNode(node);
    } else {
      // 只有一个子节点
      this.removeHalfNode(parent, node);
    }
  }

  /**
   * 删除节点的辅助函数，通过目标值来寻找节点和节点的父节点
   * @param parent 当前节点的父节点
   * @param node 当前要搜寻的节点
   * @param value 目标值
   * @returns 一个数组，数组第一位是父节点，第二位是目标值的节点
   */
  findNode(
    parent: TreeNode | null,
    node: TreeNode,
    value: number
  ): Array<TreeNode | null> {
    if (node.value === value) {
      return [parent, node];
    }
    if (value < node.value) {
      if (node.left) {
        return this.findNode(node, node.left, value);
      } else {
        return [node, null];
      }
    } else {
      if (node.right) {
        return this.findNode(node, node.right, value);
      } else {
        return [node, null];
      }
    }
  }

  findMinNode(parent: TreeNode, node: TreeNode): Array<TreeNode> {
    if (node.left) {
      return this.findMinNode(node, node.left);
    } else {
      return [parent, node];
    }
  }

  removeEmptyNode(parent: TreeNode | null, node: TreeNode): void {
    if (!parent) {
      this.root = null;
      return;
    }
    if (parent.left === node) {
      parent.left = null;
      return;
    }
    if (parent.right === node) {
      parent.right = null;
      return;
    }
  }

  removeHalfNode(parent: TreeNode | null, node: TreeNode): void {
    if (!parent) {
      this.root = node.left || node.right;
    }
    if (node === parent?.left) {
      parent.left = node.left || node.right;
    }
    if (node === parent?.right) {
      parent.right = node.left || node.right;
    }
  }

  removeFullNode(node: TreeNode): void {
    // @ts-ignore
    const [parent, minNode] = this.findMinNode(node, node.right);
    const minValue = minNode.value;
    node.value = minValue;
    this.removeEmptyNode(parent, minNode);
  }

  *levelOrderTraverse(root: TreeNode | null): Generator<Array<number>> {
    if (root) {
      function* level(queue: Array<TreeNode>) {
        // 取得当前层的节点的值的数组
        const values = queue.map((node) => node.value);
        yield values;
        // 计算出下一层的节点
        const nextQueue = queue.flatMap((node) => {
          const children: Array<TreeNode> = [];
          if (node.left) children.push(node.left);
          if (node.right) children.push(node.right);
          return children;
        });
        if (nextQueue.length) {
          yield* level(nextQueue);
        }
      }
      yield* level([root]);
    }
  }
}

const tree = new BinarySearchTree();
// 插入数字与顺序与书本一样
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

// console.log(tree.max());
// console.log(tree.min());
// console.log(tree.has(6));

tree.print(tree.inOrderTraverse);
// tree.remove(6);
// tree.remove(5);
// tree.remove(15);

tree.print(tree.levelOrderTraverse);
