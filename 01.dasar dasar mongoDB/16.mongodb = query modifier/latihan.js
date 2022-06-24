// query modifier

/*

dimateri kali ini kita akan membahas mengenai query modifier

apa itu query modifier?
query modifier adalah memodifikasi hasil query yang telah kita lakukan 

contoh yang sering kita lakukan seperti 
mengubah query menjadi jumlah data, membatasi jumlah data 
dengan paging dan lain lain


untuk memodifikasi hasil query kita bisa menambahkah mehod query modifier
setelah menggunakan function find



method query modifier


count()              menghitung jumlah document
skip(size)           menghiraukan document dimulai dari document paling atas
limit(size)          membatasi document yang ditampilkan
sort(query)          mengurutkan hasil query
pretty()             menampilkan document berbentuk json


kita coba





1.count()

select count(*) from product

db.product.find({}).count()

nah ini artinya saya ingin mangambil semua document
object kosong itu semua document ya
dan saya ingin ambil jumlahnya saja

maka dia akan tampil 8 


2. skip(size)

select * from product offset 2

db.product.find({}).skip(2)


{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop" }
{ "_id" : 6, "name" : "Logitech M235 Wireless Mouse", "price" : NumberLong(175000), "category" : "laptop", "tags" : [ "logitech", "mouse", "
accessories" ] }
{ "_id" : 7, "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082", "price" : NumberLong(200000), "category" : "laptop", "tags" : [ "cooler
", "laptop", "accessories", "fan" ] }
{ "_id" : 8, "name" : "Samsung LC24F390FHEXXD Curved Monitor ", "price" : NumberLong(1750000), "category" : "computer", "tags" : [ "samsung"
, "monitor", "computer" ] }


jadi dia akan mengskip dua data pertama



3.limit(size)

select * from product limit 4

db.product.find({}).limit(4)

{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000) }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000) }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone" }


jadi dia akan mengambil dari data pertama 
sampai 4

jadi kalo misalkan kalian punya datanya 1000
kalian bisa melakukan limit untuk menampilkan datanya 



4.sort()

select * from product order by name asc , categpry des
asc / des

nah sort itu ada asc atau ascending (naik) dan 
des atau descending (menurun)

didalam mongodb itu tidak ada 
yang adalah 1 dan -1 

1 itu asc dan -1 itu des


db.product.find({}).sort({
    name : 1,
    category : -1
})

jadi kalo misalkan saya seperti ini 
bacanya saya akan mengurutkan berdasarkan nama secara asc
dan jika ada nama yang sama urutkan berdasarkan category secara des


{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop" }
{ "_id" : 7, "name" : "Havit Cooler Pad Gaming 5Fan Blue led F2082", "price" : NumberLong(200000), "category" : "laptop", "tags" : [ "cooler
", "laptop", "accessories", "fan" ] }
{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000) }
{ "_id" : 6, "name" : "Logitech M235 Wireless Mouse", "price" : NumberLong(175000), "category" : "laptop", "tags" : [ "logitech", "mouse", "
accessories" ] }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000) }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone" }
{ "_id" : 8, "name" : "Samsung LC24F390FHEXXD Curved Monitor ", "price" : NumberLong(1750000), "category" : "computer", "tags" : [ "samsung"
, "monitor", "computer" ] }




5.pretty()

kita bisa menggunakan method ini jika ingin tampilannya
rapi seperti json

db.product.find().pretty()

{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000) }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000) }
{
        "_id" : 3,
        "name" : "Pop Mie Rasa Bakso",
        "price" : NumberLong(2500),
        "category" : "food"
}
{
        "_id" : 4,
        "name" : "Samsung Galaxy S9+",
        "price" : NumberLong(10000000),
        "category" : "handphone"
}
{
        "_id" : 5,
        "name" : "Acer Precator XXI",
        "price" : NumberLong(25000000),
        "category" : "laptop"
}
{
        "_id" : 6,
        "name" : "Logitech M235 Wireless Mouse",
        "price" : NumberLong(175000),
        "category" : "laptop",
        "tags" : [
                "logitech",
                "mouse",
                "accessories"
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
                "fan"
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
                "computer"
        ]
}


maka dia akan tampil seperti itu
minimal ada 3 fild ya jika ingin tampil seperti itu



6.paging

nah misalkan kita akan melakukan paging

jadi saya ingin mengskip dan melimit
caranya kalian tulis seperti ini


db.product.find({}).limit(4).skip(2)


{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food" }
{ "_id" : 4, "name" : "Samsung Galaxy S9+", "price" : NumberLong(10000000), "category" : "handphone" }
{ "_id" : 5, "name" : "Acer Precator XXI", "price" : NumberLong(25000000), "category" : "laptop" }
{ "_id" : 6, "name" : "Logitech M235 Wireless Mouse", "price" : NumberLong(175000), "category" : "laptop", "tags" : [ "logitech", "mouse", "
accessories" ] }


nah kenapa kok hasil documentnya ada 4 bukanya 2 ya
kan kita menulisnya limit dulu 4 jadi diambil 1-4
nah diskip 2 maka yang tampil harusnya 3 dan 4

jadi ketika kita melakukan paging
itu ada urutannya

jadi yang pertama itu skip
dan yang kedua itu limit

jadi kalo misalkan kalian skip dulu ya tidak apa apa



jadi ini adalah query modifier yang bisa kalian gunakan
didalam mongodb


jadi mudah mudahan kalian terbiasa menggunakan mongodb 
ini dan mudah mudahan kalian paham





*/