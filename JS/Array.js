                                    //code to remove duplicates and print new array
// const arr=[1,2,2,3,4,4,5]
// const newarr=[]
// for(i=0;i<arr.length;i++){
//   let isVal=false;
//   for(j=0;j<arr.length;j++){

//   if(arr[i]==newarr[j]){
//  isVal=true;
//     break;
//   }
//   }
//   if(!isVal){
//     newarr.push(arr[i])
//   }
// }
// console.log(newarr)

                                        //reverse the array

//  const arr=[1,2,2,3,4,4,5];
// let newarr=[]
// newarr.push(arr.pop())
// newarr.push(arr.pop())
// newarr.push(arr.pop())

// console.log(newarr)

// const arr = [1, 2, 2, 3, 4, 4, 5];
// let newarr = [];
// for (let i = 0; i < arr.length ; i++) {
//   newarr.push(arr.pop());
// }
// console.log(newarr);

// const arr = [1, 2, 2, 3, 4, 4, 5];
// let l = arr.length;

// let newArr = [];
// for (let i = 0; i < l; i++) {
//   // console.log(i)
//   newArr.push(arr.pop());
// }
// console.log(newArr);

                                           //SLICE

//return value from 2-3
// let slice=[1,2,2,3,4,4,5];
// let x=arr.slice(2,4)
// console.log(x)

                                           //SPLICE
//delete certain value
//   let sp=[1,2,2,3,4,4,5];
// // console.log(sp.splice(1,5))
// console.log(sp.splice(1,5,8,9,6))  //8,9,6 is to replace the missing value and is optional
// // console.log(sp)

                                          //CONCAT
   let sp=[1,2,2,3,4,4,5]
let ss=[3,4,5,6,3];
let ss2=[3,4,5,6,3];
let newarr=sp.concat(ss,ss2)
console.log(newarr)
