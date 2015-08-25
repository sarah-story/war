define(function(require) {
  return function(card) {
    if (card === "ACE") {
      card = 14;
      return card;
    } else if (card === "KING") {
      card = 13;
      return card;
    } else if (card === "QUEEN") {
      card = 12;
      return card;
    } else if (card === "JACK") {
      card = 11;
      return card;
    } else {
      return card;
    }
  };
});