// let a = 10;
// let b = 5;
// let c = 20;
// if (a < b || a> c) {
//     console.log("posible-5")
// } else if (b > a || b < c) {
//     console.log("posible-7")
// } else {
//     console.log("not possible")
// }

const getData = () => {
    try {
        let res = axios.get("https://fakestoreapi.com/products")
        console.log(res)
        // setData(res.data)
    } catch (error) {
console.log(error)
    }
}
getData()