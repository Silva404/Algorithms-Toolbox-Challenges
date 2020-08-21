function maxNaive(arr) {
  let maximum_product = 0;
  let n = arr.length;

  for (let first = 0; first < n; first++) {
    for (let second = first + 1; second < n; second++) {
      maximum_product = Math.max(maximum_product, arr[first] * arr[second]);
    }
  }

  return maximum_product;
}

function maxFast(arr) {
  let index1 = 1;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    arr[i] > arr[index1] ? (index1 = arr[i]) : (index1 = arr[i] - 1);
  }

  let index2 = 1;
  index1 = 1 ? (index2 = 2) : index2;

  for (let i = 0; i < n; i++) {
    arr[i] != arr[index1] && arr[i] > arr[index2]
      ? (index2 = arr[i])
      : (index2 = arr[i] - 1);
  }

  return arr[index1] * arr[index2];
}

// console.log(maxFast([1, 2, 3]));
// console.log(maxFast([7, 5, 14, 2, 8, 8, 10, 1, 2, 3]));

function StressTest(n) {
  // const n = Math.random();

  let result1 = maxNaive(n);
  let result2 = maxFast(n);

  result1 = result2
    ? console.log("OK")
    : console.log(`Wrong answer: ${result1} VS ${result2}`);

  return;
}
StressTest([1, 2, 3]);
StressTest([7, 5, 14, 2, 8, 8, 10, 1, 2, 3]);
StressTest([2, 9, 3, 1, 9]);