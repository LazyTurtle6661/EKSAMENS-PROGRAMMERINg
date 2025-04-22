let animeList = []
let dateInput;
let button;
let greeting;

function setup(){
      // Use the greeting variable to ask for the person's name.
  greeting = createElement('h2', 'What date do you desire?', );
  greeting.position(20, 5);

  // Create the input and button in the canvas.
  nameInput = createInput();
  nameInput.position(20, 65);

  button = createButton('submit');
  button.position(nameInput.x + nameInput.width, 65);

  // Use the mousePressed() method to call the greet()
  // function when the button is pressed.
  button.mousePressed(getAnime);

  // Also call greet when input is changed and enter/return button is pressed
  nameInput.changed(getAnime);
}

function getAnime(){
    let apiUrl = `https://api.jikan.moe/v4/anime?start_date=${date}&end_date=${date}&limit=5`
    .then(function(response) {
        if(response.ok){
          return response.json()
        }
    })
    
}