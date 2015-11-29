// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/


function searchByArtist(keyword) {
  var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
}


function searchByTrack(keyword) {
  var url = 'http://ws.spotify.com/search/1/track.json?q='+keyword;
}

$("#search").submit(function(evt){
  $("#results").empty();
  evt.preventDefault();
  var keyword = $("#search-keyword").val();
  var type = $("#search-type").val();
  var url = 'http://ws.spotify.com/search/1/'+type+'.json?q=' + keyword;

  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json'
  })
  .done(function(response) {
    var selectionProperty = type + 's';
    var selection = response[selectionProperty];
    console.log(selection);
    $(selection).each(function(index, el) {
      $("#results").append('<li><a href="'+ el.href+'">'+el.name+'</a></li>');
    });
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });


});
