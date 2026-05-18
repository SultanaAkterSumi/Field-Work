function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) return cache[key]; // Cache HIT

    cache[key] = fn(...args); // Cache MISS
    return cache[key];
  };
}
function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}
let memoFactorial = memoize(factorial);
console.log(memoFactorial(5));
console.log(memoFactorial(5));
console.log(memoFactorial(10));
console.log(memoFactorial(10));
