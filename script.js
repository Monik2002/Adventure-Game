let playerName;
let weapon = false;

function startAdventure() {
  playerName = document.getElementById("player-name-input").value.trim();
  if (!playerName) {
    // Prompt the user to enter their name again
    document.getElementById("player-name-input").value = "";
    document.getElementById("player-name-input").placeholder = "Please enter your name";
    return;
  }
  document.getElementById("name-input-container").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  showText(`Welcome, ${playerName}.`);
  setTimeout(introScene, 2000);
}

function showText(text) {
  const gameContainer = document.getElementById("game-container");
  // Clear the existing content before adding new text
  gameContainer.innerHTML = "";
  const textElement = document.createElement("p");
  textElement.textContent = text;
  gameContainer.appendChild(textElement);
}

function showOptions(options, callbacks) {
  const gameContainer = document.getElementById("game-container");
  for (let i = 0; i < options.length; i++) {
    const button = document.createElement("button");
    button.textContent = options[i];
    button.onclick = callbacks[i];
    gameContainer.appendChild(button);
  }
}

function introScene() {
  showText(`You find yourself in a dark and eerie maze. There are corridors stretching in all directions. Which path will you choose?`);
  const options = ["left", "right", "forward", "backward"];
  const callbacks = [showLeftRoom, showRightRoom, showForwardRoom, showBackwardRoom];
  showOptions(options, callbacks);
}

