# Problem 01

### Problem Statement

You are tasked with analyzing a sequence of numbers to determine which occurs more frequently: even or odd numbers. Create a function named `countEvensAndOdds` that assesses an array of integers and returns whether there are more even or odd integers.

The `countEvensAndOdds` function should accept one parameter:

1. `numbers`: an array of integers.

An integer is considered even if it is divisible by 2 with no remainder; otherwise, it is considered odd. The function should return a string stating which type of number is more abundant. If the count of even and odd numbers is the same, return the string `"Equal amounts"`.

Here are some examples:

- `countEvensAndOdds([2, 1, 2, 3, 4])` should return `"Evens are greater"` because there are more even numbers (3) than odd (2).

{Try It!}(node .guides/countEvensAndOdds/try-it-01.js)

- `countEvensAndOdds([2, 2, 0, 1])` should return `"Evens are greater"` because the even numbers (3) outnumber the odd numbers (1).

{Try It!}(node .guides/countEvensAndOdds/try-it-02.js)

- `countEvensAndOdds([1, 3, 5, 7, 9, 10])` should return `"Odds are greater"` as there are more odd numbers (5) than even (1).

{Try It!}(node .guides/countEvensAndOdds/try-it-03.js)

- `countEvensAndOdds([1, 2, 3, 4])` should return `"Equal amounts"` because there is an equal count of even and odd numbers (2 each).

{Try It!}(node .guides/countEvensAndOdds/try-it-04.js)

---

### Solution

{Check It!|assessment}
node .guides/secure/countEvensAndOddsTest.js

Sure, here are five test cases for the `countEvensAndOdds` function, including the expected output for each:

1. **Test Case 1**
    - Input: `[10, 22, 55, 33, 44]`
    - Expected Output: `"Evens are greater"`
    - Reason: There are 3 even numbers (10, 22, 44) and 2 odd numbers (55, 33).

2. **Test Case 2**
    - Input: `[3, 5, 7, 9, 12]`
    - Expected Output: `"Odds are greater"`
    - Reason: There is 1 even number (12) and 4 odd numbers (3, 5, 7, 9).

3. **Test Case 3**
    - Input: `[8, 6, 7, 5, 3, 0, 9]`
    - Expected Output: `"Equal amounts"`
    - Reason: There are 3 even numbers (8, 6, 0) and 4 odd numbers (7, 5, 3, 9), but since zero is considered an even number, it makes the count equal to 4 each.

4. **Test Case 4**
    - Input: `[2]`
    - Expected Output: `"Evens are greater"`
    - Reason: There is 1 even number (2) and 0 odd numbers.

5. **Test Case 5**
    - Input: `[11, 17, 24, 24, 51, 68, 70]`
    - Expected Output: `"Evens are greater"`
    - Reason: There are 4 even numbers (24, 24, 68, 70) and 3 odd numbers (11, 17, 51).

Certainly! Here's a remixed version of the problem that requires students to understand the concepts of iteration, comparison, and possibly the use of conditional statements to find the maximum and minimum values without relying on built-in methods like `Math.min()` and `Math.max()`:

# Problem 02

### Problem Statement

You are provided with an array of integers, which will always contain at least one element. Your challenge is to write a function named `computeRange` that determines the range of values in the array—the difference between the largest and smallest numbers.

Instead of using built-in methods, you must iterate through the array to find these values.

The `computeRange` function should accept one parameter:

1. `numbers`: an array of integers.

The function should compute the range by identifying the maximum and minimum values within the array through iteration and then calculating the difference between these values.

Here are some examples:

- `computeRange([10, 3, 5, 6])` should return `7`, as the range between the largest (10) and smallest (3) values is 7.

{Try It!}(node .guides/computeRange/try-it-01.js)

- `computeRange([7, 2, 10, 9])` should return `8`, since the range is between the largest value (10) and the smallest (2).

{Try It!}(node .guides/computeRange/try-it-02.js)

- `computeRange([2, 10, 7, 2])` should return `8`, where 10 is the largest and 2 is the smallest value.

{Try It!}(node .guides/computeRange/try-it-03.js)

- `computeRange([5])` should return `0`, because when there's only one number, the range is zero.

{Try It!}(node .guides/computeRange/try-it-04.js)



