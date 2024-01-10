// *
// **
// ***
// ****
// *****
num=5
for (let row = 0; row <= num; row++){

    let bag = "";
    for (let col = 1; col <= num-row; col++){
        bag=bag+"*"+" "
    }
    console.log(bag)

}