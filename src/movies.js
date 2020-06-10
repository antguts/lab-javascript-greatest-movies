
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr){
    let newArr=[]
    for(i=0;i<arr.length;i++){
        for(j=0;j<movies.length;j++){
            if(movies[j].title == arr[i]){
                newArr.push(movies[j].director)
            }//end if
        }//end inner
    }//end outer
    return newArr;
}//end funct

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieArr){
    let newArr=[];
    for(i=0;i<movieArr.length;i++){
        for(j=0;j<movies.length;j++){
            if(movies[j].title == movieArr[i] && movies[j].director == 'Steven Spielberg'){
                newArr.push(movieArr[i])
            }//end if
        }//end inner
    }//end outer
    return newArr;
}//end funct



// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movieArr){
    let avRate=0;
    for(i=0;i<movieArr.length;i++){
        for(j=0;j<movies.length;j++){
            if(movies[j].title == movieArr[i]){
                avRate+=movies[j].rate;
            }//end if
        }//end inner
    }//end outer
    let reducer = (avRate, movieArr) => avRate / movieArr.length;
    return reducer(avRate,movieArr)
}//end funct

// Iteration 4: Drama movies - Get the average of Drama Movies

//takes in array of movies and gains av rating for all dramas
function dramaMoviesRate(movieArr){
    let rate=0;
    let cnt=0;
    for(i=0;i<movieArr.length;i++){
        for(j=0;j<movies.length;j++){
            if(movies[j].genre.includes('Drama') && movies[j].title == movieArr[i]){
               rate+=movies[j].rate; 
            }//end if
        }//end inner
    }//end outer
    let reducer = (rate,movieArr)=>rate/movieArr.length;
    return reducer(rate,movieArr);
}//end funct


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArr){
    let newArr=[];
    for(i=0;i<movieArr.length;i++){
        for(j=0;j<movies.length;j++){
            if(movies[j].title == movieArr[i]){
                newArr.push(movies[j].year)
            }//end if
        }//end inner
    }//end outer
    newArr.sort()
    return newArr
}//end funct


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArr){
    let newArr=movieArr.sort()
    newArr.splice(19,newArr.length-20);
    return newArr
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
