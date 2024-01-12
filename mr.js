

let meva = [];

while (true) {
    let javob = prompt( "meva kiriting");
    
    if (javob === 'stop') {
        break;
    } else if (meva.indexOf(javob) !== -1) {
        alert("Siz bu mevani kiritgansiz");
        break;
    } else {
        meva.push(javob);
    }
}

console.log(meva); 
