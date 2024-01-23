// // var data2 = {
// //     name: "Kaleen Bhaiyya",
// //     age: 45,
// //     gender: "male",
// //     city: "Mirzapur",
// //     hobbies: ["Making Guns","making fun"]
// // };
// // // for (let key in data2) {
// // //     console.log(key, " --- ", data2[key]);
// // // }
// // for (let value of data2) {
// //     console.log("   ", value);
// // }

// // Objects
// // var user2 = {
// //     name: "Rahul",
// //     age: 25,
// //     gender: "male",
// //     city: "Bangalore",
// //     hobbies: "coding",
// //     marks: [25, 100, 80, 90, 80],
// //     address: {
// //         state: "Uttarakhand",
// //         country: "india",
// //         district: "Dehradun",
// //         pincode: "249201"
// //     }
// // };
// //Bracket Notation
// // console.log(user["address"];
// // console.log(user["address"]["country"]);
// // console.log(user["address"]["pincode"]);
// // // Dot Notation

// // Objects 6
// // console.log(user.address.country);
// // console.log(user.address.pincode);
// // user2["hobbies"] =["cricket","singing","travelling","dancing","cool"]
// // console.log(user2);
// // console.log(user2.marks);

// let string = "Masai School";
// let bag = ""
// let bag2=""
// for (var i = 0; i < string.length; i++) {
//     if (string[i] === "a" || string[i] == "e"|| string[i] === "i" || string[i] == "o" || string[i] == "u") {
//         bag=bag+string[i]+" "

//     } else {
//         bag2=bag2+string[i]+" "
//     }
// }
// console.log(`the vowel is ${bag} and the consonant is ${bag2}`);
// var arr = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswald"];
// var count = 0;
// for (var i = 0; i < arr.length; i++) {
//     var name = arr[i];
//     for (var j = 0; j < arr.length; j++) {
//         if (arr[j] == 'a' || arr[j] == 'A') {
//             count++;
//             break;
//         }
//     }
// }
// console.log(count);


var arr = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswld"];
var count = 0;

for (var i = 0; i < arr.length; i++) {
    // var name = arr[i];

    for (var j = arr[i]; j < arr[i].length; j++) {
        if (arr[j] === 'a' || arr[j] === 'A') {
            count++;
            break; // Break once 'a' or 'A' is found in the current name
        }
    }
}

console.log(count);
