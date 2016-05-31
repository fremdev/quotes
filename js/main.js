$(document).ready(function() {
  $("#getQuote").on("click", function() {
    $.getJSON("https://wisdomapi.herokuapp.com/v1/random?callback=?", function(json) {
      $(".quote").html(json.content);
      $(".author").text(json.author.name);
    });
  });
});