---

### Solution

{Check It!|assessment}
node .guides/secure/computeRangeTest.js


Certainly! Here are five test cases for the `computeRange` function, including the expected output for each:

1. **Test Case 1**
    - Input: `[5, 1, 9, 3, 7, 0, 7]`
    - Expected Output: `9`
    - Reason: The largest number is 9, the smallest is 0, and their difference is 9.

2. **Test Case 2**
    - Input: `[4]`
    - Expected Output: `0`
    - Reason: There is only one number in the array, so the range is 0.

3. **Test Case 3**
    - Input: `[0, -2, -5, -1]`
    - Expected Output: `5`
    - Reason: The largest number is 0, the smallest is -5, and their difference is 5.

4. **Test Case 4**
    - Input: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
    - Expected Output: `9`
    - Reason: The largest number is 10, the smallest is 1, and their difference is 9.

5. **Test Case 5**
    - Input: `[34, 22, 10, 19, 17]`
    - Expected Output: `24`
    - Reason: The largest number is 34, the smallest is 10, and the difference is 24.

These test cases cover a variety of scenarios, including arrays with negative numbers, arrays with a single element, and arrays with consecutive as well as non-consecutive numbers. The function `computeRange` should be able to handle these inputs and return the correct range.


# Problem 03

### Problem Statement

You are provided with a sequence of integers, and your task is to compute the result of multiplying all the even numbers and dividing by each of the odd numbers in this sequence. Write a function named `multiplyEvensDivideOdds` that performs this calculation.

The `multiplyEvensDivideOdds` function should accept one parameter:

1. `numbers`: an array of integers.

An integer is considered even if it is divisible by 2 (i.e., it has no remainder when divided by 2). Conversely, an integer is odd if it has a remainder when divided by 2. The function should return the product of all even numbers divided by the product of all odd numbers in the array.

Ensure that the division by odd numbers does not result in floating-point imprecision for the purposes of this problem. If the final result is a decimal, you may round to the nearest whole number.

Here are some examples:

- `multiplyEvensDivideOdds([1, 2, 3, 4, 5])` should return `1` because the product of even numbers (2, 4) is 8 and the product of odd numbers (1, 3, 5) is 15. Thus, 8 divided by 15 rounded to the nearest whole number is 1.

{Try It!}(node .guides/multiplyEvensDivideOdds/try-it-01.js)

- `multiplyEvensDivideOdds([10, 20, 30])` should return `6000` because the product of even numbers (10, 20, 30) is 6000 and there are no odd numbers to divide by.

{Try It!}(node .guides/multiplyEvensDivideOdds/try-it-02.js)

- `multiplyEvensDivideOdds([1, 3, 5, 7])` should return `0` because there are no even numbers to multiply and thus nothing to divide the product of odd numbers by, resulting in a default product of 0.

{Try It!}(node .guides/multiplyEvensDivideOdds/try-it-03.js)

---

### Solution

node .guides/secure/multiplyEvensDivideOddsTest.js


1. **Test Case 1**
    - Input: `[2, 3, 4, 5, 6]`
    - Expected Output: `16`
    - Explanation: The product of even numbers (2, 4, 6) is 48, and the product of odd numbers (3, 5) is 15. Thus, 48 divided by 15 is approximately 3.2, which rounds to 3.

2. **Test Case 2**
    - Input: `[3, 5, 7, 11]`
    - Expected Output: `0`
    - Explanation: There are no even numbers to multiply, thus the result defaults to 0.

3. **Test Case 3**
    - Input: `[2, 2, 2, 1]`
    - Expected Output: `8`
    - Explanation: The product of even numbers is 8 (2 * 2 * 2), and there's only one odd number to divide by, which is 1. So, the result is 8 / 1 = 8.

4. **Test Case 4**
    - Input: `[0, 1, 2, 3]`
    - Expected Output: `0`
    - Explanation: Multiplication by zero results in 0, and any division thereafter will also result in 0.

5. **Test Case 5**
    - Input: `[10, 5, 2, 20]`
    - Expected Output: `80`
    - Explanation: The product of even numbers (10, 2, 20) is 400, and the product of odd numbers is just 5. Thus, 400 divided by 5 equals 80.

