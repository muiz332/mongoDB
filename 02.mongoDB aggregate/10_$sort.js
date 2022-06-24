// %sort

/* 


nah kali ini kita akan belajar mengenai $sort
biasanya digunakan untuk mengurutkan setelah stage match dan group

sintax

db.persons.aggregate([
    {$sort : {name : 1}}
])


untuk 1 itu ascending dan untuk -1 itu descending
kita coba

kalo kita jalankan maka dia akan mengurutkan semua document
nah sintax ini sama dengan

db.persons.find().sort()


atau kalian juga bisa menggabungkan kebeberapa stage

db.persons.aggregate([
    {$match : {eyeColor : "blue"}},
    {$group : {_id : {nama : "$name",umur : "$age"}}},
    {$sort : {name : -1}}
])


kalo kita jalankan hasilnya
{ "_id" : { "nama" : "Grace Larson", "umur" : 20 } }
{ "_id" : { "nama" : "Kitty Snow", "umur" : 38 } }

atau kalian juga bisa mengurutkan dua field
jika field pertama itu nilainya ada yang sama 
maka dia akan mengurutkan dengan field berikutnya

kalian cukup tulis

db.persons.aggregate([
    {$match : {eyeColor : "blue"}},
    {$group : {_id : {nama : "$name",umur : "$age"}}},
    {$sort : {"_id.nama" : 1, "_id.umur" : 1}}
])


maka akan tampil

{ "_id" : { "nama" : "Grace Larson", "umur" : 20 } }
{ "_id" : { "nama" : "Kitty Snow", "umur" : 38 } }






























*/