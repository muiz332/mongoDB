// aggregate operations

/* 

mongodb memiliki dua jenis aggregate operations

- aggregation pipelines
- single purpose aggregation method

dua fungsi aggregation ini sangat berbeda
yang pertama kita bisa menghasilkan informasi yang baru sesuai dengan yang kita inginkan
yang kedua kita hanya memakai method yang diberikan oleh mongodb

1. aggregation pipelines 
    adalah sebuah operasi aggregation yang dapat kita gunakna untuk melakukan
    operasi aggregate sesuai dengan kebutuhan kita
    
    aggregateion pipelines terdiri lebih dari satu stage / langkah / proses
    setiap stage melakukan operasi terhadap document 

    jika stage yang pertama cocok maka akan diteruskan distage 
    berikutnya 


2. single purpose aggregation method
    adalah sebuah operasi aggregate yang menggabungkan semua document menjadi 
    satu informasi yang baru


*/