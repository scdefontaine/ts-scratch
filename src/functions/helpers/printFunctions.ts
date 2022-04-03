import { LinkedList } from "../../models/linkedLists/LinkedList";

export function printResults(linkedList: LinkedList): void {
  console.log("----- Results -----");
  let current = linkedList;
  while (current.next != null) {
    console.log(current.value);
    current = current.next;
  }
}