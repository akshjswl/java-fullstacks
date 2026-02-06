var product={
    pid:'P1',
    pname:'Tv',
    pqty:5,
    price: 25000.00
}
console.log(product.pid,product.pname,product.pqty,product.price)
//Add element into an object
product.company='Sony';
console.log(product.pid,product.pname,product.pqty,product.price,product.company)
//delete any component
delete product.company;
console.log(product)
//nested object
var Employee={
    eid:1,
    ename:'Ajay',
    address:{
        plotno: 144,
        streetnm: "Gandhi nagar",
        area:{
            ps:"Bokaro",
            dist:"Barshop"
        }
    }
}
console.log(Employee.eid,Employee.ename,Employee.address.area.ps)
// console.log(Employee)