function tambah(){
let hasil,a,b=''
document.getElementById("hasilangka").value=0
     a = parseInt(document.getElementById("angka1").value)
     b= parseInt(document.getElementById("angka2").value)
     hasil = a+b
    
     if (isNaN(hasil))
     {
     document.getElementById("hasilangka").value = "Wrong data";
     
     }
     else
     {
     document.getElementById("hasilangka").value = hasil;
     }
     return true;
     }
    