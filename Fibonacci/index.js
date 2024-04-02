// Độ phức tạp O(n)

// function Fibonacci(number) {
//   const fib = [0, 1];
//   if (number <= 1) {
//     return number;
//   }
//   for (let i = 2; i < number; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }
// console.log(Fibonacci(6));

// Sử dụng đệ quy - Độ phức tạp O(2^n)

function Fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(6));
