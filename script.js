//DOM SELECTION
//getElementById
//document.getElementById() -- > Mengembalikan Element

// const judul = document.getElementById('judul');
// judul.style.color ='red'
// judul.style.background='black'
// judul.style.textAlign='center'
// judul.innerHTML='Hallo Dunia'


//document.getelemntsByTagname() --> HTML Collection

// const p = document.getElementsByTagName('p')

// for(let i=0;i<p.length; i++){
//     p[i].style.backgroundColor ='black'
//     p[i].style.color ='white'
// }



//dcoument.getElementsByclassName() --> Html Collection


// const p1= document.getElementsByClassName('p1');


// p1[0].innerHTML='Rizky Sulaeman'


//document.quertSelector()--> Element

// const p4 = document.querySelector('#b ul li#c')
// p4.style.color='red'
// p4.style.background='black'

// const p = document.querySelector('p');
// p.style.color='red'
// p.style.backgroundColor='black'


//document.querySelectorAll() --> Ambil Semua ELEMENT

// const p = document.querySelectorAll('p');

// for (let i=0; i<p.length; i++){
//     p[i].style.color='red'
//      p[i].style.background='black'
//     p[i].innerHTML ='Sulemean'
// }



//Maniuplasi Dom Inner Html dengan document.querySelectorById

const judul = document.getElementById('judul')

judul.innerHTML ='<strong>Rizky Sulaeman</strong>'

const sectionA = document.querySelector('#a')

sectionA.innerHTML ='SDJKFGHKDJSHFUKDS'