
export function quickselect(array: number[], k: number) {
  // Write your code here.
  const position = k - 1;
  return quickselectHelper(array, 0, array.length - 1, position);
}

function quickselectHelper(array: number[], startIdx: number, endIdx: number, position: number) {
  while (true) {
    if (startIdx > endIdx)
      throw new Error("Your program should never get here!");
    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    while (leftIdx <= rightIdx) {
      if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx])
        swap(leftIdx, rightIdx, array);
      if (array[leftIdx] <= array[pivotIdx])
        leftIdx++;
      if (array[rightIdx] >= array[pivotIdx])
        rightIdx--;
    }
    swap(pivotIdx, rightIdx, array);
    if (rightIdx === position)
      return array[rightIdx];
    else if (rightIdx < position)
      startIdx = rightIdx + 1;
    else
      endIdx = rightIdx - 1;
  }
}

function swap(i: number, j: number, array: number[]) {
  const tmp = array[j];
  array[j] = array[i];
  array[i] = tmp;
}