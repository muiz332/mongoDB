// allow disk use

/* 

jika kalian tambahkan allow disk use

nah pada saat melakukan operator aggregate 
pada stagenya bisa memakai 100 mb dari kapasitas ram

lalu server akan mengembalikan error jika ram mencapai batas maximum
yaitu 100 mb


nah untuk menjalakan fitur ini kalian bisa tuliakan seperti ini

db.aggregate([],{allowDiskUse : true})

jadi ini sementara ya
kalian harus tuliskan pada parameter kedua pada fungsi 
aggregatenya


jadi sampai disini seri kita belajar aggregation pada
mongodb

mudah mudahan kalian paham
















*/