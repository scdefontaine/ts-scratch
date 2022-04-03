import { DoublyLinkedList } from "../../models/linkedLists/DoublyLinkedList";
import * as data from "../../../data/linkedLists/doublyLinkedList-1/test1.json";
import { jsonToDoublyLinkedList } from "../helpers/jsonHelperFunctions";

export function createDoublyLinkedList() {
  // Create a doubly linked list
  console.log("Linked List Construction");
  console.log(data);
  let list = jsonToDoublyLinkedList(data);
  let node = list.head;
  while (node?.next !== null && list.head !== null)
    console.log(node?.value);
  console.log("done/n*************");
}