// Given a string return a mutated string with whitespaces replaced by "%20"

console.log("String Replace");

let str = "www.some characters and whitespace.com";

function stringReplace(str) {
  // targetElCount = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === " ") {
  //     targetElCount ++;
  //   }
  // }

  for (let i = str.length; i >0; i--) {
    if (str[i] === " ") {
      let remainder = str.slice(i+1);
      let current = str.slice(0,i);
      str = current + "%20" + remainder;
    }
  }

  return str;
}

console.log(str);
console.log(stringReplace(str));
