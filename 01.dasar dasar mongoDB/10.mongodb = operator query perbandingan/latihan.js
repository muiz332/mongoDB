// comparation query operator atau operator perbandingan pada query


/*

dimateri kali ini kita akan membahas mengenai compration query 
pada mongodb

sebelumnya kita sudah bahas mengenai query
tapi itu yang sederhana dimana dia hanya mencari berdasarkan
fildnya saja 

disini kita akan mencoba operator perbandingan pada mongodb
seperti disql dia ada operator perbandingannya

didalam mongodb dia sudah mensupport operator tersebut



operator comparation / operator perbandingan
-------------------------------------------------------------------
$eq  = sama dengan 
-------------------------------------------------------------------
$ne = tidak sama dengan
-------------------------------------------------------------------
$gt = lebih besar dari
-------------------------------------------------------------------
$gte = lebih besar sama dengan 
-------------------------------------------------------------------
$lt = lebih kecil dari
-------------------------------------------------------------------
$lte = lebih kecil sama dengan
-------------------------------------------------------------------
$in = membandingkan dengan value yang ada didalam array 
-------------------------------------------------------------------
$nin = membandingkan dengan value yang tidak ada didalam array
-------------------------------------------------------------------

db.products.insertMany([
    {
        _id: 3,
        name: "Pop Mie Rasa Bakso",
        price: new NumberLong(2500),
        category: "food"
    },
    {
        _id: 4,
        name: "Samsung Galaxy S9+",
        price: new NumberLong(10000000),
        category: "handphone"
    },
    {
        _id: 5,
        name: "Acer Precator XXI",
        price: new NumberLong(25000000),
        category: "laptop"
    }
]);


nah terus bagaimana cara kita menggunakan 
operator comparation ini 

sintax

db.collction.find({fild : {oprator : 'value'}})

jadi didalam fild itu ada object lagi 
yang isinya operator dan valuenya

kita coba ya



- sama dengan / $eq

selec * product where name = 'mie sedap'

> db.product.find({name : {$eq : 'mie sedap'}})
{ "_id" : 2, "name" : "mie sedap", "price" : NumberLong(2000) }

untuk sama dengan itu sebenarnya
sama seperti ini 

> db.product.find({nama : 'mie sedap'})
{ "_id" : 2, "name" : "mie sedap", "price" : NumberLong(2000) }




- tidak sama dengan / $ne

select * product where name <> 'mie sedap'

db.product.find({name : {$ne : 'mie sedap'}})
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000), "category" : "handphone" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(2500), "category" : "laptop" }
{ "_id" : 1, "name" : "indomie ayam bawang", "price" : NumberLong(2000) }


- lebih besar dari / $gt

select * product where price > 2500

> db.product.find({price : {$gt : 2500}})
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000), "category" : "handphone" }


- lebih besar sama dengan / $gte

select * product where price >= 2500

> db.product.find({price : {$gte : 2500}})
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000), "category" : "handphone" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(2500), "category" : "laptop" }
>                                                                                                                                


- lebih kecil dari / $lt

select * product where price < 2500

db.product.find({price : {$lt : 2500}})
{ "_id" : 1, "nama" : "indomie ayam bawang", "price" : NumberLong(2000) }
{ "_id" : 2, "nama" : "mie sedap", "price" : NumberLong(2000) }


- lebih kecil sama dengan / $lte

select * product where price <= 2500

 db.product.find({price : {$lte : 2500}})
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(2500), "category" : "laptop" }
{ "_id" : 1, "nama" : "indomie ayam bawang", "price" : NumberLong(2000) }
{ "_id" : 2, "nama" : "mie sedap", "price" : NumberLong(2000) }




- membandingan value didalam array / $in

select * product where name in (''Mie Sedap','Pop Mie Rasa Bakso')


 db.product.find({name : {$in : ['Mie Sedap','Pop Mie Rasa Bakso']}})
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000) }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }

jadi dia akan mencari value yang ada didalam array


- membandingkan value yang tidak ada didalam array / $nin

select * product where name not in (''Mie Sedap','Pop Mie Rasa Bakso')

db.product.find({name : {$nin : ['Mie Sedap','Pop Mie Rasa Bakso']}})
{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000) }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop" }




- gabungan $in dan $gte

select * product where name in (''Mie Sedap','Pop Mie Rasa Bakso') and price >= 2500

db.product.find({name : {$in : ['Mie Sedap','Pop Mie Rasa Bakso']}, price : {$gte : 2500}})
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }


jadi ini bacanya saya ingin mencar name yang valuenya ada didalam array
dan pricenya lebih kecil sama dengan 2500


nah jadi seperti itu penggunaan query comparation 
jadi sederhana sekali

cukup masukkan nama fildnya apa lalu titik dua objectnya
dan ada operator dan valuenya 



*/