import { DoublyLinkedList } from "../../models/linkedLists/DoublyLinkedList";
import { LinkedList } from "../../models/linkedLists/LinkedList";
import { Node } from "../../models/Node";

export function jsonToLinkedList(linkedList: LinkedList, data: any): LinkedList {
  let current = linkedList;
  while (current.next != null) {
    current = current.next
  }
  for (let i = 0; i < data.linkedList.nodes.length; i++) {
    console.log(data.linkedList.nodes[i].value);
    current.next = new LinkedList(data.linkedList.nodes[i].value);
    current = current.next;
  }
  return linkedList;
};

export function jsonToDoublyLinkedList(data: any): DoublyLinkedList {
  let list = new DoublyLinkedList();
  let currentNode = null;
  let nextNode = null;
  for (let i = 0; i < data.nodes.length; i++) {
    console.log(data.nodes[i].value);
    currentNode = new Node(data.nodes[i].value);
    if (i === 0) {
      list.setHead(currentNode);
      console.log(list.head);
    }
    // else {
    //   let node = list.head;
    //   let currentPosition = 0;
    //   while (currentPosition++ !== i && node !== null) {
    //     node = node.next;
    //   }
    //   if (node !== null)
    //     list.insertAfter(node, currentNode);
    //   else
    //     list.setTail(currentNode);
    // }
  }
  console.log(list.head);
  return list;
};