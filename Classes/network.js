// JavaScript Code Challenges: Classes

// You are a college student and you want to stream a movie over one of the campuses Wi-Fi networks. Based on the number of users, some networks won’t have the data to stream a movie.

// The properties of the Network class are:

// data: Total units of data supplied by the network
// users: Total numbers of users currently on the network
// Each user on average deducts 5 units from the network’s total data. To watch a movie you must connect to a network that has at least 10 remaining units of data.

// TODO: Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.

// Use the Network class to track how much total data and how many users each network has
class Network {
  // passing data and users parameters into contructor which will be used as arguments when creating a new Network instance
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  // if there is enough data available to watch a movie return true, otherwise return false
  movieTime() {
    // calculating data usage based on number of users
    const totalData = this.users * 5; 
    console.log(totalData);
    // calculate amount of data remaining 
    const remainingData = this.data - totalData; 

    // if the network has at least 10 remaining units of data, they can watch a movie
    if (remainingData >= 10) {
      return true; 
    } else {
      return false; 
    }
  }
}
// const user = new Network(0, 0)
// console.log(user.movieTime());
// returns false

// testing function by creating new Network instance
const user = new Network(20, 2)
console.log(user.movieTime());   
// returns true

// const user = new Network(100, 1)
// console.log(user.movieTime());   


