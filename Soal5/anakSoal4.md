# Anak Soal 5.4

### Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi terbalik. Misalnya kalimat “Saya cinta PLUGIN”, output “PLUGIN cinta Saya” tanpa menggunakan built-in function / method bawaan dari javascript

**Penjelasan:**

  - Pertama kita buat fungsi untuk membalikan kalimat dulu dengan nama dataSentence
  - dengan cara mengunakan for loop
  - dengan i = panjang nilai words yang di masukan dari parameter dikurangi 1
  - lalu jika i lebih besar sama dengan 0, maka i akan dikurangi 1
  - jika benar maka nilai akan dimasukan dan ditambah kedalam variabel string
  - lalu kita return value string
  - kemudian kita buat lagi pada fungsi kedua (reverseSentence) kita akan memisahkan kata dan mengurutkannya
  - nilai dari return value string kita masukan dalam variabel newString dengan callback function dari fungsi 1
  - lalu kita buat 2 variabel kosong yaitu tempString dan variabel result
  - lalu kita gunakan for loop untuk melakukan pemisahan spasi dan mengrutukannya
  - dengan i = 0 jika i < dari panjang value newString, maka i akan ditambah 1
  - kemudian akan masuk dalam validasi jika nilai index dari newString === ' ' maka nilai tempString akan dimasukan ke dalam result dan nilai dari tempString akan di hapus
  - jika nilai index newString bukan spasi makan nilai akan di masukan nilai index tersebut dan akan digabung dengan nilai tempString
  - for loop ini akan berlangsung sebanyak panjang dari value newString
  - lalu jika nilai tempString ada maka nilai result akan di tambah dengan nilai tempString
  - setelah itu baru kita return nilai result.
