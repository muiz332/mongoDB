// accumulator

/* 

dimateri kali ini kita akan belajar mengenai accumulator
accumulator adalah operasi perhitungan

beberapa operasi accumulator

$sum: Ini menjumlahkan nilai numerik untuk dokumen di setiap grup
$count: Ini menghitung jumlah total dokumen
$avg: Ini menghitung rata-rata semua nilai yang diberikan dari semua dokumen
$min: Ini mendapat nilai minimum dari semua dokumen
$max: Ini mendapat nilai maksimum dari semua dokumen
$pertama: Ia mendapat dokumen pertama dari pengelompokan
$terakhir: Ia mendapat dokumen terakhir dari pengelompokan

accumulator sintax

db.persons.aggregate([
    { field : {$accumulator : "increment dari angka berapa"}}
])


contoh

db.persons.aggregate(([
    {
        $group : {
            _id : "$age",
            jumlah : {$sum : 2}
        }
    }
]))

jadi kita harus menggabungkannya dengan $group ya
untuk bisa mengetahui mana nilai yang duplikat dan akan dihitung 

kalo kita jalankan hasilnya 

{ "_id" : 38, "jumlah" : 1 }
{ "_id" : 20, "jumlah" : 2 }
{ "_id" : 24, "jumlah" : 1 }
{ "_id" : 33, "jumlah" : 1 }
{ "_id" : 40, "jumlah" : 1 }
{ "_id" : 39, "jumlah" : 2 }

jadi age dengan nilai 39 ini kalo kita cari ada 2 document
yang memiliki age 2

maka kalo kita sum nilainya 2 
meskipun kita gruop maka akan kelihatan

atau kalian juga bisa mengelompokan nilai yang ada didalam array 
jadi kalian bisa menggunakan unwind untuk memecah nilai yang ada
didalam array menjadi single value

contoh

db.persons.aggregate([
    {
        $unwind : "$tags"
    },
    {
        $group : {
            _id : "$tags",
            jumlah : {$sum : 1}
        }
    }
])

kalo kita jalankan maka hasilnya sepert ini

{ "_id" : "voluptate", "jumlah" : 1 }
{ "_id" : "ipsum", "jumlah" : 1 }
{ "_id" : "consequat", "jumlah" : 4 }
{ "_id" : "exercitation", "jumlah" : 1 }
{ "_id" : "et", "jumlah" : 1 }
{ "_id" : "Lorem", "jumlah" : 1 }
{ "_id" : "ut", "jumlah" : 1 }
{ "_id" : "duis", "jumlah" : 1 }
{ "_id" : "dolor", "jumlah" : 1 }
{ "_id" : "enim", "jumlah" : 1 }
{ "_id" : "ad", "jumlah" : 2 }
{ "_id" : "cillum", "jumlah" : 2 }
{ "_id" : "elit", "jumlah" : 1 }
{ "_id" : "amet", "jumlah" : 2 }
{ "_id" : "excepteur", "jumlah" : 1 }
{ "_id" : "fugiat", "jumlah" : 1 }
{ "_id" : "pariatur", "jumlah" : 1 }
{ "_id" : "labore", "jumlah" : 1 }
{ "_id" : "velit", "jumlah" : 1 }
{ "_id" : "id", "jumlah" : 1 }
Type "it" for more
> it
{ "_id" : "ex", "jumlah" : 1 }
{ "_id" : "deserunt", "jumlah" : 1 }
{ "_id" : "minim", "jumlah" : 1 }



jadi harusnya ada dua buah tags dengna value ad



















*/