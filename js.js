let fibonacci = [0, 1]
let getResult = prompt(`write num`)
for (i = 2; i < getResult; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
console.log(arr.splice(0, getResult));
