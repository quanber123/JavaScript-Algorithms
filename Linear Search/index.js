// Độ phức tạp O(n)
function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(LinearSearch([1, 2, 3, 4], 3));
