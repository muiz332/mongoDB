/*

# intro

database didalam mongoDB itu sama dengan database 
didalam mysql

jadi database itu adalah tempat menyimpan banyak data 
yang sesuai dengan data apa yang mau disimpan

jadi misalkan saya mau menyimpan data dari sebuah universitas
maka kita buat database yang namanya universitas

nah didalam universitas ada data yang lebih spesifik lagi
yaitu ada mahasiswa dosen matkul dan lain lain

didalam mongodb
data yang spesifik ini disebut dengan collection

dan semua collection itu harus disimpan kedalam 
database

biasanya database digunakan untuk memisahkan data secara logical
per aplikasi 

artinya satu aplikasi akan memiliki satu database
dan akan jarang sekali dengan satu database digunakan untuk 
beberapa aplikasi



# create database

nah lalu bagaimana cara kita membuat database
dialam mongoDB ini?

nah kalo dialam database mysql kita harus explisit
atau harus mendefinisikan dulu nama databasenya

dengan cara kita menuliskan create database nama databasenya
baru kita bisa pakai

nah kalo didalam mongodb ini 
kita tidak perlu secara explisit membuat database

jadi tidak ada sintax untuk membuat database 
nah mongoDB akan secara otomatis membuatkan database
sesuai dengan nama database yang kita pilih


untuk memilih nama database 
kita bisa menggunakan perintah use diikuti dengan nama databasenya 

kalo dialam mysql kalo kita ingin pindah
database kita cukup use databasenya 

tapi database didalam mysql harus ada
sedangkan didalam mongoDB tidak perlu

jadi mongodb akan membuatkan database dengan 
nama yang kita pilih 

kita langsung saja coba


> use universitas
switched to db universitas
> show dbs
admin        0.000GB
config       0.000GB
local        0.000GB
>

nah jadi ketika kita menuliskan use
beserta nama databasenya 

maka kita langsung pindah kedatabase 
dengan nama yang kita pilih 

untuk melihat database kita tuliskan 
show databases atau show dbs

kalo kita lihat tidak ada tabase universitas
cuma ada database defaultnya saja

nah lalu kapan database akan dibuat 
ketika kita pertama kali membuat sebuah collection

jadi kalo kita cuma pindah pindah database
tanpa membuat collection 

databasenya tidak akan dibuat
jadi perilaku seperti ini memang 
bawaannya dari mongoDBnya



database method

jadi jadi ini adalah beberapa method
pada object database

jadi didalam mongoDB itu menggunakan javascript
dan ada object yang namanya db yang digunakan
sebagai object database 

untuk melihat semua methodnya kalian bisa 
kunjungi website resminya

https://docs.mongodb.com/manual/reference/method/

tapi kali ini kita akan coba beberapa 

db.dropDatabase()
digunakan untuk menghapus database

jadi setelah membuat collection 
kan kita berada didalam database universitas

maka kalian tinggal tulis db.dropDatabase()
untuk menghapus databasenya

db.getName()
mengambil nama database

db.hostInfo()
menampilkan infor dari mongodb

db.version()
menampilkan versi DBMSnya

db.stats()
menampilkan statistik penggunaan database


*/