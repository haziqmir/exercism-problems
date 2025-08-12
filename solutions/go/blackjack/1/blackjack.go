package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
    var value int
    switch card {
        case "ace":
        value = 11
		case "two":
        value = 2
        case "three":
        value = 3
        case "four":
        value = 4
        case "five":
        value = 5
        case "six":
        value = 6
        case "seven":
        value = 7
        case "eight":
        value = 8
        case "nine":
        value = 9
        case "ten", "jack", "queen", "king":
        value = 10
        default:
        value = 0
    }
    return value
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	var outcome string
    
    card1Val, card2Val, dealerCardVal := ParseCard(card1), ParseCard(card2), ParseCard(dealerCard)
    myCardsVal := card1Val + card2Val
    
    switch {
        case card1 == "ace" && card2 == "ace":
        outcome = "P"
        case myCardsVal == 21 && dealerCardVal < 10:
        outcome = "W"
        case myCardsVal == 21 && dealerCardVal >= 10:
        outcome = "S"
        case myCardsVal >= 17 && myCardsVal <= 20:
        outcome = "S"
        case myCardsVal >= 12 && myCardsVal <= 16 && dealerCardVal < 7:
        outcome = "S"
        case myCardsVal >= 12 && myCardsVal <= 16 && dealerCardVal >= 7:
        outcome = "H"
        case myCardsVal <= 11:
        outcome = "H"
    }
    return outcome
}
