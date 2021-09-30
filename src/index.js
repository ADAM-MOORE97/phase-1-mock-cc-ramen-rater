// const init = () => {
//     fetch('http://localhost:3000/ramens')
//         .then(response => response.json())
//         .then(data => displayRamens(data))
//         //ensures everything is loaded before form is used
//         //ch.3
//     const form = document.querySelector('#new-ramen');
//     form.addEventListener('submit',(e)=> {
//         e.preventDefault()
//         const ramenObj = {}
       
//         ramenObj.name = document.getElementById('new-name').value;
//         ramenObj.restaurant = document.getElementById('new-restaurant').value;
//         ramenObj.image = document.getElementById('new-image').value;
//         ramenObj.rating = document.getElementById('new-rating').value;
//         ramenObj.comment = document.getElementById('new-comment').value;
//         // console.log(ramenObj)
//         //need everything from ch.2
//         formRamen(ramenObj);
    
//     })
    
    
    
// }
// function formRamen(ramen){
//     const ramenMenu = document.getElementById('ramen-menu');
//             const image = document.createElement('img')
//             image.src = ramen.image
//             image.addEventListener('click', ()=> {
//                 document.querySelector('.detail-image').src=ramen.image;
//                 document.querySelector('.name').textContent = ramen.name;
//                 document.querySelector('.restaurant').textContent = ramen.restaurant;
//                 document.querySelector('#rating-display').textContent = ramen.rating;
//                 document.querySelector('#comment-display').textContent = ramen.comment;
//     })
//         ramenMenu.appendChild(image);
// }
// //ch.1
// function displayRamens(ramens){

// //grab element you want to add ramen images to
// const ramenMenu = document.getElementById('ramen-menu');

// //iterate through array for each object
// //ramen is the iterator value representing each object
// ramens.forEach(ramen =>{ formRamen(ramen);

// //create img element, add src from array 
// //     const image = document.createElement('img')
// //     image.src = ramen.image
// //   //Ch.2  
// //     image.addEventListener('click', ()=> {
// //         // console.log('you click')
// //         document.querySelector('.detail-image').src=ramen.image;
// //         document.querySelector('.name').textContent = ramen.name;
// //         document.querySelector('.restaurant').textContent = ramen.restaurant;
// //         document.querySelector('#rating-display').textContent = ramen.rating;
// //         document.querySelector('#comment-display').textContent = ramen.comment;
// //     })

// // //append to ramenMenu
// //     ramenMenu.appendChild(image)
// });





// }


// document.addEventListener('DOMContentLoaded', init)



































// // // add document event listener for 'DCL' then asign an annonymous function
// // //for fetch/functions

// // document.addEventListener('DOMContentLoaded', ()=>{
// // //request data from given URL and establish json server
// // fetch('http://localhost:3000/ramens') //url
// // .then(result=>result.json()) //turn result into usable json
// // .then(json=>json.forEach(renderMenuImages)) //with usable data, iterate through each obj calling function reference


// // //parameter will be the reference to the data youre passing through function
// // function renderMenuImages(ramenItems){
// // //assign variable to given container in README
// // const menuContainer=document.querySelector('#ramen-menu')
// // // creat IMG element for API data
// // const ramenImage = document.createElement('img')
// // // assign src to img url in data
// // ramenImage.src = ramenItems.image
// // //optional assign alt="name", id="corresponding id in data"
// // ramenImage.alt = ramenItems.name
// // ramenImage.id = ramenItems.id
// // //append image to menu container
// // menuContainer.appendChild(ramenImage)
// // //add click event to image, assign annonymous function for whats to happen after click
// // ramenImage.addEventListener('click', ()=>{
// // // declare place you want this to go.
// // const detailContainer = document.querySelector('#ramen-detail')
// // const detailImg = detailContainer.querySelector('img');
// // detailImg.src = ramenItems.image

// // })





// // }})










































































// // document.addEventListener('DOMContentLoaded', () => {
// //     fetch('http://localhost:3000/ramens')
// //         .then(resp => resp.json())
// //         .then(json => json.forEach(renderMenu))
        
// // //         const newRamenForm = document.querySelector('#new-ramen');
// // //         newRamenForm.addEventListener('submit', (event) => {
// // //             event.preventDefault();
// // //             const newRamenName = document.querySelector('#new-name').value;
// // //             const newRamenRestaurant = document.querySelector('#new-restaurant').value;
// // //             const newRamenImage = document.querySelector('#new-image').value;
// // //             const newRamenRating = document.querySelector('#new-rating').value;
// // //             const newRamenComment = document.querySelector('#new-comment').value;
// // //             const newRamenItem = {};
// // //             newRamenItem.name = newRamenName;
// // //             newRamenItem.restaurant = newRamenRestaurant;
// // //             newRamenItem.image = newRamenImage;
// // //             newRamenItem.rating = newRamenRating;
// // //             newRamenItem.comment = newRamenComment;
// // //             renderMenu(newRamenItem);
// // //         })
// // })

// // function renderMenu(ramenItem) {
// //     const menuContainer = document.querySelector('#ramen-menu');
// //     const menuItem = document.createElement('img');
// //     menuItem.src = ramenItem.image;
// //     menuContainer.append(menuItem);
// //     menuItem.addEventListener('click', () => {
// //         const detailContainer = document.querySelector('#ramen-detail');
// //         const detailImg = detailContainer.querySelector('img');
// //         const detailName = detailContainer.querySelector('h2');
// //         const detailRestaurant = detailContainer.querySelector('h3');
// //         const ratingText = document.querySelector('#rating-display');
// //         const commentText = document.querySelector('#comment-display');
// //         detailImg.src = ramenItem.image;
// //         detailImg.alt = ramenItem.name;
// //         detailName.textContent = ramenItem.name;
// //         detailRestaurant.textContent = ramenItem.restaurant;
// //         ratingText.textContent = ramenItem.rating;
// //         commentText.textContent = ramenItem.comment;
// //     })


const init = () =>{
    fetch('http://localhost:3000/ramens')
    .then(response=>response.json())
    .then(data=>display(data))

    const form = document.getElementById('new-ramen')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        newRamenObj = {}
        
        newRamenObj.name = document.querySelector('#new-name').value
        newRamenObj.restaurant = document.querySelector('#new-restaurant').value
        newRamenObj.image = document.querySelector('#new-image').value
        newRamenObj.rating = document.querySelector('#new-rating').value
        newRamenObj.comment = document.querySelector('#new-comment').value
        
        ramenForm(newRamenObj);
        
    })
}
function ramenForm(ramen){
    const ramenMenu = document.getElementById('ramen-menu')
    let image = document.createElement('img')
        image.src = ramen.image
        image.addEventListener('click',()=>{
            document.querySelector('.detail-image').src=ramen.image;
            document.querySelector('.name').textContent = ramen.name;
            document.querySelector('.restaurant').textContent = ramen.restaurant;
            document.querySelector('#rating-display').textContent = ramen.rating;
            document.querySelector('#comment-display').textContent = ramen.comment;
           
})
ramenMenu.appendChild(image)
}

function display(ramens){
    // const ramenMenu = document.getElementById('ramen-menu')
    ramens.forEach(ramen => { ramenForm(ramen);
        

        })
        
        
    };




document.addEventListener('DOMContentLoaded', init)

console.log(display)