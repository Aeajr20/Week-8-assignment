// script.js

// Class representing a video game with a title and genre
class VideoGame {
    constructor(title, genre) {
      this.title = title; 
      this.genre = genre;
    }
  
    // Method to return a description of the video game
    describe() {
      return `${this.title} (Genre: ${this.genre})`;
    }
  }
  
  // Class representing the menu for managing video games
  class Menu {
    constructor() {
      this.videoGames = []; // Initialize an array to store video games
    }
  
    // Method to start the menu and handle user selections
    start() {
      let selection = this.showMainMenuOptions();
      while (selection != 0) { // Continue the loop until the user chooses to exit
        switch (selection) {
          case '1':
            this.createVideoGame();
            break;
          case '2':
            this.viewVideoGames();
            break;
          case '3':
            this.deleteVideoGame();
            break;
          default:
            selection = 0; // Exit the loop if input is invalid
        }
        selection = this.showMainMenuOptions(); // Show menu options again
      }
    }
  
    // Method to display the main menu options and return the user's choice
    showMainMenuOptions() {
      return prompt(`
        0) Exit
        1) Create new video game
        2) View video games
        3) Delete video game
      `);
    }
  
    // Method to create a new video game using user input
    createVideoGame() {
      const title = prompt('Enter video game title:');
      const genre = prompt('Enter video game genre:');
      this.videoGames.push(new VideoGame(title, genre)); // Add the new game to the array
      alert('Video game added successfully!');
    }
  
    // Method to view all video games in the array
    viewVideoGames() {
      let gameString = '';
      for (let i = 0; i < this.videoGames.length; i++) {
        gameString += `${i}) ${this.videoGames[i].describe()} \n`; // Append each game's description
      }
      alert(gameString); // Display all video games
    }
  
    // Method to delete a video game at a specified index
    deleteVideoGame() {
      const index = prompt('Enter the index of the video game you wish to delete:');
      if (index > -1 && index < this.videoGames.length) {
        this.videoGames.splice(index, 1); // Remove the game from the array
        alert('Video game deleted successfully!');
      }
    }
  }
  
  // Create a new Menu instance and start the application
  const menu = new Menu();
  menu.start();