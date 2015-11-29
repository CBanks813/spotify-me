// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/


function searchByArtist(keyword) {
  var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
}


function searchByTrack(keyword) {
  var url = 'http://ws.spotify.com/search/1/track.json?q='+keyword;
}

$("#search").submit(function(evt){
  var keyword = $("#search-keyword").val();
  console.log(keyword);
  evt.preventDefault();

});
