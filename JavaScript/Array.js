var arr=[100,200,300,400]
console.log(arr)
console.log(typeof arr)
//add element
arr.push(500)
console.log(arr)
//delete 
arr.pop()
console.log(arr)
//add ele to first
arr.unshift(54)
console.log(arr)
// delete first
arr.shift()
console.log(arr)
// delete from specific
arr.splice(2,1)
console.log(arr)
// add element in specific pos
arr.splice(3,0,300)
console.log(arr)
// for each
arr.forEach(function(element,indexed){
    console.log(indexed,element)
})
//map
var newarr=arr.map(function(element, index){
    return element *10
})
console.log(newarr)
//filter
var newarr1=arr.filter(function(element, index){
    return element>100;
})
console.log(newarr1)