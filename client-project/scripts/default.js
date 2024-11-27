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