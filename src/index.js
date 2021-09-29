// write your code here


function getImages(){

fetch('http://localhost:3000/ramens')
.then(res=>res.json())
.then(ramens => renderImages(ramens))
}
function renderImages(ramens){
    const div = document.getElementById('ramen-menu')
    ramens.forEach(ramens=>{
        const img=document.createElement('img')
        img.src = ramens.image;
        img.id = ramens.id
        img.className = "ramenpics"
      
        // img.id = ramens.id
       img.addEventListener('click', imageClick)
       div.appendChild(img)
        
    })

    
}
function imageClick(e){
    fetch('http://localhost:3000/ramens')
.then(res=>res.json())
.then(ramens =>details(ramens));}

function details(ramens){
    const img = document.querySelector('#1')
    const h2 = document.getElementsByClassName('name')
    if(img.src = "./assets/ramen/shoyu.jpg"){
        h2.textContent = ramens.name
    }
    else{
        console.log('fail')
    }
}
    
    
    
    
    
// const div = document.getElementById('ramen-detail')
// const img=document.querySelector('.ramenpics')
// let image = document.createElement('img')
// if(img.id===1){
    // let image = document.getElementsByClassName('detail-image')
//     image.src=img.src
//   console.log(div.appendChild(image))
    

// else{console.log(failure)}
// console.log(image.src)
    // get
    // if(){

    // }
    




    

// console.log(renderImages)







document.addEventListener('DOMContentLoaded', function(){
    getImages();
    imageClick();
})