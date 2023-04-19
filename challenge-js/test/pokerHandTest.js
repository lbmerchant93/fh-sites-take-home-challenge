var assert = require('assert');
var PokerHand = require('../pokerHand.js');

/**
 * test
 */
describe('Rank a Royal Flush', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('As Ks Qs Js 10s');
    assert.equal(hand.getRank(), 'Royal Flush');
  });
});

/**
 * test
 */
describe('Rank a Pair', function() {
  it('Return one pair when hand given', function() {
    var hand = new PokerHand('Ah As 10c 7d 6s');

    assert.equal(hand.getRank(), 'One Pair');
  });
});

/**
 * test
 */
describe('Rank Two Pair', function() {
  it('Return two pair when hand given', function() {
    var hand = new PokerHand('Kh Kc 3s 3h 2d');

    assert.equal(hand.getRank(), 'Two Pair');
  });
});

/**
 * test
 */
describe('Rank A Flush', function() {
  var hand = new PokerHand('Kh Qh 6h 2h 9h');

  it('Return flush when hand given', function() {
    assert.equal(hand.getRank(), 'Flush');
  });
});

// More tests go here

describe('Rank A Straight Flush', function() {
  var hand = new PokerHand('6h 3h 2h 5h 4h');

  it('Return straight flush when hand given', function() {
    assert.equal(hand.getRank(), 'Straight Flush');
  });
});

describe('Rank A Four of a Kind', function() {
  var hand = new PokerHand('9s 9c 7h 9h 9d');

  it('Return four of a kind when hand given', function() {
    assert.equal(hand.getRank(), 'Four of a Kind');
  });
});

describe('Rank A Full House', function() {
  var hand = new PokerHand('2h 4d 2d 4s 2s');

  it('Return full house when hand given', function() {
    assert.equal(hand.getRank(), 'Full House');
  });
});

describe('Rank A Straight', function() {
  var hand = new PokerHand('6s 8d 10c 9c 7h');

  it('Return straight when hand given', function() {
    assert.equal(hand.getRank(), 'Straight');
  });
});

describe('Rank A Straight With Ace Low', function() {
  var hand = new PokerHand('4h 2d Ac 3c 5d');

  it('Return straight when hand given with Ace low', function() {
    assert.equal(hand.getRank(), 'Straight');
  });
});

describe('Rank A Three of a Kind', function() {
  var hand = new PokerHand('As 8c Ac 10h Ad');

  it.skip('Return three of a kind when hand given', function() {
    assert.equal(hand.getRank(), 'Three of a Kind');
  });
});

describe('Rank A High Card', function() {
  var hand = new PokerHand('10s 6c 3d Ks Qd');

  it.skip('Return high card when hand given', function() {
    assert.equal(hand.getRank(), 'High Card');
  });
});