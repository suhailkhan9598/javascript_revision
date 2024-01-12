
// var sum_marks = 0;
// for (var i = 0; i < subject_marks.length; i++) {
//     sum_marks = sum_marks + subject_marks[i];
// }
// var average =Math.floor(sum_marks / subject_marks.length);
// console.log("Total sum is ", sum_marks);
// console.log("Average is ", average);
// let arr = [1, 2, 3, 4, 5, 7, 70];
// let max;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= arr[i + 1]) {
//         max = arr[i]
//     }

// }
// console.log(max);

// function one(x) {
//     function two(y) {
//         return x+y
//     }
// }
// let a = two(6(4))
// console.log(a);
// function one (x) {
//     function two (y) {
//         return x + y;
//     }

//     return two;

// }console.log(one(6)(4));
// arr.forEach(function (currentValue, index, arr),2)
// let a=[]
// arr.forEach(function (value, index) {
//     console.log(value*2 +"-"+index);
// a.push(value*2)
// });
// console.log(a);



// arr.forEach((value, index) => {
//     console.log(value*index,index+1)
// })

// let arr = [1, 2, 3,4,5,6]
// let newarray = arr.map((value,index) => {
//     // console.log(value);
//     return value * 2+index
// })
// console.log(newarray);
// let arr = [{ name: "suhail" ,age:26}, {name:"suhail"},{ name: "manjeet" ,age:43}, { name: "sunil" }, { name: "ramu sir" }]
// let filderValue = arr.filter((value) => {
//     return value.age>=25

// })
// console.log(filderValue)

// const sortingData=() => {
//     let arr = [{ price: 35 }, { price: 30 }, { price: 34 }, { price: 31 }, { price: 20 }]
//     let sortValue = arr.sort((a, b) => {
//         return a.price - b.price
//     })
//     console.log(sortValue)

// }

let arr = [2, 3, 4,2,2]
let vpdatedValue = arr.reduce((value, value1) => {
    return value + value1 * 2
})
console.log(vpdatedValue)

// var numbers = [125, 20, 25, 30];

// document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

// function myFunc (total, num) {
//     return total - num;
// }