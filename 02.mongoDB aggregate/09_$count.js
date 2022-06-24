// $ count

/* 

$count digunakan untuk menghitung jumlah value dari semua document yang
ada didalam collections

db.persons.aggregate([
    {$match : {isActive : true}},
    {$group : {_id : "$age"}}
])


{ "_id" : 20 }
{ "_id" : 39 }
{ "_id" : 40 }


nah kalo kita jalankan 
itu hasilnya 3 document

nah kita bisa hitung menggunakan $count
kalian tinggal tuliskan

db.persons.aggregate([
    {$match : {isActive : true}},
    {$group : {_id : "$age"}},
    {$count : "jumlahDocument"}
])

{ "jumlahDocument" : 3 }

maka hasilnya akan 3
untuk value yang ada didalam $count itu akan menjadi nama field
pada saat muncul hasilnya

atau kalian jalakan seperti ini

db.persons.aggregate([
    {$count : "jumlahDocument"}
])

kalo kita jalankan dia akan mengambil jumlah
seluruh document yang ada 











*/