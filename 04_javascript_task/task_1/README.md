# Array Handling and JavaScript Promise

## Description
This program works with arrays using two functions and check the sum of the final array using a JavaScript Promise.

---

## Approach
- The first element of the original array is removed and stored.
- A second array is created.
- The removed element is added at the start of the second array.
- Then all elements of the second array and remaining elements of the first array are combined.
- A Promise checks whether the sum of the final array is greater than **35**.

---

## How It Works
- `func1` removes the first element from the array and passes the data to the next function.
- `func2` creates a new array, combines all values, and calls the Promise.
- `checkSum` calculates the total sum and resolves or rejects the Promise based on the condition.

---

## Concepts Used
- Functions
- Array methods: `shift`, `unshift`, `push`
- Spread operator (`...`)
- JavaScript Promises

---

## Output
The program prints whether the Promise is **resolved** or **rejected** based on the total sum of the array.
