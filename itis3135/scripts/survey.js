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
    
    document.getElementById("multipleFields").appendChild(newDiv);
    
}

function deleteField(){
    
    document.getElementById("file"+numberOfFiles).remove();
    document.getElementById("div"+numberOfFiles).remove();

    numberOfFiles--;
    
}



function hideForm(){

    document.getElementById("sampleForm").style.display = "none";
    document.getElementById("formPrompt").style.display = "none";

    document.getElementById("customIntro").style.display = "block";

    let userName =  document.getElementById("name").value;
    document.getElementById("nameDisplay").textContent = userName;

    let animal =  document.getElementById("mascot").value;
    document.getElementById("mascotDisplay").textContent = "My mascot is "+animal;

    
    let caption = document.getElementById("caption").value;
    document.getElementById('captionDisplay').textContent = "*"+caption+"*";

    let personal =  document.getElementById("personal").value;
    document.getElementById("personalDisplay").innerHTML = "<b>Personal Background: </b>"+personal;

    let professional =  document.getElementById("professional").value;
    document.getElementById("professionalDisplay").innerHTML = "<b>Professional Background: </b>"+professional;

    let academic =  document.getElementById("academic").value;
    document.getElementById("academicDisplay").innerHTML = "<b>Academic Background: </b>"+academic;

    let developement = document.getElementById("developement").value;
    document.getElementById("developementDisplay").innerHTML = "<b>Web developement Background: </b>"+developement;

    let computer =  document.getElementById("computer").value;
    document.getElementById("computerDisplay").innerHTML = "<b>Computer OS: </b>"+computer;

    
    //<input type="text" id="courses" value="2122" required></input>
    const coursesDiv =  document.getElementById("coursesDisplay");
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
        document.getElementById("funnyDisplay").innerHTML = "<b>Funny thing: </b>"+document.getElementById("funny").value;
    }
    if (document.getElementById("else").value!==""&&document.getElementById("else").value!==null) {
        document.getElementById("elseDisplay").innerHTML = "<b>Something else: </b>"+document.getElementById("else").value;
    }
   //}
}
document.getElementById("sampleForm").addEventListener("submit", function(event){
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
            const pictureDisplay = document.getElementById("pictureDisplay");
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


