let apiKey = require('./../.env').apiKey;

export let scripts = {

  findMovie: function() {
    let apiRequest1 = fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}`)
    .then((res) => {
      res.json().then((test) => {
        console.log(test);
        let movieId = test.id;
        console.log("ID of latest movie in DB: " + movieId);
        displayMovieData(movieId);
      });
    })
    .catch(console.log);
  }

};
