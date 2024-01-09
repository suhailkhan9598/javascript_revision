let sum = 0
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {//number check
        if (i == 6) {
            // console.log(i,"from 5")
            continue
        }

        sum = sum + i
        console.log(i)
    }
}
console.log(`sum is ${sum}`);