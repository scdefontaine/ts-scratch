// n-day high  = number of consecutive prior days with strictly fewer check-ins, plus one
export function getNthDayHigh() {
  let checkins = [3, 1, 3, 5, 7, 5, 6, 9];
  console.log(checkins);
  let highDayCountArray: number[] = [];
  let currentHighDayCount: number = 0;
  let currentHighDay: number = 0;
  for (let i = 0; i < checkins.length; i++) {
    if (i === 0) {
      currentHighDayCount++;
      currentHighDay = checkins[i];
      highDayCountArray[i] = currentHighDayCount;
      // console.log("1");
    }
    // console.log(highDayCountArray);
    if (checkins[i] < checkins[--i]) {
      // increment the respective day by 1
      highDayCountArray[i] = 1;
    }
    if (currentHighDay === checkins[i]) {
      currentHighDayCount++;
      // currentHighDay = array[i];
      highDayCountArray[i] = currentHighDayCount;
      console.log("3");
    }
    if (i !== 0 && checkins[i] > checkins[--i]) {
      currentHighDay = checkins[i];
      currentHighDayCount = 1;
      highDayCountArray[i] = currentHighDayCount;
      console.log("4");
    }
  }
  return highDayCountArray;
}