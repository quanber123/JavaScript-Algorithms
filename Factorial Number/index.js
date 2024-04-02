// Độ phức tạp O(n)
// function Factorial(factorial) {
//   let factorialOfNumber = 1;
//   if (factorial === 0) {
//     return 1;
//   }
//   if (factorial === 1) {
//     return n;
//   }
//   for (let i = 2; i <= factorial; i++) {
//     factorialOfNumber = factorialOfNumber * i;
//   }
//   return factorialOfNumber;
// }

// console.log(Factorial(5));

// Sử dụng đệ quy - Độ phức tạp O(n)

function Factorial(n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return n;
  }
  return n * Factorial(n - 1);
}

console.log(Factorial(5));
