// operator logika 

/*

dimateri kali ini kita akan membahas mengenai 
operator logika pada mongodb


operator logika

-------------------------
$and = logika and
-------------------------
$or = logika or
-------------------------
$nor = kebalikan or yaitu jika semua kondisinya false maka dia true
------------------------
$not = logika not
------------------------


nah sintaxnya seperti ini

and, or, nor

db.collection.find({
    $operator : [
        { expreession},
        {expresstion}
    ]
})

nah kalo didalam operotor perbandingan
itu diawalnya adalah fildnya
baru didalamnya adalah operatornya

kalo operator logika tidak
diawalnya adalah operatornya 
dan didalamnya adalah kondisinya

yang dibungkus dalam sebuah array

nah tapi kalo not itu beda
jadi sintaxnya seperti ini

db.collection.find({
    fild : {
        $not : {
            kondisi
        }
    }
})

jadi mirip dengan operator perbandingan ya


nah sekarang kita coba ya




$and

select * from product where name in ("Indomie Ayam Bawang", "Mie Sedap","Pop Mie Rasa Bakso") and price < 2500

db.product.find({
    $and : [
        {
            name : {
                $in : ["Indomie Ayam Bawang", "Mie Sedap","Pop Mie Rasa Bakso"]
            }
        },
        {
            price : {
                $lt : 2500
            }
        }
    ]
})

jadi ini banyak saya ingin mencari name didalam array 
dan pricenya itu lebih kecil 2500

{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000) }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000) }


atau kalian bisa memberikan range pada harganya

select * from products where price between 10000000 and 20000000 and category != 'food'

db.product.find({
    $and: [
        {
            price: {
                $gte: 10000000,
                $lte: 20000000
            }
        },
        {
            category: {
                $ne: 'food'
            }
        }
    ]
});

jadi kalian bisa memasukkan rangenya seperti itu

{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone" }




$or

select * from products where name in ("Mie Sedap","Pop Mie Rasa Bakso") or price >= 2500


db.product.find({
    $or : [
        {
            name : {
                $in : ["Mie Sedap","Pop Mie Rasa Bakso"]
            }
        },
        {
            price : {
                $gte : 2500
            }
        }
    ]
})

jadi jika salah satunya true maka dia akan dikembalikan

{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000) }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop" }
>                                                                                       



$nor

db.product.find({
    $nor : [
        {
            name : {
                $in : ["Mie Sedap","Pop Mie Rasa Bakso"]
            }
        },
        {
            price : {
                $gte : 2500
            }
        }
    ]
})


{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000) }

jadi ketika semua kondisinya false
maka dia akan mengembalikan document yang nilainya false 

s



$not

select * from product where category <> ("laptop", "handphone")

db.product.find({
    category: {
        $not: {
            $in: ["laptop", "handphone"]
        }
    }
});


{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000) }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000) }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food"}

jadi jika tidak ada fild category dia akan dikembalikan
karena dia menghasilkan nilai null

dan null tidak ada didalam array



// select * from products where category not in ('laptop', 'handphone', null)

db.product.find({
    category: {
        $not: {
            $in: ["laptop", "handphone", null]
        }
    }
});

tapi kalo misalkan saya kasih null 
maka yang null atau yang tidak punya fild category 
tidak akan ditampilkan

{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }
>   





jadi seperti itu query logika pada mongodb ya
mudah mudah kalian paham





*/

