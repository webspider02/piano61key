let key;
const blackKeys = [];
const whiteKeys = [];
const path = document.querySelector("div#wrapper > div#piano-card > div#piano-keyboard"); 

// Creating white keys
for(let i=0; i<=37; i++) {
    key = document.createElement("div");
    key.classList.add("white-key");
    //key.classList.add("key");
    whiteKeys[i] = key;
    path.appendChild(key);
}

// Black keys
for(let j=0; j<=25; j++) {
    key = document.createElement("div");
    key.classList.add("black-key");
    blackKeys[j] = key;
    path.appendChild(key);
}

// Labeling black keys
blackKeys[0].setAttribute("id","Bb1"); 
blackKeys[1].setAttribute("id","Db2");
blackKeys[2].setAttribute("id","Eb2");
blackKeys[3].setAttribute("id","Gb2");
blackKeys[4].setAttribute("id","Ab2");
blackKeys[5].setAttribute("id","Bb2");
blackKeys[6].setAttribute("id","Db3");
blackKeys[7].setAttribute("id","Eb3");
blackKeys[8].setAttribute("id","Gb3");
blackKeys[9].setAttribute("id","Ab3");
blackKeys[10].setAttribute("id","Bb3");
blackKeys[11].setAttribute("id","Db4");
blackKeys[12].setAttribute("id","Eb4");
blackKeys[13].setAttribute("id","Gb4");
blackKeys[14].setAttribute("id","Ab4");
blackKeys[15].setAttribute("id","Bb4");
blackKeys[16].setAttribute("id","Db5");
blackKeys[17].setAttribute("id","Eb5");
blackKeys[18].setAttribute("id","Gb5");
blackKeys[19].setAttribute("id","Ab5");
blackKeys[20].setAttribute("id","Bb5");
blackKeys[21].setAttribute("id","Db6");
blackKeys[22].setAttribute("id","Eb6");
blackKeys[23].setAttribute("id","Gb6");
blackKeys[24].setAttribute("id","Ab6");
blackKeys[25].setAttribute("id","Bb6");

// Labeling White keys
const notes = ["A", "B", "C", "D", "E", "F", "G"];
let whiteKeyId, noteNum, octave;

for (let k = 0; k < 37; k++) {
    noteNum = k % 7;  // Cycle through the notes array
    octave = Math.floor(k / 7) + 1;  // Calculate the octave number

    // If the octave is beyond 7, start again from octave 1
    if (octave > 7) {
        octave = 1;
    }

    whiteKeyId = notes[noteNum] + octave;
    whiteKeys[k].setAttribute("id", whiteKeyId);
}

whiteKeys[37].setAttribute("id","C7");

/* Audio creation  */

let audioPath  = document.querySelector("div#wrapper > div#piano-card > div#options"); 
const whiteSound = [
    "piano-sounds/A1.mp3",
    "piano-sounds/B1.mp3",
    "piano-sounds/C2.mp3",
    "piano-sounds/D2.mp3",
    "piano-sounds/E2.mp3",
    "piano-sounds/F2.mp3",
    "piano-sounds/G2.mp3",
    "piano-sounds/A2.mp3",
    "piano-sounds/B2.mp3",
    "piano-sounds/C3.mp3",
    "piano-sounds/D3.mp3",
    "piano-sounds/E3.mp3",
    "piano-sounds/F3.mp3",
    "piano-sounds/G3.mp3",
    "piano-sounds/A3.mp3",
    "piano-sounds/B3.mp3",
    "piano-sounds/C4.mp3",
    "piano-sounds/D4.mp3",
    "piano-sounds/E4.mp3",
    "piano-sounds/F4.mp3",
    "piano-sounds/G4.mp3",
    "piano-sounds/A4.mp3",
    "piano-sounds/B4.mp3",
    "piano-sounds/C5.mp3",
    "piano-sounds/D5.mp3",
    "piano-sounds/E5.mp3",
    "piano-sounds/F5.mp3",
    "piano-sounds/G5.mp3",
    "piano-sounds/A5.mp3",
    "piano-sounds/B5.mp3",
    "piano-sounds/C6.mp3",
    "piano-sounds/D6.mp3",
    "piano-sounds/E6.mp3",
    "piano-sounds/F6.mp3",
    "piano-sounds/G6.mp3",
    "piano-sounds/A6.mp3",
    "piano-sounds/B6.mp3",
    "piano-sounds/C7.mp3",
];

for(let k=0; k<61; k++) {

}

// Animation and sound

let a1 = document.querySelector("#A1");
let a1s = document.querySelector("#a1s");

document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
        playAudioAndAnimate(a1, a1s);
        console.log("Key 1 pressed");
    }
});

a1.addEventListener("click", function() {
    playAudioAndAnimate(a1, a1s);
    console.log("Mouse clicked");
});

function playAudioAndAnimate(element, audio) {
    audio.play();
    animateWhiteKey(element);
}

function animateWhiteKey(element) {
    element.style.animation = "whiteKeyAnimation 1s";
    element.addEventListener("animationend", function() {
        // Reset the animation after it ends
        element.style.animation = "";
    });
}
