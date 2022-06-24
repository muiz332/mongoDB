// index properties


/*



dimateri kali ini kita akan membahas mengenai index properties
pada mongodb

mongodb itu mendukung properties diindex
istilah properties diindex mungkin agak membingungkan 

sederhanannya adalah menambahkan behaviour atau kemampuan tertentu terhadap index
yang kita buat



TTL index

nah yang pertama kita akan membahas TTL index
TTL singkatan dari time to live yaitu waktu untuk hidup

TTL index digunakan sebagai waktu hidup document dicollection 
artinya data akan hilang dalam kurun waktu tertentu secara otomatis

TTL index  hanya dapat digunakan dalam field 
yang type datanya date

background proses dimongodb akan secara regular melakukan 
penghapusan data secara otomatis kalo waktunya sudah expired

sayangnya proses backround tersebut berjalan setiap 60 detik
sekali 

jadi kalo kalian menginsert data kemongodb terus
bikin TTL index terus diharapkan 10 detik kemudian datanya 
akan hilang 

nah itu tidak bisa 
setelah menunggu 10 detik kalian harus 
menuggu lagi selama 60 detik



sekarang pertanyaanya disaat kapan sih 
kita butuh TTL index ini?

biasanya kalo kalian menyimpan data temporary
contohnya kalian menginsert data kedalam mongodb

terus kalian ingin menghilangkannya dalam waktu 1 jam
nah ini bisa dilakukan dimongodb


sintax TTL index

db.collection.createIndex({
    field : 1 asc
},{
    expireAfterSecond : 10  // ini adalha 10 detik
})


jadi ini seperti bikin index biasa
kalian tinggal createIndex

dan diargument kedua kalian tambahkan 
propertinya







Unique index

nah selanjutnya ada Unique index
apa itu unix index?

Unique ini memastikan bahwa field field index tersebut tidak menyimpan 
date secara duplicate 

nah ini biasanya sering kita gunakan 
kalo kalian bikin index nomor hp atau email 

jadi gak boleh ada dua customer bisa pakai nomor hp dan email yang sama
nah kalian bisa tambahkan unique index

untuk memastikan bahwa datanya selalu unique difield tersebut
contohnya dimongodb field _id secara otomatis merupakan field index 

jadi kita tidak bisa pakai id yang sama dimongodb



sintax unique index

db.collection.createIndex({
    field : 1
},{
    unique : true
})


kalian tinggal tambahkan propertinya unique diisi true
kalian kita ingin fieldnya memiliki data yang unique



kita coba satu satu ya

// Create session collection
db.createCollection("sessions");

tapi sebelumnya kita bikin dulu collection yang namanya
sessions

jadi sessions ini misalnya nanti kita gunakan untuk
menyimpan data ketika orang login

lalu sessionnya kita masukkan kedalam collection 
session tersebut

nah harapannya kalo misalkan tidak ada aktifitas 
misalnya beberapa detik kemudian kita hapus datanya
dari mongodb







1.TTL index

nah selanjutnya kita akan coba bikin index
yang kita set sebagai TTL index




// Create TTL Index
db.sessions.createIndex({
    createdAt: 1
}, {
    expireAfterSeconds: 10
})

nama fieldnya nanti saya akan buat createAt
nah isinya harus date ya

kita lihat


> db.sessions.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_"
        },
        {
                "v" : 2,
                "key" : {
                        "createdAt" : 1
                },
                "name" : "createdAt_1",
                "expireAfterSeconds" : 10
        }
]

nah sudah ada ya itu
yang terakhir

sekarang kita insert datanya 



db.sessions.insertOne({
    _id: 1,
    session: "Session 1",
    createdAt: new Date()
});

new date itu waktu saat ini ya
jadi setelah 10 detik + 60 detik kemudian datanya documentnya akan hilang

> db.sessions.find()
{ "_id" : 1, "session" : "Session 1", "createdAt" : ISODate("2022-03-04T06:40:25.002Z") }



sambil menunggu kita akan bahas mengenai unique index



2.unique index

kita akan menggunakan colletion customer

> db.customer.find()
{ "_id" : "muiz", "full_name" : "muiz" }
{ "_id" : "eko", "full_name" : "Eko Kurniawan Khannedy" }
{ "_id" : "kurniawan", "full_name" : "Eko Kurniawan Khannedy" }
{ "_id" : "budi", "full_name" : "Budi", "customFields" : { "hobby" : "Gaming", "university" : "Universitas Belum Ada" } }
{ "_id" : "joko", "full_name" : "Joko", "customFields" : { "ipk" : 3.2, "university" : "Universitas Belum Ada" } }
{ "_id" : "rudi", "full_name" : "Rudi", "customFields" : { "motherName" : "Tini", "passion" : "Entepreneur" } }


nah ditiap tiap documentnya 
kita tidak punya email

nah cara bikin emailnya seperti ini 

db.customer.updateMany({}, [
    {
        $set: {
            email: {
                "$concat": ["$_id", "@" , "example.com"]
            }
        }
    }
])

jadi ini adalah operator aggragetions
ini bacanya saya akan mengupdate semua document

lalu saya tambhakan field baru yang namanya email
dan isinya saya gabungkan atau contact

dari idnya lalu @ dan example.com

db.customer.find()
{ "_id" : "muiz", "full_name" : "muiz", "email" : "muiz@example.com" }
{ "_id" : "eko", "full_name" : "Eko Kurniawan Khannedy", "email" : "eko@example.com" }
{ "_id" : "kurniawan", "full_name" : "Eko Kurniawan Khannedy", "email" : "kurniawan@example.com" }
{ "_id" : "budi", "full_name" : "Budi", "customFields" : { "hobby" : "Gaming", "university" : "Universitas Belum Ada" }, "email" : "budi@exa
mple.com" }
{ "_id" : "joko", "full_name" : "Joko", "customFields" : { "ipk" : 3.2, "university" : "Universitas Belum Ada" }, "email" : "joko@example.co
m" }
{ "_id" : "rudi", "full_name" : "Rudi", "customFields" : { "motherName" : "Tini", "passion" : "Entepreneur" }, "email" : "rudi@example.com"
}


nah sekarang kita akan tambahkan unique index 
pada field emailnya 

db.customer.createIndex({
    email : 1
}, {
    unique : true
})



nah sekarang kita akan coba memasukkan data yang 
emailnya sama

db.customer.insertOne({
    _id: "gagal",
    full_name : "Gagal",
    email: "muiz@example.com"
})

karena email muiz itu sudah ada 
kalo saya jalankan

 "errmsg" : "E11000 duplicate key error collection: ecommerce.customer index: email_1 dup key: { email: \"muiz@example.com\" }",


maka akan tampil pesan error
katanya field emailnya ada yang duplicate

jadi kayak mirip direlational database 
jadi kalian bisa mengset satu column itu harus unique

nah dimongodb juga bisa
kalian cukup menambahkan index 
lalu set indexnya sebagai unique index



nah sekarang kita akan kembali kesession
lagi

kita lihat datanya

db.sessions.find()

kalo kalian lihat documentnya
sudah hilang ya

jadi seperti itu ya materi kali ini mengenai
index properties

mudah mudahan kalian paham





*/  