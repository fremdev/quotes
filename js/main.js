$(document).ready(function() {

  var quoteText;

  function getQuote() {
    $.getJSON("https://wisdomapi.herokuapp.com/v1/random?callback=?", function(json) {
      quoteText = json.content;
      var authorHtml = json.author.name;
      var authorTwitter = json.author.twitter_username;
      if (authorTwitter) {
        authorHtml += '(<a class="author-twitter" href="https://twitter.com/' + authorTwitter + '" target="_blank">@' + authorTwitter + '</a>)';
      }

      $(".quote").text(quoteText);
      $(".author").html(authorHtml);
      $(".author-company").text(json.author.company);

    });
  }

  function tweetThis(){
    $("#tweetThis").attr("href","https://twitter.com/intent/tweet?text=" + quoteText + "from");
   }

  $("#tweetThis").on('click', tweetThis);

  getQuote();
  $("#nextQuote").on("click", getQuote);
});
