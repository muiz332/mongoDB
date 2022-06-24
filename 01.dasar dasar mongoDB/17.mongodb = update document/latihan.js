// update document

/*

dimateri kali ini kita akan membahas mengenai update document
dimongodb

sama seperti DBMS yang lainnya 
didalam mongodb kita juga bisa mengubah document yang 
sudah kita insert kedalam collection

namun berbeda dengan sql 
dimongodb untuk mengubah document kita diberikan beberapa function 

untuk update document kita bisa menggunakan
db.collection.update method()


update document method

updateOne()    = mengubah satu document
updateMany()   = mengubah banyak document 
repalceOne()   mengganti document lama dengan document yang baru



sintax updateOne() dan updateMany

db.product.updateOne(
    {} filter,

    {
        operator : {
            fild : value
        }

    } update,

    {} option
)

sintax replaceOne()

db.product.replaceOne(
    {} filter,
    {} replacement,
    {} option
)





kita coba



1.updateOne()

update product set category = "food" where id = 1


db.product.updateOne({_id : 1}, {
    $set : {
        category : "food"
    }
})


kita tahu bahwa document yang memiliki id 1 itu tidak 
memiliki fild category

jika tidak ada fild category pada saat kita melakukan update
maka dia akan membuatkan fild category 

nah operator set digunakan
untuk melakukan update ya 

kita update juga yang idnya 2

db.product.updateOne({_id : 2}, {
    $set : {
        category : "food"
    }
})


{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food" }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food" }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop" }
{ "_id" : 6, "name" : "Logitech M235 Wireless Mouse", "price" : NumberLong(175000), "category" : "laptop", "tags" : [ "logitech", "mouse", "
accessories" ] }
{ "_id" : 7, "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082", "price" : NumberLong(200000), "category" : "laptop", "tags" : [ "cooler
", "laptop", "accessories", "fan" ] }
{ "_id" : 8, "name" : "Samsung LC24F390FHEXXD Curved Monitor ", "price" : NumberLong(1750000), "category" : "computer", "tags" : [ "samsung"
, "monitor", "computer" ] }
>


maka fild dengan id 1 dan id 2 akan memiliki fild category





2.updateMany()

update product set tags = ["food"] where category = "food" and tags is null

db.product.updateMany({
    $and : [
        {
            category : {
                $eq : "food"
            }
        },
        {
            tags : {
                $exists : false
            }
        }
    ]
},{
    $set : {
        tags : ["food"]
    }
})


jadi untuk filternya
saya ambil yang categorynya itu food dan tagsnya itu belum dibuat

lalu saya ubah 
fild tagsnya menjadi ["food"]


{ "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
> db.product.find()
{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food" ] }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food" ] }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food", "tags" : [ "food" ] }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop" }
{ "_id" : 6, "name" : "Logitech M235 Wireless Mouse", "price" : NumberLong(175000), "category" : "laptop", "tags" : [ "logitech", "mouse", "
accessories" ] }
{ "_id" : 7, "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082", "price" : NumberLong(200000), "category" : "laptop", "tags" : [ "cooler
", "laptop", "accessories", "fan" ] }
{ "_id" : 8, "name" : "Samsung LC24F390FHEXXD Curved Monitor ", "price" : NumberLong(1750000), "category" : "computer", "tags" : [ "samsung"
, "monitor", "computer" ] }
>


jadi ada 3 dimodifikasi
jadi kalo querynya atau filternya itu hanya satu document
itu bisa

tapi updateMany itu akan kita gunakan untuk data 
yang akan diupdate 

dan data tersebut jumlahnya lebih dari satu



nah misalkan kalian ingin 
menambahkan disemua documentnya itu fild baru

jadi filternya kita kasih object kosong

db.product.updateMany({}, {
    $set : {
        wrong : "wrong"
    }
})


{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food" ], "wrong" : "wrong" }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food" ], "wrong" : "wrong" }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food", "tags" : [ "food" ], "wrong" : "wrong" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone", "wrong" : "wrong" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop", "wrong" : "wrong" }
{ "_id" : 6, "name" : "Logitech M235 Wireless Mouse", "price" : NumberLong(175000), "category" : "laptop", "tags" : [ "logitech", "mouse", "
accessories" ], "wrong" : "wrong" }
{ "_id" : 7, "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082", "price" : NumberLong(200000), "category" : "laptop", "tags" : [ "cooler
", "laptop", "accessories", "fan" ], "wrong" : "wrong" }
{ "_id" : 8, "name" : "Samsung LC24F390FHEXXD Curved Monitor ", "price" : NumberLong(1750000), "category" : "computer", "tags" : [ "samsung"
, "monitor", "computer" ], "wrong" : "wrong" }


maka semua document akan memiliki fild wrong

nah jika kalian ingin menghapus fildnya kalian bisa
menggunakan operator $unset

jadi dia digunakan untuk menghapus fild dari document
untuk macam macam operator ada didamteri berikutnya

kita coba


db.product.updateMany({}, {$unset : {wrong : ""}})

jika saya isikan valuenya kosong 
maka dia akan menghapus semua fild wrong

atau kalian juga bisa menuliskan valuenya secara spesifik 
seperti ini

{ wrong : "wrong"}

jadi dia hanya menghapud fild wrong dengan value wrong
jika valuenya bukan wrong maka tidak akan terhapus

kita jalankan


{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food" ] }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food" ] }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food", "tags" : [ "food" ] }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop" }
{ "_id" : 6, "name" : "Logitech M235 Wireless Mouse", "price" : NumberLong(175000), "category" : "laptop", "tags" : [ "logitech", "mouse", "
accessories" ] }
{ "_id" : 7, "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082", "price" : NumberLong(200000), "category" : "laptop", "tags" : [ "cooler
", "laptop", "accessories", "fan" ] }
{ "_id" : 8, "name" : "Samsung LC24F390FHEXXD Curved Monitor ", "price" : NumberLong(1750000), "category" : "computer", "tags" : [ "samsung"
, "monitor", "computer" ] }
>


maka fild dengan nama wrong akan hilang





3.replaceOne()

kita inser dulu

db.product.insertOne({
    _id : 9,
    name : "salah",
    wrong : "wrong"
})

{ "_id" : 9, "name" : "salah", "wrong" : "wrong" }


dan kemudian kita ingin mengganti 
documeng tersebut dengan document baru

db.product.replaceOne({
    _id: 9
}, {
    name: "Adidas Pulseboost HD Running Shoes Sepatu lari Pria",
    price: new NumberLong(1100000),
    category: "shoes",
    tags: [
        "adidas", "shoes", "running"
    ]
});


{ "_id" : 9, "name" : "Adidas Pulseboost HD Running Shoes Sepatu lari Pria", "price" : NumberLong(1100000), "category" : "shoes", "tags" : [
 "adidas", "shoes", "running" ] }

nah maka dia akan mengganti dengan document baru





jadi begitu cara kita melakukan update 
dimongodb

mudah mudahan kalian paham




*/