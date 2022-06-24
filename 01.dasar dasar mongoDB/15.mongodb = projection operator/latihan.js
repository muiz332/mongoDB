// projection operator


/*


dimateri kali ini kita akan membahas mengenai
pejection operator pada mongodb

nah apa itu projection operator
sebelumnya saat kita melakukan query menggunakan method find

itu sebenarnya terdapat 2 parameter 
parameter pertama adalah filternya 

dan parameter pertama adalah querynya 
dan parameter kedua adalah projectionnya

projection adalah memilih fild pada document
dimana kita bisa hide fild dan tampilkan fild tertentu

kita coba


misalnya saya ingin hanya menampilkan namanya saja


select name from product

 db.product.find({}, {name : 1})
{ "_id" : 1, "name" : "Indomie Ayam Bawang" }
{ "_id" : 2, "name" : "Mie Sedap" }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+" }
{ "_id" : 5, "name" : "Acer Precator XXI" }
{ "_id" : 6, "name" : "Logitech M235 Wireless Mouse" }
{ "_id" : 7, "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082" }
{ "_id" : 8, "name" : "Samsung LC24F390FHEXXD Curved Monitor " }


jadi dia akan menampilkan semua fild name yang ada didalam 
document

jadi saya tuliskan object baru setelah parameter pertama
yang propertinya name diisi 1 

1 disini artinya tampilkan
sedangkan 0 artinya sembunyikan

nah untuk _id ini akan otomatis ditampilkan ya 
jadi kalo misalkan kita mau menghidden

kita tinggal tuliskan seperti ini 

> db.product.find({}, {name : 1, _id : 0})

{ "name" : "Indomie Ayam Bawang" }
{ "name" : "Mie Sedap" }
{ "name" : "Pop Mie Rasa Bakso" }
{ "name" : "Samsung Galaxy S9+" }
{ "name" : "Acer Precator XXI" }
{ "name" : "Logitech M235 Wireless Mouse" }
{ "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082" }
{ "name" : "Samsung LC24F390FHEXXD Curved Monitor " }

jadi kita bisa menampilkan fild tertentu 
dan juga menyembunyikan fild tertentu ketika ditampilkan

jadi kalian harus menggunakan salah satu saja
kalo misalkan kalian ingin tampilkan namanya saja berarti
kallian tulis name : 1

maka yang akan tampil adalah id dan nama
tapi kalo misalkan kalian tulis 
category : 0

maka dia akan error 
karena memang category itu sudah dihidden 



projection operator

nah projection operator ini ada banyak 

$   = limit array hanya mengembalikan data pertama 
$elemMatch = limit array mengembalikan data pertama yang true dengan kondisi query

$meta = mengembalikan informasi metadata yang didapat dari setiap matching document
$slice = mengontrol jumlah data yang ditampilkan didalam array


sintax  $ 

db.product.find({
    field : {
        $elemMatch : {
            // query
        }
    }
}, {
    "field.$" : 1
})

nah kalo misalkan menggunakan $
kita harus fild arraynya 

jadi setelah ketemu arraynya dari document
kita baru tampilkan data arraynya itu seperti apa

kalo $ berarti hanya array index 0 saja yang ditampilkan


sintax $elemMatch

db.product.find({},{
    field : {
        $elemMatch : {
            // query
        }
    }
})

untuk $elemMatch ini mirip dengan array query operator
tapi bedanya ini diprojection


untuk $ meta itu akan kita bahas dimateri lanjutan



sintax $slice 

db.product.find({}, {
    fild : {
        $slice : 2
    }
})

jadi dia akan memotong 2 data







# praktek

nah sekarang kita coba



sintax $ 


db.product.find({tags : {$elemMatch : {$in : ["samsung","laptop"]}}}, {price : 1, "tags.$" : 1})


{ "_id" : 7, "price" : NumberLong(200000), "tags" : [ "laptop" ] }
{ "_id" : 8, "price" : NumberLong(1750000), "tags" : [ "samsung" ] }

jadi dia akan mengambil array samsung atau laptop 
pada tiap fildnya

jadi daia akan tampil price sama tagsnya karena 
tidak saya tampilkan pada projectionnya





sintax $elemMatch


db.product.find({}, {
    tags : {
        $elemMatch : {
            $in : ['samsung','laptop']
        }
    },
    name :1
})


{ "_id" : 1, "name" : "Indomie Ayam Bawang" }
{ "_id" : 2, "name" : "Mie Sedap" }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+" }
{ "_id" : 5, "name" : "Acer Precator XXI" }
{ "_id" : 6, "name" : "Logitech M235 Wireless Mouse" }
{ "_id" : 7, "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082", "tags" : [ "laptop" ] }
{ "_id" : 8, "name" : "Samsung LC24F390FHEXXD Curved Monitor ", "tags" : [ "samsung" ] }


jadi dia akan menambpilkan tag yang hanya ada didalam $elementMatchnya
karena querynya itu samsung atau laptop

dia akan menampilkan array dengan nilai samsung atau laptop saja
sisanya tidak ditampilkan





sintax $slice 

db.product.find({},{
    tags : {
        $slice : 2
    },
    name : 1,
    price : 1
}).pretty()

{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000) }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000) }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500) }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000) }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000) }
{
        "_id" : 6,
        "name" : "Logitech M235 Wireless Mouse",
        "price" : NumberLong(175000),
        "tags" : [
                "logitech",
                "mouse"
        ]
}
{
        "_id" : 7,
        "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082",
        "price" : NumberLong(200000),
        "tags" : [
                "cooler",
                "laptop"
        ]
}
{
        "_id" : 8,
        "name" : "Samsung LC24F390FHEXXD Curved Monitor ",
        "price" : NumberLong(1750000),
        "tags" : [
                "samsung",
                "monitor"
        ]
}


jadi dia akan memotong array tags 
sebanyak 2 element mulai dari depan

atau kalian bisa tulis -2 
jadi dia memotong element mulai dari element terakhir



kita juga bisa memotong melalui array

db.product.find({},{
    tags : {
        $slice : [1,2]
    },
    name : 1,
    price : 1
}).pretty()



{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000) }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000) }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500) }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000) }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000) }
{
        "_id" : 6,
        "name" : "Logitech M235 Wireless Mouse",
        "price" : NumberLong(175000),
        "tags" : [
                "mouse",
                "accessories"
        ]
}
{
        "_id" : 7,
        "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082",
        "price" : NumberLong(200000),
        "tags" : [
                "laptop",
                "accessories"
        ]
}
{
        "_id" : 8,
        "name" : "Samsung LC24F390FHEXXD Curved Monitor ",
        "price" : NumberLong(1750000),
        "tags" : [
                "monitor",
                "computer"
        ]
}


jadi dia akan dia akan mengambil index 1
dan mengambil elementnya sebanyak 2 element


jadi seperti itu penggunaan dari projection
mudah mudahan kalian paham ya 



*/