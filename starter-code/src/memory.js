var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function() {
  for (let i = 0; i < this.cards.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let a = this.cards[i];
    let b = this.cards[j];
    this.cards[i] = b;
    this.cards[j] = a;
  }
};


