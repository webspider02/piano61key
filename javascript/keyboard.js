let key;
const blackKeys = [];
const whiteKeys = [];
const path = document.querySelector("div#wrapper > div#piano-card > div#piano-keyboard"); 

// Creating white keys
for(let i=0; i<36; i++) {
    key = document.createElement("div");
    key.classList.add("white-key");
    //key.classList.add("key");
    whiteKeys[i] = key;
    path.appendChild(key);
}

// Black keys
for(let j=0; j<25; j++) {
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