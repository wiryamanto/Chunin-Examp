# Anak Soal 5.6
### Jelaskan apa yang kalian tahu mengenai Database, berikan contoh 5 query yang kalian tau. Jelaskan apa yang di maksud dengan Framwork, lalu apa perbedannya Framework dengan Library, dan berikan 7 contoh Framework Javascript yang kalian tahu. Jelaskan perbedaan antara FrontEnd dan Backend menurut pendapat kalian.

- Jelaskan apa yang kalian tahu mengenai Database, berikan contoh 5 query yang kalian tau.

``` 
Database adalah sekumpulan data yang disimpan secara sistematis di dalam komputer yang dapat diolah atau dimanipulasi untuk menghasilkan suatu infomasi

Contoh query :

 - select * from user -> untuk menampilkan semua data yang ada di tabel tersebut
        - insert into user values (1, 'ragil', 'pemalang') -> untuk memasukan data ke table
        - delete from user where id = 1 -> untuk menghapus data dari tabel
        - select * from user join dosen on user.dsn_wali = dosen.id -> untuk mengabungkan 2 buah tabel
        - select * from user where nama like = '%a%' -> untuk mencari nama yang mengandung huruf a

```

- Jelaskan apa yang di maksud dengan Framwork, lalu apa perbedannya Framework dengan Library, dan berikan 7 contoh Framework Javascript yang kalian tahu

```
Framework adalah sebuah kerangka yang dibuat untuk mempermudah developer dalam membuat suatu aplikasi

Perbedaan Framework dan Library:
Secara definisi library dapat diartikan sebagai kumpulan kode program yang telah di tulis oleh orang lain atau team tertentu, sehingga kita hanya perlu menggunakannya saja tanpa harus membuat dari awal. Sebuah library biasanya hanya berfokus pada satu bidang tugas tertentu saja, seperti menangani database atau URL saja.

Sedangkan framework adalah kumpulan dari library-library yang kita butuhkan untuk membangun sebuah aplikasi dan aturan-aturan tentang bagaimana cara kita untuk mengintegrasikan library yang digunakan, agar dapat berjalan secara efisien.

```

- Jelaskan perbedaan antara FrontEnd dan Backend menurut pendapat kalian.

    ```
        FrontEnd adalah bagian yang mengembangkan tampilan dari aplikasi dan mengola data dari Backend
        Backend adalah bagian yang mengola data dari database dan request dari user lalu dikirim ke FrontEnd
    ```