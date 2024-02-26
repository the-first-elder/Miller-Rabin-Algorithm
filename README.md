# Miller-Rabin Primality Test

## Overview

The Miller-Rabin primality test is a probabilistic algorithm used to determine whether a given number is prime. Unlike deterministic primality tests, Miller-Rabin provides a high probability of correctness. It works well for large numbers and is commonly used in cryptographic applications.

## Functionality

The `millerRabinTest` function takes a positive integer `n` as input and performs the Miller-Rabin test to determine whether `n` is likely prime. It returns `true` if `n` is probably prime and `false` if it is composite.

The algorithm uses a specified number of iterations (`k`) to increase accuracy. Higher values of `k` reduce the probability of false positives but increase computation time.

## Usage

1. **Input**: Provide the number `n` to test for primality and the number of iterations `k` for the test.

2. **Output**: The function returns `true` if `n` is probably prime and `false` if it is composite.

3. **Example Usage**:

```javascript
const n = 561; // Number to test for primality
const k = 20; // Number of iterations for the test
console.log(millerRabinTest(n, k)); // Output: false
```

## Considerations

- Ensure that `n` is a positive integer greater than 1.
- Adjust the value of `k` based on desired accuracy. Higher values of `k` provide more confidence in the primality test result but increase computational overhead.

## Notes

- This implementation provides a high probability of correctness but does not guarantee primality. It is suitable for probabilistic primality testing in various applications, including cryptography.

---

This README provides an overview of the Miller-Rabin primality test function, its usage, considerations, and notes for using the function effectively.
