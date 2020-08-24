class Fibonacci {
  // private static long naiveCalc_fib(int n) {
    
  //   if (n <= 1)
  //     return n;

  //   return calc_fib(n - 1) + calc_fib(n - 2);
  // }

  static int fib(int n) {
    int f[] = new int[n + 2];
    f[0] = 0;
    f[1] = 1;

    for (int i = 2; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2];
    }

    return f[n];
  }

  static int evenFaster(int n) {
    int a = 0, b = 1, c, i;

    if (n == 0) return a;

    for (i = 2; i <= n; i++){
      c = a + b;
      a = b;
      b = c;
    }

    return b;
  }
  
  public static void main(String args[]) {
    int n = 200;

    System.out.println(evenFaster(n));
    System.out.println(fib(n));
  }
}
