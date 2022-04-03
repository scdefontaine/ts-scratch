import { Node } from "../Node";

export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node: Node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node: Node) {
    // if tail is empty, head is not set
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node: Node, nodeToInsert: Node) {
    // if nodeToInsert is the current node, return
    if (nodeToInsert === this.head && nodeToInsert === this.tail)
      return;
    // clear nodeToInsert bindings
    this.remove(nodeToInsert);
    // set nodeToInsert prev node to current node's prev
    nodeToInsert.prev = node.prev;
    // set nodeToInsert next node to current node
    nodeToInsert.next = node;
    // if current node's prev doesn't exist, set head to nodeToInsert
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      // else set current node's prev next to nodeToInset
      node.prev.next = nodeToInsert;
    }
    // set current node's prev to nodeToInset
    node.prev = nodeToInsert;
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail)
      return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    // save head node to tmp node
    let node = this.head;
    let currentPosition = 1;
    // find the node's position
    while (node !== null && currentPosition++ !== position)
      node = node.next;
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value: number) {
    let node = this.head;
    while (node != null) {
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value)
        this.remove(nodeToRemove);
    }
  }

  remove(node: Node) {
    // if node is the head, set head's next node as new head
    if (node === this.head) this.head = this.head.next;
    // if node is the tail, set tail's prev node as new tail
    if (node === this.tail) this.tail = this.tail.prev;
    // else remove the bindings normally
    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value: number) {
    let node = this.head;
    while (node !== null && node.value !== value)
      node = node.next;
    return node !== null;
  }

  removeNodeBindings(node: Node) {
    // if previous node exists, set prev next to node next
    if (node.prev !== null) node.prev.next = node.next;
    // if next node exists, set next prev to node prev
    if (node.next !== null) node.next.prev = node.prev;
    // remove node bindings
    node.prev = null;
    node.next = null;
  }

  bindNodes(nodeOne: Node, nodeTwo: Node): void {
    nodeOne.next = nodeTwo;
    nodeTwo.prev = nodeOne;
  }
}