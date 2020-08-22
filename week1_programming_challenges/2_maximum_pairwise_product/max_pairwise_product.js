// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.once("line", () => {
  rl.on("line", readLine);
});

function readLine(line) {
  const arr = line.toString().split(" ").map(Number);

  console.log(max(arr));
  process.exit();
}

function max(arr) {
  let n = arr.length;

  let index1 = -1;
  for (let i = 0; i < n; i++) {
    arr[i] > index1 ? (index1 = arr[i]) : (index1 = index1);
  }

  let index2 = -1;
  for (let j = 0; j < n; j++) {
    console.log(j, index2);
    (arr[j] != index1 && index2 == -1) || arr[j] > arr[index2]
      ? (index2 = j)
      : (index2 = index2);
  }

  const eae = index1 * index2;
  return eae;
  // return arr[index1] * arr[index2];
}

console.log(max([1, 2, 3]));
console.log(max([7, 5, 14, 2, 8, 8, 10, 1, 2, 3]))
console.log(max([2, 9, 3, 1, 9]))

module.exports = max;

// function maxNaive(arr) {
//   let maximum_product = 0;
//   let n = arr.length;

//   for (let first = 0; first < n; first++) {
//     for (let second = first + 1; second < n; second++) {
//       maximum_product = Math.max(maximum_product, arr[first] * arr[second]);
//     }
//   }

//   return maximum_product;
// }

// function maxFast(arr) {
//   let n = arr.length;

//   let index1 = 1;
//   for (let i = 0; i < n; i++) {
//     arr[i] > arr[index1] ? (index1 = arr[i]) : (index1 = arr[i] - 1);
//   }

//   let index2 = 1;
//   index1 = 1 ? (index2 = 2) : index2;

//   for (let i = 0; i < n; i++) {
//     arr[i] != arr[index1] && arr[i] > arr[index2]
//       ? (index2 = arr[i])
//       : (index2 = arr[i] - 1);
//   }
//   return index1 * index2;
// }

// function StressTest(n) {
//   // const r = Math.random() * 5000;
//   // const n = [r, r,r]

//   let result1 = maxNaive(n);
//   let result2 = maxFast(n);

//   result1 = result2
//     ? console.log("OK")
//     : console.log(`Wrong answer: ${result1} VS ${result2}`);

//   return;
// }

// StressTest([1, 2, 3]);
// StressTest([7, 5, 14, 2, 8, 8, 10, 1, 2, 3]);
// StressTest([2, 9, 3, 1, 9]);
