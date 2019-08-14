// Array untuk render list manusia
let arrManusia = [
    { nama: "Oldlex", umur: 22, job: "Dev", gender:"Pria" },
    { nama: "alicia", umur: 32, job: "Dev", gender:"Wanita" },
    { nama: "Alona", umur: 26, job: "Dev", gender:"Wanita" },
    { nama: "Batios", umur: 33, job: "CEO", gender:"Pria" },
    { nama: "Bakhti", umur: 38, job: "PM", gender:"Pria" },
    { umur: 27, job: "CTO", gender:"Pria", nama: "Charlee" }
  ];
  
  // Array untuk render list job
  let arrJob = ["All", "Dev", "CEO", "PM", "CTO"];
  
  // INPUT DATA
  let funInputData = () => {
    // Get data
    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let job = document.getElementById("jobInput").value;
    let gender = document.querySelector('input[name=inputGender]:checked').value
  
    // Push data
    arrManusia.push({
      nama,
      umur,
      job,
      gender
    });
  
    // Check job / Menambahkan daftar pekerjaan jika belum ada di array
    let ada = arrJob.includes(job)
  
    if(!ada){
        arrJob.push(job)
    }
  
    funShow(arrManusia);
  };

  // RENDER LIST
  let funShow = (arrey) => {
    let listManusia = arrey.map((val, index) => {
      // val = {name, age, job}
      return `<tr>
              <td>${val.nama}</td>
              <td>${val.umur}</td>
              <td>${val.gender}</td>
              <td>${val.job}</td>
          </tr>`;
    });
  
    let listJob = arrJob.map(val => {
      // val = 'All', 'Dev', 'CTO ...
      return `<option value="${val}">${val}</option>`;
    });
  
    document.getElementById("here").innerHTML = listManusia.join("");
    document.getElementById("job").innerHTML = listJob.join("");
  };
  
  // FILTER NAME
  let funFilterName = () => {
      // Get data from user
      let filter = document.getElementById('search').value
  
      // Filtering
      let hasilFilterName = arrManusia.filter((val) => { // val = {nama, age, job}
          // kecilkan semua huruf nama
          let namaLow = val.nama.toLowerCase()
          // kecilkan semua karakter yang di ketik user
          let filterLow = filter.toLowerCase()
  
          return namaLow.includes(filterLow)
      })
      
      // Render list
      funShow(hasilFilterName)
  
  }
  
  // FILTER USIA
  let funFilterUmur = () => {
      // num1 = min
      let num1 = document.getElementById('num1').value
      // num2 = max
      let num2 = document.getElementById('num2').value
  
      let hasilFilterUmur = arrManusia
  
      // Masuk ke if jika kedua text box ter isi
      if(!(num1 == '' || num2 == '')){
          hasilFilterUmur = arrManusia.filter((val) => {
              return (val.umur >= num1 && val.umur <= num2)
          })
      }
  
      funShow(hasilFilterUmur)
  
  }
  
  // FILTER JOB
  
  let funFilterJob = () => {
    // Mengambil value dari option yg di pilih oleh user
    let selectedJob = document.getElementById('job').value
    let hasilFilterJob
  
    // Jika user memilih 'All' , maka 'list' akan berisi semua data manusia
    if(selectedJob == 'All'){
      hasilFilterJob = arrManusia
    } else {
    // Array manusia di filter berdasarkan option yg dipilih, hasil filter akan disimpan di 'list'
      hasilFilterJob = arrManusia.filter((val) => {
        return val.job == selectedJob
     })
    }
  
    // list adalah array yang berisi banyak object,
    // tiap object pada 'list' akan di ubah menjadi bentuk tag <tr> untuk kemudian di render
    funShow(hasilFilterJob)
  
  }

// FILTER SEX
let funFilterSex = () => {
    let sex = document.querySelector('input[name=filterSex]:checked').value

    let hasilFilter = arrManusia.filter((val) => {
        return val.gender == sex
    })

    funShow(hasilFilter)

}

// SORT NAMA
let sortNama  = () => {
    let hasilSort = arrManusia.sort((a, b) => {
        if(a.nama > b.nama){
            return 1
        } else if(a.nama < b.nama){
            return -1
        } else {
            return 0
        }
    })

    funShow(hasilSort)
}

// SORT UMUR
let sortUmur = () => {
    let hasilSort = arrManusia.sort((a, b)=> {
        return a.umur - b.umur
    })

    funShow(hasilSort)
}

// SORT KELAMIN

let sortKelamin = () => {
    let hasilSort = arrManusia.sort((a,b) => {
        if(a.gender > b.gender){
            return 1
        } else if(a.gender < b.gender){
            return -1
        } else {
            return 0
        }
    })
    funShow(hasilSort)

}

// SORT PEKERJAAN
let sortJob = () => {
    let hasilSort = arrManusia.sort((a,b) => {
        if(a.job > b.job){
            return 1
        } else if(a.job < b.job){
            return -1
        } else {
            return 0
        }
    })
    funShow(hasilSort)

}










  funShow(arrManusia);
  
  
  