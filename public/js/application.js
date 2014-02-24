$(document).ready(function () {

  // Bind a sumbission event handler to the form
  $('form').submit(function(event){
    // Stop the browser from submitting the form
    event.preventDefault();

    // Generate random Number
    var num = Math.floor(Math.random() * 6) + 1;

    // Grab the url the form is being submitted
    var url = $(this).attr('action');

    // Prepare a key:value pairing of the random number generated to the
    // what the server is expecting (params[:value])
    var data = {value: num}

    // AJAX Time!!!
    $.post(url, data, function(serverResponse, status, request){
      // create a function that will return an html string with
      // data from the object
      function img(serverResponse) {
        return "<img src='/" + serverResponse.roll.value + ".png' alt='the roll' title='" + serverResponse.roll.value + "'>"
      }
      // replace the html in the #die element with the result of the img function
      $('#die').html(img(serverResponse));
      // NOTE: Adding "json" as the 4th Parameter it alters the Accept Header in the request
    }, "json");
  });

});
