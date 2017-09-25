
import { scripts } from "./../js/scripts.js";

$(document).ready(function() {

  function displayMovieData(movieId) {
    $('#displayQuery').append(`<p>Your movie id is: ${movieId}`);
  };

  $('#userInputQuery').submit(function(e) {
    e.preventDefault();
    // let query = $("input[name='userInputQuery']").val();
    // $("input").val("");
    scripts.findMovie();
  })

});
