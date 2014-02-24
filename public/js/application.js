$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

  // Bind a sumbission event handler to the form
  $('form').submit(function(event){
    // Stop the browser from submitting the form
    event.preventDefault();

    // Grab random number from data attribute
    var num = $(this).data('roll-value');

    // Grab the url the form is being submitted
    var url = $(this).attr('action');

    // Prepare a key:value pairing of the random number generated to the
    // what the server is expecting (params[:value])
    var data = {value: num}

    // AJAX Time!!!
    $.post(url, data, function(serverResponse, status, request){
      // replace the html inside of #die with html received from server
      $('#die').html(serverResponse);
    });
  });

});
