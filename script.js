//DOM SELECTION
//getElementById
//document.getElementById() -- > Mengembalikan Element

// const judul = document.getElementById('judul');
// judul.style.color ='red'
// judul.style.background='black'
// judul.style.textAlign='center'
// judul.innerHTML='Hallo Dunia'


// document.getelemntsByTagname() --> HTML Collection

// const p = document.getElementsByTagName('p')

// console.log(p);

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

// const judul = document.getElementById('judul')

// judul.innerHTML ='<strong>Rizky Sulaeman</strong>'

// const sectionA = document.querySelector('#a')

// // sectionA.innerHTML ='SDJKFGHKDJSHFUKDS'

// judul.setAttribute('name','rizky sulaeman')

// const a = document.querySelector('section#a a')

// const p2 = document.getElementsByClassName('p2')

// // p2[0].setAttribute('class','label')
// p2[0].classList.add('label')
// p2[0].classList.remove('label')
// p2[0].classList.toggle('label')
// p2[0].classList.add('label')
// p2[0].classList.contains('label')
// p2[0].classList.item(0)

// // document.body.style.background='black'
// //add asign element dari css to js
// document.body.classList.add('biru')


//dom manuplation

//create element

    // const pBaru = document.createElement ('p')
    // const text=document.createTextNode('element p baru')
    // pBaru.appendChild(text)

    // //simpan paragraf baru di section a

    // const sectionA = document.getElementById('a')

    // const sectionB = document.getElementById('b')

    // for (let i=0; i<4; i++ ){
    //     sectionA.appendChild(pBaru.cloneNode(true))
    // }

    // const liBaru = document.createElement('li')
    // const textli=document.createTextNode('li baru')

    // liBaru.appendChild(textli)

    // const ul = document.querySelector('section#b ul')

    // const li2= ul.querySelector('li:nth-child(2)')

    // ul.insertBefore(liBaru,li2)


    // const hapus = document.getElementsByTagName('a')[0];

    // sectionA.removeChild(hapus)

    // const change = sectionB.querySelector('p');

    // const h2baru = document.createElement('h2')
    // const textbaru= document.createTextNode('Sullle')
    // h2baru.appendChild(textbaru)

    // sectionB.replaceChild(h2baru,change)


    //js event

    // const warna = document.querySelector('.p3')



    // function ubahwarna() {
    //     const warna = document.getElementsByClassName('p3');

    //     if(warna.length>0){
            
    //         warna[0].style.backgroundColor = 'cyan'; 

    //     }   

    // }

    // function ubahwarnap2(){
    //     const p2 = document.querySelector('.p2');
    //     p2.style.backgroundColor='black'
    // }
    
    // const p2 = document.querySelector('.p2');
    // p2.onclick = ubahwarnap2;

    const paragraf = document.getElementById('b')

    paragraf.addEventListener('click',function(){
        const ul = document.querySelector ('section#b ul')
        const createElement = document.createElement('li')
        let num1 =1;
        let num2 =1;
        
        let sum = num1+num2
        if(createElement.textContent =sum){
            
            ul.appendChild(createElement);
        }

        alert('ok')
    });

    //run cuman sekali eventHandler

// const p3change = document.querySelector('.p3')

//   p3change.onclick = function (){
//         p3change.style.background = 'cyan'
//     }

    //run 2x

    const p3change = document.querySelector('.p3');

    p3change.addEventListener('mouseenter', function () {
        p3change.style.backgroundColor = 'cyan'; // Mengganti 'background' menjadi 'backgroundColor'
    });
    
    p3change.addEventListener('mouseleave', function () {
        p3change.style.backgroundColor = ''; // Menghapus warna latar belakang saat mouse meninggalkan elemen
        // p3change.style.color = 'red'; // Jika ingin mengubah warna teks, aktifkan baris ini
    });