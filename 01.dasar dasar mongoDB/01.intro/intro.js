// apa itu mongoDB

/*

kali ini kita akan masuk kesebuah topik yang seru yaitu mengenai mongoDB




# pengetian

apa itu mongoDB? 
nah sebetulnya kalian bisa lihat detilnya diwebsitenya
yaitu https://www.mongodb.com

nah kita akan bahas sedikit
mulai dari kenapa namanya mongoDB

nah mongoDB ini sebenarnya diambil dari kata 
Humongous Database

dimana humongous itu artinya besar sekali 
seperti namanya database ini bisa mengelola data yang sangat 
banyak dan sangat besar

dari humongous ini diambilah kata mongo 
atau kalian bisa baca diwebsitenya 

apa itu mongodB


nah katanya mongoDB itu adalah sebuah database berbasis document
yang memiliki skalabilitas dan fleksibilitas yang kita inginkan 
dan juga memiliki fitur query dan indexing yang kita butuhkan 

jadi ada fitur yang kita inginkan 
dan fitur yang kita butuhkan 

nah dipengertiannya ada istilah 
database berbasis document

nah maksutnya bagaimana?
sebelum kita lebih jauh membahas mengenai mongoDB
kita bahas dulu apasih database berbasis document

karena database berbasis document ini berbeda dengan
mysql 

nah dia berbeda jenis dengan DBMS mongoDB
kalo mongoDB ini database berbasis document
sedangkan mysql atau database lain yang dibelakangnya 
ada tulisan sql 

itu bisa dianggap sebagai database relational 
beda dengan database berbasis document ini


database berbasis document ini merupakan salah satu jenis 
DBMS yang disebut dengan NoSql Database

dan mongoDB ini merupakan database berbasis document
dan termasuk kedalam jenis NoSql Database



NoSql Database

- Not Only Sql
    nah NoSql Database ini artinya not only sql
    jadi dia bisa melakukan apa yang dilakukan oleh 
    sql database bahkan lebih

- Schemaless / flexible Schema
    NoSql database ini dia disebut dengan database Schemaless 
    database Schemalass ini adalah database yang tidak memiliki 
    Schema

    maksutnya apa 
    jadi kita tahu kalo misalkan kita bikin database 
    dimysql 

    kita tahu sebelum kita membuat data itu kita harus mendefinisikan dulu 
    struktur dari database dan tablenya atau istilahnya DDL Data Definition Language 

    kita harus bikin dulu nama tablenya apa
    struktur tablenya seperti apa 
    ada fild apa saja ukurannya berapa

    type datanya apa saja 
    itu namanya schema database 

    jadi kalo misalkan kita sudah punya table yang memiliki 
    5 fild didalamya ada id nama email dll

    maka data data didalam harus mengikuti schema tersebut
    harus sama semua data harus punya struktur tadi

    nah sedangkan NoSql itu tidak ada schemanya  
    jadi datanya dialamnya itu mungkin saja 
    beda beda 

    sehingga disini ditawarkan flexibilitas 
    jadi schemanya atau aturan dari databasenya bisa flexible 

    jadi menarik ini 
    sebelumnya kita harus belajar bikin table secara terstruktur
    dengan menggunakan schemaless ini boleh saja datanya tidak terstruktur


- Denormalization 
    nah kalo dialam mysql itu kita mengenal ada yang namanya
    normalisasi

    disini ada denormalization 
    ya ini menyambung dischemass tadi

    karena datanya boleh saja tidak terstruktur 
    makanya tidak apa apa kita memiliki data yang tidak normal 

    kalo dimysql itu sebaiknya data datanya itu sudah 
    benar sudah melalui proses normalization 


- non relational database
    jadi dialam NoSql ini bisa saja tidak ada relasi atau hubungan
    antar datanya 

    jadi disini tidak menganut primary key, foreign key 
    karena tidak ada relasi atar table 

    beda dengan sql kita bisa membuat dua atau lebih table itu
    saling berelasi satu sama lain

- untrukturred, semi struktruted, struktured data
    karena dia tidak ada schemanya kita jadi bisa
    menyimpan beragam jenis data

    kita tidak menyimpan data yang tidak terstruktur 
    kita bisa menyimpan data yang semi struktured 
    dan bahkan kita bisa menyimpan data yang struktured

    data yang biasa disimpan didalam mysql 



nah selanjutnya kita akan lihat type type apa saja
yang dimiliki oleh  NoSql database


jadi mongoDB itu adalah database berbasis document
tapi ada yang lain 


- key value store
    dimana dialamnya menyimpan antara pasangan key dan value saja
    ya ini database yang sangat cepat dibaca
    contoh
    redis

- document based
    mongoDB, CouchDB

- column oriented database
    jadi databasenya berbasis coloumn
    contoh HBase, cassandra


- graph database
    neo4j



Terminologi pada SQL dan NoSql

nah selanjutnya kita akan cari tahu dulu 
terminologi yang ada pada NoSql




SQL
tempat penimpanan data               : Database
Didalam Database                     : Table
satu buah data disebut dengan        : Record/ Row
sebuah data misalnya nama,jurusan    : coloumn / Fild
relasi dari data                     : join table
query language                       : sql



NoSql
tempat penyimpanan data              : Database
didalam Database                     : datanya mirip dengan JSON tapi disebut dengan Collection 
satu buah data disebut dengan        : Document, inilah kenapa disebut database berbasis document
                                       karena isinya berupa Document Document 
                                       yang dimana Documentnya itu berbentuk Object

sebuah data misalnya nama,jurusan    : Fild
relasi dari data                     : embeded document,reference 
query language                       : javascript








konsep embeded Document / Denormalization

misalnya kita punya pengelolaan data buku
didalam NoSql

misalnya saya punya dua buah data buku


{
    "book_id" : 1,
    "isbn" : "98765432",
    "title" : "Eloquent Javasacript, Second Edition"
    "author" : "Marinj Havebeke"
},

{
    "book_id" : 1,
    "isbn" : "98765432",
    "title" : "Eloquent Javasacript, Second Edition"
    "author" : "Marinj Havebeke",
    "publisher" : {
        "publisher_id" : 21,
        "name" : "O'Reilly Media"
    }
},



itu data pertama hanya ada 4 fild 
kalo kita lihat didata yang kedua ini datanya agak beda

nah didata ke 2 itu ada publisher 
jadi ada fild baru namanya publiher yang berisi object lagi
atau berisi document lagi 

publisher" : {
        "publisher_id" : 21,
        "name" : "O'Reilly Media"
    }

nah ini disebut dengan embeded document 
jadi didalam document ada document lagi

walaupun kelihatannya tidak seragam antar documentnya
nah inilah tadi kenapa disebut dengan schemaless

dan ini merupakan document yang falid untuk NoSql
kalo misalkan kita mau menerapkan ini dimysql

ya tentu saja kita harus membuat table baru 
jadi kita punya table buku dan table publisher 

dimana table buku dan table publisher itu harus ada 
relationalfsheppnya 

kita harus punya foreign ditable buku 
yang mengarah keprimary key yang ada pada table publisher

tapi untuk NoSql itu 
tidak seperti itu 


kita cukup menambahkan embeded document
nah nanti bakal kebayang kalo kita sudah mencoba gimana cara pakek mongoDB


Kenapa MongoDB

- JSON (BSON)
    karena dataya berbentuk JSON atau collection 
    karena formatnya JSON dan kita sudah terbiasa menggunakan JSON juga

    dimateri sebelumnya
    jadi harusnya lebih mudah pada saat mengelola datanya 


- javascript
    dan karena json dia javascript
    jadi node js nya itu javascript expresnya javascript
    DBMSnya juga javascript

    jadi semuanya javascript 

- MERN, MEVN, MEAN
    kalo misalnya kalian mau bikin stack yang lagi popular 
    saat ini  kita sudah belajar mengenai teknologi pendukungnya

    sehingga kalian nanti perlu pelajari framework pendungkungnya
    seperti react angular vue 


jadi itu alasannya kenapa kita pakanya mongoDB


oke jadi mungkin itu ya penjelasan singkat mengenai apa itu 
mongoDB dan apa itu NoSql

sehingga nanti dimateri berikutnya kita bakal 
langsung untuk melakukan instalasi dan konfigurasi mongoDB
kedalam system operasi kita




mongodb itu menggunakan javascript sebagai bahasa utama untuk
memanipulasi document

tapi kalian kalo ingin menggunakan bahasa pemrograman lain
itu sudah ada drivernya masing masing ya

misalnya python itu sudah punya drivernya namanya pymongo
jadi nanti sidrivernya itu mengtranslate querynya mongodb

dalam bentuk javascript 
kalo kalian mau langsung query kedalam mongodbnya 
kalian harus menggunakan javascript

kalo tidak kalian harus menginstall dulu driver mongonya





*/