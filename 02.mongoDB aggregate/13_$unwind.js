// $ unwind

/*

$unwind digunakan untuk memecah value pada array menjadi document
sendiri

misalkan kalo kita punya sintax seperti ini

db.persons.aggregate([
    {
        $match : {age : {$gt : 33}}
    },
        {
        $project : {_id : 0,name : 1,age : 1,tags : 1}
    }
])




kita pilih document yang umurnya lebih besar 33
kita atur ulang documentnya menggunakan $project
dan kita unwind arraynya dari field tags

maka kalo kita jalankan hasilnya


{ "name" : "Kitty Snow", "age" : 38, "tags" : "ut" }
{ "name" : "Kitty Snow", "age" : 38, "tags" : "voluptate" }
{ "name" : "Kitty Snow", "age" : 38, "tags" : "consequat" }
{ "name" : "Kitty Snow", "age" : 38, "tags" : "consequat" }
{ "name" : "Karyn Rhodes", "age" : 39, "tags" : "cillum" }
{ "name" : "Karyn Rhodes", "age" : 39, "tags" : "exercitation" }
{ "name" : "Karyn Rhodes", "age" : 39, "tags" : "excepteur" }
{ "name" : "Carmella Morse", "age" : 39, "tags" : "amet" }
{ "name" : "Carmella Morse", "age" : 39, "tags" : "cillum" }
{ "name" : "Anastasia Blake", "age" : 40, "tags" : "Lorem" }
{ "name" : "Anastasia Blake", "age" : 40, "tags" : "consequat" }
{ "name" : "Anastasia Blake", "age" : 40, "tags" : "ex" }
{ "name" : "Anastasia Blake", "age" : 40, "tags" : "pariatur" }
{ "name" : "Anastasia Blake", "age" : 40, "tags" : "labore" }

hasil sebelum diunwind

{ "name" : "Kitty Snow", "age" : 38, "tags" : [ "ut", "voluptate", "consequat", "consequat" ] }
{ "name" : "Karyn Rhodes", "age" : 39, "tags" : [ "cillum", "exercitation", "excepteur" ] }
{ "name" : "Carmella Morse", "age" : 39, "tags" : [ "amet", "cillum" ] }
{ "name" : "Anastasia Blake", "age" : 40, "tags" : [ "Lorem", "consequat", "ex", "pariatur", "labore" ] }


nah kalo kita lihat hasil yang sebelum diunwind
maka kita bisa melihat value yang ada didalam tags itu misalkan document yang pertama 
itu ada 4 value

nah setelah diunwind itu akan menjadi 4 document dan yang berbeda adalah hanya pada bagian 
tagsnya saja 

bisa kita gunakan untuk mencari array dengan value tertentu menggunakan aggregate
misalkan gini

setelah diunwind saya akan mencari tags dengan value ex

db.persons.aggregate([
    {
        $unwind : "$tags"
    },
    {
        $match : {tags : "ex"}
    },
    {
        $project : {_id : 0,name : 1,age : 1,tags : 1}
    }
])

kalo kita jalankan hasilnya akan seperti ini
{ "name" : "Anastasia Blake", "age" : 40, "tags" : "ex" }



jadi kalian bisa menggunakannya untuk $group document

db.persons.aggregate([
    {
        $unwind : "$tags"
    },
    {
        $match : {tags : "ex"}
    },
    {
        $group : {_id : { nama : "$nama",umur : "$age", tags : "$tags"}}
    }
])












*/



