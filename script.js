// Player object class
class Player
{
  constructor(un)
  {
    this.username = un;
    this.wins = 0, this.ties = 0, this.losses = 0;
  }

  tie()
  {
    this.ties++;
  }

  win()
  {
    this.wins++;
  }

  lose()
  {
    this.losses++;
  }
}

// Get player usernames
var username = "";
while (username.length <= 0) // Verify input
  username = window.prompt("Player 1 Username:");
let player1 = new Player(username);
username = "";
while (username.length <= 0) // Verify input
  username = window.prompt("Player 2 Username:");
let player2 = new Player(username);

// Log battle to console
console.log(player1.username + " vs. " +player2.username);


// Game functions
var getMove = function(player)
{
  var move = "";
  while (!(move === 'r' || move === 'p' || move === 's')) // Verify input
  {
    move = window.prompt(player.username + ", Rock, Paper, or Scissors? (r/p/s)");
  }

  return move;
}

var getWinner = function(p1m, p2m)
{
  if (p1m === p2m) // Tie
    return 0;

  switch (p1m)
  {
    case 'r':
      if (p2m === 'p')
        return 2;
      else
        return 1;
    case 'p':
      if (p2m === 's')
        return 2;
      else
        return 1;
    case 's':
      if (p2m === 'r')
        return 2;
      else
        return 1;
  }
}

var scoreboard = function(p1, p2)
{
  window.alert("Scoreboard (W/T/L):\n"+
  p1.username+": "+p1.wins+"-"+p1.ties+"-"+p1.losses+"\n"+
  p2.username+": "+p2.wins+"-"+p2.ties+"-"+p2.losses)
}

// Game Loop
var play = true;
while (play)
{
  // Get Moves
  var p1move, p2move;
  p1Move = getMove(player1);
  p2Move = getMove(player2);

  // Log Moves
  console.log(p1Move + " vs " + p2Move);

  // Check winner
  var winner = getWinner(p1Move, p2Move);

  // Score
  switch (winner)
  {
    case 0:
      player1.tie();
      player2.tie();
      break;
    case 1:
      player1.win();
      player2.lose();
      break;
    case 2:
      player2.win();
      player1.lose();
  }

  // Display Scoreboard
  scoreboard(player1, player2);

  // Again?
  play = window.confirm("Press OK to play again.");

}
