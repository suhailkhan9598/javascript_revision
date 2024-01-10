// *
// **
// ***
// ****
// *****
// num=5

// for (let row = 0; row <= 5; row++) {

//     let bag = "";
//     for (let col = 1; col <= row; col++) {
//         bag = bag + "*" + " "
//     }
//     console.log(bag)

// }
// ****************//

// for (let i = 0; i <= 5; i++) {

//     let bag = "";
//     for (let j = 1; j <= 5 - i; j++) {
//         bag=bag+"*"+" "
//     }
//     console.log(bag)

// }
let num = 19;
for (let i = 1; i <= num; i++) {
    let bag = "";
    for (let j = 1; j <= num; j++) {
        if (j == Math.ceil(num / 2)) {
            bag = bag + "#";

        } else if (i == 1) {
            bag = bag + "*"
        }
        else {
            bag = bag + " "
        }
    }

    console.log(bag);
}
