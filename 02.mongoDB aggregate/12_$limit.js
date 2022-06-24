// $limit

/*

$limit digunakan untuk membatasi document yang tampil
misalnya kalian ingin membatasi documnt yang tampil itu hanya 
10 document

sintax

db.persons.aggregate([
    {$limit : <number>}
])

kita coba

misalkan kita ambil contoh dari $project 
dan kita gabungkan dengan $limit

db.persons.aggregate([
    {$project : {
        _id : 0,
        name : 1,
        age : 1,
        lokasiku : "$company.location.country",
        "ciri-ciri" : {
            mata : "$eyeColor",
            "jenis-kelamin" : "$gender",
            status : "$isActive"
        }
    }},
    {$limit : 3}
])

kalo kita jalankan hasilnya

{ "name" : "Aurelia Gonzales", "age" : 20, "lokasiku" : "USA", "ciri-ciri" : { "mata" : "green", "jenis-kelamin" : "female", "status" : false } }
{ "name" : "Kitty Snow", "age" : 38, "lokasiku" : "Italy", "ciri-ciri" : { "mata" : "blue", "jenis-kelamin" : "female", "status" : false } }
{ "name" : "Hays Wise", "age" : 24, "lokasiku" : "France", "ciri-ciri" : { "mata" : "green", "jenis-kelamin" : "male", "status" : false } }

maka dia hanya menampilkan 3 document saja





























*/