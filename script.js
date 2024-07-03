// Class representing a video game with a title and genre
class VideoGame {
  constructor(title, genre) {
    // The constructor method is a special method for creating and initializing an object created within a class.
    this.title = title; // This line sets the title property of the VideoGame object.
    this.genre = genre; // This line sets the genre property of the VideoGame object.
  }

  // Method to return a description of the video game
  describe() {
    // This method returns a string that describes the video game.
    return `${this.title} (Genre: ${this.genre})`;
  }
}

// Class representing the menu for managing video games
class Menu {
  constructor() {
    // The constructor method is a special method for creating and initializing an object created within a class.
    this.videoGames = []; // This line initializes an empty array to store video games.
  }

  // Method to start the menu and handle user selections
  start() {
    let selection = this.showMainMenuOptions(); // This line calls the showMainMenuOptions method and stores the returned value in the selection variable.
    while (selection != 0) { // This line starts a loop that continues until the user chooses to exit (selection is 0).
      switch (selection) { // This line starts a switch statement that handles different menu options based on the user's selection.
        case '1':
          this.createVideoGame(); // This line calls the createVideoGame method when the user's selection is 1.
          break;
        case '2':
          this.viewVideoGames(); // This line calls the viewVideoGames method when the user's selection is 2.
          break;
        case '3':
          this.deleteVideoGame(); // This line calls the deleteVideoGame method when the user's selection is 3.
          break;
        default:
          selection = 0; // This line sets the selection to 0 (exit) if the user's input is invalid.
      }
      selection = this.showMainMenuOptions(); // This line calls the showMainMenuOptions method again at the end of each loop iteration.
    }
  }

  // Method to display the main menu options and return the user's choice
  showMainMenuOptions() {
    // This method displays the main menu options to the user and returns the user's selection.
    return prompt(`
      0) Exit
      1) Create new video game
      2) View video games
      3) Delete video game
    `);
  }

  // Method to create a new video game using user input
  createVideoGame() {
    const title = prompt('Enter video game title:'); // This line prompts the user to enter a title for the new video game.
    const genre = prompt('Enter video game genre:'); // This line prompts the user to enter a genre for the new video game.
    this.videoGames.push(new VideoGame(title, genre)); // This line creates a new VideoGame object with the entered title and genre, and adds it to the videoGames array.
    alert('Video game added successfully!'); // This line alerts the user that the video game was added successfully.
  }

  // Method to view all video games in the array
  viewVideoGames() {
    let gameString = ''; // This line initializes an empty string to store the descriptions of all video games.
    for (let i = 0; i < this.videoGames.length; i++) { // This line starts a loop that iterates over each video game in the videoGames array.
      gameString += `${i}) ${this.videoGames[i].describe()} \n`; // This line appends the description of the current video game to the gameString.
    }
    alert(gameString); // This line alerts the user with the descriptions of all video games.
  }

  // Method to delete a video game at a specified index
  deleteVideoGame() {
    const index = prompt('Enter the index of the video game you wish to delete:'); // This line prompts the user to enter the index of the video game they wish to delete.
    if (index > -1 && index < this.videoGames.length) { // This line checks if the entered index is valid (greater than -1 and less than the length of the videoGames array).
      this.videoGames.splice(index, 1); // This line removes the video game at the entered index from the videoGames array.
      alert('Video game deleted successfully!'); // This line alerts the user that the video game was deleted successfully.
    }
  }
}

document.getElementById('menuButton').addEventListener('click', function() {
  // Create a new Menu instance and start the application
  const menu = new Menu();
  menu.start();
});


// Create a new Menu instance and start the application
const menu = new Menu(); // This line creates a new Menu object.
menu.start(); // This line calls the start method of the Menu object to start the application.