function showLeftRoom() {
  showText("You enter a dimly lit room with strange symbols carved into the walls. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Continue exploring", () => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      showText("You find a hidden passage behind a false wall. You follow it deeper into the maze.");
      showText("You emerge in a narrow corridor with flickering torches lighting the way.");
      showText("Where would you like to go next?");
      const newOptions = ["left", "right", "forward"];
      const newCallbacks = [showLeftRoom2, showRightRoom2, showForwardRoom2];
      showOptions(newOptions, newCallbacks);
    } else {
      showText("As you explore further, you trigger a hidden trap, and the ceiling starts to collapse.");
      showText("You narrowly escape back to the previous corridor.");
      introScene(); // Return to the crossroads
    }
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showRightRoom() {
  showText("You step into a musty chamber filled with old crates and barrels. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Search the crates", () => {
    showText("You rummage through the crates and find a rusty key hidden among the contents.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom2, showRightRoom2, showForwardRoom2];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showForwardRoom() {
  showText("You enter a spacious hall with intricate tapestries hanging from the walls. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Examine the tapestries", () => {
    showText("You notice a hidden passage concealed behind one of the tapestries. You cautiously enter it.");
    showText("You find yourself in a narrow corridor with flickering torches lighting the way.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom2, showRightRoom2, showForwardRoom2];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showBackwardRoom() {
  showText("You find that this door opens into a dead end. You must choose another direction to proceed.");
  introScene(); // Return to the crossroads
}

function showLeftRoom2() {
  showText("You find yourself in a room with strange symbols carved into the walls. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Continue exploring", () => {
    showText("You stumble upon a hidden chamber filled with ancient artifacts.");
    showText("Among the artifacts, you find a mysterious amulet.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom3, showRightRoom3, showForwardRoom3];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showRightRoom2() {
  showText("You enter a chamber filled with cobwebs and dust. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Search the room", () => {
    showText("As you search the room, you uncover a hidden trapdoor beneath the floorboards.");
    showText("You pry open the trapdoor and descend into the darkness below.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom3, showRightRoom3, showForwardRoom3];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showForwardRoom2() {
  showText("You find yourself in a grand hall with marble statues lining the walls. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Inspect the statues", () => {
    showText("One of the statues conceals a hidden lever. You pull it and hear a distant click.");
    showText("A secret door opens, revealing a hidden passage.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom3, showRightRoom3, showForwardRoom3];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showLeftRoom3() {
  showText("You enter a room shrouded in darkness. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Search for a light source", () => {
    showText("You find a torch and light it, illuminating the room.");
    showText("In the flickering torchlight, you see a passage leading deeper into the maze.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom4, showRightRoom4, showForwardRoom4];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showRightRoom3() {
  showText("You enter a room filled with mirrors reflecting your image from every angle. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Examine the mirrors", () => {
    showText("You notice one of the mirrors is slightly ajar. Curiosity piqued, you push it aside and discover a hidden passageway.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom4, showRightRoom4, showForwardRoom4];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showForwardRoom3() {
  showText("You find yourself in a room with a shimmering pool of water in the center. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Investigate the pool", () => {
    showText("As you approach the pool, you notice something glinting at the bottom.");
    showText("You dive in and retrieve a valuable treasure.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom4, showRightRoom4, showForwardRoom4];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showLeftRoom4() {
  showText("You enter a room filled with ancient runes etched into the walls. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Decipher the runes", () => {
    showText("You decipher the ancient runes and uncover a hidden passage behind a false wall.");
    showText("You cautiously enter the passage, unsure of what lies ahead.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom5, showRightRoom5, showForwardRoom5];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showRightRoom4() {
  showText("You find yourself in a room filled with ancient artifacts. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Search for hidden compartments", () => {
    showText("You search the room and discover a concealed compartment hidden beneath the floorboards.");
    showText("You pry open the compartment and find a valuable artifact inside.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom5, showRightRoom5, showForwardRoom5];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showForwardRoom4() {
  showText("You enter a room filled with strange machinery and arcane devices. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Activate the machinery", () => {
    showText("As you activate the machinery, it emits a deafening noise and begins to glow with ethereal energy.");
    showText("A hidden passage opens, revealing a path forward.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom5, showRightRoom5, showForwardRoom5];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showLeftRoom5() {
  showText("You enter a chamber filled with ancient artifacts. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Search for clues", () => {
    showText("You search the chamber and find a hidden map concealed within one of the artifacts.");
    showText("The map reveals the location of the exit.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom6, showRightRoom6, showForwardRoom6];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showRightRoom5() {
  showText("You find yourself in a chamber filled with treasure chests. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Search the treasure chests", () => {
    showText("As you search through the treasure chests, you uncover a valuable gemstone.");
    showText("You pocket the gemstone and continue exploring the maze.");
    showText("Where would you like to go next?");
    const newOptions = ["left", "right", "forward"];
    const newCallbacks = [showLeftRoom6, showRightRoom6, showForwardRoom6];
    showOptions(newOptions, newCallbacks);
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showForwardRoom5() {
  showText("You enter a room with a mysterious portal shimmering in the center. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Enter the portal", () => {
    showText("You step through the portal and find yourself transported to the exit of the maze.");
    showText("Congratulations, you have escaped the labyrinth!");
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showLeftRoom6() {
  showText("You find yourself in a room with strange artifacts scattered about. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Inspect the artifacts", () => {
    showText("As you inspect the artifacts, you discover a hidden compartment containing a map.");
    showText("The map leads you to the exit of the maze.");
    showText("Congratulations, you have escaped the labyrinth!");
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showRightRoom6() {
  showText("You enter a chamber filled with ancient tomes and scrolls. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Search for clues", () => {
    showText("You search through the tomes and scrolls and find a hidden passage in the wall.");
    showText("You follow the passage and eventually find your way to the exit of the maze.");
    showText("Congratulations, you have escaped the labyrinth!");
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function showForwardRoom6() {
  showText("You enter a room with a mysterious altar at the center. Where would you like to go?");
  const gameContainer = document.getElementById("game-container");
  gameContainer.appendChild(addButton("Approach the altar", () => {
    showText("As you approach the altar, you feel a surge of energy and find yourself transported to the exit of the maze.");
    showText("Congratulations, you have escaped the labyrinth!");
  }));
  gameContainer.appendChild(addButton("Go back", introScene));
}

function addButton(label, onClick) {
  const button = document.createElement("button");
  button.textContent = label;
  button.onclick = onClick;
  return button;
}

// Call startAdventure to initiate the game when the page loads
window.onload = startAdventure;
