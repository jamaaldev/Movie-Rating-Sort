let main = document.querySelector('.main');
let rate = document.querySelector('.rating');
let inputed = document.getElementById('inputRated');
let dataMovies = './Movie.json'
window.onload = () =>{
    GetTheMovies();
    
}
// Eventslistiner




// Functions 
// Get the Movies From Data JSon
function GetTheMovies(){
    fetch(dataMovies,{
        method: 'GET',
    }).then((data) =>{
        return data.json();
    }).then((movies)=> {
        ShowMovies(movies);
    })
    
};


// here is the input value
function SortByRate(DomMovies){
    
    DomMovies.filter((Movie)=> {
        let rat =+ Movie.children[1].children[0].children[2].children[0].children[0].getAttribute("data-rating");
        let miniRate =  Movie.parentElement.children[0].children[0].children[0];
        getMyRate(rat)
        function getMyRate(rat){
           miniRate.addEventListener('input', function(e){
            pleaseRate(rat,e.target.value,e.target.value)
        })
        }
 
   const pleaseRate = (rat,mini,help) => {
        console.log('rat:',rat,'mini:',mini)
       if(rat < mini){
           Movie.classList.add('Hide');
       } else{
        Movie.classList.remove('Hide');
       }
      if(mini > 5  || mini == '0' ){
        let popup = document.querySelector('.popup');
          popup.classList.add('Show')
      } else{
        let popup = document.querySelector('.popup');
        popup.classList.remove('Show')
      }
   }
    })
};
        
function sortDomStar(DomMovies){
    
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
        // console.log(DomMovies[0].parentElement)
        SortByRate(DomMovies);
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
    sortDomStar(row);
};


