/*

yang pertama kita akan cobayang match dulu ya

1. $match

db.persons.aggregate([
    {
        $match : {age : {$gte : 25},isActive : true}
    }
])


kalo kita jalankan maka yang akan tampil adalah document
yang field agenya lebih besar sama dengan 25 dan field isActive sama dengan true


{
        "_id" : ObjectId("62add1152bb55f070b21230e"),
        "index" : 3,
        "name" : "Karyn Rhodes",
        "isActive" : true,
        "registered" : ISODate("2014-03-11T03:02:33Z"),
        "age" : 39,
        "gender" : "female",
        "eyeColor" : "green",
        "favoriteFruit" : "strawberry",
        "company" : {
                "title" : "RODEMCO",
                "email" : "karynrhodes@rodemco.com",
                "phone" : "+1 (801) 505-3760",
                "location" : {
                        "country" : "USA",
                        "address" : "521 Seigel Street"
                }
        },
        "tags" : [
                "cillum",
                "exercitation",
                "excepteur"
        ]
}
{
        "_id" : ObjectId("62add1152bb55f070b212312"),
        "index" : 7,
        "name" : "Anastasia Blake",
        "isActive" : true,
        "registered" : ISODate("2016-07-01T02:32:46Z"),
        "age" : 40,
        "gender" : "female",
        "eyeColor" : "brown",
        "favoriteFruit" : "strawberry",
        "company" : {
                "title" : "ZERBINA",
                "email" : "anastasiablake@zerbina.com",
                "phone" : "+1 (867) 563-3788",
                "location" : {
                        "country" : "Italy",
                        "address" : "147 Montague Terrace"
                }
        },
        "tags" : [
                "Lorem",
                "consequat",
                "ex",
                "pariatur",
                "labore"
        ]
}



*/