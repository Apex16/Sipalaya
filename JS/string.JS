// let s="hi";
// console.log(s.length)

// let s="hi";
// console.log(s[1])



// let s="hi Aarson";
// let trim=s.trim()  // to remve length of spaces...only seen in index not in words
// console.log(s[3])



//SLICE
// let str = "Hello, World!";
// console.log(str.slice(0, 5));    


//REPLACE AND                                       REPALCE ALL
// let str = "Hello, World!";
// let newStr = str.replace("World", "JavaScript");
// console.log(newStr);    


                                                //SPlIT

// let str="jello";
// let newstr=str.split();
// console.log(newstr)                 // this gives all string into a single array index
//CHECK THIS TO FIND SPACE BETWEEN ALL WORDS,LETTERS



//.startswith  .endwith





// let str = "ram";
// let newStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   newStr += str.charAt(i);
// }

// if (str === newStr) {
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");
// }







let str = "ram";
let newStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  newStr =newStr+ str.charAt(i);
}

if (str === newStr) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }



  let arr=[1,2,3,,4,5];
  let i=0;
  for(ler i=0;i<=arr.length;i++){
    arr+=i;
  console.log(arr)}
   