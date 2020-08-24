public class FibonacciLastDigit {
    private static int getFibonacciLastDigitNaive(int n) {
        if (n <= 1)
            return n;

        int previous = 0; 
        int current  = 1; 

        for (int i = 0; i < n - 1; ++i) {
            int tmp_previous = previous; 
            previous = current; 
            current = tmp_previous + current; 
        }

        return current % 10;
    }

    void findFib(int f[]) {
        f[0] = 0;
        f[1] = 1;

        for (int i = 2; i <= 59; i++) {
            f[i] = (f[i - 1] + f[i - 2]) % 10; 
        }
    }
    
    int fibLastDigit(long n) {
        int f[] = new int[60];

        findFib(f);

        int index = (int)(n % 60L);

        return f[index];
    }

    public static void main(String[] args) {
        int n = 15;
        int c = fibLastDigit(n);
        // int c = getFibonacciLastDigitNaive(n);
        System.out.println(c);
    }
}

