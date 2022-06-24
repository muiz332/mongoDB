//wildchard indexes

/*

dimateri kali ini kita akan membahas mengenai wildchard indexes pada mongodb

apa itu wildchard indexes?
mongodb itu mendukung wildchard indexes, dimana ini 
digunakan untuk membuat index terhadap field yang belum diketahui 
atau filed yang sering berubah ubah

misalnya kita punya sebuah embedded document dengan type field customFilds
dimana isinya bisa bebas sesuai dengan data yang dimasukkan

agar bisa mendukung proses query dengan cepat pada field tersebut 
kita bisa menggunakan wildchard indexes




sintax wildcard indexes

db.collection.createIndex({
    "field.$**" : 1
})


jadi ini adalah nama field yang embedded object 
lalu titik dolar bintang x 2 

artinya semua field yang ada didalam embedded document tersebut
akan kita berikan index

tidak peduli mau bentuknya bagaimana pun 
ketika tiba tiba menambah field baru itu otomatis akan diindex


tapi hati hati saat bikin wildchard index 
karena kalo isinya terlalu banyak variasinya akan banyak juga indexnya


semakin banyak index yang kita buat, semakin lambat proses
perubahan data, seperti insert update

kalo query akan lebih cepat

jadi kalian bisa memilih nih
mau query cepat tapi insert atau updatenya lambat

atau query lambat tapi insert atau updatenya cepat
itu tergantung aplikasi yang kalian buat seperti apa

lebih membutuhkan query atau insert dan update

kita coba





db.customer.createIndex({
    "customFields.$**" : 1 // asc
})

misalkan saya akan buat index pada field
customField

dimana ini akan menjadi embedded object yang 
berbeda tiap documentnya

karena mungkin tiap orang memiliki data yang beda beda
nah agar semua bisa diquery kita bisa menambahkan wildchard index


> db.customer.find()
{ "_id" : "muiz", "full_name" : "muiz" }
{ "_id" : "eko", "full_name" : "Eko Kurniawan Khannedy" }
{ "_id" : "kurniawan", "full_name" : "Eko Kurniawan Khannedy" }



nah walaupun sebenarnya disini saya belum punya field
customField

kalo bikin index itu tidak harus ada fieldnya dulu ya 
justru paling bener itu bikin index diawal sebelum aplikasinya
sudah besar

karena kalo aplikasinya sudah besar kalian tambahkan index 
proses pembuatan indexnya juga akan menjadi lambat
karena si mongodb harus menstruktur ulang data yang kita index

jadi kita harus berikan index diawal ketika
aplikasinya masih belum besar


nah kan fieldnya belum kita buat 
tapi kalo kita check indexya


> db.customer.getIndexes()
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
                        "customField.$**" : 1
                },
                "name" : "customField.$**_1"
        }
]


nah sudah ada tuh wildchard indexnya

nah sekarang kita coba menginsert data
kita coba insert many



// Insert many customers
db.customer.insertMany([
    {
        _id: "budi",
        full_name: "Budi",
        customFields: {
            hobby: "Gaming",
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "joko",
        full_name: "Joko",
        customFields: {
            ipk: 3.2,
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "rudi",
        full_name: "Rudi",
        customFields: {
            motherName: "Tini",
            passion: "Entepreneur"
        }
    }
])

nah kalian lihat tiap tiap embedded documetnya itu berbeda beda
isinya 

nah kalo kalian memiliki kasus seperti ini ada baiknya
kalian menggunakan wildcard indexes

jadi jangan bikin indexnya satu satu
jangan bikin index hobby index university
jangan begitu 

kalian bikin saja wildcard index


nah lalu kita coba debugging querynya

// Debug wildcard index
db.customer.find({
    "customFields.passion": "Enterpreneur"
}).explain();

kalo kita lihat stagenya 
"stage" : "IXSCAN",

nah dia sudah diindex



db.customer.find({
    "customFields.ipk": 3.2
}).explain();

nah bagaimana kalo diipk 

kalo kita lihat stagenya 
"stage" : "IXSCAN",

nah dia sudah diindex



db.customer.find({
    "customFields.hobby": "Gaming"
}).explain();


kalo kita lihat stagenya 
"stage" : "IXSCAN",

nah dia sudah diindex



nah jadi seperti itu kalo misalnya kita ingin
bikin sekali index tapi semua field yang ada didalam
embedded object tersebut diindex juga

mudah mudahan kalian paham





*/