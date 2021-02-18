
let singleMovie = 'http://localhost:3000/api/post/'

window.onload = () => {
    
    getMovie()
}

const getMovieParam = () =>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    return urlParams.get("id");
   
}

const getMovie = () =>{
    const postMovieId = getMovieParam();
   const url = `${singleMovie}${postMovieId}`
        fetch(url, {
            method: 'GET',
            
        }).then((data) => {
            return data.json();
        }).then((movies) => {
           buildsingle(movies)
        })
        
    
}

const buildsingle = (single) => {
    let singleMain = document.querySelector('.singleContainer');
    
    let singleDom;
    singleDom = `
    <div class="singleMoveImage"><img src="${single.image}" alt=""></div>
        <div class="singleMoveTitle">${single.title}</div>
        <div class="singleMoveContent">${single.disc}</div>
    `;
    singleMain.innerHTML += singleDom;
    console.log(single.disc)
}