console.log("Hello, world!");
var messagePlayerOneWin = "Congratulations! Player one wins!";
var messagePlayerTwoWin = "Congratuations! Player two wins!";
var messageDraw = "It's a draw! You both suck.";

var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var outcomePlayerOneWin = 0;
var outcomePlayerTwoWin = 1;
var outcomeDraw = 2;

//getOutcome function takes two plays as parameters, returns 0 for
//player one wins, 1 for player 2 wins, 2 for draw
var getOutcome = function(playerOne, playerTwo){
    if (playerOne === rock){
        if (playerTwo === rock)
            return outcomeDraw;
        if (playerTwo === paper)
            return outcomePlayerTwoWin;
        return outcomePlayerOneWin;
    }
    else if (playerOne === paper){
        if (playerTwo === rock)
            return outcomePlayerOneWin;
        if (playerTwo === paper)
            return outcomeDraw;
        return outcomePlayerTwoWin;
    }
    else if (playerOne === scissors){
        if (playerTwo === rock)
            return outcomePlayerTwoWin;
        if (playerTwo === paper)
            return outcomePlayerOneWin;
        return outcomeDraw;
    }
};

//rockPaperScissors function takes two players' moves, prints out winner
var rockPaperScissors = function(playerOne, playerTwo){
    //check if moves are supplied or if we need to prompt for them
    if (arguments.length === 2){
        var outcome = getOutcome(playerOne, playerTwo);
        if (outcome === outcomePlayerOneWin)
            console.log(messagePlayerOneWin);
        else if (outcome === outcomePlayerTwoWin)
            console.log(messagePlayerTwoWin);
        else
            console.log(messageDraw);
        return outcome;
    }
    else if (arguments.length === 0){
        var playerOne;
        var PlayerTwo;
        //read in
        process.stdin.setEncoding('utf8');
        process.stdin.on('readable', function(){
        	console.log("Please enter player one's move.");
        	playerOne = process.stdin.read();
        	console.log("Please enter player two's move.");
        	playerTwo = process.stdin.read();
        	process.exit();
        });
        if (outcome === outcomePlayerOneWin)
            console.log(messagePlayerOneWin);
        else if (outcome === outcomePlayerTwoWin)
            console.log(messagePlayerTwoWin);
        else
            console.log(messageDraw);
        return outcome;
    }
}

rockPaperScissors(paper, rock);

console.log("I will now ask you for your name.");
process.stdin.setEncoding('utf8');
var name;
process.stdin.on('readable', function() {
    name = process.stdin.read();
    if (name !== null) {
        console.log("Hello ".concat(name, ". How are you"));
        process.exit();
    }
});

        
        
