// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(fib(parseInt(line, 10)));
  process.exit();
}

function fib(n) {
  if (n <= 1) return n;

  let previous = 0;
  let current = 1;

  for (let i = 0; i < n - 1; i++) {
    let tmp_previous = previous;
    previous = current;
    current = tmp_previous + current;
  }

  return current % 10;
}
console.log(fib(15));

module.exports = fib;
