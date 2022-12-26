export class TreeNode {
  value: undefined;
  children: TreeNode[] | null;
  constructor(value, children = null) {
    this.value = value;
    this.children = children;
  }
}
