const nama = "Geraldi Azmi Al-hafizh";
let usia = 15;

let biodata = document.getElementById('biodata')

function generateBiodata(){
    let generasi;

    if (usia > 10 && usia <= 18) {
        generasi = "Saya adalah generasi remaja";
    } else {
        generasi = 'wah generasi tidak dapat terdeteksi';
    }
   return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);
generateBiodata();