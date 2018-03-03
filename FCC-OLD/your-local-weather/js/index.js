var url ="https://api.forecast.io/forecast/";
var APIKEY = "dee810459a9962fde547aaf91accc3d4/";
var LatLong=0;
var skycons = new Skycons({"color": "pink"});

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) 
{
  LatLong = position.coords.latitude +','+position.coords.longitude;
  $.getJSON(url+APIKEY+LatLong+ "?callback=?", getQuote);
});
}
var getQuote = function(data) {
  $("#data").text(data.hourly.summary);
  $("#location").text(data.timezone);
  console.log(data.hourly.icon);
  skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
  skycons.play();
};