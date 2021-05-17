function solve(arr) {
  let result = [];
  let current = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element >= current) {
      current = element;
      result.push(current);
    }
  }
  return result;
}
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));

console.log(solve([1, 2, 3, 4]));
