let doorImage1 = document.getElementById('door1');
// 1st .onclick()
doorImage1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    };
};

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';

const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
//2nd onclick()
doorImage2.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    };
};

//3rd onclick()
doorImage3.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    };
};

//Something is wrong with my code below. look over it to find the error!
/*------------------------*/
/*startButton.onclick = () => {
  startRound()
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
};*/
/*------------------------*/

const startButton = document.getElementById('start');
const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game over! Play again?';
    };
    currentlyPlaying = false;
};

let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';

let randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = beachDoorPath;
    } else if (choreDoor === 1) {
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 2) {
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = botDoorPath;
    }
};
let numClosedDoors = 3;
let openDoor1 = '';
let openDoor2 = '';
let openDoor3 = '';

const isBot = (door) => {
    return (door.src === botDoorPath) ? true : false;
};

const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
let isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    };
};

let playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver('lose');
    };
};

let currentlyPlaying = true;

//randomChoreDoorGenerator();
//startRound();

startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound()
    };
};

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = 'Good luck!';
    randomChoreDoorGenerator();
};

startRound();