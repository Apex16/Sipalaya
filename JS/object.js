// const a={
//   name:"xyz",age:20,
//   phone:984237172,
//   add:(a,b)=>{
//     console.log("obj method",a+b)
//   },
// email:"a@gmail.com"
// };

//update or add
// a.age=90
// console.log(a)



const a = {
  name: "xyz",
  age: 20,
  contact: { 
    phone: 984237172,
    email: "a@gmail.com",
    num: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
 add: (a, b) => {
    console.log("obj method", a + b);
  },
};
let b = a.contact.num;
let s= 0;
for (let i = 0; i < b.length; i++) { 
  
  s=s+b[i]
}

//update or add
// a.age=90

//delete
delete a.contact
console.log(a) ;