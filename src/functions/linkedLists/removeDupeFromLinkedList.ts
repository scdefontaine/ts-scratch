import { LinkedList } from "../../models/linkedLists/LinkedList";
import { printResults } from "../helpers/printFunctions";
import * as linkedListData from "../../../data/linkedLists/linkedList-1/test1.json"
import { jsonToLinkedList } from "../helpers/jsonHelperFunctions";

export function removeDupeFromLinkedList() {

  // Remove Duplicate from linked list
  console.log("Removing Duplicate from Linked List");
  let linkedList = jsonToLinkedList(new LinkedList(Number.parseInt(linkedListData.linkedList.head)), linkedListData);
  console.log("Linked List: " + linkedList);
  let current: LinkedList | null = linkedList;
  while (current !== null) {
    let nextDistinct: LinkedList | null = current.next;
    while (nextDistinct !== null && nextDistinct.value === current.value) {
      nextDistinct = nextDistinct.next
    }

    current.next = nextDistinct;
    current = nextDistinct;
  }

  console.log(linkedList);
  console.log("done/n*************");
}