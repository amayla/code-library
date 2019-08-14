// membuat program html untuk menginput nama
// selama yang dimasukan bukan string, dia akan bernilai isNaN
// apabila string, dia akan muncul di console

var lanjut
lanjut = true
do{
var nama = parseInt(prompt("Masukkan Nama Anda"))

if (!nama == 'string'){
    alert('Harap masukan nama')
}
while(nama==''){
    console.log(nama)
}