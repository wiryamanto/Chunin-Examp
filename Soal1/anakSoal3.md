# Anak Soal 3

### Apakah yang dimaksud dengan function dan method dalam Javascript? Jelaskan perbedaannya! dan berikan contohnya dalam bentuk code sederhana

**definisi :** 
- function -> menurut saya function merupakan block perintah yang dibuat mirip seperti prosedur yang digunakan untuk memudahkan programmer dalam menghadapi suatu case. 
- method -> Method adalah fungsi yang merupakan properti dari suatu object.

    Perbedaan paling jelas pada function dan method adalah :
            - Suatu metode ada pada suatu object.
            - Fungsi tidak tergantung pada suatu object.
            - saat memanggil method biasanya kita melalui nama object itu sendiri.

```
function hello (nama){

    if(nama == undefined){
        console.log("Hello, World!");
    }else{
        if(nama.length == 0){
            console.log("Hello, World!");
        }else{
            let a = nama.charAt(0).toUpperCase() + nama.slice(1).toLowerCase();

            console.log(`Hello, ${a}!`);
        }
    }

        // console.log(nama);
}

```

```
hello("ragil"); // Ragil
hello("wIRYAMANTO") // Wiryamanto
hello(); // Hello World
hello("") Hello World
```
