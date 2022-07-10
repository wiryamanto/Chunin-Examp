const pecahAngka = () => {
    const angka = 5643104614540314;
    if (typeof(angka) === "number" && String(angka).length >= 16) {
        const pemisah = angka.toString().split(0)
        let result = '';

        pemisah.map((response) => {
            return result = result + response.split('').sort((a, b) => {
                return a - b
            }).join('')
        })
        resultToInteger = parseInt(result)
        console.log(resultToInteger);
        angka
    } else {
        console.log("checking something wrong!")
    }
}

pecahAngka()