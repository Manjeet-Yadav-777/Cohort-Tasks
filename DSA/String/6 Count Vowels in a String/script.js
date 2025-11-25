function countVowel(str) {
  let vowel = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }

  return count;
}

let str = "apple";
console.log(countVowel(str));
