// array query operator

/*

dimateri kali ini kita akan membahas mengenai 
array query operator


array operator

$all = mencocokan array yang mengandung element tertentu
$elemMatch = mengambil document jika tiap element diarray memenuhi kondisi tertentu
$size = mengambil document yang memiliki panjang array tertentu


nah tapi sebelum kita coba
kita insert dulu datanya yang dia memiliki fild array

db.product.insertMany([
    {
        _id: 6,
        name: "Logitech M235 Wireless Mouse",
        price: new NumberLong(175000),
        category: "laptop",
        tags: [
            "logitech", "mouse", "accessories"
        ]
    },
    {
        _id: 7,
        name: "Havit Cooler Pad Gaming 5Fan Blue led F2082",
        price: new NumberLong(200000),
        category: "laptop",
        tags: [
            "cooler", "laptop", "accessories", "fan"
        ]
    },
    {
        _id: 8,
        name: "Samsung LC24F390FHEXXD Curved Monitor ",
        price: new NumberLong(1750000),
        category: "computer",
        tags: [
            "samsung", "monitor", "computer"
        ]
    }
]);


sekarang kita coba



$all 

select * from product where (tag = "samsung" and tag = "monitor")

db.product.find({
    tags :{
        $all : ["samsung", "monitor"]
    }
})

jadi dia akan mencari didalam arraynya itu harus ada samsung dan monitor
kalo ada tampilin

{ "_id" : 8, "name" : "Samsung LC24F390FHEXXD Curved Monitor ", "price" : NumberLong(1750000), "category" : "computer", "tags" : [ "samsung", "monitor", "computer" ] }



$elemMatch

select * from product where tags in ("samsung", "mouse")

db.product.find({
    tags : {
        $elemMatch : {
            $in : ['samsung',"laptop"]
        }
    }
})

jadi dia akan mencari document yang memilili fild tags
dan fild tersebut memiliki array yang isinya harus samsung atau laptop

jadi dia akan mengecheck untuk tiap tiap value yang ada didalam array itu
kita bisa menggunakan operator perbandingan didalamnya

{ "_id" : 7, "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082", "price" : NumberLong(200000), "category" : "laptop", "tags" : [ "cooler", "laptop", "accessories", "fan" ] }

{ "_id" : 8, "name" : "Samsung LC24F390FHEXXD Curved Monitor ", "price" : NumberLong(1750000), "category" : "computer", "tags" : [ "samsung", "monitor", "computer" ] }



$size

db.product.find({
    tags : {
        $size : 3
    }
})

dia akan mencari panjang arraynya yaitu 3

{ "_id" : 6, "name" : "Logitech M235 Wireless Mouse", "price" : NumberLong(175000), "category" : "laptop", "tags" : [ "logitech", "mouse", "accessories" ] }
{ "_id" : 8, "name" : "Samsung LC24F390FHEXXD Curved Monitor ", "price" : NumberLong(1750000), "category" : "computer", "tags" : [ "samsung", "monitor", "computer" ] }


jadi seperti itu penggunaan dari array query operator
sama seperti operator perbandingan 





*/