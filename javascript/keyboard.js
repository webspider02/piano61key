let key;
const path = document.querySelector("div#wrapper > div#piano-card > div#piano-keyboard"); 

// Creating white keys
for(let i=0; i<36; i++) {
    key = document.createElement("div");
    key.classList.add("white-key");
    //key.classList.add("key");
    path.appendChild(key);
}

// Black keys
for(let j=0; j<25; j++) {
    key = document.createElement("div");
    key.classList.add("black-key");
    path.appendChild(key);
}