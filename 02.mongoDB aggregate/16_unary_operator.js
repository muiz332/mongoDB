// unary operator 

/* 

unary operator bisa digunakna pada stage project

apa perbedaan accumulator operation dengan unary operator?
accumulator operation digunakan untuk menghitung pada stage group
dan itu berlaku pada semua document pada duplikat value saat kita group

sedangkan unary operator digunakan pada saat kita melakukan
stage project


$type untuk mengetahui bson type pada field tertentu
$or, $and,$lt,$gt,$multiply


kita coba yang type saja untuk yang lain kalian bisa
baca didocumentasinya sendiri

misalkan kita gunakan pada stage project

db.persons.aggregate([
    {
        $project : {
            _id : 0,
            name : 1,
            eyeColorType : {$type : "$eyeColor"},
            ageType : {$type : "$age"}
        }
    }
])

kalo kita jalankan hasilnya seperti ini

{ "name" : "Aurelia Gonzales", "eyeColorType" : "string", "ageType" : "int" }
{ "name" : "Kitty Snow", "eyeColorType" : "string", "ageType" : "int" }
{ "name" : "Hays Wise", "eyeColorType" : "string", "ageType" : "int" }
{ "name" : "Karyn Rhodes", "eyeColorType" : "string", "ageType" : "int" }
{ "name" : "Alison Farmer", "eyeColorType" : "string", "ageType" : "int" }
{ "name" : "Grace Larson", "eyeColorType" : "string", "ageType" : "int" }
{ "name" : "Carmella Morse", "eyeColorType" : "string", "ageType" : "int" }
{ "name" : "Anastasia Blake", "eyeColorType" : "string", "ageType" : "int" }




dia akan menampilkan type data dari field referencenya








*/