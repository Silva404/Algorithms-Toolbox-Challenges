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

  return fib(n - 1) + fib(n - 2);
}

function fasterFib(n) {
  let a = 0,
    b = 1,
    c,
    i;

  for (i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  //1.7340252117279783e+41
  // 1 => last digit
  return b;
}
console.log(fasterFib(200));
// console.log(fib(200));

module.exports = fib;
