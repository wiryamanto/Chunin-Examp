const selisih = (n, a, b) => {
    let allData = a;
    let hasil = []

    hasil.push(allData)

    for (let i = 1; i < n; i++) {
        hasil.push(allData += b)
    }
    return hasil;
}

console.log(selisih(6, 2, 4));