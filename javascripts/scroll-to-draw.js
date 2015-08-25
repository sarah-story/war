define(function(require) {

  var $ = require("jquery");
  var fullpage = require("fullpage");
  var getDeck = require("get-deck");
  var getCard = require("get-card");
  var whoWon = require("who-won");
  var formatData = require("format-data");

  var twoDecks = {};

  $(document).ready(function() {
    getDeck()
    .then(function(data) {
      console.log(data);
      deckId1 = data.deck_id;
      getCard(deckId1)
      .then(function(data) {
        console.log(data);
        var deckOne = data; 
        getDeck()
        .then(function(data) {
          console.log(data);
          deckId2 = data.deck_id;
          getCard(deckId2)
          .then(function(data) {
            console.log(data);
            var deckTwo = data;
            formatData(deckOne, deckTwo);
            $('#fullpage').fullpage({
              onLeave: function(index, nextIndex, direction){
                if (index == 1 && direction == "down") {
                  setTimeout(function() {
                      $(".shuffloader").html("<span class='glyphicon glyphicon-chevron-down floating'></span>");
                  }, 5000);
                }
                if (index>1 && direction=="down") {
                  console.log($(this).next().find(".cardOne"));
                  $(this).next().find(".cardOne").addClass("slideRight");
                  $(this).next().find(".cardTwo").addClass("slideLeft");
                }
              }
            });
            $('body').show();
          });
        });
      });
    });
  });
});