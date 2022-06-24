// element query operator

/*

dimateri kali ini kita akan membahas mengenai
operator element pada query


element query operator

------------------------------------------------------------
$exists = mencari document yang memiliki fild tertentu
------------------------------------------------------------
$type = mencari document yang memiliki type fild tertentu
------------------------------------------------------------

kita coba

select * from product where category is null


db.product.find({
    category : {
        $exists : false
    }
})


jadi ini bacanya saya akan mencari fild category 
dimana categorynya itu saya isi false

artinya dia akan mencari document yang tidak memiliki fild category

{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000) }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000) }

tapi sebenarnya sama juga seperti ini 

db.product.find({
    category : {
        $eq : null
    }
})

atau juga sama seperti ini

db.product.find({
    category : null
})


nah selanjutnya kita coba yang type

nah kalo didalam relational database itu kan fildnya sudah diatur dari awal
jadi tidak ada fild yang type datanya berubah ubah

tetapi didalam mongodb itu bisa
makanya disediakan operator yang digunakan untuk mencari fild 
apa yang type datanya apa


db.product.find({
    category : {
        $type : "string"
    }
})

jadi dia akan mencari document yang type categorynya itu string

{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop" }

atau saya juga bisa mencari banyak type 
caranya dengan memasukkannya kedalam sebuah array



db.product.find({
    price : {
        $type : ["int", "long"]
    }
})

jadi dia akan mencai type data int atau long

{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000) }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000) }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop" }




jadi seperti itu penggunaan dari element query operator
mudah mudahan kalian paham






*/


