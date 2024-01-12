
// let arr = [1, 2, 3, 4]
// let newarr = arr.forEach(function(value){
//     console.log(value)
//     return value+1
// })
// console.log(newarr,"line-6")
// Example array of numbers
// let a=numbers.forEach(function (value,index) {
//     console.log(value*2 +"-"+index);

// });

// numbers.forEach(number => console.log(number));

// let a = numbers.map((ele,index)=>{
//     console.log(ele,index)
//     return ele+1
// })
// console.log(a)


// let a = numbers.filter(function (value1,value2) {
//     console.log(value1,value2)
//     return value1>2
// })

const numbers = [1, 2, 3,2];
let newdata = numbers.reduce(function (value1, value2) {
    return value1 + value2*value1
})
console.log(newdata);