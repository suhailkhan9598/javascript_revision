//     *
//    **
//   ***
//  ****
// *****

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5 - i; j++) {
//         row += "-";
//     }
//     for (let k = 1; k <= i; k++) {
//         row += "*";
//     }
//     console.log(row);
// }
// for (let i = 5; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= 5 - i; j++) {
//         row += "-";
//     }
//     for (let k = 1; k <= i; k++) {
//         row += "*";
//     }
//     console.log(row);
// }
// *****
// -****
// --***
// ---**
// ----*
// ****************
//     *
//    ***
//   *****
//  *******
// *********
// for (let i = 1; i <= 3; i++) {
//     let row = "";
//     for (let j = 1; j <= 3 - i; j++) {
//         row += "-";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += "*";
//     }
//     console.log(row);
// }


// P
const pPattern = [
    '**** ',
    '*   *',
    '*   *',
    '**** ',
    '*    ',
    '*    ',
];

// R
const rPattern = [
    '**** ',
    '*   *',
    '*   *',
    '**** ',
    '* *  ',
    '*  * ',
];

// E
const ePattern = [
    '*****',
    '*    ',
    
    '*****',
    '*    ',
    '*    ',
    '*    ',
    '*****',
    '     ',
];


// T
const tPattern = [
    '*****',
    '  *  ',
    '  *  ',
    '  *  ',
    '  *  ',
    '  *  ',
];

// U
const uPattern = [

    '*     *',
    '*     *',
    '*     *',
    '*     *',
    '*     *',
    '*******',
    '       ',
];

// Function to print patterns horizontally
function printHorizontalPatterns (pattern1, pattern2, pattern3, pattern4, pattern5) {
    for (let i = 0; i < pattern1.length; i++) {
        console.log(pattern1[i] + ' ' + "  " + pattern2[i] + ' ' + "  " + pattern3[i] + ' ' + "  " + pattern3[i] + ' ' + "  " + pattern4[i] + ' ' + "  " + pattern5[i]);
    }
}

// Print the letters horizontally
printHorizontalPatterns(pPattern, rPattern, ePattern, tPattern, uPattern);


