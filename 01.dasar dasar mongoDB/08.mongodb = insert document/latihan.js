// insert document


/*

dimateri kali ini akan belajar bagaiamna cara untuk menginsert 
document pada sebuah collection

untuk menyimpan data pada mongodb kita perlu membuat document 
dalam bentuk json 

dan nanti sijson ini akan diencode dan diinsert kedalam 
collection mongodbnya


nah fild _id tidak wajib dimasukkan
jika kita tidak memasukkan fild id maka secara otomatis 
mongodb akan membuat _id baru secara random dengan type data objectid

atau kita juga bisa secara explisit membuat object id baru dengan menggunakan
sintax new ObjectId()

nah untuk memasukkan document kedalam collection
ini ada beberapa method yang bisa kita gunakan 

- db.collection.insertOne(document)
    memasukkan sebuah document
- db.collection.insertMany(array)
    memasukkan banyak document yang dibungkus dalam array
- db.collection.insert(document / array)
    dua duanya tetapi tidak direkomenadasikan 
    karena ini versi dulu

kita coba

misalkan saya ingin collectin customernya 
seperti ini

db.customer.insertOne({_id : "muiz", nama : "M.Mu'izzuddin"})

jadi kita bisa memasukkan sendiri _id 
type databanya bisa string atau integer

nah selanjutnya kita isi collection product

 db.product.insertMany([
... { _id : 1 , nama : 'indomie ayam bawang', harga : new NumberLong(2000)},
... {_id : 2, nama : 'mie sedap', harga : new NumberLong(2000)}])

nah karena saya disini ingin harganya type datanya long yaitu 64 bit
karena harga itu kan bisa mencapai  jutaan atau lebih
kita bisa pakai long karena dia 64bit

kalo kita menuliskan langsung itu dia double atau 
type data data yang digunakan untuk menyelesaikan pembagian
yang memiliki banyak koma dibelakangnya

https://belajarc.com/2016/10/16/2-4-tipe-data-integer-float-dan-double/
https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/double-data-type

kalo ingin integer tulis saja new NumberInt()


yang terakhir kita akan memasukkan data order
dengan embedded document

> db.orders.insertOne({
... _id : new ObjectId(),
... total : new NumberLong(8000),
... items : [
... {
... product_id : 1,
... harga : new NumberLong(2000),
... quantity : new NumberInt(2),
... },
... {product_id : 2,
... harga : new NumberLong(2000),
... quantity : new NumberInt(2)
... }
... ]
... })

nah disini ada item yang dia embedded array
bayangkan kalo kalian menggunakan realtional database 

itu kalian harus bikin table baru 
yang misalkan namanya order detil

lalu dimasukkan kedalam sana detil detilnya
tapi kalo menggunakan mongodb kita bisa menggunakan embedded
document

nah kenapa saya bikin emdedded seperti ini 
karena order item itu tidak bisa berdiri sendiri

jadi order item itu harus ada ordernya
jadi setiap kita membeli itu datanya masuk kedalam order item

jadi lebih baik saya masukkan kedalam embedded document seperti ini


nah untuk melihat documentnya kita bisa menuliskan seperti ini 
db.collection.find()




*/