// Get the game canvas
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Set canvas dimensions
const canvasWidth = 800;
const canvasHeight = 600;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Game loop
function gameLoop() {
  // Update game state

  // Render the game

  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Variables for player position
let playerX = canvasWidth / 2;
let playerY = canvasHeight / 2;
const playerSpeed = 5; // Adjust this value to control player movement speed

// Keyboard input handling
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Key state variables
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// Functions to handle keydown and keyup events
function handleKeyDown(event) {
  if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
    leftPressed = true;
  } else if (event.code === 'ArrowRight' || event.code === 'KeyD') {
    rightPressed = true;
  } else if (event.code === 'ArrowUp' || event.code === 'KeyW') {
    upPressed = true;
  } else if (event.code === 'ArrowDown' || event.code === 'KeyS') {
    downPressed = true;
  }
}

function handleKeyUp(event) {
  if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
    leftPressed = false;
  } else if (event.code === 'ArrowRight' || event.code === 'KeyD') {
    rightPressed = false;
  } else if (event.code === 'ArrowUp' || event.code === 'KeyW') {
    upPressed = false;
  } else if (event.code === 'ArrowDown' || event.code === 'KeyS') {
    downPressed = false;
  }
}

// Declare the leftPressed variable
//This fucking shit is retarded bruh
leftPressed;

// Event listener for keydown event
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    leftPressed = true;
  }
});

// Event listener for keyup event
document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowLeft') {
    leftPressed = false;
  }
});

// Update player position based on keyboard input
function updatePlayerPosition() {
  if (leftPressed) {
    playerX -= playerSpeed;
  }
  if (rightPressed) {
    playerX += playerSpeed;
  }
  if (upPressed) {
    playerY -= playerSpeed;
  }
  if (downPressed) {
    playerY += playerSpeed;
  }
}

// Game loop
function gameLoop() {
  // Update player position
  updatePlayerPosition();

  // Render the game

  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Rendering function
function render() {
  // Clear the canvas
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  // Draw the player
  context.fillStyle = 'red'; // Set player color
  context.fillRect(playerX, playerY, 20, 20); // Draw a rectangle for the player
}

// Game loop
function gameLoop() {
  // Update player position
  updatePlayerPosition();

  // Render the game
  render();

  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Variables for enemy position and behavior
let enemyX = 100;
let enemyY = 100;
const enemySpeed = 3; // Adjust this value to control enemy movement speed

// Update enemy position towards the player
function updateEnemyPosition() {
  // Calculate the direction vector from the enemy to the player
  const dx = playerX - enemyX;
  const dy = playerY - enemyY;

  // Calculate the distance between the enemy and the player
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Normalize the direction vector
  const directionX = dx / distance;
  const directionY = dy / distance;

  // Update the enemy position based on the direction vector and speed
  enemyX += directionX * enemySpeed;
  enemyY += directionY * enemySpeed;
}

// Rendering function
function render() {
  // Clear the canvas
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  // Draw the player
  context.fillStyle = 'red';
  context.fillRect(playerX, playerY, 20, 20);

  // Draw the enemy
  context.fillStyle = 'blue';
  context.fillRect(enemyX, enemyY, 20, 20);
}

// Game loop
function gameLoop() {
  // Update player position
  updatePlayerPosition();

  // Update enemy position
  updateEnemyPosition();

  // Render the game
  render();

  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Function to check for collision between two rectangles
function checkCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

// Collision detection and handling
function handleCollisions() {
  // Create bounding boxes for player and enemy
  const playerRect = {
    x: playerX,
    y: playerY,
    width: 20,
    height: 20,
  };
  const enemyRect = {
    x: enemyX,
    y: enemyY,
    width: 20,
    height: 20,
  };

  // Check for collision between player and enemy
  if (checkCollision(playerRect, enemyRect)) {
    // Handle collision action, e.g., reduce player health
    console.log('Player collided with enemy!');
  }
}

// Game loop
function gameLoop() {
  // Update player position
  updatePlayerPosition();

  // Update enemy position
  updateEnemyPosition();

  // Handle collisions
  handleCollisions();

  // Render the game
  render();

  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Variables for player's weapon
let currentWeapon = 'pistol'; // Default weapon
const weaponCooldown = 300; // Time in milliseconds between shots
let lastShotTime = 0; // Timestamp of the last shot

// Function to handle shooting
function shoot() {
  // Check if enough time has passed since the last shot
  const currentTime = Date.now();
  if (currentTime - lastShotTime < weaponCooldown) {
    return;
  }

  // Create a projectile or bullet object
  const projectile = {
    x: playerX,
    y: playerY,
    directionX: Math.cos(playerAngle),
    directionY: Math.sin(playerAngle),
    speed: 5, // Adjust this value to control projectile speed
    damage: 10, // Adjust this value to control damage
  };

  // Handle the projectile, e.g., update its position and check for collisions

  // Update the last shot time
  lastShotTime = currentTime;
}

// Function to handle mouse click event
function handleMouseClick(event) {
  shoot();
}

// Attach mouse click event listener
canvas.addEventListener('click', handleMouseClick);

// Game loop
function gameLoop() {
  // Update player position
  updatePlayerPosition();

  // Update enemy position
  updateEnemyPosition();

  // Handle collisions
  handleCollisions();

  // Render the game
  render();

  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Level data representing a grid-based map
const levelData = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

// Constants for tile size and level dimensions
const tileSize = 40;
const levelWidth = levelData[0].length;
const levelHeight = levelData.length;

// Rendering function for the level
function renderLevel() {
  for (let row = 0; row < levelHeight; row++) {
    for (let col = 0; col < levelWidth; col++) {
      const tileX = col * tileSize;
      const tileY = row * tileSize;

      if (levelData[row][col] === 1) {
        // Render a wall tile
        context.fillStyle = 'gray';
        context.fillRect(tileX, tileY, tileSize, tileSize);
      } else {
        // Render a floor tile
        context.fillStyle = 'lightgray';
        context.fillRect(tileX, tileY, tileSize, tileSize);
      }
    }
  }
}

// Game loop
function gameLoop() {
  // Update player position
  updatePlayerPosition();

  // Update enemy position
  updateEnemyPosition();

  // Handle collisions
  handleCollisions();

  // Render the level
  renderLevel();

  // Render the game entities (player, enemies, etc.)

  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

