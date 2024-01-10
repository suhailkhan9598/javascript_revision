// let sum = 0
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {//number check
//         if (i == 6) {
//             // console.log(i,"from 5")
//             continue
//         }

//         sum = sum + i
//         console.log(i)
//     }
// }
// console.log(`sum is ${sum}`);

// let bag = "";
// let bag1 = "";
// let arr = "hellosir";

// for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === "a"||arr[i]=="i"||arr[i]=="e"||arr[i]=="o") {
//         bag = bag +arr[i]+" "

//     }
//     else {
//         bag1=bag1+arr[i]+" "
//     }
// }
// console.log(bag);
// console.log(bag1);


// let count = 0;
// let sum = 0;
// let num = 40
// for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//         count++
//         sum = sum + i
//         if (count == 5) {
//             break;
//         }
// }
// }
// console.log(sum)
// for (let i = 1; i <= 2; i++) {
//     let bag = "";
//     for (var j = 1; j <= 3; j++) {
//         bag = bag + "Hello ";
//         console.log(bag, "inside loop");
//     }
// }
// console.log(bag,"updated value of outside inner loop")
// console.log(bag, "outside loop");

// for (var father = 1; father <= 8; father++) {
//     for (var son = 1; son <= 10; son++) {
//         console.log("Father count", father, ",Son completed ", son);
//     }
//     console.log("father outside of loop",father)
// }


// for (let father = 1; father <= 5; father++) {
//     let bag = "";
//     for (let son = 1; son <= 5; son++) {
//         bag = bag + "*"+" "
//     }

//     console.log("Field", father, bag);
// }
// for (let father = 1; father <= 5; father++) {
//     let bag = "";
//     for (let son = 1; son <= father; son++) {
//         bag = bag + "* ";
//     }
//     console.log(bag);
// }

// for (let father = 5; father >= 1; father--) {
//     let bag = "";

//     for (let son = 1; son <= father; son++) {
//         bag = bag + son + " ";
//     }
//     console.log(bag);
// }
for (var father = 1; father <= 5; father++) {
    var bag = "";
    for (var son = 1; son <= father; son++) {
        bag = bag + son + " ";
    }
    console.log(bag);
}

// for (var father = 4; father >= 1; father--) {
//     var bag = "";
//     for (var son = 1; son <= father; son++) {
//         bag = bag + son + " ";
//     }
//     console.log(bag);
// }

for (let i = 5; i >=1 ; i--) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5