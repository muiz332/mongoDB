// $out 

/* 

$out: Menuliskan result dokumen menjadi sebuah collection baru

nah $out ini harus kalian tulis pada saat stage terakhir
pada aggregateion pipelines ya

kalo kita jalankan maka dia akan membuat collection baru 
secara otomatis jika collectionnya belum ada

misalkan kita grup dulu lalu kita masukkan kedalam collection
kita coba

db.persons.aggregate([
    {$group : {_id : {name : "$name",age : "$age",eyeColor : "$eyeColor"}}},
    {$out : "orang_orang"}
])

kalo kita jalankan dia akan membuat collection baru
jika nama collectionnnya tidak ada

 db.orang_orang.find()
{ "_id" : { "name" : "Anastasia Blake", "age" : 40, "eyeColor" : "brown" } }
{ "_id" : { "name" : "Kitty Snow", "age" : 38, "eyeColor" : "blue" } }
{ "_id" : { "name" : "Hays Wise", "age" : 24, "eyeColor" : "green" } }
{ "_id" : { "name" : "Carmella Morse", "age" : 39, "eyeColor" : "green" } }
{ "_id" : { "name" : "Karyn Rhodes", "age" : 39, "eyeColor" : "green" } }
{ "_id" : { "name" : "Aurelia Gonzales", "age" : 20, "eyeColor" : "green" } }
{ "_id" : { "name" : "Grace Larson", "age" : 20, "eyeColor" : "blue" } }
{ "_id" : { "name" : "Alison Farmer", "age" : 33, "eyeColor" : "brown" } }
>

jadi begitu penggunaan dari $out




















*/