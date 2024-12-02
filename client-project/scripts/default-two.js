//Previous button function
function prev (){
    //Gets the total to modify
    let advancedCount = parseInt(localStorage.getItem("advanced"));
    try {
        //Check if every value is not null
        document.querySelector('input[name="picture"]:checked').value;
        document.querySelector('input[name="with"]:checked').value;
        document.querySelector('input[name="consistent"]:checked').value;
        document.querySelector('input[name="negotiation"]:checked').value;
        document.querySelector('input[name="trust"]:checked').value;
        document.querySelector('input[name="project"]:checked').value;
        document.querySelector('input[name="goal"]:checked').value;
        document.querySelector('input[name="value"]:checked').value;
        document.querySelector('input[name="relationship"]:checked').value;

        //Reset the total to 0
        localStorage.setItem("advanced", 0);
        advancedCount=0;

        //If every parsing does not return an error add every value to the total count
        advancedCount+=parseInt(document.querySelector('input[name="picture"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="with"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="consistent"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="negotiation"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="trust"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="project"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="goal"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="value"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="relationship"]:checked').value);

        //Alert for debugging
        alert(advancedCount);

        //Store the total in local storage
        localStorage.setItem("advanced", advancedCount);

        //Navigate to the previous page
        window.location.href="forms.html";

    } catch (error){
        //If an error occurs, request form completion
        alert("Please answer all the questions");
        console.log(error.message);
    }
}

//Next button function
function next (){
    //Gets total to modify
    let advancedCount = parseInt(localStorage.getItem("advanced"));
    try {
        //Check if every value is not null
        document.querySelector('input[name="picture"]:checked').value;
        document.querySelector('input[name="with"]:checked').value;
        document.querySelector('input[name="consistent"]:checked').value;
        document.querySelector('input[name="negotiation"]:checked').value;
        document.querySelector('input[name="trust"]:checked').value;
        document.querySelector('input[name="project"]:checked').value;
        document.querySelector('input[name="goal"]:checked').value;
        document.querySelector('input[name="value"]:checked').value;
        document.querySelector('input[name="relationship"]:checked').value;

        //Reset the total to 0
        localStorage.setItem("advanced", 0);
        advancedCount=0;

        //If every parsing does not return an error add every value to the total count
        advancedCount+=parseInt(document.querySelector('input[name="picture"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="with"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="consistent"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="negotiation"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="trust"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="project"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="goal"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="value"]:checked').value);
        advancedCount+=parseInt(document.querySelector('input[name="relationship"]:checked').value);

        //Alert for debugging
        alert(advancedCount);

        //Store the total in local storage
        localStorage.setItem("advanced", advancedCount);

        //Navigate to the next page
        window.location.href="forms-three.html";

    } catch (error){
        //If an error occurs, request form completion
        alert("Please answer all the questions");
        console.log(error.message);
    }
}

//Event listener for previous button
document.getElementById("prev-page").addEventListener("click", prev);

//Event lisenter for next button
document.getElementById("next-page").addEventListener("click", next);

//Get every location where data needs to be imported
const placeToInclude = document.querySelectorAll("[data-include]");
//Loop for every element
placeToInclude.forEach( async (element) => {
    //Location path to element
    const dataLocation = element.getAttribute("data-include");
    //If location is found
    if (dataLocation){
        try {
            //Establish the data to be used
            const dataToInclude = await fetch(dataLocation);
            if (dataToInclude.ok){
                //If data is valid, then replace the elements content w/ the respective text
                const content = await dataToInclude.text();
                element.innerHTML = content;
            } else {
                //Error Handling
                console.error(error.content);
            }
        //Error Handling
        } catch (error){
            console.error(error.content);
        }
    }
});