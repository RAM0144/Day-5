class Movie {

    constructor(number){
        this.number = number;
   }
    getPGRating() {
        let rating = {
            "4"   : "PG Rating",
            "4.8" : "PG Rating",
            "5"   : "PG Rating",
            "5.5" : "PG Rating"
        }
        return rating[this.number.split(' ')[0]] 
    }
        tostring(){
            console.log(`movie with PG rating ${this.number}`)
        }  
}   

let movie = [];

movie.push(new Movie('4 LEO'))
movie.push(new Movie('MASTER'))
movie.push(new Movie('VIP'))
movie.push(new Movie('5.5 THREE'))
movie.push(new Movie('5 JOE'))
movie.push(new Movie('4.8 DADA'))
movie.push(new Movie('CAPTAIN MILLER'))
movie.push(new Movie('LOVE TODAY'))
movie.push(new Movie('LGM'))

for(let index =0; index < movie.length; index++){
    if(movie[index].getPGRating()==='PG Rating'){
        movie[index].tostring();
    }
}