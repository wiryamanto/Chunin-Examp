const hasil = (nilai) => {
    let check = 0;
    for (let i = 0; i < nilai.length; i++) {
        if (typeof(nilai[i]) === "number") {
            check += 1
        } else {
            check += 0
        }
    }
    if (nilai.length === 4 && check === 4) {
        let nilaiAkhir = nilai.reduce((a, b) => a + b) / 4
        if (nilaiAkhir <= 100 && nilaiAkhir >= 90) {
            return `Grade anda A dengan hasil nilai ${nilaiAkhir}`
        } else if (nilaiAkhir <= 89 && nilaiAkhir >= 80) {
            return `Grade anda B dengan hasil nilai ${nilaiAkhir}`
        } else if (nilaiAkhir <= 79 && nilaiAkhir >= 70) {
            return `Grade anda C dengan hasil nilai ${nilaiAkhir}`
        } else if (nilaiAkhir <= 69 && nilaiAkhir >= 60) {
            return `Grade anda D dengan hasil nilai ${nilaiAkhir}`
        } else {
            return `Grade anda E dengan hasil nilai ${nilaiAkhir}`
        }
    }
}
console.log(hasil([90, 80, 65, 74]));