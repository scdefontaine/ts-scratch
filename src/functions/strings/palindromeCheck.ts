import * as palindromeData from "../../../data/strings/test1.json";

export function palindromeCheck() {
  console.log("Checking if sting is palindrome: ", palindromeData.string);
  let string = palindromeData.string;
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  console.log("Results: ", string === reversedString);
}