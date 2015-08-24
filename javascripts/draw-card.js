define(function(require) {
  var $ = require("jquery");
  var getCard = require("get-card");
  var startGame = require("start-game");
  var whoWon = require("who-won");
  var keepScore = require("keep-score");
  var gameOver = require("game-over");

  var card1;
  var card2;

  $("#draw").click(function() {
    var deckId1 = startGame.getDeckOne();
    var deckId2 = startGame.getDeckTwo();
    getCard(deckId1).then(function(data) {
      console.log(data);
      card1 = data.cards[0].value;
      var cardImage1 = data.cards[0].image;
      $("#cardOne").attr("src", cardImage1);
      getCard(deckId2).then(function(data2) {
        console.log(data2);
        card2 = data2.cards[0].value;
        var cardImage2 = data2.cards[0].image;
        console.log(cardImage2);
        $("#cardTwo").attr("src", cardImage2);
        whoWon(card1,card2);
        $("#score1").html(keepScore.getScoreOne());
        $("#score2").html(keepScore.getScoreTwo());
        gameOver(data2.remaining);
      });

    });

  });

});