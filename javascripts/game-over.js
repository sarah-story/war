define(function(require) {
  var keepScore = require("keep-score");

  return function(remaining) {
    if (remaining === 0) {
      $("#draw").attr("disabled", "disabled");
      if (keepScore.getScoreOne() > keepScore.getScoreTwo()) {
        $("#winner").html("Player One wins!");
        $(".alert").show();
      } else if (keepScore.getScoreOne() < keepScore.getScoreTwo()) {
        $("#winner").html("Player Two wins!");
        $(".alert").show();
      } else {
        $("#winner").html("It's a tie!");
        $(".alert").show();
      }
    }
  };
});