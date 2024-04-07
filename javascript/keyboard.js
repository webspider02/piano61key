let key;
const blackKeys = [];
const whiteKeys = [];
const path = document.querySelector("div#wrapper > div#piano-card > div#piano-keyboard"); 

// Creating white keys
for(let i=0; i<=36; i++) {
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