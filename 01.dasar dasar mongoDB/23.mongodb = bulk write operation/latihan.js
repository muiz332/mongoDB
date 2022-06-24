// bulk write operation

/*

dimateri kali ini kita akan membahas mengenai 
bulk wirte operation pada mongodb


komunikasi antar aplikasi dengan database biasanya dilakukan 
secara request response

artinya setiap perintah yang ingin kita kirimkan dari aplikasi
kedatabase akan diresponse secara langsung oleh database

proses tersebut akan sangat lambat jika kita menghadapi kasus
harus memanipulasi data besar secara langsung 

misalnya upload data dari file dengan jumlah jutaan kedalam database

kenapa lambar?
kalo kalian mengirim satu juta request ke mongodb 
maka mongodb akan membalas satu juta kali juga

nah mongodb mendukung bulk write operation
yaitu operasi bulk yang dalam satu request kita bisa mengirimkan
banyak perintah sekaligus

fitur ini sangat cocok pada kasus jika kita ingin melakukan 
operasi bulk atau batch secara banyak sekaligus

misalnya kalian mengupload file menggunakan exel 
itukan sekali upload file menggunakan exel isinya mungkin ada 
ribuan bahkan bisa mencapai ratusan ribu

nah kan tidak mungkin kalian ingin 
memasukkan kedalam databasenya itu satu persatu 

karena terlalu lama 
karena setiap insert akan dibalas sama mongodb

kalian ingin insertnya sekaligus banyak langsung 100 misalnya




bulk write method

insertMany() = menambahkan document dalam jumlah banyak
updateMany() = mengupdate document yang cocok dengan kondisi 
deleteMany() = menghapus document yang cocok dengan kondisi
buldWrite() = melakukan operasi insert,update,delete sekaligus



supported bulk write operation


insertOne
updateOne
updateMany
replaceOne
deleteOne
deleteMany

jadi ini adalah operasi yang bisa kita gunakan didalam
bulk write



buld write sintax


db.customer.bulkWrite([
    {
        operasion 1
    },
    {
        operation 2
    },
    {
        operaion 3
    },
    {
        operation n
    }
])


jadi didalam bulkWrite()
isinya adalah array 

dimana tiap tiap array itu isinya adalah operation yang disupport tadi


kita coba



db.customer.bulkWrite([
    {
        insertOne: {
            document: {
                _id: "eko",
                full_name: "Eko"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "kurniawan",
                full_name: "Kurniawan"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: ["eko", "kurniawan", "khannedy"]
                }
            },
            update: {
                $set: {
                    full_name: "Eko Kurniawan Khannedy"
                }
            }
        }
    }
])



{ "_id" : "muiz", "full_name" : "muiz" }
{ "_id" : "eko", "full_name" : "Eko Kurniawan Khannedy" }
{ "_id" : "kurniawan", "full_name" : "Eko Kurniawan Khannedy" }

nah jadi begitu kita bisa langsung memasukkan banyak
operasi pada mongodbnya



untuk lebih detilnya kalian
bisa baca https://docs.mongodb.com/manual/core/bulk-write-operations/


mudah mudahan kalian paham ya 






*/