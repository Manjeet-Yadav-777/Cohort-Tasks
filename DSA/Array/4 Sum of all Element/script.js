function sumArr(arr) {
  let sum = arr.reduce((acc, item) => {
    return (acc += item);
  }, 0);


  return sum;
}

let arr = [1, 2, 3, 4, 5];

let sum = sumArr(arr);
console.log(sum);
