import { arrWork } from "./word.js";

function randomWork() {
  let arrWorkLength = arrWork.length;
  console.log(`arrWorkLength => ${arrWorkLength}`);

  function getRandomWork(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let outRandomIndex = getRandomWork(0, arrWorkLength);
  console.log(`outRandomIndex => ${outRandomIndex}`);

  return arrWork[outRandomIndex];
}

export { randomWork };
