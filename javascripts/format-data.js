define(function(require) {
  var $ = require("jquery");
  var fullpage = require("fullpage");
  var whoWon = require("who-won");

  return function(deckOne, deckTwo) {

    var formattedDecks =  {
      cards: []
    };

    require(["hbs!../templates/section"], function(sectionTpl) {
      for (var i=0; i<deckOne.cards.length; i++) {
        formattedDecks.cards.push({'one': deckOne.cards[i], 'two': deckTwo.cards[i]});
      }

      for (var j=0; j<formattedDecks.cards.length; j++) {
        var id = j+1;
        $("#" + id).html(sectionTpl(formattedDecks.cards[j]));
        var outcome = whoWon(formattedDecks.cards[j].one.value, formattedDecks.cards[j].two.value);
        if (outcome === 1) {
          $("#" + id).find(".oneWins").css("opacity", "1");
          $("#" + id).find(".twoWins").css("opacity", "0");
        } else if (outcome === 2) {
          $("#" + id).find(".oneWins").css("opacity", "0");
          $("#" + id).find(".twoWins").css("opacity", "1");
        } else if (outcome === 3) {
          $("#" + id).find(".whoWon").html("It's war! Draw again");
          $("#" + id).find(".oneWins").css("opacity", "0");
          $("#" + id).find(".twoWins").css("opacity", "0");
        }
      }
    });
  };
});