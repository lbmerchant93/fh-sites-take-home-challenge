class PokerHand {
  constructor(hand) {
    // Hand is given as a string containing 5 cards separated by a space
    // First need to break this string into an array of objects with keys for value and suite for each card
    // Methods to use:
    // .split() to split the string into an array of strings where each index contains a card
    // .map() to create objects for each card in the array with value and suite keys
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
    })

    // Should sort the hand values in order
    // Methods to use:
    // .map() to create an array of same size, 5, only containing the values of each card as a number
    // .sort() to sort the number array in ascending order, a - b
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
    }).sort((a, b) => a - b)
  }

  // Create method that checks if the hand is a straight
  // If it is a straight then the value difference from the first card to last card will be 4
  isStraight() {
    return this.handValues[4] - this.handValues[0] === 4;
  }

  // Create method that checks if the hand is a Flush - cards are all of the same suit
  // Methods used:
  // .reduce() to create an object of suits and the number of times that suit appears in the hand
  // Object.values() to create an array of the values for the suit occurrences
  // .some() to check if any of the values of suit occurrences is 5, aka all cards have the same suit
  isFlush() {
    let handSuits = this.hand.reduce((accumulator, card) => {
      accumulator[card.suit] += 1;
      return accumulator;
    }, {
      c: 0,
      d: 0,
      h: 0,
      s: 0
    })
    return Object.values(handSuits).some(suitValue => suitValue === 5);
  }

  getRank() {
    // Implement poker hand ranking
    // Test 1: call method to check if the hand is a Royal Flush, if true return 'Royal Flush' hand must contain 10, J, Q, K, A of same suit
    if (this.isStraight() && this.isFlush()) {
      return this.handValues[4] === 14 ? 'Royal Flush' : "Straight Flush";
    } 
  }
}

module.exports = PokerHand;
