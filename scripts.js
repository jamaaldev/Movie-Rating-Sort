let main = document.querySelector('.main');
let rate = document.querySelector('.rating');
let inputed = document.querySelector('#inputRated');
let dataMovies = './Movie.json'
window.onload = () =>{
    GetTheMovies();
    
    
}
// Get the Movies From Data JSon
function GetTheMovies(rate){
fetch(dataMovies,{
    method: 'GET',
}).then((data) =>{
    return data.json();
}).then((movies)=> {
    ShowMovies(movies);
})

};



function sortDom(DomMovies){
    
    let movRat;
    let spanStar;
    let Domanet;
    
    for(mov in DomMovies){
          
        for(let j = 0; j < mov.length; j++){
            // mov is the length of the Movie in the DOM
            Domanet = DomMovies[mov].children[1].children[0].children[2].children[0];
            movRat = Domanet.children[0].getAttribute("data-rating");
            for(let i = j; i < movRat; i++){
                spanStar = Domanet.getElementsByTagName('span');
                spanStar[i].className = 'fa fa-star checked'
            }
        }
    }
           
}

function ShowMovies(movies){

let html;
for(movie of movies){
    
   
   
html = ` <div class="container_movies">

<div class="movies_img">
    <img src="${movie.image}" alt="">
</div>
<div class="movies_info">
    <div class="rate">

        <div class="title"><h1>${movie.title}</h1></div>
        <span>|</span>
        <div class="rating">
            <h2>
                <span data-rating="${movie.rating}"  class="fa fa-star "></span>
                <span data-rating="${movie.rating}" class="fa fa-star "></span>
                <span data-rating="${movie.rating}" class="fa fa-star "></span>

                <span data-rating="${movie.rating}" class="fa fa-star"></span>
                <span data-rating="${movie.rating}" class="fa fa-star"></span>
                
            </h2>
        </div>
    </div>
   <div class="disc">
       <p>${movie.disc}</p>
   </div>
</div>
</div>
`

;
main.innerHTML += html;


}
// Collect All the Movies Listed in DOM
let ratingDom = document.getElementsByClassName('container_movies')
let row = Array.from(ratingDom)
sortDom(row);

};


