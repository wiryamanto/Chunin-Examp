# Anak Soal 3.2
### Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5. Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke layar/console.

- diatas ada dua function function urutkan yang menerima 4 parameter yaitu nilai awal, nilai akhir, data array, dan callback function.
  - function urutkan memiliki beberapa validasi seperti di pengondisian pertama, jika nilai awal harus lebih kecil dari nilai akhir dan panjang data array harus lebih dari 5.
  - dan function urutkan akan mengecek lagi apa apakah nilai awal dan nilai akhir ada pada data array atau tidak. jika ada pada data array maka akan melakukan callback function pada function find.
  - dan function find akan menerima 3 parameter yaitu nilaiAwal, nilaiAkhir dan dataArray.
  - kemudian buat variabel kosong untuk menanmpung data diantara nilai awal dan nilai akhir
  - lalu kita lakukan pengulangan untuk mencari nilai yang lebih besar dari nilai awal dan nilia yang lebih kecil dari nilai akhir. jika ada maka nilai akan dimasukan ke dalam variabel get.
  - dan jika sudah terkumpul maka akan di urutkan dengan method sort.