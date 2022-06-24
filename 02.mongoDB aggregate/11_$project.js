// $project

/*

nah sekarang kita akan belajar mengenai $project
$project digunakan untuk membentuk ulang tiap tiap document

misalkan kita ingin menghilangkan field atau menambahkan field
baru yang itu hanya berlaku pada viewnya saja

kita coba

db.persons.aggregate([
    {$project : {_id: 0,name : 0,age : 0,gender: 0,idActive : 0,company: 0,registered : 0,tags : 0}}
])

kalo kita jalankan maka hasilnya seperti ini 


{ "index" : 0, "isActive" : false, "eyeColor" : "green", "favoriteFruit" : "banana" }
{ "index" : 1, "isActive" : false, "eyeColor" : "blue", "favoriteFruit" : "apple" }
{ "index" : 2, "isActive" : false, "eyeColor" : "green", "favoriteFruit" : "strawberry" }
{ "index" : 3, "isActive" : true, "eyeColor" : "green", "favoriteFruit" : "strawberry" }
{ "index" : 4, "isActive" : false, "eyeColor" : "brown", "favoriteFruit" : "banana" }
{ "index" : 5, "isActive" : true, "eyeColor" : "blue", "favoriteFruit" : "apple" }
{ "index" : 6, "isActive" : false, "eyeColor" : "green", "favoriteFruit" : "apple" }
{ "index" : 7, "isActive" : true, "eyeColor" : "brown", "favoriteFruit" : "strawberry" }





perlu kalian ingat bahwa jika kalian ingin menulis angka 0 artinya menyembunyikan fieldnya
maka kalian tidak boleh kombinasikan dengan angka 1 begitu pula sebaliknya

kecuali untuk field _id selain field itu tidak bisa dikombinasikan

db.persons.aggregate([
    {$project : {_id : 1 name : 0,age : 0,gender: 0,idActive : 0,company: 0,registered : 0,tags : 0}}
])

kalo kita jalankan 

{ "_id" : ObjectId("62add1152bb55f070b21230b"), "index" : 0, "isActive" : false, "eyeColor" : "green", "favoriteFruit" : "banana" }
{ "_id" : ObjectId("62add1152bb55f070b21230c"), "index" : 1, "isActive" : false, "eyeColor" : "blue", "favoriteFruit" : "apple" }
{ "_id" : ObjectId("62add1152bb55f070b21230d"), "index" : 2, "isActive" : false, "eyeColor" : "green", "favoriteFruit" : "strawberry" }
{ "_id" : ObjectId("62add1152bb55f070b21230e"), "index" : 3, "isActive" : true, "eyeColor" : "green", "favoriteFruit" : "strawberry" }
{ "_id" : ObjectId("62add1152bb55f070b21230f"), "index" : 4, "isActive" : false, "eyeColor" : "brown", "favoriteFruit" : "banana" }
{ "_id" : ObjectId("62add1152bb55f070b212310"), "index" : 5, "isActive" : true, "eyeColor" : "blue", "favoriteFruit" : "apple" }
{ "_id" : ObjectId("62add1152bb55f070b212311"), "index" : 6, "isActive" : false, "eyeColor" : "green", "favoriteFruit" : "apple" }
{ "_id" : ObjectId("62add1152bb55f070b212312"), "index" : 7, "isActive" : true, "eyeColor" : "brown", "favoriteFruit" : "strawberry" }


jadi ini mirip dengan operator projection 
dimana dia juga bisa menampilkan dan menyembunyikan field


atau kalian juga bisa menambahkan field baru

db.persons.aggregate([
    {$project : {
        _id : 1,
        name : 1,
        age : 1,
        lokasiku : "$company.location.country"
    }}
])

kalo kita jalankan maka akan tampil

{ "_id" : ObjectId("62add1152bb55f070b21230b"), "name" : "Aurelia Gonzales", "age" : 20, "lokasiku" : "USA" }
{ "_id" : ObjectId("62add1152bb55f070b21230c"), "name" : "Kitty Snow", "age" : 38, "lokasiku" : "Italy" }
{ "_id" : ObjectId("62add1152bb55f070b21230d"), "name" : "Hays Wise", "age" : 24, "lokasiku" : "France" }
{ "_id" : ObjectId("62add1152bb55f070b21230e"), "name" : "Karyn Rhodes", "age" : 39, "lokasiku" : "USA" }
{ "_id" : ObjectId("62add1152bb55f070b21230f"), "name" : "Alison Farmer", "age" : 33, "lokasiku" : "Italy" }
{ "_id" : ObjectId("62add1152bb55f070b212310"), "name" : "Grace Larson", "age" : 20, "lokasiku" : "USA" }
{ "_id" : ObjectId("62add1152bb55f070b212311"), "name" : "Carmella Morse", "age" : 39, "lokasiku" : "Germany" }
{ "_id" : ObjectId("62add1152bb55f070b212312"), "name" : "Anastasia Blake", "age" : 40, "lokasiku" : "Italy" }


nah kalian bebeas memodifikasi hasilnya 
kalian juga bisa mengisi value dari fieldnya itu berbentuk document lagi
seperti ini

db.persons.aggregate([
    {$project : {
        _id : 0,
        name : 1,
        age : 1,
        lokasiku : "$company.location.country",
        "ciri-ciri" : {
            mata : "$eyeColor",
            "jenis-kelamin" : "$gender",
            status : "$isActive"
        }
    }}
])

kalo kalian jalankan hasilnya seperti ini

{ "name" : "Aurelia Gonzales", "age" : 20, "lokasiku" : "USA", "ciri-ciri" : { "mata" : "green", "jenis-kelamin" : "female", "status" : false } }
{ "name" : "Kitty Snow", "age" : 38, "lokasiku" : "Italy", "ciri-ciri" : { "mata" : "blue", "jenis-kelamin" : "female", "status" : false } }
{ "name" : "Hays Wise", "age" : 24, "lokasiku" : "France", "ciri-ciri" : { "mata" : "green", "jenis-kelamin" : "male", "status" : false } }
{ "name" : "Karyn Rhodes", "age" : 39, "lokasiku" : "USA", "ciri-ciri" : { "mata" : "green", "jenis-kelamin" : "female", "status" : true } }
{ "name" : "Alison Farmer", "age" : 33, "lokasiku" : "Italy", "ciri-ciri" : { "mata" : "brown", "jenis-kelamin" : "female", "status" : false } }
{ "name" : "Grace Larson", "age" : 20, "lokasiku" : "USA", "ciri-ciri" : { "mata" : "blue", "jenis-kelamin" : "female", "status" : true } }
{ "name" : "Carmella Morse", "age" : 39, "lokasiku" : "Germany", "ciri-ciri" : { "mata" : "green", "jenis-kelamin" : "female", "status" : false } }
{ "name" : "Anastasia Blake", "age" : 40, "lokasiku" : "Italy", "ciri-ciri" : { "mata" : "brown", "jenis-kelamin" : "female", "status" : true } }


jadi seperti itu penggunaan dari $project
mudah mudahan kalian paham




















*/