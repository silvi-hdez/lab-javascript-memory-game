class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.isFinished = false;
  }

  shuffleCards() {}

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if ((this.pickedCards.length = 2)) {
      this.isFinished = true;
      return this.isFinished;
    } else {
      this.isFinished = false;
      return this.isFinished;
    }
  }
}
