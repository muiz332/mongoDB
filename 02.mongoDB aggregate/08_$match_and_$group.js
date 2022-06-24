// combinations stage


/* 

nah disini kita akan mencoba menggabungkan beberapa stage
disini kita akan mencoba menggabungkan operator
$match dengan $group

kita coba

1. $match and $group
    nah misalakan saya ingin mencari document yang field favoriteFruit itu 
    valuenya banana

    jadi saya bisa tulis seperti ini

    db.persons.aggregate([
        {$match : {favoriteFruit : "banana"}}
    ])

    maka yang akan tampil adalah field favoriteFruit dengan value banana
    nah kemudian hasilnya akan saya group atau kelompokkan 
    berdasarkan value yang uniq berdasarkan field gender misalnya

    jadi saya tinggal tambahkan stage selanjutnya yaitu $group

    db.persons.aggregate([
        {$match : {favoriteFruit : "banana"}},
        {$group : {_id : "$gender"}}
    ])

    kalo saya jalankan akan tampil
    { "_id" : "female" }


2.$group dan $match
    nah kalian bisa membolak balikkan stage seperti ini ya
    ini tidak ada aturannya tergantung kebutuhan kalian

    db.persons.aggregate([
        {$group : {_id : {age : "$age", eyeColor : "$eyeColor"}}},
        {$match : {"_id.age" : {$gte : 30}}}
    ])

    kalo kita jalakan hasilnya seperti ini

    { "_id" : { "age" : 38, "eyeColor" : "blue" } }
    { "_id" : { "age" : 33, "eyeColor" : "brown" } }
    { "_id" : { "age" : 39, "eyeColor" : "green" } }
    { "_id" : { "age" : 40, "eyeColor" : "brown" } }


    jadi seperti itu ya kalian bisa memanipulasi stagenya








































*/