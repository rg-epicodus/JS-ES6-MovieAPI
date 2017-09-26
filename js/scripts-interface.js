
import { scripts } from "./../js/scripts.js";

$(document).ready(function() {

  function displayMovieData(movieId, movieName, movieImg) {
    $('#displayMovieId').html(`<p>Your movie id is: ${movieId}`);
    $('#displayMovieName').html(`<p>Your movie name is: ${movieName}`);
    $('#displayImage').html(`<img src="http://image.tmdb.org/t/p/w185/${movieImg}">`);

  }


  $('#userInputQuery').submit(function(e) {
    e.preventDefault();
    // let query = $("input[name='userInputQuery']").val();
    // $("input").val("");
    scripts.findMovie(displayMovieData);
  });


});
