

function checkscope () {
    let a = 20;
    var b = 30;
    const c = 40;

    if (a == 10) {
        let a = 50;
        a = 100;
        var b = 60;
        const c = 70
        console.log("from block scope" + " " + a, b, c)
    }
    var b = 100
    console.log(a, b, c, "from functional scope")

}
checkscope()

let x = "hello world" ///srting
let y = 342
let z = true
let a = null
let b;
let obj1={
    name:"manjeet"
}
let obj2 = {
    name: "manjeet"
}
console.log(typeof obj1, typeof obj2)
console.log(obj1,obj2)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(typeof a)
console.log(typeof b)