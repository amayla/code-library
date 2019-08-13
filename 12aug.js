let cetakTanggal,cetakBulan,cetakTahun='' // deklarasi variabel kosong
var tanggal = new Date()   
let bulan=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
for(i=1;i<=31;i++){
   if(i==tanggal.getDate()){
   cetakTanggal+='<option selected>'+i+'</option>'}
   else{cetakTanggal+= '<option>'+i+'</option>'}
}
for(b=0;b<=11;b++){
   if(b==tanggal.getMonth()){
      cetakBulan+= '<option selected>'+bulan[b]+'</option>'
   }else{
      cetakBulan+= '<option>'+bulan[b]+'</option>'
 }
}
for(t=1950;t<=2020;t++){
   if(t==tanggal.getFullYear()){
      cetakTahun+= '<option selected>'+t+'</option>'
   }
   else{
    cetakTahun+= '<option>'+t+'</option>'
   }
 }
document.getElementById("pilihTanggal").innerHTML=(cetakTanggal)
document.getElementById("pilihBulan").innerHTML=(cetakBulan)
document.getElementById("pilihTahun").innerHTML=(cetakTahun)