// Spread operator
var obj1={
    id:1,
    nm:'Alsok',
    dept:'Finance'
}
var obj2={
...obj1,
dept:'hr'
}
console.log(obj1)
console.log(obj2)

//Rest Parameter
function fn(x,y,...data){
    console.log(x,y,data)
}
fn(10,20,97,67)

// Destructuring object
var{nm,dept}=obj1;
console.log(nm,dept)

// Arrow Function 
// function fn1(){
//     console.log("normal function")
// }
const fn1=()=>{
    console.log("Arrow function")
}
fn1();
var arr=[100,200,300,400]
// arr.forEach(function(element,indexed){
//     console.log(indexed,element)
// })
arr.forEach((element,indexed)=>{
    console.log(indexed,element)
})
// Promise object
var result=new Promise((resolve,reject)=>{
    var marks=25;
    if (marks>50)  resolve("pass")    
    else           reject("fail")
})
result.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})
// Asynchronus operation
var delayedmsg=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("message delayed for 5 sec")
    },5000)
})
delayedmsg.then((res)=>{
    console.log(res);
})