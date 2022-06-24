// delete document


/*


dimateri kali ini kita akan membahas mengenai
delete document pada mongodb

mongodb memiliki method yang bisa kita gunakan untuk
menghapus document secara permannet 

document yang sudah kita hapus tidak akan bisa dikembalikan lagi



delete method 

db.collection.deleteOne({query}) = menghapus salah satu document sesuai dengan kondisi query
db.collection.deleteMany({query}) = menghapus banyak document yang sesuai dengan kondisi query



nah kita coba
tapi sebelumnya kita tambahkan datanya dulu

db.customer.insertOne({
    _id : "spammer",
    full_name : "Spammer"
})

> db.customer.find()
{ "_id" : "spammer", "full_name" : "Spammer" }
{ "_id" : "muiz", "full_name" : "muiz" }




1.deleteOne()

db.customer.deleteOne({
    _id : "spammer"
})

{ "_id" : "muiz", "full_name" : "muiz" }

nah sudah terhapus ya









kita tambahkan datanya lagi

db.customer.insertMany([
    {
        _id: "spammer1",
        full_name: "Spammer1"
    },
    {
        _id: "spammer2",
        full_name: "Spammer2"
    },
    {
        _id: "spammer3",
        full_name: "Spammer3"
    }
]);

{ "_id" : "muiz", "full_name" : "muiz" }
{ "_id" : "spammer1", "full_name" : "Spammer1" }
{ "_id" : "spammer2", "full_name" : "Spammer2" }
{ "_id" : "spammer3", "full_name" : "Spammer3" }




2.deleteMany({})

db.customer.deleteMany({
    _id : {
        $regex : "spammer"
    }
})

nah untuk querynya itu sama dengan find() ya
jadi kalian bisa kalian kondisi
kalian bisa kalian operator logika

nah untuk regex ini digunakan untuk
mencari id yang memiliki kata spammer

{ "_id" : "muiz", "full_name" : "muiz" }

jadi kalo saja jalankan
maka saya hanya punya satu document


jadi seperti itu cara kita menghapus
document

mudah mudahan kalian paham ya 









*/