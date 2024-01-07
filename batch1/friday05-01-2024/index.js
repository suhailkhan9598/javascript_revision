// var i = 1;
// var sum = 0;
// while (i <= 10) {
//     sum = sum + i;
//     i++;
// }
// console.log(sum);


// let i=10;
// while (i!=0) {
//     console.log("hello from from suhail",i)
//     i--
// }

// var guest = 0;
// while (guest <= 10) {
//     console.log("Guest", guest);
//     if (guest == 3) {
//         break;
//     }
//     guest++
// }

// var count = 0;
// while (true) {
//     console.log("Hello");
//     count++;//1//2
//     console.log(count,"29")
//     ++count;//2==3
//     console.log(count,"31")

//     if (count > 5) {//false
//         break;
//     }
//     count--;//1 and again//0==2
//     console.log(count,"37")
// }



// let value = 0;
// while (value <= 10) {
//     console.log(`value is+" "+ ${value}`)
//     if (value == 5) {
//         continue
//     }
//     value++
// }

// var guest = 0;
// while (guest <= 10) {
//     if (guest == 3) {
//         // guest++;
//         continue;  // Skip the rest of the code for guest=3 and move to the next iteration
//     }
//     console.log("Guest", guest);
//     guest++;
// }

var guest = 0;
while (guest <= 10) {
    if (guest == 3) {
        guest++
        continue;
    }
    console.log("Guest", guest);
    guest++;
}

let sum = 0;
let i = 0;
while (i <= 10) {
    if(i%2!==0)
    sum = sum + i;
    i++
}
console.log(sum)
