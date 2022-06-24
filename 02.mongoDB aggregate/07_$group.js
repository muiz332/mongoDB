/*


selanjutnya kita coba yang group

1. $group

db.persons.aggregate([
    {
        $group : {_id : "$age"}
    }
])

untuk $group itu mengelompokkan document
perlu kalian ingat didalam mongodb itu harus ada field _id maka kalian harus tulis
pada saat group 

sintax diatas isi dari field _id itu adalah "$age"
artinya yang menjadi value dari field _id itu adalah field age

{ "_id" : 38 }
{ "_id" : 39 }
{ "_id" : 24 }
{ "_id" : 20 }
{ "_id" : 33 }
{ "_id" : 40 }

kalo kita jalankan hasilnya seperti itu
nah perlu kalian inget pada saat digroup 

jika ada field yang sama maka dia hanya mengambil value yang uniq saja
kalo didalam mysql itu seperti distinct


atau kalian juga bisa menjadikan value dari field _id itu berbentuk 
object

db.persons.aggregate([
    {
        $group : {_id : {nama : "$name", umur : "$age"}}
    }
])

kalo kalian jalankan maka hasilnya seperti ini

{ "_id" : { "nama" : "Karyn Rhodes", "umur" : 39 } }
{ "_id" : { "nama" : "Grace Larson", "umur" : 20 } }
{ "_id" : { "nama" : "Kitty Snow", "umur" : 38 } }
{ "_id" : { "nama" : "Alison Farmer", "umur" : 33 } }
{ "_id" : { "nama" : "Hays Wise", "umur" : 24 } }
{ "_id" : { "nama" : "Carmella Morse", "umur" : 39 } }
{ "_id" : { "nama" : "Aurelia Gonzales", "umur" : 20 } }
{ "_id" : { "nama" : "Anastasia Blake", "umur" : 40 } }



2. group by nested field 

db.persons.aggregate([
    {$group : {_id : "$company.location.country"}}
])

atau kalian juga bisa melakukan grouping pada nested field
kalo saya jalankan hasilnya seperti ini

{ "_id" : "France" }
{ "_id" : "Italy" }
{ "_id" : "USA" }
{ "_id" : "Germany" }




3.group by multiple field

db.persons.aggregate([
    {$group : {_id : {name : "$name", age : "$age", eyeColor : "$eyeColor"}}}
])


kalo kita jalankan hasilnya akan menjadi seperti ini

{ "_id" : { "name" : "Anastasia Blake", "age" : 40, "eyeColor" : "brown" } }
{ "_id" : { "name" : "Aurelia Gonzales", "age" : 20, "eyeColor" : "green" } }
{ "_id" : { "name" : "Grace Larson", "age" : 20, "eyeColor" : "blue" } }
{ "_id" : { "name" : "Alison Farmer", "age" : 33, "eyeColor" : "brown" } }
{ "_id" : { "name" : "Carmella Morse", "age" : 39, "eyeColor" : "green" } }
{ "_id" : { "name" : "Kitty Snow", "age" : 38, "eyeColor" : "blue" } }
{ "_id" : { "name" : "Hays Wise", "age" : 24, "eyeColor" : "green" } }
{ "_id" : { "name" : "Karyn Rhodes", "age" : 39, "eyeColor" : "green" } }


untuk fieldnya itu bebas namanya apa ya 
tidak harus referensi dari field yang kalian ambil dengan tanda "$"




















*/