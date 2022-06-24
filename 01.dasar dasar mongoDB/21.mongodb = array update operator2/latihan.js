// array update operator

/*

dimateri kali ini kita akan membahas mengenai 
array update operator

array update operator



$addToset = menambahkan value kearray, akan dihiraukan jika sudah ada
$pop     = menghapus element (-1 dari depan , 1 dari belakang) 
$pull    = menghapus element yang sesuai dengan kondisi
$push   =  menambahkan element didalam array
$pullAll = menghapus semua element didalam array





1. $addToset

sintax 

db.collection.updateMany({},{
    $addToset : {
        filed : "value"
    }
})



db.product.updateMany({} ,{
    $addToSet : {
        tags : "popular"
    }
})

jadi saya akan menambahkan element didalam array tagsnya
namanya popular

tetapi kalo didalam array tagsnya sudah ada
maka tidak akan ditambahkan

kita coba

{
        "_id" : 1,
        "name" : "Indomie Ayam Bawang",
        "price" : NumberLong(2000),
        "category" : "food",
        "tags" : [
                "food",
                "popular"
        ],
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.900Z"),
        "ratings" : [
                200,
                300,
                70
        ]
}
{
        "_id" : 2,
        "name" : "Mie Sedap",
        "price" : NumberLong(2000),
        "category" : "food",
        "tags" : [
                "food",
                "popular"
        ],
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.900Z"),
        "ratings" : [
                200,
                300,
                70
        ]
}
{
        "_id" : 3,
        "name" : "Pop Mie Rasa Bakso",
        "price" : NumberLong(2500),
        "category" : "food",
        "tags" : [
                "food",
                "popular"
        ],
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.901Z"),
        "ratings" : [
                200,
                300,
                70
        ]
}
{
        "_id" : 4,
        "name" : "Samsung Galaxy S9+",
        "price" : NumberLong(10000000),
        "category" : "handphone",
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.901Z"),
        "ratings" : [
                200,
                300,
                70
        ],
        "tags" : [
                "popular"
        ]
}
{
        "_id" : 5,
        "name" : "Acer Precator XXI",
        "price" : NumberLong(25000000),
        "category" : "laptop",
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.901Z"),
        "ratings" : [
                200,
                300,
                70
        ],
        "tags" : [
                "popular"
        ]
}
{
        "_id" : 6,
        "name" : "Logitech M235 Wireless Mouse",
        "price" : NumberLong(175000),
        "category" : "laptop",
        "tags" : [
                "logitech",
                "mouse",
                "accessories",
                "popular"
        ],
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.901Z"),
        "ratings" : [
                200,
                300,
                70
        ]
}
{
        "_id" : 7,
        "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082",
        "price" : NumberLong(200000),
        "category" : "laptop",
        "tags" : [
                "cooler",
                "laptop",
                "accessories",
                "fan",
                "popular"
        ],
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.901Z"),
        "ratings" : [
                200,
                300,
                70
        ]
}
{
        "_id" : 8,
        "name" : "Samsung LC24F390FHEXXD Curved Monitor ",
        "price" : NumberLong(1750000),
        "category" : "computer",
        "tags" : [
                "samsung",
                "monitor",
                "computer",
                "popular"
        ],
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.901Z"),
        "ratings" : [
                200,
                300,
                70
        ]
}
{
        "_id" : 9,
        "name" : "Adidas Pulseboost HD Running Shoes Sepatu lari Pria",
        "price" : NumberLong(1100000),
        "category" : "shoes",
        "tags" : [
                "adidas",
                "shoes",
                "running",
                "popular"
        ],
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.902Z"),
        "ratings" : [
                200,
                300,
                70
        ]
}


maka hasilnya akan seperti itu
akan tetapi kalo kita lakukan addToSet lagi
maka popularnya cuma hanya ada 1 saja




2.$pop

sintax 

db.collection.updateMany({},{
    $pop : {
        filed : -1
    }
})

db.product.updateMany({}, {
    $pop : {
        ratings : -1 // menghapus index terdepan
    }
})

{
        "_id" : 9,
        "name" : "Adidas Pulseboost HD Running Shoes Sepatu lari Pria",
        "price" : NumberLong(1100000),
        "category" : "shoes",
        "tags" : [
                "adidas",
                "shoes",
                "running",
                "popular"
        ],
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.902Z"),
        "ratings" : [
                300,
                70
        ]
}


jadi yang awalnya data rating itu seperti ini [200,300,70]
maka dia akan menghapus index terdepan pada array





nah saya set lagi ratingnya

db.product.updateMany({}, {
    $set : {
        ratings : [90,80,70]
    }
})




3.$pull
sintax 

db.collection.updateMany({},{
    $pull : {
        filed : {
            operator : "value"
        }
    }
})

db.product.updateMany({}, {
    $pull : {
        ratings : {
            $gte : 80
        }
    }
})

jadi ini bacanya saya akan mengupdate semua document
dengan menghapus element didalam array ratingsnya
yang lebih besar sama dengan 80

{
        "_id" : 9,
        "name" : "Adidas Pulseboost HD Running Shoes Sepatu lari Pria",
        "price" : NumberLong(1100000),
        "category" : "shoes",
        "tags" : [
                "adidas",
                "shoes",
                "running",
                "popular"
        ],
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.902Z"),
        "ratings" : [
                70
        ]
}






4.$push

sintax

db.product.updateMany({}, {
    $push : {
        ratings : 100
    }
})

jadi ini saya akan push array didalam ratings
dengan value 100

{
        "_id" : 9,
        "name" : "Adidas Pulseboost HD Running Shoes Sepatu lari Pria",
        "price" : NumberLong(1100000),
        "category" : "shoes",
        "tags" : [
                "adidas",
                "shoes",
                "running",
                "popular"
        ],
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.902Z"),
        "ratings" : [
                70,
                100
        ]
}

maka akan menambahkan nilai 100 didalam array
kalo saya tambahkan lagi

db.product.updateMany({}, {
    $push : {
        ratings : 40
    }
})

maka datanya didalam arraynya adan ditambah



5.$pullAll

sintax 

db.collection.updateMany({},{
    $pullAll : {
        filed : ["value"]
    }
})

db.product.updateMany({}, {
    $pullAll : {
        ratings : [100,40]
    }
})

jadi dia akan menghapus berdasarkan nilai tersebut
jadi saya akan menghapus 100 dan 40

{
        "_id" : 9,
        "name" : "Adidas Pulseboost HD Running Shoes Sepatu lari Pria",
        "price" : NumberLong(1100000),
        "category" : "shoes",
        "tags" : [
                "adidas",
                "shoes",
                "running",
                "popular"
        ],
        "stok" : 10,
        "lastModified" : ISODate("2022-02-20T13:25:13.902Z"),
        "ratings" : [
                70
        ]
}


maka hasilnya akan seperti itu
field ratingsnya hanya ada 70






*/