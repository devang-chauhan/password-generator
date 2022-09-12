import { update, copy } from "./utils.js";


const pass1El = document.getElementById("pass-1");
const pass2El = document.getElementById("pass-2");
const btnEl = document.getElementById("button");
const copy1El = document.getElementById("copy-1");
const copy2El = document.getElementById("copy-2");

let pass1 = '';
let pass2 = '';

btnEl.addEventListener("click", () => {
    pass1 = update();
    pass2 = update();
    pass1El.textContent = pass1;
    pass2El.textContent = pass2;
});

copy1El.addEventListener("click", () => copy(pass1));
copy2El.addEventListener("click", () => copy(pass2));

