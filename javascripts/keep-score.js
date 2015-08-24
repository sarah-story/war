define(function(require) {
  var score1 = 0;
  var score2 = 0;

  return {
    scoreOneAdd: function() {
      score1++;
      console.log('player 1:',score1);
    },
    getScoreOne: function() {
      return score1;
    },
    scoreTwoAdd: function() {
      score2++;
      console.log('player 2:',score2);
    },
    getScoreTwo: function() {
      return score2;
    }
  };
});