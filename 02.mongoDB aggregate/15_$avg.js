// $avg


/*

$avg digunakan untuk menghitung rata-rata semua nilai yang diberikan dari semua dokumen

kita langsung saja coba



db.persons.aggregate([
    {"rata-rata" : {$avg : "$age"}}
])



db.persons.aggregate(([
    {
        $group : {
            _id : "$eyeColor",
            "rata-rata" : {$avg : "$age"}
        }
    }
]))

{ "_id" : "green", "rata-rata" : 30.5 }
{ "_id" : "blue", "rata-rata" : 29 }
{ "_id" : "brown", "rata-rata" : 36.5 }

kalo kita jalankan hasilnya seperti itu
kalo kita lihat maka dia akan mengelompokkan eyecolornya

nah eyecolor itu memiliki beberapa document yang duplikat
contoh document dengan eyeCOlor green itu ada 4

dan masing masing memili age yang berbeda
nah maka di akan menghitung rata rata dari field age tersebut


































*/