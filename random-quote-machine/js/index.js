var url = "http://api.icndb.com/jokes/random";
var getQuote = function(data) {
  $(".quote-text").text(data.value.joke);
  //console.log(data.value.joke);
};
$(document).ready(function() {
  $.getJSON(url, getQuote);
});

$("#quote").click(function() {
  $.getJSON(url, getQuote);
  //console.log($.getJSON("http://api.icndb.com/jokes?callback=",'success'));
});