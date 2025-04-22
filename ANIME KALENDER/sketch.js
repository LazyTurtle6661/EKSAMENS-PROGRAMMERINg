//HENT SCHEDULES 
let animeList = []
let animeCovers = []



function setup() {
  createCanvas(windowWidth, windowHeight)
  background(36, 11, 20)
  
  let date = "2023-01-01"
  fetchAnimeByDate(date);

  let testBtn = createButton('Test API ANIME character 1')
  testBtn.mousePressed( () => fetchAnimeByDate(1) )
  testBtn.position((width - testBtn.width) / 2, (height - testBtn.height) / 2)
}


function fetchAnimeByDate(date){
let apiUrl = `https://api.jikan.moe/v4/anime?start_date=${date}&end_date=${date}&limit=5`
  
  fetch(apiUrl)
    .then( response => response.json() )
    .then( json => {
      console.log(json)
      animeList = json.data;
      for (let i = 0; i < animeList.length; i++) {
        loadImage([i].images.jpg.image_url, img => {
          image[i] = img;
        })
      }
    })
}


function draw() {
  background(245);

  if (animeList.length > 0 && animeCovers.length === animeList.length) {
    for (let i = 0; i < animeList.length; i++) {
      let y = i * 120 + 20;

      image(images[i], 20, y, 80, 100);
      fill(0);
      text("Titel: " + animeList[i].title, 120, y + 20);
      text("Aired: " + (animeList[i].aired.from || "ukendt").split("T")[0], 120, y + 50);
    }
  } else {
    fill(0);
    text("Henter anime fra dato...", 20, 30);
  }
}
