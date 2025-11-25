function Reverse(str) {
  let newStr = "";

  for (var i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }

  return newStr;
}

let str = "Hello";

console.log(Reverse(str));
