// PacMan position
let pos = 0;

//This array contains all the PacMan movement images
const pacArray = [
  ['./images/pacman1.png', './images/pacman2.png'],
  ['./images/pacman3.png', './images/pacman4.png'],
];

let direction = 0;

// This array holds all the PacMen
const pacMen = []; 

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/pacman1.png';
  newimg.width = Math.random() * 100;

  // Set position here
  newimg.style.left = position.x;
  newimg.style.top = position.y;

  // Add new Child image to game
  game.appendChild(newimg);

  // Return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // Loop over PacMen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // Detect collision with all walls and make PacMen bounce
   if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0
  )
    item.velocity.x = -item.velocity.x;
  if (
    item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
    item.position.y + item.velocity.y < 0
  )
    item.velocity.y = -item.velocity.y;

}

// Add a new PacMan
function makeOne() {
  pacMen.push(makePac()); 
}