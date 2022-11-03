import { getRandomInt } from "./random.js";
import { randomWork } from "./libararyWork.js";

let wordEng;
let numberRandom;
function text() {
  let objectWord = randomWork();
  let wordRu = objectWord.wordRu;
  wordEng = objectWord.wordEng;

  numberRandom = getRandomInt(1, 7);
  console.log(`numberRandom => ${numberRandom}`);

  if (numberRandom === 1) {
    let n1 = "Я" + " " + wordRu;
    return n1;
  } else if (numberRandom === 2) {
    let n2 = "Ты" + " " + wordRu;
    return n2;
  } else if (numberRandom === 3) {
    let n3 = "Мы" + " " + wordRu;
    return n3;
  } else if (numberRandom === 4) {
    let n4 = "Они" + " " + wordRu;
    return n4;
  } else if (numberRandom === 5) {
    let n5 = "Он" + " " + wordRu;
    return n5;
  } else if (numberRandom === 6) {
    let n6 = "Она" + " " + wordRu;
    return n6;
  }
}

export { text, numberRandom, wordEng };
