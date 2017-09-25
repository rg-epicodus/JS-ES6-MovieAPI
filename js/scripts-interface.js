
import { scripts } from "./../js/scripts.js";

$(document).ready(function() {

  function randMovie() {
    min = Math.ceil(50);
    max = Math.floor(450000);
    console.log(min);
    console.log(max);
    result = Math.floor(Math.random() * (max - min)) + min;
  }
  function displayMovieData(movieId) {
    $('#displayQuery').append(`<p>Your movie id is: ${movieId}`);
  }


  $('#userInputQuery').submit(function(e) {
    e.preventDefault();
    // let query = $("input[name='userInputQuery']").val();
    // $("input").val("");
    scripts.findMovie(displayMovieData);
  });


});
