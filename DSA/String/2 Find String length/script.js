function lenStr(str) {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }

  return count;
}

console.log(lenStr("Hello ji"));
