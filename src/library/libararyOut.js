import { wordEng } from "./arr.js";

function libararyOut(n) {
  if (n === 1) {
    return "I" + " " + wordEng;
  } else if (n === 2) {
    return "You" + " " + wordEng;
  } else if (n === 3) {
    return "We" + " " + wordEng;
  } else if (n == 4) {
    return "They" + " " + wordEng;
  } else if (n == 5) {
    return "He" + " " + wordEng + "s";
  } else if (n == 6) {
    return "She" + " " + wordEng + "s";
  }
}

export { libararyOut };
