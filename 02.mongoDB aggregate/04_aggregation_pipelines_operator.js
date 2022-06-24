// operator pada aggregation pipelines

/* 

disini kita akan mencoba beberapa operator pada aggregation pipelines

Stages :
$match: Filter aliran dokumen untuk mengizinkan hanya dokumen yang cocok yang lolos tanpa dimodifikasi ke tahap pipa berikutnya.
$project: Membentuk ulang setiap dokumen dalam aliran, seperti dengan menambahkan fields baru atau menghapus fields yang sudah ada. Untuk setiap input dokumen,     
          menghasilkan output satu dokumen.
$group: Mengelompokkan input dokumen menurut ekspresi pengenal yang ditentukan dan menerapkan ekspresi akumulator, jika ditentukan, ke setiap grup.
$sort: Menyusun ulang aliran dokumen dengan kunci pengurutan yang ditentukan
$skip: Melewati n dokumen pertama di mana n adalah nomor lompatan yang ditentukan dan meneruskan dokumen yang tersisa tanpa dimodifikasi
$limit: Melewati n dokumen pertama yang tidak dimodifikasi di mana n adalah batas yang ditentukan.
$unwind: Mendekonstruksi bidang array dari dokumen input ke output dokumen untuk setiap elemen.
$out: Menuliskan result dokumen menjadi sebuah collection baru



*/