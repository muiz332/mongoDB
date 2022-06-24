// data model

/*

nah dimateri kali ini kita akan membahas mengenai data model

lalu kenapa kita perlu mengetahui tentang data 
modeling pada database document

penggunaan document database tidak akan mendatangkan manfaat yang 
besar ketika kita tidak mengerti cara memodelkan 
data untuk aplikasi kita 

saat memodelkan data menggunakan document database 
kita harus mengacu kepenggunaan aplikasi dalam melakukan query
update, dan memproses data

pada database document kita mengacu pada jenis querynya
misal kita bikin aplikasi ecommerce 

ketika melakukan query kita ingin querynya ada daftar
barang, orang dan lain lain

kita harus bikin struktur database didocumentnya
yang bisa mensupport query tersebut

bukan lagi mengacu pada stuktur databasenya atau schemanya
pada relational database




schema yang flexible

tidak seperti relational database, dimongodb kita bisa memasukkan data
kedalam collection tanpa harus mendefinisikan schema dari 
collectionnya

schema untuk collection dimongodb sangat flexible, tiap document
bisa berbeda. tidak seperti table pada relational database
yang harus sama setiap record

namun pada prakteknya, sangat direkomendasikan  menggunakan jenis data 
yang sama untuk tiap collection, walaupun bisa berbeda beda dicollection 
yang sama 

jadi schema pada mongodb ini dibuat flexible 
salah satu manfaatnya adalah ketika kita sudah selesai 
mendesign bagian front endnya

lalu membuat database document
ketika nanti ada fild yang kurang kita bisa saja menambahkan
fild dengan mudah pada documentnya

berbeda dengan relational database
akan sangat sulit menambah fild ketika databanya sudah jadi


kalo kalian ingin memasukkan array kedala mongodb
itu bisa tapi kalo ditable itu agak susah



# primary key

nah yang terpenting didalam mongodb itu semuanya harus 
memiliki primary key

tidak seperti relational database yang bebas membuat coloumn
untuk primary key

dimongodb primary key wajib menggunakan fild _id

dan juga pada table itu boleh lebih dari satu primary key
kalo didalam mongodb itu harus satu fild

namanya adalah _id ini wajib ya tidak boleh diubah ubah 
nama fildnya 



selain itu primary key tidak bisa lebih dari satu fild 
hanya bisa fild _id 

jadi ketika kita ingin membuat composite primary key 
maka kita hanya bisa melakukan dengan menggunakan 1 fild saja



# struktur document embedded


{
    _id : <objectid>,
    username : 'muiz',
    contact : {
        phone : '09982780'
        email : 'muizzuddin332@gmail.com'
    },
    access : {
        level : 5,
        grub : 'dev'
    }
}



jadi ini adalah strukdur document embedded pada mongodb
embedded itu didalam document ada documen lagi

nah biasanya didalam relational database itu kita harus
bikin satu table lagi yang namanya contact


lalu kita akan bikin relation dari table utama yaitu customer
nah kalo didalam mongodb tidak perlu 
kita cukup bikin embedded document seperti ini 

jadi ini sebenarnya ada 3 table kalo kita menggunakan 
relational database

tapi dengan menggunakan mongodb ini 
kita menggunakan satu document

jadi akan lebih simple dan cepat dalam melalukan query

nah selain menggunakan embedded ada satu lagi paradigmanya
yaitu menggunakan reference



# stuktur document reference

user document 

{
    _id : <objectid>,
    username : 'muiz'
}

contact document

{
    _id : <objectid>,
    user_id : <objectid>
    phone : '098666'
    email : 'muizzuddin332@gmail.com'
}

access document

{
    _id : <objectid>,
    user_id : <objectid>,
    level : 5,
    grup : 'dev'
}



jadi  akan mirip dengan table 
jadi kita punya 3 colection

ada user contact dan access
yang masing masing memiliki id punyanya id collection user

jadi nanti kita akan melakukan 3 kali query
akan tetapi kalian direcomendasikan menggunakan embedded document

kecuali memang ada kebutuhan untuk menggunakan
reference document

jadi kapan kita menggunakan embedded dan reference

embedded
- antar document saling ketergantungan
    ketika kita melalukan query jika datanya saling ketergantungan
    maka gunakan embedded

    jika menggunakan reference kita harus query lagi dari collection 
    lain

    jadi contonya tadi 
    ketika punya collection user
    maka dia butuh contact 

    jadi kita bisa menggunakan embedded

- tidak bisa langsung melakukan perubahan ke embedded document
    jadi untuk mengaksesnya melalui document utama


- embedded document selalu dibutuhkan ketika mengambil 
  data document

  jadi kalo misalkan mengambil data user 
  itu memang kalian harus selalu mengambil data contact
  dan accessnya 

  nah ini cocok banget menggunakan embedded




reference

- antar document berdiri sendiri dan tidak terlalu ketergantungan 
  satu sama lain 


- bisa melakukan manipulasi data langsung terhadap reference document
- reference documen tidak selalu dibutuhkan saat mengambil document


tapi disarankan menggunakan embedded dulu 
kecuali ada kasus tertentu 








*/