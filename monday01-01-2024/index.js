

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
