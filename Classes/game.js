// JavaScript Code Challenges: Classes 

// A video game consists of two players floating using 100 helium balloons. The players shoot pellets at each other’s balloons and after 10 minutes the player with the most balloons left wins.

// TODO: Write a game function balloonAttack that takes two Player instances, calculates the balloons left for each player after 10 minutes (using the hitsPerMinute property) and returns the name of the winner. If the result is a tie, return the string 'Tie'.

class Player {
  // passing name and hitsPerMinute parameters into contructor which will be used as arguments when creating a new Player instance
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      // each player starts with 100 balloons
      this.balloonCount = 100;
    }
    // this method will print a string to the console with player name and balloon count
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
  }

// function will take in two players as parameters 
const balloonAttack = (player1, player2) => {
    // calculate balloons left for each player after 10 mins
    for (let i = 1; i <= 10; i++){
      player2.balloonCount -= player1.hitsPerMinute
      player1.balloonCount -= player2.hitsPerMinute
      // output each player's balloon count with the status() method
      player1.status();
      player2.status();
    }
    // compare players balloon count to determine winner 
    if (player1.balloonCount > player2.balloonCount) {
      return player1.name;
    }else if (player2.balloonCount > player1.balloonCount)
      return player2.name
    // print 'Tie' if both players end game with the same number of balloons 
    return 'Tie'
  }


// test the function by creating two instances of the Player class to use as arguments for the function
const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);
 
balloonAttack(p1, p2);