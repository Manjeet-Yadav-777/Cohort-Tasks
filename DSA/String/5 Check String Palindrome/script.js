function Palindrome(str) {
  let pal = true;

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] != str[end]) {
      pal = false;
      break;
    }

    start++;
    end--;
  }

  return pal;
}

let str = "Jhahj";

console.log(Palindrome(str.toLowerCase()));
