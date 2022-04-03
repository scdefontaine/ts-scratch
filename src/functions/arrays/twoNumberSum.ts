import * as data from "../../../data/arrays/test1.json";

export function twoNumberSum() {
  console.log("Two Number Sum");
  console.log(data);
  let array: number[] = data.array;
  let targetSum: number = data.targetSum;
  console.log(helper(data.array, data.targetSum));
}

function helper(array: number[], targetSum: number) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum)
      return [array[left], array[right]];
    else if (currentSum < targetSum)
      left++;
    else if (currentSum > targetSum)
      right--;
  }
  return [];
}