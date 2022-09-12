import characters from "./characters.js";

function update() {
    let pass = '';
    for (let i = 0; i < 15; i++){
        const num = Math.floor(Math.random() * 91);
        pass += characters[num];
    }
    return pass;
}



function copy(pass) {
    if (pass) {
        navigator.clipboard.writeText(pass);
        alert(`Copied ${pass} to clipboard`);
    } else {
        alert("Generate passwords first");
    }
}

export { update, copy };


