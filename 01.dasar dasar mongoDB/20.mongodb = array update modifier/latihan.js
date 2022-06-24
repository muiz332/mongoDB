// array update operator modifier

/*

dimateri kali ini kita akan membahas array
update operator modifier



array update operator modifier


$each = digunakan di $addToSet dan $push, untuk menambahkan multiple element
$position = digunakan di$push untuk menambahkan element pada index tertentu
$slice = digunakan di$push untuk menentukan jumlah maksimak data array 
$sort  = digunakan untuk mengurutkan array seteleh operasi $push 




1. $each

sintax

db.collection.updateMany({},{
    $addToSet / $push : {
        filed : {
            $each : ["value1", "value2"]
        }
    }
})

db.product.updateMany({}, {
    $push : {
        ratings : {
            $each : [100,200,300]
        }
    }
})


nah jadi kalian bisa menggunakan each untuk
menambah lebih dari satu nilai didalam array

{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food", "popular" ], "stok" : 10, "
lastModified" : ISODate("2022-02-20T13:25:13.900Z"), "ratings" : [ 70, 100, 200, 300 ] }

kalo saya ambil salah satu datanya 
ratingsnya akan langsung ditambahkan seperti itu



nah kalo addToSet seperti ini 

db.product.updateMany({}, {
    $addToSet : {
        tags : {
            $each : ["Tranding", "popular"]
        }
    }
})

{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food", "popular", "Tranding" ], "s
tok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.900Z"), "ratings" : [ 70, 100, 200, 300 ] }

nah jadi didalam field tagsnya akan ditambahkan
element baru yaitu tranding karena sebelumnya popular itu sudah ada




2 .$position 

sintax

db.collection({}, {
    $push : {
        filed : {
            $each : ["value1", "value2"],
            $position : 2
        }
    }
})

jadi akan menambahkan data tersebut 
dimulai dari index ke 2


db.product.updateMany({}, {
    $push : {
        tags : {
         $each : ["hot"],
         $position : 1   
        }
    }
})

nah jadi saya akan menambahkan hot pada index ke 1
didalam array tags


{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food", "hot", "popular", "Tranding
" ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.900Z"), "ratings" : [ 70, 100, 200, 300 ] }

nah sudah ya value hotnya akan ditambahkan
pada index ke 1












3 .$slice

sintax

db.collection({}, {
    $push : {
        filed : {
            $each : ["value1", "value2"],
            $slice : 2
        }
    }
})

nah kita slice 2
jadi setelah kita tambahkan datanya 
kalian akan mengambil 2 data paling depan
kalo -2 akan mengambil 2 data paling belakang

db.product.updateMany({}, {
    $push : {
        ratings : {
            $each : [100,200,300,400,500],
            $slice : -5 
        }
    }
})

{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food", "hot", "popular", "Tranding
" ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.900Z"), "ratings" : [ 100, 200, 300, 400, 500 ] }


nah maka dia akan mengambil 5 data dari belakang 
didalam array ratings






4. $sort

db.collection.updateMany({}, {
    $push : {
        filed : {
            $each : ["value"],
            $sort : 1 // asc / -1 desc
        }
    }
})

jadi setelah kalian tambahkan 
maka arraynya akan langsung diurutkan 

db.product.updateMany({},{
    $push : {
        ratings : {
            $each : [900,600,700,800],
            $sort : -1
        }
    }
})

nah maka dia akan menambahkan datanya
setelah itu akan diurutkan secara desc

{ "_id" : 9, "name" : "Adidas Pulseboost HD Running Shoes Sepatu lari Pria", "price" : NumberLong(1100000), "category" : "shoes", "tags" : [
 "adidas", "hot", "shoes", "running", "popular", "Tranding" ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.902Z"), "ratings"
: [ 900, 800, 700, 600, 500, 400, 300, 200, 100 ] }

nah sudah urut ya datanya



jadi seperti itu arra operator modifiernya
mudah mudahan kalian paham



*/