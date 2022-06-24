// schema validation


/*


dimateri kali ini kita akan belajar mengeni schema 
validation pada mongodb

pada relational database kita biasanya menambahkan constraint 
terhadap data yang ada ditable 

contohnya kalo kalian bikin column itu kalian bisa tambahkan
not null, max lengthnya berapa nah itu artinya constraint


nah didalam mongodb bagaimana kalo kita ingin 
menambahkan constraint seperti itu?

kalo didalam mongodb fitur untuk validasi lebih canggih dibanding constraint 
direlational database

mongodb itu mendukung schema validation menggunakan
JSONschema secara otomatis dimongodb

jadi kalian tidak perlu lagi melakukan validasi diaplikasi
kalian

cukup masukkan validasinya kedalam mongodb 
nanti secara otomatis mongodbnya akan melakukan validasi 



json schema adalah standar resmi untuk memvalidasi data json
dengan menggunakan json schema kita bisa memberi batasan  data json 
apa yang valid, sehingga bisa dimasukkan kedalam collection 

https://json-schema.org/


misalnya kalo fildnya name itu harus string
kalo dimasukkan angka itu tidak boleh

kita bisa menggunakan schema validation untuk
melakukan itu


untuk menambahkan validasi menggunakan json schema itu 
ketika kalian membuat collection 

sintax

db.createCollection('collection',{
    validator : {
        $jsonSchema : {
            // json schma
        }
    }
})


nah diparameter kedua kalian bisa 
menambahkan validatornya


nah atau gimana kalo misalkan kita sudah 
bikin collection 


gimana cara kalo kita ingin menbahkan schema validation ini ?
kalian tinggal tuliskan sintax ini 

db.runCommand({
    collMod : 'collecion',
    validationAction: 'error',
    validator : {
        $jsonSchema : {
            // json schema
        }
    }
})

nah untuk validation actionnya itu kalo error 
datanya tidak akan masuk kedalam collecion

kalo warning itu datanya tetap masuk tetapi akan
ada pemberitahuan

nah apa yang terjadi kalo misalkan kita menambahkan 
kecollection yang sudah ada datanya 

apa yang terjadi dengan data tersebut 
nah data yang sudah ada itu tidak akan diapa apain ya 



jadi kalo ada data yang tidak valid dengan schema jsonnya itu 
datanya tidak akan diapa apain

jadi schema validation ini akan berlaku ketika kita
insert atau update datanya


kita coba

db.createCollection("merchants", {
    validationAction: "error",
    validator: {
        $jsonSchema: {
            bsonType: "object", // typenya object
            required: ["name", "balance", "type", "address"], // harus ada fild yang ada didalam array
            properties: { 
                // untuk detil itu ditambahkan diproperties
                name: {
                    bsonType: "string", // typenya string
                    description: "Must be a string"
                },
                balance: {
                    bsonType: "long",
                    description: "Must be a long"
                },
                type: {
                    enum: ["PREMIUM", "REGULAR"], // enum itu kita harus memasukkan string
                    premium atau regular
                    description: "Can only be one of enum values"
                },
                address: {
                    bsonType: "object",
                    required: ["street", "city"],
                    properties: {
                        street: {
                            bsonType: "string",
                            description: "Must be a string"
                        },
                        city: {
                            bsonType: "string",
                            description: "Must be a string"
                        },
                        country: {
                            bsonType: "string",
                            description: "Must be a string"
                        }
                    }
                }
            }
        }
    }
})


nah sekarang kita tambahkan datanya

// Insert valid document
db.merchants.insertOne({
    _id: "toko1",
    name: "Toko Satu",
    balance: new NumberLong(1000000),
    type: "PREMIUM",
    address: {
        street: "Jalan Raya Belum Jadi",
        city: "Jakarta",
        country: "Indonesia"
    }
})

ini adalah data yang valid ya 

{ "_id" : "toko1", "name" : "Toko Satu", "balance" : NumberLong(1000000), "type" : "PREMIUM", "address" : { "street" : "Jalan Raya Belum Jad
i", "city" : "Jakarta", "country" : "Indonesia" } }



nah sekarang kita coba 
menambahkan datanya tetapi yang tidak valid

// Inser Invalid document: Name is blank
db.merchants.insertOne({
    _id: "toko2",
    balance: new NumberLong(1000000),
    type: "PREMIUM",
    address: {
        street: "Jalan Raya Belum Jadi",
        city: "Jakarta",
        country: "Indonesia"
    }
})

jadi namanya saya kongongi
maka otomatis dia akan error

"errmsg" : "Document failed validation",

jadi katanya document validasi gagal





nah sekarang saya akan coba
menambahkan schema validation pada collection 
yang sudah dibuat

// Add validator to customers collection
db.runCommand({
    collMod: "customer",
    validationAction: "error",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["full_name"],
            properties: {
                full_name: {
                    bsonType: "string",
                    description: "Must be a string"
                }
            }
        }
    }
})

{ "_id" : "muiz", "full_name" : "muiz" }
{ "_id" : "eko", "full_name" : "Eko Kurniawan Khannedy" }
{ "_id" : "kurniawan", "full_name" : "Eko Kurniawan Khannedy" }


jadi datanya tidak akan hilang ketika
kita menambahkan schema validation

mudah mudahan kalian paham 





*/