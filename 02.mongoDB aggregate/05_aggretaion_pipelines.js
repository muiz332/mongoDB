// aggregation pipelines 

/* 

nah sekarang kita akan coba aggregation pipelines


sintax

db.collection.aggregate([
    {stage1},
    {stage2},
    {stageN}
])


nah jadi cara kerjanya seperti ini

jika document pada stage 1 itu cocok dan mengembalikan hasil yang cocok
document yang cocok tersebut akan dilanjutkan distage 2 dan 
jika lolos distage 2 akan mengembalikan document 
document tersebut akan dilanjut sampai stage n

ketik stage terakhir itu lulus maka akan dikembalikan 
atau ditampilkan pada viewnya dan tidak akan diulang atau duplikat

catatan:
jika kalian menjalankan sintax ini

db.collection.aggregate([]) 

maka akan sama dengan

db.collection.find()


yang pertama kalian masukkan dulu data dibawah ini

*/

db.persons.insertMany(
    [
        {
          "index": NumberInt(0),
          "name": "Aurelia Gonzales",
          "isActive": false,
          "registered": ISODate("2015-02-11T04:22:39+0000"),
          "age": NumberInt(20),
          "gender": "female",
          "eyeColor": "green",
          "favoriteFruit": "banana",
          "company": {
            "title": "YURTURE",
            "email": "aureliagonzales@yurture.com",
            "phone": "+1 (940) 501-3963",
            "location": {
              "country": "USA",
              "address": "694 Hewes Street"
            }
          },
          "tags": [
            "enim",
            "id",
            "velit",
            "ad",
            "consequat"
          ]
        },
        {
          "index": NumberInt(1),
          "name": "Kitty Snow",
          "isActive": false,
          "registered": ISODate("2018-01-23T04:46:15+0000"),
          "age": NumberInt(38),
          "gender": "female",
          "eyeColor": "blue",
          "favoriteFruit": "apple",
          "company": {
            "title": "DIGITALUS",
            "email": "kittysnow@digitalus.com",
            "phone": "+1 (949) 568-3470",
            "location": {
              "country": "Italy",
              "address": "154 Arlington Avenue"
            }
          },
          "tags": [
            "ut",
            "voluptate",
            "consequat",
            "consequat"
          ]
        },
        {
          "index": NumberInt(2),
          "name": "Hays Wise",
          "isActive": false,
          "registered": ISODate("2015-02-23T10:22:15+0000"),
          "age": NumberInt(24),
          "gender": "male",
          "eyeColor": "green",
          "favoriteFruit": "strawberry",
          "company": {
            "title": "EXIAND",
            "email": "hayswise@exiand.com",
            "phone": "+1 (801) 583-3393",
            "location": {
              "country": "France",
              "address": "795 Borinquen Pl"
            }
          },
          "tags": [
            "amet",
            "ad",
            "elit",
            "ipsum"
          ]
        },
        {
          "index": NumberInt(3),
          "name": "Karyn Rhodes",
          "isActive": true,
          "registered": ISODate("2014-03-11T03:02:33+0000"),
          "age": NumberInt(39),
          "gender": "female",
          "eyeColor": "green",
          "favoriteFruit": "strawberry",
          "company": {
            "title": "RODEMCO",
            "email": "karynrhodes@rodemco.com",
            "phone": "+1 (801) 505-3760",
            "location": {
              "country": "USA",
              "address": "521 Seigel Street"
            }
          },
          "tags": [
            "cillum",
            "exercitation",
            "excepteur"
          ]
        },
        {
          "index": NumberInt(4),
          "name": "Alison Farmer",
          "isActive": false,
          "registered": ISODate("2018-01-22T10:05:45+0000"),
          "age": NumberInt(33),
          "gender": "female",
          "eyeColor": "brown",
          "favoriteFruit": "banana",
          "company": {
            "title": "OTHERSIDE",
            "email": "alisonfarmer@otherside.com",
            "phone": "+1 (902) 572-3954",
            "location": {
              "country": "Italy",
              "address": "356 Newkirk Placez"
            }
          },
          "tags": [
            "deserunt",
            "et",
            "duis",
            "dolor"
          ]
        },
        {
          "index": NumberInt(5),
          "name": "Grace Larson",
          "isActive": true,
          "registered": ISODate("2014-04-20T11:37:23+0000"),
          "age": NumberInt(20),
          "gender": "female",
          "eyeColor": "blue",
          "favoriteFruit": "apple",
          "company": {
            "title": "OVOLO",
            "email": "gracelarson@ovolo.com",
            "phone": "+1 (930) 510-3310",
            "location": {
              "country": "USA",
              "address": "932 Linden Street"
            }
          },
          "tags": [
            "fugiat",
            "minim"
          ]
        },
        {
          "index": NumberInt(6),
          "name": "Carmella Morse",
          "isActive": false,
          "registered": ISODate("2014-06-08T11:20:22+0000"),
          "age": NumberInt(39),
          "gender": "female",
          "eyeColor": "green",
          "favoriteFruit": "apple",
          "company": {
            "title": "SHEPARD",
            "email": "carmellamorse@shepard.com",
            "phone": "+1 (829) 478-3744",
            "location": {
              "country": "Germany",
              "address": "379 Tabor Court"
            }
          },
          "tags": [
            "amet",
            "cillum"
          ]
        },
        {
          "index": NumberInt(7),
          "name": "Anastasia Blake",
          "isActive": true,
          "registered": ISODate("2016-07-01T02:32:46+0000"),
          "age": NumberInt(40),
          "gender": "female",
          "eyeColor": "brown",
          "favoriteFruit": "strawberry",
          "company": {
            "title": "ZERBINA",
            "email": "anastasiablake@zerbina.com",
            "phone": "+1 (867) 563-3788",
            "location": {
              "country": "Italy",
              "address": "147 Montague Terrace"
            }
          },
          "tags": [
            "Lorem",
            "consequat",
            "ex",
            "pariatur",
            "labore"
          ]
        }
    ]
)