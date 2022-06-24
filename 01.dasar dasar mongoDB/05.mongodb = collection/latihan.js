// collection

/*

dimateri kali ini kita akan membahas mengenai collection 
pada mongodb

apa itu collection 
jadi collection itu adalah tempat penyimpanan documentnya 

nah untuk maximun document yang dapat disimpan adalah 16gb
dan maximum embeded documentnya itu adalah 100 level

tapi disarankan cume 3 kedalaman saja pada documentnya


database method untuk collectons

db.getCollectionNames()
mengambil semua nama collection

> use universitas
switched to db universitas
> db.getCollectionNames()
[ "mahasiswa" ]
>

db.createCollection(name)
membuat collection

> db.createCollection('dosen')
{ "ok" : 1 }
> db.getCollectionNames()
[ "dosen", "mahasiswa" ]
>

db.getCollectionInfos()
mendapatkan semua informasi collection



method method pada  object collection

https://docs.mongodb.com/manual/reference/method/js-collection/

kita coba beberapa ya

db.collection.find() / db.collection.find().pretty()
menampilkan semua document pada collection

db.collection.count()
mengambil jumlah semua document

db.collection.drop()
menghapus collection

db.collection.totalSize()
menampilkan ukuran dari collection

db.collection.stats()
mengatahui statistik dari collection



nah sekarang kalian buat dulu database yang namanya
ecommerce

dan buat beberapa collection yaitu
product, customer, dan orders

nanti kita akan coba memanipulasi data 
inser update delete dimateri materi selanjutnya

untuk product customer dan orders







*/