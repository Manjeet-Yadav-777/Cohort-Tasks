function maxArray(arr) {
  let max = 0;

  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });

  return max;
}

let arr = [3, 4, 6, 9, 2, 8];
let max = maxArray(arr);

console.log(max);
