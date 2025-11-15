/**
 * Utility functions
 */

/**
 * Check if a string is empty
 * @param {string} str - String to check
 * @returns {boolean} True if string is empty
 */
function isEmpty(str) {
  return !str || str.trim().length === 0;
}

/**
 * Reverse a string
 * @param {string} str - String to reverse
 * @returns {string} Reversed string
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Check if a number is even
 * @param {number} num - Number to check
 * @returns {boolean} True if number is even
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * Get the maximum value from an array
 * @param {number[]} arr - Array of numbers
 * @returns {number} Maximum value
 * @throws {Error} If array is empty
 */
function max(arr) {
  if (!arr || arr.length === 0) {
    throw new Error('Array cannot be empty');
  }
  return Math.max(...arr);
}

module.exports = {
  isEmpty,
  reverseString,
  isEven,
  max
};
