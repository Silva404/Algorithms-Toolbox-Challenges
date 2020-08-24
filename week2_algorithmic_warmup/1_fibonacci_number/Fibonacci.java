import java.util.Scanner;

public class Fibonacci {
  private static long calc_fib(int n) {
    
    if (n <= 1)
      return n;

    return calc_fib(n - 1) + calc_fib(n - 2);
  }

  public static long FibList(int n) {
    int n[0] = 0
    int n[1] = 1
    
    return 
  }
  public static void main(String args[]) {
    // Scanner in = new Scanner(System.in);
    // int n = in.nextInt();
    
    System.out.println(calc_fib(40));
  }
}
