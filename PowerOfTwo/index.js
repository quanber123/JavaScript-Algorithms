// Độ phức tạp O(n)
// function PowerOfTwo(number) {
//   if (number < 1) {
//     return false;
//   }
//   for (let i = 0; i < number; i++) {
//     if (Math.pow(2, i) === number) {
//       return true;
//     }
//   }
//   return false;
// }

// Độ phức tạp O(1)

// Quy tắc
// Chính nó khi chuyển sang mã nhị phân thì bit đầu tiên phải là 1 và các bit sau phải là 0
// chính nó trừ 1 khi chuyển sang mã nhị phân thì bit đầu là 0  và các bit sau phải là 1
function PowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(PowerOfTwo(8));
console.log(PowerOfTwo(5));
