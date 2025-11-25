function checkExist(arr, target) {
  let exist = false;

  arr.forEach((element) => {
    if (element == target) {
      exist = true;
    }
  });

  return exist;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let target = 7;

console.log(checkExist(arr, target));
