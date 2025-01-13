// STRING MANIPULATION FUNCTIONS

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to count characters in a string
function countCharacters(str) {
    return str.length;
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


// ARRAY FUNCTIONS

// Function to find the maximum value in an array
function findMaximum(arr) {
    return Math.max(...arr);
}

// Function to find the minimum value in an array
function findMinimum(arr) {
    return Math.min(...arr);
}

// Function to calculate the sum of all elements in an array
function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Function to filter elements from an array based on a condition
function filterArray(arr, condition) {
    return arr.filter(condition);
}


// MATHEMATICAL FUNCTIONS 

// Function to calculate the factorial of a given number
function factorial(num) {
    if (num < 0) return undefined; // Factorial for negative numbers is undefined
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to generate the Fibonacci sequence up to a given number of terms
function fibonacciSequence(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    if (terms === 2) return [0, 1];

    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
