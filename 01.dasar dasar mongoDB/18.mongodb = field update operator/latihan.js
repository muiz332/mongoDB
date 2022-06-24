// update operator

/*

dimateri kali ini kita akan bahas mengenai update
operator

sebelumnya kita sudah tahu bahwa untuk mengupdate
document kita bisa menggunakan operator $set atau $unset

namun sebenarnya masih banyak operator yang bisa kita gunakan


update operator

--------------------------------------
$set    = mengubah nilai fild pada document
$unset  = menghapus fild pada document
$rename = mengganti nama fild pada document
$inc    = menambah atau mengurangi angka difild sesuai dengan jumlah tertentu
$currentDate = mengubah nilai pada fild menjadi waktu saat ini




1.$set

sintax

db.collection.update({query}, {
    $set : {
        field1 : "value",
        filed2 : "value"
    }
})


2.$unset

sintax

db.colllection.update({query}, {
    $unset : {
        field1 : "",
        field2 : ""
    }
})


3.$rename

sintax 
db.collection.update({query}, {
    $rename : {
        field : "newNameFiend"
    }
})


alter table customer change name full_name 

db.customer.updateMany({}, {
    $rename : {
        name : "full_name"
    }
})


{ "_id" : "muiz", "full_name" : "M.Mu'izzuddin" }

maka dia akan mengganti file name dengan
nama fild baru yaitu full_name





4.$inc 

sintax
db.collection.update({query},{
    $inc : {
        field1 : 1,  // increment
        field2 : -1  // decrement
    }
})


kalo kita ingin menaikkan atau menurunkan angka
lebih baik menggunakan $inc daripada menggunakan $set

jadi jangan menggunakan update manual
ketika ada dua orang melakukan pembelian misalnya 
itu bisa berbahaya 

istilahnya adalah restcondition


update product set stok = stok + 10

db.product.updateMany({}, {
    $inc : {
        stok : 10
    }
})

kita tahu bahwa didalam collection product 
kita tidak memiliki fild stok

maka dia akan secara otomatis membuatkan fild stok
yang diisi dengan 0 lalu diincrement 10



5.currentDate

sintax

db.collection.update({query},{
    $currentDate : {
        filed1 : {
            $type : "date"
        },
        filed2 : {
            $type : "timestamp"
        }
    }
})


update product set lastModifiedDate = current_date()

db.product.updateMany({},{
    $currentDate : {
        lastModified : {
            $type : "date"
        }
    }
})

> db.product.find()
{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food" ], "stok" : 10, "lastModifie
d" : ISODate("2022-02-20T13:25:13.900Z") }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food" ], "stok" : 10, "lastModified" : ISODa
te("2022-02-20T13:25:13.900Z") }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food", "tags" : [ "food" ], "stok" : 10, "lastModified
" : ISODate("2022-02-20T13:25:13.901Z") }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone", "stok" : 10, "lastModified" : ISODate(
"2022-02-20T13:25:13.901Z") }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop", "stok" : 10, "lastModified" : ISODate("202
2-02-20T13:25:13.901Z") }
{ "_id" : 6, "name" : "Logitech M235 Wireless Mouse", "price" : NumberLong(175000), "category" : "laptop", "tags" : [ "logitech", "mouse", "
accessories" ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.901Z") }
{ "_id" : 7, "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082", "price" : NumberLong(200000), "category" : "laptop", "tags" : [ "cooler
", "laptop", "accessories", "fan" ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.901Z") }
{ "_id" : 8, "name" : "Samsung LC24F390FHEXXD Curved Monitor ", "price" : NumberLong(1750000), "category" : "computer", "tags" : [ "samsung"
, "monitor", "computer" ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.901Z") }
{ "_id" : 9, "name" : "Adidas Pulseboost HD Running Shoes Sepatu lari Pria", "price" : NumberLong(1100000), "category" : "shoes", "tags" : [
 "adidas", "shoes", "running" ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.902Z") }



maka dia akan menambahkan fild baru dengan typenya date sekarang
nah kenapa jamnya tulisannya 13 padahal dilaptop saya tulisannya 20

karena jam indonesia ke UTC itu jaraknya 7 jam
jadi sebenarnya 20 - 7 maka 13


nah jadi itu field operator
nah digimana kalo type datanya itu array


saya ingin memanipulasi data array 
nah kita akan bahas dimateri berikutnya

mudah mudahan sampai disini kalian paham 








*/