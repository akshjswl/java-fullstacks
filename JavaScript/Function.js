// normal function
function fn1(){
    console.log("Normal function")
}
fn1()
// parameterized function 
function fn2(x,y){
    console.log(x,y)
}
fn2(10,20)
// function with return 
function fn3(x,y){
    return x+y
}
var res=fn3(25,65)
console.log(res)

// anonymous function
function fn4(f){
    f();
    console.log(f);
}
fn4(function(){
    var state='wb'
    console.log(state)
})

// Higher order and Callback function


// function Expression
var result=function(){
    console.log("hello")
}
result()