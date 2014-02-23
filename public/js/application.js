$(document).ready(function () {

  // Bind a sumbission event handler to the form
  $('form').submit(function(event){
    // Stop the browser from submitting the form
    event.preventDefault();

    // Grab the url the form is being submitted
    var url = $(this).attr('action');

    // Grab data from the form and serialize it as a url-encoded form
    var data = $(this).serialize();

    // AJAX Time!!!
    $.post(url, data, function(serverResponse, status, request){
      // replace the html inside of #die with html received from server
      $('#die').html(serverResponse);
    });
  });

});
