// indexes pada mongodb 

/*


dimateri kali ini kita akan membahas mengenai indexes 
pada mongodb

apa itu indexes?
index adalah fitur dimongodb untuk mengefisiensikan proses query 

tanpa index mongodb harus melakukan proses query dengan cara collection scan 
artinya dia akan mencari seluruh data dari awal sampai akhir

jadi kalo misalkan datanya hanya 10 ribu itu masih cepet ya
tapi bayangkan kalo datanya udah mencapai jutaan
itu bakal lambat banget 

jika terdapat index pada collection mongodb
mongodb bisa menggunakan index untuk mendapatkan data
tanpa harus  melakukan pencarian keseluruh document

jadi dari pada kita melakukan collscan dari awal sampai akhir
kita bisa menambahkan index untuk mempercepat proses pencarian datanya


index adalah struktur data khusus yang menyimpan data 
dalam struktur yang mudah untuk dicari 

index menyimpan spesifik field, lalu mengurutkan 
data field tersebut 

hal ini hanya mempermudah ketika proses pencarian 
namum mempermudah ketika kita butuh melakukan pencarian
dalam bentuk range document (seperti paging)

secara default index dimongodb cara kerjanya sama seperti 
index direlational database

jadi semua database itu terdapat indexes 
yang membedakan adalah algoritmanya saja




Create index metho

db.collection.createIndex() = membuat index dicollection
db.collection.getIndexes() = melihat semua index dicollection
db.collection.dropIndex() = menghapus index dicollectyion



single field index

secara default field _id dimongodb sudah diindex secara otomatis 
jadi kita tidak perlu membuat index lagi secara manual untuk field _id

maka dari itu ketika kita mencari berdasarkan _id
itu akan cepat banget

kenapa cepat?
ya karena sudah ada indexnya

jadi index itu akan menyimpan field _id 
lalu mengurutkan data field tersebut

mongodb mendukung penuh pembuatan index disemua field yang ada
didalam document

dengan begitu bisa mempercepat proses query terhadapt field tersebut



sintax single field index

db.product.createIndex({
    field : 1 // ascending
})

db.product.createIndex({
    field : -1 // descending
})

jadi nanti mongodb akan mengurutkan 
field tersebut berdasarkan data fieldnya

jadi index ini akan menyimpan struktur data
atau field tersebut kalian bisa melakukan pengurutan 1 atau -1
dimana itu dapat mempercepat proses query



Compound indexes

jika kita butuh melakukan query terhadap lebih dari satu
field, kita juga bisa membuat index terhadap lebih dari satu field
atau disebut compound index

mongodb membatasi pembuatan maksimal field yang bisa
dibuat dicompound index adalah 32 field

jadi maksutnya disatu index kita bisa menambahkan banyak field
yang kita bisa urutkan 

maksimal 32 disatu index


sintax compound index

db.collection.createIndex({
    field1 : 1,
    field2 : -1
})

kita coba




misalnya kita ingin melakukan query dicollection
product dengan menggunakan field category

nah dibanding kita melakukan collscan
lebih baik kita menggunakan indexes


// Create index at category in products collection

db.product.createIndex({
    category : 1
})

{
        "numIndexesBefore" : 2,
        "numIndexesAfter" : 3,
        "createdCollectionAutomatically" : false,
        "ok" : 1
}

kalo sudah akan tampil seperti itu


nah untuk melihat index yang ada kalian bisa tulis begini

db.product.getIndexes()


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
                        "_fts" : "text",
                        "_ftsx" : 1
                },
                "name" : "name_text",
                "weights" : {
                        "name" : 1
                },
                "default_language" : "english",
                "language_override" : "language",
                "textIndexVersion" : 3
        },
        {
                "v" : 2,
                "key" : {
                        "category" : 1
                },
                "name" : "category_1"
        }
]

nah disini ada 3 index
yang pertama itu _id 

yang kedua itu name 
karena kita sudah melakukan create index berdasarkan text pada materi evaluation 
query operator

nanti itu akan kita bahas dimateri selanjutnya
yaitu text indexes

dan yang ke tiga itu adalah yang kita bikin
secara default nama indexnya yaitu category_1

angka terakhir itu sesuai dengan asc atau desc
jadi kita kalo misalkan ingin mendelete indexnya
kita bis amenggunakan keynya atau namenya


nah artinya sekarang kalo kita melakukan pencarian berdasarkan
category itu harusnya lebih cepat

db.product.find({category : 'food'})


{ "_id" : 1, "name" : "Indomie Ayam Bawang", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food", "hot", "popular", "Tranding
" ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.900Z"), "ratings" : [ 900, 800, 700, 600, 500, 400, 300, 200, 100 ] }
{ "_id" : 2, "name" : "Mie Sedap", "price" : NumberLong(2000), "category" : "food", "tags" : [ "food", "hot", "popular", "Tranding" ], "stok
" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.900Z"), "ratings" : [ 900, 800, 700, 600, 500, 400, 300, 200, 100 ] }
{ "_id" : 3, "name" : "Pop Mie Rasa Bakso", "price" : NumberLong(2500), "category" : "food", "tags" : [ "food", "hot", "popular", "Tranding"
 ], "stok" : 10, "lastModified" : ISODate("2022-02-20T13:25:13.901Z"), "ratings" : [ 900, 800, 700, 600, 500, 400, 300, 200, 100 ] }


ya walaupun sekarang tidak terasa ya karena
datanya masih sedikit


nah gimana kalo kita mau mendebugging
jadi kita ingin mendebugging apakah query
yang kita lakukan itu menggunakan index atau tidak

kalian bisa tuliskan begini

db.product.find({category: "food"}).explain()

tinggal kita tambahkan explain() diakhir


{
        "explainVersion" : "1",
        "queryPlanner" : {
                "namespace" : "ecommerce.product",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "category" : {
                                "$eq" : "food"
                        }
                },
                "queryHash" : "869982AD",
                "planCacheKey" : "E61E88D3",
                "maxIndexedOrSolutionsReached" : false,
                "maxIndexedAndSolutionsReached" : false,
                "maxScansToExplodeReached" : false,
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",   // udah pakek index
                                "keyPattern" : {
                                        "category" : 1
                                },
                                "indexName" : "category_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "category" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "category" : [
                                                "[\"food\", \"food\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "command" : {
                "find" : "product",
                "filter" : {
                        "category" : "food"
                },
                "$db" : "ecommerce"
        },
        "serverInfo" : {
                "host" : "DESKTOP-L27RMT6",
                "port" : 27017,
                "version" : "5.0.6",
                "gitVersion" : "212a8dbb47f07427dae194a9c75baec1d81d9259"
        },
        "serverParameters" : {
                "internalQueryFacetBufferSizeBytes" : 104857600,
                "internalQueryFacetMaxOutputDocSizeBytes" : 104857600,
                "internalLookupStageIntermediateDocumentMaxSizeBytes" : 104857600,
                "internalDocumentSourceGroupMaxMemoryBytes" : 104857600,
                "internalQueryMaxBlockingSortMemoryUsageBytes" : 104857600,
                "internalQueryProhibitBlockingMergeOnMongoS" : 0,
                "internalQueryMaxAddToSetBytes" : 104857600,
                "internalDocumentSourceSetWindowFieldsMaxMemoryBytes" : 104857600
        },
        "ok" : 1
}



nah kalian bisa lihat pada field stage
itu datanya IXSCAN  

nah itu artinya query kalian menggunakan index 
dibawahnya ada indexname 
itu yang dicari dari querynya


jadi query kalian sudah teroptimasi

nah kalo kalian cari misal  berdasarkan nama

db.product.find({name : "mie sedap"}).explain()

maka kalo kalian lihat stagenya itu dia adalah COLLSCAN
nah ini bahaya artinya untuk melakukan pencarian dia akan
melakukan pencarian dari awal sampai akhir

bayangkan kalo ada jutaan dia akan sangat lambat 

db.products.find({}).sort({
    category:1
}).explain();

begitu pula kalo kalian sorting berdasarkan 
category stagenya akan IXSCAN / index scan




nah sekarang kita akan coba yang
compound indexes

// Create index at price and tags in products collection

db.product.createIndex({
    stock : 1,
    tags : 1
})

{
        "numIndexesBefore" : 3,
        "numIndexesAfter" : 4,
        "createdCollectionAutomatically" : false,
        "ok" : 1
}


kalo kita lihat indexnya
maka akan adal index baru

        {
                "v" : 2,
                "key" : {
                        "stok" : 1,
                        "tags" : 1
                },
                "name" : "stok_1_tags_1"
        }





nah kan tadi kita buat indexnya itu menggunakan
dua field

db.product.find({
    stock: 10,
    tags: "popular"
});

nah sekarang bagimana kalo kita querynya hanya menggunakan 
stok saja 

db.product.find({
    stock: 10,
}).explain()

maka kalo saya ambil stagenya
"stage" : "IXSCAN",

dia akan tetap menggunakan index

nah ini yang menarik dimongodb
misalnya kalian membuat indexnya itu dua field
tetapi kalian hanya melakukan query yang pertama saja
yaitu stock

dia bakal kena indexnya
tapi kalo kalian query field yang kedua dan seterus itu 
tidak akan kena index 

jadi kalo kalian menambahkan 
field 1,2,3

nah yang bakal kena itu adalah 
1
1,2
1,2,3

kalo query satu field
itu hanya field pertama saja yang kena
sisanya tidak

kita coba  yang tags saja

db.product.find({
    tags : "popular"
}).explain()

 "stage" : "COLLSCAN"

nah dia collection scan ya
jadi field yang kedua dan seterusnya 
itu tidak akan kena index


inipun sudah lebih bagus ya dibandingkan
relational database

didalam relational database itu 
kalo kalian bikin indexnya dua coloum 

kalo kalian querynya dicoloum pertama saja 
itu tidak akan kena index

jadi harus beneran dua coloum yang diquery
tapi kalo mongodb itu combinations




Idexing strategy

- buat index yang mendukung query 
    gunakan single index jika hanya melakukan query terhadap satu field saja
    gunakan compound index jika melakukan query pertama atau combinations query

- buat index untuk mengurutkan hasil query
- sering sering lah menggunakan method explain() untuk mengecheck apakah query kita
  sudah dioptimize dengan index atau belum


ketika kalian tidak melakukan explain sering sering 
contohnya kalian bikin query baru tapi tidak melakukan explain()

kalo datanya kecil tidak terasa tapi nanti 
ketika diproduction datanya sudah besar kalian lupa
melihat explain() 

dan ternyata belum ada indexnya 
ketika dirunning dan itu akan berat didatabasenya 

yang paling parah mungkin databaenya nanti bisa mati gara gara 
scanning datanya terlalu besar


sampai disini materi kali ini 
mudah mudahan kalian paham

*/