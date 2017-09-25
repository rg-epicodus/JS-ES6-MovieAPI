
import { scripts } from "./../js/scripts.js";

$(document).ready(function() {

  function displayMovieData(movieId, movieName) {
    $('#displayMovieId').append(`<p>Your movie id is: ${movieId}`);
    $('#displayMovieName').append(`<p>Your movie id is: ${movieName}`);

  }


  $('#userInputQuery').submit(function(e) {
    e.preventDefault();
    // let query = $("input[name='userInputQuery']").val();
    // $("input").val("");
    scripts.findMovie(displayMovieData);
  });


});
