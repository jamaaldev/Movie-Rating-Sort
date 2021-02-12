
console.log('heheh')




function loopme(){
    let array1 = ['pasta','salad','noodle soup',];
    let array2 = ['dumplings','sushi','steaks',];
    let arrows = [];
    let i = 0;
    while(i < array1.length || i < array2.length){
        if(array1[i]){
            arrows.push(array1[i])
        }
        if(array2[i]){
            arrows.push(array2[i])
        }
        i++
    }
    console.log(arrows)
}
loopme()

let something = [
    {
        title:'stranger things',
        rating: 5,
        image: './image/strnger.jpg',

    },
    {
        title:'Cobra kai',
        rating: 2,
        image: './image/cobra.jpg',

    },
    {
        title:'queens Gambit',
        rating: 5,
        image: './image/queens.jpg',

    },
    {
        title:'Locke & Key',
        rating: 4,
        image: './image/locke.jpg',

    },
    {
        title:'Big Mouth',
        rating: 3,
        image: './image/big.jpg',

    },
    {
        title:'Glee',
        rating: 2,
        image: './image/glee.jpg',

    },
]

something.forEach((items)=> {
    console.log(items)
})