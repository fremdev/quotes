$(document).ready(function() {

  function getQuote() {
    $.getJSON("https://wisdomapi.herokuapp.com/v1/random?callback=?", function(json) {
      $(".quote").html(json.content);
      $(".author").text(json.author.name);
    });
  }
  function tweetThis(){
    window.open('http://www.google.com/','_blank');
     
   }

  $("#tweetThis").on('click', tweetThis);

  getQuote();
  $("#nextQuote").on("click", getQuote);
});
