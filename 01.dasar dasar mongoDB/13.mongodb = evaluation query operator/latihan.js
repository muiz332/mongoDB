// evaluation query operator


/*

dimateri kali ini kita akan bahas mengenai evaluation query
operator pada mongodb

evaluation query operator

jadi ketika kita memasukkan operatornya
langsung dieksekusi satu persatu untuk setiap datanya terhadap
evaluation operator ini 

nah ini kalo dalam skala besar datanya mungkin tidak
terlalu direkomendasikan karena dia akan melakukan scanning 
satu persatu 

akan tetapi kalo datanya sedikit itu tidak masalah
berikut ini adalah operatornya


$expr        = menggunakan aggregation operator
$jsonSchema  = validasi document sesuai dengan JSON Schema
$mod         = melakukan operasi modulo 
$regex       = mengambil document sesuai dengan regular expression (PCRE)
$text        = melakukan pencarian menggunakan text
$where       = mengambil document dengan javascript function 




kita coba



1.$expr

sintax

db.collection.find({
    $expr : {
        aggregation expression
    }
})

nah untuk aggregation expression
kalian bisa baca pada documentasinya

https://docs.mongodb.com/manual/reference/operator/aggregation/

kita coba


db.product.find({
    $expr : {
        $gt : ["$price", 1000000]
    }
})

jadi ini bacanya 
saya akan mencari field price dimana dia lebih 
besar satu juta


{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone"}
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop"}


dan kalian bisa coba yang
aggregation operator yang lain juga






2.$jsonSchema

sintax

db.collection.find({
    $jsonSchema : {
        Json schema object
    }
})


nah untuk json Schema objectnya itu kalian bisa baca
di website resminya  

https://json-schema.org/


kita coba

db.product.find({
    $jsonSchema : {
        required : ["name", "category"]
    }
})

required itu artinya wajib memiliki field name dan category

{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food"}
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone"}
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop"}



nah atau ini yang lebih advenced lagi


db.product.find({
    $jsonSchema : {
        required : ["name"],
        properties : {
            name : {
                bsonType : "string"
            },
            price : {
                bsonType : "long"
            }
        }
    }
})


jadi documentnya wajib memiliki fild name
dan kalo misalkan ada name typenya harus string

dan dia kalo memiliki price typenya itu harus long


{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food"}
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food"}
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food"}
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone"}
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop"}








3.$mod 

sintax

db.collection.find({
    field : {
        $mod : [divisor, raimander]  
    }
})

nah divisor itu adalah modulusnya mau berapa
rainmander itu adalah maunya hasil yang didapatkan itu berapa


db.product.find({
    price : {
        $mod : [5,0]
    }
})

{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food"}
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food"}
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food"}
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone"}
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop"}

jadi akan tampil semua datanya
karena pricenya saya modulus 5 itu hasilnya 0 semua




4.$regex

sintax

db.collection.find({
    field : {
        $regex : /regex/,
        $operator : "<option>"
    }
})

untun regex kalian bisa baca dilink berikut ini
https://regexr.com/




db.product.find({
    name : {
        $regex : /mie/,
        $options : "i"
    }
})

jadi ini saya akan mencari document
yang memiliki field name dan field tersebut

memiliki kata mie
dan optionsnya itu i artinya dia tidak case sensitive

{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food"}
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food"}
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food"}

atau kalian ingin mencari name yang diawali 
dengan kata mie

db.product.find({
    name : {
        $regex : /^Mie/
    }
})

kalo saya tidak tulis optionnya itu dia case sensitive


{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food"}




5.$text

sintax

db.collection.find({
    $text : {
        $search : "string",  // wajib  dan yang lain optional
        $language : "string",
        $caseSensitive : "boolean",
        $diacriticSensitive : "boolean"
    }
})

nah mungkin sebenarnya kita harus bahas dulu mengenai index text
karena materinya masih jauh

saya akan bahas sedikit

jadi kalo kita ingin melakukan full text search
kita bisa menggunakan operasi text

tapi sebelum kita menggunakan operator text ini 
kita harus menandai dulu mana yang ingin bisa disearch 
menggunakan text

nah caranya kita harus bikin index
seperti ini 

db.product.createIndex({
    name : "text"
})

nah lalu kita ingin text searchnya inginnya dari
fiedl name jadi kita isi dengan text

kalo pengen menambahkan lagi field yang mau
disearch dengan text

kalian tinggal tambahkan lagi nama fieldnya
dan valuenya text

jadi dia akan mencari diname dan field yang 
kalian tambahkan

tapi untuk saat ini saya hanya menggunakan name
sebagai text searchnya


{
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "createdCollectionAutomatically" : false,
        "ok" : 1
}

nah selesai
baru sekarang kita bisa melakukan pencarian

db.product.find({
    $text : {
        $search : "mie sedap"
    }
})

nah walaupun kita tidak menulikan fieldnya name
dia akan otomatis mencari didalam field namenya
karena kita sudah buat text indexnya

jadi dia akan mencari kata mie atau sedap



{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food"}
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food"}

jadi dia akan keluar mie atau sedap

nah itu harus dibungkus dengan double quote


db.product.find({
    $text : {
        $search : '"mie sedap"'
    }
})


{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food"}

maka dia akan mencari mie dan sedap saja
dan defaultnya dia tidak case sensitive ya






6.$where

sintax

db.collection.find({
    $where : function(){
        return true
    }
})


jadi dengan menggunakan where kita dapat 
melakukan query dengan javascript function


db.product.find({
    $where : function(){
        return this.name === "Mie Sedap"
    }
})

jadi this disini adalah documentnya ya
bacanya 
saya akan mencari document yang memiliki name 
dengan value mie sedap

{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food"}

jadi kalian bisa coding javascript didalam function tersebut
kalo ingin menampilkan tinggal print()
jadi tidak lagi menggunakan concole.log()






jadi semua query ini tidak direcomendasikan untuk
big data karena dia mengechecknya satu persatu


sampai disini dulu materinya
mudah mudahan kalian paham



*/