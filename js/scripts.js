let apiKey = require('./../.env').apiKey;

export let scripts = {



  findMovie: function(displayMovieData) {


    let min = Math.ceil(65);
    let max = Math.floor(45000);
    let result =  Math.floor((Math.random() * (max - min)) + min);
    let apiRequest1 = fetch(`https://api.themoviedb.org/3/movie/${result}?api_key=${apiKey}&language=en-US`)
    .then((res) => {
      res.json().then((test) => {
        console.log(test);
        let movieId = test.id;
        let movieName = test.original_title;

        console.log("ID of latest movie in DB: " + movieId);
        displayMovieData(movieId, movieName);
      });
    })
    .catch(console.log);
  }

};
