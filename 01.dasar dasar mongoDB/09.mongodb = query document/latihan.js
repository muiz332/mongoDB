// query document

/*

dimateri kali ini kita akan membahas mengenai query document pada 
mongodb

sama seperti direlational database 
didalam mongodb kita juga bisa melakukan query atau pencarian 
document yang sudah kita simpan dicollection

jadi untuk mengambil semua document
kita bisa menggunakan method yang namanya find()


nah terus gimana kalo misalkan kita ingin spesifik mencari 
document tertentu

db.collection.find(query)

bedanya kalo kita memasukan query itu dia akan mencari
secara spesifik

jadi karena untuk insert datanya kita menggunakan json
untuk querynya pun sama kita bisa menggunakan json




misalkan saya ingin mencari yang idnya namanya muiz


// select *  from customers where _id = 'muiz'
db.customers.find({
    _id: "muiz"
});

jadi disini saya punya sintax sqlnya dan mongodbnya


// select * from customers where name = 'Eko Kurniawan Khannedy'
db.customers.find({
    name: "Eko Kurniawan Khannedy"
});

// select * from products where price = 2000
db.products.find({
    price: 2000
});




// select * from orders where items.product_id = 1
db.orders.find({
    "items.product_id": 1
});

ketka kita memiliki embedded document kita bisa menggunakan 
kutip dan perilakunya seperti object pada javascript

nah tapikan data yang kita insert sebelumnya itu array ya
jadi tidak masalah walaupun ini array nanti mongodbnya 
akan mencari didalam arraynya yang product_idnya itu 1

maka yang dikembalikan adalah document utamanya 
bukan yang ada didalam embeddednya

jadi sesimple itu kalo kita mau query embedded object
didalam mongodb

cukup pakai titak  
kalo ada embedded object lagi cukup pakai titik lagi
jadi seperti object pada javascript untuk mengakses propertinya 












*/