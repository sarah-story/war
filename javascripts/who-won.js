define(function(require) {
  var faceCard = require("face-card");
  var keepScore = require("keep-score");

  return function(card1, card2) {
    card1 = faceCard(card1);
    card2 = faceCard(card2);
    card1 = parseInt(card1);
    card2 = parseInt(card2);

    console.log('card one val:',card1);
    console.log('card two val:',card2);

    if (card1 > card2) {
      keepScore.scoreOneAdd();
    } else if (card2 > card1) {
      keepScore.scoreTwoAdd();
    }
  };
});