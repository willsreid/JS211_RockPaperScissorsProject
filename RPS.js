


if (hand1 === hand2){
  return "It\'s a tie!"

  // winning hands for hand1

} else if (
  (hand1 === 'rock' && hand2 === 'scissors') || 
  (hand1 === 'paper' && hand2 === 'rock') ||
  (hand1 === 'scissors' && hand2 === 'paper')
) {
  return 'Player 1 wins!'
} else {
  return 'player 2 wins!'
};