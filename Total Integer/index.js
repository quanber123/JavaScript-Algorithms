// Độ phức tạp O(n)
// function Sum(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// Độ phức tạp O(1)

function Sum(number) {
  return (number * (number + 1)) / 2;
}
