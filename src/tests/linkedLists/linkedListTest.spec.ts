// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from '../../functions/linkedLists/removeDupeFromLinkedList';
import * as chai from 'chai';
import { LinkedList } from '../../models/linkedLists/LinkedList';

it('Remove Dupe From Linked List - Test Case #1', function () {
  const input = addMany(new LinkedList(1), [1, 3, 4, 4, 4, 5, 6, 6]);
  const expected = addMany(new LinkedList(1), [3, 4, 5, 6]);
  const actual = program.removeDupeFromLinkedList(input);
  chai.expect(getNodesInArray(actual)).to.deep.equal(getNodesInArray(expected));
});

function addMany(linkedList: LinkedList, values: number[]) {
  let current = linkedList;
  while (current.next !== null) {
    current = current.next;
  }
  for (const value of values) {
    current.next = new LinkedList(value);
    current = current.next;
  }
  return linkedList;
}

function getNodesInArray(linkedList: LinkedList) {
  const nodes: number[] = [];
  let current: LinkedList | null = linkedList;
  while (current !== null) {
    nodes.push(current.value);
    current = current.next;
  }
  return nodes;
}