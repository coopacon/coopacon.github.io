//Previous button function
function prev() {
    //Gets the total to modify
    let managerCount = parseInt(localStorage.getItem("manager"));
    try {
        //Check if every value is not null
        document.querySelector('input[name="delegation"]:checked').value;
        document.querySelector('input[name="dynamics"]:checked').value;
        document.querySelector('input[name="negotiation"]:checked').value;
        document.querySelector('input[name="accountability"]:checked').value;
        document.querySelector('input[name="trust"]:checked').value;
        document.querySelector('input[name="future"]:checked').value;
        document.querySelector('input[name="recruiting"]:checked').value;
        document.querySelector('input[name="meetings"]:checked').value;
        document.querySelector('input[name="finance"]:checked').value;

        //Reset the total to 0
        localStorage.setItem("manager", 0);
        managerCount=0;

        //If every parsing does not return an error add every value to the total count
        managerCount += parseInt(document.querySelector('input[name="delegation"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="dynamics"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="negotiation"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="accountability"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="trust"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="future"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="recruiting"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="meetings"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="finance"]:checked').value);

        //Alert for debugging
        // alert(managerCount);

        //Store the total in local storage
        localStorage.setItem("manager", managerCount);

        //Navigate to the previous page
        window.location.href = "forms-two.html";

    } catch (error) {
        //If an error occurs, request form completion
        alert("Please answer all the questions");
        console.log(error.message);
    }
}

//Next button function
function next() {
    //Gets total to modify
    let managerCount = parseInt(localStorage.getItem("manager"));
    try {
        //Check if every value is not null
        document.querySelector('input[name="delegation"]:checked').value;
        document.querySelector('input[name="dynamics"]:checked').value;
        document.querySelector('input[name="negotiation"]:checked').value;
        document.querySelector('input[name="accountability"]:checked').value;
        document.querySelector('input[name="trust"]:checked').value;
        document.querySelector('input[name="future"]:checked').value;
        document.querySelector('input[name="recruiting"]:checked').value;
        document.querySelector('input[name="meetings"]:checked').value;
        document.querySelector('input[name="finance"]:checked').value;

        //Reset the total to 0
        localStorage.setItem("manager", 0);
        managerCount=0;

        //If every parsing does not return an error add every value to the total count
        managerCount += parseInt(document.querySelector('input[name="delegation"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="dynamics"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="negotiation"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="accountability"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="trust"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="future"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="recruiting"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="meetings"]:checked').value);
        managerCount += parseInt(document.querySelector('input[name="finance"]:checked').value);

        //Alert for debugging
        alert(managerCount);

        //Store the total in local storage
        localStorage.setItem("manager", managerCount);

        //Navigate to the next page
        window.location.href = "forms-four.html";

    } catch (error) {
        //If an error occurs, request form completion
        alert("Please answer all the questions");
        console.log(error.message);
    }
}

//Event listener for previous button
document.getElementById("prev-page").addEventListener("click", prev);

//Event listener for next button
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