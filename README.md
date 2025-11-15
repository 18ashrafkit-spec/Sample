# Sample

## Palindrome Checker Application

A Java application to check if a given number is a palindrome.

### What is a Palindrome?

A palindrome number is a number that reads the same backward as forward. For example:
- 121 is a palindrome (reads as 121 from both directions)
- 12321 is a palindrome
- 123 is NOT a palindrome (reverse is 321)

### How to Use

#### Compile the Application

```bash
cd src
javac PalindromeChecker.java
```

#### Run the Application

**With default test cases:**
```bash
java PalindromeChecker
```

**With custom numbers:**
```bash
java PalindromeChecker 121 12321 123 9876789
```

### Features

- Checks if a number is a palindrome
- Handles negative numbers (treated as non-palindromes)
- Handles single-digit numbers
- Accepts command-line arguments for custom testing
- Includes built-in test cases for demonstration

### Example Output

```
Palindrome Checker Application
==============================

121 is a palindrome
12321 is a palindrome
123 is NOT a palindrome
-121 is NOT a palindrome
0 is a palindrome
1 is a palindrome
1001 is a palindrome
12345 is NOT a palindrome
```
