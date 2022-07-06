# Anak Soal 2
### Apakah perbedaan antara percabangan if-else dengan switch-case? Berikan contohnya dalam bentuk code sederhana!

* definisi : 
    - if-else -> Percabangan if/else merupakan percabangan yang memiliki dua blok pilihan, Pilihan pertama untuk kondisi benar, dan pilihan kedua untuk kondisi salah (else).
    - switch-case -> adalah bentuk lain dari percabangan if-else
    
* Perbedaan paling jelas pada pengkondisian if-else dan switch-case adalah : 
        - if-else digunakan untuk pengkondisian yang tidak terlalu kompleks dengan kata lain kondisi tersebut belum pasti, yang mana proses tersebut dilakukan pada block **else**, atau akan melakukan pengecekan kondisi yang melakukan operasi aritmatika.
        - Sedangkan switch-case sendiri merupakan pengkondisian yang memiliki kondisi pasti dan jumlah kondisi yang sedikit.


* Contoh if-else:
```
  let plugin = 15;
if(plugin % 2 === 0){
    console.log(plugin +" adalah bilangan genap");
}else{
    console.log(plugin+" adalah bilangan ganjil");
}
```

* Contoh switch-case:
```
    let warna = prompt('')
switch (warna) {
    case 'Merah':
        console.log('Warna Primer 1');
        break;
    case 'Kuning':
        console.log('Warna Primer 2');
        break;
    case 'Biru':
        console.log('Warna Primer 3');
        break;
    default:
        console.log('selain warna diatas adalah bukan warna Primer! ');
        break;
}
```
    