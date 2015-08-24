define(function(require) {
  var $ = require("jquery");
  var getCard = require("get-card");
  var startGame = require("start-game");

  $("#draw").click(function() {
    console.log(startGame);
    var deckId1 = startGame.getDeckOne();
    getCard(deckId1).then(function(data) {
      console.log(data);
    });
    var deckId2 = startGame.getDeckTwo();
    getCard(deckId2).then(function(data) {
      console.log(data);
    });
  });

});