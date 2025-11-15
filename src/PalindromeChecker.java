public class PalindromeChecker {
    
    /**
     * Checks if a given number is a palindrome.
     * A palindrome number reads the same backward as forward.
     * 
     * @param number the number to check
     * @return true if the number is a palindrome, false otherwise
     */
    public static boolean isPalindrome(int number) {
        // Handle negative numbers - they are not palindromes
        if (number < 0) {
            return false;
        }
        
        int original = number;
        int reversed = 0;
        
        // Reverse the number
        while (number != 0) {
            int digit = number % 10;
            reversed = reversed * 10 + digit;
            number = number / 10;
        }
        
        // Check if original equals reversed
        return original == reversed;
    }
    
    /**
     * Main method to demonstrate palindrome checking functionality.
     */
    public static void main(String[] args) {
        // Test cases
        int[] testNumbers = {121, 12321, 123, -121, 0, 1, 1001, 12345};
        
        System.out.println("Palindrome Checker Application");
        System.out.println("==============================");
        System.out.println();
        
        for (int num : testNumbers) {
            boolean result = isPalindrome(num);
            System.out.println(num + " is " + (result ? "a palindrome" : "NOT a palindrome"));
        }
        
        // If arguments are provided, check those numbers too
        if (args.length > 0) {
            System.out.println();
            System.out.println("Checking user-provided numbers:");
            System.out.println("-------------------------------");
            for (String arg : args) {
                try {
                    int num = Integer.parseInt(arg);
                    boolean result = isPalindrome(num);
                    System.out.println(num + " is " + (result ? "a palindrome" : "NOT a palindrome"));
                } catch (NumberFormatException e) {
                    System.out.println("'" + arg + "' is not a valid integer");
                }
            }
        }
    }
}
