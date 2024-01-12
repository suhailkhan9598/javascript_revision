
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
let arr = [1, 2, 3]
// arr.forEach(function (currentValue, index, arr),2)
let a=[]
arr.forEach(function (value, index) {
    console.log(value*2 +"-"+index);
a.push(value*2)
});
console.log(a);