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
              anchors: ['startGame','shufflingDeck','a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14','a15','a16','a17','a18','a19','a20','a21','a22','a23','a24','a25','a26','a27','a28','a29','a30','a31','a32','a33','a34','a35','a36','a37','a38','a39','a40','a41','a42','a43','a44','a45','a46','a47','a48','a49','a50','a51','a52','end'],
              onLeave: function(index, nextIndex, direction){
                if (index == 1 && direction == "down") {
                  $.fn.fullpage.setAllowScrolling(false);
                  $.fn.fullpage.setKeyboardScrolling(false);
                  setTimeout(function() {
                      $(".shuffloader").html("<span class='glyphicon glyphicon-chevron-down floating'></span>");
                      $.fn.fullpage.setAllowScrolling(true);
                      $.fn.fullpage.setKeyboardScrolling(true);
                  }, 5000);
                }
                if (index>1 && direction=="down") {
                  $(".circle-button").show();
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