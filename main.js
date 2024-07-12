// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start


const url = "https://raw.githubusercontent.com/DominantDuck/blot/main/spotify.txt";

var height,width = 0;

var request = new XMLHttpRequest();
request.open("GET", url, false);
request.send(null);
const image = request.responseText;

const lines = image.trim().split('\n');

function getDimensions (data) {
    let heightCount, widthCount = 0;
    heightCount = lines.length;

    if (heightCount > 0) {
        widthCount = lines[0].length;
    }

    height = heightCount;
    width = widthCount;

    console.log(h: ${height}, w: ${width})
}

function parseBinaryData(data) {
    let individual = [];

  
    for (let x = 0; x < height; x++) {
      individual[x] = [];
      for (let y = 0; y < width; y++) {
          individual[x][y] = lines[x].charAt(y) 
      }
    }

  console.log(individual)
}

const dataArray = parseBinaryData(image);

getDimensions (image)
parseBinaryData(image)
