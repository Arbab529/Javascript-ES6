var promise = new Promise(function (resolve, reject) {
    var zinger = "available"
    if (zinger) {
        setTimeout(() => {
            resolve("Yes Available")
        }, 5000);
    } else {
        reject("Not Available")
    }
})
// setTimeout(function () {
//     console.log(promise)
// }, 1000)

promise.then(function (data) {
    console.log(data)
})
    .catch(function (error) {
        console.log(error)
    })
