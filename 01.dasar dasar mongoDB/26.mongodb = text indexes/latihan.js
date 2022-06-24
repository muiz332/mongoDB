// text indexes



/*


dimaeri kali ini kita akan belajar mengenai text indexes
pada mongodb

mongodb menyediakan text indexes untuk mendukung pencarian text ditype data
string

text index tidak hanya bisa digunakan pada field dengan type 
data string, namun juga pada array berisi type data string




membuat text index

sintaxt text index

db.product.createIndex({
    field1 : "text",
    field2 : "text"
},{
    weights : {
        field1 : 10,
        field2 : 5
    }
})


jadi untuk membuat text index mirip dengan 
membuat index biasa 

tapi disini valuenya adalah text 
artinya kita membuat index dengan type text

nah selanjutnya ada parameter tambahan 
itu ada wights atau berat

nah maksutnya apa?
untuk defaultnya beratnya itu adalah 1 

disitu saya isi beratnya dengan 10 dan 5
artinya document yang bakal muncul itu yang kena field1 dulu
baru kalo yang kena field2 itu akan berada dibawahnya

karena scorenya lebih kecil



nah sebelumnya kan kita sudah punya index 
didalam product pada field nama yaitu text index

 "name" : "name_text",

kalo kalian lihat itu ada name texrt
nah ini kita hapus dulu saja 
karena kita akan bikin indexnya yang baru

db.product.dropIndex("name_text")




1.membuat text index

db.product.createIndex({
    name : "text",
    category : "text",
    tegs : "text"
},{
    weights : {
        name : 10,
        category : 3,
        tags : 1 
    }
})

nah sekarang kita tambahkan indexnya

{
        "numIndexesBefore" : 4,
        "numIndexesAfter" : 5,
        "createdCollectionAutomatically" : false,
        "ok" : 1
}

dan ingat ya fieldnya itu type datanya harus string
atau kalo array didalam arraynya itu semuanya harus string


kalo kita check maka akan menambahkan index baru yaitu
"name" : "name_text_category_text_tegs_text",


nah sekarang kita coba searching

db.product.find({
    $text : {
        $search : "mie"
    }
})


jadi pencariannya dalam bentuk text
jadi text index hanya bisa dilakukan untuk pencarian 
berdasarkan text saja

kita search  mie
berarti dia akan mencari didalam field name, category, dan tags

jadi mencarinya dalam tiga field tersebut


db.product.find({
    $text : {
        $search : "mie"
    }
}).explain()

nah kalian bisa lihat apakah querynya itu menggunakan IXSCAN atau tidak

"stage" : "IXSCAN",

nah maka querynya itu berdasarkan index scan ya 
jadi kalian tidak perlu kawatir jika memiliki banyak data 
dan ingin mencari menggunakan text

kalian bisa gunakan text indexes

db.product.find({
    $text : {
        $search : "mie laptop"
    }
})


nah kalo kalian memasukkan dua kata ini artinya
bukan mie laptop ya

ini artinya mie atau laptop
jadi yang ada kata mie atau kata laptop


{ "_id" : 7, "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082", "price" : NumberLong(200000), "category" : "laptop", "tags" : [ "cooler
", "hot", "laptop", "accessories", "fan", "popular", "Tranding" ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.901Z"), "ratin
gs" : [ 900, 800, 700, 600, 500, 400, 300, 200, 100 ] }
{ "_id" : 6, "name" : "Logitech M235 Wireless Mouse", "price" : NumberLong(175000), "category" : "laptop", "tags" : [ "logitech", "hot", "mo
use", "accessories", "popular", "Tranding" ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.901Z"), "ratings" : [ 900, 800, 700
, 600, 500, 400, 300, 200, 100 ] }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop", "stok" : 10, "lastModified" : ISODate("202
2-02-20T13:25:13.901Z"), "ratings" : [ 900, 800, 700, 600, 500, 400, 300, 200, 100 ], "tags" : [ "popular", "hot", "Tranding" ] }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food", "hot", "popular", "Tranding" ], "stok
" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.900Z"), "ratings" : [ 900, 800, 700, 600, 500, 400, 300, 200, 100 ] }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food", "tags" : [ "food", "hot", "popular", "Tranding"
 ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.901Z"), "ratings" : [ 900, 800, 700, 600, 500, 400, 300, 200, 100 ] }
>


jadi dia akna mencari mie atau laptop

nah bagaimana kalo ini dua duanya

kita bisa tambahkan kutip 

db.product.find({
    $text : {
        $search : "\"mie sedap\""
    }
})


{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food", "hot", "popular", "Tranding" ], "stok
" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.900Z"), "ratings" : [ 900, 800, 700, 600, 500, 400, 300, 200, 100 ] }



nah gimana kalo kalian ingin ada kata mie 
tapi tidak mau ada kata sedapnya

db.product.find({
    $text : {
        $search : "mie -sedap"
    }
})

jadi kalian tinggal kalian tanda - untuk kata yang tidak diinginkan


{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food", "tags" : [ "food", "hot", "popular", "Tranding"
 ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.901Z"), "ratings" : [ 900, 800, 700, 600, 500, 400, 300, 200, 100 ] }




kalo kalian mencoba melakukan full text search 
ke field yang tidak memiliki index maka dia akan error

db.custmer.find({
    $text : {
        $search : "muiz"
    }
})


Error: error: {
        "ok" : 0,
        "errmsg" : "text index required for $text query (no such collection 'ecommerce.custmer')",
        "code" : 27,
        "codeName" : "IndexNotFound"
}

jadi $text membutuhkan text index untuk melakukan query
jadi kalian wajib menambahkan text index dulu kedalam collection 


sebelum kalian bisa melakukan operator $text
jadi itu tentang text index

mudah mudahan kalian paham



*/