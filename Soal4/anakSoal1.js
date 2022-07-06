const promise1 = new Promise((resolve, reject) => {
    let maxAntre = 25;
    let noAntre = 20;

    if (maxAntre >= noAntre) {
        resolve("anda bisa check kesehatan anda");
    } else {
        reject("anda tidak bisa check kesehatan anda")
    }
})

promise1.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

const promise2 = new Promise((resolve, reject) => {
    let pedas = "sakit perut"

    if (pedas === "sakit perut") {
        resolve("anda harus minum obat sakit perut");
    } else {
        reject("anda perlu menjaga kesehatan anda")
    }
})

promise2.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})


const promise3 = new Promise((resolve, reject) => {
    let sehat = "senang"

    if (sehat === "senang") {
        resolve("anda bisa melakukan aktivitas dengan lancar");
    } else {
        reject("anda harus periksa dan menjaga pola makan anda")
    }
})

promise3.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
})