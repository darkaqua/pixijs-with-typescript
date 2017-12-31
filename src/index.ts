
// Imports the style
import './style.less'
// Imports from the library
import {
    Application,
    Sprite
}  from 'pixi.js';

// Creation of the Application with the window resolution
const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight
});

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// Create a new Sprite from an image path
const bunny = Sprite.fromImage('bunny.png');

// Center the sprite's anchor point
bunny.anchor.set(0.5);

// Move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

// Declares the rotation velocity
let rotationVelocity = 0.01;

// Sets the bunny interactive
bunny.interactive = true;
// Gets the click event from bunny and increments the
// rotation velocity
bunny.on('click', () => {
    rotationVelocity += 0.01;
});

// Adds the bunny to the canvas
app.stage.addChild(bunny);

// Listen for animate update
app.ticker.add((delta: number) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent tranformation
    bunny.rotation += rotationVelocity * delta;
});