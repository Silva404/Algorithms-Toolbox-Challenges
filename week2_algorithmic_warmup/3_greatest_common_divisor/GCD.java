public class GCD {

  private static int gcd_naive(int a, int b) {
    int current_gcd = 1;
    for (int d = 2; d <= a && d <= b; ++d) {
      if (a % d == 0 && b % d == 0) {
        if (d > current_gcd) {
          current_gcd = d;
        }
      }
    }

    return current_gcd;
  }

  public static int fastGCD(int a, int b) {
    if (b <= 0) return a;

    int aPrime = a % b;

    return fastGCD(b, aPrime);
  }

  public static void main(String args[]) {
    int a = 3918848;
    int b = 1653264;

    System.out.println(fastGCD(a, b));
    // System.out.println(gcd_naive(a, b));
  }
}
