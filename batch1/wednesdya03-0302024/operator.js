
// let a = 10;
// let b = 1500;
// let c = 200;
// let d = 50;


// if (a > b) {
//     if (a > c) {
//         if (a > d) {
//             console.log("A")
//         }
//     }
// } if (b > a) {
//     if (b > c) {
//         if (b > d) {
//             console.log("B")
//         }
//     }
// } if (c > a) {
//     if (c > b) {
//         if (c > d) {
//             console.log("C")
//         }
//     }
// } if (d > a) {
//     if (d > b) {
//         if (d > c) {
//             console.log("D")
//         }
//     }
// }



// let variable = "B";

// switch (variable) {
//     case "A":
//         console.log("A is selected");
//         break;
//     case "B":
//         console.log("B is selected");
//         break;
//     case "C":
//         console.log("C is selected");
//         break;
//     case "D":
//         console.log("D is selected");
//         break;
//     default:
//         console.log("Invalid selection");
// }

//way two

// let data = "D"
// switch (data) {
//     case "A":
//     case "B":
//     case "C":
//     case "D":
//         console.log(`${data} is Selected`)
//         break;
//     default:
//         console.log("Invailed Value")
// }


// Write a program that calculates the Body Mass Index(BMI) and categorizes it.The formula for BMI is: weight / (height * height).

//print







// Underweight category BMI ===20-30
// Normal weight category BMI ==31-40
// Over weight category BMI  above==41
// default condition you are Obese
let weight = 700;
let height = 5;
let bmi = weight / (height * height);
let cat;
if (bmi >= 20 && bmi <= 30) {
    cat = "normal weight"
    console.log(`Category is ${cat} and bmi is ${bmi}`);
} else if (bmi >= 31 && bmi <= 40) {
    cat = "underweight"
    console.log(`Category is ${cat} and bmi is ${bmi}`);


} else {
    console.log("obese")
}



// let weight = 30;
// let height = 2;
// let bmi = weight / (height * height);

// if (bmi >= 20 && bmi <= 30) {
//     console.log("you are underweight category");
// } else if (bmi >= 31 && bmi <= 40) {
//     console.log("you are overweight category");
// } else {
//     console.log("obese");
// }
