define(function(require) {
  var $ = require("jquery");
  var getDeck = require("get-deck");
  var keepScore = require("keep-score");

  var deckId1 = "";
  var deckId2 = "";

  $("#newGame").click(function() {
    $(".jumbotron").hide();
    $("#board").show();
    getDeck().then(function(data) {
      console.log(data);
      deckId1 = data.deck_id;
    });
    getDeck().then(function(data) {
      console.log(data);
      deckId2 = data.deck_id;
    });
  });

  $(".alert-link").click(function() {
    keepScore.resetScore();
    $("#score1").html(keepScore.getScoreOne());
    $("#score2").html(keepScore.getScoreTwo());
    $("#cardOne").attr("src", "");
    $("#cardTwo").attr("src", "");
    $("#draw").removeAttr("disabled");
    $(".alert").hide();
    getDeck().then(function(data) {
      console.log(data);
      deckId1 = data.deck_id;
    });
    getDeck().then(function(data) {
      console.log(data);
      deckId2 = data.deck_id;
    });
  });

  return {
    getDeckOne: function() {
      return deckId1;
    },
    getDeckTwo: function() {
      return deckId2;
    }
  };
});