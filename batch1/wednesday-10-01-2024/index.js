// for (let i = 1; i <=5; i++){
//     let bag = ""
//     for (let j = 0; j < 10; j++){
//         bag=bag+"*"+" "
//     }
//     console.log("field-",i,bag)
// }
let num = 10;
for (let row = 1; row <= num; row++) {
    let bag = "";
    for (let colo = 1; colo <= num; colo++) {
        if (row == 1 || row == num) {
            bag = bag + "*";
        }
        else if (colo == 1 || colo == num) {
            bag = bag + "*"
        }
        else {
            bag = bag + "-"
        }
    }

    console.log(bag);
}