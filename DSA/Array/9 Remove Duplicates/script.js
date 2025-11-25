function removeDuplicates(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        for (var k = j; k < arr.length; k++) {
          arr[k] = arr[k + 1];
        }
        arr.length--;
        j--;
      }
    }
  }

  return arr;
}

let arr = [1, 2, 3, 5, 2, 3];
console.log(removeDuplicates(arr));
