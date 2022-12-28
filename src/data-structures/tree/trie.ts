class TrieNode {
  children: Map<string, TrieNode>;
  // 表示当前节点是否是一个字符串的结束字符
  isEnd: boolean;
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

export default class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * 插入字符串
   * @param word 字符串
   */
  insert(word: string): void {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch) || new TrieNode();
    }
    node.isEnd = true;
  }

  /**
   * 查询树中是否含有特定字符串
   * @param word 字符串
   * @returns {boolean}
   */
  search(word: string): boolean {
    const node: TrieNode | null = this.searchPrefix(word);
    return node ? node.isEnd : false;
  }

  /**
   * 查询树中是否包含特定前缀的字符串
   * @param prefix 前缀字符串
   * @returns 
   */
  startsWith(prefix: string): boolean {
    const node: TrieNode | null = this.searchPrefix(prefix);
    return !!node;
  }

  /**
   * 辅助函数，查询树中包含特定字符串的节点
   * @param prefix 前缀字符串
   * @returns 
   */
  searchPrefix(prefix: string): TrieNode | null {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children.get(ch)) {
        return null;
      }
      node = node.children.get(ch) || new TrieNode();
    }
    return node;
  }
  
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // 返回 True
console.log(trie.search("app")); // 返回 False
console.log(trie.startsWith("app")); // 返回 True
trie.insert("app");
console.log(trie.search("app")); // 返回 True
