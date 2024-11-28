//Next button function
function next (){
    //Gets the total to modify
    let teamCount = parseInt(localStorage.getItem("team"));
    try {
        //Check if each value is not null
        document.querySelector('input[name="awareness"]:checked').value;
        document.querySelector('input[name="team"]:checked').value;
        document.querySelector('input[name="follow"]:checked').value;
        document.querySelector('input[name="listen"]:checked').value;
        document.querySelector('input[name="report"]:checked').value;
        document.querySelector('input[name="priorities"]:checked').value;
        document.querySelector('input[name="help"]:checked').value;
        document.querySelector('input[name="resilience"]:checked').value;
        document.querySelector('input[name="relation"]:checked').value;
        //alert("Made it past");

        //The total is reset to 0
        localStorage.setItem("team", 0);
        teamCount=0;
        //If every parsing does not return an error add every value to the total count
        teamCount+=parseInt(document.querySelector('input[name="awareness"]:checked').value);
        teamCount+=parseInt(document.querySelector('input[name="team"]:checked').value);
        teamCount+=parseInt(document.querySelector('input[name="follow"]:checked').value);
        teamCount+=parseInt(document.querySelector('input[name="listen"]:checked').value);
        teamCount+=parseInt(document.querySelector('input[name="report"]:checked').value);
        teamCount+=parseInt(document.querySelector('input[name="priorities"]:checked').value);
        teamCount+=parseInt(document.querySelector('input[name="help"]:checked').value);
        teamCount+=parseInt(document.querySelector('input[name="resilience"]:checked').value);
        teamCount+=parseInt(document.querySelector('input[name="relation"]:checked').value);

        //Alert for debugging
        alert(teamCount);

        //Store the total in local storage
        localStorage.setItem("team", teamCount);

        //Navigate to the next page
        window.location.href="forms-two.html";

    } catch (error){
        //If an error occurs, request form completion
        alert("Please answer all the questions");
        console.log(error.message);
    }
    
}

//Event listener for the next button
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