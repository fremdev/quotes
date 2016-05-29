$(document).ready(function() {
  $("#getQuote").on("click", function() {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
      $(".quote").text(json[0].content);
      $(".author").text(json[0].title);
    });
  });
});
