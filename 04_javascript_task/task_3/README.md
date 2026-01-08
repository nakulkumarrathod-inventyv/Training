# Array Handling with Symbols and JavaScript Promise

## Description
This program uses arrays stored inside objects with **Symbol keys** and checks the sum of the final array using a **JavaScript Promise**.

---

## Approach
- An array is stored inside an object using a `Symbol` as a key.
- The first element of the array is removed.
- A second array is created using another `Symbol`.
- All values are combined into a new array.
- A Promise checks whether the sum of the final array is greater than **35**.

---

## How It Works

### 1. `func1()`
- Creates a `Symbol` and uses it as a key in an object.
- Stores the array `[0, 1, 2, 3, 4]` inside the object.
- Removes the first element using `shift()`.
- Sends the removed element and remaining array to `func2()`.

### 2. `func2(firstElement, arr)`
- Creates another `Symbol` and a new object.
- Stores the array `[5, 6, 7, 8, 9]`.
- Combines:
  - the removed element,
  - the second array,
  - the remaining elements of the first array.
- Calls `checkSum()` with the final array.

### 3. `checkSum(arr)`
- Calculates the total sum using `reduce()`.
- Returns a Promise:
  - **Resolves** if the sum is greater than 35.
  - **Rejects** if the sum is 35 or less.

---

## Concepts Used
- Functions
- Symbols
- Objects
- Array methods: `shift`, `reduce`
- Spread operator (`...`)
- JavaScript Promises

---

## Output
- Displays a message showing whether the Promise is **resolved** or **rejected** based on the total sum.
