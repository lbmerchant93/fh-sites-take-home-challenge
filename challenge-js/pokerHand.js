class PokerHand {
  constructor(hand) {

    // Hand is given as a string containing 5 cards separated by a space, first need to break this string into an array of objects with keys for value and suite for each card
    this.hand = hand.split(' ').map(card => {
      card = card.split('');
      let cardObject = {
        value: 0,
        suit: ''
      };
      if (card.length === 3) {
        cardObject['value'] = card[0] + card[1];
        cardObject['suit'] = card[2];
      } else {
        cardObject['value'] = card[0];
        cardObject['suit'] = card[1];
      }
      return cardObject;
    });

    // Sort the hand values in order as an array of numbers
    this.handValues = this.hand.map(card => {
      if (card.value === "J") {
        return 11;
      } else if (card.value === "Q") {
        return 12;
      } else if (card.value === "K") {
        return 13;
      } else if (card.value === "A") {
        return 14;
      } else {
        return Number(card.value);
      }
    }).sort((a, b) => a - b);

    // Create an object for value instances occurrence
    this.valueInstances = this.handValues.reduce((accumulator, value) => {
      if (!accumulator[value]) {
        accumulator[value] = 1;
      } else {
        accumulator[value] += 1;
      }
      return accumulator;
    }, {});
  }

  // Method that checks if the hand is a straight, if it is a straight then the value difference from the first card to last card will be 4, edge case for Ace Low Straight the difference from the first card to 4th card will be 3 and the 5th card will be value 14
  isStraight() {
    return this.handValues[4] - this.handValues[0] === 4 || (this.handValues[3] - this.handValues[0] === 3 && this.handValues[4] === 14);
  }

  // Method that checks if the hand is a Flush - cards are all of the same suit
  isFlush() {
    let handSuits = this.hand.reduce((accumulator, card) => {
      accumulator[card.suit] += 1;
      return accumulator;
    }, {
      c: 0,
      d: 0,
      h: 0,
      s: 0
    });
    return Object.values(handSuits).some(suitValue => suitValue === 5);
  }

  getRank() {
    // Implement poker hand ranking
    
    if (Object.values(this.valueInstances).length === 4) {
      
      return 'One Pair';

    } else if (Object.values(this.valueInstances).length === 3) {

      // If length of Object.values(valueInstance) is 3 -> Two Pair or Three of a Kind
      // .some() to check if any of the values of instances is 3 -> Three of a Kind, otherwise has to be Two Pair
      return Object.values(this.valueInstances).some(valueInstance => valueInstance === 3) ? 'Three of a Kind' : 'Two Pair';

    } else if (Object.values(this.valueInstances).length === 2) {

      // If length of Object.values(valueInstance) is 2 -> Four of a Kind or Full House
      // .some() to check if any of the values of instances is 4 -> Four of a Kind, otherwise has to be Full House
      return Object.values(this.valueInstances).some(valueInstance => valueInstance === 4) ? 'Four of a Kind' : 'Full House';

    } else if (this.isStraight() && this.isFlush()) {

      // If it is a straight and flush and the 4th card is a King/13 -> Royal Flush, otherwise has to be Straight Flush
      return (this.handValues[3] === 13) ? 'Royal Flush' : 'Straight Flush';

    } else if (this.isFlush()) {

      return 'Flush';

    } else if (this.isStraight()) {

      return 'Straight';

    } else {

      return 'High Card';

    }
  }
}

module.exports = PokerHand;
