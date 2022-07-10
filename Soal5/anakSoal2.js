const newString = (words) => {
    let test = [...words];
    let data = test.filter((item, index) => test.indexOf(item) === index).sort().join('');

    console.log(data);
}

console.log(newString('pluginsangatkerensekali'))