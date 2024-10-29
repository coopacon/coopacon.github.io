let thisPage = window.location.href;
document.getElementById("html-validator").href = "https://validator.w3.org/check?uri=" + thisPage;
document.getElementById("CSS-validator").href =  "https://jigsaw.w3.org/css-validator/validator?uri=" + thisPage;

let numberOfFiles = 2;
function addField(){
    numberOfFiles++;

    alert("adding field");
    //const newDiv = document.createElement("div");
    const newEntry = document.createElement("input");
    newEntry.type = "text";
    newEntry.id = "file"+numberOfFiles;

    newDiv.appendChild(newEntry);

    document.getElementById("multipleFields").appendChild
}