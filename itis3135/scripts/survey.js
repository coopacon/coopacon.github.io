let thisPage = window.location.href;
let numberOfFiles = 2;
function addField(){
    numberOfFiles++;

    
    const newDiv = document.createElement("div");

    const newEntry = document.createElement("input");
    newEntry.type = "text";
    newEntry.id = "file"+numberOfFiles;
    
    newDiv.appendChild(newEntry);
    
    document.getElementById("multipleFields").appendChild(newDiv);
    
}
function addField(){
    numberOfFiles++;

    
    const newDiv = document.createElement("div");

    const newEntry = document.createElement("input");
    newEntry.type = "text";
    newEntry.id = "file"+numberOfFiles;
    
    newDiv.appendChild(newEntry);
    
    document.getElementById("multipleFields").appendChild(newDiv);
    
}
alert("validation")
document.getElementById("html-validator").href = "https://validator.w3.org/check?uri=" + thisPage;
alert("validation 2")
document.getElementById("CSS-validator").href =  "https://jigsaw.w3.org/css-validator/validator?uri=" + thisPage;
alert("done with validation")
