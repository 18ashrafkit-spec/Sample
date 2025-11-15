const { isEmpty, reverseString, isEven, max } = require('../src/utils');

describe('Utils', () => {
  describe('isEmpty', () => {
    test('should return true for empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    test('should return true for whitespace string', () => {
      expect(isEmpty('   ')).toBe(true);
    });

    test('should return true for null', () => {
      expect(isEmpty(null)).toBe(true);
    });

    test('should return false for non-empty string', () => {
      expect(isEmpty('hello')).toBe(false);
    });
  });

  describe('reverseString', () => {
    test('should reverse a string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    test('should reverse an empty string', () => {
      expect(reverseString('')).toBe('');
    });

    test('should reverse a palindrome', () => {
      expect(reverseString('racecar')).toBe('racecar');
    });
  });

  describe('isEven', () => {
    test('should return true for even number', () => {
      expect(isEven(4)).toBe(true);
    });

    test('should return false for odd number', () => {
      expect(isEven(5)).toBe(false);
    });

    test('should return true for zero', () => {
      expect(isEven(0)).toBe(true);
    });

    test('should work with negative numbers', () => {
      expect(isEven(-4)).toBe(true);
      expect(isEven(-3)).toBe(false);
    });
  });

  describe('max', () => {
    test('should return max value from array', () => {
      expect(max([1, 5, 3, 9, 2])).toBe(9);
    });

    test('should work with negative numbers', () => {
      expect(max([-5, -2, -8])).toBe(-2);
    });

    test('should throw error for empty array', () => {
      expect(() => max([])).toThrow('Array cannot be empty');
    });

    test('should throw error for null', () => {
      expect(() => max(null)).toThrow('Array cannot be empty');
    });
  });
});
