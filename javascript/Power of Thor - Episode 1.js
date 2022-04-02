var inputs = readline().split(' ');
const finalX = parseInt(inputs[0]); // the X position of the light of power
const finalY = parseInt(inputs[1]); // the Y position of the light of power
let posX = parseInt(inputs[2]); // Thor's starting X position
let posY = parseInt(inputs[3]); // Thor's starting Y position

while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    
    let move = "";

    finalY != posY ?  (posY>finalY ?  move += "N" : move += "S") : posY -= 1; // posY -= 1 -> we will increment it on the next line, so  removing -1 will prevent it from changing value
    posY+= 1;
    finalX != posX ?  (posX>finalX ?  move += "W" : move += "E") : posX -= 1;
    posX+= 1;

    console.log(move);
}
