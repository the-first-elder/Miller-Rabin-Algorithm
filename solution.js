function millerRabinTest(n, k) {
    // Check if n is less than 2 or even
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0) return false;

    // Find d and r such that n - 1 = 2^r * d where d is odd
    let d = n - 1;
    let r = 0;
    while (d % 2 === 0) {
        d /= 2;
        r+=1;
    }

    // Witness loop
    for (let i = 0; i < k; i++) {
        const a = 2 + Math.floor(Math.random() * (n - 3)); // Random number in [2, n-2]
        let x = modExp(a, d, n);
        if (x === 1 || x === n - 1) continue;

        let prime = false;
        for (let j = 0; j < r - 1; j++) {
            x = modExp(x, 2, n);
            if (x === 1) return false; // Composite
            if (x === n - 1) {
                prime = true;
                break;
            }
        }

        if (!prime) return false; // Composite
    }

    return true; // Likely prime
}

// Function to calculate (a^b) % c
function modExp(a, b, c) {
    let result = 1;
    a = a % c;
    while (b > 0) {
        if (b % 2 === 1) {
            result = (result * a) % c;
        }
        b = Math.floor(b / 2);
        a = (a * a) % c;
    }
    return result;
}

// Example usage
const n =7; // Change this to the number you want to test
const k = 20; // Number of iterations
console.log(millerRabinTest(n, k));

