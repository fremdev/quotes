$(document).ready(function() {

  function getQuote() {
    $.getJSON("https://wisdomapi.herokuapp.com/v1/random?callback=?", function(json) {
      var quoteText = json.content;
      var authorFullName = json.author.name;
      var authorCompany = json.author.company;
      var authorTwitter = json.author.twitter_username;

      $(".quote").text(quoteText);
      $(".author").text(authorFullName);
      addAuthorTwitter(authorTwitter, authorFullName);
      addAuthorCompany(authorCompany);
      addTweetThis(quoteText);

    });
  }

  function addTweetThis(quoteText){
    $("#tweetThis").attr("href","https://twitter.com/intent/tweet?text=" + quoteText + " from ");
   }

   function getFirstName(fullName) {
     return fullName.slice(0, fullName.indexOf(" "));
   }

   function addAuthorTwitter(authorTwitter, fullName) {
     var twitterHtml = "";
     var name = getFirstName(fullName);
     if (authorTwitter !== "") {
       twitterHtml = '<span class="author-twitter">(' + name + ' on Twitter: <a href="https://twitter.com/' + authorTwitter + '" target="_blank">@' + authorTwitter + '</a>)</span>';
     }
     $(".author-twitter").html(twitterHtml);
   }

   function addAuthorCompany(authorCompany) {
     if (authorCompany) {
       $(".author-company").text("(" + authorCompany + ")");
     }
     else {
       $(".author-company").text("");
     }
   }

   function showQuote() {
     $(".quote-block").fadeOut(700, function() {
       getQuote();
     });
     $(".quote-block").fadeIn(700);
   }

   showQuote();
   $("#nextQuote").on("click", showQuote);
});
