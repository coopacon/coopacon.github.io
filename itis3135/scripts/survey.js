let thisPage = window.location.href;
let numberOfFiles = 0;

function preventSubmission(event){
    event.preventDefault();
}
function resetForm(){
    document.getElementById("sampleForm").reset();
}

function addField(){
    numberOfFiles++;

    
    const newDiv = document.createElement("div");

    const newEntry = document.createElement("input");
    newEntry.type = "text";
    newEntry.id = "file"+numberOfFiles;
    
    newDiv.appendChild(newEntry);
    
    document.getElementById("multiple-fields").appendChild(newDiv);
    
}

function deleteField(){
    
    document.getElementById("file"+numberOfFiles).remove();
    document.getElementById("div"+numberOfFiles).remove();

    numberOfFiles--;
    
}



function hideForm(){

    document.getElementById("sample-form").style.display = "none";
    document.getElementById("form-prompt").style.display = "none";

    document.getElementById("custom-intro").style.display = "block";

    let userName =  document.getElementById("name").value;
    document.getElementById("name-display").textContent = userName;

    let animal =  document.getElementById("mascot").value;
    document.getElementById("mascot-display").textContent = "My mascot is "+animal;

    
    let caption = document.getElementById("caption").value;
    document.getElementById('caption-display').textContent = "*"+caption+"*";

    let personal =  document.getElementById("personal").value;
    document.getElementById("personal-display").innerHTML = "<b>Personal Background: </b>"+personal;

    let professional =  document.getElementById("professional").value;
    document.getElementById("professional-display").innerHTML = "<b>Professional Background: </b>"+professional;

    let academic =  document.getElementById("academic").value;
    document.getElementById("academic-display").innerHTML = "<b>Academic Background: </b>"+academic;

    let developement = document.getElementById("developement").value;
    document.getElementById("developement-display").innerHTML = "<b>Web developement Background: </b>"+developement;

    let computer =  document.getElementById("computer").value;
    document.getElementById("computer-display").innerHTML = "<b>Computer OS: </b>"+computer;

    
    //<input type="text" id="courses" value="2122" required></input>
    const coursesDiv =  document.getElementById("courses-display");
    coursesDiv.innerHTML = "";
    for (let i=1;i<=numberOfFiles;i++) {
        const field = document.getElementById("file"+i);
        if (field) {
            //alert("field"+i);
            const fieldValue = field.value;
            const fieldDisplay = document.createElement("p");
            fieldDisplay.innerHTML = `<b>Course ${i}: </b>${fieldValue}`;
            coursesDiv.appendChild(fieldDisplay);
        }
    }

    if (document.getElementById("funny").value!==""&&document.getElementById("funny").value!==null) {
        document.getElementById("funny-display").innerHTML = "<b>Funny thing: </b>"+document.getElementById("funny").value;
    }
    if (document.getElementById("else").value!==""&&document.getElementById("else").value!==null) {
        document.getElementById("else-display").innerHTML = "<b>Something else: </b>"+document.getElementById("else").value;
    }
   //}
}

function reload(){
    location.reload(); return false;
}

document.getElementById("sample-form").addEventListener("submit", function(event){
    event.preventDefault();
    if (this.checkValidity) {
        hideForm();
    } else {
        //This is a harsh joke
        alert("You did it wrong. Enter all required fields.");
    }
});


document.getElementById("picture").addEventListener("change", function(event){
    
    const theFile = event.target.files[0];
    
    if (theFile) {
        
        const reader = new FileReader();

        reader.onload = function(e) {
            const preview = document.getElementById("preview");
            const pictureDisplay = document.getElementById("picture-display");
            preview.src = e.target.result;
            preview.style.display = "block";
            pictureDisplay.src = e.target.result;
            pictureDisplay.style.display = "block";
        };

        reader.readAsDataURL(theFile);

    }

});



let j = document.getElementById("html-validator");
let k = document.getElementById("html-validator").href;
document.getElementById("html-validator").href = "https://validator.w3.org/check?uri=" + "thisPage";
document.getElementById("CSS-validator").href =  "https://jigsaw.w3.org/css-validator/validator?uri=" + thisPage;


document.getElementById("add-class").addEventListener("click", addField);
document.getElementById("delete-class").addEventListener("click", deleteField);
document.getElementById("reload").addEventListener("click", reload);



