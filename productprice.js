const products = [
    {productID : 1, productName : "p1", productPrice : 300},
    {productID : 2, productName : "p2", productPrice : 3000},
    {productID : 3, productName : "p3", productPrice : 200},
    {productID : 4, productName : "p4", productPrice : 8000},
    {productID : 5, productName : "p5", productPrice : 500},
]
 
// lowToHigh
//test
const lowToHigh = products.slice(0).sort((a,b) => {
    return a.productPrice - b.productPrice
})
console.log(lowToHigh)
