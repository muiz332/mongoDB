// array update operator

/*


dimateri kali ini kita akan membahas mengenai
array update operator

secara default saat kita mengubah fild dengan type array 
maka seluruh array akan diubah  

kadang kita ingin menambah atau hanya mengubah data array tanpa harus
mengubah seluruh fild array
hal ini bisa dilakukan oleh mongodb menggunakan array update operator


kita akan bahas satu persatu
dan operatornya lumayan banyak


array update operator

------------------------------------
$ = mengupdate data array pertama sesuai dengan kondisi query
$[] = mengupdate semua data array sesuai dengan kondisi query
$[<identifier>] = mengupdate semua data array yang sesuai dengan
                  kondisi pada arrayFilters
<index>  = mengupdate data array sesuai dengan index



kita coba
tapi sebelum itu kita tambahkan fild baru pada semua
document 

db.product.updateMany({}, {
    $set : {
        ratings : [90,80,70]
    }
})


1.$

sintax

db.collection.update({query}, {
    $operator : {
        "fied.$" : "value"
    }
})

jadi dia akan mengambil array index pertama saja

db.product.updateMany({ratings : 90}, {
    $set : {
        "ratings.$" : 100 
    }
})

jadi jika didalam ratings itu ada nilai yang 90
maka ubah ratingsnya menjadi 100

{
        "_id" : 1,
        "name" : "Indomie Ayam Bawang",
        "price" : NumberLong(2000),
        "category" : "food",
        "tags" : [
                "food"
        ],
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.900Z"),
        "ratings" : [
                100,
                80,
                70
        ]
}





2.$[]

db.collection.update({query}, {
    $operator : {
        "fied.$[]" : "value"
    }
})

kalo kita punyadata array isinya 10
array itu akan diupdate menjadi value ini


db.product.updateMany({}, {
    $set : {
        "ratings.$[]" : 100
    }
})

maka dia akan mengubah semua isi didalam array
menjadi 100 semua




3.$[<identifier>]

db.collection.update({query}, {
    $operator : {
        "fied.$[element]" : "value"
    }
},{
    arrayFilter : {
        element : {
            kondisi
            $operator : "value"
        }
    }
})


jadi kalian masukkan identifier pada kurung sikunya
nah nanti keyword yang kalian masukkan itu 
kalian harus masukkan lagi diparameter ke3

didalam arrayFiltersnya 
jadi didalam nya ada element

itu harus sama namanya dengan yang kalian masukkan pada kurung sikunya
dan didalamnya kalian masukkan kondisinya

kalo true 
maka data yang ada didalam array akan diisi dengan value pada
parameter ke 2


db.product.updateMany({}, {
    $set: {
        "ratings.$[element]" : 100
    }
},{
    arrayFilters: [ 
        { 
            element: { 
                $gte: 80
            } 
        } 
    ]
})

{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food" ], "stok" : 10, "lastModifie
d" : ISODate("2022-02-20T13:25:13.900Z"), "ratings" : [ 100, 100, 70 ] }

nah saya ambil satu fild saja
maka yang tadinya lebih besar sama dengan 80
akan menjadi 100

jadi ketika kondisi yang ada 
didalam arrayFileternya itu true maka
salah element yang ada didalam array ratings akan diubah 
menjadi 100







4.<index>

sintax 

db.collection.update({query}, {
    $operator : {
        "fied.<index>" : "value"
    }
})


db.product.updateMany({}, {
    $set : {
        "ratings.0" : 200,
        "ratings.1" : 300
    }
})


{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food" ], "stok" : 10, "lastModifie
d" : ISODate("2022-02-20T13:25:13.900Z"), "ratings" : [ 200, 300, 70 ] }

maka index ke 0 dan index ke 1 
akan diubah sesuai dengan valuenya





*/