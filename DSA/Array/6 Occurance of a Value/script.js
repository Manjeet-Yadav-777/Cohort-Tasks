function occElem(arr, target) {
  let count = 0;

  arr.forEach((element) => {
    if (element == target) {
      count++;
    }
  });

  return count;
}

let arr = [2, 3, 2, 2, 2, 7, 2];
let target = 2;

console.log(occElem(arr, target));
