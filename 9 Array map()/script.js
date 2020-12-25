let array = [1, 2, 3, 4, 5];
let newArr = array.map((item) => {
    return item * 2;
})
console.log(newArr)


// let promise = new Promise(function (resolve, reject) {
//     var x = 5;
//     if (x === 5) {
//         resolve("True")
//     }
//     else {
//         reject("False")
//     }
// })
// promise.then(function (data) {
//     console.log(data);
// })
//     .catch(function (error) {
//         console.log(error)
//     })