// 1. Reverse
let myArr = ["Sandi", "Wiryamanto", "Ragil"];
myArr.reverse();
console.log(myArr.join());

// 2. Sort
let nama = ["Zainal", "Hendra", "Genta", "Affa", "Raya", "Bara"]
nama.sort();
console.log(nama.join())

// 3. Concat
var kataPertama = "Raya";
var kataKedua = "Genta";
var kataKetiga = "Hana";
var kataKeempat = "Firly";

console.log(kataPertama, kataKedua, kataKetiga.concat(" ", kataKeempat));

// 4. Splice
let hewan = ["buaya", "kelinci", "kucing", "tikus"]
hewan.splice(2, 0, "jerapah", "kuda");
console.log(hewan.join());

// 5. Repeat
const hai = 'Selamat belajar '
let say = hai.repeat(10)
console.log(say);

// 6. Push
let realName = ["Ragil", "Wiryamanto", "Sandilata", "Mausadi"]
realName.push("Firjatullah")
console.log(realName.join());

// 7. Pop
let movie = ["Sanchi", "No Way Home", "Red Notice", "Narnia", "Karate kid"]
movie.pop()
console.log(movie.join());

// 8. Shift
let brand = ["Lenovo", "Asus", "Hp", "Samsung"]
brand.unshift("Dell")
console.log(brand.join())

// 9. Replace
const buah = 'melon jeruk apel nanas leci'
console.log(buah.replace('apel', 'anggur'));

// 10. Slice
let arr1 = [1, 2, 3, 4, "a", "b", "c", "d"];

//slice dari index ke 2 sampai 4
let arr2 = arr1.slice(2, 4)
console.log(arr2.toString());