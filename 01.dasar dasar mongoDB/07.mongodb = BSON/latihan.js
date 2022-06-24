// BSON

/*

kali ini kita akan membahas mengenai BSON pada mongodb

BSON singkatan dari Binary JSON, yaitu binary-encoded serialization dokumen seperti JSON

nah kenapa mongodb menggunakan BSON tidak murni menggunakan json
karena mongodb itu mendukung type data yang bukan cuma text
jadi kalian bisa upload gambar atau video kedalam mongodb

walaupun sebenarnya tidak direkomensikan 



Sama seperti JSON, di BSON juga bisa kita bisa menggunakan embedded object, array dan lain-lain
http://bsonspec.org/ 
https://docs.mongodb.com/manual/reference/bson-types/ 



type data pada BSON

Tipe Data                                         Alias   
Double    / number                              double  / number
String                                             string               
Object                                            object
Array                                               array
Binary Data                                       binData
ObjectId                                            objectId    
Boolean                                              bool
Date                                               date
Null                                                  null
Regular Expression                                  regex
JavaScript                                         javascript
JavaScript with Scope                               javascriptWithScope
32 Bit Integer                                         int
Timestamp                                             timestamp
64 Bit Integer                                        long
Decimal 128                                            decimal
Min Key                                                minKey
Max key                                                  maxKey
 



Objectid


ObjectId adalah random data yang unik, cepat untuk digenerate / dihasilkan dan terurut.
jadi ketika kalian bikin document yang tidak ada fild _id

maka secara otomatika akan dibuatkan object id

Nilai ObjectId memiliki ukuran panjang 12 byte, konsisten terdiri dari informasi 4 byte timestamp, 
5 byte random value, dan 3 byte incrementing counter

ObjectId digunakan sebagai sebagai default _id (primary key) 
di document jika kita tidak secara eksplisit menyebutkan _id document nya



date dan isodate

BSON Date adalah 64 bit integer yang merepresentasikan angka milisecond sejak Unix epoch (1 Januari 1970).
Nilai ini bisa merepresentasikan waktu dengan jarak 290 juta tahun sebelum dan setelah unix epoch.
ISODate merupakan representasi waktu yang digunakan oleh MongoDB
Date ini kompatibel dengan Date di JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date 


*/